import React, { Component } from 'react';
import Picture from './me1.png';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src={Picture} alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>
               <hr/>
               <h2>My hobbies</h2>
               <p>My hobbies include:
                  <ul>
                     <li>Gaming</li>
                     <li>Drawing</li>
                     <li>Experimenting with code</li>
                     <li>Listening to music</li>
                  </ul>
               </p>
               <div className="row">

                  <div className="columns contact-details">
                  <hr/>
                  <h2>More..</h2>
                  <p className="address">
       						
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
                    <ul>
                       <li>
                          18 years old
                       </li>
                       <li>DOB 15 May 2002</li>
                    </ul>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}