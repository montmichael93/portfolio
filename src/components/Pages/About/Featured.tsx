import Image, { StaticImageData } from "next/image";
import { featureds } from "../../../../public/data/AllData";
import {
  PiArrowRight,
  PiArrowRightBold,
  PiArrowUpRightBold,
} from "react-icons/pi";

const Featured = () => {
  return (
    <section className="pt-120 pb-120 br-bottom-n3">
      <div className="container">
        <div className="d-flex gap-3 flex-wrap flex-xxl-nowrap justify-content-between align-items-end">
          <div data-aos="zoom-in-left" className="section-heading">
            <div className="d-flex align-items-center gap-2">
              <div className="title-line"></div>
              <h2 className="display-four n5-color fw-semibold">
                Featured Projects
              </h2>
            </div>
            <p className="fs-seven n4-color mt-2 mt-md-4">
              My step-by-step guide ensures a smooth project journey, from the
              initial consultation to the final delivery. I take care of every
              detail, allowing you to focus on what you do best.
            </p>
          </div>
          <a
            data-aos="zoom-in-right"
            href="portfolio.html"
            className="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 h-100 text-nowrap"
          >
            <PiArrowRight />
            View Portfolio
          </a>
        </div>

        <div className="row g-5 g-md-10 mt-8 mt-md-15">
          {featureds.map(
            ({
              id,
              img,
              tag1,
              tag2,
              tag3,
              title,
            }: {
              id: number;
              img: StaticImageData;
              tag1: string;
              tag2: string;
              tag3: string;
              title: string;
            }) => (
              <div key={id} className="col-xl-6">
                <a href="portfolio_details.html" className="project-card">
                  <div>
                    <Image src={img} alt="project" className="p-2 w-100" />
                  </div>
                  <div className="d-flex justify-content-between gap-2 align-items-center pt-4 pt-md-8 px-3 px-md-6">
                    <div>
                      <div className="d-flex gap-2 align-items-center">
                        <span className="n5-color fs-eleven px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium">
                          {tag1}
                        </span>
                        <span className="n5-color fs-eleven px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium">
                          {tag2}
                        </span>
                        <span className="n5-color fs-eleven px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium">
                          {tag3}
                        </span>
                      </div>
                      <h4 className="project-title fs-five fw-semibold n5-color mt-3 mt-md-5">
                        {title}
                      </h4>
                    </div>
                    <div className="project-link d-flex align-items-center justify-content-center flex-shrink-0">
                      <i className="ph-bold ph-arrow-up-right n5-color">
                        <PiArrowUpRightBold />
                      </i>
                    </div>
                  </div>
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Featured;
