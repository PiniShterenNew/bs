"use client";

import {
  ArrowCounterClockwise,
  Eye,
  LinkSimple,
  LockKey,
  Minus,
  PersonArmsSpread,
  Plus,
  X,
} from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

type Preferences = {
  contrast: boolean;
  highlightLinks: boolean;
  reduceMotion: boolean;
  textScale: 0 | 1 | 2;
};

const defaultPreferences: Preferences = {
  contrast: false,
  highlightLinks: false,
  reduceMotion: false,
  textScale: 0,
};

const storageKey = "binyamin-stern-accessibility";

function applyPreferences(preferences: Preferences) {
  const root = document.documentElement;
  root.dataset.textScale = String(preferences.textScale);
  root.toggleAttribute("data-high-contrast", preferences.contrast);
  root.toggleAttribute("data-highlight-links", preferences.highlightLinks);
  root.toggleAttribute("data-reduce-motion", preferences.reduceMotion);
}

export function AccessibilityTools() {
  const [preferences, setPreferences] = useState(defaultPreferences);
  const accessibilityDialog = useRef<HTMLDialogElement>(null);
  const privacyDialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (!saved) return;

    try {
      const next = { ...defaultPreferences, ...JSON.parse(saved) } as Preferences;
      setPreferences(next);
      applyPreferences(next);
    } catch {
      window.localStorage.removeItem(storageKey);
    }
  }, []);

  const updatePreferences = (next: Preferences) => {
    setPreferences(next);
    applyPreferences(next);
    window.localStorage.setItem(storageKey, JSON.stringify(next));
  };

  const toggle = (key: "contrast" | "highlightLinks" | "reduceMotion") => {
    updatePreferences({ ...preferences, [key]: !preferences[key] });
  };

  const closeOnBackdrop = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) event.currentTarget.close();
  };

  return (
    <>
      <div className="utility-actions" aria-label="כלי עזר">
        <button type="button" title="נגישות" aria-label="נגישות" onClick={() => accessibilityDialog.current?.showModal()}>
          <PersonArmsSpread size={22} aria-hidden="true" />
        </button>
        <button type="button" title="פרטיות" aria-label="פרטיות" onClick={() => privacyDialog.current?.showModal()}>
          <LockKey size={20} aria-hidden="true" />
        </button>
      </div>

      <dialog
        ref={accessibilityDialog}
        className="utility-dialog"
        aria-labelledby="accessibility-title"
        onClick={closeOnBackdrop}
      >
        <div className="utility-dialog__panel">
          <header>
            <div>
              <span className="utility-dialog__eyebrow">כלי תצוגה</span>
              <h2 id="accessibility-title">נגישות</h2>
            </div>
            <button type="button" className="utility-dialog__close" aria-label="סגירת כלי הנגישות" onClick={() => accessibilityDialog.current?.close()}>
              <X size={20} aria-hidden="true" />
            </button>
          </header>

          <div className="text-scale-control">
            <span>גודל הטקסט</span>
            <div>
              <button
                type="button"
                aria-label="הקטנת הטקסט"
                disabled={preferences.textScale === 0}
                onClick={() => updatePreferences({ ...preferences, textScale: Math.max(0, preferences.textScale - 1) as 0 | 1 | 2 })}
              >
                <Minus size={18} aria-hidden="true" />
              </button>
              <output aria-live="polite">{["100%", "115%", "130%"][preferences.textScale]}</output>
              <button
                type="button"
                aria-label="הגדלת הטקסט"
                disabled={preferences.textScale === 2}
                onClick={() => updatePreferences({ ...preferences, textScale: Math.min(2, preferences.textScale + 1) as 0 | 1 | 2 })}
              >
                <Plus size={18} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="accessibility-options">
            <button type="button" aria-pressed={preferences.contrast} onClick={() => toggle("contrast")}>
              <Eye size={21} aria-hidden="true" />
              <span>ניגודיות גבוהה</span>
            </button>
            <button type="button" aria-pressed={preferences.highlightLinks} onClick={() => toggle("highlightLinks")}>
              <LinkSimple size={21} aria-hidden="true" />
              <span>הדגשת קישורים</span>
            </button>
            <button type="button" aria-pressed={preferences.reduceMotion} onClick={() => toggle("reduceMotion")}>
              <PersonArmsSpread size={21} aria-hidden="true" />
              <span>עצירת אנימציות</span>
            </button>
          </div>

          <button type="button" className="utility-dialog__reset" onClick={() => updatePreferences(defaultPreferences)}>
            <ArrowCounterClockwise size={18} aria-hidden="true" />
            איפוס הגדרות
          </button>
        </div>
      </dialog>

      <dialog
        ref={privacyDialog}
        className="utility-dialog"
        aria-labelledby="privacy-title"
        onClick={closeOnBackdrop}
      >
        <div className="utility-dialog__panel utility-dialog__panel--privacy">
          <header>
            <div>
              <span className="utility-dialog__eyebrow">מידע ברור</span>
              <h2 id="privacy-title">פרטיות באתר</h2>
            </div>
            <button type="button" className="utility-dialog__close" aria-label="סגירת מידע הפרטיות" onClick={() => privacyDialog.current?.close()}>
              <X size={20} aria-hidden="true" />
            </button>
          </header>
          <p>בגרסה הנוכחית אין באתר טופס, הרשמה או שמירה של פרטי קשר בתוך האתר.</p>
          <ul>
            <li>לחיצה על WhatsApp מעבירה לשירות WhatsApp, הכפוף למדיניות הפרטיות שלו.</li>
            <li>לחיצה על טלפון מפעילה את החייגן במכשיר שלך.</li>
            <li>ספק האחסון עשוי לעבד נתוני גישה טכניים בסיסיים לצורכי אבטחה ותפעול.</li>
          </ul>
          <p>לשאלה בנושא פרטיות אפשר לפנות לבנימין בטלפון <bdi dir="ltr">052-217-4914</bdi>.</p>
        </div>
      </dialog>
    </>
  );
}
