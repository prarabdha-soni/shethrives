"use client";
import { useEffect, useState } from "react";
import { s } from "@/app/lib/style";

export default function CookieBanner() {
  // Mirrors the source: visible by default, hidden once st_cookie === '1'.
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem("st_cookie") === "1") setDismissed(true);
    } catch (e) {}
  }, []);

  function accept() {
    setDismissed(true);
    try {
      localStorage.setItem("st_cookie", "1");
    } catch (e) {}
  }

  if (dismissed) return null;

  return (
    <div style={s("position: fixed; left: clamp(12px,3vw,24px); right: clamp(12px,3vw,24px); bottom: clamp(12px,3vw,24px); z-index: 70; max-width: 720px; margin: 0 auto; background: #fff; border-radius: 18px; box-shadow: 0 18px 50px -16px rgba(58,50,43,0.4); padding: 16px 18px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 14px;")}>
      <span style={s("font-size: 14px; line-height: 1.5; color: #4a4137; flex: 1; min-width: 220px;")}>We use cookies to keep the site running smoothly and understand what&apos;s helpful.</span>
      <button onClick={accept} className="hv-pinkbtn" style={s("cursor: pointer; background: #d4337c; color: #fff; border: none; border-radius: 999px; padding: 12px 28px; font-family: 'Jost', sans-serif; font-size: 15px; font-weight: 500;")}>Accept</button>
    </div>
  );
}
