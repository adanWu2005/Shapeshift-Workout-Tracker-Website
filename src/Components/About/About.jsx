import React from 'react'
import './About.css'
import htmlImg from '../../assets/html.png'
import cssImg from '../../assets/css.webp'
import jsImg from '../../assets/js.png'
import pythonImg from '../../assets/python.png'
import nodeImg from '../../assets/node.webp'
import javaImg from '../../assets/java.png'

const About = () => {
  return (
    <div id='about' className = 'about'>
        <div className="aboutTitle">
            <h1>About Me</h1>
        </div>
        <div className="sections">
            <div className="aboutRight">
                <div className="aboutPara">
                    <p>Hi, my name is Adan Wu, I am 18 years old from Richmond Hill, Ontario. I am currently enrolling in 
                        Queens University. I am now studying a Bachelor of Computing (Honours) 
                        degree at Queen's University. I presently hold a 4.0 GPA. During my time as a student, I built a good foundation in Python, HTML, CSS, Javascript, React JS, SQL, Excel, and Java through courses, home study, and projects. I've also acquired an interest in innovative technologies, which qualifies me as a proactive learner eager 
                        to solve problems and contribute significantly to your business.
                    </p>
                    <p> My interests expand beyond the web and I love helping people with programming and anything web related.
                    When I am not designing, I am usually spending time with my friends, playing video games, or studying on in-school topics and tasks.
                    </p>
                    <h2 className="skillsText">My Skills</h2>
                </div>
                <div className="skillsContainer">
                    <div className="skills">
                        <div className="skill"><p>HTML</p><hr/></div>
                        <div className="skill"><p>CSS</p><hr /></div>
                        <div className="skill"><p>Java</p><hr /></div>
                        <div className="skill"><p>Javascript</p><hr /></div>
                        <div className="skill"><p>React JS</p><hr /></div>
                        <div className="skill"><p>Mongo DB</p><hr /></div>
                        <div className="skill"><p>SQL</p><hr /></div>
                        <div className="skill"><p>Node JS</p><hr /></div>
                        <div className="skill"><p>Express JS</p><hr /></div>
                        <div className="skill"><p>Mern Stack</p><hr /></div>
                    </div>          
                    <div class="cube-container">
                        <div class="cube">
                            <div class="face front">
                                <div className="imgContainer">
                                    <img className = "cubeImg" src={htmlImg} alt="HTML" />                                    
                                </div>
                            </div>
                            <div class="face back">
                                <div className="imgContainer">
                                    <img className = "cubeImg" src={cssImg} alt="CSS" />                                    
                                </div>
                            </div>
                            <div class="face right">
                                <div className="imgContainer">
                                    <img className = "cubeImg" src={jsImg} alt="JS" />                                    
                                </div>                                
                            </div>
                            <div class="face left">
                                <div className="imgContainer">
                                    <img className = "cubeImg" src={pythonImg} alt="Python" />                                    
                                </div>                                
                            </div>
                            <div class="face top">
                                <div className="imgContainer">
                                    <img className = "cubeImg" src={nodeImg} alt="Node" />                                    
                                </div>                                
                            </div>
                            <div class="face bottom">
                                <div className="imgContainer">
                                    <img className = "cubeImg" src={javaImg} alt="Java" />                                    
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About