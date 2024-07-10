import Image, { StaticImageData } from "next/image";
import React from "react";
import { blogs } from "../../../../public/data/AllData";
import Link from "next/link";

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
          {blogs.map(
            ({
              id,
              img,
              date,
              tag,
              title,
            }: {
              id: number;
              img: StaticImageData;
              date: string;
              tag: string;
              title: string;
            }) => (
              <div key={id} className="col-sm-6 col-xxl-4">
                <Link href="blog_details.html" className="blog-card">
                  <div className="blog-img rounded-3 overflow-hidden">
                    <Image src={img} alt="blog" className="rounded-3 w-100" />
                  </div>
                  <div className="pt-4 pt-md-8 px-3 px-md-5">
                    <div className="d-flex align-items-center gap-3 mb-2 mb-md-3">
                      <span className="n4-color fs-eight">{date}</span>
                      <span className="p1-color fs-eight">/</span>
                      <span className="n4-color fs-eight">{tag}</span>
                    </div>
                    <h4 className="blog-title fs-five n5-color fw-semibold">
                      {title}
                    </h4>
                  </div>
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
