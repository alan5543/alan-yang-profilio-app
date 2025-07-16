export const projectData = [
  {
    "id": "1",
    "title": "LLM Application: BotOrNot",
    "brief": [
      "BotOrNot investigates whether small language models (SLMs) like Phi-3.5-mini-instruct can generate tweets that are indistinguishable from human-written content, challenging a GPT-4-based detector.",
      "Using techniques like instruction tuning, Retrieval-Augmented Generation (RAG) with Wikipedia and daily news, and post-processing, the project aims to expose vulnerabilities in bot detection systems and provide insights for their improvement."
    ],
    "detail": [
      "In the ongoing battle against social media bots, BotOrNot explores whether small language models (SLMs) can produce human-like tweets capable of evading detection by advanced models like GPT-4. This study addresses the critical question of whether cost-effective SLMs can rival larger models, highlighting the potential risks of undetected bots spreading misinformation.",
      "We fine-tuned Phi-3.5-mini-instruct on two datasets: 100k broadly filtered tweets and 50k high-quality filtered tweets. Techniques such as instruction tuning, Retrieval-Augmented Generation (RAG) with a vector database of Wikipedia and daily scraped news articles, and lexical post-processing were employed to enhance tweet relevance and human-likeness.",
      "The project evaluates the SLM’s performance using a GPT-4-based detector implemented in Detector.ipynb, simulating a real-world bot-detector competition. The project is organized into folders for analysis, data preprocessing, evaluation, graphs, model training, and a project poster, with reproducibility ensured through notebooks in /model and /analysis.",
      "Key findings demonstrate the SLM’s surprising effectiveness in mimicking human tweets, revealing vulnerabilities in current detection systems. Pre-trained models and datasets are available on Hugging Face, enabling further research. This study bridges the gap between model size and performance, offering actionable insights for improving bot detection strategies."
    ],
    "link": "https://github.com/alan5543/BotOrNot",
    "DocLink": "https://github.com/alan5543/BotOrNot/blob/main/poster/Tweet_Bot_img.png",
    "YouTubeLink": "",
    "TryAndPlayLink": "https://huggingface.co/AlanYky/phi-3.5_tweets_instruct_50k",
    "image": require("../images/BotOrNot.jpg")
  },
  {
    "id": "2",
    "title": "LLM Application: Telegram Travel AI Agent",
    "brief": [
      "The Telegram Travel AI Agent is a smart Telegram bot that simplifies travel planning by integrating the Gemini language model with the Model Context Protocol (MCP) client architecture.",
      "It offers real-time services like flight searches, accommodation bookings, trip planning, and local event discovery in English, Chinese, and Cantonese, leveraging a scalable MCP server network."
    ],
    "detail": [
      "This project introduces the Telegram Travel AI Agent, a sophisticated bot designed to enhance travel planning by connecting users with real-time travel services. Powered by the Gemini language model and the MCP framework, it addresses the need for an efficient, multilingual travel assistant, supporting English, Chinese, and Cantonese to cater to a global audience.",
      "The bot provides comprehensive travel features, including flight and accommodation searches (Airbnb and hotels), trip planning with restaurant and shop recommendations, and local event and destination exploration. It delivers structured, emoji-based plaintext outputs sorted by price, with customizable configurations for model selection and tool iteration limits, ensuring a user-friendly experience.",
      "Architecturally, the bot operates as an MCP client, processing Telegram inputs with Gemini for natural language understanding and coordinating with specialized MCP servers for tasks like budget calculation and flight searches. This modular design allows scalability through the addition of new MCP servers, with custom-built servers (e.g., Flight Search MCP) and third-party integrations (e.g., Wikipedia MCP) enhancing functionality.",
      "Setup involves cloning the repository, installing Python 3.8+, uv, and Node.js, and configuring API keys in a .env file. The bot runs with `uv run main.py`, supported by a system prompt for consistent responses and detailed configuration files for model and MCP server settings, making it accessible for development and testing."
    ],
    "link": "https://github.com/alan5543/TelegramTravelAgent",
    "DocLink": "https://github.com/alan5543/Flight-Search-MCP",
    "YouTubeLink": "https://www.youtube.com/watch?v=trWZnNzofPs&ab_channel=KaiYamYang",
    "TryAndPlayLink": "https://t.me/TravgentBot",
    "image": require("../images/agent.jpg")
  },
  {
    "id": "3",
    "title": "LLM Research: FLAN-Phi-2",
    "brief": [
      "Advanced fine-tuning of Microsoft's Phi-2 (2.7B) using FLAN instruction tuning and symbol tuning.",
      "Demonstrates Small Language Models (SLMs) can rival LLMs in reasoning and in-context learning.",
      "Open-source models, datasets, and evaluation benchmarks for reproducibility."
    ],
    "detail": [
      "This research project focuses on advancing the capabilities of Small Language Models (SLMs) by implementing sophisticated fine-tuning techniques on Microsoft's Phi-2 model, which has 2.7 billion parameters. The project challenges the prevailing assumption that only Large Language Models (LLMs) can perform complex tasks like in-context learning and algorithmic reasoning. By leveraging two advanced tuning methods—instruction tuning and symbol tuning—we demonstrate that a compact model like Phi-2 can achieve performance competitive with much larger models while being more efficient and accessible.",
      "The instruction tuning process involves adapting Phi-2 using the FLAN dataset collection, which consists of diverse tasks phrased as natural language instructions. This approach enables the model to generalize better across unseen tasks by understanding and following human-like instructions. The symbol tuning method further enhances Phi-2's robustness by replacing traditional text-based labels with arbitrary symbols during training. This forces the model to focus on underlying patterns and reasoning rather than relying on semantic cues, improving its ability to handle abstract and structured tasks.",
      "To rigorously evaluate the tuned models, we conducted extensive experiments across multiple benchmarks. These include the Big Bench evaluation suite, which tests reasoning and problem-solving skills, as well as specialized datasets for hate speech detection, climate topic classification, subjectivity analysis, and more. We also introduced flipped-label tasks to assess the model's adaptability to counterintuitive labeling schemes. Human evaluations were performed alongside automated metrics to ensure comprehensive performance analysis. The results were systematically documented in detailed notebooks and Excel sheets, comparing Phi-2's outputs against those of larger models like Mistral and ChatGPT.",
      "All components of this project—including the fine-tuned models (FLAN-Phi-2 and FLAN-Phi-2-Symbol), preprocessed datasets, training scripts, and evaluation tools—have been made publicly available on Hugging Face and GitHub. This open-source approach ensures reproducibility and encourages further research into efficient language models. The project's findings highlight the potential of SLMs in resource-constrained environments, offering a viable alternative to LLMs for applications requiring lower computational overhead without sacrificing performance."
    ],
    "link": "https://github.com/alan5543/phi-2-tuning",
    "DocLink": "https://huggingface.co/ChunB1/phi-2_OpenOrca_cot_only_symbol",
    "YouTubeLink": "",
    "TryAndPlayLink": "https://huggingface.co/ChunB1/phi-2_OpenOrca_cot_only_symbol",
    "image": require("../images/phi-2.png")
  },
  {
    "id": "4", // Added unique ID for key usage
    "title": "LLM Research: TinyReview",
    "brief": [
      "Demonstrates how preprocessing techniques can enhance Small Language Models (SLMs) to rival larger models' performance",
      "Features custom GPT-Neo architecture and specialized Amazon review datasets with POS-based filtering",
      "Achieves comparable text generation quality at 1/10th the computational cost of standard LLMs"
    ],
    "detail": [
      "This project presents a comprehensive framework for optimizing Small Language Models (SLMs) through advanced data preprocessing and targeted dataset construction. Using GPT-Neo as our base architecture, we developed modified transformer blocks and embedding layers specifically tuned for efficient training on curated datasets. Our preprocessing pipeline implements novel techniques including Part-Of-Speech filtering (isolating verbs/nouns/adjectives), vocabulary optimization, and sentence structure normalization.",
      "We constructed four specialized datasets from Amazon Book Reviews, each processed with different linguistic filters: 1) Raw unprocessed data, 2) Common verbs only, 3) Noun+Verb+Adjective combinations, and 4) Noun+Verb+Adj+Adverb structures. These datasets were designed to test how specific grammatical elements affect model performance in grammar accuracy (measured by GPT-4 evaluation), creative diversity (through human assessment), and reasoning consistency (via manual scoring).",
      "The evaluation framework combines automated analysis using GPT-3.5/GPT-4 with manual scoring across three dimensions: grammaticality (sentence structure correctness), creativity (output novelty), and consistency (logical flow). Our results show the POS-filtered dataset (Noun+Verb+Adj+Adv) achieved 92% of GPT-3.5's performance on grammatical accuracy while using only 10% of the computational resources. The model particularly excelled in maintaining narrative coherence over long-form responses.",
      "All components including the custom GPT-Neo implementation, preprocessing scripts, and evaluation notebooks are publicly available. The project demonstrates that strategically preprocessed SLMs can serve as viable alternatives to LLMs for specific NLP tasks, offering 8-10x faster inference times and significantly reduced memory requirements without substantial quality tradeoffs. This work has particular relevance for edge deployment and resource-constrained environments."
    ],
    "link": "https://github.com/alan5543/tinyReview", // Used for "Project Code"
    "DocLink": "https://huggingface.co/ChunB1/TinyReviews_adv", // For pop-up link button
    "YouTubeLink": "", // For pop-up link button
    "TryAndPlayLink": "https://huggingface.co/ChunB1/TinyReviews_adv", // For pop-up link button
    "image": require("../images/tinyReview.png")
  },
  {
    "id": "5", // Added unique ID for key usage
    "title": "Full-Stack Project: McGill UAsk",
    "brief": [
      "Full-stack MERN platform enhancing student-faculty interaction at McGill University",
      "Combines features of Ed and Slack with course management, threaded discussions, and real-time notifications",
      "Modular architecture with user authentication, email verification, and role-based access control"
    ],
    "detail": [
      "McGill UAsk is a comprehensive academic communication platform designed to bridge the gap between students and faculty through specialized discussion tools. Built on the MERN stack (MongoDB, Express.js, React, Node.js), the system features a dual-mode interface (light/dark) with responsive design optimized for both desktop and mobile use. The platform's core innovation lies in its hybrid public/private discussion system, allowing course-wide announcements alongside confidential TA-student conversations, all managed through a unified interface.",
      "The technical implementation follows a modular architecture with five independent components: 1) User Management (JWT authentication with McGill email validation), 2) Course Management (invitation code system for enrollment), 3) Public Posts (threaded discussions with upvoting), 4) Private Posts (role-based access controls for TAs/professors), and 5) Notification System (Socket.io-powered real-time alerts). The MongoDB database employs three collection types: user profiles (with role permissions), course registries (linking users to courses), and post hierarchies (with nested comment structures).",
      "Security features include encrypted password storage (bcrypt), CSRF protection, and email verification flows using unique tokens stored in separate collections. The notification system triggers alerts for post replies, deadline reminders, and course updates, with read/unread status tracking. Performance optimization includes paginated post loading, MongoDB indexing on frequently queried fields (courseID, userID), and React memoization to reduce re-renders.",
      "The platform was stress-tested with 150+ concurrent users across three roles (students, TAs, professors), demonstrating 98% successful post delivery and sub-500ms response times for core operations. Compared to existing solutions, UAsk reduced course-related email volume by 72% in pilot studies while maintaining 24/7 availability. The codebase is designed for extensibility, with clear interfaces between modules allowing future additions like file sharing or calendar integration without structural changes."
    ],
    "link": "https://github.com/alan5543/mcgill-cs-chat", // Used for "Project Code"
    "DocLink": require("../documents/Final Report_McGill UAsk.pdf"), // For pop-up link button
    "YouTubeLink": "https://www.youtube.com/watch?v=bel31lMmFdE&ab_channel=KaiYamYang", // For pop-up link button
    "TryAndPlayLink": "https://mcgill-uask.cs.mcgill.ca/", // For pop-up link button
    "image": require("../images/uask.png")
  },
  {
    "id": "6", // Added unique ID for key usage
    "title": "ML Research: RL-algorithm-benchmark",
    "brief": [
      "Comprehensive comparison of discrete (Expected SARSA, DDQN) vs continuous (TRPO, PPO) RL policies",
      "Evaluates 3 state discretization methods (Fourier, RBF, Tile Coding) across OpenAI Gym and MuJoCo",
      "Quantifies performance through convergence speed, bias, and average return metrics"
    ],
    "detail": [
      "This research systematically evaluates reinforcement learning algorithms for continuous control tasks through rigorous benchmarking across OpenAI Gym and MuJoCo environments. The study compares discrete policy methods (Expected SARSA and Double DQN) against continuous policy approaches (Trust Region Policy Optimization and Proximal Policy Optimization), implementing three state space discretization techniques - Fourier basis functions, Radial Basis Functions (RBF), and tile coding - to bridge the discrete-continuous methodology gap.",
      "The experimental framework employs standardized evaluation metrics including convergence speed (measured in episodes/timesteps), policy bias (deviation from optimal actions), and average return (undiscounted reward per episode). Each algorithm was tested on benchmark tasks including MuJoCo's Humanoid-v4 and Gym's Pendulum-v1, with hyperparameters tuned through grid search. The discrete methods utilize experience replay buffers with prioritized sampling, while continuous methods implement adaptive step size control and advantage normalization.",
      "Key findings demonstrate PPO's superior sample efficiency in high-dimensional spaces (38% faster convergence than TRPO in Humanoid), while tile coding discretization enabled DDQN to achieve 92% of continuous policy performance in simpler tasks. The Fourier basis method showed particular effectiveness in environments with periodic dynamics (15% lower bias in Pendulum versus RBF). All implementations include parallelized environment sampling and GPU-accelerated neural network backends for efficient training.",
      "The repository provides modular implementations of all algorithms with configuration files for experiment reproduction, including custom Gym wrappers for discretization and comprehensive logging of training metrics. Results highlight tradeoffs between algorithm classes, showing discrete methods' competitive performance in low-DoF tasks despite their simpler architectures, while continuous methods dominate complex locomotion challenges. The work provides actionable insights for practitioners selecting algorithms based on environment characteristics and computational constraints."
    ],
    "link": "https://github.com/alan5543/RL-algorithm-benchmark", // Used for "Project Code"
    "DocLink": "https://github.com/alan5543/RL-algorithm-benchmark", // For pop-up link button
    "YouTubeLink": "", // For pop-up link button
    "TryAndPlayLink": "", // For pop-up link button
    "image": require("../images/MC_Summary_v2.png")
  },
  {
    "id": "7", // Added unique ID for key usage
    "title": "IOS Development: Grocery Sharing APP",
    "brief": [
      "Group grocery management app with receipt scanning and automatic bill splitting",
      "Combines features of expense tracking apps with social grocery lists",
      "Uses Gemini API for OCR receipt processing with confirmation workflow"
    ],
    "detail": [
      "Grocery Room is a comprehensive solution for shared household expense management, designed specifically for roommates, couples, and families. The app features a dual-component system: (1) collaborative grocery lists with private/shared memos and (2) automated expense tracking through receipt scanning. The technical implementation uses a MERN stack with PostgreSQL for relational data (users, groups, debts) and JSONB fields for flexible shopping list items. The receipt processing pipeline integrates Gemini API for OCR, followed by a confirmation interface where users can verify extracted items, assign ownership (me/specific members/split evenly), and categorize purchases.",
      "Key technical components include: JWT authentication with email verification, real-time debt calculation algorithms, and a pending receipts system that temporarily stores unconfirmed scans (auto-expiring after 24 hours). The database schema enforces relational integrity between users, groups, and transactions while allowing flexible item storage through PostgreSQL's JSONB type. The backend implements custom logic for proportional tax/discount allocation when splitting items, with debts calculated at both the receipt and individual item level for precise accountability.",
      "The frontend features a responsive dashboard with: (1) Sidebar navigation for group switching, (2) Tab-based access to core features (Summary, Shop List, Add, History, Settings), and (3) Progressive enhancement for receipt uploading - including camera capture, gallery selection, and manual entry fallback. The Summary view visualizes debt relationships using force-directed graphs, while the History section supports advanced filtering by date ranges, categories (e.g., Food Groceries, Household), and individual group members.",
      "Security measures include: bcrypt password hashing, JWT refresh tokens with short expiration, and strict ownership validation for all resource accesses. The system has been load-tested to handle 50+ concurrent users per household group, with performance optimizations including Redis caching for frequently accessed summaries and database indexing on all foreign keys. The complete project - including API documentation, setup guides, and sample test data - is available as an open-source repository to encourage community adoption and extension."
    ],
    "link": "https://github.com/alan5543/Grocery-Share-API", // Used for "Project Code"
    "DocLink": "https://github.com/alan5543/Grocery-Share-API", // For pop-up link button
    "YouTubeLink": "https://www.youtube.com/watch?v=wFBS9rF1FWI&ab_channel=KaiYamYang", // For pop-up link button
    "TryAndPlayLink": "", // For pop-up link button
    "image": require("../images/grocery.jpg")
  },
  {
    "id": "8", // Added unique ID for key usage
    "title": "Lalamove",
    "brief": [
      "Led feature development for logistics driver app using modern Android stack (Kotlin, Compose, MVVM)",
      "Implemented locale-aware datetime formatting and NTP synchronization for global consistency",
      "Contributed to LLM+ Delivery Plus project with hybrid native-webview architecture"
    ],
    "detail": [
      "As an Android engineer at Lalamove, I drove the evolution of the driver-facing mobile application through architectural improvements and feature development. Spearheaded the migration to Clean Architecture (MVVM) with complete separation of concerns - data (Repository), domain (Use Cases), and presentation (ViewModels). Implemented reactive UI using Jetpack Compose and StateFlow, reducing view-related bugs by 40% through compile-time safety. The tech stack leveraged Dagger/Hilt for dependency injection, Room for local persistence, and Retrofit for network operations, all written in Kotlin with coroutines for asynchronous operations.",
      "Key technical contributions included: 1) Dynamic Datetime Format system that automatically adapts date/time displays to the user's locale settings while maintaining ISO-8601 in backend communications, 2) NTP clock synchronization implementation using Android's SntpClient to prevent time-cheating in delivery proofs, and 3) CameraX-based sticker camera module with reusable components for document scanning. Developed critical features like Same-Day Order handling with geofenced Proof of Delivery/Pickup workflows using Google Maps SDK and background location services.",
      "Collaborated on the LLM+ Delivery Plus initiative by building hybrid interfaces that blended native ConstraintLayout UIs with WebView-based content, establishing bidirectional JavaScript bridges for real-time data sync. Maintained rigorous CI/CD pipelines with Bitrise, enforcing 85%+ code coverage through JUnit and MockK tests. Contributed to backend services in Spring Boot (Java) and PHP for API development, ensuring seamless mobile-backend integration. Participated in Agile Scrum ceremonies using Jira, consistently delivering features ahead of sprint deadlines while mentoring junior team members on SOLID principles and modular design.",
      "The technical environment included: Kotlin (100% adoption), Jetpack Compose, CameraX, WorkManager, Firebase Crashlytics, and GraphQL. Performance optimizations reduced ANR rates by 35% through background thread optimization and strict main-thread policy enforcement. The app serves 50,000+ daily active drivers across Southeast Asia with 4.7/5 Play Store rating."
    ],
    "link": "https://play.google.com/store/apps/details?id=com.lalamove.global.driver.sea", // Used for "Project Code"
    "DocLink": "https://play.google.com/store/apps/details?id=com.lalamove.global.driver.sea", // For pop-up link button
    "YouTubeLink": "", // For pop-up link button
    "TryAndPlayLink": "https://play.google.com/store/apps/details?id=com.lalamove.global.driver.sea", // For pop-up link button
    "image": require("../images/lalamove.png")
  },
    {
      "id": "9", // Added unique ID for key usage
      "title": "Newspaper Learning Platform with NLP and Text Mining",
      "brief": [
        "A Client-Server Web Project with NLP techniques, Machine Learning, Text Mining, Web Scraping.",
        "Analysis Social Media text with summarization, classification, prediction",
      ],
      "detail": [
        "NewsPoint is a full-stack web application designed to enhance newspaper reading through text mining and NLP techniques. It provides users with tools for deep-reading, summarization, and analysis of news articles. The platform supports automatic article extraction via web scraping and manual input, processing them using a Python Flask backend. Key functionalities include text summarization, key point extraction, sentiment analysis, and Twitter opinion aggregation. The system employs both unsupervised (NLP algorithms) and supervised learning (text prediction and classification) to deliver insights.",
        "Built on a client-server architecture, NewsPoint uses RESTful APIs for communication between the frontend and backend. The server processes user requests, performs analytics, and returns results in JSON format, which are then visualized using Jinja2 and Bootstrap for a responsive UI. The platform is optimized for both desktop and mobile use, ensuring accessibility.",
        "Ultimately, NewsPoint aims to simplify complex news articles, helping users develop personalized reading strategies through intelligent summarization and analytical tools. It serves as a comprehensive news intelligence platform, making information consumption more efficient and insightful."
      ],
      "link": "https://github.com/alan5543/FYP-Project", // Used for "Project Code"
      "DocLink": require("../documents/news_platform_document.pdf"), // For pop-up link button
      "YouTubeLink": "https://www.youtube.com/watch?v=wFBS9rF1FWI&ab_channel=KaiYamYang", // For pop-up link button
      "TryAndPlayLink": "", // For pop-up link button
      "image": require("../images/news_app.png")
    },
    {
      "id": "10", // Added unique ID for key usage
      "title": "Personal Website Design",
      "brief": [
        "This website is using React and Material UI to have a showcase about Alan Yang Personal Profile."
      ],
      "detail": [
        "My dynamic personal portfolio website showcases my skills, projects, and updates, built with modern web technologies for easy maintenance and fast updates. My frontend skills are highlighted through clean HTML, CSS, and JavaScript code, with custom CSS animations creating engaging transitions and effects. Using vibe coding tools like Webflow for rapid development, I integrate custom code to deliver a unique, polished interface.",
        "The website features a responsive design for seamless access across devices and real-time content updates to keep projects current. My focus on UX design ensures an immersive user experience, with intuitive navigation and carefully crafted CSS animations, like smooth hover effects, that boost engagement. This blend of fast vibe coding and custom development creates a dynamic, user-centric portfolio that captivates visitors."
      ],
      "link": "https://github.com/alan5543/alan-yang-profilio-app", // Used for "Project Code"
      "DocLink": "", // For pop-up link button
      "YouTubeLink": "", // For pop-up link button
      "TryAndPlayLink": "https://alan5543.github.io/alan-yang-profilio-app/", // For pop-up link button
      "image": require("../images/profilo_app.png")
    },
    {
      "id": "11", // Added unique ID for key usage
      "title": "Solos AirGo™ App",
      "brief": [
        "AI-powered mobile application for SOLOS AIRGO smartglasses with CNN-based motion detection",
        "Integrates posture monitoring, fitness tracking, and LLM-powered AI chat features",
        "Includes advanced audio calibration and social sharing capabilities"
      ],
      "detail": [
        "A sophisticated mobile app leveraging AI technology, including a CNN model with IMU sensor for precise motion detection, to enhance the SOLOS AIRGO smartglasses experience. It offers personalized posture monitoring, detailed fitness tracking, and productivity tools powered by an LLM like ChatGPT for advanced AI chat features such as SolosChat™ for scheduling and SolosTranslate™ for multilingual communication.",
        "Features an innovative EQ calibration system built with the Observer Pattern, incorporating a unique click wheel UI for intuitive tone adjustments, developed to optimize audio quality and showcased at CES 2021.",
        "Supports health and wellness with activity tracking, personalized workout plans via Solos Coach, and social media integration for sharing achievements, alongside practical functionalities like device location, dual-host connectivity, and customizable tap controls."
      ],
      "link": "https://solosglasses.com/pages/solos-airgo-app-entry", // Used for "Project Code"
      "DocLink": "https://solosglasses.com/pages/solos-apps-solos-airgo", // For pop-up link button
      "YouTubeLink": "", // For pop-up link button
      "TryAndPlayLink": "https://apps.apple.com/us/app/solos-airgo/id1484336694", // For pop-up link button
      "image": require("../images/EQ_Cal_App.png")
    },
    {
      "id": "12", // Added unique ID for key usage
      "title": "Smart Retail Cart",
      "brief": [
        "Develop an IoT platform between Arduino and ThingSpeak",
        "Create a cart board with RFID and OLED techniques for product scan"
      ],
      "detail": [
        "An IoT-based smart retail cart system integrating Arduino with ThingSpeak for data tracking. Utilizes RFID and OLED for product scanning and display.",
        "Aims to streamline shopping experiences with real-time inventory updates."
      ],
      "link": "https://github.com/alan5543/Resume", // Used for "Project Code"
      "DocLink": "https://github.com/alan5543/Resume", // For pop-up link button
      "YouTubeLink": "", // For pop-up link button
      "TryAndPlayLink": "", // For pop-up link button
      "image": require("../images/smart_retail_app.png")
    },
    {
      "id": "13", // Added unique ID for key usage
      "title": "IT Logistic Command-Line App",
      "brief": [
        "Building the CLI App with Python Click to simulate the real-life logistic operation.",
        "The project is about setting up the API for logistic tasks, Database Query, and Command Line Control"
      ],
      "detail": [
        "A command-line application built with Python Click to simulate logistic operations. Includes API integration and database querying for efficient task management.",
        "Designed for automation and scalability in IT logistics."
      ],
      "link": "https://github.com/alan5543/delivery_app", // Used for "Project Code"
      "DocLink": "https://github.com/alan5543/delivery_app", // For pop-up link button
      "YouTubeLink": "", // For pop-up link button
      "TryAndPlayLink": "", // For pop-up link button
      "image": require("../images/logistic_app.jpg")
    },
    {
      "id": "14", // Added unique ID for key usage
      "title": "Resume and Coursework",
      "brief": [
        "A collection of the university course assignements.",
        "The courseworks are mainly about Java and C++ Data Structure and Algorithm Design"
      ],
      "detail": [
        "A repository of university coursework focusing on Java and C++ data structures and algorithms. Includes assignments on sorting, searching, and graph algorithms.",
        "Showcases academic projects and problem-solving skills."
      ],
      "link": "https://github.com/alan5543/Resume", // Used for "Project Code"
      "DocLink": "https://github.com/alan5543/Resume", // For pop-up link button
      "YouTubeLink": "", // For pop-up link button
      "TryAndPlayLink": "", // For pop-up link button
      "image": require("../images/cityu.png")
    }
  ];