import React from "react";
import { PiArrowRight, PiCheckCircleFill } from "react-icons/pi";
import { packagesPrice } from "../../../../public/data/AllData";

const PackagesPrice = () => {
  return (
    <div className="row g-6">
      {packagesPrice.map(
        ({
          id,
          title,
          price,
          time,
          services,
          btn,
        }: {
          id: number;
          title: string;
          price: string;
          time: string;
          services: string[];
          btn: string;
        }) => (
          <div key={id} className="col-sm-6 col-xl-4">
            <div className="pricing-card bgn2-color brn4 px-3 px-md-6 py-4 py-md-8 text-center overflow-hidden position-relative">
              {title === "Standard" && (
                <div className="popular-price px-2 px-md-5 py-1 py-md-3 py-xl-2 py-xxl-3">
                  <span className="fs-seven n1-color">Most popular</span>
                </div>
              )}

              <span className="fs-eight n5-color">{title}</span>
              <h3 className="p1-color fs-two">${price}</h3>
              <span className="fs-eight n5-color">{time}</span>
              <div className="line-divider my-4 my-md-7"></div>
              <ul>
                {services.map((service, idx) => (
                  <li
                    key={idx}
                    className="d-flex gap-3 align-items-center n5-color mb-2 mb-md-3"
                  >
                    <i className="fs-six p1-color">
                      <PiCheckCircleFill />
                    </i>
                    {service}
                  </li>
                ))}
              </ul>

              <button className="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 mx-auto mt-5 mt-md-10">
                <PiArrowRight />
                {btn}
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default PackagesPrice;
