import React from 'react'
const About = () => {
    return (
        <div id='about' className="about container mx-auto row justify-content-center align-items-center text-align-center">
           <div className="col-md-4 d-flex justify-content-center">
            <img src="./images/casual-life-3d-22.png" className='my-3' className='illu-img' alt="user" />
           </div>
            <div className="container col-md-8 text-center about-header">
            <h1 className='heading'>About</h1>
                <p>Howdy! I'm Sankalp, I am a Frontend Web Developer and a person obsessed with making things and even more obsessed with making things
                better. I think I am very flexible and adaptive to learn new things.
                If I'll be hired by you then it would be a great pleasure for me.
                I'm currently available for freelance projects or Internships.
                If you're interested in working with me, please get in <a href='mailto:sankalpt92@gmail.com'> touch.</a></p>  
                <a href='./doc/Resume.pdf' download>Download Resume</a>
                <hr className='my-5' />
                <button className='btn'><a href="mailto:sankalpt92@gmail.com">Hire Me</a></button>
            </div>

        </div> 
    )
}

export default About
