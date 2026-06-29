import Link from "next/link";
import { s } from "@/app/lib/style";
import { insertSteps, articleFaqs, SEO } from "@/app/lib/content";
import Faq from "@/app/components/Faq";
import { ArticleWaitlistForm } from "@/app/components/WaitlistForms";

export const metadata = {
  title: SEO.article.title,
  description: SEO.article.desc,
};

export default function HowItWorksPage() {
  return (
    <main>
      <article style={s("max-width: 760px; margin: 0 auto; padding: clamp(40px,6vw,88px) clamp(18px,4vw,40px) clamp(56px,7vw,96px);")}>
        <p style={s("margin: 0 0 18px; font-size: 13px; letter-spacing: 0.14em; text-transform: uppercase; color: #d4337c; font-weight: 500;")}>First-time user guide · 6 min read</p>
        <h1 style={s("margin: 0; font-family: 'Cardo', serif; font-weight: 400; font-size: clamp(34px,5vw,56px); line-height: 1.08; letter-spacing: -0.01em; color: #3a322b;")}>Your first menstrual cup: a calm, complete guide</h1>
        <p style={s("margin: 24px 0 0; font-size: clamp(18px,2vw,21px); line-height: 1.7; color: #5b5145; font-style: italic; font-family: 'Cardo', serif;")}>If you’ve never used a cup before, this is the only page you need to read first. Breathe. It’s far simpler than it looks.</p>

        <div style={s("margin: clamp(36px,4vw,56px) 0; aspect-ratio: 16 / 9; border-radius: 24px; background: #fff; display: flex; align-items: center; justify-content: center;")}>
          <span style={s("font-family: ui-monospace, monospace; font-size: 11px; letter-spacing: 0.08em; color: rgba(58,50,43,0.4); text-transform: uppercase;")}>illustrated hero diagram</span>
        </div>

        <h2 style={s("margin: 44px 0 14px; font-family: 'Cardo', serif; font-weight: 700; font-size: clamp(24px,3vw,32px); color: #3a322b;")}>What is a menstrual cup?</h2>
        <p style={s("margin: 0 0 18px; font-size: 18px; line-height: 1.8; color: #4a4137;")}>A menstrual cup is a small, flexible cup made of soft medical-grade silicone. You fold it, insert it, and it gently unfolds to sit low in the vaginal canal, collecting your flow rather than absorbing it. One cup can last for years — replacing thousands of pads or tampons.</p>
        <p style={s("margin: 0 0 18px; font-size: 18px; line-height: 1.8; color: #4a4137;")}>Because it collects rather than absorbs, a cup doesn&apos;t dry you out, doesn&apos;t leave fibres behind, and can be worn for up to 12 hours — which means many people barely think about their period at all while wearing one.</p>

        {/* STEP DIAGRAM */}
        <h2 style={s("margin: 44px 0 20px; font-family: 'Cardo', serif; font-weight: 700; font-size: clamp(24px,3vw,32px); color: #3a322b;")}>Inserting it, step by step</h2>
        <div style={s("display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 18px; margin-bottom: 18px;")}>
          {insertSteps.map((st) => (
            <div key={st.n} style={s("background: #fff; border-radius: 18px; padding: 18px;")}>
              <div style={s("aspect-ratio: 1 / 1; border-radius: 12px; background: #f7eef3; display: flex; align-items: center; justify-content: center; margin-bottom: 14px;")}>
                <span style={s("font-family: ui-monospace, monospace; font-size: 9px; color: rgba(58,50,43,0.45); text-align: center; line-height: 1.3;")}>{st.diagram}</span>
              </div>
              <span style={s("font-family: 'Cardo', serif; font-size: 24px; color: #e8789a;")}>{st.n}</span>
              <p style={s("margin: 4px 0 0; font-size: 15px; line-height: 1.55; color: #4a4137;")}>{st.body}</p>
            </div>
          ))}
        </div>

        {/* PULL QUOTE */}
        <blockquote style={s("margin: 44px 0; padding: 0 0 0 28px; border-left: 3px solid #d4337c;")}>
          <p style={s("margin: 0; font-family: 'Cardo', serif; font-style: italic; font-size: clamp(22px,2.6vw,28px); line-height: 1.5; color: #3a322b;")}>If it&apos;s uncomfortable, it isn&apos;t in far enough or low enough yet. A correctly placed cup is something you simply shouldn&apos;t feel.</p>
        </blockquote>

        <h2 style={s("margin: 8px 0 14px; font-family: 'Cardo', serif; font-weight: 700; font-size: clamp(24px,3vw,32px); color: #3a322b;")}>Removing it without stress</h2>
        <p style={s("margin: 0 0 18px; font-size: 18px; line-height: 1.8; color: #4a4137;")}>Wash your hands, relax, and gently bear down as if going to the toilet. Pinch the base of the cup to release the seal — never pull on the stem alone — then ease it out, empty, rinse, and reinsert. Over a full day, most people only need to do this morning and night.</p>

        {/* PRODUCT LINK */}
        <div style={s("margin: 40px 0; background: #d4337c; border-radius: 24px; padding: clamp(28px,3.5vw,40px); display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 20px;")}>
          <div style={s("max-width: 380px;")}>
            <h3 style={s("margin: 0 0 8px; font-family: 'Cardo', serif; font-weight: 400; font-size: 26px; color: #fff;")}>Ready when you are.</h3>
            <p style={s("margin: 0; font-size: 16px; line-height: 1.6; color: rgba(255,255,255,0.88);")}>The SheThrives cup is launching soon. Have a look, or get notified the day it&apos;s live.</p>
          </div>
          <div style={s("display: flex; gap: 12px; flex-wrap: wrap;")}>
            <Link href="/shop" style={s("cursor: pointer; background: #fff; color: #d4337c; border: none; border-radius: 999px; padding: 15px 26px; font-family: 'Jost', sans-serif; font-size: 16px; font-weight: 600; text-decoration: none; display: inline-block;")}>View the cup</Link>
          </div>
        </div>

        {/* FAQ */}
        <h2 style={s("margin: 44px 0 8px; font-family: 'Cardo', serif; font-weight: 700; font-size: clamp(24px,3vw,32px); color: #3a322b;")}>Common first-timer questions</h2>
        <Faq items={articleFaqs} qSize={17} btnPad={20} ansPad={22} ansMaxWidth="" />

        {/* END CTA */}
        <ArticleWaitlistForm />
      </article>
    </main>
  );
}
