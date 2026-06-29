"use client";
import { useState } from "react";
import { s } from "@/app/lib/style";
import { gallery, galleryLabels, sizes, sizeNames, callouts } from "@/app/lib/content";
import { useWaitlist } from "@/app/lib/useWaitlist";

export default function PdpProduct() {
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [size, setSize] = useState("M");
  const { done, error, submit } = useWaitlist();

  const galleryActive = galleryLabels[galleryIdx];
  const sizeName = sizeNames[size];
  const pdpInput = "width: 100%; padding: 16px 18px; border: 1.5px solid #ddd3c4; border-radius: 14px; background: #f0ebe2; font-family: 'Jost', sans-serif; font-size: 16px; color: #3a322b;";

  return (
    <div style={s("display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: clamp(32px,4vw,64px); align-items: start;")}>
      {/* GALLERY */}
      <div>
        <div style={s("position: relative; aspect-ratio: 1 / 1; border-radius: 28px; background: #fff; display: flex; align-items: center; justify-content: center; overflow: hidden;")}>
          <div style={s("position: absolute; top: 20px; left: 20px; background: #d4337c; color: #fff; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 500; padding: 8px 16px; border-radius: 999px;")}>Coming soon</div>
          <div style={s("position: absolute; width: 60%; height: 60%; border-radius: 50%; background: #f7eef3;")} />
          <span style={s("position: relative; font-family: ui-monospace, monospace; font-size: 12px; letter-spacing: 0.08em; color: rgba(58,50,43,0.4); text-transform: uppercase;")}>{galleryActive}</span>
        </div>
        <div style={s("margin-top: 14px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;")}>
          {gallery.map((g, i) => (
            <button
              key={g.short}
              onClick={() => setGalleryIdx(i)}
              style={s(`cursor: pointer; aspect-ratio: 1 / 1; border-radius: 14px; background: ${g.bg}; border: 2px solid ${i === galleryIdx ? "#d4337c" : "transparent"}; padding: 0; display: flex; align-items: flex-end; justify-content: flex-start;`)}
            >
              <span style={s("font-family: ui-monospace, monospace; font-size: 8px; color: rgba(58,50,43,0.5); padding: 6px; text-align: left; line-height: 1.2;")}>{g.short}</span>
            </button>
          ))}
        </div>
      </div>

      {/* INFO */}
      <div>
        <h1 style={s("margin: 0; font-family: 'Cardo', serif; font-weight: 400; font-size: clamp(32px,4.4vw,52px); line-height: 1.05; color: #3a322b;")}>SheThrives Menstrual Cup</h1>
        <p style={s("margin: 14px 0 0; font-size: 17px; line-height: 1.65; color: #6a5f51; max-width: 480px;")}>Soft, medical-grade silicone designed for first-time users. Up to 12 hours of reliable, comfortable protection — reusable for up to 5 years.</p>
        <p style={s("margin: 22px 0 0; font-size: 15px; color: #9e8c72;")}>Launching at <span style={s("font-family: 'Cardo', serif; font-size: 22px; color: #3a322b;")}>₹700</span></p>

        {/* SIZE */}
        <div style={s("margin-top: 30px;")}>
          <div style={s("display: flex; align-items: baseline; justify-content: space-between;")}>
            <span style={s("font-size: 14px; letter-spacing: 0.04em; text-transform: uppercase; color: #4a4137; font-weight: 500;")}>Choose your size</span>
            <span style={s("font-size: 14px; color: #9e8c72;")}>Selected: {sizeName}</span>
          </div>
          <div style={s("margin-top: 14px; display: flex; gap: 12px; flex-wrap: wrap;")}>
            {sizes.map((sz) => (
              <button
                key={sz.k}
                onClick={() => setSize(sz.k)}
                style={s(`cursor: pointer; flex: 1; min-width: 92px; background: #fff; border: 2px solid ${size === sz.k ? "#d4337c" : "#eadfce"}; border-radius: 16px; padding: 16px 12px; display: flex; flex-direction: column; align-items: center; gap: 8px;`)}
              >
                <span style={s(`width: 22px; height: 22px; border-radius: 50%; background: ${sz.color};`)} />
                <span style={s("font-family: 'Cardo', serif; font-size: 19px; color: #3a322b;")}>{sz.k}</span>
                <span style={s("font-size: 12px; color: #9e8c72;")}>{sz.name}</span>
              </button>
            ))}
          </div>
          <p style={s("margin: 12px 0 0; font-size: 14px; color: #6a5f51;")}>Not sure? Most first-time users start with <strong style={s("color: #d4337c; font-weight: 500;")}>Medium</strong>.</p>
        </div>

        {/* NOTIFY FORM */}
        <div style={s("margin-top: 30px; background: #fff; border-radius: 22px; padding: clamp(22px,3vw,30px);")}>
          {done ? (
            <div style={s("text-align: center; padding: 8px 0;")}>
              <p style={s("margin: 0; font-family: 'Cardo', serif; font-size: 24px; color: #d4337c;")}>You&apos;re on the list.</p>
              <p style={s("margin: 10px 0 0; font-size: 15px; color: #6a5f51;")}>We&apos;ll message you the moment the {sizeName} cup launches.</p>
            </div>
          ) : (
            <>
              <p style={s("margin: 0 0 16px; font-family: 'Cardo', serif; font-size: 21px; color: #3a322b;")}>Notify me when this launches</p>
              <form onSubmit={submit} style={s("display: flex; flex-direction: column; gap: 12px;")}>
                <input name="name" type="text" placeholder="Your name" style={s(pdpInput)} />
                <input name="mobile" type="tel" inputMode="numeric" placeholder="10-digit mobile number" style={s(pdpInput)} />
                {error && <p style={s("margin: 0; font-size: 13px; color: #d4337c;")}>{error}</p>}
                <button type="submit" className="hv-pinkbtn" style={s("cursor: pointer; background: #d4337c; color: #fff; border: none; border-radius: 14px; padding: 16px; font-family: 'Jost', sans-serif; font-size: 16px; font-weight: 500;")}>Notify me at launch</button>
              </form>
            </>
          )}
        </div>

        {/* MATERIAL CALLOUTS */}
        <div style={s("margin-top: 26px; display: flex; flex-wrap: wrap; gap: 10px;")}>
          {callouts.map((c) => (
            <span key={c} style={s("font-size: 13px; color: #6a5f51; background: #fff; border: 1px solid rgba(158,140,114,0.25); border-radius: 999px; padding: 8px 16px;")}>{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
