import Link from "next/link";
import { s } from "@/app/lib/style";
import { trust, eduSteps, products, feed } from "@/app/lib/content";
import { icon, igIcon } from "@/app/lib/icons";
import { MidWaitlistForm } from "@/app/components/WaitlistForms";

const REVEAL = "animation: revealIn .8s cubic-bezier(.22,.61,.36,1) both; animation-timeline: view(); animation-range: entry 0 entry 36%;";

export default function HomePage() {
  return (
    <main>
      {/* ===== HERO (fuchsia) ===== */}
      {/* desktop overlay */}
      <div className="st-desktop">
        <section style={s('position: relative; min-height: clamp(540px, 72vh, 780px); background-image: url("/images/hero.png"); background-size: cover; background-position: 72% center; display: flex; align-items: center;')}>
          <div style={s("position: absolute; inset: 0; background: linear-gradient(100deg, rgba(196,42,112,0.96) 0%, rgba(196,42,112,0.86) 30%, rgba(196,42,112,0.38) 54%, rgba(196,42,112,0) 76%);")} />
          <div style={s("position: relative; width: 100%; max-width: 1240px; margin: 0 auto; padding: 0 clamp(18px,4vw,48px);")}>
            <div style={s("max-width: 540px;")}>
              <p style={s("margin: 0 0 20px; font-size: 13px; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(255,255,255,0.75); font-weight: 500;")}>Menstrual care, made for India</p>
              <h1 style={s("margin: 0; font-family: 'Cardo', serif; font-weight: 400; font-size: clamp(48px,6vw,82px); line-height: 1.0; letter-spacing: -0.015em; color: #fff;")}>For every body,<br />every stage. <span style={s("font-style: italic; color: #f0ebe2;")}>Every single day.</span></h1>
              <p style={s("margin: 26px 0 0; font-size: clamp(17px,1.7vw,20px); line-height: 1.65; color: rgba(255,255,255,0.9); max-width: 440px;")}>A menstrual cup made for how you actually live. Comfortable, reusable, and built to make your period the least dramatic part of your day.</p>
              <div style={s("margin-top: 36px; display: flex; flex-wrap: wrap; gap: 16px 24px; align-items: center;")}>
                <Link href="/#waitlist" className="hv-whitebtn" style={s("cursor: pointer; background: #fff; color: #d4337c; border: none; border-radius: 999px; padding: 17px 34px; font-family: 'Jost', sans-serif; font-size: 17px; font-weight: 600; letter-spacing: 0.01em; text-decoration: none; display: inline-block;")}>Notify Me at Launch</Link>
                <Link href="/how-it-works" className="hv-linkwhite" style={s("cursor: pointer; font-size: 16px; font-weight: 500; color: #fff; text-decoration: none; border-bottom: 1.5px solid rgba(255,255,255,0.6); padding-bottom: 3px;")}>See how it works →</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* mobile stacked */}
      <div className="st-mobile">
        <section style={s("background: #c42a70;")}>
          <div style={s('height: clamp(280px, 52vw, 420px); background-image: url("/images/hero.png"); background-size: cover; background-position: 78% center;')} />
          <div style={s("padding: clamp(28px,7vw,40px) clamp(18px,5vw,28px) clamp(40px,9vw,56px);")}>
            <p style={s("margin: 0 0 16px; font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(255,255,255,0.75); font-weight: 500;")}>Menstrual care, made for India</p>
            <h1 style={s("margin: 0; font-family: 'Cardo', serif; font-weight: 400; font-size: clamp(40px,11vw,56px); line-height: 1.0; letter-spacing: -0.01em; color: #fff;")}>For every body,<br />every stage. <span style={s("font-style: italic; color: #f0ebe2;")}>Every single day.</span></h1>
            <p style={s("margin: 20px 0 0; font-size: 17px; line-height: 1.65; color: rgba(255,255,255,0.9);")}>A menstrual cup made for how you actually live. Comfortable, reusable, and built to make your period the least dramatic part of your day.</p>
            <Link href="/#waitlist" style={s("margin-top: 28px; cursor: pointer; width: 100%; background: #fff; color: #d4337c; border: none; border-radius: 14px; padding: 17px; font-family: 'Jost', sans-serif; font-size: 17px; font-weight: 600; text-decoration: none; display: block; text-align: center; box-sizing: border-box;")}>Notify Me at Launch</Link>
            <Link href="/how-it-works" style={s("display: block; margin-top: 18px; text-align: center; cursor: pointer; font-size: 16px; font-weight: 500; color: #fff; text-decoration: none;")}>See how it works →</Link>
          </div>
        </section>
      </div>

      {/* ===== TRUST STRIP ===== */}
      <section style={s("background: #fff; border-top: 1px solid rgba(158,140,114,0.14); border-bottom: 1px solid rgba(158,140,114,0.14);")}>
        <div style={s("max-width: 1240px; margin: 0 auto; padding: clamp(28px,3vw,40px) clamp(18px,4vw,48px); display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 28px;")}>
          {trust.map((t) => (
            <div key={t.label} style={s("display: flex; align-items: center; gap: 14px;")}>
              <span style={s("flex: none; width: 44px; height: 44px; border-radius: 50%; background: #f7eef3; display: inline-flex; align-items: center; justify-content: center;")} dangerouslySetInnerHTML={{ __html: icon(t.icon) }} />
              <span style={s("font-size: 15px; line-height: 1.35; color: #4a4137; font-weight: 400;")}>{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WHY A CUP ===== */}
      <section style={s(`padding: clamp(64px,8vw,120px) clamp(18px,4vw,48px); ${REVEAL}`)}>
        <div style={s("max-width: 960px; margin: 0 auto; text-align: center;")}>
          <p style={s("margin: 0 0 16px; font-size: 13px; letter-spacing: 0.16em; text-transform: uppercase; color: #d4337c; font-weight: 500;")}>Why a cup?</p>
          <h2 style={s("margin: 0; font-family: 'Cardo', serif; font-weight: 400; font-size: clamp(30px,4.4vw,52px); line-height: 1.06; color: #3a322b;")}>Good for your body, your wallet, and the planet.</h2>
          <p style={s("margin: 22px auto 0; max-width: 560px; font-size: clamp(16px,1.7vw,19px); line-height: 1.7; color: #6a5f51;")}>One small switch, three big wins.</p>
        </div>

        <div style={s("max-width: 960px; margin: clamp(40px,5vw,64px) auto 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: clamp(16px,2vw,24px); align-items: stretch;")}>
          <div style={s("background: #fff; border-radius: 24px; padding: clamp(28px,3vw,38px); border: 1px solid rgba(158,140,114,0.18);")}>
            <div style={s("width: 52px; height: 52px; border-radius: 50%; background: #f4e7d9; display: flex; align-items: center; justify-content: center; margin-bottom: 18px;")}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="7" r="3.4" stroke="#9e8c72" strokeWidth="1.7" /><path d="M5.5 20c0-3.6 3-6 6.5-6s6.5 2.4 6.5 6" stroke="#9e8c72" strokeWidth="1.7" strokeLinecap="round" /></svg>
            </div>
            <p style={s("margin: 0 0 8px; font-family: 'Cardo', serif; font-size: 22px; color: #3a322b;")}>Body</p>
            <p style={s("margin: 0; font-size: 15px; line-height: 1.6; color: #6a5f51;")}>Medical-grade silicone, no chemicals, no dryness — just a safer way to flow.</p>
          </div>
          <div style={s("background: #fff; border-radius: 24px; padding: clamp(28px,3vw,38px); border: 1px solid rgba(158,140,114,0.18);")}>
            <div style={s("width: 52px; height: 52px; border-radius: 50%; background: #fdf2f8; display: flex; align-items: center; justify-content: center; margin-bottom: 18px;")}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="6.5" width="18" height="13" rx="3" stroke="#d4337c" strokeWidth="1.7" /><path d="M3 10.5h18" stroke="#d4337c" strokeWidth="1.7" /><circle cx="16.5" cy="14.5" r="1.3" fill="#d4337c" /></svg>
            </div>
            <p style={s("margin: 0 0 8px; font-family: 'Cardo', serif; font-size: 22px; color: #3a322b;")}>Wallet</p>
            <p style={s("margin: 0; font-size: 15px; line-height: 1.6; color: #6a5f51;")}>Buy it once, then stop restocking — the cup pays for itself in just a few months.</p>
          </div>
          <div style={s("background: #fff; border-radius: 24px; padding: clamp(28px,3vw,38px); border: 1px solid rgba(158,140,114,0.18);")}>
            <div style={s("width: 52px; height: 52px; border-radius: 50%; background: #f4e7d9; display: flex; align-items: center; justify-content: center; margin-bottom: 18px;")}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="#9e8c72" strokeWidth="1.7" /><ellipse cx="12" cy="12" rx="3.6" ry="8.5" stroke="#9e8c72" strokeWidth="1.7" /><path d="M3.7 12h16.6" stroke="#9e8c72" strokeWidth="1.7" /></svg>
            </div>
            <p style={s("margin: 0 0 8px; font-family: 'Cardo', serif; font-size: 22px; color: #3a322b;")}>Planet</p>
            <p style={s("margin: 0; font-size: 15px; line-height: 1.6; color: #6a5f51;")}>One cup replaces thousands of disposables — less landfill, less waste, every cycle.</p>
          </div>
        </div>

        <p style={s("margin: clamp(36px,4vw,52px) auto clamp(20px,2.4vw,28px); max-width: 960px; text-align: center; font-size: 13px; letter-spacing: 0.14em; text-transform: uppercase; color: #9e8c72; font-weight: 500;")}>The math, simply put</p>

        <div style={s("max-width: 960px; margin: clamp(28px,3vw,40px) auto 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: clamp(16px,2vw,24px); align-items: stretch;")}>
          <div style={s("background: #fff; border-radius: 24px; padding: clamp(28px,3vw,38px); border: 1px solid rgba(158,140,114,0.18);")}>
            <p style={s("margin: 0 0 14px; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: #9e8c72; font-weight: 500;")}>Pads &amp; tampons</p>
            <p style={s("margin: 0; font-family: 'Cardo', serif; font-size: clamp(30px,3.4vw,40px); line-height: 1.05; color: #3a322b;")}>~₹2,000+<span style={s("display: block; font-family: 'Jost', sans-serif; font-size: 15px; color: #6a5f51; margin-top: 8px;")}>a year, every year, forever.</span></p>
          </div>
          <div style={s("background: #d4337c; border-radius: 24px; padding: clamp(28px,3vw,38px);")}>
            <p style={s("margin: 0 0 14px; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(255,255,255,0.75); font-weight: 500;")}>SheThrives cup</p>
            <p style={s("margin: 0; font-family: 'Cardo', serif; font-size: clamp(30px,3.4vw,40px); line-height: 1.05; color: #fff;")}>One-time ₹700<span style={s("display: block; font-family: 'Jost', sans-serif; font-size: 15px; color: rgba(255,255,255,0.85); margin-top: 8px;")}>Lasts up to 5 years.</span></p>
          </div>
          <div style={s("background: #f4e7d9; border-radius: 24px; padding: clamp(28px,3vw,38px);")}>
            <p style={s("margin: 0 0 14px; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: #9e8c72; font-weight: 500;")}>The difference</p>
            <p style={s("margin: 0; font-family: 'Cardo', serif; font-size: clamp(30px,3.4vw,40px); line-height: 1.05; color: #3a322b;")}>Save ₹10,000+<span style={s("display: block; font-family: 'Jost', sans-serif; font-size: 15px; color: #6a5f51; margin-top: 8px;")}>over 5 years — and skip the landfill guilt too.</span></p>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS TEASER ===== */}
      <section style={s(`padding: 0 clamp(18px,4vw,48px) clamp(64px,8vw,110px); ${REVEAL}`)}>
        <div style={s("max-width: 1240px; margin: 0 auto;")}>
          <div style={s("display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 16px; margin-bottom: clamp(28px,3vw,44px);")}>
            <h2 style={s("margin: 0; font-family: 'Cardo', serif; font-weight: 400; font-size: clamp(28px,3.6vw,42px); color: #3a322b;")}>Our Products</h2>
            <span style={s("font-size: 14px; color: #9e8c72; letter-spacing: 0.02em;")}>Three products. One simple ritual.</span>
          </div>
          <div style={s("display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: clamp(18px,2vw,28px);")}>
            {products.map((p) => (
              <Link key={p.name} href={p.href} className="hv-lift" style={s("cursor: pointer; text-decoration: none; display: flex; flex-direction: column; background: #fff; border-radius: 24px; overflow: hidden;")}>
                <div style={s(`position: relative; aspect-ratio: 4 / 3; background: ${p.bg}; display: flex; align-items: center; justify-content: center;`)}>
                  <span style={s("position: absolute; top: 16px; left: 16px; background: rgba(255,255,255,0.9); color: #9e8c72; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 500; padding: 6px 12px; border-radius: 999px;")}>Coming Soon</span>
                  <span style={s("font-family: ui-monospace, monospace; font-size: 11px; letter-spacing: 0.08em; color: rgba(58,50,43,0.4); text-transform: uppercase;")}>{p.shot}</span>
                </div>
                <div style={s("padding: 24px clamp(20px,2.4vw,28px) 28px;")}>
                  <h3 style={s("margin: 0 0 8px; font-family: 'Cardo', serif; font-weight: 700; font-size: 22px; color: #3a322b;")}>{p.name}</h3>
                  <p style={s("margin: 0 0 16px; font-size: 15px; line-height: 1.6; color: #6a5f51;")}>{p.desc}</p>
                  <span style={s("font-size: 15px; font-weight: 500; color: #d4337c;")}>Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEW TO CUPS / EDUCATION ===== */}
      <section style={s(`background: #fff; padding: clamp(64px,8vw,110px) clamp(18px,4vw,48px); ${REVEAL}`)}>
        <div style={s("max-width: 1100px; margin: 0 auto; text-align: center;")}>
          <p style={s("margin: 0 0 16px; font-size: 13px; letter-spacing: 0.16em; text-transform: uppercase; color: #d4337c; font-weight: 500;")}>New to cups</p>
          <h2 style={s("margin: 0; font-family: 'Cardo', serif; font-weight: 400; font-size: clamp(30px,4.4vw,50px); line-height: 1.06; color: #3a322b;")}>New to cups? You’ve got this.</h2>
          <p style={s("margin: 22px auto 0; max-width: 620px; font-size: clamp(16px,1.7vw,18px); line-height: 1.7; color: #6a5f51;")}>First time trying a menstrual cup? Totally normal to feel unsure — almost every cup user did, the first time too. It’s a small learning curve, not a hard one, and it gets easy fast.</p>
        </div>
        <div style={s("max-width: 1000px; margin: clamp(40px,5vw,64px) auto 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: clamp(20px,2.5vw,32px);")}>
          {eduSteps.map((step) => (
            <div key={step.title} style={s("background: #f0ebe2; border-radius: 24px; padding: clamp(28px,3vw,38px); text-align: left;")}>
              <span style={s("width: 52px; height: 52px; border-radius: 50%; background: #fff; display: inline-flex; align-items: center; justify-content: center;")} dangerouslySetInnerHTML={{ __html: icon(step.icon) }} />
              <h3 style={s("margin: 22px 0 10px; font-family: 'Cardo', serif; font-weight: 700; font-size: 22px; color: #3a322b;")}>{step.title}</h3>
              <p style={s("margin: 0; font-size: 16px; line-height: 1.65; color: #6a5f51;")}>{step.body}</p>
            </div>
          ))}
        </div>
        <p style={s("margin: clamp(32px,4vw,44px) auto 0; max-width: 560px; text-align: center; font-family: 'Cardo', serif; font-style: italic; font-size: clamp(18px,2vw,22px); line-height: 1.5; color: #9e8c72;")}>No rushing. No judgment. Go at your own pace — we’ll walk you through every step.</p>
        <div style={s("margin-top: 32px; display: flex; flex-wrap: wrap; gap: 16px 24px; justify-content: center; align-items: center;")}>
          <Link href="/how-it-works" className="hv-pinkbtn" style={s("cursor: pointer; background: #d4337c; color: #fff; border: none; border-radius: 999px; padding: 16px 32px; font-family: 'Jost', sans-serif; font-size: 16px; font-weight: 500; text-decoration: none; display: inline-block;")}>See the Full Step-by-Step Guide →</Link>
          <Link href="/how-it-works" className="hv-linkpink" style={s("cursor: pointer; font-size: 16px; font-weight: 500; color: #3a322b; text-decoration: none; border-bottom: 1.5px solid #9e8c72; padding-bottom: 3px;")}>Read First-Timer FAQs →</Link>
        </div>
      </section>

      {/* ===== COMMUNITY ===== */}
      <section style={s(`padding: clamp(64px,8vw,110px) clamp(18px,4vw,48px); ${REVEAL}`)}>
        <div style={s("max-width: 760px; margin: 0 auto; text-align: center;")}>
          <p style={s("margin: 0 0 16px; font-size: 13px; letter-spacing: 0.16em; text-transform: uppercase; color: #d4337c; font-weight: 500;")}>Community</p>
          <h2 style={s("margin: 0; font-family: 'Cardo', serif; font-weight: 400; font-size: clamp(30px,4vw,48px); color: #3a322b;")}>Join the community</h2>
          <p style={s("margin: 22px auto 0; max-width: 600px; font-size: clamp(16px,1.7vw,18px); line-height: 1.7; color: #6a5f51;")}>We’re just getting started — and we’d love for you to be part of it from day one. Follow along on Instagram for honest period talk, behind-the-scenes updates, and a community that’s done pretending periods are something to whisper about.</p>
          <a href="https://instagram.com/shethrives.in" target="_blank" rel="noopener" className="hv-pinkbtn" style={s("display: inline-flex; align-items: center; gap: 10px; margin-top: 28px; background: #d4337c; color: #fff; text-decoration: none; font-size: 16px; font-weight: 500; padding: 14px 28px; border-radius: 999px;")}>
            <span style={s("width: 18px; height: 18px; display: inline-flex;")} dangerouslySetInnerHTML={{ __html: igIcon }} />Follow @shethrives.in
          </a>
        </div>
        <div style={s("max-width: 1100px; margin: clamp(36px,4vw,52px) auto 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: clamp(12px,1.4vw,18px);")}>
          {feed.map((f) => (
            <div key={f.tag} style={s(`aspect-ratio: 1 / 1; border-radius: 18px; background: ${f.bg}; display: flex; align-items: flex-end; padding: 14px;`)}>
              <span style={s("font-family: ui-monospace, monospace; font-size: 10px; letter-spacing: 0.05em; color: rgba(58,50,43,0.45); text-transform: uppercase;")}>{f.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WAITLIST (mid) ===== */}
      <section id="waitlist" style={s("padding: clamp(24px,4vw,64px) clamp(18px,4vw,48px);")}>
        <div style={s("max-width: 1100px; margin: 0 auto; background: #d4337c; border-radius: 32px; padding: clamp(40px,5vw,72px) clamp(24px,4vw,64px); position: relative; overflow: hidden;")}>
          <div style={s("position: absolute; top: -90px; right: -60px; width: 320px; height: 320px; border-radius: 50%; background: #e8789a; opacity: 0.4;")} />
          <div style={s("position: relative; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: clamp(28px,4vw,56px); align-items: center;")}>
            <div>
              <h2 style={s("margin: 0; font-family: 'Cardo', serif; font-weight: 400; font-size: clamp(30px,4vw,48px); line-height: 1.05; color: #fff;")}>Be the first to know<span style={s("color: #f0ebe2;")}>.</span></h2>
              <p style={s("margin: 18px 0 0; font-size: 17px; line-height: 1.65; color: rgba(255,255,255,0.9); max-width: 400px;")}>Leave your name and number and we’ll let you know the moment SheThrives launches. No spam — just one message, when it matters.</p>
            </div>
            <div>
              <MidWaitlistForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===== APP TEASER ===== */}
      <section style={s("padding: clamp(40px,5vw,80px) clamp(18px,4vw,48px) clamp(72px,8vw,120px);")}>
        <div style={s("max-width: 1100px; margin: 0 auto; background: #fff; border-radius: 28px; padding: clamp(32px,4vw,56px); display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 28px;")}>
          <div style={s("max-width: 540px;")}>
            <span style={s("display: inline-block; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: #d4337c; font-weight: 500; background: #f7eef3; padding: 6px 14px; border-radius: 999px;")}>App · Coming Soon</span>
            <h2 style={s("margin: 18px 0 10px; font-family: 'Cardo', serif; font-weight: 400; font-size: clamp(24px,3vw,34px); color: #3a322b;")}>Something else is coming too.</h2>
            <p style={s("margin: 0; font-size: 16px; line-height: 1.65; color: #6a5f51;")}>We’re building the SheThrives app — your cycle, your habits, your wellness, all in one place. More on this soon.</p>
          </div>
          <div style={s('flex: none; width: 200px; height: 250px; background-image: url("/images/app-teaser.png"); background-size: contain; background-repeat: no-repeat; background-position: center;')} />
        </div>
      </section>
    </main>
  );
}
