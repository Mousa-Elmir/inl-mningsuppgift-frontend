import React from 'react';
import './App.css';
import Header from './containers/Header/Header';
import Hero from './containers/Hero/Hero';
import Features from './containers/Features/Features';
import About from './containers/About/About';
import Home from './containers/Home/Home';
import Contact from './containers/Contact/Contact';
import Footer from './containers/Footer/Footer';
import SectionThree from './containers/SectionThree/SectionThree';
import SectionFour from './containers/SectionFour/SectionFour';
import DarkModeToggle from './containers/DarkModeToggle/DarkModeToggle';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SectionFive from './containers/SectionFive/SectionFive';
import SectionSix from './containers/SectionSix/SectionSix';
import Newsletter from './containers/Newsletter/Newsletter';


function App() {
  return (
    <Router>
      <div className="App">
   
        <Header /> {/* Toppmenyn */}
        <Routes>
          <Route path="/" element={
            <>
              <Hero /> {/* Hero-sektionen */}
              <Features /> {/* Features-sektionen */}
              <About /> {/* About-sektionen */}
              <SectionThree /> {/* Sektion tre */}
              <SectionFour /> {/* Sektion fyra */}
              <SectionFive /> {/* Sektion fem */}
              <SectionSix /> {/* Sektion sex (FAQ) */}
              <Home /> {/* Eventuell övrig innehåll på startsidan */}
              <Newsletter />
            </>
          } />
          <Route path="/contact" element={<Contact />} /> {/* Kontakt-sidan */}
        </Routes>
        <Footer /> {/* Foten längst ner på sidan */}
      </div>
    </Router>
  );
}

export default App;
