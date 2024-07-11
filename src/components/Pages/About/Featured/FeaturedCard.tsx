import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { PiArrowUpRightBold } from "react-icons/pi";

const FeaturedCard = ({
  img,
  tag1,
  tag2,
  tag3,
  title,
}: {
  img: StaticImageData;
  tag1: string;
  tag2: string;
  tag3: string;
  title: string;
}) => {
  return (
    <div className="col-xl-6">
      <Link href="/portfolio_details" className="project-card">
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
      </Link>
    </div>
  );
};

export default FeaturedCard;
