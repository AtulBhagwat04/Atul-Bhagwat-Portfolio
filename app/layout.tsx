import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/ui/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://atulbhagwat.dev"),
  title: "Atul Bhagwat | Senior Mobile App Developer & Flutter Expert",
  description: "Award-winning portfolio of Atul Bhagwat - Senior Mobile App Developer, Flutter Expert & Full Stack Engineer specializing in high-performance iOS, Android, and cross-platform applications.",
  keywords: [
    "Flutter Expert",
    "Mobile App Developer",
    "iOS Developer",
    "Android Developer",
    "Full Stack Developer",
    "Node.js",
    "Atul Bhagwat",
    "React Native",
    "Portfolio"
  ],
  authors: [{ name: "Atul Bhagwat" }],
  creator: "Atul Bhagwat",
  openGraph: {
    title: "Atul Bhagwat | Senior Mobile App Developer",
    description: "Building Mobile Apps That People Love And Businesses Trust.",
    url: "https://atulbhagwat.dev",
    siteName: "Atul Bhagwat Portfolio",
    images: [
      {
        url: "/images/developer_hero.png",
        width: 1200,
        height: 630,
        alt: "Atul Bhagwat - Mobile App Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atul Bhagwat | Senior Mobile App Developer",
    description: "Building Mobile Apps That People Love And Businesses Trust.",
    images: ["/images/developer_hero.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-bg-primary text-text-body antialiased selection:bg-accent-primary selection:text-bg-primary">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
