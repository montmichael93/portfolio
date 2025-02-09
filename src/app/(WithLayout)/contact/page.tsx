import FadeDown from "@/components/motionEffect/FadeDown";
import GetInTouch from "@/components/Pages/Contact/GetInTouch";
import Footer from "@/components/Shared/Footer/Footer";
import Link from "next/link";
import {
  PiCompass,
  PiDeviceMobileCamera,
  PiEnvelopeOpen,
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
                  {" "}
                  Mike.montero1993@gmail.com
                </Link>{" "}
                .Want to get connected? Follow me on the social channels below.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-2 align-items-center mt-4">
                <Link
                  href="https://www.linkedin.com/in/michaelmontero-dev/"
                  className="social-icon"
                >
                  <i className="p1-color">
                    <PiLinkedinLogo />
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
                Lets Get In Touch
              </p>
            </div>
          </FadeDown>

          <FadeDown>
            <div className="d-flex flex-wrap gap-3 gap-md-6 align-items-center justify-content-between mt-8 mt-md-15">
              <div className="d-flex gap-3 align-items-center p-3 p-md-5 br1-left">
                <i className="p1-color fs-one">
                  <PiDeviceMobileCamera />
                </i>
                <div>
                  <span className="n5-color fs-five fw-semibold d-block mb-1 mb-sm-2">
                    Phone
                  </span>
                  <Link href="tel:+6494461709" className="n4-color fs-nine">
                    347-409-8196
                  </Link>
                </div>
              </div>
              <div className="d-flex gap-3 align-items-center p-3 p-md-5 br1-left">
                <i className="p1-color fs-one">
                  <PiCompass />
                </i>
                <div>
                  <span className="n5-color fs-five fw-semibold d-block mb-1 mb-sm-2">
                    Location
                  </span>
                  <span className="n4-color fs-nine">
                    2067 Davidson Avenue, 10453, New York
                  </span>
                </div>
              </div>
              <div className="d-flex gap-3 align-items-center p-3 p-md-5 br1-left">
                <i className="ph ph-envelope-open p1-color fs-one">
                  <PiEnvelopeOpen />
                </i>
                <div>
                  <span className="n5-color fs-five fw-semibold d-block mb-1 mb-sm-2">
                    Email
                  </span>
                  <Link
                    href="mailto:someone@example.com"
                    className="n4-color fs-nine"
                  >
                    Mike.montero1993@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </FadeDown>

          <FadeDown>
            <div data-aos="zoom-in" className="mt-8 mt-md-15">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.7906431492524!2d-73.91061072414966!3d40.85452007137248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f4723f51af77%3A0x7a4bcc5f08df7796!2s2067%20Davidson%20Ave%2C%20Bronx%2C%20NY%2010453!5e0!3m2!1sen!2sus!4v1738618142135!5m2!1sen!2sus"
                loading="lazy"
                className="w-100 h-400 border-0"
              ></iframe>
            </div>
          </FadeDown>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
