import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { Search, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  buildSearchIndex,
  filterSearchItems,
  scrollToSearchTarget,
  type SearchItem,
} from "@/lib/siteSearch";

export default function SiteSearch({ className = "" }: { className?: string }) {
  const { lang, ui } = useLanguage();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const index = useMemo(
    () =>
      buildSearchIndex(lang, {
        about: ui.nav.about,
        skills: ui.nav.skills,
        experience: ui.nav.experience,
        projects: ui.nav.projects,
        customApps: ui.sections.customApps,
        wordpressApps: ui.sections.wordpressApps,
        certifications: ui.nav.certifications,
        education: ui.nav.education,
      }),
    [lang, ui]
  );

  const results = useMemo(() => filterSearchItems(index, query).slice(0, 40), [index, query]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  useEffect(() => {
    const active = listRef.current?.querySelector<HTMLElement>('[data-active="true"]');
    active?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  const goTo = (item: SearchItem) => {
    scrollToSearchTarget(item.id);
    setQuery("");
    setOpen(false);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!open && (event.key === "ArrowDown" || event.key === "Enter")) {
      setOpen(true);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, Math.max(results.length - 1, 0)));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    } else if (event.key === "Enter" && results[activeIndex]) {
      event.preventDefault();
      goTo(results[activeIndex]);
    } else if (event.key === "Escape") {
      setOpen(false);
      setQuery("");
    }
  };

  return (
    <div ref={rootRef} className={`relative w-full max-w-md ${className}`}>
      <label className="relative block">
        <span className="sr-only">{ui.search.label}</span>
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder={ui.search.placeholder}
          className="w-full rounded-md border border-gray-200 bg-white py-2 pl-9 pr-9 text-sm text-foreground shadow-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
          autoComplete="off"
        />
        {query ? (
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-gray-400 hover:text-foreground"
            onClick={() => {
              setQuery("");
              setOpen(false);
            }}
            aria-label={ui.search.clear}
          >
            <X className="h-4 w-4" />
          </button>
        ) : null}
      </label>

      {open && query.trim() ? (
        <ul
          ref={listRef}
          className="absolute z-50 mt-2 max-h-72 w-full overflow-y-auto rounded-md border border-gray-200 bg-white py-1 shadow-lg"
          role="listbox"
        >
          {results.length === 0 ? (
            <li className="px-3 py-3 text-sm text-gray-500">{ui.search.noResults}</li>
          ) : (
            results.map((item, index) => (
              <li key={`${item.id}-${index}`} role="option" aria-selected={index === activeIndex}>
                <button
                  type="button"
                  data-active={index === activeIndex ? "true" : "false"}
                  className={`flex w-full flex-col items-start gap-0.5 px-3 py-2 text-left transition-colors ${
                    index === activeIndex ? "bg-blue-50 text-primary" : "hover:bg-gray-50"
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => goTo(item)}
                >
                  <span className="text-sm font-medium">{item.title}</span>
                  <span className="text-xs text-gray-500">
                    {item.category}
                    {item.subtitle && item.subtitle !== item.category
                      ? ` · ${item.subtitle}`
                      : ""}
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>
      ) : null}
    </div>
  );
}
