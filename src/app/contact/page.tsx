import FadeDown from "@/components/motionEffect/FadeDown";
import GetInTouch from "@/components/Pages/Contact/GetInTouch";
import Footer from "@/components/Shared/Footer/Footer";
import Link from "next/link";
import {
  PiFacebookLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiStackOverflowLogo,
  PiXLogo,
  PiYoutubeLogo,
} from "react-icons/pi";

const Contact = () => {
  return (
    <div>
      <section className="pt-120 pb-120 mt-10 mt-lg-0">
        <FadeDown>
          <div className="pb-60 br-bottom-n3">
            <div className="page-heading">
              <h3 className="page-title fs-onefw-semibold n5-color mb-2 mb-md-3 text-center">
                Contact
              </h3>
              <p className="fs-seven n5-color mb-4 mb-md-8 text-center">
                Interested in hiring me for your project or just want to say hi?
                You can fill in the contact form below or send me an email to
                <Link href="#" className="p1-color">
                  evans@yourwebsite.com
                </Link>{" "}
                .Want to get connected? Follow me on the social channels below.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-2 align-items-center mt-4">
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
                  <i className=" p1-color">
                    <PiXLogo />
                  </i>
                </Link>
                <Link href="#" className="social-icon">
                  <i className="p1-color">
                    <PiLinkedinLogo />
                  </i>
                </Link>
                <Link href="#" className="social-icon">
                  <i className="p1-color">
                    <PiStackOverflowLogo />
                  </i>
                </Link>
                <Link href="#" className="social-icon">
                  <i className="p1-color">
                    <PiYoutubeLogo />
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </FadeDown>

        <div className="container mt-8 mt-md-15">
          <FadeDown>
            <div className="section-heading">
              <div className="d-flex align-items-center gap-2">
                <div className="title-line"></div>
                <h2 className="display-four n5-color fw-semibold">
                  Contact Details
                </h2>
              </div>
              <p className="fs-seven n4-color mt-2 mt-md-4">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn&apos;t anything embarrassing hidden in the middle
                of text.
              </p>
            </div>
          </FadeDown>

          <FadeDown>
            <div className="d-flex flex-wrap gap-3 gap-md-6 align-items-center justify-content-between mt-8 mt-md-15">
              <div className="d-flex gap-3 align-items-center p-3 p-md-5 br1-left">
                <i className="ph ph-device-mobile-camera p1-color fs-one"></i>
                <div>
                  <span className="n5-color fs-five fw-semibold d-block mb-2">
                    Phone
                  </span>
                  <Link href="tel:+6494461709" className="n4-color fs-nine">
                    +123-456-7890
                  </Link>
                </div>
              </div>
              <div className="d-flex gap-3 align-items-center p-3 p-md-5 br1-left">
                <i className="ph ph-compass p1-color fs-one"></i>
                <div>
                  <span className="n5-color fs-five fw-semibold d-block mb-2">
                    Location
                  </span>
                  <span className="n4-color fs-nine">
                    123 Example Street, City, Country
                  </span>
                </div>
              </div>
              <div className="d-flex gap-3 align-items-center p-3 p-md-5 br1-left">
                <i className="ph ph-envelope-open p1-color fs-one"></i>
                <div>
                  <span className="n5-color fs-five fw-semibold d-block mb-2">
                    Email
                  </span>
                  <Link
                    href="mailto:someone@example.com"
                    className="n4-color fs-nine"
                  >
                    yourmail@domain.com
                  </Link>
                </div>
              </div>
            </div>
          </FadeDown>

          <FadeDown>
            <div data-aos="zoom-in" className="mt-8 mt-md-15">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747016.8778039054!2d87.7035567133411!3d23.489442669650543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1719998700959!5m2!1sen!2sbd"
                loading="lazy"
                className="w-100 h-400 border-0"
              ></iframe>
            </div>
          </FadeDown>
        </div>
      </section>
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Contact;
