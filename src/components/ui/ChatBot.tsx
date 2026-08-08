"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getBotResponse } from "@/lib/chatbot/engine";
import type { BotMessage, QuickReply } from "@/lib/chatbot/data";
import { CHAT_OPEN_CHANGE_EVENT } from "@/components/ui/floating-events";

// ─── Types ────────────────────────────────────────────────────────────────────

type Role = "bot" | "user";

type Message = {
  id: number;
  role: Role;
  text: string;
  action?: BotMessage["action"];
  quickReplies?: QuickReply[];
  /** Whether this message is still being "typed" */
  typing?: boolean;
};

// ─── Constants ────────────────────────────────────────────────────────────────

const TYPING_DELAY_MS = 700;
const GREETING_TRIGGER = "hi";

let idCounter = 0;
const nextId = () => ++idCounter;

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Render **bold** markdown text into <strong> spans */
function renderText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

/** Split on newlines and render each line */
function MessageContent({ text }: { text: string }) {
  return (
    <span>
      {text.split("\n").map((line, i, arr) => (
        <span key={i}>
          {renderText(line)}
          {i < arr.length - 1 && <br />}
        </span>
      ))}
    </span>
  );
}

// ─── Typing indicator ─────────────────────────────────────────────────────────

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-1 py-0.5">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="block h-2 w-2 rounded-full bg-primary/60 animate-bounce"
          style={{ animationDelay: `${i * 0.15}s`, animationDuration: "0.8s" }}
        />
      ))}
    </div>
  );
}

// ─── Chat toggle button ───────────────────────────────────────────────────────

interface ToggleButtonProps {
  isOpen: boolean;
  hasUnread: boolean;
  onClick: () => void;
}

