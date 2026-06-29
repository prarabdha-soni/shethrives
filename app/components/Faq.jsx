"use client";
import { useState } from "react";
import { s } from "@/app/lib/style";

// Accordion list. The source kept a single `openFaq` key, so only one item is
// open at a time. Style differs slightly between the PDP and Article uses.
export default function Faq({ items, qSize = 18, btnPad = 22, ansPad = 24, ansMaxWidth = "660px" }) {
  const [open, setOpen] = useState(null);

  return (
    <>
      {items.map((fq, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={s("border-bottom: 1px solid rgba(158,140,114,0.22);")}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              style={s(`cursor: pointer; width: 100%; background: none; border: none; padding: ${btnPad}px 0; display: flex; align-items: center; justify-content: space-between; gap: 16px; text-align: left; font-family: 'Jost', sans-serif;`)}
            >
              <span style={s(`font-size: ${qSize}px; color: #3a322b; font-weight: 400;`)}>{fq.q}</span>
              <span style={s("flex: none; font-size: 24px; color: #d4337c; line-height: 1;")}>{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <p style={s(`margin: 0; padding: 0 0 ${ansPad}px; font-size: 16px; line-height: 1.7; color: #6a5f51;${ansMaxWidth ? ` max-width: ${ansMaxWidth};` : ""}`)}>{fq.a}</p>
            )}
          </div>
        );
      })}
    </>
  );
}
