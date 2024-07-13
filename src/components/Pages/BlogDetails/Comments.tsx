"use client";
import Image, { StaticImageData } from "next/image";
import buyer4 from "@/../public/images/buyer4.png";
import { useState } from "react";
import { commentsData } from "../../../../public/data/AllData";
import AnimateHeight from "react-animate-height";

const Comments = () => {
  const [toggle, setToggle] = useState<null | number>(0);

  const handleToggle = (id: number) => {
    if (toggle === id) {
      setToggle(null);
    } else {
      setToggle(id);
    }
  };

  return (
    <section className="mt-8 mt-md-15 comment-section">
      <h3 className="n5-color fs-three fw-semibold mb-4 mb-md-8">3 Comments</h3>

      {/* try animate height  */}
      <div className="py-120">
        {commentsData.map(
          ({
            id,
            img,
            name,
            date,
            des,
          }: {
            id: number;
            img: StaticImageData;
            name: string;
            date: string;
            des: string;
          }) => (
            <div key={id} className=" overflow-hidden  mb-3 mb-md-6">
              <div className="d-flex flex-wrap flex-md-nowrap gap-4 gap-md-8 px-4 px-md-8 py-3 py-md-6 rounded-3 w-100 brn4 ">
                <div className="flex-shrink-0">
                  <Image
                    src={img}
                    alt="..."
                    className="cmnt-img flex-shrink-0"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex gap-3 justify-content-between align-items-center w-100">
                    <div className="w-100">
                      <h6 className="n5-color fs-six fw-medium">{name}</h6>
                      <span className="n5-color fs-nine fw-medium">{date}</span>
                    </div>
                    <button
                      onClick={() => handleToggle(id)}
                      className={`px-3 px-md-5 py-2 p1-color br1 rounded-pill`}
                    >
                      Reply
                    </button>
                  </div>
                  <p className="n4-color fs-eight mt-2 mt-md-4">{des}</p>
                </div>
              </div>
              <AnimateHeight duration={500} height={toggle === id ? "auto" : 0}>
                <div className="ms-10 ms-md-20">
                  <div className="w-100 d-flex flex-wrap flex-md-nowrap gap-4 gap-md-8 px-4 px-md-8 py-3 py-md-6 rounded-3 w-100 brn4 mt-3 mt-md-6 ps-10">
                    <div className="flex-shrink-0">
                      <Image
                        src={buyer4}
                        alt="..."
                        className="cmnt-img flex-shrink-0"
                      />
                    </div>
                    <div className="w-100">
                      <div className="d-flex gap-3 justify-content-between align-items-center w-100">
                        <div className="w-100">
                          <h6 className="n5-color fs-six fw-medium">
                            Guy Hawkins
                          </h6>
                          <span className="n5-color fs-nine fw-medium">
                            October 25, 2019
                          </span>
                        </div>
                        <button className="px-3 px-md-5 py-2 p1-color br1 rounded-pill">
                          Reply
                        </button>
                      </div>
                      <p className="n4-color fs-eight mt-2 mt-md-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        lobortis arcu enim urna adipiscing praesent velit
                        viverra sit semper lorem eu cursus vel hendrerit
                        elementum morbi curabitur etiam nibh justo, lorem
                        aliquet donec sed sit mi dignissim at ante massa mattis.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateHeight>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Comments;
