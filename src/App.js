import './App.sass';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Maintainanace from './pages/maintainance/Maintainance';

function App() {
  return ( 
    <div className="App">
      { process.env.REACT_APP_MAINTAINANCE ?  
        <>
          <Navbar />
        </> :
        <Maintainanace />
      }
      <Footer />
    </div>
  );
}

export default App;
