import React from 'react'
import "../styles/info.css"
function Info({title, text, img}) {
  return (
    <section className='info'>
        <div className="container">
            <div className="info__grid">
                <div className="info_left">
                    <h3>{title}</h3>
                    <div className="left__text">
                        <p>{text}</p>
                    </div>
                    <div className="left_cta">
                        <p className='info_text1'>Interaction Design / Front End Development</p> 
                        <p className='info_text2'>HTML / CSS / JS</p>
                        <button>Visit website</button>
                    </div>
                </div>
                <div className="info_right">
                    <h3>Project Background</h3>
                    <p>This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.</p>
                    <h3>Static Previews</h3>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Info