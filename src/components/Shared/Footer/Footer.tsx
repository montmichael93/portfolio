import Link from "next/link";

const Footer = () => {
  return (
    <section className="container d-flex gap-3 gap-md-6 flex-wrap justify-content-center justify-content-sm-between align-items-center pb-4 pb-md-8 text-center">
      <span className="fs-eight fw-medium n5-color">
        Copyright © 2024
        <Link href="#" className="fs-eight fw-medium n5-color">
          Portfolify
        </Link>
        . All Rights Reserved.
      </span>
      <span className="fs-eight fw-medium n5-color">
        Designed by
        <Link href="#" className="fs-eight fw-medium n5-color">
          UIAXIS
        </Link>
      </span>
    </section>
  );
};

export default Footer;
