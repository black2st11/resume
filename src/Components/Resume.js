import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
            <p>주요사항</p>
            <ul>
              {work.history.map((history)=>{
                return <li className='list-style'>
                  {history}
                </li>
              })}
            </ul>
            <p>{work.epilogue}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        let svg_icon = 'svg/'+skills.svg
        return <div className='skill-item'>
          <img alt={skills.svg} src={svg_icon} width={40} height={40} />
          <span>{skills.name}</span>
        </div>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <div className="skills">
            <div className='skill-container'>
					  {skills}
            </div>
					</div>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
