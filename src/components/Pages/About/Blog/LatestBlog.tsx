import Image, { StaticImageData } from "next/image";
import React from "react";
import { blogs } from "../../../../../public/data/AllData";
import Link from "next/link";
import BlogCard from "./BlogCard";

const LatestBlog = () => {
  return (
    <section className="pt-120 pb-120">
      <div className="container">
        <div className="d-flex gap-3 flex-wrap flex-xxl-nowrap justify-content-between align-items-end">
          <div data-aos="zoom-in-left" className="section-heading">
            <div className="d-flex align-items-center gap-2">
              <div className="title-line"></div>
              <h2 className="display-four n5-color fw-semibold">
                Latest Blog Posts
              </h2>
            </div>
            <p className="fs-seven n4-color mt-2 mt-md-4">
              More than 1500+ agencies using Portfolify
            </p>
          </div>
          <a
            data-aos="zoom-in-right"
            href="blog.html"
            className="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill text-nowrap"
          >
            See All Articles
          </a>
        </div>
        <div className="row g-5 g-md-10 mt-8 mt-md-15">
          {blogs.slice(0, 3).map(({ id, img, date, tag, title }) => (
            <BlogCard key={id} img={img} date={date} tag={tag} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
