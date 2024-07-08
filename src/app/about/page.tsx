import Banner from "@/components/Pages/About/Banner";
import Counter from "@/components/Pages/About/Counter";
import WhatDo from "@/components/Pages/About/WhatDo";

const About = () => {
  return (
    <div>
      <section className="pt-120 pb-60 br-bottom-n3 overflow-hidden mt-10 mt-lg-0">
        <div className="container">
          <Banner />
          <Counter />
        </div>
      </section>
      <WhatDo />
    </div>
  );
};

export default About;
