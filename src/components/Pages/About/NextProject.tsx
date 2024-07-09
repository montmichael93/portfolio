import React from "react";

const NextProject = () => {
  return (
    <section className="next-project pt-120 pb-120">
      <div className="container d-flex gap-3 gap-md-6 flex-wrap justify-content-between align-items-center">
        <div data-aos="zoom-in-left" className="next-project-content">
          <h3 className="display-four n11-color fw-semibold mb-2 mb-md-4">
            Let’s Work together on your next Project
          </h3>
          <p className="fs-seven n11-color">
            I am available for freelance projects. Hire me and get your project
            done.
          </p>
        </div>
        <a
          data-aos="zoom-in-right"
          href="contact.html"
          className="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 h-100"
        >
          <i className="ph ph-arrow-right"></i>Let’s get in touch
        </a>
      </div>
    </section>
  );
};

export default NextProject;
