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
                    Software <em>developer</em>
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
                  <ul>
                    <li>
                      - Results-driven <strong> Software Developer </strong>{" "}
                      with orientation towards <strong> Frontend </strong> with{" "}
                      <strong> 3+ years of experience </strong> developing high
                      performance web and mobile applications. Expertise in
                      <strong>
                        React.js, Next.js, TypeScript, and GraphQL
                      </strong>
                      , with a strong foundation in{" "}
                      <strong>
                        {" "}
                        backend technologies like Node.js, Express.js, and
                        Python (Django, FastAPI)
                      </strong>
                      . Skilled in building scalable{" "}
                      <strong>
                        {" "}
                        server-side rendering (SSR) and static site generation
                        (SSG) solutions{" "}
                      </strong>{" "}
                      while optimizing UI/UX using{" "}
                      <strong>
                        Tailwind CSS, React Native, and Styled Components.{" "}
                      </strong>
                    </li>
                    <li>
                      - Proven ability to integrate and manage{" "}
                      <strong> RESTful & GraphQL APIs </strong>, streamline{" "}
                      <strong> state management with Redux & Zustand</strong>,
                      and deploy cloud-based applications on{" "}
                      <strong>AWS (S3, Lambda, EC2) </strong> with{" "}
                      <strong> Docker & Terraform</strong>. Experienced in{" "}
                      <strong>CI/CD automation using GitHub Actions </strong>{" "}
                      and ensuring accessibility compliance with{" "}
                      <strong>
                        {" "}
                        WCAG & performance optimizations via Lighthouse
                      </strong>
                      .
                    </li>
                  </ul>
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
                        Software Developer
                      </span>
                      <span className="n4-color fs-eight">
                        DXC Technologies | Oct 2023 – Present
                      </span>
                    </div>
                    <p className="n42-color fs-seven my-2 my-md-5">
                      Architected and deployed Next.js applications with
                      server-side rendering (SSR) and static site generation
                      (SSG) to enhance performance and SEO rankings. Developed
                      reusable, scalable UI components using React.js,
                      TypeScript, and Tailwind CSS, improving maintainability
                      and design consistency. Integrated GraphQL APIs and
                      optimized data fetching to enhance application
                      responsiveness.
                    </p>
                    <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                      <li className="n42-color fs-seven">
                        Engineered efficient API communication using REST and
                        GraphQL, streamlining backend interactions with Zustand
                        and Redux Toolkit.
                      </li>
                      <li className="n42-color fs-seven">
                        Enhanced backend capabilities by implementing Node.js &
                        Express endpoints, ensuring seamless API connectivity.
                      </li>
                      <li className="n42-color fs-seven">
                        Developed cross-platform mobile applications in React
                        Native, optimizing performance for both iOS & Android
                        platforms.
                      </li>
                      <li className="n42-color fs-seven">
                        Integrated push notifications & deep linking using
                        Firebase Cloud Messaging (FCM) to enhance mobile user
                        engagement.
                      </li>
                      <li className="n42-color fs-seven">
                        Deployed and managed applications on AWS (S3),
                        leveraging cloud scalability for performance and cost
                        efficiency.
                      </li>
                      <li className="n42-color fs-seven">
                        Containerized and automated deployment pipelines using
                        Docker and Terraform, ensuring consistent environments
                        and scalable infrastructure.
                      </li>
                      <li className="n42-color fs-seven">
                        Collaborated with UI/UX designers and backend engineers
                        to align technical implementations with business
                        requirements.
                      </li>
                    </ul>
                  </div>

                  <div className="mb-4 mb-md-6">
                    <div className="d-flex flex-wrap gap-2 gap-sm-3 justify-content-between align-items-center">
                      <span className="n5-color fs-six fw-medium">
                        Software Engineer - Frontend
                      </span>
                      <span className="n4-color fs-eight">
                        Dell Technologies | Apr 2021 – Sep 2023
                      </span>
                    </div>
                    <p className="n42-color fs-seven my-2 my-md-5">
                      Developed high-performance web applications using React,
                      TypeScript, and GraphQL, ensuring seamless UI/UX
                      implementation. Engineered reusable frontend components by
                      extending the company design system library, improving
                      development efficiency. Integrated RESTful APIs and
                      GraphQL endpoints while optimizing state management using
                      React Context API and Zustand.
                    </p>
                    <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                      <li className="n42-color fs-seven">
                        Optimized web performance using Lighthouse, React
                        Profiler, and DOM manipulation techniques, reducing load
                        times.
                      </li>
                      <li className="n42-color fs-seven">
                        Implemented secure authentication using JWT and best
                        authorization practices in collaboration with backend
                        engineers.
                      </li>
                      <li className="n42-color fs-seven">
                        Developed CI/CD workflows using GitHub Actions & Docker,
                        ensuring smooth deployment processes and faster
                        releases.
                      </li>
                      <li className="n42-color fs-seven">
                        Refactored and modularized legacy frontend code,
                        replacing outdated patterns with modern React Hooks,
                        Next.js, and TypeScript best practices.
                      </li>
                      <li className="n42-color fs-seven">
                        Conducted testing using Jest, Cypress, and Playwright,
                        improving application reliability and reducing
                        post-deployment bugs.
                      </li>
                      <li className="n42-color fs-seven">
                        Ensured cross-browser compatibility and accessibility
                        compliance with WCAG, HTML5, and CSS best practices.
                      </li>
                    </ul>
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
                          Languages & Frameworks:
                        </h5>
                        <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                          <li className="n4-color fs-seven">
                            JavaScript, TypeScript, Python, HTML, CSS, SCSS
                          </li>
                          <li className="n4-color fs-seven">
                            React, Next.js, React Native, Redux, Vue.js
                          </li>
                        </ul>

                        <h5 className="fs-six n5-color fw-medium mb-2 mb-md-4">
                          UI & Styling:
                        </h5>
                        <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                          <li className="n4-color fs-seven">
                            Bootstrap, Tailwind CSS, Material-UI (MUI), Chakra
                            UI
                          </li>
                          <li className="n4-color fs-seven">
                            Styled Components, Ant Design
                          </li>
                        </ul>

                        <h5 className="fs-six n5-color fw-medium mb-2 mb-md-4">
                          State Management & Performance:
                        </h5>
                        <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                          <li className="n4-color fs-seven">
                            React Context API, Zustand, Redux Toolkit, Recoil
                          </li>
                          <li className="n4-color fs-seven">
                            React Profiler, Lighthouse
                          </li>
                        </ul>

                        <h5 className="fs-six n5-color fw-medium mb-2 mb-md-4">
                          Testing & CI/CD:
                        </h5>
                        <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                          <li className="n4-color fs-seven">
                            Jest, Vitest, Cypress, Playwright, Testing Library,
                            PyTest
                          </li>
                          <li className="n4-color fs-seven">
                            GitHub Actions, CircleCI
                          </li>
                        </ul>

                        <h5 className="fs-six n5-color fw-medium mb-2 mb-md-4">
                          Backend & Databases:
                        </h5>
                        <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                          <li className="n4-color fs-seven">
                            Express.js, Node.js, FastAPI, Flask, Django, Prisma
                          </li>
                          <li className="n4-color fs-seven">
                            PostgreSQL, SQLite, Firebase, MongoDB, GraphQL
                          </li>
                        </ul>

                        <h5 className="fs-six n5-color fw-medium mb-2 mb-md-4">
                          Cloud & DevOps:
                        </h5>
                        <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                          <li className="n4-color fs-seven">
                            AWS (S3, Lambda, EC2), Docker, Kubernetes, Terraform
                          </li>
                          <li className="n4-color fs-seven">Vercel, Netlify</li>
                        </ul>

                        <h5 className="fs-six n5-color fw-medium mb-2 mb-md-4">
                          Version Control & Workflow:
                        </h5>
                        <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                          <li className="n4-color fs-seven">
                            Git, GitHub, GitLab, Bitbucket
                          </li>
                          <li className="n4-color fs-seven">
                            Agile, Scrum, Jira
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
                            <strong>Bachelor’s in Computer Science</strong>,
                            <em> TCI College of Technology </em>
                          </span>
                          <span className="n4-color fs-eleven">
                            Sep 2017 – Sep 2019
                          </span>
                        </div>
                      </div>
                      <div className="d-flex gap-2">
                        <i className="fs-six p1-color">
                          <PiGraduationCap />
                        </i>
                        <div>
                          <span className="n4-color fs-seven">
                            <strong>Full Stack Software Certificate</strong>,{" "}
                            <em>Devslopes </em>
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
