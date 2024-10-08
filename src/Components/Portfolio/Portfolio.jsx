import React from 'react'
import './Portfolio.css'
import Work_Data from '../../assets/workData'

const Portfolio = () => {
  return (
    <div id='portfolio' className = 'work'>
        <div className="workTitle">
            <h1>My Latest Work</h1>
        </div>
        <div className="container">
            {Work_Data.map((work, index)=> {
              return <>
              <li key={index}>
                <a href={work.link} target="_blank" rel="noopener noreferrer">
                  <img src={work.img} alt={work.name} />
                  <p>{work.name}</p>
                </a>
              </li>
              </>
            })}
        </div>
    </div>
  )
}

export default Portfolio