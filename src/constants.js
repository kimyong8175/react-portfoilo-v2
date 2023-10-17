import COINTRACKER from "./assets/images/newcoin.png";
import TODO from "./assets/images/newtodo.png";
import ECOMMERCE from "./assets/images/newecommerce.png";

export const navItems = [
  {
    id: 1,
    name: "Home",
    to: "intro",
    ref: "",
  },
  {
    id: 2,
    name: "About",
    to: "about",
  },
  {
    id: 3,
    name: "Skills",
    to: "skills",
  },
  {
    id: 4,
    name: "Projects",
    to: "projects",
  },

  {
    id: 5,
    name: "Contact",
    to: "contact",
  },
];

export const skills = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "NodeJS",
  "Python",
];

export const projects = [
  {
    title: "Ecommerce",
    subtitle: "MERN Stack & Redux-toolkit",
    description:
      "This is a full-featured e-commerce project built with MERN stack & redux-toolkit. It has PayPal & credit/debit payments",
    image: ECOMMERCE,
    link: "https://github.com/kimyong8175/ecommerce",
    demo: "https://www.yongcommerce.com",
  },
  {
    title: "Coin Tracker",
    subtitle: "React and Recoil",
    description:
      "This is a simple toy project built with React & recoil. It has some feature of traking coin price and quantity with Apexcharts library.",
    image: COINTRACKER,
    link: "https://github.com/kimyong8175/coin-tracker",
    demo: "https://kimyong8175.github.io/coin-tracker",
  },
  {
    title: "To-Do app",
    subtitle: "React and Recoil",
    description:
      "This is a simple toy project built with React & recoil. It does not have a backend part. It has CRUD feature for user.",
    image: TODO,
    link: "https://github.com/kimyong8175/new-todo",
    demo: "https://kimyong8175.github.io/new-todo/",
  },
];
