import { DiJava, DiHtml5 } from "react-icons/di";
import {SiGit, SiCss3, SiMysql, SiFigma, SiAdobephotoshop} from "react-icons/si";
import {DiJsBadge, DiReact, DiNodejs, DiJqueryLogo} from "react-icons/di";
import { DiBootstrap } from "react-icons/di";


export const Skills = [
  
  {
    slug: "java",
    Component: DiJava,
    title: "Java",
    Description: () => <>OOP language for coding and programming projects</>,
  },

  {
    slug: "html",
    Component: DiHtml5,
    title: "HTML",
    Description: () => <>Static webpages and portfolio projects</>,
  },
  {
    slug: "css",
    Component: SiCss3,
    title: "CSS",
    Description: () => <>Styling of my webpages</>,
  },

  {
    slug: "javascript",
    Component: DiJsBadge,
    title: "Javascript",
    Description: () => <>For dynamic and interactive webpages</>,
  },

  {
    slug: "node.js",
    Component: DiNodejs,
    title: "Node.js",
    Description: () => <>For server-side programming</>,
  },

  {
    slug: "JQuery",
    Component: DiJqueryLogo,
    title: "JQuery",
    Description: () => <>Fast, small, and feature-rich JavaScript library</>,
  },

  {
    slug: "sql",
    Component: SiMysql,
    title: "MySQL",
    Description: () => <>Storing client and user data</>,
  },
  
  {
    slug: "react",
    Component: DiReact,
    title: "React",
    Description: () => <>Building multi-page and single page interfaces</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Code management and version control</>,
  },

  {
  slug: "bootstrap",
    Component: DiBootstrap,
    title: "Bootstrap",
    Description: () => <>Responsive development of mobile-first websites</>,
  },

  {
    slug: "figma",
      Component: SiFigma,
      title: "Figma",
      Description: () => <>For designing mockups and wireframes</>,
    },

    {
      slug: "photoshop",
        Component: SiAdobephotoshop,
        title: "Photoshop",
        Description: () => <>For image editing, retouching, website wireframes</>,
      },



];
