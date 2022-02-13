import React, { useEffect, useState } from 'react'

const Project = () => {
    const [count, setcount] = useState(1);
    useEffect(() => {
        const numberOfCards = document.querySelectorAll(".card-container .card").length;
        const buttons = document.querySelectorAll(".cardbtn");
        const card = document.querySelector(".card-container");
        // const nxt = document.querySelector("#next");
        // const prev = document.querySelector("#previous");
        // const nxt = document.querySelector("#next");
        
        let cardIndex=1;
        let translate=0;
        buttons.forEach(button=>{
          button.addEventListener('click', (event)=>{
            if(event.target.id === "previous"){
              if(cardIndex !== 1){
                cardIndex--;
                translate +=21;
              }
            }
            else{
                if(cardIndex !== numberOfCards){
                cardIndex++;
                translate -=21;
            }
        }
            if(cardIndex===numberOfCards){
                document.querySelector("#next").classList.add("disable");
                // document.querySelector("#next").classList.remove("active");

            }
            else{
                document.querySelector("#next").classList.remove("disable");
                // document.querySelector("#next").classList.add("active");

        }
            if(cardIndex ===1){
                document.querySelector("#previous").classList.add("disable");
                // document.querySelector("#previous").classList.remove("active");

            }
            else{
                // setcolor2("ffffff");
                document.querySelector("#previous").classList.remove("disable");
                // document.querySelector("#previous").classList.add("active");


                // prev.className="scaling-hov cardbtn";
                // button.style.transform="rotate(180deg)scale(0.9)";

            }
        // num.innerHTML=`${cardIndex}/${numberOfCards}`
            setcount(cardIndex);
      
            card.style.transform=`translateX(${translate}rem)`;
        });
        });
        function myFunction(x) {
            if (x.matches) { // If media query matches
              document.querySelector("#projects").classList.remove("project-card");
              document.querySelector("#projects").classList.add("project-carousel");
              document.querySelector(".card-container").classList.remove("flex-wrap","justify-content-center");
              document.querySelector(".card-container").classList.add("flex-nowrap");
              document.querySelector(".project-foot").classList.add("d-flex");


            } else {
             document.querySelector("#projects").classList.add("project-card")
             document.querySelector("#projects").classList.remove("project-carousel");
             document.querySelector(".card-container").classList.add("flex-wrap","justify-content-center");
             document.querySelector(".card-container").classList.remove("flex-nowrap");
             document.querySelector(".card-container").style.transform="translate(0rem)"
             document.querySelector(".project-foot").classList.remove("d-flex");

            }
          }
          
          var x = window.matchMedia("(max-width: 767px)")
          myFunction(x) // Call listener function at run time
          x.addListener(myFunction) // Attach listener function on state changes
    }, [])
    return (
    <div className='container project-container'>
        <h1 className='heading'>Projects</h1>
        <div id='projects' className="project-card  mx-auto justify-content-center">
            <div   className="row card-container  flex-wrap justify-content-center">
                    <div  style={{background:"url('./images/newsapp.jpeg') center"}} className="card project-item pt-3 mx-2 my-2 justify-content-center">
                    <div className="card-body justify-content-center align-items-center d-flex  flex-column fw-bold" >
                        <h5 className="card-title text-center">News App </h5>
                        <p className="card-text">Newsverse is a News app which fetch current popular news through a News API and display it on the page, the news is further categorized in some well-liked topics such as Entertainment, Science and Sports etc.</p>
                        <a target="_blank" href="https://github.com/sanki92/Newsverse">View</a>
                    </div>
                    </div> 
                    <div style={{background:"url('./images/weatherapp.webp') right"}} className="card project-item bg-dark pt-3 mx-2 my-2 justify-content-center">
                    <div className="card-body justify-content-center align-items-center d-flex  flex-column fw-bold">
                        <h5 className="card-title text-center">Weather App</h5>
                        <p className="card-text">Shanky weather is a weather app which fetch weather information such as temperature and cloud status of last 1 hour of your desirable place and display it on the page.</p>
                        <a target="_blank" href="https://github.com/sanki92/ShankyWeather">View </a>
                    </div>
                    </div>
                    <div style={{background:"url('./images/quoteapp.jpg')center left"}} className="card project-item bg-dark pt-3 mx-2 my-2 justify-content-center">
                    <div className="card-body justify-content-center align-items-center d-flex  flex-column fw-bold">
                        <h5 className="card-title text-center">Quotes App</h5>
                        <p className="card-text">Quotes app fetch data(which is Quote and Author's name) through a API of quotes and display it on the page. Every time you refreshes the page it shows random quote. </p>
                        <a target="_blank" href="https://github.com/sanki92/Quotes">View </a>
                    </div>
                    </div>
                    <div style={{background:"url('./images/chatapp.jpg')top fixed no-repeat", backgroundSize:"cover"}} className="card project-item bg-dark pt-3 mx-2 my-2 justify-content-center">
                    <div className="card-body justify-content-center align-items-center d-flex  flex-column fw-bold">
                        <h5 className="card-title text-center">Chatting App</h5>
                        <p className="card-text">It is a Real-time Chatting Web App created using "Socket.io and Node.js". The people with this website can chat together and there's no need of Sign up or Login.</p>
                        <a target="_blank" href="http://shankychatapp.c1.biz/">View </a>
                    </div>
                    </div>
            </div>
        </div>
        <div className="project-foot d-flex mx-auto mt-2  justify-content-between align-items-center ">
             <h6 className='text-light mb-0'>{count}/4</h6>
             <div className="btn-container">      
            <img className='cardbtn disable' id='previous' src={`https://img.icons8.com/ios/35/ffffff/right--v1.png`}/>
            <img className='cardbtn' id='next' src={`https://img.icons8.com/ios/40/ffffff/long-arrow-right.png`}/>
             </div>
            </div>

         {/* PROJECT CARD */}
                {/* <div className="container project-card mx-auto py-5 flex-row flex-wrap justify-content-evenly">
                    
                    <div className="row card-container flex-wrap justify-content-center">
                          <div className="card project-item bg-dark mx-2 my-2 justify-content-evenly">
                    <div className="card-body">
                        <h5 className="card-title">News App </h5>
                        <p className="card-text">Newsverse is a News app which fetch current popular news through a News API and display it on the page, the news is further categorized in some well-liked topics.</p>
                        <a href="#">View </a>
                    </div>
                    </div> 
                    <div className="card project-item bg-dark mx-2 my-2 justify-content-evenly">
                    <div className="card-body">
                        <h5 className="card-title">Weather App</h5>
                        <p className="card-text">Shanky weather is a weather app which fetch weather information of last 1 hour and display it on page.</p>
                        <a href="#">View </a>
                    </div>
                    </div>
                    <div className="card project-item bg-dark mx-2 my-2 justify-content-evenly">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#">View </a>
                    </div>
                    </div>
                    <div className="card project-item bg-dark mx-2 my-2 justify-content-evenly">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#">View </a>
                    </div>
                    </div>
                    <div className="card project-item bg-dark mx-2 my-2 justify-content-evenly">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#">View </a>
                    </div>
                    </div>
                    </div>
                  
                </div> */}


    </div>
    )
}

export default Project
