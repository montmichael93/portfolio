import Link from "next/link";
import { usePathname } from "next/navigation";
import AnimateHeight from "react-animate-height";
import { sidenavData } from "../../../../public/data/Sidebar";

type navProps = {
  setOpened: (open: any) => void;
  setNavOpen: (open: any) => void;
  opened: number | null;
};

const SideMenu = ({ sidebarIsOpen, setSidebarIsOpen }: any) => {
  const path = usePathname();
  return (
    <div className="left-menu">
      <h3>Sidemenu</h3>

      <div>
        <ul className="d-flex flex-column gap-5">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
