import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tejaswi Salvi — Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer in France with 10+ years of experience in React, Next.js, TypeScript and scalable applications, plus AI-assisted development projects.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
