import React from "react";

const Timeline = () => {
  return (
    <>
      {/* Container */}
      <div className="grid lg:grid-cols-3 items-center mx-auto">
        
        {/* Sidebar */}
        <aside className="flex flex-col gap-[30px] lg:order-none order-4">
          <div className="border-2 p-5 bg-[#ff003c]/[0.05]">
            <div className="flex gap-5 py-2.5 border-b border-[#ff003c]/30">
              <span className="time">3:00 PM</span>
              <span>SAMPLE TEXT HERE</span>
            </div>
            <div className="flex gap-5 py-2.5 border-b border-[#ff003c]/30">
              <span className="time">3:00 PM</span>
              <span>SAMPLE TEXT HERE</span>
            </div>
            <div className="flex gap-5 py-2.5">
              <span className="time">3:00 PM</span>
              <span>SAMPLE TEXT HERE</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex flex-col justify-center items-center gap-10 lg:order-none order-2 min-h-90 my-10">
          <div className="rotate-90">
            <h1 className="text-7xl sm:text-7xl font-extrabold tracking-widest whitespace-nowrap">
              TIMELINE
            </h1>
          </div>
        </main>

        {/* Services */}
        <section className="lg:order-none order-3">
          <div className="flex items-center gap-5 py-[25px] border-b border-[#ff003c]/30 transition-all duration-300 ease-in-out hover:bg-[#ff003c]/10 hover:tranred-x-[10px]">
            <span className="text-lg font-bold min-w-[30px]">01</span>
            <div className="w-10 h-10 border-2 rounded-full flex items-center justify-center relative"></div>
            <div>
              <div>WEB3</div>
              <div>APPLICATIONS</div>
            </div>
          </div>
          <div className="flex items-center gap-5 py-[25px] border-b border-[#ff003c]/30 transition-all duration-300 ease-in-out hover:bg-[#ff003c]/10 hover:tranred-x-[10px]">
            <span className="text-lg font-bold min-w-[30px]">02</span>
            <div className="w-10 h-10 border-2 rounded-full flex items-center justify-center relative"></div>
            <div>
              <div>SMART</div>
              <div>CONTRACTS</div>
            </div>
          </div>
          <div className="flex items-center gap-5 py-[25px] border-b border-[#ff003c]/30 transition-all duration-300 ease-in-out hover:bg-[#ff003c]/10 hover:tranred-x-[10px]">
            <span className="text-lg font-bold min-w-[30px]">03</span>
            <div className="w-10 h-10 border-2 rounded-full flex items-center justify-center relative"></div>
            <div>AUDITS</div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-2 pt-5 lg:col-span-3 lg:order-none order-5">
          <div className="clients-section">
            {/* <h3>CLIENTS / PROJECTS</h3> converted below */}
             <h3 className="mb-5 text-sm tracking-[2px]">CLIENTS / PROJECTS</h3>
            <div className="flex justify-between items-center p-5 mb-2.5 border transition-all duration-300 ease-in-out hover:bg-[#ff003c]/[0.15] hover:tranred-x-[5px]">
              <div>
                <div className="font-bold text-lg">VAN ECK</div>
                <div className="text-xs uppercase tracking-[1px]">PROTOCOL / MVP DEVELOPMENT</div>
              </div>
              <span className="text-xl">↗</span>
            </div>
            <div className="flex justify-between items-center p-5 mb-2.5 border transition-all duration-300 ease-in-out hover:bg-[#ff003c]/[0.15] hover:tranred-x-[5px]">
              <div>
                <div className="font-bold text-lg">ON1 FORCE</div>
                <div className="text-xs uppercase tracking-[1px]">CONTRIBUTOR / MVP DEVELOPMENT</div>
              </div>
              <span className="text-xl">↗</span>
            </div>
            <div className="flex justify-between items-center p-5 mb-2.5 border transition-all duration-300 ease-in-out hover:bg-[#ff003c]/[0.15] hover:tranred-x-[5px]">
              <div>
                <div className="font-bold text-lg">SEKAI GLORY</div>
                <div className="text-xs uppercase tracking-[1px]">GAME DEV / WEBSITE / SMART CONTRACT</div>
              </div>
              <span className="text-xl">↗</span>
            </div>
            <div className="flex justify-between items-center p-5 border transition-all duration-300 ease-in-out hover:bg-[#ff003c]/[0.15] hover:tranred-x-[5px]">
              <div>
                <div className="font-bold text-lg">OCEAN PARK</div>
                <div className="text-xs uppercase tracking-[1px]">NFT MARKETPLACE</div>
              </div>
              <span className="text-xl">↗</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Timeline;