function ToggleButton({ isOpen, hasUnread, onClick }: ToggleButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? "Close chat" : "Open chat assistant"}
      className={cn(
        "relative flex h-14 w-14 items-center justify-center rounded-full",
        "bg-primary-darker text-white shadow-lg shadow-black/25",
        "transition-all duration-300 hover:scale-110 hover:bg-primary-dark",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50",
        isOpen && "rotate-0"
      )}
    >
      {/* Unread badge */}
      {hasUnread && !isOpen && (
        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[9px] font-bold text-white">
          1
        </span>
      )}

      {/* Icon — morphs between chat and close */}
      <span
        className={cn(
          "absolute transition-all duration-300",
          isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-75"
        )}
      >
        {/* Close X */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
          className="h-6 w-6">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </span>

      <span
        className={cn(
          "absolute transition-all duration-300",
          isOpen ? "opacity-0 -rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
        )}
      >
        {/* Chat bubble icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
          className="h-6 w-6">
          <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
          <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
        </svg>
      </span>
    </button>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const hasGreetedRef = useRef(false);

  // ── Auto-scroll ────────────────────────────────────────────────────────────
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  // ── Focus input when opened ────────────────────────────────────────────────
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  // Sync chat open state with the other floating contact controls.
  useEffect(() => {
    window.dispatchEvent(new CustomEvent(CHAT_OPEN_CHANGE_EVENT, { detail: isOpen }));

    return () => {
      window.dispatchEvent(new CustomEvent(CHAT_OPEN_CHANGE_EVENT, { detail: false }));
    };
  }, [isOpen]);

  // ── Core: trigger bot reply ────────────────────────────────────────────────
  const triggerBotReply = useCallback((userText: string) => {
    setIsTyping(true);

    setTimeout(() => {
      const { text, action, quickReplies } = getBotResponse(userText);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: nextId(), role: "bot", text, action, quickReplies },
      ]);
    }, TYPING_DELAY_MS);
  }, []);

  // ── Send user message ──────────────────────────────────────────────────────
  const sendMessage = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isTyping) return;

      setMessages((prev) => [
        ...prev,
        { id: nextId(), role: "user", text: trimmed },
      ]);
      setInput("");
      triggerBotReply(trimmed);
    },
    [isTyping, triggerBotReply]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleQuickReply = (value: string) => {
    sendMessage(value);
  };

  const openChat = useCallback(() => {
    setIsOpen(true);
    setHasUnread(false);

    if (!hasGreetedRef.current) {
      hasGreetedRef.current = true;
      triggerBotReply(GREETING_TRIGGER);
    }
  }, [triggerBotReply]);

  const closeChat = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleToggle = () => {
    if (isOpen) {
      closeChat();
      return;
    }

    openChat();
  };

  // ─── Render ────────────────────────────────────────────────────────────────
  return (
    <div
      className={cn(
        "fixed right-4 z-[120] flex flex-col items-end gap-3 transition-all duration-300 sm:right-6",
        isOpen ? "bottom-4 sm:bottom-6" : "bottom-24"
      )}
    >
      {/* ── Chat window ──────────────────────────────────────────────────────── */}
      <div
        role="dialog"
        aria-label="BIWS Chat Assistant"
        aria-modal="true"
        className={cn(
          // Layout
          "flex flex-col w-[22rem] max-w-[calc(100vw-2rem)]",
          "rounded-2xl overflow-hidden",
          // Style
          "bg-white shadow-2xl shadow-black/20 border border-border",
          // Animation
          "transition-all duration-300 origin-bottom-right",
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
            : "opacity-0 scale-95 pointer-events-none translate-y-4"
        )}
        style={{ maxHeight: "min(28rem, calc(100dvh - 14rem))" }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 bg-primary-darker text-white shrink-0">
          {/* Avatar */}
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white">
              <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold leading-tight">BIWS Assistant</p>
            <p className="text-[11px] text-white/70 flex items-center gap-1">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
              Online — here to help
            </p>
          </div>
          <button
            onClick={handleToggle}
            aria-label="Close chat"
            className="flex h-7 w-7 items-center justify-center rounded-full text-white/70 hover:bg-white/20 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
              className="h-4 w-4">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div
          className="flex-1 overflow-y-auto px-3 py-4 space-y-3 min-h-0"
          style={{ maxHeight: "360px" }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "flex flex-col gap-1",
                msg.role === "user" ? "items-end" : "items-start"
              )}
            >
              {/* Bubble */}
              <div
                className={cn(
                  "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                  msg.role === "user"
                    ? "bg-primary text-white rounded-br-sm"
                    : "bg-card text-foreground rounded-bl-sm border border-border"
                )}
              >
                <MessageContent text={msg.text} />
              </div>

              {/* Action button */}
              {msg.action && (
                <Link
                  href={msg.action.href}
                  target={msg.action.href.startsWith("http") ? "_blank" : undefined}
                  rel={msg.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  onClick={closeChat}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-primary px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  {msg.action.label}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
                    className="h-3 w-3">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              )}

              {/* Quick replies */}
              {msg.quickReplies && msg.quickReplies.length > 0 && (
                <div className="flex flex-wrap gap-1.5 max-w-[90%]">
                  {msg.quickReplies.map((qr) => (
                    <button
                      key={qr.value}
                      onClick={() => handleQuickReply(qr.value)}
                      disabled={isTyping}
                      className="rounded-full border border-primary/40 bg-primary/5 px-3 py-1 text-xs font-medium text-primary hover:bg-primary hover:text-white hover:border-primary disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                      {qr.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex items-start">
              <div className="rounded-2xl rounded-bl-sm bg-card border border-border px-3.5 py-2.5">
                <TypingIndicator />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 border-t border-border bg-white px-3 py-2.5 shrink-0"
        >
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message…"
            disabled={isTyping}
            aria-label="Chat message input"
            className={cn(
              "flex-1 rounded-xl bg-card border border-border px-3 py-2 text-sm",
              "placeholder:text-muted-light outline-none",
              "focus:border-primary focus:ring-2 focus:ring-primary/20",
              "disabled:opacity-50 transition-colors"
            )}
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            aria-label="Send message"
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl",
              "bg-primary text-white transition-all",
              "hover:bg-primary-dark active:scale-95",
              "disabled:opacity-40 disabled:cursor-not-allowed"
            )}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              className="h-4 w-4">
              <path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405Z" />
            </svg>
          </button>
        </form>

        {/* Footer branding */}
        <div className="flex items-center justify-center gap-1 border-t border-border bg-card px-3 py-1.5 shrink-0">
          <span className="text-[10px] text-muted-light">Powered by</span>
          <span className="text-[10px] font-semibold text-primary">BIWS</span>
        </div>
      </div>

      {/* ── Toggle button ──────────────────────────────────────────────────────── */}
      <ToggleButton
        isOpen={isOpen}
        hasUnread={hasUnread}
        onClick={handleToggle}
      />
    </div>
  );
}
