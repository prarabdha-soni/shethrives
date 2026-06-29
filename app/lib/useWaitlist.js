"use client";
import { useState } from "react";

// Waitlist form logic, ported from the source `handleWaitlist(id)`.
// Each form keeps its own done/error state, exactly like the original
// per-id submitted/errors maps.
export function useWaitlist() {
  const [done, setDone] = useState(false);
  const [error, setError] = useState(null);

  function submit(e) {
    e.preventDefault();
    const f = e.target;
    const name = (f.elements["name"].value || "").trim();
    const mobile = (f.elements["mobile"].value || "").replace(/\D/g, "");
    if (name.length < 2) {
      setError("Please enter your name.");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setError("Enter a valid 10-digit Indian mobile number.");
      return;
    }
    // Integration point: POST { name, mobile } to CRM endpoint when available.
    setError(null);
    setDone(true);
  }

  return { done, error, submit };
}
