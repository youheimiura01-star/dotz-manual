"use client";

import { useState, useRef, useEffect } from "react";
import {
  Compass,
  Zap,
  Target,
  MessageSquare,
  Shield,
  BarChart3,
  BookOpen,
} from "lucide-react";
import type { ManualSection } from "@/lib/karitoruchat-sections";

const TAB_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass,
  Zap,
  Target,
  MessageSquare,
  Shield,
  BarChart3,
  BookOpen,
};

export function ManualViewer({ sections }: { sections: ManualSection[] }) {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTocId, setActiveTocId] = useState<string>("");
  const contentRef = useRef<HTMLDivElement>(null);

  const currentSection = sections[activeTab];

  // Extract h3 headings for TOC
  const tocItems = extractHeadings(currentSection.content);

  // Scroll spy for TOC highlighting
  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;

    const handleScroll = () => {
      const headings = container.querySelectorAll("h3[id]");
      let current = "";
      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 120) {
          current = heading.id;
        }
      });
      setActiveTocId(current);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [activeTab]);

  // Reset scroll on tab change
  useEffect(() => {
    contentRef.current?.scrollTo(0, 0);
    setActiveTocId("");
  }, [activeTab]);

  // Cross-tab navigation for scene guide links
  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;

    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest(".scene-link");
      if (!link) return;
      e.preventDefault();

      const tabId = link.getAttribute("data-tab");
      const headingStr = link.getAttribute("data-heading");

      const tabIndex = sections.findIndex((s) => s.id === tabId);
      if (tabIndex === -1) return;

      setActiveTab(tabIndex);

      if (headingStr !== null) {
        setTimeout(() => {
          const el = contentRef.current?.querySelector(
            `#heading-${headingStr}`
          );
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 150);
      }
    };

    container.addEventListener("click", handleClick);
    return () => container.removeEventListener("click", handleClick);
  }, [sections]);

  const scrollToHeading = (id: string) => {
    const el = contentRef.current?.querySelector(`#${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex h-full flex-col">
      {/* Tab Navigation */}
      <div className="border-b border-border bg-surface overflow-x-auto">
        <div className="flex min-w-max">
          {sections.map((section, i) => {
            const Icon = TAB_ICONS[section.icon] || BookOpen;
            return (
              <button
                key={section.id}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  i === activeTab
                    ? "border-primary-600 text-primary-600 bg-primary-50/50"
                    : "border-transparent text-text-secondary hover:text-primary-600 hover:bg-primary-50/30"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{section.title}</span>
                <span className="sm:hidden">{section.title.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* TOC Sidebar - hidden on mobile */}
        <aside className="hidden lg:block w-64 shrink-0 border-r border-border bg-surface overflow-y-auto p-4">
          <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
            目次
          </p>
          <nav className="space-y-1">
            {tocItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToHeading(item.id)}
                className={`block w-full text-left text-sm px-3 py-1.5 rounded-md transition-colors ${
                  activeTocId === item.id
                    ? "bg-primary-50 text-primary-600 font-medium"
                    : "text-text-secondary hover:bg-primary-50/50 hover:text-primary-600"
                }`}
              >
                {item.text}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div
          ref={contentRef}
          className="flex-1 overflow-y-auto p-6 sm:p-8"
        >
          <div
            className="manual-content max-w-3xl mx-auto prose prose-sm"
            dangerouslySetInnerHTML={{ __html: addIdsToHeadings(currentSection.content) }}
          />
        </div>
      </div>
    </div>
  );
}

function extractHeadings(html: string): { id: string; text: string }[] {
  const regex = /<h3[^>]*>(.*?)<\/h3>/gi;
  const items: { id: string; text: string }[] = [];
  let match;
  let index = 0;
  while ((match = regex.exec(html)) !== null) {
    const text = match[1].replace(/<[^>]+>/g, "");
    items.push({ id: `heading-${index}`, text });
    index++;
  }
  return items;
}

function addIdsToHeadings(html: string): string {
  let index = 0;
  return html.replace(/<h3([^>]*)>/gi, () => {
    const id = `heading-${index}`;
    index++;
    return `<h3 id="${id}">`;
  });
}
