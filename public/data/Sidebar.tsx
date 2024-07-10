import {
  PiBriefcase,
  PiCodeBlock,
  PiEnvelope,
  PiNewspaperClipping,
  PiNotebook,
  PiUser,
} from "react-icons/pi";

export const sidebars = [
  {
    id: 1,
    name: "About Us",
    url: "/",
    icon: <PiUser />,
  },
  {
    id: 2,
    name: "Portfolio",
    url: "/",
    icon: <PiCodeBlock />,
  },
  {
    id: 3,
    name: "Services & Pricing",
    url: "/",
    icon: <PiBriefcase />,
  },
  {
    id: 4,
    name: "Resume",
    url: "/",
    icon: <PiNotebook />,
  },
  {
    id: 5,
    name: "Blog",
    url: "/",
    icon: <PiNewspaperClipping />,
  },
  {
    id: 6,
    name: "Contact",
    url: "/",
    icon: <PiEnvelope />,
  },
];
