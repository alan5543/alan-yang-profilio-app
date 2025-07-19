import React from 'react';
import { useTranslation } from 'react-i18next';
import './skills.css';
import { Chip } from '@mui/material';
import { FaRobot, FaReact, FaTerminal, FaCloud, FaProjectDiagram, FaUsers } from 'react-icons/fa';
import { personalData } from '../../data/personal';

// Map skill categories to their respective icons with custom color
const iconMap = {
  'Machine Learning': <FaRobot size={80} color="#FFF" />,
  'Frontend Skills': <FaReact size={80} color="#FFF" />,
  'Backend Skills': <FaTerminal size={80} color="#FFF" />,
  'Cloud and Database': <FaCloud size={80} color="#FFF" />,
  'Project Management Skills': <FaProjectDiagram size={80} color="#FFF" />,
  'Soft Skills': <FaUsers size={80} color="#FFF" />,
  'Apprentissage automatique': <FaRobot size={80} color="#FFF" />,
  'Compétences frontend': <FaReact size={80} color="#FFF" />,
  'Compétences backend': <FaTerminal size={80} color="#FFF" />,
  'Cloud et bases de données': <FaCloud size={80} color="#FFF" />,
  'Compétences en gestion de projet': <FaProjectDiagram size={80} color="#FFF" />,
  'Compétences interpersonnelles': <FaUsers size={80} color="#FFF" />,
  '机器学习': <FaRobot size={80} color="#FFF" />,
  '前端技能': <FaReact size={80} color="#FFF" />,
  '后端技能': <FaTerminal size={80} color="#FFF" />,
  '云和数据库': <FaCloud size={80} color="#FFF" />,
  '项目管理技能': <FaProjectDiagram size={80} color="#FFF" />,
  '软技能': <FaUsers size={80} color="#FFF" />,
  '機器學習': <FaRobot size={80} color="#FFF" />,
  '前端技能': <FaReact size={80} color="#FFF" />,
  '後端技能': <FaTerminal size={80} color="#FFF" />,
  '雲端與數據庫': <FaCloud size={80} color="#FFF" />,
  '項目管理技能': <FaProjectDiagram size={80} color="#FFF" />,
  '軟技能': <FaUsers size={80} color="#FFF" />,
};

const Skills = () => {
  const { t, i18n } = useTranslation();

  // Select personalData based on current language, fallback to 'en'
  const data = personalData[i18n.language] ? personalData[i18n.language][0] : personalData['en'][0];

  return (
    <div className="skillContainer" id="personal">
      <div className="skillstitle">
        <h1 className="skillstitleName">{t('skills.title')}</h1>
        <h1 className="skillsSubtitleName">{t('skills.subtitle')}</h1>
      </div>
      
      <ul className="cards">
        {data.skills.map((item) => (
          <li key={item.category} className="cardListItem">
            <div className="card">
              <div className="cardImgContainer">
                {iconMap[item.category]}
              </div>
              <div className="cardContent">
                <div className="cardHeader">
                  <h3 className="cardHeaderTitle">{item.category}</h3>
                  <span className="cardHeaderStatus">{item.experience}</span>
                </div>
                <div className="cardDetails">
                  {item.elements.map((skill) => (
                  <Chip
                    key={skill}
                    className="cardContentElement"
                    label={skill}
                    variant="contained"
                    color="primary"
                    sx={{
                      backgroundColor: '#42A5F5', // Default background (hover color from original)
                      color: '#fff', // Default text color (hover text color from original)
                      '&:hover': {
                        backgroundColor: '#1976D2', // Hover background (original default primary color)
                        color: '#fff', // Keep text color same or adjust if needed
                        transform: 'scale(1.1)',
                        transition: 'all 0.3s ease',
                      },
                    }}
                  />
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;