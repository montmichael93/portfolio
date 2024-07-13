import Image from "next/image";
import buyer1 from "@/../public/images/buyer1.png";
import buyer2 from "@/../public/images/buyer2.png";
import buyer3 from "@/../public/images/buyer3.png";
import buyer4 from "@/../public/images/buyer4.png";

const Comments = () => {
  return (
    <section data-aos="fade-up" className="mt-8 mt-md-15">
      <h3 className="n5-color fs-three fw-semibold mb-4 mb-md-8">3 Comments</h3>
      <div>
        <div className="d-flex flex-wrap flex-md-nowrap gap-4 gap-md-8 px-4 px-md-8 py-3 py-md-6 rounded-3 w-100 brn4">
          <div className="flex-shrink-0">
            <Image src={buyer1} alt="..." className="cmnt-img flex-shrink-0" />
          </div>
          <div className="w-100">
            <div className="d-flex gap-3 justify-content-between align-items-center w-100">
              <div className="w-100">
                <h6 className="n5-color fs-six fw-medium">Ronald Richards</h6>
                <span className="n5-color fs-nine fw-medium">May 9, 2014</span>
              </div>
              <button className="px-3 px-md-5 py-2 p1-color br1 rounded-pill">
                Reply
              </button>
            </div>
            <p className="n4-color fs-eight mt-2 mt-md-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis
              arcu enim urna adipiscing praesent velit viverra sit semper lorem
              eu cursus vel hendrerit elementum morbi curabitur etiam nibh
              justo, lorem aliquet donec sed sit mi dignissim at ante massa
              mattis.
            </p>
          </div>
        </div>
        <div className="my-3 my-md-6 ms-10 ms-md-20">
          <div className="d-flex flex-wrap flex-md-nowrap gap-4 gap-md-8 px-4 px-md-8 py-3 py-md-6 rounded-3 w-100 brn4 mb-3 mb-md-6">
            <div className="flex-shrink-0">
              <Image
                src={buyer2}
                alt="..."
                className="cmnt-img flex-shrink-0"
              />
            </div>
            <div className="w-100">
              <div className="d-flex gap-3 justify-content-between align-items-center w-100">
                <div className="w-100">
                  <h6 className="n5-color fs-six fw-medium">Annette Black</h6>
                  <span className="n5-color fs-nine fw-medium">
                    March 13, 2014
                  </span>
                </div>
                <button className="px-3 px-md-5 py-2 p1-color br1 rounded-pill">
                  Reply
                </button>
              </div>
              <p className="n4-color fs-eight mt-2 mt-md-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis
                arcu enim urna adipiscing praesent velit viverra sit semper
                lorem eu cursus vel hendrerit elementum morbi curabitur etiam
                nibh justo, lorem aliquet donec sed sit mi dignissim at ante
                massa mattis.
              </p>
            </div>
          </div>
          <div className="d-flex flex-wrap flex-md-nowrap gap-4 gap-md-8 px-4 px-md-8 py-3 py-md-6 rounded-3 w-100 brn4">
            <div className="flex-shrink-0">
              <Image
                src={buyer3}
                alt="..."
                className="cmnt-img flex-shrink-0"
              />
            </div>
            <div className="w-100">
              <div className="d-flex gap-3 justify-content-between align-items-center w-100">
                <div className="w-100">
                  <h6 className="n5-color fs-six fw-medium">Guy Hawkins</h6>
                  <span className="n5-color fs-nine fw-medium">
                    October 25, 2019
                  </span>
                </div>
                <button className="px-3 px-md-5 py-2 p1-color br1 rounded-pill">
                  Reply
                </button>
              </div>
              <p className="n4-color fs-eight mt-2 mt-md-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis
                arcu enim urna adipiscing praesent velit viverra sit semper
                lorem eu cursus vel hendrerit elementum morbi curabitur etiam
                nibh justo, lorem aliquet donec sed sit mi dignissim at ante
                massa mattis.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-wrap flex-md-nowrap gap-4 gap-md-8 px-4 px-md-8 py-3 py-md-6 rounded-3 w-100 brn4">
        <div className="flex-shrink-0">
          <Image src={buyer4} alt="..." className="cmnt-img flex-shrink-0" />
        </div>
        <div className="w-100">
          <div className="d-flex gap-3 justify-content-between align-items-center w-100">
            <div className="w-100">
              <h6 className="n5-color fs-six fw-medium">Eleanor Pena</h6>
              <span className="n5-color fs-nine fw-medium">
                December 19, 2013
              </span>
            </div>
            <button className="px-3 px-md-5 py-2 p1-color br1 rounded-pill">
              Reply
            </button>
          </div>
          <p className="n4-color fs-eight mt-2 mt-md-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis
            arcu enim urna adipiscing praesent velit viverra sit semper lorem eu
            cursus vel hendrerit elementum morbi curabitur etiam nibh justo,
            lorem aliquet donec sed sit mi dignissim at ante massa mattis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Comments;
