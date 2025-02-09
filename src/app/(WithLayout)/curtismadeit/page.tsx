import NextProject from "@/components/Pages/About/NextProject";
import { PiArrowRight, PiPaperPlaneTilt } from "react-icons/pi";
import project1 from "@/../public/images/project1.png";
import project2 from "@/../public/images/project2.png";
import project3 from "@/../public/images/project3.png";
import curtisMadeit from "@/../public/images/curtismadeitdotcom.png";
import affiliates from "@/../public/images/affiliates.png";
import shopPage from "@/../public/images/shopPage.png";
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
                Case Study: Website Development for DIY Influencer
              </h3>
              <p className="fs-seven n5-color mb-4 mb-md-8 text-center">
                Youtube API showcase for woodworking influencer
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
                        Curtis Love
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
                        href="https://curtismadeit.com/"
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
                      src={curtisMadeit}
                      alt="project"
                      className="w-100 portfolio-details-img"
                    />
                  </div>
                  <div data-aos="fade-up" className="my-8 my-md-15">
                    <p className="text-seven n4-color">
                      Short description of the client and project requirements:
                      A DIY woodworking YouTuber needed a dedicated website to
                      showcase all of his videos and affiliate links while also
                      providing a streamlined messaging system for custom
                      woodworking requests. Previously, he relied on Instagram
                      for inquiries, which was not an efficient way to manage
                      customer interactions.
                    </p>
                    <h3 className="fs-five n5-color fw-semibold mt-5 mt-md-10 mb-2 mb-md-4">
                      Project Requirements
                    </h3>
                    <ul>
                      <li className="n4-color fs-seven mb-2 mb-md-3">
                        Display all YouTube videos in an organized,
                        user-friendly layout.
                      </li>
                      <li className="n4-color fs-seven mb-2 mb-md-3">
                        Integrate the YouTube API for automatic video updates.
                      </li>
                      <li className="n4-color fs-seven mb-2 mb-md-3">
                        Integrate affiliate links seamlessly for monetization.
                      </li>
                    </ul>
                  </div>
                  <div data-aos="fade-up" className="mb-8 mb-md-15">
                    <h2 className="fs-one fw-semibold n5-color mb-2 mb-md-4">
                      Project Overview
                    </h2>
                    <p className="text-seven n4-color">
                      The website was designed to be a central hub for the
                      creator’s woodworking content, enabling fans and potential
                      customers to browse his video library and directly reach
                      out for custom projects. By integrating JotForm, Zapier,
                      and HubSpot, the messaging system ensures that inquiries
                      are properly captured and managed, reducing the chances of
                      missed opportunities. The YouTube API was implemented to
                      dynamically update video content, eliminating manual
                      uploads. Additionally, an analytics system was added to
                      monitor traffic and user engagement, providing valuable
                      insights into visitor behavior. The goal was to create a
                      professional and functional platform that helps the client
                      expand his business beyond YouTube and social media.
                    </p>
                  </div>
                </FadeDown>
                <FadeDown>
                  <div data-aos="fade-up" className="mb-8 mb-md-15">
                    <h2 className="fs-two fw-semibold n5-color mb-2 mb-md-4">
                      The Challenge
                    </h2>
                    <p className="text-seven n4-color">
                      Previously, the client handled all communication through
                      Instagram, leading to cluttered and disorganized messages.
                      Many inquiries were lost in direct messages or took too
                      long to respond to, impacting customer engagement.
                      Additionally, there was no structured way to display
                      affiliate links, limiting potential revenue from sponsored
                      tools and materials. The lack of analytics also meant the
                      client had no clear visibility into site performance and
                      visitor engagement.
                    </p>
                  </div>
                  <div data-aos="fade-up" className="mb-8 mb-md-15">
                    <h2 className="fs-two fw-semibold n5-color mb-2 mb-md-4">
                      The Approach & Solution
                    </h2>
                    <p className="text-seven n4-color mb-5 mb-md-10">
                      To address these challenges, I built a structured website
                      using React and Next.js, ensuring optimal performance and
                      user experience. YouTube videos were embedded dynamically
                      using the YouTube API, allowing for automatic updates as
                      new content was uploaded. Affiliate links were
                      strategically placed throughout the site for better
                      visibility. For the messaging system, I implemented
                      JotForm for form submissions, Zapier for automation, and
                      HubSpot for contact management. This combination allowed
                      for seamless lead capturing and organization,
                      significantly improving response times and customer
                      satisfaction. To provide deeper insights into site
                      performance, I integrated an analytics solution to track
                      visitor traffic, user interactions, and referral sources.
                      This data enables the client to optimize content and
                      engagement strategies effectively.
                    </p>
                    <div className="row g-3 g-md-6">
                      <div className="col-sm-6 overflow-hidden">
                        <Image
                          src={affiliates}
                          alt="project"
                          className="w-100 object-fit-cover portfolio-details-img"
                        />
                      </div>
                      <div className="col-sm-6 overflow-hidden">
                        <Image
                          src={shopPage}
                          alt="project"
                          className="w-100 object-fit-cover portfolio-details-img"
                        />
                      </div>
                    </div>
                    <p className="text-seven n4-color mt-5 mt-md-10">
                      With this new system in place, the client can focus on
                      creating content while ensuring a smooth workflow for
                      customer interactions, revenue generation, and data-driven
                      decision-making.
                    </p>
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
                              30%
                            </h4>
                            <span className="fs-six n4-color fw-medium">
                              improvement
                            </span>
                          </div>
                          <p className="fs-eight n4-color">
                            in managing customer inquiries.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xl-4 col-xxl-3">
                        <div className="bgn2-color brn4 p-3 p-md-5">
                          <span className="p1-color fs-six fw-medium mb-2 d-block">
                            Customer Engagement
                          </span>
                          <div className="d-flex align-items-end gap-1 mb-2 mb-md-3">
                            <h4 className="fs-three n5-color fw-semibold">
                              25%
                            </h4>
                            <span className="fs-six n4-color fw-medium">
                              increase
                            </span>
                          </div>
                          <p className="fs-eight n4-color">
                            in direct communication with potential buyers.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xl-4 col-xxl-3">
                        <div className="bgn2-color brn4 p-3 p-md-5">
                          <span className="p1-color fs-six fw-medium mb-2 d-block">
                            Time Savings
                          </span>
                          <div className="d-flex align-items-end gap-1 mb-2 mb-md-3">
                            <h4 className="fs-three n5-color fw-semibold">
                              Reduced
                            </h4>
                          </div>
                          <p className="fs-eight n4-color">
                            Reduced time spent on managing social media messages
                            by automating inquiries.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xl-4 col-xxl-3">
                        <div className="bgn2-color brn4 p-3 p-md-5">
                          <span className="p1-color fs-six fw-medium mb-2 d-block">
                            Affiliate Revenue
                          </span>
                          <div className="d-flex align-items-end gap-1 mb-2 mb-md-3">
                            <h4 className="fs-three n5-color fw-semibold">
                              Higher visibility
                            </h4>
                            <span className="fs-six n4-color fw-medium">
                              down
                            </span>
                          </div>
                          <p className="fs-eight n4-color">
                            of affiliate links led to a 40% increase in
                            click-through rates.
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
