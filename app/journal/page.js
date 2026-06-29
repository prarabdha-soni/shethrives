import Link from "next/link";
import { s } from "@/app/lib/style";
import { blogTags, blogPosts, SEO } from "@/app/lib/content";

export const metadata = {
  title: SEO.blog.title,
  description: SEO.blog.desc,
};

export default function JournalPage() {
  return (
    <main>
      <section style={s("padding: clamp(48px,7vw,100px) clamp(18px,4vw,48px) clamp(32px,4vw,56px); text-align: center;")}>
        <div style={s("max-width: 820px; margin: 0 auto;")}>
          <p style={s("margin: 0 0 18px; font-size: 13px; letter-spacing: 0.16em; text-transform: uppercase; color: #d4337c; font-weight: 500;")}>Journal</p>
          <h1 style={s("margin: 0; font-family: 'Cardo', serif; font-weight: 400; font-size: clamp(36px,5.4vw,64px); line-height: 1.04; color: #3a322b;")}>The SheThrives Journal</h1>
          <p style={s("margin: 24px auto 0; max-width: 620px; font-size: clamp(17px,1.8vw,20px); line-height: 1.7; color: #5b5145;")}>Honest, stigma-free reading on periods, cups, and everyday wellness. No euphemisms, no judgment — just the things we wish someone had told us sooner.</p>
          <div style={s("margin-top: 28px; display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;")}>
            {blogTags.map((t) => (
              <span key={t} style={s("font-size: 13px; color: #6a5f51; background: #fff; border: 1px solid rgba(158,140,114,0.25); border-radius: 999px; padding: 8px 16px;")}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section style={s("padding: clamp(16px,2vw,32px) clamp(18px,4vw,48px) clamp(64px,8vw,110px);")}>
        <div style={s("max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: clamp(20px,2.5vw,32px);")}>
          {blogPosts.map((p) => (
            <Link key={p.title} href={p.href} className="hv-lift" style={s("cursor: pointer; text-decoration: none; display: flex; flex-direction: column; background: #fff; border-radius: 24px; overflow: hidden;")}>
              <div style={s(`position: relative; aspect-ratio: 16 / 10; background: ${p.bg}; display: flex; align-items: flex-end; padding: 16px;`)}>
                <span style={s("position: absolute; top: 16px; left: 16px; background: rgba(255,255,255,0.9); color: #9e8c72; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 500; padding: 6px 12px; border-radius: 999px;")}>{p.cat}</span>
                <span style={s("font-family: ui-monospace, monospace; font-size: 10px; letter-spacing: 0.06em; color: rgba(58,50,43,0.4); text-transform: uppercase;")}>{p.tag}</span>
              </div>
              <div style={s("padding: 24px clamp(20px,2.4vw,28px) 28px;")}>
                <h3 style={s("margin: 0 0 14px; font-family: 'Cardo', serif; font-weight: 700; font-size: 22px; line-height: 1.2; color: #3a322b;")}>{p.title}</h3>
                <span style={s("font-size: 15px; font-weight: 500; color: #d4337c;")}>Read article →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
