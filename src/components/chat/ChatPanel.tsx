"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useEffect, useRef, useMemo, useState } from "react";
import { Bot } from "lucide-react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";

const KARITORUCHAT_SUGGESTIONS = [
  "カリトルチャットの強みを30秒で説明するには？",
  "「予算がない」と言われた時の切り返しは？",
  "EC事業部への受付突破フレーズを教えて",
  "洋服の青山の導入事例を詳しく教えて",
];

const MAJIRIPI_SUGGESTIONS = [
  "マジリピの強みを30秒で説明するには？",
  "「うちは小さい店だから」と言われた時の切り返しは？",
  "飲食店オーナーへのオープニングトークを教えて",
  "春水堂の導入事例を詳しく教えて",
];

const RAKURAKUMALL_SUGGESTIONS = [
  "らくらくモールの強みを30秒で説明するには？",
  "「すでにLINE運用してます」と言われた時の切り返しは？",
  "楽天市場の出店者へのオープニングトークを教えて",
  "セール運用BPOのメリットを詳しく教えて",
];

export function ChatPanel({ product }: { product: "karitoruchat" | "majiripi" | "rakurakumall" }) {
  const storageKey = `dotz-chat-${product}`;
  const suggestions =
    product === "karitoruchat" ? KARITORUCHAT_SUGGESTIONS :
    product === "majiripi" ? MAJIRIPI_SUGGESTIONS :
    RAKURAKUMALL_SUGGESTIONS;
  const productName =
    product === "karitoruchat" ? "カリトルチャット" :
    product === "majiripi" ? "マジリピ" :
    "らくらくモール";

  const transport = useMemo(
    () => new DefaultChatTransport({ body: { product } }),
    [product]
  );

  const { messages, sendMessage, status, setMessages } = useChat({
    transport,
  });
  const [input, setInput] = useState("");
  const [loaded, setLoaded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isLoading = status === "streaming" || status === "submitted";

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch {}
    }
    setLoaded(true);
  }, [setMessages, storageKey]);

  useEffect(() => {
    if (loaded && messages.length > 0 && status === "ready") {
      localStorage.setItem(storageKey, JSON.stringify(messages));
    }
  }, [messages, status, loaded, storageKey]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input });
    setInput("");
  };

  const handleSuggestionClick = (suggestion: string) => {
    if (isLoading) return;
    sendMessage({ text: suggestion });
  };

  const handleClear = () => {
    localStorage.removeItem(storageKey);
    setMessages([]);
  };

  if (!loaded) return null;

  return (
    <div className="flex h-full flex-col">
      {/* Chat Header */}
      <div className="flex items-center justify-between border-b border-border bg-primary-600 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
            <Bot size={18} className="text-white" />
          </div>
          <div>
            <p className="text-sm font-bold text-white">{productName} 営業AI</p>
            <p className="text-xs text-white/60">営業の質問に即回答します</p>
          </div>
        </div>
        {messages.length > 0 && (
          <button
            onClick={handleClear}
            className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            履歴クリア
          </button>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto bg-surface-alt">
        {messages.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center px-4">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-600">
              <Bot size={28} className="text-white" />
            </div>
            <h2 className="mb-2 text-base font-bold text-text-primary">
              {productName} 営業AIアシスタント
            </h2>
            <p className="mb-4 max-w-sm text-center text-sm text-text-secondary">
              トークスクリプトや切り返し方法について何でも聞いてください。マニュアルに基づいてお答えします。
            </p>
          </div>
        ) : (
          <div className="mx-auto max-w-2xl space-y-4 px-4 py-6">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isLoading && messages[messages.length - 1]?.role === "user" && (
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                  <Bot size={16} />
                </div>
                <div className="rounded-2xl bg-surface border border-border px-4 py-3">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-text-muted" style={{ animationDelay: "0ms" }} />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-text-muted" style={{ animationDelay: "150ms" }} />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-text-muted" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input */}
      <ChatInput
        input={input}
        onInputChange={setInput}
        onSubmit={handleSubmit}
        onSuggestionClick={handleSuggestionClick}
        showSuggestions={messages.length === 0}
        isLoading={isLoading}
        suggestions={suggestions}
        placeholder={`${productName}の営業について質問してください...`}
      />
    </div>
  );
}
