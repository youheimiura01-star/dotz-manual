"use client";

import { Send, MessageSquare } from "lucide-react";

type ChatInputProps = {
  input: string;
  onInputChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onSuggestionClick: (suggestion: string) => void;
  showSuggestions: boolean;
  isLoading: boolean;
  suggestions: string[];
  placeholder: string;
};

export function ChatInput({
  input,
  onInputChange,
  onSubmit,
  onSuggestionClick,
  showSuggestions,
  isLoading,
  suggestions,
  placeholder,
}: ChatInputProps) {
  return (
    <div className="border-t border-border bg-surface">
      {showSuggestions && (
        <div className="px-4 pt-4 pb-2">
          <p className="mb-2 text-xs text-text-muted">よくある質問</p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => onSuggestionClick(suggestion)}
                className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-text-primary transition-colors hover:bg-primary-50 hover:border-primary-300"
              >
                <MessageSquare size={12} className="mr-1 inline-block" />
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}
      <form onSubmit={onSubmit} className="flex items-center gap-2 p-4">
        <input
          type="text"
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 rounded-full border border-border bg-surface-alt px-4 py-2.5 text-sm text-text-primary placeholder-text-muted outline-none transition-colors focus:border-primary-500 focus:bg-surface"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white transition-opacity hover:opacity-90 disabled:opacity-40"
        >
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}
