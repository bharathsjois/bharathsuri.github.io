import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000,
};

const illustration = {
  animated: true,
};

const greeting = {
  username: "Bharath Suri",
  title: "Hi, I'm Bharath 👋",
  subTitle: emoji(
    "Engineer | Problem Solver | Embedded Systems | C++ Craftsman | Curious Learner"
  ),
  resumeLink: "", // Add resume URL if ready
  displayGreeting: true,
};

const socialMediaLinks = {
  github: "https://github.com/bharathsjois",
  linkedin: "https://www.linkedin.com/in/bharathsjois",
  gmail: "",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true,
};

const skills = {
  data: [
    {
      title: "Embedded Systems & Automotive Software",
      skills: [
        "⚡ 17+ years in C/C++, Telematics, Embedded Linux, RTOS",
        "⚡ Built developer tools and optimized automotive stacks",
        "⚡ Exploring GenAI and algo-assisted stock trading",
      ],
      softwareSkills: [
        { skillName: "C++", fontAwesomeClassname: "logos:c-plusplus" },
        { skillName: "Linux", fontAwesomeClassname: "logos:linux-tux" },
        { skillName: "Git", fontAwesomeClassname: "logos:git-icon" },
        { skillName: "Python", fontAwesomeClassname: "logos:python" },
      ],
    },
  ],
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Linköping University, Sweden",
      logo: require("./assets/images/liuLogo.png"),
      subHeader: "Master of Science in Computer Systems",
      duration: "2009 - 2011",
      desc: "Accelerated Knapsack problems using GPUs",
      descBullets: [
        "Published work in VLSI & DATE conferences",
        "Specialized in Embedded Systems & Computer Architecture",
      ],
    },
    {
      schoolName: "B.E. in Electronics and Communication",
      logo: require("./assets/images/stanfordLogo.png"), // Replace with your undergrad logo if available
      subHeader: "VTU, India",
      duration: "2003 - 2007",
      desc: "Strong fundamentals in electronics, digital systems and microcontrollers",
    },
  ],
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Engineering Lead - Embedded Systems",
      company: "Bosch",
      companylogo: require("./assets/images/facebookLogo.png"), // Replace with Bosch logo if you have
      date: "2013 – Present",
      desc: "Leading embedded software teams in telematics and automotive safety domains. Expert in developer enablement and productivity tools.",
    },
    {
      role: "Embedded Software Engineer",
      company: "Startup (Confidential)",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "2011 – 2013",
      desc: "Worked on innovative automotive firmware stacks and rapid prototyping for Tier 1s.",
    },
  ],
};

const openSource = {
  showGithubProfile: true,
  display: true,
};

const bigProjects = {
  title: "Highlighted Projects",
  subtitle: "Some personal and open-source efforts",
  projects: [
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Breeze API Client",
      projectDesc: "Automates insights for trading using Breeze API. Features token validation, position tracking, and email alerts.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/bharathsjois/breeze-api-client",
        },
      ],
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Gmail Utility",
      projectDesc: "Simple OAuth + SMTP fallback utility for sending automated emails with Gmail credentials securely.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/bharathsjois/gmail-utility",
        },
      ],
    },
  ],
  display: true,
};

const achievementSection = {
  title: emoji("Certifications & Highlights 🏆"),
  subtitle: "Courses, contributions, and side projects worth a mention",
  achievementsCards: [
    {
      title: "DevFolio Setup",
      subtitle: "Custom GitHub Pages portfolio with CI/CD, custom DNS, and theme optimization.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "GitHub Logo",
    },
  ],
  display: true,
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "Writings about embedded systems, stock trading and productivity soon.",
  displayMediumBlogs: false,
  blogs: [],
  display: false,
};

const talkSection = {
  title: "TALKS",
  subtitle: "Maybe coming soon... 😅",
  talks: [],
  display: false,
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Maybe someday...",
  podcast: [],
  display: false,
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false,
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Let's connect — professional networking or collaboration ideas welcome.",
  email_address: "bharath.s.jois@gmail.com",
};

const twitterDetails = {
  userName: "",
  display: false,
};

const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skills,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
};
