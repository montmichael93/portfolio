import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/images/logo.png";

const SideMenu = () => {
  return (
    <div className="side-menu">
      {/* <!-- sidebar-btn  --> */}
      <div className="sidebar-btn close-btn cursor-pointer d-block d-lg-none">
        <i className="ph ph-x fs-two p1-color"></i>
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
                  <i className="ph ph-shopping-cart n11-color"></i>
                </div>
                <div className="cart-counter">
                  <span className="n1-color">02</span>
                </div>
              </Link>
              <div className="d-flex flex-column align-items-center gap-1">
                <span className="toggle_name fs-eleven n5-color">DarkMode</span>
                <button id="toggle" className="side-icon bg1-color mood_toggle">
                  <i
                    className="ph-fill ph-moon fs-five n11-color"
                    id="mood_icon"
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="side-menu-right overflow-y-auto">
          <div className="d-flex flex-column gap-6 justify-content-between py-10 px-5 bgn2-color h-100">
            <div className="">
              <div className="sidebar-profile">
                <div className="position-relative">
                  <div className="profile-img d-flex justify-content-center overflow-hidden">
                    <Image
                      src="./assets/images/profile.png"
                      alt="user"
                      className=""
                    />
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
                    <i className="ph ph-facebook-logo p1-color"></i>
                  </Link>
                  <Link href="#" className="social-icon">
                    <i className="ph ph-instagram-logo p1-color"></i>
                  </Link>
                  <Link href="#" className="social-icon">
                    <i className="ph ph-x-logo p1-color"></i>
                  </Link>
                  <Link href="#" className="social-icon">
                    <i className="ph ph-linkedin-logo p1-color"></i>
                  </Link>
                </div>
              </div>
              <div className="line-divider my-4 my-md-8"></div>

              <div className="menu-list">
                <ul className="d-flex flex-column gap-3">
                  <li className="rounded-3">
                    <Link
                      href="index.html"
                      className="d-flex align-items-center gap-2 n5-color fs-eight px-3 py-2"
                    >
                      <i className="ph ph-user fs-six"></i> About Me
                    </Link>
                  </li>

                  <li className="rounded-3">
                    <Link
                      href="portfolio.html"
                      className="d-flex justify-content-between align-items-center"
                    >
                      <div className="d-flex align-items-center gap-2 n5-color fs-eight px-3 py-2">
                        <i className="ph ph-code-block fs-six"></i> Portfolio
                      </div>
                      <span className="n5-color bg2-color fs-ten px-1 pt-1 rounded-2 me-3">
                        16
                      </span>
                    </Link>
                  </li>
                  <li className="rounded-3">
                    <Link
                      href="price.html"
                      className="d-flex align-items-center gap-2 n5-color fs-eight px-3 py-2"
                    >
                      <i className="ph ph-briefcase fs-six"></i>Services &
                      Pricing
                    </Link>
                  </li>
                  <li className="rounded-3 bg1-color">
                    <Link
                      href="resume.html"
                      className="d-flex align-items-center gap-2 n11-color fs-eight px-3 py-2"
                    >
                      <i className="ph ph-notebook fs-six"></i> Resume
                    </Link>
                  </li>
                  <li className="rounded-3">
                    <Link
                      href="blog.html"
                      className="d-flex align-items-center gap-2 n5-color fs-eight px-3 py-2"
                    >
                      <i className="ph ph-newspaper-clipping fs-six"></i>Blog
                    </Link>
                  </li>
                  <li className="rounded-3">
                    <Link
                      href="contact.html"
                      className="d-flex align-items-center gap-2 n5-color fs-eight px-3 py-2"
                    >
                      <i className="ph ph-envelope fs-six"></i>Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <Link
              href="contact.html"
              className="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 mx-auto"
            >
              <i className="ph ph-paper-plane-tilt"></i>Hire Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
