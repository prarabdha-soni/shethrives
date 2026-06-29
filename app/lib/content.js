// All static content, ported verbatim from the source component's renderVals().
// The original used client-side `go(page)` handlers; here each destination is a
// real route so the nav becomes proper Next.js navigation.

// page key -> route
export const ROUTES = {
  home: "/",
  pdp: "/shop",
  article: "/how-it-works",
  blog: "/journal",
  about: "/about",
};

export const navLinks = [
  { label: "Shop", href: ROUTES.pdp },
  { label: "How it works", href: ROUTES.article },
  { label: "Journal", href: ROUTES.blog },
  { label: "About", href: ROUTES.about },
];

export const trust = [
  { label: "Up to 12 hours — wear it and forget it", icon: "clock" },
  { label: "Up to 5 years — one cup, years of periods", icon: "reuse" },
  { label: "Medical-grade silicone — safe & BPA-free", icon: "check" },
  { label: "Made for India — Indian bodies & routines", icon: "pin" },
];

export const eduSteps = [
  { title: "Pick your size", body: "A 30-second size guide based on your age and flow.", icon: "pin" },
  { title: "Learn the fold", body: "One simple fold, shown step-by-step with pictures.", icon: "leaf" },
  { title: "Insert & forget it", body: "Most first-timers get comfortable within 1–2 cycles.", icon: "clock" },
];

export const products = [
  { name: "Menstrual Cup", desc: "The everyday cup. Soft, flexible, medical-grade silicone in three sizes.", shot: "cup on white", bg: "#f7eef3", href: ROUTES.pdp },
  { name: "Cup Wash", desc: "A gentle, pH-balanced wash made just for your cup. No harsh chemicals, ever.", shot: "wash bottle", bg: "#f0ebe2", href: ROUTES.pdp },
  { name: "Steriliser", desc: "Boil-free sterilising between cycles. Quick, simple, done.", shot: "steriliser", bg: "#f4e7d9", href: ROUTES.pdp },
];

export const feed = [
  { tag: "lifestyle", bg: "#f7eef3" },
  { tag: "product", bg: "#f0ebe2" },
  { tag: "education", bg: "#f4e7d9" },
  { tag: "behind scenes", bg: "#efd9e4" },
  { tag: "community", bg: "#e9ddc9" },
];

export const blogPosts = [
  { title: "Your First Cup: What Actually Happens", cat: "First-Time Users", tag: "first cup", bg: "#f7eef3" },
  { title: "5 Period Myths We’re Done Repeating", cat: "Myths & Facts", tag: "myths", bg: "#efd9e4" },
  { title: "The Real Cost of Your Period — And What Changes With a Cup", cat: "Sustainability", tag: "cost", bg: "#f4e7d9" },
  { title: "Choosing Your Size, Without the Guesswork", cat: "Period Health", tag: "sizing", bg: "#e9ddc9" },
].map((p) => ({ ...p, href: ROUTES.article }));

export const blogTags = ["First-Time Users", "Myths & Facts", "Sustainability", "Period Health", "Community Stories"];

export const beliefs = [
  { title: "Education over assumption", body: "We’d rather explain too much than too little." },
  { title: "Comfort over clinical", body: "Your period deserves better than sterile language and harsh lighting." },
  { title: "Built to last", body: "Less waste, less recurring cost, more “set it and forget it.”" },
  { title: "Made for real routines", body: "Not aspirational, not idealised — just what actually works." },
];

