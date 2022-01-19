import React, { useEffect } from 'react';
import './App.sass';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import EmailForm from './components/emailForm/EmailForm';
import Footer from './components/footer/Footer';
import Maintainanace from './pages/maintainance/Maintainance';

function App() {

  useEffect(() => {
    // console.log(process.env.REACT_APP_MAINTAINANCE);
  });

  return ( 
    <div className="App">
      { process.env.REACT_APP_MAINTAINANCE === "true" ?  
        <Maintainanace /> :
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <EmailForm />
          </main>
        </>
      }
      <Footer />
    </div>
  );
}

export default App;
