import type { Metadata } from "next";
import LocaleLayout from "@/components/LocaleLayout";

export const metadata: Metadata = {
  title: "Гал Импекс ХХК | Таны найдвартай түнш",
  description:
    "Гал Импекс ХХК нь 1971 оноос галын аюулгүй байдал, гал унтраах тоног төхөөрөмж, автомат систем, сургалт зөвлөх үйлчилгээ үзүүлдэг."
};

const navItems = [
  { label: "Нүүр", href: "" },
  { label: "Бидний тухай", href: "/about" },
  { label: "Үйлчилгээ", href: "/services" },
  { label: "Төслүүд", href: "/projects" },
  { label: "Багц", href: "/subscription-packages" },
  { label: "Холбоо барих", href: "/contact" }
];

export default function MongolianLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <LocaleLayout
      locale="mn"
      navItems={navItems}
      tagline="Таны найдвартай түнш"
    >
      {children}
    </LocaleLayout>
  );
}
