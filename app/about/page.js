import Link from "next/link";
import { s } from "@/app/lib/style";
import { beliefs, SEO } from "@/app/lib/content";

export const metadata = {
  title: SEO.about.title,
  description: SEO.about.desc,
};

export default function AboutPage() {
  return (
    <main>
      <section style={s("padding: clamp(48px,7vw,100px) clamp(18px,4vw,48px) clamp(40px,5vw,72px); text-align: center;")}>
        <div style={s("max-width: 860px; margin: 0 auto;")}>
          <p style={s("margin: 0 0 18px; font-size: 13px; letter-spacing: 0.16em; text-transform: uppercase; color: #d4337c; font-weight: 500;")}>About SheThrives</p>
          <h1 style={s("margin: 0; font-family: 'Cardo', serif; font-weight: 400; font-size: clamp(36px,5.4vw,64px); line-height: 1.04; color: #3a322b;")}>Why SheThrives exists<span style={s("color: #d4337c;")}>.</span></h1>
          <p style={s("margin: 24px auto 0; max-width: 680px; font-size: clamp(17px,1.8vw,20px); line-height: 1.7; color: #5b5145;")}>SheThrives started with a simple, slightly annoyed question: why does something half the population deals with every single month still feel so hard to talk about — or buy?</p>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section style={s("padding: 0 clamp(18px,4vw,48px) clamp(56px,7vw,96px);")}>
        <div style={s("max-width: 1000px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: clamp(32px,4vw,56px); align-items: center;")}>
          <div style={s("position: relative; aspect-ratio: 4 / 5; border-radius: 28px; background: #fff; display: flex; align-items: center; justify-content: center;")}>
            <span style={s("font-family: ui-monospace, monospace; font-size: 11px; letter-spacing: 0.08em; color: rgba(58,50,43,0.4); text-transform: uppercase;")}>founder portrait — pending</span>
          </div>
          <div>
            <p style={s("margin: 0 0 14px; font-size: 13px; letter-spacing: 0.14em; text-transform: uppercase; color: #d4337c; font-weight: 500;")}>A note from our founder</p>
            <p style={s("margin: 0 0 16px; font-size: 17px; line-height: 1.8; color: #5b5145;")}>I’m Akriti, the founder of SheThrives. Before this, I spent years in finance — numbers, spreadsheets, due diligence. What I didn’t expect was that one of the clearest gaps I’d ever see wouldn’t be in a pitch deck, but in my own bathroom cabinet: how little had really changed in period care, and how much shame still sat quietly around something so normal.</p>
            <p style={s("margin: 0; font-size: 17px; line-height: 1.8; color: #5b5145;")}>SheThrives isn’t about selling you a cup. It’s about making one ordinary part of your month a little easier, a little more comfortable, and a lot less awkward to talk about — every single day.</p>
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section style={s("background: #fff; padding: clamp(56px,7vw,96px) clamp(18px,4vw,48px);")}>
        <div style={s("max-width: 1000px; margin: 0 auto;")}>
          <p style={s("margin: 0 0 16px; font-size: 13px; letter-spacing: 0.16em; text-transform: uppercase; color: #d4337c; font-weight: 500;")}>What we believe</p>
          <h2 style={s("margin: 0 0 clamp(28px,3vw,44px); font-family: 'Cardo', serif; font-weight: 400; font-size: clamp(28px,3.8vw,44px); color: #3a322b;")}>Four things we won’t compromise on.</h2>
          <div style={s("display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: clamp(18px,2vw,28px);")}>
            {beliefs.map((b) => (
              <div key={b.title} style={s("background: #f0ebe2; border-radius: 22px; padding: clamp(24px,3vw,32px);")}>
                <h3 style={s("margin: 0 0 8px; font-family: 'Cardo', serif; font-weight: 700; font-size: 21px; color: #3a322b;")}>{b.title}</h3>
                <p style={s("margin: 0; font-size: 15px; line-height: 1.6; color: #6a5f51;")}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S NEXT */}
      <section style={s("padding: clamp(56px,7vw,96px) clamp(18px,4vw,48px);")}>
        <div style={s("max-width: 760px; margin: 0 auto; text-align: center;")}>
          <p style={s("margin: 0 0 16px; font-size: 13px; letter-spacing: 0.16em; text-transform: uppercase; color: #d4337c; font-weight: 500;")}>What’s coming</p>
          <h2 style={s("margin: 0 0 18px; font-family: 'Cardo', serif; font-weight: 400; font-size: clamp(28px,3.8vw,44px); color: #3a322b;")}>We’re not stopping at the cup.</h2>
          <p style={s("margin: 0; font-size: clamp(16px,1.7vw,19px); line-height: 1.7; color: #6a5f51;")}>A cup wash, a steriliser, and a wellness app are all in the works — all part of one goal: making your everyday a little freer.</p>
        </div>
      </section>

      <section style={s("padding: clamp(24px,3vw,40px) clamp(18px,4vw,48px) clamp(56px,7vw,96px); text-align: center;")}>
        <Link href="/#waitlist" className="hv-pinkbtn" style={s("cursor: pointer; background: #d4337c; color: #fff; border: none; border-radius: 999px; padding: 17px 34px; font-family: 'Jost', sans-serif; font-size: 17px; font-weight: 500; text-decoration: none; display: inline-block;")}>Notify Me at Launch</Link>
      </section>
    </main>
  );
}
