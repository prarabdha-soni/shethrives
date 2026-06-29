"use client";
import { s } from "@/app/lib/style";
import { useWaitlist } from "@/app/lib/useWaitlist";

// Mid-page waitlist block (home, inside the pink card)
export function MidWaitlistForm() {
  const { done, error, submit } = useWaitlist();
  if (done) {
    return (
      <div style={s("background: rgba(255,255,255,0.14); border: 1px solid rgba(255,255,255,0.3); border-radius: 20px; padding: 28px; text-align: center;")}>
        <p style={s("margin: 0; font-family: 'Cardo', serif; font-size: 24px; color: #fff;")}>You&apos;re on the list.</p>
        <p style={s("margin: 10px 0 0; font-size: 15px; color: rgba(255,255,255,0.85);")}>We&apos;ll be in touch the moment we go live. Thank you.</p>
      </div>
    );
  }
  const input = "width: 100%; padding: 16px 18px; border: none; border-radius: 14px; background: #fff; font-family: 'Jost', sans-serif; font-size: 16px; color: #3a322b;";
  return (
    <form onSubmit={submit} style={s("display: flex; flex-direction: column; gap: 12px;")}>
      <input name="name" type="text" placeholder="Your name" style={s(input)} />
      <input name="mobile" type="tel" inputMode="numeric" placeholder="10-digit mobile number" style={s(input)} />
      {error && <p style={s("margin: 0; font-size: 13px; color: #f0ebe2;")}>{error}</p>}
      <button type="submit" className="hv-whitebtn" style={s("cursor: pointer; background: #fff; color: #d4337c; border: none; border-radius: 14px; padding: 16px; font-family: 'Jost', sans-serif; font-size: 16px; font-weight: 600;")}>Notify Me at Launch</button>
      <p style={s("margin: 2px 0 0; font-size: 12px; color: rgba(255,255,255,0.7);")}>We&apos;ll only use this to tell you we&apos;ve launched.</p>
    </form>
  );
}

// Article end-of-page CTA (the white card)
export function ArticleWaitlistForm() {
  const { done, error, submit } = useWaitlist();
  const input = "flex: 1; min-width: 140px; padding: 16px 18px; border: 1.5px solid #ddd3c4; border-radius: 14px; background: #f0ebe2; font-family: 'Jost', sans-serif; font-size: 16px; color: #3a322b;";
  return (
    <div style={s("margin-top: 48px; background: #fff; border-radius: 24px; padding: clamp(28px,3.5vw,40px); text-align: center;")}>
      {done ? (
        <p style={s("margin: 0; font-family: 'Cardo', serif; font-size: 24px; color: #d4337c;")}>You&apos;re on the list — thank you.</p>
      ) : (
        <>
          <h3 style={s("margin: 0 0 8px; font-family: 'Cardo', serif; font-weight: 400; font-size: 26px; color: #3a322b;")}>Feel ready? Be first to know.</h3>
          <p style={s("margin: 0 0 20px; font-size: 16px; color: #6a5f51;")}>No spam, just a note the day we launch.</p>
          <form onSubmit={submit} style={s("display: flex; flex-wrap: wrap; gap: 12px; max-width: 520px; margin: 0 auto;")}>
            <input name="name" type="text" placeholder="Your name" style={s(input)} />
            <input name="mobile" type="tel" inputMode="numeric" placeholder="10-digit mobile" style={s(input)} />
            <button type="submit" className="hv-pinkbtn" style={s("cursor: pointer; background: #d4337c; color: #fff; border: none; border-radius: 14px; padding: 16px 26px; font-family: 'Jost', sans-serif; font-size: 16px; font-weight: 500; width: 100%;")}>Notify me at launch</button>
          </form>
          {error && <p style={s("margin: 12px 0 0; font-size: 13px; color: #d4337c;")}>{error}</p>}
        </>
      )}
    </div>
  );
}
