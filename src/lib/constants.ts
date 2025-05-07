import {
  FaLaptopCode,
  FaSearch,
  FaTools,
  FaProjectDiagram,
  FaRocket,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import nft from "../../public/images/projects/nft.png";
import hoobank from "../../public/images/projects/hoo bank.png";
import tipvault from "../../public/images/projects/tipvault.png";
import lectra from "../../public/images/projects/lectra.png";
import vista from "../../public/images/projects/vista.png";
import nps from "../../public/images/projects/nps_usa.png";
import asta from "../../public/images/projects/asta.png";
import tgl from "../../public/images/projects/tgl.png";
import novel from "../../public/images/projects/novel.png";
import abamba from "../../public/images/projects/abamba.png";
import bin_buddy from "../../public/images/projects/bin_buddy.png";

import javascript from "../../public/images/tech/javascript.png";
import reactjs from "../../public/images/tech/reactjs.png";
import django from "../../public/images/tech/django.svg";
import tailwind from "../../public/images/tech/tailwind.png";
import typescript from "../../public/images/tech/typescript.png";
import nextjs from "../../public/images/tech/next.png";
import firebase from "../../public/images/tech/firebase.png";
import convex from "../../public/images/tech/convex_logo.svg";
const navLinks = [
  { link: "Development Strategy", path: "strategy" },
  { link: "Projects", path: "projects" },
];

const projects = [
  {
    title: "Lectra",
    desc: "A multilingual e-learning platform",
    img: lectra,
    iconLists: [
      {
        name: "Nextjs",
        image: nextjs,
      },
      {
        name: "Tailwind",
        image: tailwind,
      },
      {
        name: "Typescript",
        image: typescript,
      },
      {
        name: "Firebase",
        image: firebase,
      },
      ,
    ],
    live_url: "https://lectra.vercel.app",
    git_link: "https://github.com/Dubby-Bantin/lectra",
  },
  {
    title: "NPS USA",
    desc: "A  top-tier security and hospitality company website",
    img: nps,
    iconLists: [
      {
        name: "Nextjs",
        image: nextjs,
      },
      {
        name: "Tailwind",
        image: tailwind,
      },
      {
        name: "Typescript",
        image: typescript,
      },
      {
        name: "Convex",
        image: convex,
      },
    ],
    live_url: "https://www.npssusa.com",
  },
  {
    completed: false,
    title: "ABAMBA",
    desc: "E-commerce site",
    img: abamba,
    iconLists: [
      {
        name: "Nextjs",
        image: nextjs,
      },
      {
        name: "Tailwind",
        image: tailwind,
      },
      {
        name: "Typescript",
        image: typescript,
      },
      {
        name: "Convex",
        image: convex,
      },
    ],
    live_url: "#still under constrution",
  },
  {
    title: "Logistics site",
    desc: "A modern, responsive logistics company website featuring dynamic service showcases.",
    img: tgl,
    iconLists: [
      {
        name: "Next.js",
        image: nextjs,
      },
      {
        name: "Tailwind",
        image: tailwind,
      },
      {
        name: "Typescript",
        image: typescript,
      },
    ],
    live_url: "https://target-ochre.vercel.app/",
  },
  {
    title: "A Book publishing site",
    desc: "A captivating journey through time and imagination that redefines what it means to be truly connected in a world of novels.",
    img: novel,
    completed: false,
    iconLists: [
      {
        name: "Next.js",
        image: nextjs,
      },
      {
        name: "Tailwind",
        image: tailwind,
      },
      {
        name: "Typescript",
        image: typescript,
      },
    ],
    live_url: "https://target-ochre.vercel.app/",
  },
  {
    title: "ASTA USA",
    desc: "A  top-tier advanced security training academy company website",
    img: asta,
    iconLists: [
      {
        name: "Nextjs",
        image: nextjs,
      },
      {
        name: "Tailwind",
        image: tailwind,
      },
      {
        name: "Typescript",
        image: typescript,
      },
    ],
    live_url: "https://advss-training-mbdz.vercel.app/",
  },
  {
    title: "Bin-Buddy",
    desc: "Environmentally responsible waste disposal site for residential and commercial clients.",
    img: bin_buddy,
    iconLists: [
      {
        name: "Nextjs",
        image: nextjs,
      },
      {
        name: "Tailwind",
        image: tailwind,
      },
      {
        name: "Typescript",
        image: typescript,
      },
    ],
    live_url: "https://bin-buddy-ten.vercel.app/",
  },
  {
    title: "Decor Vista",
    desc: "A Interior design Site",
    img: vista,
    iconLists: [
      {
        name: "Nextjs",
        image: nextjs,
      },
      {
        name: "Tailwind",
        image: tailwind,
      },
      {
        name: "Javascript",
        image: javascript,
      },
      {
        name: "Django",
        image: django,
      },
    ],
    live_url: "https://decor-vista-three.vercel.app/",
    git_link: "https://github.com/Dubby-Bantin/lectra",
  },

  {
    title: "NFT Site",
    desc: "Explore and manage NFTs with a sleek and user-friendly interface. Built with the latest web technologies.",
    img: nft,
    iconLists: [
      {
        name: "React.js",
        image: reactjs,
      },
      {
        name: "Tailwind",
        image: tailwind,
      },
      {
        name: "Javascript",
        image: javascript,
      },
    ],
    live_url: "https://nft-ten-kohl.vercel.app/",
    git_link: "https://github.com/Dubby-Bantin/NFT",
  },
  {
    title: "Bank Site",
    desc: "A secure and efficient bank landing page application featuring account management, transactions, and more.",
    img: hoobank,
    iconLists: [
      {
        name: "React.js",
        image: reactjs,
      },
      {
        name: "Tailwind",
        image: tailwind,
      },
      {
        name: "Javascript",
        image: javascript,
      },
    ],
    live_url: "https://hoo-bank-lilac.vercel.app/",
    git_link: "https://github.com/Dubby-Bantin/HOO__BANK",
  },
  {
    title: "TipVault",
    desc: "A platform for sharing and discovering programming tips categorized by language. Built with React and TypeScript.",
    img: tipvault,
    iconLists: [
      {
        name: "React.js",
        image: reactjs,
      },
      {
        name: "Tailwind",
        image: tailwind,
      },
      {
        name: "Javascript",
        image: javascript,
      },
    ],
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
    id: 3,
    Icon: FaLinkedin,
    path: "https://www.linkedin.com/in/chidubem-desmond-b256a1353/",
  },
];
export { navLinks, approachSteps, projects, socialMediaIcons };
