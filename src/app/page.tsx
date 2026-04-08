"use client";

import { useState } from "react";
import { BookOpen, MessageCircle, ArrowLeftRight } from "lucide-react";
import { ManualViewer } from "@/components/manual/ManualViewer";
import { ChatPanel } from "@/components/chat/ChatPanel";
import { KARITORUCHAT_SECTIONS } from "@/lib/karitoruchat-sections";
import { MAJIRIPI_SECTIONS } from "@/lib/majiripi-sections";

type View = "manual" | "chat";
type Product = "karitoruchat" | "majiripi";

const PRODUCTS = {
  karitoruchat: {
    name: "カリトルチャット",
    subtitle: "EC向け LINE成果報酬型サービス",
    sections: KARITORUCHAT_SECTIONS,
  },
  majiripi: {
    name: "マジリピ",
    subtitle: "飲食店向け LINEリピーター獲得ツール",
    sections: MAJIRIPI_SECTIONS,
  },
} as const;

export default function Home() {
  const [view, setView] = useState<View>("manual");
  const [product, setProduct] = useState<Product>("karitoruchat");

  const currentProduct = PRODUCTS[product];

  return (
    <div className="flex h-screen flex-col bg-surface" data-product={product}>
      {/* Header */}
      <header className="flex items-center justify-between border-b-2 border-primary-400 bg-primary-600 px-4 py-2.5">
        <div className="flex items-center gap-4">
          {/* Product Switcher */}
          <div className="flex items-center rounded-lg bg-white/10 p-0.5">
            <button
              onClick={() => setProduct("karitoruchat")}
              className={`rounded-md px-3 py-1.5 text-xs font-bold transition-colors ${
                product === "karitoruchat"
                  ? "bg-white text-primary-600"
                  : "text-white/80 hover:text-white"
              }`}
            >
              カリトルチャット
            </button>
            <button
              onClick={() => setProduct("majiripi")}
              className={`rounded-md px-3 py-1.5 text-xs font-bold transition-colors ${
                product === "majiripi"
                  ? "bg-white text-primary-600"
                  : "text-white/80 hover:text-white"
              }`}
            >
              マジリピ
            </button>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-sm font-bold text-white">{currentProduct.name} 電話営業マニュアル</h1>
            <p className="text-xs text-white/60">{currentProduct.subtitle} ― 株式会社DOTZ</p>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex rounded-lg bg-white/10 p-0.5">
          <button
            onClick={() => setView("manual")}
            className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
              view === "manual"
                ? "bg-white text-primary-600"
                : "text-white/80 hover:text-white"
            }`}
          >
            <BookOpen size={14} />
            マニュアル
          </button>
          <button
            onClick={() => setView("chat")}
            className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
              view === "chat"
                ? "bg-white text-primary-600"
                : "text-white/80 hover:text-white"
            }`}
          >
            <MessageCircle size={14} />
            AIに質問
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-hidden">
        {view === "manual" ? (
          <ManualViewer sections={currentProduct.sections} key={product} />
        ) : (
          <ChatPanel product={product} key={`chat-${product}`} />
        )}
      </main>
    </div>
  );
}
