import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import experienceData from '../../data/experience.json';
import './experience.css';
import ExperienceItem from './experienceItem/experienceItem';
import { FaBriefcase as WorkIcon, FaGraduationCap as SchoolIcon } from 'react-icons/fa';

const Experience = () => {
  return (
    <div className="experienceContainer" id="experience">
      <div className="experienceTitleContainer">
        <h1 className="experienceContainerTitleName">My Pathway</h1>
        <h1 className="experienceContainerSubtitleName">Explore my professional experience</h1>
      </div>

      <div className="timelineContainer">
        <VerticalTimeline 
            lineColor={'#ddd'}
            layout="2-columns" // Better for mobile
            animate={true} // Explicitly enable animations
        >
            {experienceData.map((item) => {
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
                    <h3 className="experienceItemTitle">{item.company.toUpperCase()}</h3>
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