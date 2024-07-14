"use client";
import { Jost } from "next/font/google";
import "./globals.css";
import "@/../public/scss/style.scss";
import Bootstrap from "@/components/Bootstrap/Bootstrap";
import Provider from "@/components/DarkMode/Provider/Provider";
import { Suspense, useState } from "react";
import Loading from "./loading";
import Sidebar from "@/components/Shared/Sidebar/Sidebar";
import Topbar from "@/components/Shared/Topbar/Topbar";
import ColorSwitcher from "@/components/Shared/ColorPalettes/ColorSwitcher";

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
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <title>Portfolify-Personal Portfolio Template</title>
      </head>
      <body className={jost.className}>
        <Provider>
          <Bootstrap>
            <Suspense fallback={<Loading />}>
              <div className="d-flex ">
                <div>
                  <Sidebar
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                  />
                  <Topbar
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                  />
                </div>
                <div className="main-content w-100">{children}</div>
              </div>
              <ColorSwitcher />
            </Suspense>
          </Bootstrap>
        </Provider>
      </body>
    </html>
  );
}
