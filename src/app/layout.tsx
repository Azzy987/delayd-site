import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@/components/Analytics";

const geist = localFont({
  src: "./fonts/geist-latin.woff2",
  display: "swap",
  variable: "--font-site"
});

const siteUrl = "https://www.delayd.app";
const description =
  "Delayd turns everyday spending into visible time delay toward the dreams you care about, so every purchase gets a sharper pause before it becomes a habit.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Delayd - See what spending costs your dreams",
    template: "%s | Delayd"
  },
  description,
  applicationName: "Delayd",
  keywords: [
    "Delayd",
    "iOS savings app",
    "spending behavior",
    "money mindfulness",
    "goal tracking",
    "waitlist"
  ],
  authors: [{ name: "Delayd" }],
  creator: "Delayd",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Delayd",
    title: "Delayd - See what spending costs your dreams",
    description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Delayd shows how spending changes the date of your dreams"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Delayd - See what spending costs your dreams",
    description,
    images: ["/opengraph-image"]
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/assets/app-icon.png"
  },
  alternates: {
    canonical: siteUrl
  }
};

export const viewport: Viewport = {
  themeColor: "#0A0A14",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Anti-flash: apply dark class before first paint only if explicitly saved as dark */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className={geist.variable}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
