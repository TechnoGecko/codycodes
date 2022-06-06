import React from 'react'
import './about.css';
import Footer from '../../components/Footer/Footer';

const About = () => {
  return (
    <div className="cc__about">
      <h1 className="cc__about-title">About Me</h1>

      <p className="cc__about-paragraph p1">
        I've had a love for computers since I was a kid, starting in the days of dial-up connections and waiting minutes for AOL to start up. I love learning new software, and even more I was always incredibly interested in UI/UX design (even before I knew there was a name for it), and much of what I've inuitively learned about good UX has come from years of playing every video game I could get my hands on.</p>

        <p className="cc__about-paragraph p2">
          I've always had a nack for learning new things, and as I approached my thirties, it became clear that playing drums wasn't how I was meant to pay the bills, love it as I do. The only thing that ever really stopped me from learning computer programming was -- like many others -- I believed you had to be a math genius in order to do so. As I began to dig more into what it takes to be a good developer, the more the combination of logic and creativity involved began to sound like it might just be something I was perfectly suited for. So, I made a freeCodeCamp account and got to learning! Now over a year later, I can confidently say I was right.
        </p>
        <p className="cc__about-paragraph p3">
          I've since developed a strong workflow for taking a website or app from concept, to Figma design, to fully coded and functional. Working with someone to deliver them a product that fits their needs, and looks/functions even better than they were imagining is a part of the process that I've especially grown to love. I've even found a new hobby in programming: even after a long day of working on a project, I like to open Unity and just make little throw-away projects. I hope one day I'll be a strong enough coder to make video games professionally, so keep an eye out for my future masterpiece! 
        </p>

        

        <Footer/>
    </div>
  )
}

export default About