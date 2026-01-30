import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gal Impex",
  description: "Gal Impex LLC corporate website"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
