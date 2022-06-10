import React from 'react'
import './skills.css'
import { Chip } from '@mui/material'
import { personalData } from '../../data/personal'


const Skills = () => {

  return (
      <div className='skillContainer' id='personal'>
        <div className="skillstitle">
            <h1 className="skillstitleName">Personal Skills</h1>
            <h1 className="skillsSubtitleName">My Skillsets and Abilities</h1>
        </div>
        
        <ul className='cards'>
            {personalData[0].skills.map((item) => {
                return (
                    <li key={item.category} className="cardListItem">
                        <div className='card'>
                            <div className='cardImgContainer'>
                                <img src={item.path} className="cardImage" alt={item.category} />
                            </div>
                            
                            <div className='cardContainer'>
                                <div className='cardHeader'>
                                    <svg className="cardShape" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                    <div className='cardHeaderText'>
                                        <h3 className='cardHeaderTitle'>{item.category}</h3>
                                        <span className='cardHeaderStatus'>{item.experience}</span>
                                    </div>
                                </div>
                                <div className='cardContent'>
                                    {item.elements.map((skill) => {
                                        return(
                                            <Chip key={skill} className='cardContentElement' label={skill} variant="outlined" color="info" sx={{'&:hover': {backgroundColor: "black",},}}/>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
      </div>
  )
}

export default Skills