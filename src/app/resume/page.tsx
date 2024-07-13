import Image from "next/image";
import Link from "next/link";
import {
  PiEnvelopeSimple,
  PiFilePdf,
  PiGithubLogo,
  PiGlobe,
  PiGraduationCap,
  PiLinkedinLogo,
  PiMapPin,
  PiPhone,
  PiTrophy,
  PiXLogo,
} from "react-icons/pi";
import profile from "@/../public/images/profile.png";
const Resume = () => {
  return (
    <div className="main-content w-100">
      <section className="pt-120 pb-120 mt-10 mt-lg-0">
        <div className="pb-60 br-bottom-n3">
          <div data-aos="zoom-in" className="page-heading">
            <h3 className="page-title fs-onefw-semibold n5-color mb-2 mb-md-3 text-center">
              Online Resume
            </h3>

            <a
              href="/images/resume.pdf"
              className="w-max p-btn bg1-color fw-medium n1-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 mx-auto"
              download
            >
              <PiFilePdf /> Download PDF Version
            </a>
          </div>
        </div>

        <div className="container mt-8 mt-md-15">
          <div
            data-aos="fade-up"
            className="bgn2-color p-8 p-md-15 rounded-5 brn4"
          >
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 br-bottom-n3 pb-3 pb-md-6">
              <div>
                <h2 className="display-three p1-color fw-semibold">
                  Chris Evans
                </h2>
                <span className="n4-color fs-six fw-medium">
                  Senior Software Engineer
                </span>
              </div>
              <div className="ps-5 br-left-n3">
                <ul className="d-flex flex-column gap-3">
                  <li>
                    <Link
                      href="tel:+6494461709"
                      className="d-flex gap-2 align-items-center n4-color"
                    >
                      <PiPhone />
                      0123 4567 890
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="mailto:someone@example.com"
                      className="d-flex gap-2 align-items-center n4-color"
                    >
                      <PiEnvelopeSimple />
                      Evans@yourwebsite.com
                    </Link>
                  </li>
                  <li className="d-flex gap-2 align-items-center n4-color">
                    <PiGlobe />
                    www.yourwebsite.com
                  </li>
                  <li className="d-flex gap-2 align-items-center n4-color">
                    <PiMapPin />
                    New York
                  </li>
                </ul>
              </div>
            </div>

            <div className="d-flex flex-wrap flex-md-nowrap align-items-center gap-5 gap-md-10 pb-4 pb-md-8 br-bottom-n3 pt-60">
              <div className="resume-profile flex-shrink-0">
                <Image
                  src={profile}
                  alt="profile"
                  className="object-fit-cover"
                  width="127"
                  height="159"
                />
              </div>
              <p className="n4-color fs-seven">
                Summarise your career here. You can make a PDF version of your
                resume using our free Sketch template here. Donec quam felis,
                ultricies nec, pellentesque eu. Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Donec quam felis,
                ultricies nec, pellentesque eu, pretium quis, sem. Maecenas nec
                odio et ante tincidunt tempus. Donec vitae sapien ut libero
                venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget
                eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet
                nibh.
              </p>
            </div>

            <div className="resume-section row pt-60 pb-60 br-bottom-n3">
              <div className="col-md-8 col-lg-12 col-xl-8 col-xxl-9">
                <div className="d-flex align-items-center gap-2 mb-5 mb-md-10">
                  <div className="title-line2"></div>
                  <h2 className="fs-three p1-color fw-semibold">
                    Work Experiences
                  </h2>
                </div>

                <div className="mb-3 mb-md-6">
                  <div className="d-flex flex-wrap gap-2 gap-sm-3 justify-content-between align-items-center">
                    <span className="n5-color fs-six fw-medium">
                      Senior Software Engineer
                    </span>
                    <span className="n4-color fs-eight">
                      Google | 2023 - Present
                    </span>
                  </div>
                  <p className="n4-color fs-seven my-3 my-md-5">
                    Role description goes here ipsum dolor sit amet,
                    consectetuer adipiscing elit. Aenean commodo ligula eget
                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus. Donec quam
                    felis, ultricies nec, pellentesque eu, pretium quis, sem.
                    Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit. Aenean commodo ligula eget
                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus. Donec quam
                    felis.
                  </p>
                  <ul className="d-flex flex-column gap-3 ms-10">
                    <li className="n4-color fs-seven">
                      Lorem ipsum dolor sit amet, consectetuer.
                    </li>
                    <li className="n4-color fs-seven">
                      Aenean commodo ligula eget dolor.
                    </li>
                    <li className="n4-color fs-seven">
                      Etiam ultricies nisi vel augue.
                    </li>
                  </ul>
                </div>
                <div className="mb-3 mb-md-6">
                  <div className="d-flex flex-wrap gap-2 gap-sm-3 justify-content-between align-items-center">
                    <span className="n5-color fs-six fw-medium">
                      Lead Software Developer
                    </span>
                    <span className="n4-color fs-eight">
                      Apple | 2016 - 2019
                    </span>
                  </div>
                  <p className="n4-color fs-seven my-3 my-md-5">
                    Role description goes here ipsum dolor sit amet,
                    consectetuer adipiscing elit. Aenean commodo ligula eget
                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus. Donec quam
                    felis, ultricies nec, pellentesque eu, pretium quis, sem.
                    Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit. Aenean commodo ligula eget
                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus. Donec quam
                    felis.
                  </p>
                  <ul className="d-flex flex-column gap-3 ms-10">
                    <li className="n4-color fs-seven">
                      Lorem ipsum dolor sit amet, consectetuer.
                    </li>
                    <li className="n4-color fs-seven">
                      Aenean commodo ligula eget dolor.
                    </li>
                    <li className="n4-color fs-seven">
                      Etiam ultricies nisi vel augue.
                    </li>
                  </ul>
                </div>
                <div className="mb-3 mb-md-6">
                  <div className="d-flex flex-wrap gap-2 gap-sm-3 justify-content-between align-items-center">
                    <span className="n5-color fs-six fw-medium">
                      Senior Software Developer
                    </span>
                    <span className="n4-color fs-eight">
                      Dropbox | 2014 - 2016
                    </span>
                  </div>
                  <p className="n4-color fs-seven my-3 my-md-5">
                    Role description goes here ipsum dolor sit amet,
                    consectetuer adipiscing elit. Aenean commodo ligula eget
                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus. Donec quam
                    felis, ultricies nec, pellentesque eu, pretium quis, sem.
                    Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit. Aenean commodo ligula eget
                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus. Donec quam
                    felis.
                  </p>
                  <ul className="d-flex flex-column gap-3 ms-10">
                    <li className="n4-color fs-seven">
                      Lorem ipsum dolor sit amet, consectetuer.
                    </li>
                    <li className="n4-color fs-seven">
                      Aenean commodo ligula eget dolor.
                    </li>
                  </ul>
                </div>
                <div className="mb-3 mb-md-6">
                  <div className="d-flex flex-wrap gap-2 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                    <span className="n5-color fs-six fw-medium">
                      Senior Developer
                    </span>
                    <span className="n4-color fs-eight">
                      Uber | 2013 - 2014
                    </span>
                  </div>
                  <p className="n4-color fs-seven">
                    Role description goes here ipsum dolor sit amet,
                    consectetuer adipiscing elit. Aenean commodo ligula eget
                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus. Donec quam
                    felis, ultricies nec, pellentesque eu, pretium quis, sem.
                    Donec pede justo, fringilla vel.
                  </p>
                </div>
                <div className="mb-3 mb-md-6">
                  <div className="d-flex flex-wrap gap-2 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                    <span className="n5-color fs-six fw-medium">
                      Backend Developer
                    </span>
                    <span className="n4-color fs-eight">
                      Amazon | 2014 - 2016
                    </span>
                  </div>
                  <p className="n4-color fs-seven">
                    Role description goes here ipsum dolor sit amet,
                    consectetuer adipiscing elit. Aenean commodo ligula eget
                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus. Donec quam
                    felis, ultricies nec, pellentesque eu, pretium quis, sem.
                    Donec pede justo, fringilla vel.
                  </p>
                </div>
                <div className="mb-5 mb-md-10">
                  <div className="d-flex flex-wrap gap-2 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                    <span className="n5-color fs-six fw-medium">
                      Frontend Developer
                    </span>
                    <span className="n4-color fs-eight">
                      Startup | 2013 - 2014
                    </span>
                  </div>
                  <p className="n4-color fs-seven">
                    Role description goes here ipsum dolor sit amet,
                    consectetuer adipiscing elit. Aenean commodo ligula eget
                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus. Donec quam
                    felis, ultricies nec, pellentesque eu, pretium quis, sem.
                    Donec pede justo, fringilla vel.
                  </p>
                </div>

                <div className="d-flex align-items-center gap-2 mb-5 mb-md-10">
                  <div className="title-line2"></div>
                  <h2 className="fs-three p1-color fw-semibold">Projects</h2>
                </div>
                <div className="mb-3 mb-md-6">
                  <div className="d-flex flex-wrap gap-2 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                    <span className="n5-color fs-six fw-medium">
                      Project Lorem Ipsum
                    </span>
                    <span className="n4-color fs-eight">Open Source</span>
                  </div>
                  <p className="n4-color fs-seven">
                    You can use this section for your side projects. You
                    can provide a project link here as well. Lorem ipsum dolor
                    sit amet, consectetuer adipiscing elit. Aenean commodo
                    ligula eget dolor. Aenean massa. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                  </p>
                </div>
                <div className="mb-3 mb-md-6">
                  <div className="d-flex flex-wrap gap-2 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                    <span className="n5-color fs-six fw-medium">
                      Project Sed Fringilla
                    </span>
                    <span className="n4-color fs-eight">Open Source</span>
                  </div>
                  <p className="n4-color fs-seven">
                    You can use this section for your side projects. Cras
                    dapibus. Vivamus elementum semper nisi. Aenean vulputate
                    eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                    vitae, eleifend ac, enim.
                  </p>
                </div>
                <div>
                  <div className="d-flex flex-wrap gap-2 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                    <span className="n5-color fs-six fw-medium">
                      Project Praesent
                    </span>
                    <span className="n4-color fs-eight">Open Source</span>
                  </div>
                  <p className="n4-color fs-seven">
                    You can use this section for your side projects. Cras
                    dapibus. Vivamus elementum semper nisi. Aenean vulputate
                    eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                    vitae, eleifend ac, enim.
                  </p>
                </div>
              </div>

              {/* <!-- right side  --> */}
              <div className="col-md-4 col-lg-12 col-xl-4 col-xxl-3">
                <div className="ps-4 ps-xxl-7 br-left-n3 mt-5 mt-md-0">
                  {/* <!-- skills  --> */}
                  <div className="mb-8 mb-md-15">
                    <div className="d-flex align-items-center gap-2 mb-5 mb-md-10">
                      <div className="title-line2"></div>
                      <h2 className="fs-three p1-color fw-semibold">Skills</h2>
                    </div>

                    <div className="mb-3 mb-md-6">
                      <h5 className="fs-six n5-color fw-medium mb-2 mb-md-4">
                        Technical
                      </h5>
                      <ul className="d-flex flex-column gap-3 ms-10">
                        <li className="n4-color fs-seven">
                          JavaScript/React/Vue
                        </li>
                        <li className="n4-color fs-seven">Python/Ruby/PHP</li>
                        <li className="n4-color fs-seven">Node.js/ASP.NET</li>
                        <li className="n4-color fs-seven">PostgreSQL/MySQL</li>
                        <li className="n4-color fs-seven">
                          Object-oriented design
                        </li>
                        <li className="n4-color fs-seven">
                          Design and implement database structures
                        </li>
                        <li className="n4-color fs-seven">
                          Lead and deliver complex software systems
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="fs-six n5-color fw-medium mb-2 mb-md-4">
                        Professional
                      </h5>
                      <ul className="d-flex flex-column gap-3 ms-10">
                        <li className="n4-color fs-seven">
                          Effective communication
                        </li>
                        <li className="n4-color fs-seven">Team player</li>
                        <li className="n4-color fs-seven">
                          Strong problem solver
                        </li>
                        <li className="n4-color fs-seven">
                          Good time management
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- education  --> */}
                  <div className="mb-8 mb-md-15">
                    <div className="d-flex align-items-center gap-2 mb-3 mb-md-6">
                      <div className="title-line2"></div>
                      <h2 className="fs-three p1-color fw-semibold">
                        Education
                      </h2>
                    </div>
                    <div className="d-flex gap-2 mb-3 mb-md-5">
                      <i className="fs-six p1-color">
                        <PiGraduationCap />
                      </i>
                      <div>
                        <span className="n4-color fs-seven">
                          MSc in Computer Science University College London
                        </span>
                        <span className="n4-color fs-eleven">2010 - 2011</span>
                      </div>
                    </div>
                    <div className="d-flex gap-2">
                      <i className="fs-six p1-color">
                        <PiGraduationCap />
                      </i>
                      <div>
                        <span className="n4-color fs-seven">
                          BSc Maths and Physics Imperial College London
                        </span>
                        <span className="n4-color fs-eleven">2007 - 2010</span>
                      </div>
                    </div>
                  </div>
                  {/* <!-- awards  --> */}
                  <div className="mb-8 mb-md-15">
                    <div className="d-flex align-items-center gap-2 mb-3 mb-md-6">
                      <div className="title-line2"></div>
                      <h2 className="fs-three p1-color fw-semibold">Awards</h2>
                    </div>
                    <div className="d-flex gap-2 mb-3 mb-md-5">
                      <i className=" fs-six p1-color">
                        <PiTrophy />
                      </i>
                      <div>
                        <span className="n4-color fs-seven">
                          Award Lorem Ipsum Microsoft lorem ipsum
                        </span>
                        <span className="n4-color fs-eleven">2019</span>
                      </div>
                    </div>
                    <div className="d-flex gap-2">
                      <i className=" fs-six p1-color">
                        <PiTrophy />
                      </i>
                      <div>
                        <span className="n4-color fs-seven">
                          Award Donec Sodales Oracle Aenean
                        </span>
                        <span className="n4-color fs-eleven">2017</span>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Languages  --> */}
                  <div className="mb-8 mb-md-15">
                    <div className="d-flex align-items-center gap-2 mb-3 mb-md-6">
                      <div className="title-line2"></div>
                      <h2 className="fs-three p1-color fw-semibold">
                        Languages
                      </h2>
                    </div>
                    <ul className="d-flex flex-column gap-3 ms-10">
                      <li className="n4-color fs-seven">English(Native)</li>
                      <li className="n4-color fs-seven">
                        Spanish (Professional)
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Interests  --> */}
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-3 mb-md-6">
                      <div className="title-line2"></div>
                      <h2 className="fs-three p1-color fw-semibold">
                        Interests
                      </h2>
                    </div>
                    <ul className="d-flex flex-column gap-3 ms-10">
                      <li className="n4-color fs-seven">Climbing</li>
                      <li className="n4-color fs-seven">Snowboarding</li>
                      <li className="n4-color fs-seven">Photography</li>
                      <li className="n4-color fs-seven">Travelling</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex flex-wrap gap-2 gap-md-3 gap-md-5 align-items-center justify-content-center mt-4 mt-md-8">
              <Link
                href="#"
                className="d-flex gap-1 align-items-center resume-icon"
              >
                <div className="social-icon">
                  <i className="p1-color">
                    <PiGithubLogo />
                  </i>
                </div>
                <span className="fs-nine n4-color">github.com/username</span>
              </Link>
              <Link
                href="#"
                className="d-flex gap-1 align-items-center resume-icon"
              >
                <div className="social-icon">
                  <i className="p1-color">
                    <PiLinkedinLogo />
                  </i>
                </div>
                <span className="fs-nine n4-color">
                  linkedin.com/in/username
                </span>
              </Link>
              <Link
                href="#"
                className="d-flex gap-1 align-items-center resume-icon"
              >
                <div className="social-icon">
                  <i className="p1-color">
                    <PiXLogo />
                  </i>
                </div>
                <span className="fs-nine n4-color">@twittername</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
