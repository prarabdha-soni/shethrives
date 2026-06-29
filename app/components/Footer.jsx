"use client";
import Link from "next/link";
import { s } from "@/app/lib/style";
import { footerCols, legalLinks } from "@/app/lib/content";
import { useWaitlist } from "@/app/lib/useWaitlist";

export default function Footer() {
  const { done, error, submit } = useWaitlist();

  return (
    <footer style={s("background: #3a322b; color: #f0ebe2; padding: clamp(56px,7vw,88px) clamp(18px,4vw,48px) clamp(32px,4vw,48px);")}>
      <div style={s("max-width: 1240px; margin: 0 auto;")}>
        <div style={s("display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: clamp(32px,4vw,56px);")}>
          <div style={s("grid-column: span 1; min-width: 240px;")}>
            <span style={s("font-family: 'Cardo', serif; font-size: 30px;")}>
              <span style={s("color: #e8789a;")}>She</span>
              <span style={s("color: #cbb89a;")}>Thrives</span>
              <span style={s("display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: #e8789a; margin-left: 3px;")} />
            </span>
            <p style={s("margin: 10px 0 0; font-family: 'Cardo', serif; font-style: italic; font-size: 18px; color: #cbb89a;")}>every single day.</p>
            <a href="https://instagram.com/shethrives.in" target="_blank" rel="noopener" style={s("display: inline-block; margin-top: 20px; font-size: 15px; color: #f0ebe2; text-decoration: none; border-bottom: 1px solid rgba(240,235,226,0.4); padding-bottom: 2px;")}>Instagram @shethrives.in</a>
          </div>

          {footerCols.map((col) => (
            <div key={col.head}>
              <p style={s("margin: 0 0 18px; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: #9e8c72;")}>{col.head}</p>
              {col.items.map((it) => (
                <Link
                  key={it.label}
                  href={it.href}
                  className="hv-colorwhite"
                  style={s("cursor: pointer; display: block; margin-bottom: 12px; font-size: 15px; color: rgba(240,235,226,0.85); text-decoration: none;")}
                >
                  {it.label}
                </Link>
              ))}
            </div>
          ))}

          <div style={s("min-width: 240px;")}>
            <p style={s("margin: 0 0 14px; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: #9e8c72;")}>Stay in the loop</p>
            {done ? (
              <p style={s("margin: 0; font-size: 15px; color: #e8789a;")}>You&apos;re on the list — thank you.</p>
            ) : (
              <form onSubmit={submit} style={s("display: flex; flex-direction: column; gap: 10px; max-width: 280px;")}>
                <input name="name" type="text" placeholder="Your name" style={s("width: 100%; padding: 13px 15px; border: 1px solid rgba(240,235,226,0.25); border-radius: 12px; background: rgba(240,235,226,0.06); font-family: 'Jost', sans-serif; font-size: 15px; color: #f0ebe2;")} />
                <input name="mobile" type="tel" inputMode="numeric" placeholder="10-digit mobile" style={s("width: 100%; padding: 13px 15px; border: 1px solid rgba(240,235,226,0.25); border-radius: 12px; background: rgba(240,235,226,0.06); font-family: 'Jost', sans-serif; font-size: 15px; color: #f0ebe2;")} />
                {error && <p style={s("margin: 0; font-size: 12px; color: #e8789a;")}>{error}</p>}
                <button type="submit" className="hv-pinkbtn" style={s("cursor: pointer; background: #d4337c; color: #fff; border: none; border-radius: 12px; padding: 13px; font-family: 'Jost', sans-serif; font-size: 15px; font-weight: 500;")}>Notify me</button>
              </form>
            )}
          </div>
        </div>

        <div style={s("margin-top: clamp(40px,5vw,64px); padding-top: 28px; border-top: 1px solid rgba(240,235,226,0.16);")}>
          <p style={s("margin: 0 0 6px; font-size: 14px; color: rgba(240,235,226,0.8);")}>Binary Innovations OPC Private Limited</p>
          <p style={s("margin: 0 0 6px; font-size: 13px; line-height: 1.6; color: rgba(240,235,226,0.55);")}>Registered office: Goregaon East, Mumbai, Maharashtra, India &nbsp;·&nbsp; GSTIN: <span style={s("font-family: ui-monospace, monospace;")}>[to be added]</span></p>
          <p style={s("margin: 0 0 18px; font-size: 13px; line-height: 1.6; color: rgba(240,235,226,0.45);")}>CDSCO medical-device licence: pending — disclosure to be added before checkout goes live.</p>
          <div style={s("display: flex; flex-wrap: wrap; gap: 8px 22px; align-items: center;")}>
            <span style={s("font-size: 13px; color: rgba(240,235,226,0.5);")}>© 2026 SheThrives</span>
            {legalLinks.map((l) => (
              <a key={l} style={s("cursor: default; font-size: 13px; color: rgba(240,235,226,0.55); text-decoration: none;")}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