// PDP
export const galleryLabels = ["Product on white", "In-hand lifestyle", "Packaging", "Size comparison"];
export const gallery = [
  { short: "on white", bg: "#fff" },
  { short: "in hand", bg: "#f7eef3" },
  { short: "packaging", bg: "#f4e7d9" },
  { short: "sizes", bg: "#f0ebe2" },
];
export const sizes = [
  { k: "S", name: "Small", color: "#d4337c" },
  { k: "M", name: "Medium", color: "#e8789a" },
  { k: "L", name: "Large", color: "#9e8c72" },
];
export const sizeNames = { S: "Small", M: "Medium", L: "Large" };
export const callouts = ["BPA-free", "Body-safe silicone", "Latex-free", "Reusable for up to 5 years"];
export const specs = [
  { k: "Capacity", v: "25–30 ml" },
  { k: "Wear time", v: "Up to 12 hrs" },
  { k: "Lifespan", v: "Up to 5 yrs" },
  { k: "Material", v: "Medical silicone" },
];
export const steps = [
  { n: "01", title: "Sterilise", body: "Boil your cup for 3–5 minutes before your first use and each new cycle." },
  { n: "02", title: "Fold & insert", body: "Wash hands, fold the cup, relax, and insert it low and angled back." },
  { n: "03", title: "Let it open", body: "Give it a gentle twist so it unfolds and forms a comfortable seal." },
  { n: "04", title: "Empty & rinse", body: "Every 8–12 hours, remove, empty, rinse, and reinsert. That’s it." },
];
export const insertSteps = [
  { n: "01", diagram: "wash hands", body: "Wash your hands and relax — tension is the only thing that makes this tricky." },
  { n: "02", diagram: "C-fold", body: "Fold the cup into a C or punch-down fold so the rim is small and smooth." },
  { n: "03", diagram: "insert low", body: "Sitting or squatting, insert it low and angled toward your tailbone." },
  { n: "04", diagram: "seal check", body: "Let go — it springs open. A gentle twist confirms the seal is set." },
];

export const pdpFaqs = [
  { q: "Will it be uncomfortable?", a: "When placed correctly, a cup sits low and soft — most people genuinely can’t feel it. If you can, it usually just needs to go a little lower." },
  { q: "Can I wear it overnight?", a: "Yes. Up to 12 hours of wear means you can insert it before bed and empty it in the morning, leak-free." },
  { q: "How do I know my size?", a: "Most first-time users start with Medium. Smaller flow or sensitivity leans Small; heavier flow or having given birth often leans Large." },
  { q: "How long does one cup last?", a: "With proper care, a single SheThrives cup can last up to 5 years — replacing thousands of disposable products." },
];

export const articleFaqs = [
  { q: "Does it hurt the first time?", a: "It shouldn’t. The first insertion can feel unfamiliar, but with washed hands, a good fold and a relaxed body, it’s painless. Discomfort means it needs adjusting, not forcing." },
  { q: "Can it get lost inside me?", a: "No — there’s nowhere for it to go. The cervix sits at the top of the vaginal canal and keeps it in place. To remove, just bear down gently and pinch the base." },
  { q: "How often do I empty it?", a: "Every 8 to 12 hours depending on your flow. Most people settle into a simple morning-and-night rhythm." },
];

export const footerCols = [
  { head: "Shop", items: [
    { label: "Menstrual Cup", href: ROUTES.pdp },
    { label: "Cup Wash", href: ROUTES.pdp },
    { label: "Steriliser", href: ROUTES.pdp },
  ] },
  { head: "Learn", items: [
    { label: "How it works", href: ROUTES.article },
    { label: "Choosing your size", href: ROUTES.article },
    { label: "Journal", href: ROUTES.blog },
  ] },
  { head: "Brand", items: [
    { label: "About SheThrives", href: ROUTES.about },
    { label: "Contact", href: ROUTES.home },
  ] },
];

export const legalLinks = ["Terms of Use", "Privacy Policy", "Shipping & Returns"];

// Per-page SEO, ported from updateSeoForPage()
export const SEO = {
  home: { title: "SheThrives — Menstrual Cup, Cup Wash & Steriliser | Made for India", desc: "SheThrives makes menstrual cups, cup wash, and sterilisers designed for Indian bodies and routines. Comfortable, reusable, made to last up to 5 years. Join the waitlist." },
  pdp: { title: "SheThrives Menstrual Cup — Medical-Grade Silicone | Coming Soon", desc: "The SheThrives Menstrual Cup: medical-grade silicone, up to 12-hour wear, up to 5-year lifespan. Sizes S/M/L. Coming soon — join the waitlist." },
  about: { title: "About SheThrives — Why We Exist", desc: "SheThrives is a women’s wellness brand built on education, comfort, and trust. Read why founder Akriti Soni started SheThrives." },
  blog: { title: "The SheThrives Journal — Period Care, Myths & Wellness", desc: "Honest, stigma-free reading on periods, menstrual cups, and everyday wellness from SheThrives." },
  article: { title: "Your First Menstrual Cup: A Calm, Complete Guide | SheThrives", desc: "A first-timer’s guide to using a menstrual cup — sizing, insertion, removal, and answers to common questions." },
};
