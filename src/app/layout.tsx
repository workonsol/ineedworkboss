import type { Metadata } from "next";
import { Inter, Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  variable: "--font-pixel",
  weight: "400",
});

const vt323 = VT323({
  subsets: ["latin"],
  variable: "--font-vt323",
  weight: "400",
});

export const metadata: Metadata = {
  title: "$WORK | #OpenToWork on Solana",
  description:
    "The first token for the perpetually employed. Always working. Never earning. $WORK on Solana.",
  openGraph: {
    title: "$WORK | #OpenToWork on Solana",
    description: "Always working. Never earning.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${pressStart.variable} ${vt323.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
