import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";

const thaiFont = IBM_Plex_Sans_Thai({
  variable: "--font-thai",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
});

const title = "LIVERSCAN by Zest-Med | เครื่องประเมินสุขภาพตับแบบพกพา";
const description =
  "LIVERSCAN เครื่องประเมินความแข็งของตับและไขมันพอกตับแบบไม่รุกล้ำ ด้วยเทคโนโลยี Transient Elastography พร้อมทีม Zest-Med สาธิต อบรม และดูแลหลังการขายในประเทศไทย";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "LIVERSCAN by Zest-Med",
    locale: "th_TH",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="th" className={`${thaiFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
