import React, { useEffect, useState } from "react";
import "./App.sass";
import "animate.css/animate.compat.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Wave from "./components/Wave";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import EmailForm from "./components/emailForm/EmailForm";
import Footer from "./components/footer/Footer";
import LoadingPage from "./pages/loadingPage/LoadingPage";
import Maintainanace from "./pages/maintainance/Maintainance";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // window.scrollTo(0, 0);
    setIsLoading(false);
  }, []);

  if (process.env.REACT_APP_MAINTAINANCE === "true") return <Maintainanace />;

  return (
    <div className="App">
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <Navbar />
          <div id="content">
            <main>
              <Hero />
              <Wave type={1} />
              <About />
              <Experience />
              <Wave type={2} />
              <EmailForm />
            </main>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
