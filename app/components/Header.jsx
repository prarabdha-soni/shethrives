"use client";
import { useState } from "react";
import Link from "next/link";
import { s } from "@/app/lib/style";
import { navLinks } from "@/app/lib/content";

function Wordmark({ size = 27 }) {
  return (
    <span style={s(`font-family: 'Cardo', serif; font-size: ${size}px; line-height: 1;`)}>
      <span style={s("color: #d4337c;")}>She</span>
      <span style={s("color: #9e8c72;")}>Thrives</span>
      <span style={s("display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: #d4337c; margin-left: 3px;")} />
    </span>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header style={s("position: sticky; top: 0; z-index: 50; background: rgba(240,235,226,0.86); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(158,140,114,0.18);")}>
        <div style={s("max-width: 1240px; margin: 0 auto; padding: 14px clamp(18px,4vw,48px); display: flex; align-items: center; justify-content: space-between; gap: 24px;")}>
          <Link href="/" style={s("cursor: pointer; text-decoration: none; display: inline-flex; align-items: baseline;")}>
            <Wordmark size={27} />
          </Link>

          {/* Desktop nav */}
          <div className="st-desktop">
            <nav style={s("display: flex; align-items: center; gap: 34px;")}>
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hv-navlink"
                  style={s("cursor: pointer; font-size: 15px; font-weight: 400; letter-spacing: 0.01em; color: #4a4137; text-decoration: none; padding-bottom: 2px; border-bottom: 1.5px solid transparent;")}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#waitlist"
                className="hv-pinkbtn"
                style={s("cursor: pointer; background: #d4337c; color: #fff; border: none; border-radius: 999px; padding: 12px 24px; font-family: 'Jost', sans-serif; font-size: 15px; font-weight: 500; letter-spacing: 0.01em; text-decoration: none; display: inline-flex; align-items: center;")}
              >
                Notify me
              </Link>
            </nav>
          </div>

          {/* Mobile hamburger */}
          <div className="st-mobile">
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              style={s("cursor: pointer; background: none; border: none; padding: 10px; display: inline-flex; flex-direction: column; gap: 5px;")}
            >
              <span style={s("display: block; width: 24px; height: 2px; background: #3a322b; border-radius: 2px;")} />
              <span style={s("display: block; width: 24px; height: 2px; background: #3a322b; border-radius: 2px;")} />
              <span style={s("display: block; width: 24px; height: 2px; background: #3a322b; border-radius: 2px;")} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav panel */}
      {open && (
        <div style={s("position: fixed; inset: 0; z-index: 60; background: #f0ebe2; padding: 18px clamp(18px,5vw,32px); display: flex; flex-direction: column;")}>
          <div style={s("display: flex; align-items: center; justify-content: space-between;")}>
            <Wordmark size={27} />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              style={s("cursor: pointer; background: none; border: none; font-size: 30px; line-height: 1; color: #3a322b; font-family: 'Jost', sans-serif;")}
            >
              ×
            </button>
          </div>
          <nav style={s("margin-top: 40px; display: flex; flex-direction: column; gap: 8px;")}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                style={s("cursor: pointer; font-family: 'Cardo', serif; font-size: 30px; color: #3a322b; text-decoration: none; padding: 14px 0; border-bottom: 1px solid rgba(158,140,114,0.2);")}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/#waitlist"
            onClick={() => setOpen(false)}
            style={s("margin-top: 32px; cursor: pointer; background: #d4337c; color: #fff; border: none; border-radius: 999px; padding: 18px; font-family: 'Jost', sans-serif; font-size: 17px; font-weight: 500; width: 100%; text-align: center; text-decoration: none; box-sizing: border-box;")}
          >
            Notify me at launch
          </Link>
        </div>
      )}
    </>
  );
}
