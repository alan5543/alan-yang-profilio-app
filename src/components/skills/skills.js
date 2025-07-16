import React from 'react';
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
};

const Skills = () => {
  return (
    <div className="skillContainer" id="personal">
      <div className="skillstitle">
        <h1 className="skillstitleName">Professional Skills</h1>
        <h1 className="skillsSubtitleName">Never Stop Learning, Never Stop Growing...</h1>
      </div>
      
      <ul className="cards">
        {personalData[0].skills.map((item) => (
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