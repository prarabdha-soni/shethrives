import Link from "next/link";
import { s } from "@/app/lib/style";
import { specs, steps, pdpFaqs, SEO } from "@/app/lib/content";
import PdpProduct from "@/app/components/PdpProduct";
import Faq from "@/app/components/Faq";

export const metadata = {
  title: SEO.pdp.title,
  description: SEO.pdp.desc,
};

export default function ShopPage() {
  return (
    <>
      <main style={s("padding: clamp(24px,3vw,44px) clamp(18px,4vw,48px) clamp(60px,8vw,110px);")}>
        <div style={s("max-width: 1240px; margin: 0 auto;")}>
          <p style={s("margin: 0 0 clamp(24px,3vw,40px); font-size: 14px; color: #9e8c72;")}>
            <Link href="/" className="hv-colorpink" style={s("cursor: pointer; color: #9e8c72; text-decoration: none;")}>Shop</Link>
            &nbsp;/&nbsp; <span style={s("color: #3a322b;")}>Menstrual Cup</span>
          </p>

          <PdpProduct />

          {/* SPECS */}
          <section style={s("margin-top: clamp(56px,7vw,96px);")}>
            <h2 style={s("margin: 0 0 clamp(24px,3vw,36px); font-family: 'Cardo', serif; font-weight: 400; font-size: clamp(26px,3.4vw,38px); color: #3a322b;")}>The details</h2>
            <div style={s("display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1px; background: rgba(158,140,114,0.2); border: 1px solid rgba(158,140,114,0.2); border-radius: 20px; overflow: hidden;")}>
              {specs.map((sp) => (
                <div key={sp.k} style={s("background: #fff; padding: clamp(22px,2.6vw,30px);")}>
                  <p style={s("margin: 0 0 8px; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: #9e8c72;")}>{sp.k}</p>
                  <p style={s("margin: 0; font-family: 'Cardo', serif; font-size: 20px; color: #3a322b;")}>{sp.v}</p>
                </div>
              ))}
            </div>
          </section>

          {/* HOW TO USE SUMMARY */}
          <section style={s("margin-top: clamp(48px,6vw,80px); background: #fff; border-radius: 28px; padding: clamp(32px,4vw,56px);")}>
            <div style={s("display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: 12px;")}>
              <h2 style={s("margin: 0; font-family: 'Cardo', serif; font-weight: 400; font-size: clamp(24px,3vw,34px); color: #3a322b;")}>How to use it, in short</h2>
              <Link href="/how-it-works" style={s("cursor: pointer; font-size: 15px; font-weight: 500; color: #d4337c; text-decoration: none;")}>Read the full guide →</Link>
            </div>
            <div style={s("margin-top: 28px; display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 24px;")}>
              {steps.map((st) => (
                <div key={st.n}>
                  <span style={s("font-family: 'Cardo', serif; font-size: 32px; color: #e8789a;")}>{st.n}</span>
                  <h3 style={s("margin: 6px 0 6px; font-size: 17px; font-weight: 500; color: #3a322b;")}>{st.title}</h3>
                  <p style={s("margin: 0; font-size: 15px; line-height: 1.55; color: #6a5f51;")}>{st.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section style={s("margin-top: clamp(48px,6vw,80px); max-width: 800px;")}>
            <h2 style={s("margin: 0 0 24px; font-family: 'Cardo', serif; font-weight: 400; font-size: clamp(26px,3.4vw,38px); color: #3a322b;")}>Questions, answered</h2>
            <Faq items={pdpFaqs} qSize={18} btnPad={22} ansPad={24} ansMaxWidth="660px" />
          </section>
        </div>
      </main>

      {/* STICKY MOBILE PDP CTA */}
      <div className="st-mobile">
        <div style={s("position: fixed; left: 0; right: 0; bottom: 0; z-index: 55; background: rgba(240,235,226,0.94); backdrop-filter: blur(10px); border-top: 1px solid rgba(158,140,114,0.25); padding: 12px 18px calc(12px + env(safe-area-inset-bottom)); animation: slideUp .4s ease both;")}>
          <Link href="/#waitlist" style={s("cursor: pointer; width: 100%; background: #d4337c; color: #fff; border: none; border-radius: 14px; padding: 16px; font-family: 'Jost', sans-serif; font-size: 17px; font-weight: 500; display: block; text-align: center; text-decoration: none; box-sizing: border-box;")}>Notify me when this launches</Link>
        </div>
      </div>
    </>
  );
}
