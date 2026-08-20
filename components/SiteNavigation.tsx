"use client";

import { List, X } from "@phosphor-icons/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

type SiteNavigationProps = {
  brand: ReactNode;
  contact: ReactNode;
};

const links = [
  ["#services", "שירותים"],
  ["#process", "תהליך עבודה"],
  ["#faq", "שאלות נפוצות"],
  ["#about", "אודות"],
] as const;

export function SiteNavigation({ brand, contact }: SiteNavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const closeMenu = (restoreFocus = false) => {
      setMenuOpen(false);
      if (restoreFocus) triggerRef.current?.focus();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu(true);
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) closeMenu();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [menuOpen]);

  return (
    <nav ref={navRef} className="nav" aria-label="ניווט ראשי">
      <div className="nav__inner page-shell">
        {brand}
        <div className="nav__links">
          {links.map(([href, label]) => <a href={href} key={href}>{label}</a>)}
        </div>
        <div className="nav__contact">{contact}</div>
        <button
          ref={triggerRef}
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "סגירת תפריט" : "פתיחת תפריט"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <List size={22} aria-hidden="true" />}
        </button>

        {menuOpen && (
          <div className="mobile-navigation" id="mobile-navigation">
            {links.map(([href, label]) => (
              <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
