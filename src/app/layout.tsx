"use client";

import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import "@/../public/scss/style.scss";
import Bootstrap from "@/components/Bootstrap/Bootstrap";
import Provider from "@/components/DarkMode/Provider/Provider";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";
import Sidebar from "@/components/Shared/Sidebar/Sidebar";
import Topbar from "@/components/Shared/Topbar/Topbar";
import Footer from "@/components/Shared/Footer/Footer";

const jost = Jost({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Portfolify-Personal Portfolio Template",
//   description:
//     "Portfolify-Bootstrap 5 Personal React NextJS Portfolio Template",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 992) {
      setSidebarIsOpen(true);
    } else {
      setSidebarIsOpen(false);
    }
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setSidebarIsOpen(false);
      } else {
        setSidebarIsOpen(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={jost.className}>
        <Provider>
          <Bootstrap>
            <Suspense fallback={<Loading />}>
              <div className="d-flex">
                <Sidebar
                  sidebarIsOpen={sidebarIsOpen}
                  setSidebarIsOpen={setSidebarIsOpen}
                />
                <Topbar
                  sidebarIsOpen={sidebarIsOpen}
                  setSidebarIsOpen={setSidebarIsOpen}
                />

                {children}
              </div>
            </Suspense>
          </Bootstrap>
        </Provider>
      </body>
    </html>
  );
}
