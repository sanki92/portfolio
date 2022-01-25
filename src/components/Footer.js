import React, { useEffect } from 'react';
import $ from 'jquery';

const Footer = () => {
    useEffect(() => {
        $(document).ready(function(){
         
            setInterval(() => {
            var a=1000;
            $(".foot-media a img").each(function(x){
                a+=1000;
                setTimeout(() => {
                       $(this).addClass("anima")
                }, a);
            })  
            },typeof Infinity )

        })
      
    }, []);
    
  return (
      <>
  <div className='row footer px-4 justify-content-center'>
      <div id='contact' className="col-md-7">
          <h1 className='fw-bold text-left'>Let's have a talk . . .</h1>
          <h6 className='fw-bold text-left mb-5'>While 1’m good with smoke signals, there are simpler ways for us to get in touch <img src="https://img.icons8.com/ios/25/dfdfdf/filled-speech-bubble-with-dots--v2.png"/></h6>
      
      </div>
      <div className="col-md-4 d-flex justify-content-center gap-5">
         <div className="foot-media d-flex flex-column ms-auto gap-4">
      <a href="https://twitter.com/Sankalpt_92"><img src="https://img.icons8.com/ios-filled/35/72b6ff/twitter-circled--v1.png"/></a>
      <a href="https://github.com/sanki92"><img src="https://img.icons8.com/ios-filled/35/72b6ff/github.png"/> </a>
      <a href="https://www.linkedin.com/in/sankalp-tripathi-53b7b61b5/"><img src="https://img.icons8.com/ios-filled/35/72b6ff/linkedin-circled--v4.png"/></a>
      </div> 
      <img className='illu-img' src="./images/contact.png" alt="" />
      </div>
  </div>
      <h4 className='bg-dark text-center mt-5 mb-0' style={{fontFamily:"Dongle"}}>Desinged and Developed by <span style={{textTransform:"uppercase",fontFamily:"Dongle"}}>Sankalp Tripathi</span> </h4>
      </>
  )};

export default Footer;
