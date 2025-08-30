import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "/src/components/Navbar";
import Hero from "/src/components/Hero";
import About from "/src/components/About";
import Timeline from "/src/components/Timeline";
import Speakers from "/src/components/Speakers";
import Footer from "/src/components/Footer";
import FAQ from "/src/components/FAQ";
import Registration from "/src/components/Registration";

function App() {
  return (
    <Router>
      <div className="font-spaceGrotesk text-red min-h-svh flex flex-col items-center bg-background relative">
        <div className="absolute top-0 left-8 sm:left-16 bg-red/50 w-[1px] h-full"></div>
        <div className="absolute top-0 right-8 sm:right-16 bg-red/50 w-[1px] h-full "></div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Timeline />
              <Speakers />
              <FAQ />
            </>
          } />
          <Route path="/register" element={<Registration />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
