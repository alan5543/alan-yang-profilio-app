import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import experienceData from '../../data/experience.json';
import './experience.css';
import ExperienceItem from './experienceItem/experienceItem';
import { FaBriefcase as WorkIcon, FaGraduationCap as SchoolIcon, FaLink } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { IconButton } from '@mui/material';


const Experience = () => {
    const { t, i18n } = useTranslation();
    
    // Select experienceData based on current language, fallback to 'en'
    const data = experienceData[i18n.language] || experienceData['en'];
    
  return (
    <div className="experienceContainer" id="experience">
      <div className="experienceTitleContainer">
        <h1 className="experienceContainerTitleName">{t('experience.title')}</h1>
        <h1 className="experienceContainerSubtitleName">{t('experience.subtitle')}</h1>
      </div>

      <div className="timelineContainer">
        <VerticalTimeline 
            lineColor={'#ddd'}
            layout="2-columns" // Better for mobile
            animate={true} // Explicitly enable animations
        >
            {data.map((item) => {
            const isWork = item.isWork;
            const icon = isWork ? <WorkIcon /> : <SchoolIcon />;
            
            return (
                <VerticalTimelineElement
                key={item.key}
                date={item.date}
                dateClassName="timeline-date"
                contentStyle={{
                    background: isWork ? '#f5f5f5' : '#fff8e1', // Softer colors
                    // padding: '20px 30px',
                    borderRadius: '8px',
                    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
                    borderTop: `4px solid ${isWork ? '#61b8ff' : '#ffb74d'}`,
                }}
                contentArrowStyle={{ 
                    borderRight: `7px solid ${isWork ? '#61b8ff' : '#ffb74d'}` 
                }}
                iconStyle={{ 
                    background: isWork ? '#61b8ff' : '#ffb74d', 
                    color: '#fff',
                    boxShadow: `0 0 0 4px ${isWork ? '#e3f2fd' : '#fff3e0'}` 
                }}
                icon={icon}
                className="experienceItemContainer"
                >
                    <div className="experience-header">
                        <div className="experience-title-wrapper">
                            <h3 className="experienceItemTitle">{item.company.toUpperCase()}</h3>
                            {item.website && (
                                <IconButton
                                href={item.website}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`Visit ${item.company} website`}
                                sx={{
                                    color: '#61b8ff',
                                    '&:hover': {
                                    color: '#42A5F5', // Match Skills.js chip hover
                                    transform: 'scale(1.2)', // Scale up on hover
                                    transition: 'all 0.3s ease',
                                    },
                                }}
                                >
                                <FaLink size={20} />
                                </IconButton>
                            )}
                        </div>
                    <h4 className="experienceItemSubtitle">{item.position}</h4>
                </div>
                
                <ul className="task-list">
                    {item.tasks.map((task, index) => (
                    <li key={index} className="experienceItemContent">
                        {task}
                    </li>
                    ))}
                </ul>
                
                <div className="skills-container">
                    <ExperienceItem 
                    listData={item.skills} 
                    className="experienceItemSkills" 
                    />
                </div>
                </VerticalTimelineElement>
            );
            })}
        </VerticalTimeline>
        </div>
    </div>
  );
};

export default Experience;