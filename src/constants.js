import COINTRACKER from "./assets/images/newcoin.png";
import TODO from "./assets/images/newtodo.png";
import ECOMMERCE from "./assets/images/ecommerce.png";

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
    ref: "",
  },
  {
    id: 3,
    name: "Projects",
    to: "projects",
  },

  {
    id: 4,
    name: "Contact",
    to: "contact",
    ref: "",
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: ECOMMERCE,
    link: "https://github.com/kimyong8175/ecommerce",
    demo: "https://www.yongcommerce.com",
  },
  {
    title: "Coin Tracker",
    subtitle: "React and Recoil",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: COINTRACKER,
    link: "https://github.com/kimyong8175/coin-tracker",
    demo: "https://kimyong8175.github.io/coin-tracker",
  },
  {
    title: "To-Do app",
    subtitle: "React and Recoil",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: TODO,
    link: "https://github.com/kimyong8175/new-todo",
    demo: "https://kimyong8175.github.io/new-todo/",
  },
];
