import './App.css';
import React from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home';
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer';

export default function App() {
  return (
    <div className="App" id='home'>
      {/* <HashLink to='#projects'>projects</HashLink> */}
      <Navbar />
      <Home />
      <About />
      <div class="main-content">
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        {/* <Routes>
          <Route path='/dfs' element={<Navbar />}></Route>
          <Route path='/' element={<About />}></Route>
          <Route path='/sf' element={<Skills />}></Route>
          <Route path='/aer' element={<Projects />}></Route>
          <Route path='/fgeg' element={<Contact />}></Route>
        </Routes> */}
      </div>
    </div>
  );
}
