"use client";

import { Minus, Plus } from "@phosphor-icons/react";
import { useState } from "react";

type FaqProps = {
  items: ReadonlyArray<readonly [question: string, answer: string]>;
};

export function Faq({ items }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq" id="faq" data-reveal data-motion="faq">
      <h2>שאלות נפוצות</h2>
      {items.map(([question, answer], index) => {
        const isOpen = openIndex === index;
        const buttonId = `faq-button-${index}`;
        const answerId = `faq-answer-${index}`;

        return (
          <div className={`faq__item ${isOpen ? "is-open" : ""}`} key={question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{question}</span>
                {isOpen ? <Minus size={20} aria-hidden="true" /> : <Plus size={20} aria-hidden="true" />}
              </button>
            </h3>
            <div id={answerId} className="faq__answer" role="region" aria-labelledby={buttonId} hidden={!isOpen}>
              <p>{answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
