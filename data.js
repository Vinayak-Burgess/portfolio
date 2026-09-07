const PORTFOLIO_DATA = {

  social: {
    github: "https://github.com/Vinayak-Burgess",
    linkedin: "https://linkedin.com/in/vinayak-vinayak",
    googleDev: "https://g.dev/VINAYAKBURGESS"
  },


  // HERO SECTION
  hero: {
    firstName: "Vinayak",
    lastName: "Burgess",
    location: "Vallendar, DE",
    statusText: "System Online",
    terminalRole: "Cyber Security Student",
    description: "Specializing in Python automation, offensive security, and high-performance hardware architecture.",
    cvLink: "https://drive.google.com/file/d/1gS55m7LBmJ5jtDUqHXCK8TGWzjn8ox-e/view?usp=drive_link"
  },


  // PROFILE INTELLIGENCE 
  profileIntel: {
    codeFocus: "Offensive Security",
    codeStatus: "Lab Live / Specializing",
    codeLocation: "Vallendar, DE",
    
    missionLines: [
      "Advancing in Python automation...",
      "Setting up a dedicated Home Lab for Network Pentesting...."
    ],
    aboutTitle: "About The Operator",
    aboutText: "Disciplined Junior Python Developer with a background in IT Management and Hardware. Currently executing an intensive 100-day specialization in Cyber Security.",
    stats: [
      { number: "100", label: "DAYS_OF_CODE" },
      { number: "34", label: "PROJ_DEPLOYED" }
    ]
  },


  // TECHNICAL SKILLS
  skills: [
    {
      name: "Python Automation",
      icon: "fab fa-python",
      level: "Intermediate",
      description: "Completing Day 100 of Python Automation."
    },
    {
      name: "Web Development",
      icon: "fas fa-code",
      level: "Intermediate",
      description: "HTML, CSS, JS, React"
    },
    {
      name: "System Admin",
      icon: "fab fa-windows",
      level: "Advanced",
      description: "Windows registry tuning & remote help desk support"
    },
    {
      name: "Linux / SecOps",
      icon: "fab fa-linux",
      level: "Beginner",
      description: "Setting up a dedicated Home Lab for Network Pentesting, Mastering SQL Injection prevention techniques."
    },
    {
      name: "Powershell",
      icon: "fas fa-terminal",
      level: "Intermediate",
      description: "PowerShell Scripting"
    },
    {
      name: "System Infrastructure",
      icon: "fas fa-server",
      level: "Advanced",
      description: "Custom PC engineering and thermal management."
    }
  ],

  
  // THE TOOLBOX
  toolbox: [
    { name: "GitHub", icon: "fab fa-github" },
    { name: "VS Code", icon: "fas fa-code" },
    { name: "Git", icon: "fab fa-git" },
    { name: "Python", icon: "fab fa-python" },
    { name: "HTML5", icon: "fab fa-html5" },
    { name: "CSS3", icon: "fab fa-css3-alt" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "Discord Bots", icon: "fab fa-discord" },
    { name: "OfficeSuite", icon: "fab fa-microsoft" },
    { name: "Linux", icon: "fab fa-linux" },
    { name: "Ubuntu", icon: "fab fa-ubuntu" },
    { name: "Raspberry Pi", icon: "fab fa-raspberry-pi" },
    { name: "Windows", icon: "fab fa-windows" },
    { name: "React", icon: "fab fa-react" },
    { name: "LinkedIn", icon: "fab fa-linkedin-in" },
    { name: "Canva", icon: "fas fa-palette" },
    { name: "Encryption", icon: "fas fa-shield-alt" }
  ],

  
  // EXPERIENCE
  experience: [
    {
      title: "System Administrator",
      company: "Griffin Softwares, Freelance, Remote",
      date: "01.2026 – Present",
      current: true,
      description: "While I am continuously expanding my technical repertoire, my primary goal is the immediate application of these skills. I thrive on the challenge of taking a newly mastered concept and implementing it into a practical workspace to drive efficiency and security."
    },
    {
      title: "IT Tutor",
      company: "Rohini, Delhi, India",
      date: "05.2024 – 07.2024",
      current: false,
      description: "Teaching Basics of Computer, OS, and Web Development (HTML, CSS, JS)."
    },
    {
      title: "IT Manager",
      company: "Shiv Trading Co., Haryana, India",
      date: "07.2023 – 04.2024",
      current: false,
      description: "Conducted Data Analysis, managed digital inventory, automated taxation via Excel & Python."
    },
    {
      title: "Web Developer",
      company: "Griffin Softwares, Delhi, India",
      date: "10.2022 – 03.2023",
      current: false,
      description: "Deployed WordPress sites, implemented SEO, managed APIs, and secured user data."
    }
  ],

  
  // EDUCATION 
    education: [
    {
      title: "Independent Tech Specialization",
      institution: "Python Bootcamp (London App Brewery) & Network Security",
      date: "03.2026 – Present"
    },
    {
      title: "B.Sc. Cyber Security (Pathway)",
      institution: "IU International University, Germany",
      date: "10.2024 – 04.2026"
    },
    {
      title: "Web Development Bootcamp",
      institution: "Dr. Angela Yu – London App Brewery",
      date: "06.2020 – 10.2020"
    },
    {
      title: "Senior Secondary Schooling",
      institution: "Ryan International School, Delhi, India",
      date: "Completed"
    }
  ],

  // PROJECTS 
  projects: [
    {
      id: "magical-garden",
      title: "Magical Garden",
      description: "Python + PySide6 encrypted password manager with local .enc vault storage.",
      tags: [
        { label: "Python", icon: "fab fa-python" },
        { label: "PySide6", icon: "" },
        { label: "JSON", icon: "" },
        { label: "Encryption", icon: "" }
      ],
      repoLink: "https://github.com/Vinayak-Burgess/Magical-Garden",
      demoLink: "",

      //Case Study Page.
      year: "2026",
      role: "Solo build",
      stack: ["Python", "PySide6", "JSON" ,"Encryption"],

      problem: "I wanted a password manager I actually trusted — one where the master password was never written to disk in any form, and where I understood the entire encryption path instead of trusting a library's black box. Most 'build a password manager' tutorials either store things in plaintext or hand-wave the crypto, so I built this to get PBKDF2 key derivation and Fernet encryption right end to end, myself, in a UI that didn't feel like a tutorial project.",
      approach: [
        "Used JSON as the vault's internal data format instead of a database — it's a single-user local tool with no relational queries to speak of, and a human-readable structure made debugging the encrypt/decrypt round-trip far easier during development. The JSON only ever exists in memory or wrapped in Fernet ciphertext; it's never written to disk unencrypted.",
        "Derived the encryption key with PBKDF2-HMAC-SHA256 at 600,000 iterations instead of storing a fast hash of the password — a deliberate trade-off of a slightly slower unlock for making brute-force attacks against a stolen vault file meaningfully more expensive.",
        "Chose PySide6 over Tkinter specifically because I wanted a genuinely custom-designed interface — a real dark/light theme system with independent accent colors, animated toggles and dialogs, a responsive card grid — rather than fighting Tkinter's default widget set to fake it. Still nothing beyond `pip install` needed to run it, just a more capable toolkit underneath."
      ],
      challenges: "The hardest part wasn't the encryption itself — PBKDF2 and Fernet are well-documented — it was deciding what should happen when the key-verification file goes missing but the encrypted vault file doesn't. My first instinct was to treat that as 'first run' and just let the user set a new password, which felt convenient but was actually a quiet security hole: a new password derives a completely different key, so it could never decrypt the old vault anyway, but silently allowing a 'reset' creates the illusion that access was recovered when the old data has really just become permanently unreadable. I ended up treating that state as its own explicit case: the app refuses to auto-recover and requires a typed confirmation before anything old is erased and a new vault started. It's a small interaction detail, but it came from actually thinking through what 'no backdoor' has to mean in practice, not just in the crypto math.",
      outcome: "It handles the full loop today: set a master password once, unlock with it, store and retrieve credentials from an encrypted local vault, generate strong passwords with a live entropy/strength estimate, tag and search entries, flag reused passwords, and back up or restore via CSV export/import. Still on the list: TOTP code storage for other accounts, and a proper recovery-kit scheme so a lost master password isn't unconditionally fatal.",
      learnings: [
        "'Never store the password' is a real design constraint, not just a talking point — it means actively designing a verify-without-storing flow (a salted token you check against, never the key itself), and thinking through every 'what if this file is missing or corrupted' case up front, because retrofitting security decisions after the fact is exactly how backdoors accidentally get created.",
        "Security and usability trade-offs are inseparable in practice — choosing 600,000 PBKDF2 iterations isn't just a crypto parameter, it's a direct UX decision about how long someone waits every single time they unlock the app."
      ]
    }
  ],

  
  // 100 DAYS OF CODE - Progression Log
  hundredDaysOfCode: {
    subtitle: "A documented journey through Python mastery, one day at a time.",
    githubRepo: "https://github.com/Vinayak-Burgess/100-Days-Of-Python",

    // status: "complete", "in-progress", "pending"
    phases: [
      { range: "Projects 1-15", status: "in-progress", focus: "The Beginner Bootcamp" },
      { range: "Projects 16-31", status: "pending", focus: "Intermediate OOP" },
      { range: "Projects 32-58", status: "pending", focus: "Web & Desktop Development" },
      { range: "Projects 59-100", status: "pending", focus: "Professional & Data Science" }
    ],

    
    days: [
      {
        number: "Day 1",
        title: "Band Name Generator",
        description: "Foundational project managing string data and user input.",
        tags: ["Strings", "Input/Output"]
      },
      {
        number: "Day 2",
        title: "Tip Calculator",
        description: "Foundational project managing string data and user input.",
        tags: ["Strings", "Input/Output"]
      },
      {
        number: "Day 3",
        title: "Treasure Island",
        description: "Foundational project managing string data and user input.",
        tags: ["Strings", "Input/Output"]
      },
      {
        number: "Day 4",
        title: "Rock Paper Scissors",
        description: "Foundational project managing string data and user input.",
        tags: ["Strings", "Input/Output"]
      },
      {
        number: "Day 5",
        title: "PyPassword Generator",
        description: "High-entropy security string generator using randomization.",
        tags: ["Loops", "Random"]
      },
      {
        number: "Day 6",
        title: "Escaping The Maze",
        description: "Foundational project managing string data and user input.",
        tags: ["Strings", "Input/Output"]
      },
      {
        number: "Day 7",
        title: "Hangman - Word Game",
        description: "Foundational project managing string data and user input.",
        tags: ["Strings", "Input/Output"]
      },
      {
        number: "Day 10",
        title: "Calculator App",
        description: "Mathematical operations with function-based architecture.",
        tags: ["Functions", "Logic"]
      },
      {
        number: "Day 15",
        title: "Coffee Machine",
        description: "Resource management simulation with OOP concepts.",
        tags: ["Dictionaries", "OOP"]
      }
    ]
  },

  
  // AFFILIATIONS 
  affiliations: [
    { name: "Women Tech-makers", icon: "fas fa-users", since: "Member Since March 2025", verified: true },
    { name: "Unicorns in Tech", icon: "fas fa-rocket", since: "Member Since March 2025", verified: true },
    { name: "Google Cloud Innovator", icon: "fas fa-cloud", since: "Member Since Sept. 2023", verified: true },
    { name: "Google Developer Program", icon: "fab fa-google", since: "Member Since May 2023", verified: true }
  ],

  
  // FOOTER
  footer: {
    name: "Vinayak Burgess",
    title: "Cybersecurity Student | Python Developer | Fashion Enthusiast",
    tagline: "Bridging the gap between secure systems and aesthetic design.",
    copyrightYear: "2026"
  }
};
