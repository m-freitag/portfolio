
import profile from './profile.jpeg';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons/faCss3';
import { faDocker } from '@fortawesome/free-brands-svg-icons/faDocker';
import { faGit } from '@fortawesome/free-brands-svg-icons/faGit';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5';
import { faJava } from '@fortawesome/free-brands-svg-icons/faJava';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons/faJsSquare';
import { faLinux } from '@fortawesome/free-brands-svg-icons/faLinux';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons/faMicrosoft';
import { faPython } from '@fortawesome/free-brands-svg-icons/faPython';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faC } from '@fortawesome/free-solid-svg-icons/faC';
import { faCloud } from '@fortawesome/free-solid-svg-icons/faCloud';
import { faDatabase } from '@fortawesome/free-solid-svg-icons/faDatabase';
import { faFile } from '@fortawesome/free-solid-svg-icons/faFile';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { faR } from '@fortawesome/free-solid-svg-icons/faR';

export const navigation = {
  name: "Markus",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Links",
      link: "/links",
    },
  ],
}
export const intro = {
  title: "Hey, I'm Markus",
  description: "A Data Scientist/Data Engineer working in insurance @arag.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "mailto:freitagmarkus@outlook.de",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "Welcome! I am a Data Scientist/Data Engineer in insurance. I love all things data plumbing, ML/DL, statistical and causal inference.",
    "Previously, I was a Research Fellow at the Chair of Empirical Political Research and Policy Analysis at the Geschwister-Scholl-Institut of Political Science (LMU Munich) and a Data Analyst in pharma. I will continue some of my academic projects and teaching in my spare time.",
  ],
}

export const work = {
  title: "Tech Stack",
  cards: [
    {
      title: "Expert",
      description: "I code in Python, Pyspark, SQL, R, and occasionally Julia and deploy on Databricks and Azure Data Factory. On the stats side of things, I love causal deep learning and follow new trends in NLP (... yes, also LLMs).",
      icons: [
        {
          icon: faPython,
          link: "",
        },
        {
          icon: faMicrosoft,
          link: "",
        },
        {
          icon: faCloud,
          link: "",
        },
        {
          icon: faDatabase,
          link: "",
        },
        {
          icon: faR,
          link: "",
        },
        {
          icon: faGit,
          link: "",
        },
      ],
    },
    {
      title: "Advanced",
      description: "Docker, Azure SQL, Azure Kubernetes Services, and Azure Cloud Sec/Architecture",
      icons: [
        {
          icon: faDocker,
          link: "",
        },
        {
          icon: faCloud,
          link: "",
        },
        {
          icon: faLock,
          link: "",
        },
        {
          icon: faLinux,
          link: "",
        }
      ],
    },
    {
      title: "Basic",
      description: "Arc‑Gis/Q‑Gis, JS/CSS/HTML, C+",
      icons: [
        {
          icon: faC,
          link: "",
        },
        {
          icon: faJsSquare,
          link: "",
        },
        {
          icon: faHtml5,
          link: "",
        },
        {
          icon: faCss3,
          link: "",
        },
      ],
    }
  ],
}

export const projects = {
  title: "Research",
  cards: [
    {
      title: "Deontological and consequentialist preferences towards arms exports: A comparative conjoint experiment in France and Germany.",
      description: "Rudolph, Lukas, Freitag, Markus und Thurner, Paul W.: EUROPEAN JOURNAL OF POLITICAL RESEARCH, 63: 705‑728 2024,",
      icons: [
        {
          icon: faFile,
          link: "https://ejpr.onlinelibrary.wiley.com/doi/full/10.1111/1475-6765.12617",
        },
      ]
    },
    {
      title: "Ordering Effects versus Cognitive Burden: How Should We Structure Attributes in Conjoint Experiments?",
      description: "Rudolph, Lukas, Freitag, Markus und Thurner, Paul W.: PUBLIC OPINION QUARTERLY, 88: 991–1016.",
      icons: [
        {
          icon: faFile,
          link: "https://academic.oup.com/poq/article-abstract/88/3/991/7863420?redirectedFrom=fulltext",
        },
      ]
    },
    {
      title: "Power Analysis for Conjoint Experiments",
      description: "WORKING PAPER.",
      icons: [
        {
          icon: faGlobe,
          link: "https://m-freitag.github.io/cjpowR_shiny/",
        },
      ]
    },
  ],
}


// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Markus Freitag | Data Science | Data Engineering",
  description: "A Data Scientist/Data Engineer working in insurance @arag.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "Markus Freitag",
  description: "Data Science | Data Engineering",
  cards: [
    {
      title: "BlueSky",
      link: "https://bsky.app/profile/markusfreitag.bsky.social",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/markus-freitag/",
    },
    {
      title: "Power for Conjoint Experiments",
      link: "https://m-freitag.github.io/cjpowR_shiny/",
    },
  ]
}