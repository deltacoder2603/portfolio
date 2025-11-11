import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Srikant Pandey",
  initials: "SP",
  url: "https://srikantpandey.vercel.app",
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",
  description: "AI-powered developer",
  summary: `Hey there! 👋 I'm Srikant — an AI engineer building intelligent systems that actually matter, a full-stack developer crafting experiences with React, Node.js, and Python, and a Web3 enthusiast exploring the decentralized future.

I’m obsessed with AI systems and multi-agent architectures, and I love shipping practical tools: AI search, repo assistants, video processing, and one-click deployers that help people get work done faster.

I’m the Bollywood coder whose best bugs get fixed to epic Indian tracks. Code to the beat, debug to the rhythm. 🎶`,
  avatarUrl: "/me.png",

  skills: [
    // Core
    "JavaScript", "TypeScript", "Python",
    "React", "Next.js", "Node.js",
    // AI & agentic
    "Prompt Engineering", "Multi-Agent Systems",
    // Data/infra/tools
    "REST APIs", "Web Scraping", "PostgreSQL", "Prisma",
    "FFmpeg", "Git/GitHub",
    // Extras you’ve used across projects
    "TailwindCSS", "shadcn/ui", "Stripe", "Cloudflare Workers", "Go"
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  contact: {
    email: "srisrikantpandey@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/deltacoder2603",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/srikant-pandey-b55935209/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/DeltaPandey2603",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:srisrikantpandey@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Idiotic Media",
      href: "",
      badges: [],
      location: "Full-time",
      title: "Junior AI Engineer",
      logoUrl: "./im.png",
      start: "Jun 2025",
      end: "Present",
      description:
        "Building AI-powered solutions: developing and implementing models, collaborating on productized AI features, and contributing to infra & tooling.",
    },
    {
      company: "E-Cell PSIT (SRAJAN Pre-Incubation Cell)",
      href: "",
      badges: [],
      location: "Technical Lead",
      title: "Technical Lead",
      logoUrl: "./ec.png",
      start: "Oct 2024",
      end: "Present",
      description:
        "Leading technical initiatives, mentoring, and managing engineering processes for pre-incubation projects.",
    },
    {
      company: "Codekid",
      href: "",
      badges: [],
      location: "Part-time",
      title: "Frontend Development Intern",
      logoUrl: "",
      start: "Feb 2025",
      end: "Mar 2025",
      description:
        "Built and shipped CodeKid’s website with modern, responsive UI/UX and performance best practices.",
    },
  ],

  education: [
    {
      school: "PSIT Kanpur (Pranveer Singh Institute of Technology)",
      href: "https://psit.ac.in",
      degree: "Bachelor of Technology — BTech, Computer Science and Engineering",
      logoUrl: "./psit.png",
      start: "Sep 2023",
      end: "Aug 2027",
    },
    {
      school: "St. Joseph's College, Allahabad",
      href: "https://sjcallahabad.org",
      degree: "Senior Secondary Education",
      logoUrl: "./sjc.png",
      start: "Mar 2009",
      end: "Mar 2022",
    },
  ],

  projects: [
    {
      title: "Derplexity — AI-Powered Search Summarizer",
      href: "https://derplexity.vercel.app",
      dates: "2024",
      active: true,
      description:
        "Sends queries to Google, scrapes top results, and uses Gemini to summarize into crisp answers.",
      technologies: [
        "Next.js", "TypeScript", "Gemini API", "Web Scraping"
      ],
      links: [
        { type: "Website", href: "https://derplexity.vercel.app", icon: <Icons.globe className="size-3" /> },
        { type: "Source", href: "https://github.com/deltacoder2603/derplexity", icon: <Icons.github className="size-3" /> },
      ],
      image: "/derp.png",
      video: "",
    },
    {
      title: "Zenith — One-Click Deployment",
      href: "https://github.com/deltacoder2603/zenith",
      dates: "2025",
      active: true,
      description:
        "Instantly deploy web apps from GitHub with auto build detection, framework-agnostic support, ngrok live previews, and modular Go microservices.",
      technologies: ["Go", "Next.js", "ngrok", "Microservices"],
      links: [
        { type: "Source", href: "https://github.com/deltacoder2603/zenith", icon: <Icons.github className="size-3" /> },
      ],
      image: "/zen.png",
      video: "",
    },
    {
      title: "GitMaster — GitHub Repository Assistant",
      href: "https://git-master-six.vercel.app",
      dates: "2024",
      active: true,
      description:
        "Analyze full repos with Gemini and answer natural-language questions about the codebase.",
      technologies: ["Gemini API", "GitHub API", "NLP"],
      links: [
        { type: "Website", href: "https://git-master-six.vercel.app", icon: <Icons.globe className="size-3" /> },
        { type: "Source", href: "https://github.com/deltacoder2603/Git-Master", icon: <Icons.github className="size-3" /> },
      ],
      image: "/gm.png",
      video: "",
    },
    {
      title: "AyurvedaAI — Ayurvedic Remedy Assistant",
      href: "https://ayurveda-aidel.vercel.app",
      dates: "2024",
      active: true,
      description:
        "Understands symptoms, suggests Ayurvedic remedies, and augments with web data using Gemini.",
      technologies: ["Gemini API", "Next.js"],
      links: [
        { type: "Website", href: "https://ayurveda-aidel.vercel.app", icon: <Icons.globe className="size-3" /> },
        { type: "Source", href: "https://github.com/deltacoder2603/AyurvedaAI", icon: <Icons.github className="size-3" /> },
      ],
      image: "/ayur.png",
      video: "",
    },
    {
      title: "Stock Price Predictor",
      href: "",
      dates: "2024",
      active: false,
      description:
        "Fetches market data, trains regression models, and visualizes forecasts.",
      technologies: ["Python", "scikit-learn", "Yahoo Finance"],
      links: [
        { type: "Source", href: "https://github.com/deltacoder2603/Stock_Predection_Model", icon: <Icons.github className="size-3" /> },
      ],
      image: "/sp.png",
      video: "",
    },
    {
      title: "AI Tutor — Multi-Agent Subject Assistant",
      href: "https://ai-tutor-frontend-topaz.vercel.app",
      dates: "2024",
      active: true,
      description:
        "Central tutor agent dispatches to subject-specific agents for tailored answers.",
      technologies: ["Gemini API", "Python", "Multi-Agent"],
      links: [
        { type: "Website", href: "https://ai-tutor-frontend-topaz.vercel.app", icon: <Icons.globe className="size-3" /> },
        { type: "Source", href: "https://github.com/deltacoder2603/AiTutor", icon: <Icons.github className="size-3" /> },
      ],
      image: "/at.png",
      video: "",
    },
    {
      title: "Canva AI — Design Assistant",
      href: "",
      dates: "2024",
      active: false,
      description:
        "Generates layouts, palettes, and full designs via AI with DAM and one-click apply in Canva.",
      technologies: ["Gemini API", "React", "TypeScript", "Node.js", "Canva SDK"],
      links: [
        { type: "Source", href: "https://github.com/deltacoder2603/canva-ai", icon: <Icons.github className="size-3" /> },
      ],
      image: "/can.png",
      video: "",
    },
    {
      title: "Video Editor — AI Video Processing",
      href: "",
      dates: "2024",
      active: false,
      description:
        "Local, privacy-focused editor with profanity detection/muting (Hi/En), segment trim/join, Whisper transcription, and clean UI.",
      technologies: ["Next.js", "Node.js", "FFmpeg", "Whisper", "Tailwind", "shadcn/ui"],
      links: [
        { type: "Source", href: "https://github.com/deltacoder2603/video-editor", icon: <Icons.github className="size-3" /> },
      ],
      image: "/ve.png",
      video: "",
    },
  ],
  hackathons: [] as const,
} as const;
