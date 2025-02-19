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
import profile from "@/../public/images/profile.jpg";
import me from "@/../public/images/Me.jpg";
import FadeDown from "@/components/motionEffect/FadeDown";
import Footer from "@/components/Shared/Footer/Footer";
const Resume = () => {
  return (
    <div>
      <section className="pt-120 pb-120 mt-10 mt-lg-0">
        <FadeDown>
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
        </FadeDown>

        <div className="container mt-8 mt-md-15">
          <FadeDown>
            <div className="bgn2-color p-4 p-sm-8 p-md-15 rounded-5 brn4">
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 br-bottom-n3 pb-3 pb-md-6">
                <div>
                  <h2 className="display-three p1-color fw-semibold">
                    Michael Montero
                  </h2>
                  <span className="n4-color fs-six fw-medium">
                    Software Engineer
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
                        347-409-8196
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="mailto:someone@example.com"
                        className="d-flex gap-2 align-items-center n4-color"
                      >
                        <PiEnvelopeSimple />
                        mike.montero1993@gmail.com
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
                    src={me}
                    alt="profile"
                    className="object-fit-cover"
                    width="127"
                    height="159"
                  />
                </div>
                <p className="n42-color fs-seven">
                  Passionate Frontend Engineer with several years experience in
                  designing and engineering UIs. Building intuitive, responsive,
                  scalable, high-performance applications using tools like React
                  and TypeScript and a Master of the Javascript ecosystem.
                  Always keeping up to date with the latest trends with frontend
                  technologies and utilizing design patterns to create simple
                  and reusable components for complex UIs. Deeply familiar with
                  data structures and algorithms, profiling and optimization of
                  user interfaces, working with huge sets of data, and
                  collaborating across teams. Passionately value code
                  simplicity, performance, details and the developer experience.
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

                  <div className="mb-4 mb-md-6">
                    <div className="d-flex flex-wrap gap-2 gap-sm-3 justify-content-between align-items-center">
                      <span className="n5-color fs-six fw-medium">
                        Freelance Web Developer
                      </span>
                      <span className="n4-color fs-eight">
                        Freelancer | 2020 - Present
                      </span>
                    </div>
                    <p className="n42-color fs-seven my-2 my-md-5">
                      Collaborated with business owners to develop websites and
                      landing pages using React and Next.js, integrating
                      relevant APIs for enhanced functionality. Provided
                      pre-built solutions with HubSpot, Zapier, and Jotform to
                      capture form inputs before backend development was
                      required. Strategically planned backend scalability and
                      implementation using SQLite, Express, and Prisma, ensuring
                      clients could seamlessly transition to owning their own
                      databases as their businesses grew.
                    </p>
                    <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                      <li className="n42-color fs-seven">
                        Built a scalable, mobile-responsive UI using React,
                        Chakra UI, and React Router for seamless pivots from one
                        view to the next.
                      </li>
                      <li className="n42-color fs-seven">
                        Automated content updates via YouTube API to streamline
                        the flow of data from platform to thousands of users,
                        reducing manual effort and saving the client time &
                        money.
                      </li>
                      <li className="n42-color fs-seven">
                        Implemented Google Analytics to monitor the health and
                        performance of the site
                      </li>
                      <li className="n42-color fs-seven">
                        Design and deliver features that have direct impact on
                        thousands of users
                      </li>
                    </ul>
                  </div>
                  <div className="mb-4 mb-md-6">
                    <div className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center">
                      <span className="n5-color fs-six fw-medium">CCA</span>
                      <span className="n4-color fs-eight">
                        Citarella | 2024 - present
                      </span>
                    </div>
                    <p className="n42-color fs-seven my-2 my-md-5">
                      Leveraged Sage X3’s UI components to perform CRUD
                      operations on sales and order data within the company
                      database, ensuring alignment with business requirements.
                      Collaborated cross-functionally with stores and
                      departments to generate reports, enabling data-driven
                      inventory and fulfillment decisions. Developed a PDF
                      analyzer to convert PDF data into JSON, automating order
                      verification to ensure stores placed the necessary daily
                      orders.
                    </p>
                    <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                      <li className="n42-color fs-seven">
                        Developed a PDF-to-JSON converter, automating order
                        verification and reducing manual errors.
                      </li>
                      <li className="n42-color fs-seven">
                        Optimized parsing logic, improving processing speed by
                        ~40% for large PDFs.
                      </li>
                      <li className="n42-color fs-seven">
                        Integrated into business workflows, increasing accuracy
                        in order fulfillment.
                      </li>
                      <li className="n42-color fs-seven">
                        improve performance and address scalability and
                        performance challenges
                      </li>
                    </ul>
                  </div>
                  <div className="mb-4 mb-md-6">
                    <div className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center">
                      <span className="n5-color fs-six fw-medium">
                        Retention Rep
                      </span>
                      <span className="n4-color fs-eight">
                        Alorica | 2022 - 2023
                      </span>
                    </div>
                    <p className="n42-color fs-seven my-2 my-md-5">
                      Managed and strengthened over 900 client relationships by
                      providing tailored solutions and exclusive offers.
                      Prevented fraudulent access by verifying up to 50 client
                      accounts daily through meticulous data analysis. Provided
                      technical support for more than 300 smartphones,
                      diagnosing issues and guiding clients on best practices.
                      Utilized company software to manage customer data, analyze
                      trends, and optimize client interactions, demonstrating
                      strong problem-solving and technical skills.
                    </p>
                    <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                      <li className="n42-color fs-seven">
                        Retained 900 client relationships: retained client
                        relationships by offering exclusive offers
                      </li>
                      <li className="n42-color fs-seven">
                        Technically supported: troubleshooting over 300
                        smartphones and communicated with clients on best
                        practices.
                      </li>
                    </ul>
                  </div>
                  <div className="mb-4 mb-md-6">
                    <div className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                      <span className="n5-color fs-six fw-medium">MSR</span>
                      <span className="n42-color fs-eight">
                        32BJ benefit funds | 2018 - 2021
                      </span>
                    </div>
                    <p className="n42-color fs-seven">
                      Collected and analyzed high-volume data in real time to
                      troubleshoot and resolve complex issues efficiently.
                      Provided customer support, leveraging various systems
                      (COOL/V3/DYNAMICS, CRM/WF, and vendor platforms) to manage
                      eligibility, benefits, and claims processing. Demonstrated
                      proficiency in multiple database-driven systems, ensuring
                      accuracy and compliance with workflows. Managed and
                      organized a personal queue of inquiries, analyzing
                      customer interactions to identify patterns and optimize
                      resolution processes. Utilized multiple software tools to
                      research, document, and resolve customer inquiries while
                      maintaining quality and performance standards. Effectively
                      communicated technical concepts to non-technical users,
                      refining problem-solving and analytical skills essential
                      for technology-driven roles.
                    </p>
                  </div>

                  <div className="d-flex align-items-center gap-2 mb-5 mb-md-10">
                    <div className="title-line2"></div>
                    <h2 className="fs-three p1-color fw-semibold">Projects</h2>
                  </div>
                  <div className="mb-4 mb-md-6">
                    <div className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                      <span className="n5-color fs-six fw-medium">
                        curtismadeit
                      </span>
                      <span className="n42-color fs-eight">2023</span>
                    </div>
                    <p className="n42-color fs-seven">
                      Developed a website for a DIY woodworking YouTuber,
                      showcasing builds and available products to engage
                      subscribers and facilitate sales. Implemented a
                      user-friendly interface and contact system, enabling
                      potential buyers to easily reach out. Optimized site
                      performance and responsiveness to ensure a seamless
                      browsing experience across devices.
                    </p>
                    <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                      <li className="n42-color fs-seven">
                        Built a scalable, mobile-responsive UI using React,
                        Chakra UI, and React Router for seamless pivots from one
                        view to the next.
                      </li>
                      <li className="n42-color fs-seven">
                        Automated content updates via YouTube API to streamline
                        the flow of data from platform to thousands of users,
                        reducing manual effort and saving the client time &
                        money.
                      </li>

                      <li className="n42-color fs-seven">
                        Implemented Google Analytics to monitor the health and
                        performance of the site
                      </li>
                      <li className="n42-color fs-seven">
                        Design and deliver features that have direct impact on
                        thousands of users
                      </li>
                    </ul>
                  </div>
                  <div className="mb-4 mb-md-6">
                    <div className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                      <span className="n5-color fs-six fw-medium">
                        PDF analyzer
                      </span>
                      <span className="n42-color fs-eight">2024</span>
                    </div>
                    <p className="n42-color fs-seven">
                      Designed and implemented a PDF analyzer to extract and
                      convert PDF data into structured JSON format, streamlining
                      order verification processes. This automation replaced
                      manual data entry, reducing errors and ensuring stores
                      consistently placed the necessary daily orders. Integrated
                      the solution with existing business workflows, enabling
                      real-time validation and improving operational efficiency.
                      Collaborated with stakeholders to refine the tools
                      functionality, ensuring seamless adoption and alignment
                      with business needs.
                    </p>
                    <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                      <li className="n42-color fs-seven">
                        Developed a PDF-to-JSON converter, automating order
                        verification and reducing manual errors.
                      </li>
                      <li className="n42-color fs-seven">
                        Optimized parsing logic, improving processing speed by
                        ~40% for large PDFs.
                      </li>

                      <li className="n42-color fs-seven">
                        Integrated into business workflows, increasing accuracy
                        in order fulfillment.
                      </li>
                      <li className="n42-color fs-seven">
                        improve performance and address scalability and
                        performance challenges
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="d-flex flex-wrap gap-2 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                      <span className="n5-color fs-six fw-medium">
                        Task Rabbit Clone
                      </span>
                      <span className="n4-color fs-eight">2024</span>
                    </div>
                    <p className="n4-color fs-seven">Coming soon...</p>
                  </div>
                </div>

                {/* <!-- right side  --> */}
                <div className="col-md-4 col-lg-12 col-xl-4 col-xxl-3">
                  <div className="ps-4 ps-xxl-7 br-left-n3 mt-5 mt-md-0">
                    {/* <!-- skills  --> */}
                    <div className="mb-8 mb-md-15">
                      <div className="d-flex align-items-center gap-2 mb-5 mb-md-10">
                        <div className="title-line2"></div>
                        <h2 className="fs-three p1-color fw-semibold">
                          Skills
                        </h2>
                      </div>

                      <div className="mb-3 mb-md-6">
                        <h5 className="fs-six n5-color fw-medium mb-2 mb-md-4">
                          Technical
                        </h5>
                        <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                          <li className="n4-color fs-seven">React/Angular</li>
                          <li className="n4-color fs-seven">NPM</li>
                          <li className="n4-color fs-seven">Node.js</li>
                          <li className="n4-color fs-seven">MySQL</li>
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
                        <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
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
                            TCI College of Technology
                          </span>
                          <span className="n4-color fs-eleven">
                            2015 - 2015
                          </span>
                        </div>
                      </div>
                      <div className="d-flex gap-2">
                        <i className="fs-six p1-color">
                          <PiGraduationCap />
                        </i>
                        <div>
                          <span className="n4-color fs-seven">
                            Devslopes Academy
                          </span>
                          <span className="n4-color fs-eleven">
                            2022 - 2024
                          </span>
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
                      <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                        <li className="n4-color fs-seven">TypeScript</li>
                        <li className="n4-color fs-seven">Python</li>
                        <li className="n4-color fs-seven">C#</li>
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
                      <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                        <li className="n4-color fs-seven">Technology</li>
                        <li className="n4-color fs-seven">LLMs</li>
                        <li className="n4-color fs-seven">Crypto</li>
                        <li className="n4-color fs-seven">Tech News</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-2 gap-md-3 gap-md-5 align-items-center justify-content-center mt-4 mt-md-8">
                <Link
                  href="https://github.com/montmichael93"
                  className="d-flex gap-1 align-items-center resume-icon"
                >
                  <div className="social-icon">
                    <i className="p1-color">
                      <PiGithubLogo />
                    </i>
                  </div>
                  <span className="fs-eight n4-color">
                    github.com/montmichael93
                  </span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/michaelmontero-dev/"
                  className="d-flex gap-1 align-items-center resume-icon"
                >
                  <div className="social-icon">
                    <i className="p1-color">
                      <PiLinkedinLogo />
                    </i>
                  </div>
                  <span className="fs-eight n4-color">
                    linkedin.com/in/michaelmontero-dev
                  </span>
                </Link>
              </div>
            </div>
          </FadeDown>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Resume;
