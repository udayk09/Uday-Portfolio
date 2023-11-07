import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import MySkills from "./scenes/MySkills";
import Education from "./scenes/Education";
import { useEffect, useState } from "react";
import LineGradient from "./components/LineGradient";
import useMediaQuery from "./hooks/useMediaQuery";



function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");
  // const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY = 0) setIsTopOfPage(true);
      if(window.scrollY !==0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);
  
  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage} 
        selectedPage={selectedPage} 
        setSelectedPage={selectedPage} 
      />
      <div className="w-5/6 mx-auto md:h-full">
        { isDesktop && (
          <DotGroup
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full ">
        <MySkills />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto ">
        <Projects/>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full ">
        <Education/>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full ">
        <Contact/>
      </div>

    </div>
  );
}

export default App;
