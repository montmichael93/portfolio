import Image, { StaticImageData } from "next/image";
import { PiArrowRight } from "react-icons/pi";
import { services } from "../../../../public/data/AllData";
import js from "@/../public/images/js.png";
import angular from "@/../public/images/angular.png";
import react from "@/../public/images/react.png";
import vue from "@/../public/images/vue.png";
import node from "@/../public/images/node.png";
import python from "@/../public/images/python.png";
import php from "@/../public/images/php.png";
import npm from "@/../public/images/npm.png";
import gulp from "@/../public/images/gulp.png";
import grunt from "@/../public/images/grunt.png";
import html from "@/../public/images/html.png";
import css from "@/../public/images/css.png";
import sass from "@/../public/images/sass.png";
import less from "@/../public/images/less.png";

const WhatDo = () => {
  return (
    <section className="pt-120 pb-120">
      <div className="container">
        <div className="d-flex gap-3 flex-wrap flex-xxl-nowrap justify-content-between align-items-end">
          <div data-aos="zoom-in-left" className="section-heading">
            <div className="d-flex align-items-center gap-2">
              <div className="title-line"></div>
              <h2 className="display-four n5-color fw-semibold">What I do</h2>
            </div>
            <p className="fs-seven n4-color mt-2 mt-md-4">
              I have more than 10 years experience building software for clients
              all over the world. Below is a quick overview of my main technical
              skill sets and technologies I use. Want to find out more about my
              experience? Check out my 
              <a href="resume.html" className="p1-color">
                online resume
              </a>{" "}
              and
              <a href="portfolio.html" className="p1-color">
                project portfolio
              </a>
              .
            </p>
          </div>
          <button
            data-aos="zoom-in-right"
            className="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 h-100 text-nowrap"
          >
            <PiArrowRight /> Services & Pricing
          </button>
        </div>

        <div className="row g-3 g-md-6 pt-60">
          {services.map(
            ({
              id,
              title,
              des,
              imgs,
            }: {
              id: number;
              title: string;
              des: string;
              imgs: StaticImageData[];
            }) => (
              <div
                key={id}
                className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3"
              >
                <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                  <div className="d-flex align-items-center gap-3">
                    {imgs.map((img, idx) => (
                      <div key={idx}>
                        <Image src={img} alt="..." className="service-icon" />
                      </div>
                    ))}
                  </div>
                  <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">
                    {title}
                  </h4>
                  <p className="fs-seven n4-color">{des}</p>
                </div>
              </div>
            )
          )}
          {/* <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3"
          >
            <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
              <Image src={js} alt="js" className="service-icon" />
              <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">
                Vanilla JavaScript
              </h4>
              <p className="fs-seven n4-color">
                List skills and technologies here. Customize as needed. Built on
                HTML5, Sass, and Bootstrap 5.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3"
          >
            <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
              <div className="d-flex align-items-center gap-3">
                <Image src={angular} alt="angular" className="service-icon" />
                <Image src={react} alt="react" className="service-icon" />
                <Image src={vue} alt="vue" className="service-icon" />
              </div>
              <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">
                Angular, React & Vue
              </h4>
              <p className="fs-seven n4-color">
                List skills and technologies here. Customize as needed. Built on
                HTML5, Sass, and Bootstrap 5.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3"
          >
            <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
              <Image src={node} alt="node" className="service-icon" />
              <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">
                Node.js
              </h4>
              <p className="fs-seven n4-color">
                List skills and technologies here. Customize as needed. Built on
                HTML5, Sass, and Bootstrap 5.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3"
          >
            <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
              <Image src={python} alt="python" className="service-icon" />
              <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">
                Python & Django
              </h4>
              <p className="fs-seven n4-color">
                List skills and technologies here. Customize as needed. Built on
                HTML5, Sass, and Bootstrap 5.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3"
          >
            <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
              <Image src={php} alt="php" className="service-icon" />
              <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">
                PHP
              </h4>
              <p className="fs-seven n4-color">
                List skills and technologies here. Customize as needed. Built on
                HTML5, Sass, and Bootstrap 5.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3"
          >
            <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
              <div className="d-flex gap-3">
                <Image src={npm} alt="npm" className="service-icon" />
                <Image src={gulp} alt="gulp" className="service-icon" />
                <Image src={grunt} alt="grunt" className="service-icon" />
              </div>
              <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">
                npm, Gulp & Grunt
              </h4>
              <p className="fs-seven n4-color">
                List skills and technologies here. Customize as needed. Built on
                HTML5, Sass, and Bootstrap 5.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3"
          >
            <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
              <div className="d-flex gap-3">
                <Image src={html} alt="html" className="service-icon" />
                <Image src={css} alt="css" className="service-icon" />
              </div>
              <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">
                HTML & CSS
              </h4>
              <p className="fs-seven n4-color">
                List skills and technologies here. Customize as needed. Built on
                HTML5, Sass, and Bootstrap 5.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3"
          >
            <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
              <div className="d-flex gap-3">
                <Image src={sass} alt="sass" className="service-icon" />
                <Image src={less} alt="less" className="service-icon" />
              </div>
              <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">
                Sass & LESS
              </h4>
              <p className="fs-seven n4-color">
                List skills and technologies here. Customize as needed. Built on
                HTML5, Sass, and Bootstrap 5.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default WhatDo;
