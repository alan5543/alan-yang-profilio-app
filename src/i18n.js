import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          nav: {
            home: 'Home',
            about: 'About Me',
            project: 'Project Showcase',
            experience: 'My Pathway',
            skills: 'Professional Skills',
            contact: 'Contact Me',
          },
          home: {
            greeting: 'Hello My Name is',
            button: 'Know More About Me',
          },
          about: {
            title: 'About Me',
            button: 'Download CV',
          },
          experience: {
            title: 'My Pathway',
            subtitle: 'Explore my professional experience',
            skills: 'Skills Involved',
          },
          project: {
            title: 'My Project',
            subtitle: 'Scroll and see my showcases',
            noProjects: 'No projects available',
            nextSlide: 'Next slide',
            prevSlide: 'Previous slide',
            openProject: 'Open Project',
            projectCode: 'Project Code',
            sourceCode: 'Source Code',
            documentation: 'Documentation',
            youtube: 'YouTube',
            liveDemo: 'Live Demo',
            close: 'Close',
          },
          skills: {
            title: 'Professional Skills',
            subtitle: 'Never Stop Learning, Never Stop Growing...',
          },
          footer: {
            copyright: 'Copyright ©',
            website: "Alan Yang's Website",
            emailSubject: 'Question to Alan Yang',
          },
        },
      },
      fr: {
        translation: {
          nav: {
            home: 'Accueil',
            about: 'À propos de moi',
            project: 'Vitrine de projets',
            experience: 'Mon parcours',
            skills: 'Compétences professionnelles',
            contact: 'Contactez-moi',
          },
          home: {
            greeting: 'Bonjour, je m’appelle',
            button: 'En savoir plus sur moi',
          },
          about: {
            title: 'À propos de moi',
            button: 'Télécharger le CV',
          },
          experience: {
            title: 'Mon parcours',
            subtitle: 'Découvrez mon expérience professionnelle',
            skills: 'Compétences impliquées',
          },
          project: {
            title: 'Mes projets',
            subtitle: 'Faites défiler pour voir mes vitrines',
            noProjects: 'Aucun projet disponible',
            nextSlide: 'Diapositive suivante',
            prevSlide: 'Diapositive précédente',
            openProject: 'Ouvrir le projet',
            projectCode: 'Code du projet',
            sourceCode: 'Code source',
            documentation: 'Documentation',
            youtube: 'YouTube',
            liveDemo: 'Démo en direct',
            close: 'Fermer',
          },
          skills: {
            title: 'Compétences professionnelles',
            subtitle: 'Ne jamais cesser d’apprendre, ne jamais cesser de grandir...',
          },
          footer: {
            copyright: 'Droit d’auteur ©',
            website: 'Site Web d’Alan Yang',
            emailSubject: 'Question à Alan Yang',
          },
        },
      },
      zh: {
        translation: {
          nav: {
            home: '首页',
            about: '关于我',
            project: '项目展示',
            experience: '我的历程',
            skills: '专业技能',
            contact: '联系我',
          },
          home: {
            greeting: '你好，我的名字是',
            button: '了解更多关于我的信息',
          },
          about: {
            title: '关于我',
            button: '下载简历',
          },
          experience: {
            title: '我的历程',
            subtitle: '探索我的职业经历',
            skills: '涉及的技能',
          },
          project: {
            title: '我的项目',
            subtitle: '滚动查看我的展示',
            noProjects: '没有可用的项目',
            nextSlide: '下一页',
            prevSlide: '上一页',
            openProject: '打开项目',
            projectCode: '项目代码',
            sourceCode: '源代码',
            documentation: '文档',
            youtube: 'YouTube',
            liveDemo: '实时演示',
            close: '关闭',
          },
          skills: {
            title: '专业技能',
            subtitle: '永不停止学习，永不停止成长...',
          },
          footer: {
            copyright: '版权 ©',
            website: 'Alan Yang 的网站',
            emailSubject: '致 Alan Yang 的问题',
          },
        },
          },
      hk: {
    "translation": {
      "nav": {
        "home": "主頁",
        "about": "關於本人",
        "project": "項目展示",
        "experience": "個人經歷",
        "skills": "專業技能",
        "contact": "聯繫方式"
      },
      "home": {
        "greeting": "您好，本人姓名為",
        "button": "了解更多關於本人的資訊"
      },
      "about": {
        "title": "關於本人",
        "button": "下載履歷"
      },
      "experience": {
        "title": "個人經歷",
        "subtitle": "探索本人的職業歷程",
        "skills": "相關技能"
      },
      "project": {
        "title": "個人項目",
        "subtitle": "瀏覽本人的項目展示",
        "noProjects": "暫無可展示的項目",
        "nextSlide": "下一頁",
        "prevSlide": "上一頁",
        "openProject": "開啟項目",
        "projectCode": "項目代碼",
        "sourceCode": "原始碼",
        "documentation": "文件資料",
        "youtube": "YouTube",
        "liveDemo": "實時展示",
        "close": "關閉"
      },
      "skills": {
        "title": "專業技能",
        "subtitle": "持續學習，追求卓越",
      },
      "footer": {
        "copyright": "版權所有 ©",
        "website": "楊佳鑫個人網站",
        "emailSubject": "致楊佳鑫的查詢"
      }
    }
        },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;