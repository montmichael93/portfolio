import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import "@/../public/scss/style.scss";
import Bootstrap from "@/components/Bootstrap/Bootstrap";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolify-Personal Portfolio Template",
  description:
    "Portfolify-Bootstrap 5 Personal React NextJS Portfolio Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={jost.className}>
        <Bootstrap>{children}</Bootstrap>
      </body>
    </html>
  );
}
