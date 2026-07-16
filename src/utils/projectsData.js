import id0_1 from "./projectMedia/id0_1.jpeg";
import id0_2 from "./projectMedia/id0_2.jpeg";
import id0_3 from "./projectMedia/id0_3.jpeg";
import id0_4 from "./projectMedia/id0_4.jpeg";
import id0_5 from "./projectMedia/id0_5.jpeg";
import id0_6 from "./projectMedia/id0_6.jpeg";
import id0_7 from "./projectMedia/id0_7.jpeg";
import id0_8 from "./projectMedia/id0_8.jpeg";
import id0_9 from "./projectMedia/id0_9.jpeg";
import id0_10 from "./projectMedia/id0_10.jpeg";
import id0_11 from "./projectMedia/id0_11.jpeg";
import id0_12 from "./projectMedia/id0_12.jpeg";

import id1_1 from "./projectMedia/id1_1.jpg";
import id1_2 from "./projectMedia/id1_2.jpg";
import id1_3 from "./projectMedia/id1_3.jpg";
import id1_4 from "./projectMedia/id1_4.jpg";
import id1_5 from "./projectMedia/id1_5.jpg"; 
import id1_6 from "./projectMedia/id1_6.jpg";
import id1_7 from "./projectMedia/id1_7.jpg";
import id1_8 from "./projectMedia/id1_8.jpg";
import id1_9 from "./projectMedia/id1_9.jpg";
import id1_10 from "./projectMedia/id1_10.jpg";
import id1_11 from "./projectMedia/id1_11.jpg";
import id1_12 from "./projectMedia/id1_12.jpg";
import id1_13 from "./projectMedia/id1_13.jpg";
import id1_14 from "./projectMedia/id1_14.jpg";
import id3_1 from "./projectMedia/id3_1.png";

import id1v_1 from "./projectMedia/id1v_1.mp4";
import id2v_1 from "./projectMedia/id2v_1.mp4";
import id5v_1_portrait from "./projectMedia/id5v_1_portrait.mp4";
import id6v_1_portrait from "./projectMedia/id6v_1_portrait.mp4";
import id7v_1_portrait from "./projectMedia/id7v_1_portrait.mp4";
import id8v_1_portrait from "./projectMedia/id8v_1_portrait.mp4";


export const projects = [
  {
    id: 0,
    featured: true,
    title: "NetroAegis",
    year: "2025 – Present",
    abstract: "An Agentic AI-powered network decision system. A multi-agent architecture — Observer, Intent, Risk, Defense, Explanation, Context, Temporal, and Trust agents — that monitors network traffic, detects behavioral intent, evaluates threats, makes autonomous defensive decisions, and explains every decision through Explainable AI.",
    techStack: ["Python", "Flask", "React JS", "Machine Learning", "AI Agents", "Explainable AI", "JSON"],
    videos: [],
    screenshots: [
      id0_1, id0_2, id0_3, id0_4, id0_5, id0_6,
      id0_7, id0_8, id0_9, id0_10, id0_11, id0_12,
    ],
    references: [],
  },
  {
    id: 1,
    featured: true,
    title: "PMUSHA PMS",
    year: "Jul 2024 – May 2025",
    abstract: "A web-based dashboard system built for SNDT Women's University to manage, track, and report active projects and their funding statuses. Contributed 90%+ of UI/UX, 75%+ of logic and database integration, and 70% of overall project architecture.",
    techStack: ["React JS", "CSS", "Firebase"],
    videos: [id1v_1],
    screenshots: [
      id1_1, id1_2, id1_3, id1_4, id1_5, id1_6, id1_7,
      id1_8, id1_9, id1_10, id1_11, id1_12, id1_13, id1_14
    ],
    references: [],
  },
  {
    id: 2,
    title: "Time Zone Converter",
    year: "2023",
    abstract: "A web application to convert time across global time zones instantly.",
    techStack: ["HTML", "CSS", "JavaScript", "Svelte"],
    videos: [id2v_1],
    screenshots: [],
    references: [],
  },
  {
    id: 3,
    inProgress: true,
    title: "MusicFlow",
    year: "2025 (Build Paused)",
    abstract: "A JavaFX application that works as a classic music player for musics from a local library along with AI-driven mood-based playlist generation for locally stored music as well as youtube/spotify links.",
    techStack: ["Android Studio", "Java", "XML"],
    videos: [],
    screenshots: [id3_1],
    references: [],
  },
  {
    id: 4,
    title: "Tic Tac Toe",
    year: "2024",
    abstract: "A classic two-player Tic Tac Toe game built with Java and XML in Android Studio.",
    techStack: ["Android Studio", "Java", "XML"],
    videos: [],
    screenshots: [],
    references: [],
  },
  {
    id: 5,
    title: "Pokemon List",
    year: "2024",
    abstract: "An Android app that fetches Pokémon data using a public REST API and displays it in scrollable card layouts using Retrofit and Glide.",
    techStack: ["Android Studio", "Java", "XML", "Retrofit", "Glide", "REST API"],
    videos: [id5v_1_portrait],
    screenshots: [],
    references: [],
  },
  {
    id: 6,
    title: "Blog App",
    year: "2024",
    abstract: "A prototypical blog app for posting, editing, and deleting blogs using Firebase.",
    techStack: ["Android Studio", "Java", "XML", "Firebase"],
    videos: [id6v_1_portrait],
    screenshots: [],
    references: [],
  },
  {
    id: 7,
    title: "Tip Calculator",
    year: "2024",
    abstract: "Simple Android app to calculate tips and split bills.",
    techStack: ["Android Studio", "Java", "XML"],
    videos: [id7v_1_portrait],
    screenshots: [],
    references: [],
  },
  {
    id: 8,
    title: "Connect App UI",
    year: "2024",
    abstract: "A conceptual UI design for a professional networking app developed in Android Studio. Focuses on layout, theming, and interaction flow.",
    techStack: ["Android Studio", "Java", "XML"],
    videos: [id8v_1_portrait],
    screenshots: [],
    references: [],
  },
  {
    id: 9,
    title: "Ethical Hacking & Network Security",
    year: "Oct 2023",
    abstract: "A hands-on cybersecurity course project covering ethical reconnaissance, network packet analysis, and web application attacks. Performed reconnaissance on target websites to extract IP addresses and port numbers, captured and analyzed network packets across different protocols using Wireshark and Nmap, and executed SQL injection on a test website to identify vulnerabilities.",
    techStack: ["Kali Linux", "Wireshark", "Nmap", "SQLMap", "Ethical Hacking", "Network Security"],
    videos: [],
    screenshots: [],
    references: [],
  },
  
  // {
  //   id: 9,
  //   title: "Habit Tracker",
  //   abstract: "A simple Android app to track daily habits and routines.",
  //   techStack: ["Android Studio", "Java", "XML"],
  //   videos: [],
  //   screenshots: [],
  //   references: [],
  // },
];
