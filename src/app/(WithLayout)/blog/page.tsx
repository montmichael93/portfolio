import { blogs } from "../../../../public/data/AllData";
import BlogCard from "@/components/Pages/About/Blog/BlogCard";
import {
  PiCaretLeftBold,
  PiCaretRightBold,
  PiPaperPlaneTilt,
} from "react-icons/pi";
import Footer from "@/components/Shared/Footer/Footer";
import FadeDown from "@/components/motionEffect/FadeDown";

const Blog = () => {
  return (
    <div>
      <section className="pt-120 pb-120 mt-10 mt-lg-0">
        <FadeDown>
          <div className="pb-60 br-bottom-n3">
            <div className="container">
              <div className="page-heading">
                <h3 className="page-title fs-onefw-semibold n5-color mb-2 mb-md-3 text-center">
                  Articles about Software Development And Life
                </h3>

                <div className="d-flex flex-wrap flex-sm-nowrap gap-3 gap-md-6"></div>
              </div>
            </div>
          </div>
        </FadeDown>

        {/* <!-- blog card  --> */}
        <div className="container">
          <div className="row g-5 g-md-10 mt-5">
            {blogs.map(({ id, img, date, tag, title }) => (
              <BlogCard
                key={id}
                img={img}
                date={date}
                tag={tag}
                title={title}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
