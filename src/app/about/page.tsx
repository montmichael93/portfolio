import Banner from "@/components/Pages/About/Banner";
import Counter from "@/components/Pages/About/Counter";
import Featured from "@/components/Pages/About/Featured";
import LatestBlog from "@/components/Pages/About/LatestBlog";
import NextProject from "@/components/Pages/About/NextProject";
import Testimonials from "@/components/Pages/About/Testimonials";
import WhatDo from "@/components/Pages/About/WhatDo";
import Footer from "@/components/Shared/Footer/Footer";

const About = () => {
  return (
    <div className="main-content w-100">
      <section className="pt-120 pb-60 br-bottom-n3 overflow-hidden mt-10 mt-lg-0">
        <div className="container">
          <Banner />
          <Counter />
        </div>
      </section>
      <WhatDo />
      <NextProject />
      <Featured />
      <Testimonials />
      <LatestBlog />
      <Footer />
    </div>
  );
};

export default About;
