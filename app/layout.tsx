import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// ✅ Use Inter instead of Geist (modern, clean font)
const inter = Inter({ subsets: ["latin"] });

// ✅ Use Roboto Mono instead of Geist_Mono (for monospace text)
const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App",
  description: "Created by Chanchal Teotia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* ✅ Use the font class */}
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
