import js from "@/../public/images/js.png";
import angular from "@/../public/images/angular.png";
import react from "@/../public/images/react.png";
import vue from "@/../public/images/vue.png";
import node from "@/../public/images/node.png";
import python from "@/../public/images/python.png";
import php from "@/../public/images/php.png";
import npm from "@/../public/images/npm.png";
import gulp from "@/../public/images/gulp.png";
import grunt from "@/../public/images/grunt.png";
import html from "@/../public/images/html.png";
import css from "@/../public/images/css.png";
import sass from "@/../public/images/sass.png";
import less from "@/../public/images/less.png";
import aws from "@/../public/images/aws.png";
import docker from "@/../public/images/docker.webp";
import tailwind from "@/../public/images/tailwind.png";

// features img
import project1 from "@/../public/images/project1.png";
import project2 from "@/../public/images/project2.png";
import project3 from "@/../public/images/project3.png";
import project4 from "@/../public/images/project4.png";

import buyer1 from "@/../public/images/buyer1.png";
import buyer2 from "@/../public/images/buyer2.png";
import buyer3 from "@/../public/images/buyer3.png";
import buyer4 from "@/../public/images/buyer4.png";

import blog1 from "@/../public/images/blog1.png";
import blog2 from "@/../public/images/blog2.png";
import blog3 from "@/../public/images/blog3.png";
import blog4 from "@/../public/images/blog4.png";
import blog5 from "@/../public/images/blog5.png";
import blog6 from "@/../public/images/blog6.png";
import blog7 from "@/../public/images/blog7.png";
import blog8 from "@/../public/images/blog8.png";
import blog9 from "@/../public/images/blog9.png";

import product1 from "@/../public/images/react-dashboard.png";
import product2 from "@/../public/images/ui-kit.png";
import product3 from "@/../public/images/angular-dashboard.png";
import curtismadeit from "@/../public/images/curtismadeitdotcom.png";
import pdfAnalyzer from "@/../public/images/pdfanalyzer.png";
import vidGallery from "@/../public/images/vidgallery.png";

export const services = [
  {
    id: 1,
    title: "JavaScript & TypeScript",
    des: "DOM manipulation, ES6+ features, asynchronous programming (Promises, async/await), APIs.",
    imgs: [js],
  },
  {
    id: 2,
    title: "React",
    des: "JSX, components (functional and class), props, state, lifecycle methods, hooks (useState, useEffect).",
    imgs: [react],
  },
  {
    id: 3,
    title: "Node.js",
    des: "developing scalable server-side applications using Node.js and frameworks like Express.js and NestJS. ",
    imgs: [node],
  },
  {
    id: 4,
    title: "Amazon Web Service",
    des: "API Deployment with Docker and EC2, API Deployment with Github Actions, Multi-Availability Zone EC2 Deployment",
    imgs: [aws],
  },
  {
    id: 5,
    title: "docker",
    des: "automating Docker setup workflow using GitHub Actions and YAML, ",
    imgs: [docker],
  },
  {
    id: 6,
    title: "npm",
    des: "Installing, updating, and managing dependencies (dependencies and devDependencies).",
    imgs: [npm],
  },
  {
    id: 7,
    title: "HTML & CSS",
    des: "Semantic HTML, Accessibility, Media queries, fluid grids & Preprocessors",
    imgs: [html, css],
  },
  {
    id: 8,
    title: "Tailwind",
    des: "optimizing design consistency and maintainability across web applications.",
    imgs: [tailwind],
  },
];

export const featureds = [
  {
    id: 1,
    tag1: "React Ts",
    tag2: "YouTube API",
    tag3: "Web Development",
    title: "www.Curtismadeit.com",
    img: vidGallery,
    link: "/curtismadeit",
  },
  {
    id: 2,
    tag1: "React Js",
    tag2: "base64ToArrayBuffer",
    tag3: "Web Development",
    title: "PDF Analyzer",
    img: pdfAnalyzer,
    link: "/pdfanalyzer",
  },
];

export const testimonials = [
  {
    id: 1,
    country: "Australia",
    name: "Esther Howard",
    des: "I highly recommend Portfolify to anyone looking for a high-quality and responsive Bootstrap theme.",
    img: buyer1,
  },
  {
    id: 2,
    country: "Canada",
    name: "Robert Fox",
    des: "Portfolify is the perfect theme for businesses that want to create a stylish and functional website.",
    img: buyer2,
  },
  {
    id: 3,
    country: "China",
    name: "Cameron Williamson",
    des: "Portfolify helped us create a stunning and clear website that reflects our brand perfectly.",
    img: buyer3,
  },
  {
    id: 4,
    country: "USA",
    name: "Jenny Wilson",
    des: "Best Bootstrap template ever: easy to customize, feature-rich, responsive and meets all our needs.",
    img: buyer4,
  },
  {
    id: 5,
    country: "India",
    img: buyer2,
    name: "Robert Fox",
    des: "Portfolify is the perfect theme for businesses that want to create a stylish and functional website.",
  },
];

