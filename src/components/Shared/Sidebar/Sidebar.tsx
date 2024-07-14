"use client";
import Image from "next/image";
import Link from "next/link";
import profile from "@/../public/images/profile.png";
import logo from "@/../public/images/logo.png";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import {
  PiFacebookLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiPaperPlaneTilt,
  PiShoppingCart,
  PiX,
} from "react-icons/pi";
import ThemeButton from "@/components/DarkMode/ThemeButton/ThemeButton";
import { sidebarsData } from "../../../../public/data/Sidebar";
import { useEffect, useState } from "react";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { resolvedTheme } = useTheme();
  const path = usePathname();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={`side-menu ${sidebarOpen ? "active" : ""}`}>
      <div
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className={`sidebar-btn close-btn cursor-pointer d-block d-lg-none`}
      >
        <i className="fs-two p1-color">
          <PiX />
        </i>
      </div>

      <div className="d-flex">
        <div className="side-menu-left">
          <div>
            <div className="d-flex flex-column gap-8 justify-content-center align-items-center mt-6">
              <div className="side-icon bgn2-color brn4">
                <Image src={logo} alt="logo" />
              </div>
              <Link href="#" className="position-relative">
                <div className="side-icon bg1-color">
                  <i className="n11-color">
                    <PiShoppingCart />
                  </i>
                </div>
                <div className="cart-counter">
                  <span className="n1-color">02</span>
                </div>
              </Link>
              <div className="d-flex flex-column align-items-center gap-1">
                <span className="toggle_name fs-eleven n5-color">
                  {resolvedTheme === "light" ? "DarkMood" : "LightMood"}
                </span>
                <div className="side-icon bg1-color">
                  <ThemeButton />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="side-menu-right overflow-y-auto">
          <div className="d-flex flex-column gap-6 justify-content-between py-10 px-5 bgn2-color h-100">
            <div className="">
              <div className="sidebar-profile">
                <div className="position-relative">
                  <div className="profile-img1 d-flex justify-content-center overflow-hidden mx-auto">
                    <Image src={profile} alt="user" className="" />
                  </div>
                  <span className="thumb">👋</span>
                </div>

                <h4 className="n5-color fw-semibold fs-five mt-2 text-center">
                  Chris Evans
                </h4>
                <span className="n5-color fs-nine d-block text-center">
                  Senior Software Engineer
                </span>
                <div className="d-flex justify-content-center gap-2 align-items-center mt-4">
                  <Link href="#" className="social-icon">
                    <i className="p1-color">
                      <PiFacebookLogo />
                    </i>
                  </Link>
                  <Link href="#" className="social-icon">
                    <i className="p1-color">
                      <PiInstagramLogo />
                    </i>
                  </Link>
                  <Link href="#" className="social-icon">
                    <i className="p1-color">
                      <PiX />
                    </i>
                  </Link>
                  <Link href="#" className="social-icon">
                    <i className="p1-color">
                      <PiLinkedinLogo />
                    </i>
                  </Link>
                </div>
              </div>

              <div className="line-divider my-4 my-md-8"></div>

              <div className="menu-list">
                <ul className="d-flex flex-column gap-3">
                  {sidebarsData.map(
                    ({
                      id,
                      name,
                      url,
                      icon,
                      numbers,
                    }: {
                      id: number;
                      name: string;
                      url: string;
                      icon: React.JSX.Element;
                      numbers?: number | undefined;
                    }) => (
                      <li key={id} className="rounded-3">
                        <Link
                          href={url}
                          onClick={() => setSidebarOpen(!sidebarOpen)}
                          className={`d-flex justify-content-between align-items-center rounded-3 ${
                            path == url && "active"
                          }`}
                        >
                          <div
                            className={`menu-item d-flex align-items-center gap-2 n5-color fs-eight px-3 py-2 `}
                          >
                            {icon}
                            {name}
                          </div>

                          {numbers ? (
                            <span className="n5-color bg2-color fs-ten px-1 pt-1 rounded-2 me-3">
                              {numbers}
                            </span>
                          ) : (
                            ""
                          )}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <Link
              href="/contact"
              className="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 mx-auto"
            >
              <i className="ph ph-paper-plane-tilt">
                <PiPaperPlaneTilt />
              </i>
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
