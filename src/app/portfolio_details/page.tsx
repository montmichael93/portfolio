import NextProject from "@/components/Pages/About/NextProject";
import { PiPaperPlaneTilt } from "react-icons/pi";
import project1 from "@/../public/images/project1.png";
import project2 from "@/../public/images/project2.png";
import project3 from "@/../public/images/project3.png";
import Footer from "@/components/Shared/Footer/Footer";
import Image from "next/image";
import PortfolioTes from "@/components/Pages/Portfolio/PortfolioTes";

const PortfolioDetails = () => {
  return (
    <div className="main-content w-100">
      <section className="pt-120 pb-120 mt-10 mt-lg-0">
        <div className="pb-60">
          <div data-aos="zoom-in" className="page-heading">
            <h3 className="page-title fs-onefw-semibold n5-color mb-2 mb-md-3 text-center">
              Case Study: Agency Website Development for Dev X
            </h3>
            <p className="fs-seven n5-color mb-4 mb-md-8 text-center">
              Project intro goes here. In the intro it&apos;s a good idea to
              answer a potential client&apos;s need/problem so it&apos;s more
              likely to land your next project or job.
            </p>
            <a
              href="/contact"
              className="w-max p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 mx-auto"
            >
              <PiPaperPlaneTilt />
              <i className="ph ph-paper-plane-tilt"></i>Hire Me
            </a>
          </div>
        </div>
        <div className="container mt-8 mt-md-15">
          <div className="row g-6">
            <div data-aos="fade-left" className="col-12 col-xl-3">
              <div className="d-flex flex-column gap-5 position-sticky top-5">
                <div>
                  <span className="n4-color fs-eight fw-medium d-block">
                    Client:
                  </span>
                  <span className="n5-color fs-six fw-medium">Dev X</span>
                </div>
                <div>
                  <span className="n4-color fs-eight fw-medium d-block">
                    Services
                  </span>
                  <span className="n5-color fs-six fw-medium">
                    Web Development
                  </span>
                </div>
                <div>
                  <span className="n4-color fs-eight fw-medium d-block">
                    Technologies
                  </span>
                  <span className="n5-color fs-six fw-medium">React JS</span>
                </div>
                <div>
                  <span className="n4-color fs-eight fw-medium d-block">
                    Website
                  </span>
                  <a
                    href="#"
                    className="n5-color fs-six fw-medium d-flex align-items-center gap-2"
                  >
                    Live preview <i className="ph-bold ph-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div data-aos="fade-right" className="col-12 col-xl-9">
              <div className="project-details-content">
                <div className="overflow-hidden">
                  <Image
                    src={project1}
                    alt="project"
                    className="w-100 portfolio-details-img"
                  />
                </div>
                <div data-aos="fade-up" className="my-8 my-md-15">
                  <p className="text-seven n4-color">
                    Short description of the client and project requirements.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Lorem ipsum dolor sit
                    amet, consectetuer adipiscing elit. Aenean commodo ligula
                    eget dolor.
                  </p>
                  <h3 className="fs-five n5-color fw-semibold mt-5 mt-md-10 mb-2 mb-md-4">
                    Project Requirements
                  </h3>
                  <ul>
                    <li className="n4-color fs-seven mb-2 mb-md-3">
                      Requirement lorem ipsum dolor sit amet, consectetuer
                      adipiscing elit.
                    </li>
                    <li className="n4-color fs-seven mb-2 mb-md-3">
                      Requirement donec pede justo, fringilla vel, aliquet nec.
                    </li>
                    <li className="n4-color fs-seven mb-2 mb-md-3">
                      Requirement phasellus ullamcorper ipsum rutrum nunc.
                    </li>
                  </ul>
                </div>
                <div data-aos="fade-up" className="mb-8 mb-md-15">
                  <h2 className="fs-one fw-semibold n5-color mb-2 mb-md-4">
                    Project Overview
                  </h2>
                  <p className="text-seven n4-color">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis
                    pretium. Integer tincidunt. Cras dapibus.
                  </p>
                </div>
                <div data-aos="fade-up" className="mb-8 mb-md-15">
                  <h2 className="fs-two fw-semibold n5-color mb-2 mb-md-4">
                    The Challenge
                  </h2>
                  <p className="text-seven n4-color">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis
                    pretium. Integer tincidunt. Cras dapibus.
                  </p>
                </div>
                <div data-aos="fade-up" className="mb-8 mb-md-15">
                  <h2 className="fs-two fw-semibold n5-color mb-2 mb-md-4">
                    The Approach & Solution
                  </h2>
                  <p className="text-seven n4-color mb-5 mb-md-10">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis
                    pretium. Integer tincidunt. Cras dapibus.
                  </p>
                  <div className="row g-3 g-md-6">
                    <div className="col-sm-6 overflow-hidden">
                      <Image
                        src={project2}
                        alt="project"
                        className="w-100 object-fit-cover portfolio-details-img"
                      />
                    </div>
                    <div className="col-sm-6 overflow-hidden">
                      <Image
                        src={project3}
                        alt="project"
                        className="w-100 object-fit-cover portfolio-details-img"
                      />
                    </div>
                  </div>
                  <p className="text-seven n4-color mt-5 mt-md-10">
                    Short description of the client and project requirements.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Lorem ipsum dolor sit
                    amet, consectetuer adipiscing elit. Aenean commodo ligula
                    eget dolor.
                  </p>
                </div>
                <div data-aos="fade-up" className="mb-8 mb-md-15">
                  <h2 className="fs-two fw-semibold n5-color mb-2 mb-md-4">
                    The Results
                  </h2>
                  <div className="row g-3 g-md-5">
                    <div className="col-sm-6 col-xl-4 col-xxl-3">
                      <div className="bgn2-color brn4 p-3 p-md-5">
                        <span className="p1-color fs-six fw-medium mb-2 d-block">
                          Efficiency
                        </span>
                        <div className="d-flex align-items-end gap-1 mb-2 mb-md-3">
                          <h4 className="fs-three n5-color fw-semibold">20%</h4>
                          <span className="fs-six n4-color fw-medium">up</span>
                        </div>
                        <p className="fs-eight n4-color">
                          Metric description lorem ipsum dolor sit amet.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xl-4 col-xxl-3">
                      <div className="bgn2-color brn4 p-3 p-md-5">
                        <span className="p1-color fs-six fw-medium mb-2 d-block">
                          Customer Happy
                        </span>
                        <div className="d-flex align-items-end gap-1 mb-2 mb-md-3">
                          <h4 className="fs-three n5-color fw-semibold">14%</h4>
                          <span className="fs-six n4-color fw-medium">up</span>
                        </div>
                        <p className="fs-eight n4-color">
                          Metric description lorem ipsum dolor sit amet.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xl-4 col-xxl-3">
                      <div className="bgn2-color brn4 p-3 p-md-5">
                        <span className="p1-color fs-six fw-medium mb-2 d-block">
                          Sales Generated
                        </span>
                        <div className="d-flex align-items-end gap-1 mb-2 mb-md-3">
                          <h4 className="fs-three n5-color fw-semibold">
                            $130K
                          </h4>
                        </div>
                        <p className="fs-eight n4-color">
                          Metric description lorem ipsum dolor sit amet.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xl-4 col-xxl-3">
                      <div className="bgn2-color brn4 p-3 p-md-5">
                        <span className="p1-color fs-six fw-medium mb-2 d-block">
                          Overall Cost
                        </span>
                        <div className="d-flex align-items-end gap-1 mb-2 mb-md-3">
                          <h4 className="fs-three n5-color fw-semibold">20%</h4>
                          <span className="fs-six n4-color fw-medium">
                            down
                          </span>
                        </div>
                        <p className="fs-eight n4-color">
                          Metric description lorem ipsum dolor sit amet.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p
                  data-aos="fade-up"
                  className="text-seven n4-color mb-8 mb-md-15"
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt. Cras dapibus.
                </p>
                <div className="mb-8 mb-md-15">
                  <div
                    data-aos="zoom-in"
                    className="d-flex align-items-center gap-2"
                  >
                    <div className="title-line"></div>
                    <h2 className="display-four n5-color fw-semibold">
                      Client Testimonial
                    </h2>
                  </div>
                  <PortfolioTes />
                </div>
              </div>
            </div>
          </div>
        </div>

        <NextProject />
      </section>
      <Footer />
    </div>
  );
};

export default PortfolioDetails;
