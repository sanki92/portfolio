import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.onreadystatechange = function() {
      if (document.readyState !== "complete") {
          document.querySelector(
            "body").style.visibility = "hidden";
          document.querySelector(
            "#loading").style.visibility = "visible";
      } else {
          document.querySelector(
            "#loading").style.display = "none";
          document.querySelector(
            "body").style.visibility = "visible";
      } 
    };
  }, []);
  
  return (
    <>
      <div id="loading">
        <div></div>
        <div id='square'></div>
      </div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Footer/>
    </>
  );
}

export default App;
