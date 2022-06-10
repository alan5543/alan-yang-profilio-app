import React from 'react'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react'
import experienceData from '../../data/experience.json'
import './experience.css'
import ExperienceItem from './experienceItem/experienceItem'

const Experience = () => {
  return (
    <div className='experienceContainer' id="experience">

        <div className='experienceTitleContainer'  >
            <h1 className="experienceContainerTitleName" >My Experience</h1>
            <h1 className="experienceContainerSubtitleName">Explore my personal achievements</h1>
        </div>

        <div className='timelineContainer'>
            <Timeline lineColor={'#ddd'}>
                {experienceData.map((item) => {
                    return (
                        <TimelineItem
                            key={item.key}
                            dateText={item.date}
                            dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
                            bodyContainerStyle={{
                            background: item.isWork ? '#ddd' : '#faebd7',
                            padding: '30px',
                            borderRadius: '8px',
                            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                            }}
                            className='experienceItemContainer'
                        >
                            <h3 className='experienceItemTitle'>{item.company.toUpperCase()}</h3>
                            <h4 className='experienceItemSubtitle'>{item.position}</h4>
                            
                            {item.tasks.map((task) => {
                                return (
                                    <li className='experienceItemContent'>{task}</li>
                                );
                            })}

                            <ExperienceItem listData={item.skills} className='experienceItemSkills'/>
                        </TimelineItem>
                    );
                })}
            </Timeline>
        </div>


    </div>
  )
}

export default Experience