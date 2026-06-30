import "./globals.css";
import { s } from "@/app/lib/style";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CookieBanner from "@/app/components/CookieBanner";

const OG_DESC = "Comfortable, reusable menstrual care made for Indian bodies and routines. Join the waitlist for launch updates.";

export const metadata = {
  metadataBase: new URL("https://shethrives.in"),
  title: "SheThrives — Menstrual Cup, Cup Wash & Steriliser | Made for India",
  description:
    "SheThrives makes menstrual cups, cup wash, and sterilisers designed for Indian bodies and routines. Comfortable, reusable, made to last up to 5 years. Join the waitlist.",
  robots: "index, follow",
  alternates: { canonical: "https://shethrives.in/" },
  icons: { icon: "/images/favicon.png" },
  openGraph: {
    type: "website",
    siteName: "SheThrives",
    title: "SheThrives — Menstrual Cup, Cup Wash & Steriliser | Made for India",
    description: OG_DESC,
    url: "https://shethrives.in/",
    images: ["https://shethrives.in/og-image.jpg"],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "SheThrives — Menstrual Cup, Cup Wash & Steriliser | Made for India",
    description: OG_DESC,
    images: ["https://shethrives.in/og-image.jpg"],
  },
};

const ORG_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SheThrives",
  legalName: "Binary Innovations OPC Private Limited",
  url: "https://shethrives.in/",
  logo: "https://shethrives.in/logo.png",
  sameAs: ["https://instagram.com/shethrives.in"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Goregaon East, Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
};

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Will it be uncomfortable?", acceptedAnswer: { "@type": "Answer", text: "When placed correctly, a cup sits low and soft — most people genuinely can't feel it. If you can, it usually just needs to go a little lower." } },
    { "@type": "Question", name: "Can I wear it overnight?", acceptedAnswer: { "@type": "Answer", text: "Yes. Up to 12 hours of wear means you can insert it before bed and empty it in the morning, leak-free." } },
    { "@type": "Question", name: "How do I know my size?", acceptedAnswer: { "@type": "Answer", text: "Most first-time users start with Medium. Smaller flow or sensitivity leans Small; heavier flow or having given birth often leans Large." } },
    { "@type": "Question", name: "How long does one cup last?", acceptedAnswer: { "@type": "Answer", text: "With proper care, a single SheThrives cup can last up to 5 years — replacing thousands of disposable products." } },
    { "@type": "Question", name: "Does it hurt the first time?", acceptedAnswer: { "@type": "Answer", text: "It shouldn't. The first insertion can feel unfamiliar, but with washed hands, a good fold and a relaxed body, it's painless. Discomfort means it needs adjusting, not forcing." } },
    { "@type": "Question", name: "Can it get lost inside me?", acceptedAnswer: { "@type": "Answer", text: "No — there's nowhere for it to go. The cervix sits at the top of the vaginal canal and keeps it in place. To remove, just bear down gently and pinch the base." } },
    { "@type": "Question", name: "How often do I empty it?", acceptedAnswer: { "@type": "Answer", text: "Every 8 to 12 hours depending on your flow. Most people settle into a simple morning-and-night rhythm." } },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* suppressHydrationWarning tolerates DOM mutations that browser
          extensions (Grammarly, password managers, translators, Dark Reader)
          make to <body> before React hydrates — the usual cause of spurious
          "error while hydrating" reports. */}
      <body suppressHydrationWarning>
        <div style={s("min-height: 100vh; background: #f0ebe2; overflow-x: clip;")}>
          <Header />
          {children}
          <Footer />
        </div>
        <CookieBanner />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_LD) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
      </body>
    </html>
  );
}
