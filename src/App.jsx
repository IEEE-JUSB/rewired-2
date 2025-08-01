import Navbar from "/src/components/Navbar";
import Hero from "/src/components/Hero";
import About from "/src/components/About";
import Timeline from "/src/components/Timeline";
import Speakers from "/src/components/Speakers";
import Footer from "/src/components/Footer";

function App() {
  return (
    <div className="font-spaceGrotesk text-red min-h-svh flex flex-col items-center bg-background relative">
      <div className="absolute top-0 left-1/12 bg-red/50 w-[1px] h-full "></div>
      <div className="absolute top-0 right-1/12 bg-red/50 w-[1px] h-full "></div>
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Speakers />
      <Footer />
    </div>
  );
}

export default App;
