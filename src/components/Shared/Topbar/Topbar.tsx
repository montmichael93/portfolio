import { Dispatch, SetStateAction } from "react";
import { PiList } from "react-icons/pi";

const Topbar = ({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="w-100 bg1-color p-3 position-fixed z-3 top-0 d-flex align-items-center justify-content-between d-block d-lg-none">
      <div
        className="sidebar-btn cursor-pointer"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <i className=" fs-two n11-color">
          <PiList />
        </i>
      </div>
      <h3 className="n11-color fw-semibold fs-three">Chris Evans</h3>
    </div>
  );
};
export default Topbar;
