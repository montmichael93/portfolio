import {
  PiBriefcaseFill,
  PiCodeBlock,
  PiCodeBlockFill,
  PiEnvelope,
  PiEnvelopeFill,
  PiNewspaperClipping,
  PiNewspaperClippingFill,
  PiNotebook,
  PiNotebookFill,
  PiShoppingBagFill,
  PiUser,
  PiUserFill,
} from "react-icons/pi";

export const sidebarsData = [
  {
    id: 1,
    name: "About Me",
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
    name: "Resume",
    url: "/resume",
    icon: <PiNotebook />,
  },
  {
    id: 4,
    name: "Blog",
    url: "/blog",
    icon: <PiNewspaperClipping />,
  },
  {
    id: 5,
    name: "Contact",
    url: "/contact",
    icon: <PiEnvelope />,
  },
];
export const bottomNavData = [
  {
    id: 1,
    name: "About Us",
    url: "/",
    icon: <PiUserFill />,
  },
  {
    id: 2,
    name: "Portfolio",
    url: "/portfolio",
    icon: <PiCodeBlockFill />,
    numbers: 16,
  },
  {
    id: 3,
    name: "Pricing",
    url: "/price",
    icon: <PiBriefcaseFill />,
  },
  {
    id: 4,
    name: "Resume",
    url: "/resume",
    icon: <PiNotebookFill />,
  },
  {
    id: 5,
    name: "Products",
    url: "/products",
    icon: <PiShoppingBagFill />,
  },
  {
    id: 6,
    name: "Blog",
    url: "/blog",
    icon: <PiNewspaperClippingFill />,
  },
  {
    id: 7,
    name: "Contact",
    url: "/contact",
    icon: <PiEnvelopeFill />,
  },
];
