import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IP Generator",
  description: "Generate music and video concept ideas through an intuitive interface",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
