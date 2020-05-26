import React, { Component } from 'react'
import './Skill.css'
export class Skill extends Component {
    render() {
        return (
            <div className='skill-wrap'>
            <div className='skill'>
                <h1>My Skill </h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                
                <div className='skills'>
                        <div className='s'>
                            <div className='s1'>
                                <p>HTML, CSS, Bootstrap,  Materia UI</p>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped " role="progressbar" 
                                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                                        </div>
                                   </div>
                                   <div className='s2'>
                                        <p>Reactjs, React Native</p>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped " role="progressbar" 
                                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">60%</div>
                                            </div>
                                   </div>
                                   <div className='s3'>
                                        <p>Git</p>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped " role="progressbar"
                                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                                            </div>
                                   </div>
                              </div>
                        </div>
            </div>
            </div>
        )
    }
}

export default Skill
