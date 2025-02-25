import NextProject from "@/components/Pages/About/NextProject";
import { PiArrowRight, PiPaperPlaneTilt } from "react-icons/pi";
import project1 from "@/../public/images/project1.png";
import project2 from "@/../public/images/project2.png";
import project3 from "@/../public/images/project3.png";
import json from "@/../public/images/json.png";
import pdfanapage from "@/../public/images/pdfanapage.png";
import encoding from "@/../public/images/encoding.png";
import Footer from "@/components/Shared/Footer/Footer";
import Image from "next/image";
import Link from "next/link";
import FadeDown from "@/components/motionEffect/FadeDown";

const PortfolioDetails = () => {
  return (
    <div className="overflow-visible">
      <section className="pt-120 pb-120 mt-10 mt-lg-0 overflow-visible">
        <div className="pb-60">
          <FadeDown>
            <div className="page-heading">
              <h3 className="page-title fs-onefw-semibold n5-color mb-2 mb-md-3 text-center">
                Case Study: PDF Consolidated Report Analyzer
              </h3>
              <p className="fs-seven n5-color mb-4 mb-md-8 text-center">
                Automation of business workflow that verifies reports of store
                orders
              </p>
              <Link
                href="/contact"
                className="w-max p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 mx-auto"
              >
                <PiPaperPlaneTilt /> Hire Me
              </Link>
            </div>
          </FadeDown>
        </div>
        <div className="container my-8 my-md-15">
          <div className="row g-6">
            <div className="col-12 col-xl-3">
              <div className="position-sticky top-0">
                <FadeDown>
                  <div className="d-flex flex-column gap-5  brn4 p-3 p-md-5 rounded">
                    <div>
                      <span className="n4-color fs-eight fw-medium d-block">
                        Client:
                      </span>
                      <span className="n5-color fs-six fw-medium">
                        Citarella CS Employees
                      </span>
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
                      <span className="n5-color fs-six fw-medium">
                        React JS
                      </span>
                    </div>
                    <div>
                      <span className="n4-color fs-eight fw-medium d-block">
                        Website
                      </span>
                      <Link
                        href="https://pdf-analyzer-pi.vercel.app/"
                        className="n5-color fs-six fw-medium d-flex align-items-center gap-2"
                      >
                        Live preview <PiArrowRight />
                      </Link>
                    </div>
                  </div>
                </FadeDown>
              </div>
            </div>

            <div className="col-12 col-xl-9">
              <div className="project-details-content">
                <FadeDown>
                  <div className="overflow-hidden">
                    <Image
                      src={pdfanapage}
                      alt="project"
                      className="w-100 portfolio-details-img"
                    />
                  </div>
                  <div data-aos="fade-up" className="my-8 my-md-15">
                    <p className="text-seven n4-color">
                      A food distribution company needed a way to efficiently
                      verify whether stores had ordered all mandatory items from
                      their consolidated order reports. These reports were
                      generated as PDFs, containing encoded data that made
                      manual verification cumbersome and time-consuming. The
                      client required a solution that could programmatically
                      extract and validate this data.
                    </p>
                    <h3 className="fs-five n5-color fw-semibold mt-5 mt-md-10 mb-2 mb-md-4">
                      Project Requirements
                    </h3>
                    <ul>
                      <li className="n4-color fs-seven mb-2 mb-md-3">
                        Convert encoded PDF data into a Base64 array buffer.
                      </li>
                      <li className="n4-color fs-seven mb-2 mb-md-3">
                        Parse the buffer and transform it into JSON format.
                      </li>
                      <li className="n4-color fs-seven mb-2 mb-md-3">
                        Ensure accuracy and efficiency in data extraction and
                        verification.
                      </li>
                    </ul>
                  </div>
                  <div data-aos="fade-up" className="mb-8 mb-md-15">
                    <h2 className="fs-one fw-semibold n5-color mb-2 mb-md-4">
                      Project Overview
                    </h2>
                    <p className="text-seven n4-color">
                      To address the clients needs, a custom tool was developed
                      to process the encoded PDF reports, extract relevant data,
                      and analyze the contents to ensure compliance with
                      mandatory ordering requirements. The solution automated a
                      previously manual verification process, significantly
                      reducing errors and time spent on review.
                    </p>
                  </div>
                </FadeDown>
                <FadeDown>
                  <div data-aos="fade-up" className="mb-8 mb-md-15">
                    <h2 className="fs-two fw-semibold n5-color mb-2 mb-md-4">
                      The Challenge
                    </h2>
                    <p className="text-seven n4-color">
                      The key challenge was handling the encoded PDF data and
                      converting it into a structured format that could be
                      programmatically analyzed. The reports contained complex
                      data structures, requiring a precise method to extract
                      relevant fields while maintaining data integrity.
                      Additionally, the solution had to be efficient enough to
                      handle large volumes of reports without performance
                      bottlenecks.
                    </p>
                  </div>
                  <div data-aos="fade-up" className="mb-8 mb-md-15">
                    <h2 className="fs-two fw-semibold n5-color mb-2 mb-md-4">
                      The Approach & Solution
                    </h2>
                    <p className="text-seven n4-color mb-5 mb-md-10">
                      To solve the problem, the tool was designed to Extract and
                      Decode: Convert the PDF data into a Base64 array buffer.
                      Parse and Transform: Utilize pdfjs-dist to interpret and
                      extract meaningful text from the reports. Convert to JSON:
                      Structure the extracted data into JSON format for easy
                      processing. Validation Mechanism: Implement logic to
                      verify that all mandatory items were present in each
                      report. Optimize Performance: Ensure efficient processing
                      to handle large volumes of reports quickly. The resulting
                      system automated the verification process, reducing the
                      need for manual checks while improving accuracy and
                      efficiency.
                    </p>
                    <div className="row g-3 g-md-6">
                      <div className="col-sm-6 overflow-hidden">
                        <Image
                          src={encoding}
                          alt="project"
                          className="w-100 object-fit-cover portfolio-details-img"
                        />
                      </div>
                      <div className="col-sm-6 overflow-hidden">
                        <Image
                          src={json}
                          alt="project"
                          className="w-100 object-fit-cover portfolio-details-img"
                        />
                      </div>
                    </div>
                  </div>
                </FadeDown>
                <FadeDown>
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
                            <h4 className="fs-three n5-color fw-semibold">
                              20%
                            </h4>
                            <span className="fs-six n4-color fw-medium">
                              up
                            </span>
                          </div>
                          <p className="fs-eight n4-color">
                            Automated data extraction reduced manual
                            verification time.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xl-4 col-xxl-3">
                        <div className="bgn2-color brn4 p-3 p-md-5">
                          <span className="p1-color fs-six fw-medium mb-2 d-block">
                            Customer Satisfaction
                          </span>
                          <div className="d-flex align-items-end gap-1 mb-2 mb-md-3">
                            <h4 className="fs-three n5-color fw-semibold">
                              14%
                            </h4>
                            <span className="fs-six n4-color fw-medium">
                              up
                            </span>
                          </div>
                          <p className="fs-eight n4-color">
                            Store managers and auditors experienced a
                            streamlined verification process.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xl-4 col-xxl-3">
                        <div className="bgn2-color brn4 p-3 p-md-5">
                          <span className="p1-color fs-six fw-medium mb-2 d-block">
                            Sales Generated
                          </span>
                          <div className="d-flex align-items-end gap-1 mb-2 mb-md-3"></div>
                          <p className="fs-eight n4-color">
                            Ensuring complete order fulfillment led to increased
                            sales and reduced stock shortages.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xl-4 col-xxl-3">
                        <div className="bgn2-color brn4 p-3 p-md-5">
                          <span className="p1-color fs-six fw-medium mb-2 d-block">
                            Overall Cost
                          </span>
                          <div className="d-flex align-items-end gap-1 mb-2 mb-md-3">
                            <h4 className="fs-three n5-color fw-semibold">
                              20%
                            </h4>
                            <span className="fs-six n4-color fw-medium">
                              down
                            </span>
                          </div>
                          <p className="fs-eight n4-color">
                            Automation reduced labor costs and minimized errors
                            in order validation. The implementation of the
                            PDF-to-JSON converter tool significantly improved
                            operational efficiency for the client, making the
                            order verification process faster, more reliable,
                            and cost-effective.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeDown>
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
