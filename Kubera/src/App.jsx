import { useEffect, useState } from "react";
import "./App.css";

import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Service from "./components/Services/Service";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  // loader state
  const [isLoading, setIsLoading] = useState(true);

  // Let create async method to fetch fake data
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    fakeDataFetch();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
    <div className="container">

      <Navbar />
      <Home/>

      <Service/>
    
    <About/>
    <Contact/>
    </div>
    </>
  );
}

export default App;
