import {React, useEffect, useState} from "react";
import NavBar from "./Components/NavBar/NavBar"
import Hero from "./Components/Hero/Hero"
import About from "./Components/About/About"
import Services from "./Components/Services/Services"
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import './App.css'

const App = () => {
  const [loading, setLoading] = useState(null);

  useEffect(() =>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    }, 4000)
  },[])

  return (
    <>
    {
        loading ? 
        <>
        <div className="loaderContainer">
            <div class="honeycomb">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>              
        </div>

        </>
        :
        <div>
          <NavBar/>
          <Hero/>
          <About/>
          <Services/>
          <Portfolio/>
          <Contact/>
          <Footer/>
        </div>      
    }
    </>

  )
}

export default App