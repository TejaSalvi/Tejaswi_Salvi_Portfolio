import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tejaswi Salvi — Senior React & Full Stack Developer",
  description: "Portfolio of Tejaswi Salvi, Senior React & Full Stack Developer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
