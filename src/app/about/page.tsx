import Image from "next/image";
import resumeIcon from "@/../public/images/resume-icon.png";
import user from "@/../public/images/user.jpg";
import { PiArrowRight } from "react-icons/pi";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <section className="pt-120 pb-60 br-bottom-n3 overflow-hidden mt-10 mt-lg-0">
        <div className="container">
          <div className="d-flex flex-wrap gap-10 gap-md-15 align-items-center justify-content-between">
            <div className="banner-content">
              <span className="n5-color fs-five">
                HI, I&apos;M A FREELANCER
              </span>
              <h2 className="typing-text display-one p1-color mt-2 mb-3">
                Developer
              </h2>
              <p className="fs-seven n5-color">
                I&apos;m a software engineer specializing in scalable web apps.
                Explore my
                <Link href="blog.html" className="p1-color">
                  {" "}
                  blog
                </Link>
                ,
                <Link href="portfolio.html" className="p1-color">
                  project portfolio
                </Link>
                and{" "}
                <Link href="resume.html" className="p1-color">
                  online resume
                </Link>
                .
              </p>
              <div className="d-flex flex-wrap align-itmes-center gap-3 gap-md-6 mt-4 mt-md-8">
                <Link
                  href="portfolio.html"
                  className="p-btn n11-color bg1-color fw-medium n1-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2"
                >
                  <PiArrowRight />
                  View Portfolio
                </Link>
                <Link
                  href="resume.html"
                  className="p-btn n11-color bgn51-color fw-medium n1-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2"
                >
                  <Image src={resumeIcon} alt="icon" />
                  View Resume
                </Link>
              </div>
            </div>

            <div className="position-relative profile-img">
              <div className="user-bg"></div>
              <div className="bg-white">
                <Image src={user} alt="user" className="user-img" />
              </div>
            </div>
          </div>
          {/* <!-- counter --> */}
          <div className="banner-counter d-flex flex-wrap flex-xl-nowrap align-items-center gap-3 gap-md-6 mt-10 mt-md-17">
            <div className="d-flex align-items-center gap-2 gap-xl-4">
              <h2 className="display-two fw-semibold p1-color">
                <span className="counter">5</span>
              </h2>
              <div className="line"></div>
              <span className="n5-color">Years of Experience</span>
            </div>
            <div className="d-flex align-items-center gap-2 gap-xl-4">
              <h2 className="display-two fw-semibold p1-color">
                <span className="counter">110</span>
              </h2>
              <div className="line"></div>
              <span className="n5-color">Projects Completed</span>
            </div>
            <div className="d-flex align-items-center gap-2 gap-xl-4">
              <h2 className="display-two fw-semibold p1-color d-flex gap-1">
                <span className="counter">6</span>k
              </h2>
              <div className="line"></div>
              <span className="n5-color">Clients Worldwide</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