export const blogs = [
  {
    id: 1,
    img: blog1,
    date: "April 18, 2024",
    tag: "Articles",
    title: "Github Actions EC2 Deployment: API and Database",
  },
  {
    id: 2,
    img: blog2,
    date: "March 22, 2024",
    tag: "Tutorials",
    title: "Github Actions EC2 Deployment: Frontend, API, and Database",
  },
  {
    id: 3,
    img: blog3,
    date: "May 08, 2024",
    tag: "Articles",
    title: "Simple EKS Deployment",
  },
  {
    id: 4,
    img: blog4,
    date: "April 18, 2024",
    tag: "Articles",
    title: "Manual Fullstack EKS Deployment",
  },
  {
    id: 5,
    img: blog5,
    date: "March 22, 2024",
    tag: "Tutorials",
    title: "Github Actions Fullstack EKS Deployment",
  },
  {
    id: 6,
    img: blog6,
    date: "May 08, 2024",
    tag: "Articles",
    title: "A Guide to Becoming a Full-Stack Developer",
  },
];

export const packagesPrice = [
  {
    id: 1,
    title: "Basic",
    price: "900",
    time: "Per Month",
    services: [
      "Web Development",
      "UI/UX Design",
      "Webflow Development",
      "Website Optimization",
      "24/7 Support",
    ],
    btn: "Choose Basic",
  },
  {
    id: 2,
    title: "Standard",
    price: "2500",
    time: "Per Month",
    services: [
      "Web Development",
      "UI/UX Design",
      "Webflow Development",
      "Website Optimization",
      "24/7 Support",
    ],
    btn: "Choose Standard",
  },
  {
    id: 3,
    title: "Premium",
    price: "5000",
    time: "Per Month",
    services: [
      "Web Development",
      "UI/UX Design",
      "Webflow Development",
      "Website Optimization",
      "24/7 Support",
    ],
    btn: "Choose Premium",
  },
];

export const frequentlyData = [
  {
    id: 1,
    questions: "What is Portfolify",
    answers:
      "This is the first items accordion body.It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the accordion-body, though the transition does limit overflow.",
  },
  {
    id: 2,
    questions: "How Can I Help You?",
    answers:
      "This is the first items accordion body.It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the accordion-body, though the transition does limit overflow.",
  },
  {
    id: 3,
    questions: "Simple process for workflow?",
    answers:
      "This is the first items accordion body.It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the accordion-body, though the transition does limit overflow.",
  },
  {
    id: 4,
    questions: "Why responsive multi page template?",
    answers:
      "This is the first items accordion body.It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the accordion-body, though the transition does limit overflow.",
  },
  {
    id: 5,
    questions: "Is Portfolify a Multi-purpose template?",
    answers:
      "This is the first items accordion body.It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the accordion-body, though the transition does limit overflow.",
  },
];

export const commentsData = [
  {
    id: 1,
    img: buyer1,
    name: "Ronald Richards",
    date: "Mar 03,2023",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus vel hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec sed sit mi dignissim at ante massa mattis.",
  },
  {
    id: 2,
    img: buyer2,
    name: "Jacob Jones",
    date: "May 9, 2024",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus vel hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec sed sit mi dignissim at ante massa mattis.",
  },
  {
    id: 3,
    img: buyer3,
    name: "Eleanor Pena",
    date: "October 25, 2020",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus vel hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec sed sit mi dignissim at ante massa mattis.",
  },
];

export const productsData = [
  {
    id: 1,
    img: product1,
    title: "React Dashboard Template",
    des: "Develop modern, beautiful, and responsive applications in half the time.",
    price: "120",
  },
  {
    id: 2,
    img: product2,
    title: "React UI Kit",
    des: "A professional React Kit that comes with plenty of Material UI components.",
    price: "110",
  },
  {
    id: 3,
    img: product3,
    title: "Angular Dashboard Template",
    des: "CoreUI PRO Angular Admin Template makes app development lightning fast.",
    price: "100",
  },
  {
    id: 4,
    img: blog4,
    title: "Unleashing Creativity in Code",
    des: "Develop modern, beautiful, and responsive applications in half the time.",
    price: "120",
  },
  {
    id: 5,
    img: blog3,
    title: "Mastering Modern Development",
    des: "Learn the latest techniques and tools for mastering modern development.",
    price: "100",
  },
  {
    id: 6,
    img: blog5,
    title: "Beyond the Basics",
    des: "Learn how to prepare yourself for the next generation of software development.",
    price: "120",
  },
];

export const modalProductsData = [
  {
    id: 1,
    img: blog4,
    title: "Unleashing Creativity in Code",
    price: "120",
  },
  {
    id: 2,
    img: blog5,
    title: "Mastering Modern Development",
    price: "100",
  },
];
