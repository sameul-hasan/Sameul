/**
 * Sameul Hasan — Portfolio Interactive Engine
 * 100% Vanilla JavaScript • Zero External Dependencies • Clean & Audio-Free
 */

(function () {
  'use strict';

  // --- Portfolio Data Store ---
  const PORTFOLIO_DATA = {
    profile: {
      name: "Sameul Hasan",
      fullName: "Md Sameul Hasan",
      role: "4th-Year Software Engineering Student & AI Systems Developer",
      university: "Daffodil International University (DIU)",
      department: "Department of Software Engineering",
      academicStanding: "4th Year Undergraduate (Senior)",
      location: "Dhaka, Bangladesh",
      email: "sameulhasanbd@gmail.com",
      altEmail: "sameul.barishal@gmail.com",
      phone: "+880 1707-654740",
      whatsapp: "https://wa.me/8801707654740",
      github: "https://github.com/sameul-hasan",
      linkedin: "https://www.linkedin.com/in/sameulhasan/",
      stats: {
        year: "4th Year",
        projects: "10+",
        checkins: "298+"
      }
    },

    typewriterRoles: [
      "4th-Year Software Engineering student at DIU",
      "Builder of practical AI-assisted tools",
      "Full-stack web & systems developer",
      "President, DIU Robotics Club",
      "Exploring Quantized SLMs & Local AI"
    ],

    projects: [
      {
        id: "slm-canvas",
        title: "SLM Canvas — Offline Code Playground",
        tagline: "Generating React and Tailwind snippets with local small language models",
        category: "AI & SLMs",
        metrics: "Offline-First Prototype",
        badges: ["Small Language Models", "Qwen 2.5 Coder", "React", "Tailwind CSS", "Monaco Editor", "Local Inference"],
        summary: "A personal developer tool to run quantized SLMs (Qwen 2.5 Coder) locally on consumer hardware, transforming natural language prompts into editable React and Tailwind component drafts without incurring cloud API costs or latency.",
        architecture: "Prompt Input → Local Quantized Model Inference (GGUF/Ollama) → AST Syntax Validation → Monaco Editor + Live Sandboxed Preview",
        highlights: [
          "Operates completely offline with zero data leakage, ideal for low-connectivity environments.",
          "Integrated abstract syntax tree (AST) validation before rendering to catch malformed JSX early.",
          "Split-pane live sandbox leveraging Monaco Editor for immediate interactive feedback.",
          "Single-click export for clean, modular React component files ready for production projects."
        ],
        github: "https://github.com/sameul-hasan",
        demo: null
      },
      {
        id: "skinx",
        title: "SkinX — AI Dermatology Triage Platform",
        tagline: "Reducing classification bias on South Asian skin tones across 23 dermatological conditions",
        category: "HealthTech AI",
        metrics: "Hackathon Finalist Concept",
        badges: ["PyTorch", "Computer Vision", "MedSAM", "U-Net", "EfficientNet-B5", "DAAN", "FastAPI"],
        summary: "A computer-vision triage prototype created during a healthcare hackathon to address the prevalent diagnostic accuracy disparities in commercial AI models when evaluating darker South Asian skin tones (Fitzpatrick skin types IV-VI).",
        architecture: "Clinical Image Ingestion → Preprocessing & Illumination Normalization → Lesion Segmentation (MedSAM & U-Net) → Feature Classification (EfficientNet-B5) → Domain Adaptation (DAAN) → Risk Assessment & Triage Output",
        highlights: [
          "Evaluated deep learning pipelines against 23 common dermatological conditions.",
          "Integrated MedSAM segmentation masks to isolate lesions and minimize background noise.",
          "Utilized Domain-Adversarial Neural Networks (DAAN) to diminish racial and skin tone bias.",
          "Architected low-bandwidth access channels (PWA & Telegram bot) for rural diagnostic reach."
        ],
        github: "https://github.com/sameul-hasan",
        demo: null
      },
      {
        id: "shohayok",
        title: "Shohayok (সহায়ক) — Academic Document AI",
        tagline: "Bilingual Bangla-English RAG assistant grounded strictly in verified institutional documents",
        category: "Agentic & RAG",
        metrics: "RAG Student Assistant",
        badges: ["Gemini API", "Retrieval-Augmented Generation", "ElevenLabs", "Bangla NLP", "Vector Store", "Google AI Studio"],
        summary: "A bilingual university assistant built for Daffodil International University students to query course outlines, university bylaws, grading rubrics, and exam schedules with hallucination-free citations.",
        architecture: "PDF Ingestion (OCR / Chunking) → Text Embeddings → Vector Similarity Retrieval → Grounded Gemini Pro Formulation → ElevenLabs Audio Generation → Conversational Web UI",
        highlights: [
          "Strict retrieval constraint guarantees replies cite specific clauses or policy documents.",
          "Native bilingual reasoning supporting natural Bangla queries alongside English.",
          "Integrated ElevenLabs text-to-speech for accessible auditory summaries of lengthy circulars.",
          "Engineered chunking strategies optimized for complex university tabular grading sheets."
        ],
        github: "https://github.com/sameul-hasan",
        demo: null
      },
      {
        id: "icadhi-dashboard",
        title: "ICADHI 2026 Event Operations Dashboard",
        tagline: "Full-stack registration, cryptographic QR check-in, and real-time attendee logistics",
        category: "Full-Stack & Systems",
        metrics: "298 Verified Attendees",
        badges: ["Full-Stack", "JavaScript", "Firebase Auth", "Cloud Firestore", "QR Engine", "FCM Push", "Analytics"],
        summary: "Engineered and operated as Registration Chair for the International Conference on Advancements in Digital Healthcare and Informatics (ICADHI 2026), replacing paper tracking with an instant QR-scanning mobile desk.",
        architecture: "Attendee Registration → Automated QR Email Dispatch → Onsite Camera Scanner Web App → Real-Time Firestore Transaction → Operational Metrics Dashboard",
        highlights: [
          "Engineered and deployed the entire production pipeline under a strict 7-day timeline.",
          "Eliminated venue bottlenecks, handling 298 attendees with sub-second QR verification.",
          "Live logistics ledger tracking food coupons, conference kits, and certificate eligibility.",
          "Zero downtime with offline caching capability for resilient network failover."
        ],
        github: "https://github.com/sameul-hasan",
        demo: null
      },
      {
        id: "fiftheye-ai",
        title: "FifthEye AI (যাচাই) — Exam Workflow Automation",
        tagline: "Exploring paper-to-digital grading support and rubric alignment for instructors",
        category: "Agentic & RAG",
        metrics: "EdTech Research Concept",
        badges: ["Multimodal LLMs", "OCR", "FastAPI", "Rubric Scoring", "LMS APIs", "Python"],
        summary: "An EdTech workflow concept that assists faculty in digitizing physical handwritten examination scripts, parsing written student solutions, and producing rubric-aligned draft annotations for educator review.",
        architecture: "High-Res Script Scanning → Vision/OCR Transliteration → Semantic Rubric Matching → Draft Score Suggestion & Annotation → LMS Gradebook Sync",
        highlights: [
          "Constructed strictly as an instructor co-pilot that leaves final assessment authority to educators.",
          "Generates formative personalized feedback paragraphs alongside suggested marks.",
          "Designed to understand mixed Bengali-English scripts common in South Asian academia."
        ],
        github: "https://github.com/sameul-hasan",
        demo: null
      },
      {
        id: "wfk-platform",
        title: "WFK Platform — Multi-Agent Coordination Core",
        tagline: "Decentralized task routing and autonomous agent coordination framework",
        category: "AI & SLMs",
        metrics: "Autonomous Multi-Agent",
        badges: ["Multi-Agent Architecture", "LangChain", "Groq API", "n8n Automation", "Python", "REST APIs"],
        summary: "A modular platform exploring collaborative multi-agent architecture where autonomous agents divide multifaceted research inquiries into targeted subtasks, execute tools sequentially, and synthesize coherent deliverables.",
        architecture: "User Goal Ingestion → Orchestrator Agent Decomposition → Parallel Sub-Agent Execution (ResearchAgent + DocumentAgent) → Output Synthesis & Verification",
        highlights: [
          "Employs dynamic agent role delegation rather than brittle linear script sequences.",
          "Includes strict tool-calling confirmation loops to prevent hallucinated tool responses.",
          "Interoperable with local small models as well as ultra-fast cloud inference engines."
        ],
        github: "https://github.com/sameul-hasan",
        demo: null
      },
      {
        id: "medicine-store-system",
        title: "Medicine Store Management System",
        tagline: "High-performance inventory control, billing ledger, and expiry tracking in C/C++",
        category: "Full-Stack & Systems",
        metrics: "Foundational Systems",
        badges: ["C / C++", "Data Structures", "Binary File I/O", "Memory Management", "Algorithms"],
        summary: "A robust console-based pharmacy management system implementing memory-efficient data structures, transactional record persistence, automated expiry alerts, and invoice generation.",
        architecture: "CLI Interface → Linked List & Binary Search Tree Cache → Structured Binary File Storage Engine → Report Generator",
        highlights: [
          "Crafted from first principles without external database libraries to master low-level pointers.",
          "Fast inventory search utilizing indexed search tree data structures.",
          "Automated threshold warnings for near-expiry batches and critical stock re-orders."
        ],
        github: "https://github.com/sameul-hasan",
        demo: null
      }
    ],

    workflows: [
      {
        id: "research-bot",
        name: "Autonomous Research & Document Agent",
        category: "LangChain & Groq",
        summary: "A multi-agent n8n workflow coordinating specialized sub-agents (ResearchAgent & DocumentAgent) with Groq-accelerated LangChain models for automated document synthesis.",
        trigger: "Webhook / Chat Trigger",
        agents: ["ResearchAgent (API/Web Fetching)", "DocumentAgent (Summarization/Transform)", "Memory Buffer Window"],
        filePath: "workflows/research-bot.json",
        icon: "cpu"
      },
      {
        id: "news-fetching-bot",
        name: "Automated Tech & AI Intelligence Bot",
        category: "Data Ingestion & Telegram",
        summary: "Scheduled workflow that polls global tech feeds, cleans RSS payloads, filters AI/engineering breakthroughs, and broadcasts concise markdown briefs to a private Telegram channel.",
        trigger: "Cron Schedule (Every Morning)",
        agents: ["RSS Extractor", "Deduplication Filter", "Groq Summarizer", "Telegram Dispatcher"],
        filePath: "workflows/news-fetching-bot.json",
        icon: "globe"
      },
      {
        id: "mailing-bot",
        name: "Smart Outreach & Notification Dispatcher",
        category: "Communication Automation",
        summary: "Event communication pipeline supporting dynamic templating, personalized attendee confirmation emails, and automated delivery verification.",
        trigger: "Event Webhook / Google Sheets Trigger",
        agents: ["JSON Formatter", "SMTP Relay Node", "Log Validator"],
        filePath: "workflows/mailing-bot.json",
        icon: "mail"
      },
      {
        id: "everyday-code-idea",
        name: "Everyday Code Idea & Challenge Generator",
        category: "Developer Upskilling",
        summary: "Daily algorithmic inspiration generator that synthesizes real-world engineering problem statements with starter test cases and distributes them to student study groups.",
        trigger: "Scheduled Cron (08:00 AM)",
        agents: ["Topic Seed Generator", "LLM Problem Crafter", "Discord / Telegram Push"],
        filePath: "workflows/everyday-code-idea.json",
        icon: "terminal"
      }
    ],

    certificates: [
      {
        id: "aws-cloud-security",
        title: "AWS Academy Graduate — Cloud Security Foundations",
        issuer: "Amazon Web Services (AWS) Academy",
        year: "2026",
        category: "Cloud & Security",
        image: "certificates/aws-cloud-security.png",
        skills: ["Cloud Security", "AWS Architecture", "IAM & Compliance", "VPC Security", "Encryption"]
      },
      {
        id: "datacamp-machine-learning",
        title: "Understanding Machine Learning",
        issuer: "DataCamp",
        year: "2026",
        category: "AI & Machine Learning",
        image: "certificates/datacamp-machine-learning.png",
        skills: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "ML Pipelines", "Overfitting Prevention"]
      },
      {
        id: "datacamp-intermediate-python",
        title: "Intermediate Python",
        issuer: "DataCamp",
        year: "2026",
        category: "Web & Programming",
        image: "certificates/datacamp-intermediate-python.png",
        skills: ["Matplotlib", "Dictionaries & Pandas", "Logic & Control Flow", "Loops & Scripting"]
      },
      {
        id: "datacamp-intro-python",
        title: "Introduction to Python",
        issuer: "DataCamp",
        year: "2026",
        category: "Web & Programming",
        image: "certificates/datacamp-intro-python.png",
        skills: ["Python Basics", "Functions & Packages", "NumPy Arrays", "Data Manipulation"]
      },
      {
        id: "datacamp-intermediate-sql",
        title: "Intermediate SQL",
        issuer: "DataCamp",
        year: "2026",
        category: "Databases & SQL",
        image: "certificates/datacamp-intermediate-sql.png",
        skills: ["Aggregate Functions", "Subqueries", "Set Operations", "Complex Queries"]
      },
      {
        id: "datacamp-joining-sql",
        title: "Joining Data in SQL",
        issuer: "DataCamp",
        year: "2026",
        category: "Databases & SQL",
        image: "certificates/datacamp-joining-sql.png",
        skills: ["INNER JOIN", "LEFT/RIGHT JOIN", "Relational Database Queries", "Set Operations"]
      },
      {
        id: "datacamp-intro-sql",
        title: "Introduction to SQL",
        issuer: "DataCamp",
        year: "2026",
        category: "Databases & SQL",
        image: "certificates/datacamp-intro-sql.png",
        skills: ["SQL Basics", "Filtering Records", "Sorting & Grouping", "Relational Concepts"]
      },
      {
        id: "datacamp-data-engineering",
        title: "Understanding Data Engineering",
        issuer: "DataCamp",
        year: "2026",
        category: "Databases & SQL",
        image: "certificates/datacamp-data-engineering.png",
        skills: ["ETL Pipelines", "Data Warehousing", "Big Data Concepts", "Schema Design"]
      },
      {
        id: "datacamp-intro-git",
        title: "Introduction to Git",
        issuer: "DataCamp",
        year: "2026",
        category: "Cloud & Security",
        image: "certificates/datacamp-intro-git.png",
        skills: ["Git Workflow", "Branching & Merging", "GitHub Remotes", "Version History"]
      },
      {
        id: "codesignal-webdev",
        title: "Web Development with HTML, CSS, and JavaScript",
        issuer: "CodeSignal",
        year: "2026",
        category: "Web & Programming",
        image: "certificates/codesignal-webdev.png",
        skills: ["Semantic HTML5", "Modern CSS3", "DOM Manipulation", "Event Handling", "Responsive Design"]
      },
      {
        id: "codesignal-php-laravel",
        title: "PHP Laravel Basics",
        issuer: "CodeSignal",
        year: "2026",
        category: "Web & Programming",
        image: "certificates/codesignal-php-laravel.png",
        skills: ["PHP OOP", "Laravel Routing & Controllers", "Blade Templates", "MVC Architecture"]
      },
      {
        id: "udemy-figma",
        title: "Figma from Start to Finish: Design Like a Pro",
        issuer: "Udemy",
        year: "2026",
        category: "UI/UX & Design",
        image: "certificates/udemy-figma.png",
        skills: ["UI/UX Design", "Wireframing & Prototyping", "Design Systems", "Component Libraries"]
      },
      {
        id: "simplilearn-completion",
        title: "Professional Skills Certificate",
        issuer: "Simplilearn",
        year: "2026",
        category: "Professional",
        image: "certificates/simplilearn-completion.png",
        skills: ["Professional Development", "Technology Fundamentals", "Technical Upskilling"]
      }
    ],

    skills: {
      ai: [
        { name: "Quantized SLMs & Local Inference", level: "Applied", desc: "Hands-on execution of Qwen 2.5 Coder and Llama 3 via Ollama/GGUF without cloud APIs." },
        { name: "Computer Vision & PyTorch", level: "Advanced", desc: "Pipeline architecture leveraging MedSAM, U-Net, and EfficientNet-B5 for classification." },
        { name: "Retrieval-Augmented Generation (RAG)", level: "Applied", desc: "Vector indexing, grounded prompt engineering with Gemini API, and OCR extraction." },
        { name: "n8n Agentic Workflows", level: "Applied", desc: "Multi-agent coordination using LangChain, Groq API, webhooks, and tool delegation." }
      ],
      fullstack: [
        { name: "Vanilla HTML5 & Modern CSS3", level: "Core", desc: "Custom design systems, CSS variables, responsive layouts, glassmorphism, accessibility." },
        { name: "JavaScript (ES6+) & DOM", level: "Core", desc: "Asynchronous programming, event delegation, web storage, audio API, custom components." },
        { name: "Node.js & Express", level: "Proficient", desc: "RESTful endpoints, middleware integration, token authentication, and data services." },
        { name: "PHP & Laravel", level: "Proficient", desc: "MVC application development, Eloquent relational mapping, Blade templating." }
      ],
      languages: [
        { name: "Python", level: "Primary", desc: "PyTorch, FastAPI, NumPy, Pandas, automation scripts, and LLM orchestration." },
        { name: "JavaScript", level: "Primary", desc: "Frontend interaction architecture, client state management, serverless logic." },
        { name: "C / C++", level: "Foundational", desc: "Pointers, dynamic memory management, low-level binary I/O, core data structures." },
        { name: "SQL", level: "Proficient", desc: "Complex JOINs, nested subqueries, aggregations, schema design, relational modeling." }
      ],
      cloud: [
        { name: "AWS Cloud Security", level: "Certified", desc: "AWS Academy certified: IAM roles, security groups, shared responsibility model." },
        { name: "Firebase Suite", level: "Applied", desc: "Firestore real-time databases, Firebase Authentication, Cloud Functions, and FCM." },
        { name: "Docker & Containerization", level: "Proficient", desc: "Containerized reproducible development environments and multi-stage builds." },
        { name: "Git & GitHub Actions", level: "Daily Use", desc: "Trunk-based workflow, feature branching, merge conflict resolution, and CI basics." }
      ]
    }
  };

  // --- Toast Notification Helper ---
  function showToast(message, icon = '✓') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span style="color:#851426;font-weight:bold;">${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 200ms ease';
      setTimeout(() => toast.remove(), 250);
    }, 2800);
  }

  // --- 1. Typewriter Animation ---
  function initTypewriter() {
    const el = document.getElementById('typewriter-text');
    if (!el) return;

    const roles = PORTFOLIO_DATA.typewriterRoles;
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function tick() {
      const currentRole = roles[roleIdx];
      if (isDeleting) {
        el.textContent = currentRole.substring(0, charIdx - 1);
        charIdx--;
      } else {
        el.textContent = currentRole.substring(0, charIdx + 1);
        charIdx++;
      }

      let speed = isDeleting ? 30 : 65;
      if (!isDeleting && charIdx === currentRole.length) {
        speed = 2200;
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        speed = 400;
      }

      setTimeout(tick, speed);
    }

    tick();
  }

  // --- 2. Live Local Clock (Dhaka Time GMT+6) ---
  function initLiveClock() {
    const clockEl = document.getElementById('live-dhaka-clock');
    if (!clockEl) return;

    function update() {
      const now = new Date();
      try {
        const timeStr = now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Dhaka',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        });
        clockEl.textContent = `${timeStr} (GMT+6)`;
      } catch (e) {
        clockEl.textContent = now.toLocaleTimeString();
      }
    }

    update();
    setInterval(update, 1000);
  }

  // --- 3. Navigation & Scroll Spy ---
  function initNavigation() {
    const navWrapper = document.getElementById('navbar-wrapper');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = ['about', 'projects', 'workflows', 'certifications', 'skills', 'contact'];

    window.addEventListener('scroll', () => {
      if (window.scrollY > 25) {
        navWrapper?.classList.add('navbar-scrolled');
      } else {
        navWrapper?.classList.remove('navbar-scrolled');
      }

      // Scroll Spy
      const scrollPos = window.scrollY + 160;
      sections.forEach(secId => {
        const sec = document.getElementById(secId);
        if (!sec) return;
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${secId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, { passive: true });

    // Mobile Menu Toggle
    if (mobileBtn && mobileNav) {
      mobileBtn.addEventListener('click', () => {
        const isOpen = mobileNav.classList.contains('open');
        if (isOpen) {
          mobileNav.classList.remove('open');
          mobileBtn.setAttribute('aria-expanded', 'false');
        } else {
          mobileNav.classList.add('open');
          mobileBtn.setAttribute('aria-expanded', 'true');
        }
      });

      mobileNav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          mobileNav.classList.remove('open');
          mobileBtn.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  // --- 4. Projects Renderer & Category Filter (Left-to-Right Auto-Sliding Showcase) ---
  let activeProjectCategory = 'All';
  let isProjectMarqueePaused = false;

  function renderProjects() {
    const track = document.getElementById('project-marquee-track') || document.getElementById('projects-grid');
    if (!track) return;

    const filtered = activeProjectCategory === 'All'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter(p => p.category === activeProjectCategory);

    const cardsHtml = filtered.map(p => {
      const tags = p.badges.slice(0, 4).map(b => `<span class="tech-tag inline-block rounded-md bg-slate-100/90 text-slate-700 border border-slate-200/80 px-2.5 py-1 text-[11px] font-mono font-medium">${b}</span>`).join('');
      return `
        <article class="project-slide-card project-card glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group" data-project-id="${p.id}">
          <div>
            <div class="project-card-header flex items-start justify-between gap-3 mb-4">
              <span class="project-category-tag inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-rose-50 text-rose-800 border border-rose-200">${p.category}</span>
              <span class="project-metric-badge font-mono text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200/60">${p.metrics}</span>
            </div>
            <h3 class="project-title font-display text-xl font-bold text-slate-900 group-hover:text-rose-900 transition-colors leading-snug">${p.title}</h3>
            <p class="project-tagline font-mono text-xs font-semibold text-rose-800 mt-1 mb-3">${p.tagline}</p>
            <p class="project-summary text-sm text-slate-600 leading-relaxed mb-4 flex-grow">${p.summary}</p>
            <div class="project-tags flex flex-wrap gap-1.5 mb-5">${tags}</div>
          </div>
          <div class="project-card-footer flex items-center justify-between gap-3 pt-4 border-t border-slate-100">
            <button class="btn-project-details inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-rose-800 transition-all" onclick="window.portfolioApp.openProjectModal('${p.id}')">
              <span>Deep Dive Architecture</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <div class="project-icon-links flex items-center gap-2">
              <a href="${p.github}" target="_blank" rel="noreferrer" class="icon-btn inline-flex items-center justify-center w-8 h-8 rounded-lg border border-slate-200 bg-white text-slate-700 hover:text-rose-900 hover:border-rose-300 hover:bg-rose-50 transition-all" aria-label="GitHub Repository" title="GitHub Profile / Repo">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Duplicate cards for seamless continuous left-to-right infinite loop
    track.innerHTML = cardsHtml + cardsHtml;
  }

  function initProjectFilters() {
    const tabs = document.querySelectorAll('#project-filters .filter-btn');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        activeProjectCategory = tab.getAttribute('data-category') || 'All';
        renderProjects();
      });
    });

    initProjectMarqueeControls();
  }

  function initProjectMarqueeControls() {
    const toggleBtn = document.getElementById('project-marquee-toggle');
    const toggleText = document.getElementById('project-toggle-text');
    const toggleIcon = document.getElementById('project-toggle-icon');
    const track = document.getElementById('project-marquee-track');
    const prevBtn = document.getElementById('project-marquee-prev');
    const nextBtn = document.getElementById('project-marquee-next');
    const container = document.getElementById('project-marquee-container');

    if (toggleBtn && track) {
      toggleBtn.addEventListener('click', () => {
        isProjectMarqueePaused = !isProjectMarqueePaused;
        if (isProjectMarqueePaused) {
          track.style.animationPlayState = 'paused';
          if (toggleText) toggleText.textContent = 'Play';
          if (toggleIcon) toggleIcon.innerHTML = `<polygon points="5 3 19 12 5 21 5 3"/>`;
        } else {
          track.style.animationPlayState = 'running';
          if (toggleText) toggleText.textContent = 'Pause';
          if (toggleIcon) toggleIcon.innerHTML = `<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>`;
        }
      });
    }

    if (prevBtn && container) {
      prevBtn.addEventListener('click', () => {
        container.scrollBy({ left: -390, behavior: 'smooth' });
      });
    }

    if (nextBtn && container) {
      nextBtn.addEventListener('click', () => {
        container.scrollBy({ left: 390, behavior: 'smooth' });
      });
    }
  }

  // --- 5. Project Details Modal ---
  function openProjectModal(id) {
    const p = PORTFOLIO_DATA.projects.find(item => item.id === id);
    if (!p) return;

    const modal = document.getElementById('project-modal');
    const content = document.getElementById('project-modal-content');
    if (!modal || !content) return;

    const badges = p.badges.map(b => `<span class="tech-tag" style="background:#fdf2f4;color:#701221;border-color:#f9d2d9;font-size:0.78rem;">${b}</span>`).join('');
    const highlights = p.highlights.map(h => `<li style="margin-bottom:8px;line-height:1.6;color:#334155;"><strong style="color:#851426;">•</strong> ${h}</li>`).join('');

    content.innerHTML = `
      <div style="display:flex;flex-direction:column;gap:20px;">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;">
          <span class="project-category-tag">${p.category}</span>
          <span class="project-metric-badge">${p.metrics}</span>
        </div>

        <div>
          <h2 style="font-family:var(--font-display);font-size:1.65rem;font-weight:800;color:#0f172a;line-height:1.2;">${p.title}</h2>
          <p style="font-family:var(--font-mono);font-size:0.85rem;color:#701221;margin-top:4px;">${p.tagline}</p>
        </div>

        <div>
          <h4 style="font-size:0.76rem;text-transform:uppercase;letter-spacing:0.06em;color:#64748b;font-weight:700;margin-bottom:6px;">Executive Overview</h4>
          <p style="font-size:0.96rem;color:#334155;line-height:1.7;">${p.summary}</p>
        </div>

        <div style="background:#fdf2f4;border:1px solid #f9d2d9;border-radius:12px;padding:16px;">
          <h4 style="font-size:0.76rem;text-transform:uppercase;letter-spacing:0.06em;color:#851426;font-weight:700;margin-bottom:6px;display:flex;align-items:center;gap:6px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            System Architecture Flow
          </h4>
          <p style="font-family:var(--font-mono);font-size:0.82rem;color:#0f172a;background:#ffffff;padding:12px;border-radius:8px;border:1px solid #f9d2d9;line-height:1.6;">
            ${p.architecture}
          </p>
        </div>

        <div>
          <h4 style="font-size:0.76rem;text-transform:uppercase;letter-spacing:0.06em;color:#64748b;font-weight:700;margin-bottom:8px;">Key Engineering Takeaways</h4>
          <ul style="list-style:none;padding-left:0;font-size:0.9rem;">
            ${highlights}
          </ul>
        </div>

        <div>
          <h4 style="font-size:0.76rem;text-transform:uppercase;letter-spacing:0.06em;color:#64748b;font-weight:700;margin-bottom:8px;">Technologies & Libraries</h4>
          <div style="display:flex;flex-wrap:wrap;gap:6px;">${badges}</div>
        </div>

        <div style="display:flex;align-items:center;justify-content:space-between;padding-top:16px;border-top:1px solid #e2e8f0;margin-top:6px;">
          <a href="${p.github}" target="_blank" rel="noreferrer" class="btn-primary" style="font-size:0.86rem;padding:10px 18px;">
            <span>Explore on GitHub</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
          </a>
          <button onclick="window.portfolioApp.closeProjectModal()" class="btn-secondary" style="font-size:0.86rem;padding:10px 16px;">Close</button>
        </div>
      </div>
    `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // --- 6. AI Workflows Renderer & Modal ---
  function renderWorkflows() {
    const grid = document.getElementById('workflows-grid');
    if (!grid) return;

    grid.innerHTML = PORTFOLIO_DATA.workflows.map(w => `
      <article class="workflow-card glass-card rounded-2xl p-6 flex flex-col justify-between gap-3 group">
        <div>
          <div class="flex items-center justify-between gap-2 mb-3">
            <div class="workflow-icon-box w-10 h-10 rounded-xl bg-purple-50 text-purple-700 border border-purple-200/60 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
            </div>
            <span class="font-mono text-[11px] font-semibold text-purple-800 bg-purple-50 border border-purple-200 px-2.5 py-0.5 rounded-full">${w.category}</span>
          </div>
          <h3 class="workflow-title font-display text-lg font-bold text-slate-900 group-hover:text-purple-900 transition-colors leading-snug">${w.name}</h3>
          <p class="workflow-desc text-xs text-slate-600 leading-relaxed mt-2 mb-4">${w.summary}</p>
        </div>
        <div class="workflow-meta flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-mono text-slate-500">
          <span>Trigger: <strong class="text-slate-800">${w.trigger}</strong></span>
          <button class="btn-view-workflow inline-flex items-center gap-1 font-bold text-purple-700 hover:text-purple-900 transition-colors" onclick="window.portfolioApp.openWorkflowModal('${w.id}')">
            <span>Inspect Nodes</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </article>
    `).join('');
  }

  function openWorkflowModal(id) {
    const w = PORTFOLIO_DATA.workflows.find(item => item.id === id);
    if (!w) return;

    const modal = document.getElementById('workflow-modal');
    const content = document.getElementById('workflow-modal-content');
    if (!modal || !content) return;

    const agents = w.agents.map(a => `<li style="padding:6px 10px;background:#ffffff;border:1px solid #f9d2d9;border-radius:6px;font-family:var(--font-mono);font-size:0.8rem;color:#701221;margin-bottom:6px;">⚡ ${a}</li>`).join('');

    content.innerHTML = `
      <div style="display:flex;flex-direction:column;gap:18px;">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <span style="font-family:var(--font-mono);font-size:0.75rem;background:#fdf2f4;color:#851426;border:1px solid #f9d2d9;padding:4px 10px;border-radius:9999px;font-weight:600;">n8n Workflow • ${w.category}</span>
        </div>

        <div>
          <h2 style="font-family:var(--font-display);font-size:1.5rem;font-weight:800;color:#0f172a;">${w.name}</h2>
          <p style="font-size:0.92rem;color:#64748b;margin-top:4px;">File: <code>${w.filePath}</code></p>
        </div>

        <p style="font-size:0.95rem;color:#334155;line-height:1.6;">${w.summary}</p>

        <div style="background:#fdf2f4;border:1px solid #f9d2d9;border-radius:12px;padding:16px;">
          <h4 style="font-size:0.76rem;text-transform:uppercase;letter-spacing:0.06em;color:#851426;font-weight:700;margin-bottom:8px;">Configured Agents & Nodes</h4>
          <ul style="list-style:none;padding-left:0;">${agents}</ul>
        </div>

        <div style="display:flex;align-items:center;justify-content:space-between;padding-top:14px;border-top:1px solid #e2e8f0;">
          <span style="font-size:0.82rem;color:#64748b;">Source: Root / ${w.filePath}</span>
          <button onclick="window.portfolioApp.closeWorkflowModal()" class="btn-secondary" style="font-size:0.84rem;padding:8px 16px;">Close</button>
        </div>
      </div>
    `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeWorkflowModal() {
    const modal = document.getElementById('workflow-modal');
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // --- 7. Certifications Renderer (Left-to-Right Auto-Sliding Marquee) & Lightbox ---
  let activeCertCategory = 'All';
  let isMarqueePaused = false;

  function renderCertificates() {
    const track = document.getElementById('cert-marquee-track');
    if (!track) return;

    const filtered = activeCertCategory === 'All'
      ? PORTFOLIO_DATA.certificates
      : PORTFOLIO_DATA.certificates.filter(c => c.category === activeCertCategory);

    const cardsHtml = filtered.map(c => {
      const skillChips = c.skills.slice(0, 3).map(s => `<span class="cert-skill-chip">${s}</span>`).join('');
      return `
        <article class="cert-slide-card" onclick="window.portfolioApp.openCertLightbox('${c.id}')" title="Click to inspect credential">
          <div class="cert-thumb-box">
            <img src="${c.image}" alt="${c.title}" class="cert-thumb-img" loading="lazy" />
            <div class="cert-thumb-overlay">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 text-white text-xs font-semibold backdrop-blur-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                <span>Inspect</span>
              </span>
            </div>
          </div>
          <div class="p-4 flex flex-col justify-between flex-grow">
            <div>
              <div class="flex items-center justify-between gap-2 mb-1.5">
                <span class="font-mono text-[11px] font-bold text-rose-800 uppercase tracking-wider">${c.issuer}</span>
                <span class="font-mono text-[11px] text-slate-400 font-semibold">${c.year}</span>
              </div>
              <h3 class="font-display text-sm font-bold text-slate-900 leading-snug line-clamp-2">${c.title}</h3>
            </div>
            <div class="flex flex-wrap gap-1 mt-3 pt-2 border-t border-slate-100">${skillChips}</div>
          </div>
        </article>
      `;
    }).join('');

    // Duplicate cards for seamless continuous infinite marquee
    track.innerHTML = cardsHtml + cardsHtml;
  }

  function initCertFilters() {
    const tabs = document.querySelectorAll('#cert-filters .filter-btn');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        activeCertCategory = tab.getAttribute('data-category') || 'All';
        renderCertificates();
      });
    });

    initMarqueeControls();
  }

  function initMarqueeControls() {
    const toggleBtn = document.getElementById('cert-marquee-toggle');
    const toggleText = document.getElementById('cert-toggle-text');
    const toggleIcon = document.getElementById('cert-toggle-icon');
    const track = document.getElementById('cert-marquee-track');
    const prevBtn = document.getElementById('cert-marquee-prev');
    const nextBtn = document.getElementById('cert-marquee-next');
    const container = document.getElementById('cert-marquee-container');

    if (toggleBtn && track) {
      toggleBtn.addEventListener('click', () => {
        isMarqueePaused = !isMarqueePaused;
        if (isMarqueePaused) {
          track.style.animationPlayState = 'paused';
          if (toggleText) toggleText.textContent = 'Play';
          if (toggleIcon) toggleIcon.innerHTML = `<polygon points="5 3 19 12 5 21 5 3"/>`;
        } else {
          track.style.animationPlayState = 'running';
          if (toggleText) toggleText.textContent = 'Pause';
          if (toggleIcon) toggleIcon.innerHTML = `<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>`;
        }
      });
    }

    if (prevBtn && container) {
      prevBtn.addEventListener('click', () => {
        container.scrollBy({ left: -320, behavior: 'smooth' });
      });
    }

    if (nextBtn && container) {
      nextBtn.addEventListener('click', () => {
        container.scrollBy({ left: 320, behavior: 'smooth' });
      });
    }
  }

  function openCertLightbox(id) {
    const c = PORTFOLIO_DATA.certificates.find(item => item.id === id);
    if (!c) return;

    const modal = document.getElementById('cert-modal');
    const imageEl = document.getElementById('cert-modal-image');
    const titleEl = document.getElementById('cert-modal-title');
    const issuerEl = document.getElementById('cert-modal-issuer');
    const skillsEl = document.getElementById('cert-modal-skills');
    if (!modal || !imageEl) return;

    imageEl.src = c.image;
    imageEl.alt = c.title;
    if (titleEl) titleEl.textContent = c.title;
    if (issuerEl) issuerEl.textContent = `${c.issuer} • ${c.year} • ${c.category}`;
    if (skillsEl) {
      skillsEl.innerHTML = c.skills.map(s => `<span class="tech-tag" style="background:#fdf2f4;color:#701221;border-color:#f9d2d9;font-size:0.75rem;">${s}</span>`).join('');
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCertLightbox() {
    const modal = document.getElementById('cert-modal');
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // --- 8. Skills Matrix Tabs ---
  function renderSkills(category = 'ai') {
    const container = document.getElementById('skills-cards-grid');
    if (!container) return;

    const list = PORTFOLIO_DATA.skills[category] || [];
    container.innerHTML = list.map(item => `
      <div class="skill-matrix-card">
        <div class="skill-head">
          <span class="skill-name">${item.name}</span>
          <span class="skill-level-pill">${item.level}</span>
        </div>
        <p class="skill-desc">${item.desc}</p>
      </div>
    `).join('');
  }

  function initSkillsTabs() {
    const buttons = document.querySelectorAll('.skills-cat-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-skill-cat') || 'ai';
        renderSkills(cat);
      });
    });

    renderSkills('ai');
  }

  // --- 9. Email Copy & Form Handlers ---
  function copyEmailToClipboard() {
    const email = PORTFOLIO_DATA.profile.email;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Copied ${email} to clipboard!`, '📋');
      }).catch(() => fallbackCopy(email));
    } else {
      fallbackCopy(email);
    }
  }

  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
    showToast(`Copied ${text} to clipboard!`, '📋');
  }

  function initContactForm() {
    const form = document.getElementById('contact-form');
    const msg = document.getElementById('contact-form-status');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.elements['name']?.value?.trim() || 'Visitor';
      const email = form.elements['email']?.value?.trim() || '';
      const subject = form.elements['subject']?.value?.trim() || 'Collaboration Inquiry';
      const body = form.elements['message']?.value?.trim() || '';

      if (!email || !body) {
        showToast('Please fill in your email and message', '⚠️');
        return;
      }

      // Pre-fill mailto link
      const mailtoUrl = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${encodeURIComponent(`[Portfolio] ${subject}`)}&body=${encodeURIComponent(`Hi Sameul,\n\n${body}\n\nFrom: ${name} (${email})`)}`;
      window.location.href = mailtoUrl;

      if (msg) {
        msg.className = 'form-status-msg success';
        msg.textContent = `Thank you, ${name}! Your email client has been prepared. You can also reach me directly at ${PORTFOLIO_DATA.profile.email}`;
      }

      showToast('Preparing email client...', '✉️');
      form.reset();
    });
  }

  // --- 10. Command Palette (`Ctrl+K` / Search) ---
  function initCommandPalette() {
    const modal = document.getElementById('cmd-palette-modal');
    const input = document.getElementById('cmd-search-input');
    const list = document.getElementById('cmd-results-list');
    const openBtns = document.querySelectorAll('.open-cmd-palette-btn');

    if (!modal || !input || !list) return;

    const searchableItems = [
      { title: "SLM Canvas — Offline Code Playground", type: "Project", action: () => openProjectModal('slm-canvas') },
      { title: "SkinX — AI Dermatology Triage", type: "Project", action: () => openProjectModal('skinx') },
      { title: "Shohayok (সহায়ক) — University Document AI", type: "Project", action: () => openProjectModal('shohayok') },
      { title: "ICADHI 2026 Operations Dashboard", type: "Project", action: () => openProjectModal('icadhi-dashboard') },
      { title: "FifthEye AI — Exam Workflow Concept", type: "Project", action: () => openProjectModal('fiftheye-ai') },
      { title: "AWS Cloud Security Foundations", type: "Certificate", action: () => openCertLightbox('aws-cloud-security') },
      { title: "Understanding Machine Learning", type: "Certificate", action: () => openCertLightbox('datacamp-machine-learning') },
      { title: "DataCamp Python & SQL Series", type: "Certificate", action: () => { window.location.hash = '#certifications'; closeCmdPalette(); } },
      { title: "Autonomous Research & Document Agent (n8n)", type: "Workflow", action: () => openWorkflowModal('research-bot') },
      { title: "Copy Email Address", type: "Action", action: () => { copyEmailToClipboard(); closeCmdPalette(); } },
      { title: "LinkedIn Profile", type: "Link", action: () => window.open(PORTFOLIO_DATA.profile.linkedin, '_blank') },
      { title: "GitHub Profile", type: "Link", action: () => window.open(PORTFOLIO_DATA.profile.github, '_blank') },
      { title: "WhatsApp Direct Message", type: "Link", action: () => window.open(PORTFOLIO_DATA.profile.whatsapp, '_blank') }
    ];

    function openCmdPalette() {
      modal.classList.add('open');
      input.value = '';
      renderPaletteResults(searchableItems);
      setTimeout(() => input.focus(), 50);
      document.body.style.overflow = 'hidden';
    }

    function closeCmdPalette() {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }

    function renderPaletteResults(items) {
      list.innerHTML = items.map((item, idx) => `
        <li class="cmd-result-item" data-idx="${idx}">
          <span>${item.title}</span>
          <span class="cmd-shortcut-tag">${item.type}</span>
        </li>
      `).join('');

      list.querySelectorAll('.cmd-result-item').forEach((li, idx) => {
        li.addEventListener('click', () => {
          items[idx].action();
          closeCmdPalette();
        });
      });
    }

    input.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const filtered = searchableItems.filter(i => 
        i.title.toLowerCase().includes(query) || i.type.toLowerCase().includes(query)
      );
      renderPaletteResults(filtered);
    });

    openBtns.forEach(btn => btn.addEventListener('click', openCmdPalette));

    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (modal.classList.contains('open')) {
          closeCmdPalette();
        } else {
          openCmdPalette();
        }
      } else if (e.key === 'Escape') {
        closeCmdPalette();
        closeProjectModal();
        closeWorkflowModal();
        closeCertLightbox();
      }
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeCmdPalette();
    });
  }

  // --- 11. Modal Click-Outside Listeners ---
  function initModalBackdropClicks() {
    ['project-modal', 'workflow-modal', 'cert-modal'].forEach(id => {
      const modal = document.getElementById(id);
      if (!modal) return;
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    });
  }

  // --- Initialization on DOM Ready ---
  document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initTypewriter();
    initLiveClock();
    renderProjects();
    initProjectFilters();
    renderWorkflows();
    renderCertificates();
    initCertFilters();
    initSkillsTabs();
    initContactForm();
    initCommandPalette();
    initModalBackdropClicks();

    // Copy Email button bindings
    document.querySelectorAll('.copy-email-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        copyEmailToClipboard();
      });
    });

    // Back to top button
    document.getElementById('back-to-top-btn')?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Expose global methods for modal onclick bindings
  window.portfolioApp = {
    openProjectModal,
    closeProjectModal,
    openWorkflowModal,
    closeWorkflowModal,
    openCertLightbox,
    closeCertLightbox,
    copyEmailToClipboard
  };

})();
