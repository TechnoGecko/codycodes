import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import Technologies from './components/technologies/Technologies';
import Home from './Pages/Home/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
      
    </div>
  );
}

export default App;
