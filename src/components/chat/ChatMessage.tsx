"use client";

import { useState, useCallback } from "react";
import { Bot, User, Volume2, VolumeX } from "lucide-react";

type MessagePart = {
  type: string;
  text?: string;
};

type Message = {
  id: string;
  role: string;
  parts: MessagePart[];
};

function getMessageText(parts: MessagePart[]): string {
  return parts
    .filter((p) => p.type === "text" && p.text)
    .map((p) => p.text!)
    .join("\n");
}

function formatMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/^\d+\.\s/gm, (match) => `<br/>${match}`)
    .replace(/^- /gm, "<br/>・")
    .replace(/^<br\/>/, "");
}

export function ChatMessage({ message }: { message: Message }) {
  const isUser = message.role === "user";
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = useCallback(() => {
    if (isSpeaking) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const text = getMessageText(message.parts);
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    utterance.rate = 1.1;

    const voices = speechSynthesis.getVoices();
    const jaVoice =
      voices.find((v) => v.lang.startsWith("ja") && v.localService) ||
      voices.find((v) => v.lang.startsWith("ja"));
    if (jaVoice) utterance.voice = jaVoice;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  }, [message.parts, isSpeaking]);

  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : ""}`}>
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
          isUser
            ? "bg-primary-600 text-white"
            : "bg-primary-100 text-primary-700"
        }`}
      >
        {isUser ? <User size={16} /> : <Bot size={16} />}
      </div>
      <div className={`max-w-[80%] ${isUser ? "" : "group"}`}>
        <div
          className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
            isUser
              ? "bg-primary-600 text-white"
              : "bg-surface text-text-primary border border-border"
          }`}
        >
          {message.parts.map((part, i) => {
            if (part.type === "text" && part.text) {
              return isUser ? (
                <div key={`${message.id}-${i}`} className="whitespace-pre-wrap">
                  {part.text}
                </div>
              ) : (
                <div
                  key={`${message.id}-${i}`}
                  className="whitespace-pre-wrap [&_strong]:font-semibold"
                  dangerouslySetInnerHTML={{ __html: formatMarkdown(part.text) }}
                />
              );
            }
            return null;
          })}
        </div>
        {!isUser && (
          <button
            onClick={handleSpeak}
            className={`mt-1 flex items-center gap-1 rounded-full px-2 py-0.5 text-xs transition-colors ${
              isSpeaking
                ? "text-primary-600 bg-primary-100"
                : "text-text-muted hover:text-primary-600 hover:bg-primary-100"
            }`}
          >
            {isSpeaking ? <VolumeX size={12} /> : <Volume2 size={12} />}
            {isSpeaking ? "停止" : "読み上げ"}
          </button>
        )}
      </div>
    </div>
  );
}
