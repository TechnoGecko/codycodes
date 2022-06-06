import React from 'react'
import Header from '../../components/header/Header';
import Projects from '../../components/projects/Projects';
import Technologies from '../../components/technologies/Technologies';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
      <div className="cc__home">
    <Header />
    <Projects />
    <Technologies />
    <Footer />
    </div>
  )
}

export default Home