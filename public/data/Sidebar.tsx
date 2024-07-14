import {
  PiBriefcase,
  PiCodeBlock,
  PiEnvelope,
  PiNewspaperClipping,
  PiNotebook,
  PiUser,
} from "react-icons/pi";

export const sidebarsData = [
  {
    id: 1,
    name: "About Us",
    url: "/",
    icon: <PiUser />,
  },
  {
    id: 2,
    name: "Portfolio",
    url: "/portfolio",
    icon: <PiCodeBlock />,
    numbers: 16,
  },
  {
    id: 3,
    name: "Services & Pricing",
    url: "/price",
    icon: <PiBriefcase />,
  },
  {
    id: 4,
    name: "Resume",
    url: "/resume",
    icon: <PiNotebook />,
  },
  {
    id: 5,
    name: "Blog",
    url: "/blog",
    icon: <PiNewspaperClipping />,
  },
  {
    id: 6,
    name: "Contact",
    url: "/contact",
    icon: <PiEnvelope />,
  },
];
