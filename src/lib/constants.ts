import {
  FaLaptopCode,
  FaSearch,
  FaTools,
  FaProjectDiagram,
  FaRocket,
  FaGithub,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

import nft from "../../public/images/projects/nft.png";
import hoobank from "../../public/images/projects/hoo bank.png";
// import portfolio from "../../public/images/projects/portfolio.png";
import tipvault from "../../public/images/projects/tipvault.png";
import lectra from "../../public/images/projects/lectra.png";
import vista from "../../public/images/projects/vista.png";
import bmp from "../../public/images/projects/bmp_books.png";
import nps from "../../public/images/projects/nps_usa.png";
import asta from "../../public/images/projects/asta.png";

import javascript from "../../public/images/tech/javascript.png";
import reactjs from "../../public/images/tech/reactjs.png";
import tailwind from "../../public/images/tech/tailwind.png";
import typescript from "../../public/images/tech/typescript.png";
import nextjs from "../../public/images/tech/next.png";
import firebase from "../../public/images/tech/firebase.png";
import convex from "../../public/images/tech/convex_logo.svg";
// import firebase from "../../public/images/tech/firebase.png";
const navLinks = [
  { link: "Development Strategy", path: "strategy" },
  { link: "Projects", path: "projects" },
];

const projects = [
  {
    title: "Lectra",
    desc: "A multilingual e-learning platform",
    img: lectra,
    iconLists: [nextjs, tailwind, typescript, firebase],
    live_url: "https://lectra.vercel.app",
    git_link: "https://github.com/Dubby-Bantin/lectra",
  },
  {
    title: "NPS USA",
    desc: "A  top-tier security and hospitality company website",
    img: nps,
    iconLists: [nextjs, tailwind, typescript, convex],
    live_url: "https://www.npssusa.com",
  },
  {
    title: "ASTA USA",
    desc: "A  top-tier advanced security academy company website",
    img: asta,
    iconLists: [nextjs, tailwind, typescript],
    live_url: "https://advss-training-mbdz.vercel.app/",
  },
  {
    title: "BPM_BOOKS",
    desc: "A site dedicated for a book author",
    img: bmp,
    iconLists: [nextjs, tailwind, typescript],
    live_url: "https://lectra.vercel.app",
    // git_link: "https://github.com/Dubby-Bantin/lectra",
  },
  {
    title: "Decor Vista",
    desc: "A Interior design Site",
    img: vista,
    iconLists: [nextjs, tailwind, typescript, firebase],
    live_url: "https://decor-vista-three.vercel.app/",
    git_link: "https://github.com/Dubby-Bantin/lectra",
  },
  {
    title: "NFT Site",
    desc: "Explore and manage NFTs with a sleek and user-friendly interface. Built with the latest web technologies.",
    img: nft,
    iconLists: [reactjs, tailwind, javascript],
    live_url: "https://nft-ten-kohl.vercel.app/",
    git_link: "https://github.com/Dubby-Bantin/NFT",
  },
  {
    title: "Bank Site",
    desc: "A secure and efficient bank landing page application featuring account management, transactions, and more.",
    img: hoobank,
    iconLists: [reactjs, tailwind, javascript],
    live_url: "https://hoo-bank-lilac.vercel.app/",
    git_link: "https://github.com/Dubby-Bantin/HOO__BANK",
  },
  {
    title: "TipVault",
    desc: "A platform for sharing and discovering programming tips categorized by language. Built with React and TypeScript.",
    img: tipvault,
    iconLists: [reactjs, tailwind, typescript],
    live_url: "https://tipvault.vercel.app/",
    git_link: "https://github.com/Dubby-Bantin/tipvault",
  },
];

const approachSteps = [
  {
    title: "Research & Learning",
    description:
      "I believe in starting every project with a strong foundation. I invest time in thorough research and learning, often exploring multiple resources...",
    Icon: FaSearch,
  },
  {
    title: "Planning & Strategy",
    description:
      "Next, I create a detailed plan and strategy. This phase involves setting goals, defining milestones, and ensuring that the project is aligned with the overall vision.",
    Icon: FaProjectDiagram,
  },
  {
    title: "Design & Development",
    description:
      "During this phase, I focus on the creative and technical aspects of the project. This involves designing user interfaces, writing code, and building the core functionalities.",
    Icon: FaLaptopCode,
  },
  {
    title: "Testing & Optimization",
    description:
      "After development, I rigorously test the project to identify any bugs and optimize the project for the best performance.",
    Icon: FaTools,
  },
  {
    title: "Launch & Monitoring",
    description:
      "Finally, I launch the project and monitor its performance. I also gather feedback and make necessary adjustments to ensure continued success.",
    Icon: FaRocket,
  },
];

const socialMediaIcons = [
  {
    id: 1,
    Icon: FaGithub,
    path: "https://github.com/Dubby-Bantin?tab=repositories",
  },
  {
    id: 2,
    Icon: FaWhatsapp,
  },
  {
    id: 3,
    Icon: FaLinkedin,
    path: "https://www.linkedin.com/in/chidubem-desmond-b256a1353/",
  },
];
export { navLinks, approachSteps, projects, socialMediaIcons };
