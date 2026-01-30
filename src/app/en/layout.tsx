import type { Metadata } from "next";
import LocaleLayout from "@/components/LocaleLayout";

export const metadata: Metadata = {
  title: "Fire Impex LLC | Your trusted partner",
  description:
    "Fire Impex LLC delivers fire safety, fire protection systems, BMS/BAS automation, and training since 1971."
};

const navItems = [
  { label: "Home", href: "" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Packages", href: "/subscription-packages" },
  { label: "Contact", href: "/contact" }
];

export default function EnglishLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <LocaleLayout
      locale="en"
      navItems={navItems}
      tagline="Your trusted partner"
    >
      {children}
    </LocaleLayout>
  );
}
