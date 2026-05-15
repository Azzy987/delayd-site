import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@/components/Analytics";

const siteUrl = "https://delayd.app";
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
        url: "/assets/app-icon.png",
        width: 1024,
        height: 1024,
        alt: "Delayd app icon"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Delayd - See what spending costs your dreams",
    description,
    images: ["/assets/app-icon.png"]
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
  themeColor: "#FBF7F0",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
