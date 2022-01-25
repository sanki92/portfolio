import React from 'react'

const Skills = () => {
    return (
        <div id='skills' className='container skills d-flex flex-column justify-content-center'>
            <h1 className='heading'>Skills</h1>
            
            <div className="row">
            <div className="skills-container col-md-4">
                        <div className='skill'>
                            <h6>html / css</h6>
                            <div className="progress">
                            <div className="progress-bar bg-warning" role="progressbar" style={{"width": "90%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className='skill'>
                            <h6>Javascript</h6>
                            <div className="progress">
                            <div className="progress-bar bg-warning" role="progressbar" style={{"width": "70%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className='skill'>
                            <h6>Jquery</h6>
                            <div className="progress">
                            <div className="progress-bar bg-warning" role="progressbar" style={{"width": "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
            </div>
            <div className="skills-container col-md-4">
                        <div className='skill'>
                            <h6>Node Js</h6>
                            <div className="progress">
                            <div className="progress-bar bg-warning" role="progressbar" style={{"width": "50%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className='skill'>
                            <h6>Mongo Db</h6>
                            <div className="progress">
                            <div className="progress-bar bg-warning" role="progressbar" style={{"width": "50%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className='skill'>
                            <h6>Express JS</h6>
                            <div className="progress">
                            <div className="progress-bar bg-warning" role="progressbar" style={{"width": "45%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
            </div>
            <div className="skills-container col-md-4">
                        <div className='skill'>
                            <h6>React JS</h6>
                            <div className="progress">
                            <div className="progress-bar bg-warning" role="progressbar" style={{"width": "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className='skill'>
                            <h6>Java</h6>
                            <div className="progress">
                            <div className="progress-bar bg-warning" role="progressbar" style={{"width": "80%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className='skill'>
                            <h6>C / c++</h6>
                            <div className="progress">
                            <div className="progress-bar bg-warning" role="progressbar" style={{"width": "60%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
            </div>
            </div>
        </div>

    )
}

export default Skills
