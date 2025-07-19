export const projectData = {
  en: [
    {
      id: "1",
      title: "LLM Application: BotOrNot",
      brief: [
        "BotOrNot investigates whether small language models (SLMs) like Phi-3.5-mini-instruct can generate tweets that are indistinguishable from human-written content, challenging a GPT-4-based detector.",
        "Using techniques like instruction tuning, Retrieval-Augmented Generation (RAG) with Wikipedia and daily news, and post-processing, the project aims to expose vulnerabilities in bot detection systems and provide insights for their improvement."
      ],
      detail: [
        "In the ongoing battle against social media bots, BotOrNot explores whether small language models (SLMs) can produce human-like tweets capable of evading detection by advanced models like GPT-4. This study addresses the critical question of whether cost-effective SLMs can rival larger models, highlighting the potential risks of undetected bots spreading misinformation.",
        "We fine-tuned Phi-3.5-mini-instruct on two datasets: 100k broadly filtered tweets and 50k high-quality filtered tweets. Techniques such as instruction tuning, Retrieval-Augmented Generation (RAG) with a vector database of Wikipedia and daily scraped news articles, and lexical post-processing were employed to enhance tweet relevance and human-likeness.",
        "The project evaluates the SLM’s performance using a GPT-4-based detector implemented in Detector.ipynb, simulating a real-world bot-detector competition. The project is organized into folders for analysis, data preprocessing, evaluation, graphs, model training, and a project poster, with reproducibility ensured through notebooks in /model and /analysis.",
        "Key findings demonstrate the SLM’s surprising effectiveness in mimicking human tweets, revealing vulnerabilities in current detection systems. Pre-trained models and datasets are available on Hugging Face, enabling further research. This study bridges the gap between model size and performance, offering actionable insights for improving bot detection strategies."
      ],
      link: "https://github.com/alan5543/BotOrNot",
      DocLink: "https://github.com/alan5543/BotOrNot/blob/main/poster/Tweet_Bot_img.png",
      YouTubeLink: "",
      TryAndPlayLink: "https://huggingface.co/AlanYky/phi-3.5_tweets_instruct_50k",
      image: require("../images/BotOrNot.jpg")
    },
    {
      id: "2",
      title: "LLM Application: Telegram Travel AI Agent",
      brief: [
        "The Telegram Travel AI Agent is a smart Telegram bot that simplifies travel planning by integrating the Gemini language model with the Model Context Protocol (MCP) client architecture.",
        "It offers real-time services like flight searches, accommodation bookings, trip planning, and local event discovery in English, Chinese, and Cantonese, leveraging a scalable MCP server network."
      ],
      detail: [
        "This project introduces the Telegram Travel AI Agent, a sophisticated bot designed to enhance travel planning by connecting users with real-time travel services. Powered by the Gemini language model and the MCP framework, it addresses the need for an efficient, multilingual travel assistant, supporting English, Chinese, and Cantonese to cater to a global audience.",
        "The bot provides comprehensive travel features, including flight and accommodation searches (Airbnb and hotels), trip planning with restaurant and shop recommendations, and local event and destination exploration. It delivers structured, emoji-based plaintext outputs sorted by price, with customizable configurations for model selection and tool iteration limits, ensuring a user-friendly experience.",
        "Architecturally, the bot operates as an MCP client, processing Telegram inputs with Gemini for natural language understanding and coordinating with specialized MCP servers for tasks like budget calculation and flight searches. This modular design allows scalability through the addition of new MCP servers, with custom-built servers (e.g., Flight Search MCP) and third-party integrations (e.g., Wikipedia MCP) enhancing functionality.",
        "Setup involves cloning the repository, installing Python 3.8+, uv, and Node.js, and configuring API keys in a .env file. The bot runs with `uv run main.py`, supported by a system prompt for consistent responses and detailed configuration files for model and MCP server settings, making it accessible for development and testing."
      ],
      link: "https://github.com/alan5543/TelegramTravelAgent",
      DocLink: "https://github.com/alan5543/Flight-Search-MCP",
      YouTubeLink: "https://www.youtube.com/watch?v=trWZnNzofPs&ab_channel=KaiYamYang",
      TryAndPlayLink: "https://t.me/TravgentBot",
      image: require("../images/agent.jpg")
    },
    {
      id: "3",
      title: "LLM Research: FLAN-Phi-2",
      brief: [
        "Advanced fine-tuning of Microsoft's Phi-2 (2.7B) using FLAN instruction tuning and symbol tuning.",
        "Demonstrates Small Language Models (SLMs) can rival LLMs in reasoning and in-context learning.",
        "Open-source models, datasets, and evaluation benchmarks for reproducibility."
      ],
      detail: [
        "This research project focuses on advancing the capabilities of Small Language Models (SLMs) by implementing sophisticated fine-tuning techniques on Microsoft's Phi-2 model, which has 2.7 billion parameters. The project challenges the prevailing assumption that only Large Language Models (LLMs) can perform complex tasks like in-context learning and algorithmic reasoning. By leveraging two advanced tuning methods—instruction tuning and symbol tuning—we demonstrate that a compact model like Phi-2 can achieve performance competitive with much larger models while being more efficient and accessible.",
        "The instruction tuning process involves adapting Phi-2 using the FLAN dataset collection, which consists of diverse tasks phrased as natural language instructions. This approach enables the model to generalize better across unseen tasks by understanding and following human-like instructions. The symbol tuning method further enhances Phi-2's robustness by replacing traditional text-based labels with arbitrary symbols during training. This forces the model to focus on underlying patterns and reasoning rather than relying on semantic cues, improving its ability to handle abstract and structured tasks.",
        "To rigorously evaluate the tuned models, we conducted extensive experiments across multiple benchmarks. These include the Big Bench evaluation suite, which tests reasoning and problem-solving skills, as well as specialized datasets for hate speech detection, climate topic classification, subjectivity analysis, and more. We also introduced flipped-label tasks to assess the model's adaptability to counterintuitive labeling schemes. Human evaluations were performed alongside automated metrics to ensure comprehensive performance analysis. The results were systematically documented in detailed notebooks and Excel sheets, comparing Phi-2's outputs against those of larger models like Mistral and ChatGPT.",
        "All components of this project—including the fine-tuned models (FLAN-Phi-2 and FLAN-Phi-2-Symbol), preprocessed datasets, training scripts, and evaluation tools—have been made publicly available on Hugging Face and GitHub. This open-source approach ensures reproducibility and encourages further research into efficient language models. The project's findings highlight the potential of SLMs in resource-constrained environments, offering a viable alternative to LLMs for applications requiring lower computational overhead without sacrificing performance."
      ],
      link: "https://github.com/alan5543/phi-2-tuning",
      DocLink: "https://huggingface.co/ChunB1/phi-2_OpenOrca_cot_only_symbol",
      YouTubeLink: "",
      TryAndPlayLink: "https://huggingface.co/ChunB1/phi-2_OpenOrca_cot_only_symbol",
      image: require("../images/phi-2.png")
    },
    {
      id: "4",
      title: "LLM Research: TinyReview",
      brief: [
        "Demonstrates how preprocessing techniques can enhance Small Language Models (SLMs) to rival larger models' performance",
        "Features custom GPT-Neo architecture and specialized Amazon review datasets with POS-based filtering",
        "Achieves comparable text generation quality at 1/10th the computational cost of standard LLMs"
      ],
      detail: [
        "This project presents a comprehensive framework for optimizing Small Language Models (SLMs) through advanced data preprocessing and targeted dataset construction. Using GPT-Neo as our base architecture, we developed modified transformer blocks and embedding layers specifically tuned for efficient training on curated datasets. Our preprocessing pipeline implements novel techniques including Part-Of-Speech filtering (isolating verbs/nouns/adjectives), vocabulary optimization, and sentence structure normalization.",
        "We constructed four specialized datasets from Amazon Book Reviews, each processed with different linguistic filters: 1) Raw unprocessed data, 2) Common verbs only, 3) Noun+Verb+Adjective combinations, and 4) Noun+Verb+Adj+Adverb structures. These datasets were designed to test how specific grammatical elements affect model performance in grammar accuracy (measured by GPT-4 evaluation), creative diversity (through human assessment), and reasoning consistency (via manual scoring).",
        "The evaluation framework combines automated analysis using GPT-3.5/GPT-4 with manual scoring across three dimensions: grammaticality (sentence structure correctness), creativity (output novelty), and consistency (logical flow). Our results show the POS-filtered dataset (Noun+Verb+Adj+Adv) achieved 92% of GPT-3.5's performance on grammatical accuracy while using only 10% of the computational resources. The model particularly excelled in maintaining narrative coherence over long-form responses.",
        "All components including the custom GPT-Neo implementation, preprocessing scripts, and evaluation notebooks are publicly available. The project demonstrates that strategically preprocessed SLMs can serve as viable alternatives to LLMs for specific NLP tasks, offering 8-10x faster inference times and significantly reduced memory requirements without substantial quality tradeoffs. This work has particular relevance for edge deployment and resource-constrained environments."
      ],
      link: "https://github.com/alan5543/tinyReview",
      DocLink: "https://huggingface.co/ChunB1/TinyReviews_adv",
      YouTubeLink: "",
      TryAndPlayLink: "https://huggingface.co/ChunB1/TinyReviews_adv",
      image: require("../images/tinyReview.png")
    },
    {
      id: "5",
      title: "Full-Stack Project: McGill UAsk",
      brief: [
        "Full-stack MERN platform enhancing student-faculty interaction at McGill University",
        "Combines features of Ed and Slack with course management, threaded discussions, and real-time notifications",
        "Modular architecture with user authentication, email verification, and role-based access control"
      ],
      detail: [
        "McGill UAsk is a comprehensive academic communication platform designed to bridge the gap between students and faculty through specialized discussion tools. Built on the MERN stack (MongoDB, Express.js, React, Node.js), the system features a dual-mode interface (light/dark) with responsive design optimized for both desktop and mobile use. The platform's core innovation lies in its hybrid public/private discussion system, allowing course-wide announcements alongside confidential TA-student conversations, all managed through a unified interface.",
        "The technical implementation follows a modular architecture with five independent components: 1) User Management (JWT authentication with McGill email validation), 2) Course Management (invitation code system for enrollment), 3) Public Posts (threaded discussions with upvoting), 4) Private Posts (role-based access controls for TAs/professors), and 5) Notification System (Socket.io-powered real-time alerts). The MongoDB database employs three collection types: user profiles (with role permissions), course registries (linking users to courses), and post hierarchies (with nested comment structures).",
        "Security features include encrypted password storage (bcrypt), CSRF protection, and email verification flows using unique tokens stored in separate collections. The notification system triggers alerts for post replies, deadline reminders, and course updates, with read/unread status tracking. Performance optimization includes paginated post loading, MongoDB indexing on frequently queried fields (courseID, userID), and React memoization to reduce re-renders.",
        "The platform was stress-tested with 150+ concurrent users across three roles (students, TAs, professors), demonstrating 98% successful post delivery and sub-500ms response times for core operations. Compared to existing solutions, UAsk reduced course-related email volume by 72% in pilot studies while maintaining 24/7 availability. The codebase is designed for extensibility, with clear interfaces between modules allowing future additions like file sharing or calendar integration without structural changes."
      ],
      link: "https://github.com/alan5543/mcgill-cs-chat",
      DocLink: require("../documents/Final Report_McGill UAsk.pdf"),
      YouTubeLink: "https://www.youtube.com/watch?v=bel31lMmFdE&ab_channel=KaiYamYang",
      TryAndPlayLink: "https://mcgill-uask.cs.mcgill.ca/",
      image: require("../images/uask.png")
    },
    {
      id: "6",
      title: "ML Research: RL-algorithm-benchmark",
      brief: [
        "Comprehensive comparison of discrete (Expected SARSA, DDQN) vs continuous (TRPO, PPO) RL policies",
        "Evaluates 3 state discretization methods (Fourier, RBF, Tile Coding) across OpenAI Gym and MuJoCo",
        "Quantifies performance through convergence speed, bias, and average return metrics"
      ],
      detail: [
        "This research systematically evaluates reinforcement learning algorithms for continuous control tasks through rigorous benchmarking across OpenAI Gym and MuJoCo environments. The study compares discrete policy methods (Expected SARSA and Double DQN) against continuous policy approaches (Trust Region Policy Optimization and Proximal Policy Optimization), implementing three state space discretization techniques - Fourier basis functions, Radial Basis Functions (RBF), and tile coding - to bridge the discrete-continuous methodology gap.",
        "The experimental framework employs standardized evaluation metrics including convergence speed (measured in episodes/timesteps), policy bias (deviation from optimal actions), and average return (undiscounted reward per episode). Each algorithm was tested on benchmark tasks including MuJoCo's Humanoid-v4 and Gym's Pendulum-v1, with hyperparameters tuned through grid search. The discrete methods utilize experience replay buffers with prioritized sampling, while continuous methods implement adaptive step size control and advantage normalization.",
        "Key findings demonstrate PPO's superior sample efficiency in high-dimensional spaces (38% faster convergence than TRPO in Humanoid), while tile coding discretization enabled DDQN to achieve 92% of continuous policy performance in simpler tasks. The Fourier basis method showed particular effectiveness in environments with periodic dynamics (15% lower bias in Pendulum versus RBF). All implementations include parallelized environment sampling and GPU-accelerated neural network backends for efficient training.",
        "The repository provides modular implementations of all algorithms with configuration files for experiment reproduction, including custom Gym wrappers for discretization and comprehensive logging of training metrics. Results highlight tradeoffs between algorithm classes, showing discrete methods' competitive performance in low-DoF tasks despite their simpler architectures, while continuous methods dominate complex locomotion challenges. The work provides actionable insights for practitioners selecting algorithms based on environment characteristics and computational constraints."
      ],
      link: "https://github.com/alan5543/RL-algorithm-benchmark",
      DocLink: "https://github.com/alan5543/RL-algorithm-benchmark",
      YouTubeLink: "",
      TryAndPlayLink: "",
      image: require("../images/MC_Summary_v2.png")
    },
    {
      id: "7",
      title: "IOS Development: Grocery Sharing APP",
      brief: [
        "Group grocery management app with receipt scanning and automatic bill splitting",
        "Combines features of expense tracking apps with social grocery lists",
        "Uses Gemini API for OCR receipt processing with confirmation workflow"
      ],
      detail: [
        "Grocery Room is a comprehensive solution for shared household expense management, designed specifically for roommates, couples, and families. The app features a dual-component system: (1) collaborative grocery lists with private/shared memos and (2) automated expense tracking through receipt scanning. The technical implementation uses a MERN stack with PostgreSQL for relational data (users, groups, debts) and JSONB fields for flexible shopping list items. The receipt processing pipeline integrates Gemini API for OCR, followed by a confirmation interface where users can verify extracted items, assign ownership (me/specific members/split evenly), and categorize purchases.",
        "Key technical components include: JWT authentication with email verification, real-time debt calculation algorithms, and a pending receipts system that temporarily stores unconfirmed scans (auto-expiring after 24 hours). The database schema enforces relational integrity between users, groups, and transactions while allowing flexible item storage through PostgreSQL's JSONB type. The backend implements custom logic for proportional tax/discount allocation when splitting items, with debts calculated at both the receipt and individual item level for precise accountability.",
        "The frontend features a responsive dashboard with: (1) Sidebar navigation for group switching, (2) Tab-based access to core features (Summary, Shop List, Add, History, Settings), and (3) Progressive enhancement for receipt uploading - including camera capture, gallery selection, and manual entry fallback. The Summary view visualizes debt relationships using force-directed graphs, while the History section supports advanced filtering by date ranges, categories (e.g., Food Groceries, Household), and individual group members.",
        "Security measures include: bcrypt password hashing, JWT refresh tokens with short expiration, and strict ownership validation for all resource accesses. The system has been load-tested to handle 50+ concurrent users per household group, with performance optimizations including Redis caching for frequently accessed summaries and database indexing on all foreign keys. The complete project - including API documentation, setup guides, and sample test data - is available as an open-source repository to encourage community adoption and extension."
      ],
      link: "https://github.com/alan5543/Grocery-Share-API",
      DocLink: "https://github.com/alan5543/Grocery-Share-API",
      YouTubeLink: "https://www.youtube.com/watch?v=wFBS9rF1FWI&ab_channel=KaiYamYang",
      TryAndPlayLink: "",
      image: require("../images/grocery.jpg")
    },
    {
      id: "8",
      title: "Lalamove",
      brief: [
        "Led feature development for logistics driver app using modern Android stack (Kotlin, Compose, MVVM)",
        "Implemented locale-aware datetime formatting and NTP synchronization for global consistency",
        "Contributed to LLM+ Delivery Plus project with hybrid native-webview architecture"
      ],
      detail: [
        "As an Android engineer at Lalamove, I drove the evolution of the driver-facing mobile application through architectural improvements and feature development. Spearheaded the migration to Clean Architecture (MVVM) with complete separation of concerns - data (Repository), domain (Use Cases), and presentation (ViewModels). Implemented reactive UI using Jetpack Compose and StateFlow, reducing view-related bugs by 40% through compile-time safety. The tech stack leveraged Dagger/Hilt for dependency injection, Room for local persistence, and Retrofit for network operations, all written in Kotlin with coroutines for asynchronous operations.",
        "Key technical contributions included: 1) Dynamic Datetime Format system that automatically adapts date/time displays to the user's locale settings while maintaining ISO-8601 in backend communications, 2) NTP clock synchronization implementation using Android's SntpClient to prevent time-cheating in delivery proofs, and 3) CameraX-based sticker camera module with reusable components for document scanning. Developed critical features like Same-Day Order handling with geofenced Proof of Delivery/Pickup workflows using Google Maps SDK and background location services.",
        "Collaborated on the LLM+ Delivery Plus initiative by building hybrid interfaces that blended native ConstraintLayout UIs with WebView-based content, establishing bidirectional JavaScript bridges for real-time data sync. Maintained rigorous CI/CD pipelines with Bitrise, enforcing 85%+ code coverage through JUnit and MockK tests. Contributed to backend services in Spring Boot (Java) and PHP for API development, ensuring seamless mobile-backend integration. Participated in Agile Scrum ceremonies using Jira, consistently delivering features ahead of sprint deadlines while mentoring junior team members on SOLID principles and modular design.",
        "The technical environment included: Kotlin (100% adoption), Jetpack Compose, CameraX, WorkManager, Firebase Crashlytics, and GraphQL. Performance optimizations reduced ANR rates by 35% through background thread optimization and strict main-thread policy enforcement. The app serves 50,000+ daily active drivers across Southeast Asia with 4.7/5 Play Store rating."
      ],
      link: "https://play.google.com/store/apps/details?id=com.lalamove.global.driver.sea",
      DocLink: "https://play.google.com/store/apps/details?id=com.lalamove.global.driver.sea",
      YouTubeLink: "",
      TryAndPlayLink: "https://play.google.com/store/apps/details?id=com.lalamove.global.driver.sea",
      image: require("../images/lalamove.png")
    },
    {
      id: "9",
      title: "Newspaper Learning Platform with NLP and Text Mining",
      brief: [
        "A Client-Server Web Project with NLP techniques, Machine Learning, Text Mining, Web Scraping.",
        "Analysis Social Media text with summarization, classification, prediction"
      ],
      detail: [
        "NewsPoint is a full-stack web application designed to enhance newspaper reading through text mining and NLP techniques. It provides users with tools for deep-reading, summarization, and analysis of news articles. The platform supports automatic article extraction via web scraping and manual input, processing them using a Python Flask backend. Key functionalities include text summarization, key point extraction, sentiment analysis, and Twitter opinion aggregation. The system employs both unsupervised (NLP algorithms) and supervised learning (text prediction and classification) to deliver insights.",
        "Built on a client-server architecture, NewsPoint uses RESTful APIs for communication between the frontend and backend. The server processes user requests, performs analytics, and returns results in JSON format, which are then visualized using Jinja2 and Bootstrap for a responsive UI. The platform is optimized for both desktop and mobile use, ensuring accessibility.",
        "Ultimately, NewsPoint aims to simplify complex news articles, helping users develop personalized reading strategies through intelligent summarization and analytical tools. It serves as a comprehensive news intelligence platform, making information consumption more efficient and insightful."
      ],
      link: "https://github.com/alan5543/FYP-Project",
      DocLink: require("../documents/news_platform_document.pdf"),
      YouTubeLink: "https://www.youtube.com/watch?v=wFBS9rF1FWI&ab_channel=KaiYamYang",
      TryAndPlayLink: "",
      image: require("../images/news_app.png")
    },
    {
      id: "10",
      title: "Personal Website Design",
      brief: [
        "This website is using React and Material UI to have a showcase about Alan Yang Personal Profile."
      ],
      detail: [
        "My dynamic personal portfolio website showcases my skills, projects, and updates, built with modern web technologies for easy maintenance and fast updates. My frontend skills are highlighted through clean HTML, CSS, and JavaScript code, with custom CSS animations creating engaging transitions and effects. Using vibe coding tools like Webflow for rapid development, I integrate custom code to deliver a unique, polished interface.",
        "The website features a responsive design for seamless access across devices and real-time content updates to keep projects current. My focus on UX design ensures an immersive user experience, with intuitive navigation and carefully crafted CSS animations, like smooth hover effects, that boost engagement. This blend of fast vibe coding and custom development creates a dynamic, user-centric portfolio that captivates visitors."
      ],
      link: "https://github.com/alan5543/alan-yang-profilio-app",
      DocLink: "",
      YouTubeLink: "",
      TryAndPlayLink: "https://alan5543.github.io/alan-yang-profilio-app/",
      image: require("../images/profilo_app.png")
    },
    {
      id: "11",
      title: "Solos AirGo™ App",
      brief: [
        "AI-powered mobile application for SOLOS AIRGO smartglasses with CNN-based motion detection",
        "Integrates posture monitoring, fitness tracking, and LLM-powered AI chat features",
        "Includes advanced audio calibration and social sharing capabilities"
      ],
      detail: [
        "A sophisticated mobile app leveraging AI technology, including a CNN model with IMU sensor for precise motion detection, to enhance the SOLOS AIRGO smartglasses experience. It offers personalized posture monitoring, detailed fitness tracking, and productivity tools powered by an LLM like ChatGPT for advanced AI chat features such as SolosChat™ for scheduling and SolosTranslate™ for multilingual communication.",
        "Features an innovative EQ calibration system built with the Observer Pattern, incorporating a unique click wheel UI for intuitive tone adjustments, developed to optimize audio quality and showcased at CES 2021.",
        "Supports health and wellness with activity tracking, personalized workout plans via Solos Coach, and social media integration for sharing achievements, alongside practical functionalities like device location, dual-host connectivity, and customizable tap controls."
      ],
      link: "https://solosglasses.com/pages/solos-airgo-app-entry",
      DocLink: "https://solosglasses.com/pages/solos-apps-solos-airgo",
      YouTubeLink: "",
      TryAndPlayLink: "https://apps.apple.com/us/app/solos-airgo/id1484336694",
      image: require("../images/EQ_Cal_App.png")
    },
    {
      id: "12",
      title: "Smart Retail Cart",
      brief: [
        "Develop an IoT platform between Arduino and ThingSpeak",
        "Create a cart board with RFID and OLED techniques for product scan"
      ],
      detail: [
        "An IoT-based smart retail cart system integrating Arduino with ThingSpeak for data tracking. Utilizes RFID and OLED for product scanning and display.",
        "Aims to streamline shopping experiences with real-time inventory updates."
      ],
      link: "https://github.com/alan5543/Resume",
      DocLink: "https://github.com/alan5543/Resume",
      YouTubeLink: "",
      TryAndPlayLink: "",
      image: require("../images/smart_retail_app.png")
    },
    {
      id: "13",
      title: "IT Logistic Command-Line App",
      brief: [
        "Building the CLI App with Python Click to simulate the real-life logistic operation.",
        "The project is about setting up the API for logistic tasks, Database Query, and Command Line Control"
      ],
      detail: [
        "A command-line application built with Python Click to simulate logistic operations. Includes API integration and database querying for efficient task management.",
        "Designed for automation and scalability in IT logistics."
      ],
      link: "https://github.com/alan5543/delivery_app",
      DocLink: "https://github.com/alan5543/delivery_app",
      YouTubeLink: "",
      TryAndPlayLink: "",
      image: require("../images/logistic_app.jpg")
    },
    {
      id: "14",
      title: "Resume and Coursework",
      brief: [
        "A collection of the university course assignments.",
        "The courseworks are mainly about Java and C++ Data Structure and Algorithm Design"
      ],
      detail: [
        "A repository of university coursework focusing on Java and C++ data structures and algorithms. Includes assignments on sorting, searching, and graph algorithms.",
        "Showcases academic projects and problem-solving skills."
      ],
      link: "https://github.com/alan5543/Resume",
      DocLink: "https://github.com/alan5543/Resume",
      YouTubeLink: "",
      TryAndPlayLink: "",
      image: require("../images/cityu.png")
    }
  ],
  fr: [
    {
      id: "1",
      title: "Application LLM : BotOrNot",
      brief: [
        "BotOrNot examine si les petits modèles de langage (SLM) comme Phi-3.5-mini-instruct peuvent générer des tweets indiscernables du contenu écrit par des humains, défiant un détecteur basé sur GPT-4.",
        "En utilisant des techniques comme l'ajustement des instructions, la génération augmentée par récupération (RAG) avec Wikipédia et les actualités quotidiennes, et un post-traitement, le projet vise à exposer les vulnérabilités des systèmes de détection de bots et à fournir des idées pour leur amélioration."
      ],
      detail: [
        "Dans la lutte continue contre les bots sur les réseaux sociaux, BotOrNot explore si les petits modèles de langage (SLM) peuvent produire des tweets semblables à ceux des humains, capables d'échapper à la détection par des modèles avancés comme GPT-4. Cette étude aborde la question cruciale de savoir si les SLM économiques peuvent rivaliser avec les grands modèles, mettant en lumière les risques potentiels des bots non détectés propageant de la désinformation.",
        "Nous avons affiné Phi-3.5-mini-instruct sur deux ensembles de données : 100 000 tweets largement filtrés et 50 000 tweets de haute qualité. Des techniques telles que l'ajustement des instructions, la génération augmentée par récupération (RAG) avec une base de données vectorielle de Wikipédia et d'articles de presse quotidiens, et un post-traitement lexical ont été utilisées pour améliorer la pertinence et l'aspect humain des tweets.",
        "Le projet évalue les performances du SLM à l'aide d'un détecteur basé sur GPT-4 implémenté dans Detector.ipynb, simulant une compétition de détection de bots en conditions réelles. Le projet est organisé en dossiers pour l'analyse, le prétraitement des données, l'évaluation, les graphiques, l'entraînement du modèle et une affiche de projet, avec une reproductibilité assurée grâce aux carnets dans /model et /analysis.",
        "Les principales conclusions démontrent l'efficacité surprenante du SLM à imiter les tweets humains, révélant les vulnérabilités des systèmes de détection actuels. Les modèles pré-entraînés et les ensembles de données sont disponibles sur Hugging Face, permettant des recherches supplémentaires. Cette étude comble le fossé entre la taille du modèle et les performances, offrant des idées exploitables pour améliorer les stratégies de détection de bots."
      ],
      link: "https://github.com/alan5543/BotOrNot",
      DocLink: "https://github.com/alan5543/BotOrNot/blob/main/poster/Tweet_Bot_img.png",
      YouTubeLink: "",
      TryAndPlayLink: "https://huggingface.co/AlanYky/phi-3.5_tweets_instruct_50k",
      image: require("../images/BotOrNot.jpg")
    },
    {
      id: "2",
      title: "Application LLM : Agent de voyage Telegram AI",
      brief: [
        "L'Agent de voyage Telegram AI est un bot Telegram intelligent qui simplifie la planification de voyages en intégrant le modèle de langage Gemini avec l'architecture client du protocole de contexte de modèle (MCP).",
        "Il offre des services en temps réel comme la recherche de vols, la réservation d'hébergements, la planification de voyages et la découverte d'événements locaux en anglais, chinois et cantonais, en s'appuyant sur un réseau de serveurs MCP évolutif."
      ],
      detail: [
        "Ce projet présente l'Agent de voyage Telegram AI, un bot sophistiqué conçu pour améliorer la planification de voyages en connectant les utilisateurs à des services de voyage en temps réel. Propulsé par le modèle de langage Gemini et le cadre MCP, il répond au besoin d'un assistant de voyage multilingue efficace, prenant en charge l'anglais, le chinois et le cantonais pour un public mondial.",
        "Le bot propose des fonctionnalités de voyage complètes, y compris la recherche de vols et d'hébergements (Airbnb et hôtels), la planification de voyages avec des recommandations de restaurants et de magasins, et l'exploration d'événements locaux et de destinations. Il fournit des sorties en texte brut structuré avec des emojis, triées par prix, avec des configurations personnalisables pour la sélection du modèle et les limites d'itération des outils, garantissant une expérience conviviale.",
        "Sur le plan architectural, le bot fonctionne comme un client MCP, traitant les entrées Telegram avec Gemini pour la compréhension du langage naturel et coordonnant avec des serveurs MCP spécialisés pour des tâches comme le calcul de budget et la recherche de vols. Cette conception modulaire permet une évolutivité grâce à l'ajout de nouveaux serveurs MCP, avec des serveurs personnalisés (par exemple, Flight Search MCP) et des intégrations tierces (par exemple, Wikipedia MCP) améliorant la fonctionnalité.",
        "La configuration implique de cloner le dépôt, d'installer Python 3.8+, uv et Node.js, et de configurer les clés API dans un fichier .env. Le bot s'exécute avec `uv run main.py`, soutenu par un prompt système pour des réponses cohérentes et des fichiers de configuration détaillés pour les paramètres du modèle et du serveur MCP, le rendant accessible pour le développement et les tests."
      ],
      link: "https://github.com/alan5543/TelegramTravelAgent",
      DocLink: "https://github.com/alan5543/Flight-Search-MCP",
      YouTubeLink: "https://www.youtube.com/watch?v=trWZnNzofPs&ab_channel=KaiYamYang",
      TryAndPlayLink: "https://t.me/TravgentBot",
      image: require("../images/agent.jpg")
    },
    {
      id: "3",
      title: "Recherche LLM : FLAN-Phi-2",
      brief: [
        "Ajustement avancé du modèle Phi-2 de Microsoft (2,7B) utilisant l'ajustement d'instructions FLAN et l'ajustement de symboles.",
        "Démontre que les petits modèles de langage (SLM) peuvent rivaliser avec les LLM en raisonnement et apprentissage en contexte.",
        "Modèles open-source, ensembles de données et benchmarks d'évaluation pour la reproductibilité."
      ],
      detail: [
        "Ce projet de recherche se concentre sur l'amélioration des capacités des petits modèles de langage (SLM) en mettant en œuvre des techniques d'ajustement sophistiquées sur le modèle Phi-2 de Microsoft, qui compte 2,7 milliards de paramètres. Le projet remet en question l'hypothèse dominante selon laquelle seuls les grands modèles de langage (LLM) peuvent effectuer des tâches complexes comme l'apprentissage en contexte et le raisonnement algorithmique. En utilisant deux méthodes d'ajustement avancées—l'ajustement d'instructions et l'ajustement de symboles—nous démontrons qu'un modèle compact comme Phi-2 peut atteindre des performances compétitives avec des modèles beaucoup plus grands tout en étant plus efficace et accessible.",
        "Le processus d'ajustement des instructions implique l'adaptation de Phi-2 à l'aide de la collection de données FLAN, qui comprend des tâches variées formulées comme des instructions en langage naturel. Cette approche permet au modèle de mieux généraliser sur des tâches non vues en comprenant et en suivant des instructions de type humain. La méthode d'ajustement de symboles améliore encore la robustesse de Phi-2 en remplaçant les étiquettes textuelles traditionnelles par des symboles arbitraires pendant l'entraînement. Cela oblige le modèle à se concentrer sur les motifs sous-jacents et le raisonnement plutôt que sur les indices sémantiques, améliorant sa capacité à gérer des tâches abstraites et structurées.",
        "Pour évaluer rigoureusement les modèles ajustés, nous avons effectué des expériences approfondies sur plusieurs benchmarks. Ceux-ci incluent la suite d'évaluation Big Bench, qui teste les compétences de raisonnement et de résolution de problèmes, ainsi que des ensembles de données spécialisés pour la détection de discours haineux, la classification de sujets climatiques, l'analyse de subjectivité, et plus encore. Nous avons également introduit des tâches à étiquettes inversées pour évaluer l'adaptabilité du modèle à des schémas d'étiquetage contre-intuitifs. Des évaluations humaines ont été réalisées parallèlement aux métriques automatisées pour garantir une analyse complète des performances. Les résultats ont été systématiquement documentés dans des carnets détaillés et des feuilles Excel, comparant les sorties de Phi-2 à celles de modèles plus grands comme Mistral et ChatGPT.",
        "Tous les composants de ce projet—y compris les modèles ajustés (FLAN-Phi-2 et FLAN-Phi-2-Symbol), les ensembles de données prétraités, les scripts d'entraînement et les outils d'évaluation—ont été rendus publics sur Hugging Face et GitHub. Cette approche open-source garantit la reproductibilité et encourage la recherche supplémentaire sur les modèles de langage efficaces. Les conclusions du projet mettent en lumière le potentiel des SLM dans des environnements à ressources limitées, offrant une alternative viable aux LLM pour les applications nécessitant moins de surcharge informatique sans sacrifier les performances."
      ],
      link: "https://github.com/alan5543/phi-2-tuning",
      DocLink: "https://huggingface.co/ChunB1/phi-2_OpenOrca_cot_only_symbol",
      YouTubeLink: "",
      TryAndPlayLink: "https://huggingface.co/ChunB1/phi-2_OpenOrca_cot_only_symbol",
      image: require("../images/phi-2.png")
    },
    {
      id: "4",
      title: "Recherche LLM : TinyReview",
      brief: [
        "Démontre comment les techniques de prétraitement peuvent améliorer les petits modèles de langage (SLM) pour rivaliser avec les performances des modèles plus grands",
        "Comprend une architecture GPT-Neo personnalisée et des ensembles de données spécialisés d'avis Amazon avec filtrage basé sur POS",
        "Atteint une qualité de génération de texte comparable à 1/10 du coût computationnel des LLM standards"
      ],
      detail: [
        "Ce projet présente un cadre complet pour optimiser les petits modèles de langage (SLM) grâce à un prétraitement avancé des données et une construction ciblée d'ensembles de données. En utilisant GPT-Neo comme architecture de base, nous avons développé des blocs de transformateurs modifiés et des couches d'incorporation spécifiquement ajustées pour un entraînement efficace sur des ensembles de données curated. Notre pipeline de prétraitement implémente des techniques novatrices, y compris le filtrage par partie du discours (isolant les verbes/noms/adjectifs), l'optimisation du vocabulaire et la normalisation de la structure des phrases.",
        "Nous avons construit quatre ensembles de données spécialisés à partir des avis sur les livres Amazon, chacun traité avec différents filtres linguistiques : 1) Données brutes non traitées, 2) Verbes courants uniquement, 3) Combinaisons Nom+Verbe+Adjectif, et 4) Structures Nom+Verbe+Adjectif+Adverbe. Ces ensembles de données ont été conçus pour tester comment les éléments grammaticaux spécifiques affectent les performances du modèle en termes de précision grammaticale (mesurée par l'évaluation GPT-4), de diversité créative (par l'évaluation humaine) et de cohérence du raisonnement (via un score manuel).",
        "Le cadre d'évaluation combine une analyse automatisée utilisant GPT-3.5/GPT-4 avec un score manuel sur trois dimensions : la grammaticalité (exactitude de la structure des phrases), la créativité (nouveauté de la sortie) et la cohérence (flux logique). Nos résultats montrent que l'ensemble de données filtré par POS (Nom+Verbe+Adjectif+Adverbe) a atteint 92 % des performances de GPT-3.5 en précision grammaticale tout en utilisant seulement 10 % des ressources informatiques. Le modèle a particulièrement excellé dans le maintien de la cohérence narrative sur les réponses longues.",
        "Tous les composants, y compris l'implémentation personnalisée de GPT-Neo, les scripts de prétraitement et les carnets d'évaluation, sont publiquement disponibles. Le projet démontre que les SLM stratégiquement prétraités peuvent servir d'alternatives viables aux LLM pour des tâches NLP spécifiques, offrant des temps d'inférence 8 à 10 fois plus rapides et des exigences de mémoire significativement réduites sans compromis substantiels sur la qualité. Ce travail est particulièrement pertinent pour le déploiement sur des appareils à faible ressources."
      ],
      link: "https://github.com/alan5543/tinyReview",
      DocLink: "https://huggingface.co/ChunB1/TinyReviews_adv",
      YouTubeLink: "",
      TryAndPlayLink: "https://huggingface.co/ChunB1/TinyReviews_adv",
      image: require("../images/tinyReview.png")
    },
    {
      id: "5",
      title: "Projet Full-Stack : McGill UAsk",
      brief: [
        "Plateforme MERN full-stack améliorant l'interaction étudiant-professeur à l'Université McGill",
        "Combine les fonctionnalités d'Ed et de Slack avec la gestion de cours, les discussions filées et les notifications en temps réel",
        "Architecture modulaire avec authentification des utilisateurs, vérification par e-mail et contrôle d'accès basé sur les rôles"
      ],
      detail: [
        "McGill UAsk est une plateforme de communication académique complète conçue pour combler le fossé entre les étudiants et les professeurs grâce à des outils de discussion spécialisés. Construit sur la pile MERN (MongoDB, Express.js, React, Node.js), le système propose une interface à deux modes (clair/sombre) avec un design réactif optimisé pour une utilisation sur ordinateur et mobile. L'innovation principale de la plateforme réside dans son système de discussion hybride public/privé, permettant des annonces à l'échelle des cours tout en gérant des conversations confidentielles entre assistants d'enseignement et étudiants, le tout via une interface unifiée.",
        "L'implémentation technique suit une architecture modulaire avec cinq composants indépendants : 1) Gestion des utilisateurs (authentification JWT avec validation des e-mails McGill), 2) Gestion des cours (système de codes d'invitation pour l'inscription), 3) Publications publiques (discussions filées avec vote positif), 4) Publications privées (contrôles d'accès basés sur les rôles pour les assistants/professeurs), et 5) Système de notification (alertes en temps réel alimentées par Socket.io). La base de données MongoDB utilise trois types de collections : profils d'utilisateurs (avec permissions de rôle), registres de cours (reliant les utilisateurs aux cours) et hiérarchies de publications (avec structures de commentaires imbriquées).",
        "Les fonctionnalités de sécurité incluent le stockage de mots de passe cryptés (bcrypt), la protection CSRF et les flux de vérification par e-mail utilisant des jetons uniques stockés dans des collections séparées. Le système de notification déclenche des alertes pour les réponses aux publications, les rappels de délais et les mises à jour des cours, avec un suivi de l'état lu/non lu. L'optimisation des performances inclut le chargement paginé des publications, l'indexation MongoDB sur les champs fréquemment interrogés (courseID, userID) et la mémorisation React pour réduire les re-rendus.",
        "La plateforme a été testée sous stress avec plus de 150 utilisateurs simultanés sur trois rôles (étudiants, assistants, professeurs), démontrant un taux de livraison de publications de 98 % et des temps de réponse inférieurs à 500 ms pour les opérations principales. Par rapport aux solutions existantes, UAsk a réduit le volume d'e-mails liés aux cours de 72 % dans les études pilotes tout en maintenant une disponibilité 24/7. Le code est conçu pour l'extensibilité, avec des interfaces claires entre les modules permettant des ajouts futurs comme le partage de fichiers ou l'intégration de calendriers sans modifications structurelles."
      ],
      link: "https://github.com/alan5543/mcgill-cs-chat",
      DocLink: require("../documents/Final Report_McGill UAsk.pdf"),
      YouTubeLink: "https://www.youtube.com/watch?v=bel31lMmFdE&ab_channel=KaiYamYang",
      TryAndPlayLink: "https://mcgill-uask.cs.mcgill.ca/",
      image: require("../images/uask.png")
    },
    {
      id: "6",
      title: "Recherche ML : Benchmark des algorithmes RL",
      brief: [
        "Comparaison complète des politiques RL discrètes (SARSA attendu, DDQN) contre continues (TRPO, PPO)",
        "Évalue 3 méthodes de discrétisation de l'espace d'état (Fourier, RBF, Tile Coding) sur OpenAI Gym et MuJoCo",
        "Quantifie les performances à travers la vitesse de convergence, le biais et les métriques de retour moyen"
      ],
      detail: [
        "Cette recherche évalue systématiquement les algorithmes d'apprentissage par renforcement pour les tâches de contrôle continu à travers des benchmarks rigoureux sur les environnements OpenAI Gym et MuJoCo. L'étude compare les méthodes de politique discrète (SARSA attendu et Double DQN) aux approches de politique continue (Optimisation de la politique de région de confiance et Optimisation de la politique proximale), en mettant en œuvre trois techniques de discrétisation de l'espace d'état - fonctions de base de Fourier, fonctions de base radiales (RBF) et codage en tuiles - pour combler l'écart méthodologique entre le discret et le continu.",
        "Le cadre expérimental utilise des métriques d'évaluation standardisées, y compris la vitesse de convergence (mesurée en épisodes/temps), le biais de la politique (écart par rapport aux actions optimales) et le retour moyen (récompense non actualisée par épisode). Chaque algorithme a été testé sur des tâches de référence, y compris Humanoid-v4 de MuJoCo et Pendulum-v1 de Gym, avec des hyperparamètres ajustés par recherche en grille. Les méthodes discrètes utilisent des tampons de relecture d'expérience avec échantillonnage priorisé, tandis que les méthodes continues implémentent un contrôle adaptatif de la taille des pas et une normalisation des avantages.",
        "Les principales conclusions démontrent l'efficacité d'échantillonnage supérieure de PPO dans les espaces à haute dimension (convergence 38 % plus rapide que TRPO dans Humanoid), tandis que la discrétisation par codage en tuiles a permis à DDQN d'atteindre 92 % des performances de la politique continue dans les tâches plus simples. La méthode de base de Fourier a montré une efficacité particulière dans les environnements à dynamique périodique (biais 15 % plus faible dans Pendulum par rapport à RBF). Toutes les implémentations incluent un échantillonnage parallèle de l'environnement et des backends de réseaux neuronaux accélérés par GPU pour un entraînement efficace.",
        "Le dépôt fournit des implémentations modulaires de tous les algorithmes avec des fichiers de configuration pour la reproduction des expériences, y compris des wrappers Gym personnalisés pour la discrétisation et un enregistrement complet des métriques d'entraînement. Les résultats mettent en évidence les compromis entre les classes d'algorithmes, montrant la performance compétitive des méthodes discrètes dans les tâches à faible degré de liberté malgré leurs architectures plus simples, tandis que les méthodes continues dominent les défis de locomotion complexes. Ce travail fournit des informations exploitables pour les praticiens sélectionnant des algorithmes en fonction des caractéristiques de l'environnement et des contraintes computationnelles."
      ],
      link: "https://github.com/alan5543/RL-algorithm-benchmark",
      DocLink: "https://github.com/alan5543/RL-algorithm-benchmark",
      YouTubeLink: "",
      TryAndPlayLink: "",
      image: require("../images/MC_Summary_v2.png")
    },
    {
      id: "7",
      title: "Développement iOS : Application de partage de courses",
      brief: [
        "Application de gestion des courses en groupe avec numérisation de reçus et répartition automatique des factures",
        "Combine les fonctionnalités des applications de suivi des dépenses avec des listes de courses sociales",
        "Utilise l'API Gemini pour le traitement OCR des reçus avec un flux de confirmation"
      ],
      detail: [
        "Grocery Room est une solution complète pour la gestion des dépenses domestiques partagées, conçue spécifiquement pour les colocataires, les couples et les familles. L'application propose un système à deux composants : (1) des listes de courses collaboratives avec des mémos privés/partagés et (2) un suivi automatisé des dépenses par numérisation de reçus. L'implémentation technique utilise une pile MERN avec PostgreSQL pour les données relationnelles (utilisateurs, groupes, dettes) et des champs JSONB pour les articles de la liste de courses flexibles. Le pipeline de traitement des reçus intègre l'API Gemini pour l'OCR, suivi d'une interface de confirmation où les utilisateurs peuvent vérifier les articles extraits, attribuer la propriété (moi/membres spécifiques/partage équitable) et catégoriser les achats.",
        "Les composants techniques clés incluent : l'authentification JWT avec vérification par e-mail, des algorithmes de calcul de dettes en temps réel, et un système de reçus en attente qui stocke temporairement les numérisations non confirmées (expirant automatiquement après 24 heures). Le schéma de base de données impose l'intégrité relationnelle entre les utilisateurs, les groupes et les transactions tout en permettant un stockage flexible des articles via le type JSONB de PostgreSQL. Le backend implémente une logique personnalisée pour l'allocation proportionnelle des taxes/rabais lors du partage des articles, avec des dettes calculées au niveau du reçu et de l'article individuel pour une responsabilité précise.",
        "Le frontend propose un tableau de bord réactif avec : (1) une navigation par barre latérale pour le changement de groupe, (2) un accès par onglets aux fonctionnalités principales (Résumé, Liste de courses, Ajouter, Historique, Paramètres), et (3) une amélioration progressive pour le téléchargement des reçus - incluant la capture par caméra, la sélection dans la galerie et une saisie manuelle de secours. La vue Résumé visualise les relations de dettes à l'aide de graphiques à force dirigée, tandis que la section Historique prend en charge le filtrage avancé par plages de dates, catégories (par exemple, Épicerie alimentaire, Ménage) et membres individuels du groupe.",
        "Les mesures de sécurité incluent : le hachage des mots de passe avec bcrypt, les jetons de rafraîchissement JWT à courte expiration, et une validation stricte de la propriété pour tous les accès aux ressources. Le système a été testé sous charge pour gérer plus de 50 utilisateurs simultanés par groupe domestique, avec des optimisations de performance incluant le cache Redis pour les résumés fréquemment consultés et l'indexation de la base de données sur toutes les clés étrangères. Le projet complet - y compris la documentation de l'API, les guides de configuration et les données de test d'exemple - est disponible en tant que dépôt open-source pour encourager l'adoption et l'extension par la communauté."
      ],
      link: "https://github.com/alan5543/Grocery-Share-API",
      DocLink: "https://github.com/alan5543/Grocery-Share-API",
      YouTubeLink: "https://www.youtube.com/watch?v=wFBS9rF1FWI&ab_channel=KaiYamYang",
      TryAndPlayLink: "",
      image: require("../images/grocery.jpg")
    },
    {
      id: "8",
      title: "Lalamove",
      brief: [
        "Dirigé le développement de fonctionnalités pour l'application de logistique des chauffeurs en utilisant la pile Android moderne (Kotlin, Compose, MVVM)",
        "Implémenté un formatage de date/heure adapté à la localisation et une synchronisation NTP pour une cohérence mondiale",
        "Contribué au projet LLM+ Delivery Plus avec une architecture hybride native-webview"
      ],
      detail: [
        "En tant qu'ingénieur Android chez Lalamove, j'ai conduit l'évolution de l'application mobile orientée chauffeur grâce à des améliorations architecturales et au développement de fonctionnalités. J'ai dirigé la migration vers une architecture propre (MVVM) avec une séparation complète des préoccupations - données (Repository), domaine (Use Cases) et présentation (ViewModels). J'ai implémenté une interface utilisateur réactive utilisant Jetpack Compose et StateFlow, réduisant les bogues liés à la vue de 40 % grâce à la sécurité au moment de la compilation. La pile technologique a exploité Dagger/Hilt pour l'injection de dépendances, Room pour la persistance locale et Retrofit pour les opérations réseau, tout écrit en Kotlin avec des coroutines pour les opérations asynchrones.",
        "Les contributions techniques clés incluent : 1) un système de formatage de date/heure dynamique qui adapte automatiquement l'affichage de la date/heure aux paramètres de localisation de l'utilisateur tout en maintenant l'ISO-8601 dans les communications backend, 2) une implémentation de synchronisation d'horloge NTP utilisant SntpClient d'Android pour empêcher la triche temporelle dans les preuves de livraison, et 3) un module de caméra à autocollants basé sur CameraX avec des composants réutilisables pour la numérisation de documents. J'ai développé des fonctionnalités critiques comme la gestion des commandes le jour même avec des flux de travail de preuve de livraison/ramassage géo-clôturés utilisant le SDK Google Maps et les services de localisation en arrière-plan.",
        "J'ai collaboré au projet LLM+ Delivery Plus en construisant des interfaces hybrides qui combinaient des interfaces utilisateur ConstraintLayout natives avec du contenu basé sur WebView, établissant des ponts JavaScript bidirectionnels pour une synchronisation des données en temps réel. J'ai maintenu des pipelines CI/CD rigoureux avec Bitrise, appliquant une couverture de code de plus de 85 % via des tests JUnit et MockK. J'ai contribué aux services backend en Spring Boot (Java) et PHP pour le développement d'API, assurant une intégration mobile-backend fluide. J'ai participé aux cérémonies Agile Scrum en utilisant Jira, livrant constamment des fonctionnalités avant les délais des sprints tout en encadrant les membres juniors de l'équipe sur les principes SOLID et la conception modulaire.",
        "L'environnement technique comprenait : Kotlin (adoption à 100 %), Jetpack Compose, CameraX, WorkManager, Firebase Crashlytics et GraphQL. Les optimisations de performance ont réduit les taux d'ANR de 35 % grâce à l'optimisation des threads en arrière-plan et à l'application stricte de la politique du thread principal. L'application sert plus de 50 000 chauffeurs actifs quotidiens en Asie du Sud-Est avec une note de 4,7/5 sur le Play Store."
      ],
      link: "https://play.google.com/store/apps/details?id=com.lalamove.global.driver.sea",
      DocLink: "https://play.google.com/store/apps/details?id=com.lalamove.global.driver.sea",
      YouTubeLink: "",
      TryAndPlayLink: "https://play.google.com/store/apps/details?id=com.lalamove.global.driver.sea",
      image: require("../images/lalamove.png")
    },
    {
      id: "9",
      title: "Plateforme d'apprentissage de journaux avec NLP et extraction de texte",
      brief: [
        "Un projet web client-serveur avec des techniques de NLP, d'apprentissage automatique, d'extraction de texte et de web scraping.",
        "Analyse des textes de réseaux sociaux avec résumé, classification et prédiction"
      ],
      detail: [
        "NewsPoint est une application web full-stack conçue pour améliorer la lecture de journaux grâce à des techniques d'extraction de texte et de NLP. Elle fournit aux utilisateurs des outils pour une lecture approfondie, un résumé et une analyse des articles de presse. La plateforme prend en charge l'extraction automatique d'articles via le web scraping et la saisie manuelle, les traitant à l'aide d'un backend Python Flask. Les fonctionnalités clés incluent le résumé de texte, l'extraction de points clés, l'analyse de sentiment et l'agrégation d'opinions Twitter. Le système utilise à la fois l'apprentissage non supervisé (algorithmes NLP) et supervisé (prédiction et classification de texte) pour fournir des insights.",
        "Construite sur une architecture client-serveur, NewsPoint utilise des API RESTful pour la communication entre le frontend et le backend. Le serveur traite les requêtes des utilisateurs, effectue des analyses et renvoie les résultats au format JSON, qui sont ensuite visualisés à l'aide de Jinja2 et Bootstrap pour une interface utilisateur réactive. La plateforme est optimisée pour une utilisation sur ordinateur et mobile, garantissant l'accessibilité.",
        "En fin de compte, NewsPoint vise à simplifier les articles de presse complexes, aidant les utilisateurs à développer des stratégies de lecture personnalisées grâce à des outils de résumé et d'analyse intelligents. Elle sert de plateforme d'intelligence de presse complète, rendant la consommation d'informations plus efficace et perspicace."
      ],
      link: "https://github.com/alan5543/FYP-Project",
      DocLink: require("../documents/news_platform_document.pdf"),
      YouTubeLink: "https://www.youtube.com/watch?v=wFBS9rF1FWI&ab_channel=KaiYamYang",
      TryAndPlayLink: "",
      image: require("../images/news_app.png")
    },
    {
      id: "10",
      title: "Conception de site web personnel",
      brief: [
        "Ce site web utilise React et Material UI pour présenter le profil personnel d'Alan Yang."
      ],
      detail: [
        "Mon site web de portfolio dynamique met en avant mes compétences, projets et mises à jour, construit avec des technologies web modernes pour une maintenance facile et des mises à jour rapides. Mes compétences frontend sont mises en valeur par un code HTML, CSS et JavaScript propre, avec des animations CSS personnalisées créant des transitions et des effets engageants. En utilisant des outils de codage rapide comme Webflow pour un développement rapide, j'intègre du code personnalisé pour offrir une interface unique et soignée.",
        "Le site web présente un design réactif pour un accès fluide sur tous les appareils et des mises à jour de contenu en temps réel pour maintenir les projets à jour. Mon accent sur la conception UX garantit une expérience utilisateur immersive, avec une navigation intuitive et des animations CSS soigneusement conçues, comme des effets de survol fluides, qui augmentent l'engagement. Cette combinaison de codage rapide et de développement personnalisé crée un portfolio dynamique et centré sur l'utilisateur qui captive les visiteurs."
      ],
      link: "https://github.com/alan5543/alan-yang-profilio-app",
      DocLink: "",
      YouTubeLink: "",
      TryAndPlayLink: "https://alan5543.github.io/alan-yang-profilio-app/",
      image: require("../images/profilo_app.png")
    },
    {
      id: "11",
      title: "Application Solos AirGo™",
      brief: [
        "Application mobile alimentée par l'IA pour les lunettes intelligentes SOLOS AIRGO avec détection de mouvement basée sur CNN",
        "Intègre la surveillance de la posture, le suivi de la condition physique et des fonctionnalités de chat IA alimentées par LLM",
        "Inclut une calibration audio avancée et des capacités de partage social"
      ],
      detail: [
        "Une application mobile sophistiquée exploitant la technologie de l'IA, y compris un modèle CNN avec capteur IMU pour une détection de mouvement précise, pour améliorer l'expérience des lunettes intelligentes SOLOS AIRGO. Elle offre une surveillance personnalisée de la posture, un suivi détaillé de la condition physique et des outils de productivité alimentés par un LLM comme ChatGPT pour des fonctionnalités de chat IA avancées telles que SolosChat™ pour la planification et SolosTranslate™ pour la communication multilingue.",
        "Comprend un système de calibration EQ innovant construit avec le modèle Observer, intégrant une interface utilisateur à roue de clic unique pour des ajustements de tonalité intuitifs, développé pour optimiser la qualité audio et présenté à CES 2021.",
        "Prend en charge la santé et le bien-être avec le suivi des activités, des plans d'entraînement personnalisés via Solos Coach, et l'intégration des réseaux sociaux pour partager les réalisations, ainsi que des fonctionnalités pratiques comme la localisation des appareils, la connectivité à double hôte et les contrôles tactiles personnalisables."
      ],
      link: "https://solosglasses.com/pages/solos-airgo-app-entry",
      DocLink: "https://solosglasses.com/pages/solos-apps-solos-airgo",
      YouTubeLink: "",
      TryAndPlayLink: "https://apps.apple.com/us/app/solos-airgo/id1484336694",
      image: require("../images/EQ_Cal_App.png")
    },
    {
      id: "12",
      title: "Chariot de vente intelligent",
      brief: [
        "Développer une plateforme IoT entre Arduino et ThingSpeak",
        "Créer un panneau de chariot avec des techniques RFID et OLED pour la numérisation des produits"
      ],
      detail: [
        "Un système de chariot de vente intelligent basé sur l'IoT intégrant Arduino avec ThingSpeak pour le suivi des données. Utilise RFID et OLED pour la numérisation et l'affichage des produits.",
        "Vise à rationaliser les expériences d'achat avec des mises à jour d'inventaire en temps réel."
      ],
      link: "https://github.com/alan5543/Resume",
      DocLink: "https://github.com/alan5543/Resume",
      YouTubeLink: "",
      TryAndPlayLink: "",
      image: require("../images/smart_retail_app.png")
    },
    {
      id: "13",
      title: "Application en ligne de commande pour la logistique IT",
      brief: [
        "Construction d'une application CLI avec Python Click pour simuler les opérations logistiques réelles.",
        "Le projet concerne la mise en place d'une API pour les tâches logistiques, les requêtes de base de données et le contrôle en ligne de commande"
      ],
      detail: [
        "Une application en ligne de commande construite avec Python Click pour simuler les opérations logistiques. Inclut l'intégration d'API et l'interrogation de bases de données pour une gestion efficace des tâches.",
        "Conçue pour l'automatisation et l'évolutivité dans la logistique IT."
      ],
      link: "https://github.com/alan5543/delivery_app",
      DocLink: "https://github.com/alan5543/delivery_app",
      YouTubeLink: "",
      TryAndPlayLink: "",
      image: require("../images/logistic_app.jpg")
    },
    {
      id: "14",
      title: "CV et travaux universitaires",
      brief: [
        "Une collection de travaux universitaires.",
        "Les travaux concernent principalement la conception de structures de données et d'algorithmes en Java et C++"
      ],
      detail: [
        "Un dépôt de travaux universitaires axé sur les structures de données et les algorithmes en Java et C++. Inclut des devoirs sur le tri, la recherche et les algorithmes de graphes.",
        "Met en avant les projets académiques et les compétences en résolution de problèmes."
      ],
      link: "https://github.com/alan5543/Resume",
      DocLink: "https://github.com/alan5543/Resume",
      YouTubeLink: "",
      TryAndPlayLink: "",
      image: require("../images/cityu.png")
    }
  ],
  zh: [
    {
      id: "1",
      title: "大语言模型应用：BotOrNot",
      brief: [
        "BotOrNot研究像Phi-3.5-mini-instruct这样的小型语言模型（SLM）是否能生成与人类撰写的推文无区别的内容，挑战基于GPT-4的检测器。",
        "通过指令调优、结合维基百科和每日新闻的检索增强生成（RAG）以及后处理技术，该项目旨在揭示机器人检测系统的漏洞并提供改进见解。"
      ],
      detail: [
        "在对抗社交媒体机器人的持续战斗中，BotOrNot探索小型语言模型（SLM）是否能生成类似人类的推文，能够逃避像GPT-4这样先进模型的检测。这项研究解决了经济高效的SLM是否能与大型模型竞争的关键问题，突显了未被检测到的机器人传播虚假信息的潜在风险。",
        "我们对Phi-3.5-mini-instruct进行了微调，使用了两个数据集：10万个广泛过滤的推文和5万个高质量过滤的推文。采用了指令调优、结合维基百科和每日抓取新闻文章的向量数据库的检索增强生成（RAG）以及词汇后处理等技术，以增强推文的相关性和人类相似性。",
        "该项目通过在Detector.ipynb中实现的基于GPT-4的检测器评估SLM的性能，模拟现实世界的机器人检测竞赛。项目组织成分析、数据预处理、评估、图表、模型训练和项目海报等文件夹，通过/model和/analysis中的笔记本确保可重复性。",
        "关键发现表明，SLM在模仿人类推文方面表现出惊人的效果，揭示了当前检测系统的漏洞。预训练模型和数据集已在Hugging Face上公开，以支持进一步研究。这项研究弥合了模型大小与性能之间的差距，为改进机器人检测策略提供了可操作的见解。"
      ],
      link: "https://github.com/alan5543/BotOrNot",
      DocLink: "https://github.com/alan5543/BotOrNot/blob/main/poster/Tweet_Bot_img.png",
      YouTubeLink: "",
      TryAndPlayLink: "https://huggingface.co/AlanYky/phi-3.5_tweets_instruct_50k",
      image: require("../images/BotOrNot.jpg")
    },
    {
      id: "2",
      title: "大语言模型应用：Telegram旅行AI代理",
      brief: [
        "Telegram旅行AI代理是一个智能Telegram机器人，通过集成Gemini语言模型和模型上下文协议（MCP）客户端架构简化旅行规划。",
        "它提供实时服务，如航班搜索、住宿预订、行程规划和本地活动发现，支持英语、汉语和粤语，依托可扩展的MCP服务器网络。"
      ],
      detail: [
        "该项目推出Telegram旅行AI代理，一个旨在通过连接用户与实时旅行服务来增强旅行规划的复杂机器人。凭借Gemini语言模型和MCP框架的支持，它满足了对高效、多语言旅行助手的需求，支持英语、汉语和粤语，服务于全球受众。",
        "该机器人提供全面的旅行功能，包括航班和住宿搜索（Airbnb和酒店）、带餐厅和商店推荐的行程规划以及本地活动和目的地探索。它提供按价格排序的结构化、基于表情符号的纯文本输出，具有可定制的模型选择和工具迭代限制配置，确保用户友好的体验。",
        "在架构上，机器人作为MCP客户端运行，使用Gemini处理Telegram输入以进行自然语言理解，并与专门的MCP服务器协调执行预算计算和航班搜索等任务。这种模块化设计允许通过添加新的MCP服务器实现可扩展性，自定义服务器（如航班搜索MCP）和第三方集成（如维基百科MCP）增强了功能。",
        "设置涉及克隆存储库，安装Python 3.8+、uv和Node.js，并在.env文件中配置API密钥。机器人通过`uv run main.py`运行，支持一致响应的系统提示和详细的模型及MCP服务器设置配置文件，便于开发和测试。"
      ],
      link: "https://github.com/alan5543/TelegramTravelAgent",
      DocLink: "https://github.com/alan5543/Flight-Search-MCP",
      YouTubeLink: "https://www.youtube.com/watch?v=trWZnNzofPs&ab_channel=KaiYamYang",
      TryAndPlayLink: "https://t.me/TravgentBot",
      image: require("../images/agent.jpg")
    },
    {
      id: "3",
      title: "大语言模型研究：FLAN-Phi-2",
      brief: [
        "使用FLAN指令调优和符号调优对微软Phi-2（27亿参数）进行高级微调。",
        "证明小型语言模型（SLM）在推理和上下文学习方面可以与大语言模型（LLM）竞争。",
        "开源模型、数据集和评估基准，确保可重复性。"
      ],
      detail: [
        "这项研究项目专注于通过对微软Phi-2模型（拥有27亿参数）实施复杂微调技术来提升小型语言模型（SLM）的能力。该项目挑战了只有大语言模型（LLM）才能执行上下文学习和算法推理等复杂任务的普遍假设。通过利用两种高级调优方法——指令调优和符号调优——我们证明了像Phi-2这样的紧凑模型可以实现与更大模型竞争的性能，同时更高效且易于访问。",
        "指令调优过程涉及使用FLAN数据集集合调整Phi-2，该集合包含以自然语言指令形式表达的多样化任务。这种方法使模型能够通过理解和遵循类人指令在未见任务上更好地泛化。符号调优方法通过在训练期间将传统基于文本的标签替换为任意符号，进一步增强了Phi-2的鲁棒性。这迫使模型专注于潜在模式和推理，而不是依赖语义线索，提高了其处理抽象和结构化任务的能力。",
        "为了严格评估调优模型，我们在多个基准测试中进行了广泛实验。这些包括Big Bench评估套件，用于测试推理和问题解决技能，以及用于仇恨言论检测、气候主题分类、主观性分析等的专门数据集。我们还引入了翻转标签任务，以评估模型对反直觉标签方案的适应性。结合自动指标进行人类评估，以确保全面的性能分析。结果在详细的笔记本和Excel表格中系统记录，比较了Phi-2的输出与Mistral和ChatGPT等更大模型的输出。",
        "该项目的所有组件——包括微调模型（FLAN-Phi-2和FLAN-Phi-2-Symbol）、预处理数据集、训练脚本和评估工具——均已在Hugging Face和GitHub上公开。这种开源方法确保了可重复性，并鼓励对高效语言模型的进一步研究。项目的结果突显了SLM在资源受限环境中的潜力，为需要较低计算开销但不牺牲性能的应用提供了可行的LLM替代方案。"
      ],
      link: "https://github.com/alan5543/phi-2-tuning",
      DocLink: "https://huggingface.co/ChunB1/phi-2_OpenOrca_cot_only_symbol",
      YouTubeLink: "",
      TryAndPlayLink: "https://huggingface.co/ChunB1/phi-2_OpenOrca_cot_only_symbol",
      image: require("../images/phi-2.png")
    },
    {
      id: "4",
      title: "大语言模型研究：TinyReview",
      brief: [
        "展示如何通过预处理技术增强小型语言模型（SLM）以媲美更大模型的性能",
        "采用定制的GPT-Neo架构和基于POS过滤的亚马逊评论专门数据集",
        "以标准LLM的1/10计算成本实现可比较的文本生成质量"
      ],
      detail: [
        "该项目提出了一个通过高级数据预处理和针对性数据集构建优化小型语言模型（SLM）的全面框架。以GPT-Neo为基础架构，我们开发了专门为高效训练定制数据集而调整的修改变压器块和嵌入层。我们的预处理流水线实现了包括词性过滤（隔离动词/名词/形容词）、词汇优化和句子结构规范化等创新技术。",
        "我们从亚马逊图书评论中构建了四个专门数据集，每个数据集使用不同的语言过滤器处理：1）未经处理的原始数据，2）仅常用动词，3）名词+动词+形容词组合，4）名词+动词+形容词+副词结构。这些数据集旨在测试特定语法元素如何影响模型在语法准确性（通过GPT-4评估测量）、创造性多样性（通过人类评估）和推理一致性（通过手动评分）方面的性能。",
        "评估框架结合了使用GPT-3.5/GPT-4的自动化分析和在三个维度上的手动评分：语法正确性（句子结构正确性）、创造性（输出新颖性）和一致性（逻辑流畅性）。我们的结果显示，基于POS过滤的数据集（名词+动词+形容词+副词）在语法准确性上达到了GPT-3.5的92%，而仅使用10%的计算资源。该模型在长篇响应的叙事连贯性方面表现尤为出色。",
        "包括定制GPT-Neo实现、预处理脚本和评估笔记本在内的所有组件均已公开。该项目证明了经过战略预处理的SLM可以作为特定NLP任务的可行替代方案，提供8-10倍的推理速度和显著降低的内存需求，而不会在质量上做出重大妥协。这项工作对于边缘部署和资源受限环境尤其相关。"
      ],
      link: "https://github.com/alan5543/tinyReview",
      DocLink: "https://huggingface.co/ChunB1/TinyReviews_adv",
      YouTubeLink: "",
      TryAndPlayLink: "https://huggingface.co/ChunB1/TinyReviews_adv",
      image: require("../images/tinyReview.png")
    },
    {
      id: "5",
      title: "全栈项目：McGill UAsk",
      brief: [
        "增强麦吉尔大学学生与教师互动的全栈MERN平台",
        "结合Ed和Slack的功能，具备课程管理、线程讨论和实时通知",
        "模块化架构，包含用户认证、电子邮件验证和基于角色的访问控制"
      ],
      detail: [
        "McGill UAsk是一个全面的学术沟通平台，旨在通过专门的讨论工具弥合学生与教师之间的差距。基于MERN技术栈（MongoDB、Express.js、React、Node.js）构建，系统具有双模式界面（明暗模式），并针对桌面和移动设备优化了响应式设计。平台的核心创新在于其混合公开/私人讨论系统，允许课程范围的公告以及助教与学生之间的机密对话，所有这些都通过统一界面管理。",
        "技术实现遵循模块化架构，包含五个独立组件：1）用户管理（使用麦吉尔电子邮件验证的JWT认证），2）课程管理（用于注册的邀请码系统），3）公开帖子（支持点赞的线程讨论），4）私人帖子（为助教/教授提供基于角色的访问控制），5）通知系统（由Socket.io支持的实时警报）。MongoDB数据库采用三种集合类型：用户配置文件（含角色权限）、课程注册（连接用户与课程）和帖子层级（含嵌套评论结构）。",
        "安全功能包括加密密码存储（bcrypt）、CSRF保护和使用存储在单独集合中的唯一令牌进行电子邮件验证。通知系统触发帖子回复、截止日期提醒和课程更新的警报，并跟踪已读/未读状态。性能优化包括分页加载帖子、在经常查询的字段（courseID、userID）上进行MongoDB索引，以及React记忆化以减少重新渲染。",
        "该平台通过150多个并发用户在学生、助教和教授三种角色下的压力测试，展示了98%的帖子传递成功率和核心操作低于500毫秒的响应时间。与现有解决方案相比，UAsk在试点研究中将与课程相关的电子邮件量减少了72%，同时保持24/7可用性。代码库设计具有扩展性，模块之间的清晰接口允许未来添加如文件共享或日历集成等功能，而无需结构更改。"
      ],
      link: "https://github.com/alan5543/mcgill-cs-chat",
      DocLink: require("../documents/Final Report_McGill UAsk.pdf"),
      YouTubeLink: "https://www.youtube.com/watch?v=bel31lMmFdE&ab_channel=KaiYamYang",
      TryAndPlayLink: "https://mcgill-uask.cs.mcgill.ca/",
      image: require("../images/uask.png")
    },
    {
      id: "6",
      title: "机器学习研究：强化学习算法基准",
      brief: [
        "对离散（期望SARSA、DDQN）与连续（TRPO、PPO）强化学习策略进行全面比较",
        "在OpenAI Gym和MuJoCo上评估三种状态离散化方法（傅里叶、RBF、瓦片编码）",
        "通过收敛速度、偏差和平均回报指标量化性能"
      ],
      detail: [
        "这项研究通过在OpenAI Gym和MuJoCo环境中的严格基准测试，系统性地评估了用于连续控制任务的强化学习算法。研究比较了离散策略方法（期望SARSA和双重DQN）与连续策略方法（信任区域策略优化和近端策略优化），实现了三种状态空间离散化技术——傅里叶基函数、径向基函数（RBF）和瓦片编码——以弥合离散与连续方法之间的差距。",
        "实验框架采用了标准化的评估指标，包括收敛速度（以回合/时间步长测量）、策略偏差（与最优动作的偏差）和平均回报（每回合未折扣的奖励）。每个算法在包括MuJoCo的Humanoid-v4和Gym的Pendulum-v1的基准任务上进行了测试，通过网格搜索调整超参数。离散方法使用具有优先采样的经验回放缓冲区，而连续方法实现了自适应步长控制和优势归一化。",
        "关键发现表明，PPO在高维空间中具有卓越的样本效率（在Humanoid中比TRPO快38%收敛），而瓦片编码离散化使DDQN在较简单任务中达到了连续策略性能的92%。傅里叶基方法在具有周期性动态的环境中显示出特殊效果（在Pendulum中比RBF低15%的偏差）。所有实现包括并行环境采样和GPU加速的神经网络后端，以实现高效训练。",
        "存储库提供了所有算法的模块化实现，以及实验再现的配置文件，包括用于离散化的自定义Gym包装器和全面的训练指标记录。结果突显了算法类别之间的权衡，显示了离散方法在低自由度任务中的竞争性能，尽管其架构更简单，而连续方法在复杂运动挑战中占据主导地位。这项工作为根据环境特性和计算约束选择算法的实践者提供了可操作的见解。"
      ],
      link: "https://github.com/alan5543/RL-algorithm-benchmark",
      DocLink: "https://github.com/alan5543/RL-algorithm-benchmark",
      YouTubeLink: "",
      TryAndPlayLink: "",
      image: require("../images/MC_Summary_v2.png")
    },
    {
      id: "7",
      title: "iOS开发：杂货共享应用",
      brief: [
        "带收据扫描和自动账单拆分的群体杂货管理应用",
        "结合了费用跟踪应用和社交杂货清单的功能",
        "使用Gemini API进行OCR收据处理，带有确认工作流程"
      ],
      detail: [
        "Grocery Room是为室友、情侣和家庭设计的共享家庭费用管理的综合解决方案。该应用具有双组件系统：1）带私有/共享备忘录的协作杂货清单，2）通过收据扫描实现自动化费用跟踪。技术实现使用了MERN技术栈和PostgreSQL进行关系数据（用户、群体、债务）管理，并使用JSONB字段存储灵活的购物清单项目。收据处理流水线集成了Gemini API进行OCR，随后是用户可验证提取项目、分配所有权（我/特定成员/平均分配）并分类购买的确认界面。",
        "关键技术组件包括：带电子邮件验证的JWT认证、实时债务计算算法以及临时存储未确认扫描的待处理收据系统（24小时后自动过期）。数据库模式强制执行用户、群体和交易之间的关系完整性，同时通过PostgreSQL的JSONB类型允许灵活的项目存储。后端实现了用于拆分项目的比例税/折扣分配的自定义逻辑，在收据和单个项目级别计算债务，以实现精确的责任归属。",
        "前端具有响应式仪表板，包括：1）用于群体切换的侧边栏导航，2）基于选项卡访问核心功能（概览、购物清单、添加、历史、设置），3）用于收据上传的渐进增强——包括相机捕捉、图库选择和手动输入后备。概览视图使用力导向图可视化债务关系，而历史记录部分支持按日期范围、类别（例如，食品杂货、家居）和单个群体成员进行高级过滤。",
        "安全措施包括：bcrypt密码哈希、短期过期的JWT刷新令牌以及对所有资源访问的严格所有权验证。系统经过负载测试，可处理每个家庭群体50多个并发用户，通过Redis缓存优化频繁访问的概览和对所有外键的数据库索引进行性能优化。完整项目——包括API文档、设置指南和示例测试数据——作为开源存储库提供，以鼓励社区采用和扩展。"
      ],
      link: "https://github.com/alan5543/Grocery-Share-API",
      DocLink: "https://github.com/alan5543/Grocery-Share-API",
      YouTubeLink: "https://www.youtube.com/watch?v=wFBS9rF1FWI&ab_channel=KaiYamYang",
      TryAndPlayLink: "",
      image: require("../images/grocery.jpg")
    },
    {
      id: "8",
      title: "Lalamove",
      brief: [
        "使用现代Android技术栈（Kotlin、Compose、MVVM）领导物流司机应用的功能开发",
        "实现了适配本地化的日期时间格式和NTP同步以确保全球一致性",
        "参与了LLM+ Delivery Plus项目，采用混合原生-Webview架构"
      ],
      detail: [
        "作为Lalamove的Android工程师，我通过架构改进和功能开发推动了面向司机的移动应用的演进。领导了向清洁架构（MVVM）的迁移，实现了数据（Repository）、域（Use Cases）和呈现（ViewModels）的完全分离。使用Jetpack Compose和StateFlow实现了响应式用户界面，通过编译时安全性将与视图相关的错误减少了40%。技术栈利用Dagger/Hilt进行依赖注入，Room进行本地持久化，Retrofit进行网络操作，全部使用Kotlin编写，并使用协程进行异步操作。",
        "关键技术贡献包括：1）动态日期时间格式系统，自动适配用户的本地设置显示日期/时间，同时在后端通信中保持ISO-8601，2）使用Android的SntpClient实现NTP时钟同步，防止在交付证明中作弊，3）基于CameraX的贴纸相机模块，带有用于文档扫描的可重用组件。开发了关键功能，如使用Google Maps SDK和后台定位服务实现地理围栏的当日订单处理和交付/取货证明工作流程。",
        "参与了LLM+ Delivery Plus计划，构建了混合界面，将原生ConstraintLayout用户界面与基于Webview的内容融合，建立了用于实时数据同步的双向JavaScript桥梁。维护了使用Bitrise的严格CI/CD流水线，通过JUnit和MockK测试强制执行85%以上的代码覆盖率。参与了使用Spring Boot（Java）和PHP开发后端服务的API开发，确保了移动端与后端的无缝集成。使用Jira参与了敏捷Scrum仪式，始终在冲刺截止日期前交付功能，同时指导初级团队成员遵循SOLID原则和模块化设计。",
        "技术环境包括：Kotlin（100%采用）、Jetpack Compose、CameraX、WorkManager、Firebase Crashlytics和GraphQL。性能优化通过后台线程优化和严格的主线程策略执行将ANR率降低了35%。该应用为东南亚50,000多名每日活跃司机提供服务，在Play Store上获得4.7/5的评分。"
      ],
      link: "https://play.google.com/store/apps/details?id=com.lalamove.global.driver.sea",
      DocLink: "https://play.google.com/store/apps/details?id=com.lalamove.global.driver.sea",
      YouTubeLink: "",
      TryAndPlayLink: "https://play.google.com/store/apps/details?id=com.lalamove.global.driver.sea",
      image: require("../images/lalamove.png")
    },
    {
      id: "9",
      title: "新闻学习平台：NLP与文本挖掘",
      brief: [
        "一个基于客户端-服务器的Web项目，结合NLP技术、机器学习、文本挖掘和网络爬虫。",
        "分析社交媒体文本，进行摘要、分类和预测"
      ],
      detail: [
        "NewsPoint是一个全栈Web应用程序，旨在通过文本挖掘和NLP技术增强报纸阅读体验。它为用户提供了深度阅读、摘要和新闻文章分析的工具。平台支持通过网络爬虫自动提取文章和手动输入，使用Python Flask后端进行处理。关键功能包括文本摘要、关键点提取、情感分析和Twitter意见聚合。系统采用非监督学习（NLP算法）和监督学习（文本预测和分类）来提供洞察。",
        "基于客户端-服务器架构，NewsPoint使用RESTful API在前端和后端之间进行通信。服务器处理用户请求，执行分析并以JSON格式返回结果，然后使用Jinja2和Bootstrap进行可视化，打造响应式用户界面。平台针对桌面和移动设备进行了优化，确保可访问性。",
        "最终，NewsPoint旨在简化复杂的新闻文章，通过智能摘要和分析工具帮助用户开发个性化的阅读策略。它作为一个全面的新闻情报平台，使信息消费更加高效和富有洞察力。"
      ],
      link: "https://github.com/alan5543/FYP-Project",
      DocLink: require("../documents/news_platform_document.pdf"),
      YouTubeLink: "https://www.youtube.com/watch?v=wFBS9rF1FWI&ab_channel=KaiYamYang",
      TryAndPlayLink: "",
      image: require("../images/news_app.png")
    },
    {
      id: "10",
      title: "个人网站设计",
      brief: [
        "此网站使用React和Material UI展示杨凯的个人简介。"
      ],
      detail: [
        "我的动态个人组合网站展示了我的技能、项目和更新，使用现代Web技术构建，便于维护和快速更新。我的前端技能通过干净的HTML、CSS和JavaScript代码得以突出，定制的CSS动画创造了引人入胜的过渡和效果。使用如Webflow的快速编码工具进行快速开发，我集成了定制代码以提供独特而精致的界面。",
        "该网站具有响应式设计，可在各种设备上无缝访问，并支持实时内容更新以保持项目的最新状态。我对用户体验设计的关注确保了沉浸式用户体验，凭借直观的导航和精心设计的CSS动画（如平滑悬停效果）提升了用户参与度。这种快速编码与定制开发的结合创造了一个以用户为中心、引人入胜的动态组合网站。"
      ],
      link: "https://github.com/alan5543/alan-yang-profilio-app",
      DocLink: "",
      YouTubeLink: "",
      TryAndPlayLink: "https://alan5543.github.io/alan-yang-profilio-app/",
      image: require("../images/profilo_app.png")
    },
    {
      id: "11",
      title: "Solos AirGo™ 应用",
      brief: [
        "为SOLOS AIRGO智能眼镜开发的AI驱动移动应用程序，带有基于CNN的运动检测",
        "集成了姿势监控、健身跟踪和基于大语言模型的AI聊天功能",
        "包括高级音频校准和社交分享功能"
      ],
      detail: [
        "一款利用AI技术的高级移动应用程序，包括使用IMU传感器的CNN模型进行精确运动检测，以增强SOLOS AIRGO智能眼镜体验。它提供个性化的姿势监控、详细的健身跟踪以及由类似ChatGPT的大语言模型驱动的生产力工具，支持高级AI聊天功能，如用于日程安排的SolosChat™和用于多语言沟通的SolosTranslate™。",
        "采用观察者模式构建了创新的EQ校准系统，集成了独特的点击轮用户界面，便于直观的音调调整，优化音频质量，并于2021年CES上展示。",
        "支持健康和福祉，包括活动跟踪、通过Solos Coach提供的个性化锻炼计划以及社交媒体集成以分享成就，同时提供实用功能，如设备定位、双主机连接和可定制的点击控制。"
      ],
      link: "https://solosglasses.com/pages/solos-airgo-app-entry",
      DocLink: "https://solosglasses.com/pages/solos-apps-solos-airgo",
      YouTubeLink: "",
      TryAndPlayLink: "https://apps.apple.com/us/app/solos-airgo/id1484336694",
      image: require("../images/EQ_Cal_App.png")
    },
    {
      id: "12",
      title: "智能零售购物车",
      brief: [
        "开发Arduino与ThingSpeak之间的物联网平台",
        "创建带有RFID和OLED技术的购物车面板，用于产品扫描"
      ],
      detail: [
        "一个基于物联网的智能零售购物车系统，集成Arduino与ThingSpeak进行数据跟踪。使用RFID和OLED进行产品扫描和显示。",
        "旨在通过实时库存更新简化购物体验。"
      ],
      link: "https://github.com/alan5543/Resume",
      DocLink: "https://github.com/alan5543/Resume",
      YouTubeLink: "",
      TryAndPlayLink: "",
      image: require("../images/smart_retail_app.png")
    },
    {
      id: "13",
      title: "IT物流命令行应用",
      brief: [
        "使用Python Click构建命令行应用，模拟现实物流操作。",
        "该项目涉及为物流任务设置API、数据库查询和命令行控制"
      ],
      detail: [
        "一个使用Python Click构建的命令行应用程序，用于模拟物流操作。包括API集成和数据库查询，以实现高效的任务管理。",
        "为IT物流的自动化和可扩展性设计。"
      ],
      link: "https://github.com/alan5543/delivery_app",
      DocLink: "https://github.com/alan5543/delivery_app",
      YouTubeLink: "",
      TryAndPlayLink: "",
      image: require("../images/logistic_app.jpg")
    },
    {
      id: "14",
      title: "简历与课程作业",
      brief: [
        "大学课程作业的集合。",
        "课程作业主要涉及Java和C++数据结构与算法设计"
      ],
      detail: [
        "一个专注于Java和C++数据结构与算法的大学课程作业存储库。包括关于排序、搜索和图算法的作业。",
        "展示了学术项目和问题解决技能。"
      ],
      link: "https://github.com/alan5543/Resume",
      DocLink: "https://github.com/alan5543/Resume",
      YouTubeLink: "",
      TryAndPlayLink: "",
      image: require("../images/cityu.png")
    }
  ],
  hk: [
  {
    id: "1",
    title: "大型語言模型應用：BotOrNot",
    brief: [
      "BotOrNot 研究如 Phi-3.5-mini-instruct 等小型語言模型（SLM）能否生成與人類撰寫的推文無異的內容，挑戰基於 GPT-4 的檢測器。",
      "透過指令調優、結合維基百科及每日新聞的檢索增強生成（RAG）及後處理技術，該項目旨在揭示機械人檢測系統的漏洞並提供改進見解。"
    ],
    detail: [
      "在對抗社交媒體機械人的持續戰鬥中，BotOrNot 探索小型語言模型（SLM）能否生成類似人類的推文，足以規避如 GPT-4 等先進模型的檢測。此研究解決了經濟高效的 SLM 是否能與大型模型競爭的關鍵問題，突顯未被檢測的機械人傳播虛假資訊的潛在風險。",
      "我們對 Phi-3.5-mini-instruct 進行微調，使用了兩個數據集：10 萬個廣泛過濾的推文及 5 萬個高質量過濾的推文。採用了指令調優、結合維基百科及每日抓取新聞文章的向量數據庫的檢索增強生成（RAG）及詞彙後處理等技術，以增強推文的相關性及人類相似性。",
      "該項目通過在 Detector.ipynb 中實現的基於 GPT-4 的檢測器評估 SLM 的性能，模擬現實世界的機械人檢測競賽。項目組織成分析、數據預處理、評估、圖表、模型訓練及項目海報等文件夾，通過 /model 及 /analysis 中的筆記本確保可重現性。",
      "關鍵發現顯示，SLM 在模仿人類推文方面表現出色，揭示了當前檢測系統的漏洞。預訓練模型及數據集已於 Hugging Face 公開，以支持進一步研究。此研究彌合了模型大小與性能之間的差距，為改進機械人檢測策略提供了可行見解。"
    ],
    link: "https://github.com/alan5543/BotOrNot",
    DocLink: "https://github.com/alan5543/BotOrNot/blob/main/poster/Tweet_Bot_img.png",
    YouTubeLink: "",
    TryAndPlayLink: "https://huggingface.co/AlanYky/phi-3.5_tweets_instruct_50k",
    image: require("../images/BotOrNot.jpg")
  },
  {
    id: "2",
    title: "大型語言模型應用：Telegram 旅遊 AI 代理",
    brief: [
      "Telegram 旅遊 AI 代理是一個智能 Telegram 機械人，通過整合 Gemini 語言模型及模型上下文協議（MCP）客戶端架構簡化旅遊規劃。",
      "提供實時服務，如航班搜索、住宿預訂、行程規劃及本地活動探索，支持英語、漢語及粵語，依託可擴展的 MCP 服務器網絡。"
    ],
    detail: [
      "該項目推出 Telegram 旅遊 AI 代理，一個旨在通過連接用戶與實時旅遊服務增強旅遊規劃的複雜機械人。憑藉 Gemini 語言模型及 MCP 框架的支持，滿足高效、多語言旅遊助手的需要，支持英語、漢語及粵語，服務全球受眾。",
      "該機械人提供全面的旅遊功能，包括航班及住宿搜索（Airbnb 及酒店）、帶餐廳及商店推薦的行程規劃，以及本地活動及目的地探索。提供按價格排序的結構化、基於表情符號的純文本輸出，具備可定制的模型選擇及工具迭代限制配置，確保用戶友好的體驗。",
      "在架構上，機械人作為 MCP 客戶端運行，使用 Gemini 處理 Telegram 輸入以進行自然語言理解，並與專門的 MCP 服務器協調執行預算計算及航班搜索等任務。此模塊化設計允許通過添加新的 MCP 服務器實現可擴展性，自定義服務器（如航班搜索 MCP）及第三方整合（如維基百科 MCP）增強了功能。",
      "設置涉及克隆存儲庫，安裝 Python 3.8+、uv 及 Node.js，並在 .env 文件中配置 API 密鑰。機械人通過 `uv run main.py` 運行，支持一致響應的系統提示及詳細的模型及 MCP 服務器設置配置文件，便於開發及測試。"
    ],
    link: "https://github.com/alan5543/TelegramTravelAgent",
    DocLink: "https://github.com/alan5543/Flight-Search-MCP",
    YouTubeLink: "https://www.youtube.com/watch?v=trWZnNzofPs&ab_channel KaiYamYang",
    TryAndPlayLink: "https://t.me/TravgentBot",
    image: require("../images/agent.jpg")
  },
  {
    id: "3",
    title: "大型語言模型研究：FLAN-Phi-2",
    brief: [
      "使用 FLAN 指令調優及符號調優對微軟 Phi-2（27 億參數）進行高級微調。",
      "證明小型語言模型（SLM）在推理及上下文學習方面可與大型語言模型（LLM）競爭。",
      "開源模型、數據集及評估基準，確保可重現性。"
    ],
    detail: [
      "此研究項目專注於通過對微軟 Phi-2 模型（擁有 27 億參數）實施複雜微調技術提升小型語言模型（SLM）的能力。該項目挑戰僅大型語言模型（LLM）能執行上下文學習及算法推理等複雜任務的普遍假設。通過利用兩種高級調優方法——指令調優及符號調優——我們證明如 Phi-2 的緊湊模型可實現與更大模型競爭的性能，同時更高效且易於訪問。",
      "指令調優過程涉及使用 FLAN 數據集集合調整 Phi-2，該集合包含以自然語言指令形式表達的多樣化任務。此方法使模型能通過理解及遵循類人指令在未見任務上更好地泛化。符號調優方法通過在訓練期間將傳統基於文本的標籤替換為任意符號，進一步增強 Phi-2 的魯棒性。此舉迫使模型專注於潛在模式及推理，而非依賴語義線索，提升了其處理抽象及結構化任務的能力。",
      "為嚴格評估調優模型，我們在多個基準測試中進行了廣泛實驗，包括 Big Bench 評估套件，用於測試推理及問題解決技能，以及用於仇恨言論檢測、氣候主題分類、主觀性分析等的專門數據集。我們還引入了翻轉標籤任務，以評估模型對反直覺標籤方案的適應性。結合自動指標進行人類評估，以確保全面的性能分析。結果在詳細的筆記本及 Excel 表格中系統記錄，比較了 Phi-2 的輸出與 Mistral 及 ChatGPT 等更大模型的輸出。",
      "該項目的所有組件——包括微調模型（FLAN-Phi-2 及 FLAN-Phi-2-Symbol）、預處理數據集、訓練腳本及評估工具——均已在 Hugging Face 及 GitHub 上公開。此開源方法確保了可重現性，並鼓勵對高效語言模型的進一步研究。項目結果突顯了 SLM 在資源受限環境中的潛力，為需要較低計算開銷但不犧牲性能的應用提供了可行的 LLM 替代方案。"
    ],
    link: "https://github.com/alan5543/phi-2-tuning",
    DocLink: "https://huggingface.co/ChunB1/phi-2_OpenOrca_cot_only_symbol",
    YouTubeLink: "",
    TryAndPlayLink: "https://huggingface.co/ChunB1/phi-2_OpenOrca_cot_only_symbol",
    image: require("../images/phi-2.png")
  },
  {
    id: "4",
    title: "大型語言模型研究：TinyReview",
    brief: [
      "展示如何通過預處理技術增強小型語言模型（SLM）以媲美更大模型的性能。",
      "採用定制的 GPT-Neo 架構及基於詞性過濾的亞馬遜評論專門數據集。",
      "以標準 LLM 的 1/10 計算成本實現可比較的文本生成質量。"
    ],
    detail: [
      "該項目提出一個通過高級數據預處理及針對性數據集構建優化小型語言模型（SLM）的全面框架。以 GPT-Neo 為基礎架構，我們開發了專為高效訓練定制數據集而調整的修改變壓器塊及嵌入層。我們的預處理流水線實現了包括詞性過濾（隔離動詞/名詞/形容詞）、詞彙優化及句子結構規範化等創新技術。",
      "我們從亞馬遜圖書評論中構建了四個專門數據集，每個數據集使用不同的語言過濾器處理：1）未經處理的原始數據，2）僅常用動詞，3）名詞+動詞+形容詞組合，4）名詞+動詞+形容詞+副詞結構。這些數據集旨在測試特定語法元素如何影響模型在語法準確性（通過 GPT-4 評估測量）、創造性多樣性（通過人類評估）及推理一致性（通過手動評分）方面的性能。",
      "評估框架結合了使用 GPT-3.5/GPT-4 的自動化分析及在三個維度上的手動評分：語法正確性（句子結構正確性）、創造性（輸出新穎性）及一致性（邏輯流暢性）。我們的結果顯示，基於詞性過濾的數據集（名詞+動詞+形容詞+副詞）在語法準確性上達到了 GPT-3.5 的 92%，而僅使用 10% 的計算資源。該模型在長篇響應的敘事連貫性方面表現尤為出色。",
      "包括定制 GPT-Neo 實現、預處理腳本及評估筆記本在內的所有組件均已公開。該項目證明經過策略性預處理的 SLM 可作為特定 NLP 任務的可行替代方案，提供 8-10 倍的推理速度及顯著降低的內存需求，而不需在質量上作出重大妥協。此工作對於邊緣部署及資源受限環境尤為相關。"
    ],
    link: "https://github.com/alan5543/tinyReview",
    DocLink: "https://huggingface.co/ChunB1/TinyReviews_adv",
    YouTubeLink: "",
    TryAndPlayLink: "https://huggingface.co/ChunB1/TinyReviews_adv",
    image: require("../images/tinyReview.png")
  },
  {
    id: "5",
    title: "全棧項目：McGill UAsk",
    brief: [
      "增強麥吉爾大學學生與教師互動的全棧 MERN 平台。",
      "結合 Ed 及 Slack 的功能，具備課程管理、討論串及實時通知。",
      "模塊化架構，包含用戶認證、電子郵件驗證及基於角色的訪問控制。"
    ],
    detail: [
      "McGill UAsk 是一個全面的學術溝通平台，旨在通過專門的討論工具彌合學生與教師之間的差距。基於 MERN 技術棧（MongoDB、Express.js、React、Node.js）構建，系統具有雙模式界面（明暗模式），並針對桌面及移動設備優化了響應式設計。平台的核心創新在於其混合公開/私人討論系統，允許課程範圍的公告及助教與學生之間的機密對話，全部通過統一界面管理。",
      "技術實現遵循模塊化架構，包含五個獨立組件：1）用戶管理（使用麥吉爾電子郵件驗證的 JWT 認證），2）課程管理（用於註冊的邀請碼系統），3）公開帖子（支持點贊的討論串），4）私人帖子（為助教/教授提供基於角色的訪問控制），5）通知系統（由 Socket.io 支持的實時警報）。MongoDB 數據庫採用三種集合類型：用戶配置文件（含角色權限）、課程註冊（連接用戶與課程）及帖子層級（含嵌套評論結構）。",
      "安全功能包括加密密碼存儲（bcrypt）、CSRF 保護及使用存儲在獨立集合中的唯一令牌進行電子郵件驗證。通知系統觸發帖子回覆、截止日期提醒及課程更新的警報，並跟踪已讀/未讀狀態。性能優化包括分頁加載帖子、在經常查詢的字段（courseID、userID）上進行 MongoDB 索引，以及 React 記憶化以減少重新渲染。",
      "該平台通過 150 多個並發用戶在學生、助教及教授三種角色下的壓力測試，展示了 98% 的帖子傳遞成功率及核心操作低於 500 毫秒的響應時間。與現有解決方案相比，UAsk 在試點研究中將與課程相關的電子郵件量減少了 72%，同時保持 24/7 可用性。代碼庫設計具備擴展性，模塊之間的清晰接口允許未來添加如文件共享或日曆整合等功能，而無需結構更改。"
    ],
    link: "https://github.com/alan5543/mcgill-cs-chat",
    DocLink: require("../documents/Final Report_McGill UAsk.pdf"),
    YouTubeLink: "https://www.youtube.com/watch?v=bel31lMmFdE&ab_channel=KaiYamYang",
    TryAndPlayLink: "https://mcgill-uask.cs.mcgill.ca/",
    image: require("../images/uask.png")
  },
  {
    id: "6",
    title: "機器學習研究：強化學習算法基準",
    brief: [
      "對離散（期望 SARSA、DDQN）與連續（TRPO、PPO）強化學習策略進行全面比較。",
      "在 OpenAI Gym 及 MuJoCo 上評估三種狀態離散化方法（傅里葉、RBF、瓦片編碼）。",
      "通過收斂速度、偏差及平均回報指標量化性能。"
    ],
    detail: [
      "此研究通過在 OpenAI Gym 及 MuJoCo 環境中的嚴格基準測試，系統性地評估用於連續控制任務的強化學習算法。研究比較了離散策略方法（期望 SARSA 及雙重 DQN）與連續策略方法（信任區域策略優化及近端策略優化），實現了三種狀態空間離散化技術——傅里葉基函數、徑向基函數（RBF）及瓦片編碼——以彌合離散與連續方法之間的差距。",
      "實驗框架採用標準化的評估指標，包括收斂速度（以回合/時間步長測量）、策略偏差（與最優動作的偏差）及平均回報（每回合未折扣的獎勵）。每個算法在包括 MuJoCo 的 Humanoid-v4 及 Gym 的 Pendulum-v1 的基準任務上進行了測試，通過網格搜索調整超參數。離散方法使用具有優先採樣的經驗回放緩衝區，而連續方法實現了自適應步長控制及優勢歸一化。",
      "關鍵發現表明，PPO 在高維空間中具有卓越的樣本效率（在 Humanoid 中比 TRPO 快 38% 收斂），而瓦片編碼離散化使 DDQN 在較簡單任務中達到了連續策略性能的 92%。傅里葉基方法在具有週期性動態的環境中顯示出特殊效果（在 Pendulum 中比 RBF 低 15% 的偏差）。所有實現包括並行環境採樣及 GPU 加速的神經網絡後端，以實現高效訓練。",
      "存儲庫提供了所有算法的模塊化實現，以及實驗再現的配置文件，包括用於離散化的自定義 Gym 包裝器及全面的訓練指標記錄。結果突顯了算法類別之間的權衡，顯示離散方法在低自由度任務中的競爭性能，儘管其架構更簡單，而連續方法在複雜運動挑戰中佔據主導地位。此工作為根據環境特性及計算約束選擇算法的實踐者提供了可行見解。"
    ],
    link: "https://github.com/alan5543/RL-algorithm-benchmark",
    DocLink: "https://github.com/alan5543/RL-algorithm-benchmark",
    YouTubeLink: "",
    TryAndPlayLink: "",
    image: require("../images/MC_Summary_v2.png")
  },
  {
    id: "7",
    title: "iOS 開發：雜貨共享應用",
    brief: [
      "帶收據掃描及自動賬單拆分的群體雜貨管理應用。",
      "結合費用跟踪應用及社交雜貨清單的功能。",
      "使用 Gemini API 進行 OCR 收據處理，帶有確認工作流程。"
    ],
    detail: [
      "Grocery Room 為室友、情侶及家庭設計的共享家庭費用管理的綜合解決方案。該應用具有雙組件系統：1）帶私有/共享備忘錄的協作雜貨清單，2）通過收據掃描實現自動化費用跟踪。技術實現使用了 MERN 技術棧及 PostgreSQL 進行關係數據（用戶、群體、債務）管理，並使用 JSONB 字段存儲靈活的購物清單項目。收據處理流水線整合了 Gemini API 進行 OCR，隨後是用戶可驗證提取項目、分配所有權（我/特定成員/平均分配）並分類購買的確認界面。",
      "關鍵技術組件包括：帶電子郵件驗證的 JWT 認證、實時債務計算算法及臨時存儲未確認掃描的待處理收據系統（24 小時後自動過期）。數據庫模式強制執行用戶、群體及交易之間的關係完整性，同時通過 PostgreSQL 的 JSONB 類型允許靈活的項目存儲。後端實現了用於拆分項目的比例稅/折扣分配的自定義邏輯，在收據及單個項目級別計算債務，以實現精確的責任歸屬。",
      "前端具有響應式儀表板，包括：1）用於群體切換的側邊欄導航，2）基於選項卡訪問核心功能（概覽、購物清單、添加、歷史、設置），3）用於收據上傳的漸進增強——包括相機捕捉、圖庫選擇及手動輸入後備。概覽視圖使用力導向圖可視化債務關係，而歷史記錄部分支持按日期範圍、類別（例如，食品雜貨、家居）及單個群體成員進行高級過濾。",
      "安全措施包括：bcrypt 密碼哈希、短期過期的 JWT 刷新令牌及對所有資源訪問的嚴格所有權驗證。系統經過負載測試，可處理每個家庭群體 50 多個並發用戶，通過 Redis 緩存優化頻繁訪問的概覽及對所有外鍵的數據庫索引進行性能優化。完整項目——包括 API 文檔、設置指南及示例測試數據——作為開源存儲庫提供，以鼓勵社區採用及擴展。"
    ],
    link: "https://github.com/alan5543/Grocery-Share-API",
    DocLink: "https://github.com/alan5543/Grocery-Share-API",
    YouTubeLink: "https://www.youtube.com/watch?v=wFBS9rF1FWI&ab_channel=KaiYamYang",
    TryAndPlayLink: "",
    image: require("../images/grocery.jpg")
  },
  {
    id: "8",
    title: "Lalamove",
    brief: [
      "使用現代 Android 技術棧（Kotlin、Compose、MVVM）領導物流司機應用的功能開發。",
      "實現了適配本地化的日期時間格式及 NTP 同步以確保全球一致性。",
      "參與了 LLM+ Delivery Plus 項目，採用混合原生-Webview 架構。"
    ],
    detail: [
      "作為 Lalamove 的 Android 工程師，我通過架構改進及功能開發推動了面向司機的移動應用的演進。領導了向清潔架構（MVVM）的遷移，實現了數據（Repository）、域（Use Cases）及呈現（ViewModels）的完全分離。使用 Jetpack Compose 及 StateFlow 實現了響應式用戶界面，通過編譯時安全性將與視圖相關的錯誤減少了 40%。技術棧利用 Dagger/Hilt 進行依賴注入，Room 進行本地持久化，Retrofit 進行網絡操作，全部使用 Kotlin 編寫，並使用協程進行異步操作。",
      "關鍵技術貢獻包括：1）動態日期時間格式系統，自動適配用戶的本地設置顯示日期/時間，同時在後端通信中保持 ISO-8601，2）使用 Android 的 SntpClient 實現 NTP 時鐘同步，防止在交付證明中作弊，3）基於 CameraX 的貼紙相機模塊，帶有用於文檔掃描的可重用組件。開發了關鍵功能，如使用 Google Maps SDK 及後台定位服務實現地理圍欄的當日訂單處理及交付/取貨證明工作流程。",
      "參與了 LLM+ Delivery Plus 計劃，構建了混合界面，將原生 ConstraintLayout 用戶界面與基於 Webview 的內容融合，建立了用於實時數據同步的雙向 JavaScript 橋樑。維護了使用 Bitrise 的嚴格 CI/CD 流水線，通過 JUnit 及 MockK 測試強制執行 85% 以上的代碼覆蓋率。參與了使用 Spring Boot（Java）及 PHP 開發後端服務的 API 開發，確保了移動端與後端的無縫整合。使用 Jira 參與了敏捷 Scrum 儀式，始終在衝刺截止日期前交付功能，同時指導初級團隊成員遵循 SOLID 原則及模塊化設計。",
      "技術環境包括：Kotlin（100% 採用）、Jetpack Compose、CameraX、WorkManager、Firebase Crashlytics 及 GraphQL。性能優化通過後台線程優化及嚴格的主線程策略執行將 ANR 率降低了 35%。該應用為東南亞 50,000 多名每日活躍司機提供服務，在 Play Store 上獲得 4.7/5 的評分。"
    ],
    link: "https://play.google.com/store/apps/details?id=com.lalamove.global.driver.sea",
    DocLink: "https://play.google.com/store/apps/details?id=com.lalamove.global.driver.sea",
    YouTubeLink: "",
    TryAndPlayLink: "https://play.google.com/store/apps/details?id=com.lalamove.global.driver.sea",
    image: require("../images/lalamove.png")
  },
  {
    id: "9",
    title: "新聞學習平台：NLP 與文本挖掘",
    brief: [
      "一個基於客戶端-服務器的 Web 項目，結合 NLP 技術、機器學習、文本挖掘及網絡爬蟲。",
      "分析社交媒體文本，進行摘要、分類及預測。"
    ],
    detail: [
      "NewsPoint 是一個全棧 Web 應用程序，旨在通過文本挖掘及 NLP 技術增強報紙閱讀體驗。它為用戶提供了深度閱讀、摘要及新聞文章分析的工具。平台支持通過網絡爬蟲自動提取文章及手動輸入，使用 Python Flask 後端進行處理。關鍵功能包括文本摘要、關鍵點提取、情感分析及 Twitter 意見聚合。系統採用非監督學習（NLP 算法）及監督學習（文本預測及分類）提供洞察。",
      "基於客戶端-服務器架構，NewsPoint 使用 RESTful API 在前端與後端之間進行通信。服務器處理用戶請求，執行分析並以 JSON 格式返回結果，然後使用 Jinja2 及 Bootstrap 進行可視化，打造響應式用戶界面。平台針對桌面及移動設備進行了優化，確保可訪問性。",
      "最終，NewsPoint 旨在簡化複雜的新聞文章，通過智能摘要及分析工具幫助用戶開發個性化的閱讀策略。它作為一個全面的新聞情報平台，使資訊消費更高效且富有洞察力。"
    ],
    link: "https://github.com/alan5543/FYP-Project",
    DocLink: require("../documents/news_platform_document.pdf"),
    YouTubeLink: "https://www.youtube.com/watch?v=wFBS9rF1FWI&ab_channel=KaiYamYang",
    TryAndPlayLink: "",
    image: require("../images/news_app.png")
  },
  {
    id: "10",
    title: "個人網站設計",
    brief: [
      "此網站使用 React 及 Material UI 展示楊凱的個人簡介。"
    ],
    detail: [
      "我的動態個人組合網站展示了我的技能、項目及更新，使用現代 Web 技術構建，便於維護及快速更新。我的前端技能通過乾淨的 HTML、CSS 及 JavaScript 代碼得以突出，定制的 CSS 動畫創造了引人入勝的過渡及效果。使用如 Webflow 的快速編碼工具進行快速開發，我整合了定制代碼以提供獨特而精緻的界面。",
      "該網站具有響應式設計，可在各種設備上無縫訪問，並支持實時內容更新以保持項目的最新狀態。我對用戶體驗設計的關注確保了沉浸式用戶體驗，憑藉直觀的導航及精心設計的 CSS 動畫（如平滑懸停效果）提升了用戶參與度。此快速編碼與定制開發的結合創造了一個以用戶為中心、引人入勝的動態組合網站。"
    ],
    link: "https://github.com/alan5543/alan-yang-profilio-app",
    DocLink: "",
    YouTubeLink: "",
    TryAndPlayLink: "https://alan5543.github.io/alan-yang-profilio-app/",
    image: require("../images/profilo_app.png")
  },
  {
    id: "11",
    title: "Solos AirGo™ 應用",
    brief: [
      "為 SOLOS AIRGO 智能眼鏡開發的 AI 驅動移動應用程序，帶有基於 CNN 的運動檢測。",
      "整合了姿勢監控、健身跟踪及基於大型語言模型的 AI 聊天功能。",
      "包括高級音頻校準及社交分享功能。"
    ],
    detail: [
      "一款利用 AI 技術的高級移動應用程序，包括使用 IMU 傳感器的 CNN 模型進行精確運動檢測，以增強 SOLOS AIRGO 智能眼鏡體驗。它提供個性化的姿勢監控、詳細的健身跟踪及由類似 ChatGPT 的大型語言模型驅動的生產力工具，支持高級 AI 聊天功能，如用於日程安排的 SolosChat™ 及用於多語言溝通的 SolosTranslate™。",
      "採用觀察者模式構建了創新的 EQ 校準系統，整合了獨特的點擊輪用戶界面，便於直觀的音調調整，優化音頻質量，並於 2021 年 CES 上展示。",
      "支持健康及福祉，包括活動跟踪、通過 Solos Coach 提供的個性化鍛煉計劃及社交媒體整合以分享成就，同時提供實用功能，如設備定位、雙主機連接及可定制的點擊控制。"
    ],
    link: "https://solosglasses.com/pages/solos-airgo-app-entry",
    DocLink: "https://solosglasses.com/pages/solos-apps-solos-airgo",
    YouTubeLink: "",
    TryAndPlayLink: "https://apps.apple.com/us/app/solos-airgo/id1484336694",
    image: require("../images/EQ_Cal_App.png")
  },
  {
    id: "12",
    title: "智能零售購物車",
    brief: [
      "開發 Arduino 與 ThingSpeak 之間的物聯網平台。",
      "創建帶有 RFID 及 OLED 技術的購物車面板，用於產品掃描。"
    ],
    detail: [
      "一個基於物聯網的智能零售購物車系統，整合 Arduino 與 ThingSpeak 進行數據跟踪。使用 RFID 及 OLED 進行產品掃描及顯示。",
      "旨在通過實時庫存更新簡化購物體驗。"
    ],
    link: "https://github.com/alan5543/Resume",
    DocLink: "https://github.com/alan5543/Resume",
    YouTubeLink: "",
    TryAndPlayLink: "",
    image: require("../images/smart_retail_app.png")
  },
  {
    id: "13",
    title: "IT 物流命令行應用",
    brief: [
      "使用 Python Click 構建命令行應用，模擬現實物流操作。",
      "該項目涉及為物流任務設置 API、數據庫查詢及命令行控制。"
    ],
    detail: [
      "一個使用 Python Click 構建的命令行應用程序，用於模擬物流操作。包括 API 整合及數據庫查詢，以實現高效的任務管理。",
      "為 IT 物流的自動化及可擴展性設計。"
    ],
    link: "https://github.com/alan5543/delivery_app",
    DocLink: "https://github.com/alan5543/delivery_app",
    YouTubeLink: "",
    TryAndPlayLink: "",
    image: require("../images/logistic_app.jpg")
  },
  {
    id: "14",
    title: "簡歷與課程作業",
    brief: [
      "大學課程作業的集合。",
      "課程作業主要涉及 Java 及 C++ 數據結構與算法設計。"
    ],
    detail: [
      "一個專注於 Java 及 C++ 數據結構與算法的大學課程作業存儲庫。包括關於排序、搜索及圖算法的作業。",
      "展示了學術項目及問題解決技能。"
    ],
    link: "https://github.com/alan5543/Resume",
    DocLink: "https://github.com/alan5543/Resume",
    YouTubeLink: "",
    TryAndPlayLink: "",
    image: require("../images/cityu.png")
  }
]
}