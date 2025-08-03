import React from "react";

import {
  FaCode,
  FaFire,
  FaGithub,
  FaGlobe,
  FaLightbulb,
  FaNpm,
  FaRocket,
} from "react-icons/fa";

interface CommandItem {
  command: string;
  output: JSX.Element | string;
}

export const getOutput = (
  command: string,
  setCommand: React.Dispatch<React.SetStateAction<CommandItem[]>>
): JSX.Element | string => {
  switch (command.toLowerCase()) {
    case "sudo rm -rf /*":
      const closeWindow = () => {
        const newWindow = window.open("about:blank", "_blank");
        if (newWindow) {
          newWindow.close();
        }

        window.close();
        window.location.href = "about:blank";
        window.history.back();
      };

      closeWindow();
      return <></>;

    case "help":
      return (
        <div className="flex flex-col space-y-1">
          <span className="text-[#58a6ff]">Available commands:</span>
          {[
            { cmd: "🌟 about", desc: "Learn more about me" },
            { cmd: "🌐 socials", desc: "Find me on the web" },
            { cmd: "💻 skills", desc: "Check out my technical skills" },
            { cmd: "🚀 projects", desc: "View some of my cool projects" },
            { cmd: "📄 resume", desc: "Take a look at my resume" },
            { cmd: "💼 experience", desc: "Explore my professional journey" },
            { cmd: "🎯 goals", desc: "Discover my aspirations" },
            { cmd: "🧹 clear", desc: "Clear the terminal" },
            { cmd: "⚠️ sudo rm -rf /*", desc: "Try at your own risk!" },
          ].map(({ cmd, desc }) => (
            <div key={cmd} className="flex">
              <span className="text-[#f0883e] w-44">{cmd}</span>
              <span className="text-[#8b949e]">- {desc}</span>
            </div>
          ))}
        </div>
      );
    case "about":
      return (
        <div className="space-y-4">
          <h2 className="text-[#f0883e] text-xl font-bold mb-3"># About Me</h2>
          <p>
            Hey! Welcome to my digital playground.
          </p>
          <p>
            I'm <span className="text-[#f0883e]">Srikant</span>, a 21-year-old{" "}
            <span className="text-[#58a6ff] font-semibold">Full Stack Developer</span>{" "}
            who's absolutely fascinated by{" "}
            <span className="text-[#f0883e] font-semibold">AI systems</span> and{" "}
            <span className="text-[#f0883e] font-semibold">multi-agent architectures</span>. 
            Currently crafting intelligent solutions that think, learn, and actually make a difference.
          </p>
          <p>
            I'm a <span className="text-[#58a6ff] font-semibold">Web3 enthusiast</span>{" "}
            fascinated by the decentralized future.{" "}
            <span className="text-[#f0883e] font-semibold">Blockchain</span>,{" "}
            <span className="text-[#f0883e] font-semibold">smart contracts</span>,{" "}
            <span className="text-[#f0883e] font-semibold">DeFi</span> - this tech is 
            revolutionizing how we think about trust and ownership. Always exploring what's possible in this space.
          </p>
          <p>
            From <span className="text-[#58a6ff] font-semibold">AI-powered search engines</span>{" "}
            to <span className="text-[#58a6ff] font-semibold">video processing platforms</span>, 
            I love architecting systems that push technological boundaries. My stack?{" "}
            <span className="text-[#f0883e] font-semibold">React</span>,{" "}
            <span className="text-[#f0883e] font-semibold">Node.js</span>,{" "}
            <span className="text-[#f0883e] font-semibold">Python</span>,{" "}
            <span className="text-[#f0883e] font-semibold">Gemini API</span> - 
            whatever gets the job done efficiently.
          </p>
          <p>
            When I'm not deep in code or exploring blockchain protocols, I'm vibing to some epic Bollywood tracks. 
            Nothing beats good Indian music while debugging! 🎵
          </p>
          <p>
            Always learning, always building something new.
          </p>
        </div>
      );
    case "socials":
      return (
        <div className="space-y-2">
          <p>Social life? What's that? ...</p>
          <p>
            Thanks for your interest though! Here's where you can find me
            online:
          </p>
          <div className="flex flex-col space-y-1">
            <div className="flex">
              <span className="text-[#f0883e] w-24">GitHub</span>
              <a
                href="https://github.com/deltacoder2603"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#58a6ff]"
              >
                deltacoder2603
              </a>
            </div>
            <div className="flex">
              <span className="text-[#f0883e] w-24"> X </span>
              <a
                href="https://x.com/DeltaPandey2603"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#58a6ff]"
              >
                Srikant Pandey
              </a>
            </div>
            <div className="flex">
              <span className="text-[#f0883e] w-24">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/srikant-pandey-b55935209/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#58a6ff]"
              >
                Srikant Pandey
              </a>
            </div>
            <div className="flex">
              <span className="text-[#f0883e] w-24">Email</span>
              <a href="mailto:srisrikantpandey@gmail.com" className="text-[#58a6ff]">
                srisrikantpandey@gmail.com
              </a>
            </div>
          </div>
          <p>Feel free to reach out! I'm most responsive on Linkdin.</p>
        </div>
      );
    case "skills":
      return (
        <div className="space-y-4">
          <h2 className="text-[#f0883e] text-xl font-bold mb-3"># Essential Skills</h2>
          
          <div>
            <span className="text-[#58a6ff] font-semibold text-lg">Core Technologies</span>
            <p className="text-[#8b949e] mt-1">
              <span className="text-[#f0883e]">JavaScript/TypeScript</span>,{" "}
              <span className="text-[#f0883e]">Python</span>,{" "}
              <span className="text-[#f0883e]">React/Next.js</span>,{" "}
              <span className="text-[#f0883e]">Node.js</span>
            </p>
          </div>
          
          <div>
            <span className="text-[#58a6ff] font-semibold text-lg">AI & Agentic Systems</span>
            <p className="text-[#8b949e] mt-1">
              <span className="text-[#f0883e]">Gemini API</span>,{" "}
              <span className="text-[#f0883e]">Multi-Agent Architecture</span>,{" "}
              <span className="text-[#f0883e]">Prompt Engineering</span>,{" "}
              <span className="text-[#f0883e]">Agentic Frameworks</span>
            </p>
          </div>
          
          <div>
            <span className="text-[#58a6ff] font-semibold text-lg">Key Tools</span>
            <p className="text-[#8b949e] mt-1">
              <span className="text-[#f0883e]">Web Scraping</span>,{" "}
              <span className="text-[#f0883e]">RESTful APIs</span>,{" "}
              <span className="text-[#f0883e]">Git/GitHub</span>,{" "}
              <span className="text-[#f0883e]">FFmpeg</span> (Video/Audio Processing)
            </p>
          </div>
          
          <div>
            <span className="text-[#58a6ff] font-semibold text-lg">Specialized Skills</span>
            <p className="text-[#8b949e] mt-1">
              <span className="text-[#f0883e]">Real-time Data Processing</span>,{" "}
              <span className="text-[#f0883e]">System Architecture</span>,{" "}
              <span className="text-[#f0883e]">Full-Stack Development</span>
            </p>
          </div>
          
          <div className="mt-4 p-3 bg-[#0d1117] border border-[#30363d] rounded-md">
            <p className="text-[#8b949e] text-sm italic">
              These core skills power all my impressive AI projects - from search engines to video processing platforms!
            </p>
          </div>
        </div>
      );
    case "projects":
      return (
        <div className="space-y-4 mt-4">
          {[
            {
              name: "🔍 Derplexity — AI-Powered Search Summarizer",
              desc: "Tech Stack: Google Search, Web Scraping, Gemini API. Enhances search experiences by sending queries to Google and retrieving top result URLs, scraping content from these links, and summarizing results into concise answers using Gemini.",
              link: "#",
              github: undefined,
              npm: undefined,
              crate: undefined,
            },
            {
               name: "Zenith",
               description:"Instant deployment platform for web apps from GitHub. Features include automated build detection, framework-agnostic support, live deployment using ngrok, and a modular Go-based microservices architecture. Built to streamline developer workflows and reduce deployment friction to zero.",
               icon: <FaGlobe className="text-pink-600" />,
               link: "https://github.com/deltacoder2603/zenith", // replace with your actual GitHub URL if different
            },

            {
              name: "🧠 GitMaster — GitHub Repository Assistant",
              desc: "Tech Stack: Gemini API, GitHub API, NLP. Simplifies codebase comprehension by analyzing full repos using Gemini and answering natural language questions about the codebase.",
              link: "derplexity.vercel.app",
              github: "https://github.com/deltacoder2603/derplexity",
              npm: undefined,
              crate: undefined,
            },
            {
              name: "🌿 AyurvedaAI — Ayurvedic Remedy Assistant",
              desc: "Tech Stack: Gemini API, Prompt Engineering. A health-focused chatbot that understands diseases/symptoms from queries, suggests Ayurvedic remedies, and augments results with web data.",
              link: "ayurveda-aidel.vercel.app",
              github: "https://github.com/deltacoder2603/AyurvedaAI",
              npm: undefined,
              crate: undefined,
            },
            {
              name: "📈 Stock Price Predictor",
              desc: "Tech Stack: Python, scikit-learn, Yahoo Finance API. A regression-based model that fetches real-time stock data, trains on historical trends, and predicts future prices with charts and metrics.",
              link: "https://github.com/deltacoder2603/Stock_Predection_Model",
              github: undefined,
              npm: undefined,
              crate: undefined,
            },
            {
              name: "🎓 AI Tutor — Multi-Agent Subject Assistant",
              desc: "Tech Stack: Gemini API, Python, Multi-Agent Architecture. Personalized tutoring experience with a Central Tutor Agent that delegates queries to subject-specific agents (Physics, Chemistry, Math) for tailored answers.",
              link: "ai-tutor-frontend-topaz.vercel.app",
              github: "https://github.com/deltacoder2603/AiTutor",
              npm: undefined,
              crate: undefined,
            },
            {
              name: "🎨 Canva AI — AI-Powered Design Assistant",
              desc: "Tech Stack: Gemini API, React 18, TypeScript, Node.js, Canva SDK. Smart Canva design automation that generates layouts, color palettes, and full designs via AI, with integrated DAM system and one-click design application inside Canva.",
              link: "https://github.com/deltacoder2603/canva-ai",
              github: undefined,
              npm: undefined,
              crate: undefined,
            },
            {
              name: "🎬 Video Editor — AI Video Processing Platform",
              desc: "Tech Stack: Next.js, Node.js, FFmpeg, Whisper, Tailwind, shadcn/ui. A privacy-focused, local video editor with profanity detection + audio muting (Hindi, English), segment trimming and joining, Whisper-based transcription, and clean React UI with real-time processing feedback.",
              link: "https://github.com/deltacoder2603/video-editor",
              github: undefined,
              npm: undefined,
              crate: undefined,
            },
          ].map((project, index) => (
            <div
              key={index}
              className="border border-[#30363d] rounded-md p-4 bg-[#0d1117]"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-[#f0883e] text-lg font-semibold">
                    {project.name}
                  </h3>
                  <p className="text-[#8b949e] mt-1">{project.desc}</p>
                </div>
                <div className="flex space-x-2">
                  {project.crate && (
                    <a
                      href={project.crate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center transition-colors"
                    >
                      <img
                        src="/cargo.png"
                        alt="Cargo"
                        className="w-6 h-6 object-cover"
                      />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#58a6ff] hover:text-[#58a6ff] transition-colors"
                    >
                      <FaGithub size={24} />
                    </a>
                  )}
                  {project.npm && (
                    <a
                      href={project.npm}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#cb3837] hover:text-[#cb3837] transition-colors"
                    >
                      <FaNpm size={24} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#58a6ff] hover:text-[#58a6ff] transition-colors"
                    >
                      <FaGlobe size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    case "clear":
      setCommand([]);
      return "";
    case "resume":
      window.open("/resume.pdf", "_blank");
      return "Opening resume in a new tab...";
    case "experience":
      return (
        <div className="space-y-6">
          {[
            {
              company: "Idiotic Media",
              role: "Junior AI Engineer",
              location: "Full-time",
              date: "Jun 2025 - Present · 3 mos",
              description: "Working on AI-powered solutions and machine learning projects.",
              achievements: [
                "Developing and implementing AI models for various applications",
                "Collaborating with the team on innovative AI solutions",
                "Contributing to the company's AI infrastructure and tools",
              ],
              icon: <FaCode className="text-[#f0883e] text-4xl" />,
            },
            {
              company: "E-Cell PSIT",
              role: "Technical Lead",
              location: "SRAJAN PRE-INCUBATION CELL",
              date: "Oct 2024 - Present · 11 mos",
              description: "Leading technical initiatives and mentoring team members in the pre-incubation cell.",
              achievements: [
                "Leading technical projects and development teams",
                "Mentoring junior developers and guiding technical decisions",
                "Contributing to the growth of the pre-incubation ecosystem",
                "Managing technical infrastructure and development processes",
              ],
              icon: <FaRocket className="text-[#f0883e] text-4xl" />,
            },
            {
              company: "Codekid",
              role: "Frontend Development Intern",
              location: "Part-time",
              date: "Feb 2025 - Mar 2025 · 2 mos",
              description: "Built CodeKid's entire website.",
              achievements: [
                "Developed and deployed the complete CodeKid website",
                "Implemented responsive design and modern UI/UX principles",
                "Ensured optimal performance and user experience",
                "Collaborated with the team to meet project requirements",
              ],
              icon: <FaFire className="text-[#f0883e] text-4xl" />,
            },
          ].map((job, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-r from-[#1a1b26] to-[#24283b] rounded-lg p-6 shadow-lg border border-[#30363d] overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#f0883e] to-[#ff4d4d] opacity-10 rounded-bl-full"></div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">{job.icon}</div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-[#f0883e] text-xl font-bold">
                      {job.company}
                    </h3>
                    <span className="text-[#8b949e] text-sm">{job.date}</span>
                  </div>
                  <p className="text-[#58a6ff] font-semibold mb-1">
                    {job.role}
                  </p>
                  <p className="text-[#8b949e] text-sm mb-2">{job.location}</p>
                  <p className="text-[#8b949e] mb-4">{job.description}</p>
                  <div className="space-y-2">
                    <p className="text-[#f0883e] font-semibold">
                      🔥 Key Achievements:
                    </p>
                    <ul className="list-none space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#f0883e] mr-2">▹</span>
                          <span className="text-[#8b949e]">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#f0883e] to-[#ff4d4d]"></div>
            </div>
          ))}
        </div>
      );
    case "goals":
      return (
        <div className="space-y-2">
          <p>
            The future is full of possibilities, and I'm excited to explore
            them! While I'm not entirely sure where life will take me, I have
            some guiding principles and areas of interest:
          </p>
          <ul className="list-disc list-inside text-[#8b949e]">
            <li>
              Pursue projects and roles that bring{" "}
              <span className="text-[#f0883e]">happiness</span> and fulfillment
            </li>
            <li>
              Be part of{" "}
              <span className="text-[#f0883e]">impactful initiatives</span> that
              can make a difference in the world
            </li>
            <li>
              Explore cutting-edge fields like{" "}
              <span className="text-[#f0883e]">Artificial Intelligence</span>,{" "}
              <span className="text-[#f0883e]">Blockchain</span>, and {" "}
              <span className="text-[#f0883e]">DeFi</span>
            </li>
          </ul>
          <p>
            I'm open to wherever my passion and opportunities lead me. After
            all, that's the beauty of life - it's full of surprises!
          </p>
        </div>
      );
    default:
      return (
        <div>
          <span className="text-[#f97583]">Command not found.</span>
          <br />
          Type <span className="text-[#f0883e]">help</span> to see available
          commands.
        </div>
      );
  }
};
