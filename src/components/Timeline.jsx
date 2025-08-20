import React from "react";

const Timeline = () => {
  return (
    <>
      {/* Container */}
      <div className="grid lg:grid-cols-3 items-center w-4/5 min-h-svh my-10 sm:my-0" id="timeline">

        {/* Services */}
        <section className="lg:order-none order-3">
          <h2 className="text-3xl ml-2">DAY 1</h2>
          <div className="flex items-center gap-5 py-[25px] border-b border-[#ff003c]/30 transition-all duration-300 ease-in-out hover:bg-[#ff003c]/10 hover:tranred-x-[10px] px-4">
            <span className="text-lg font-bold min-w-[30px]">01</span>
            <p>SOMETHING</p>
          </div>
          <div className="flex items-center gap-5 py-[25px] border-b border-[#ff003c]/30 transition-all duration-300 ease-in-out hover:bg-[#ff003c]/10 hover:tranred-x-[10px] px-4">
            <span className="text-lg font-bold min-w-[30px]">02</span>
            <p>SOMETHING</p>
          </div>
          <div className="flex items-center gap-5 py-[25px] border-b border-[#ff003c]/30 transition-all duration-300 ease-in-out hover:bg-[#ff003c]/10 hover:tranred-x-[10px] px-4">
            <span className="text-lg font-bold min-w-[30px]">03</span>
            <p>SOMETHING</p>
          </div>
        </section>

        {/* Main Content */}
        <main className="flex flex-col justify-center items-center gap-10 lg:order-none order-2 sm:min-h-90 my-10">
          <div className="sm:rotate-90">
            <h1 className="text-5xl sm:text-8xl font-extrabold tracking-widest whitespace-nowrap">
              TIMELINE
            </h1>
          </div>
        </main>

        {/* Services */}
        <section className="lg:order-none order-3 mt-16 sm:mt-0">
          <h2 className="text-3xl ml-2">DAY 2</h2>
          <div className="flex items-center gap-5 py-[25px] border-b border-[#ff003c]/30 transition-all duration-300 ease-in-out hover:bg-[#ff003c]/10 hover:tranred-x-[10px] px-4">
            <span className="text-lg font-bold min-w-[30px]">01</span>
            <p>SOMETHING</p>
          </div>
          <div className="flex items-center gap-5 py-[25px] border-b border-[#ff003c]/30 transition-all duration-300 ease-in-out hover:bg-[#ff003c]/10 hover:tranred-x-[10px] px-4">
            <span className="text-lg font-bold min-w-[30px]">02</span>
            <p>SOMETHING</p>
          </div>
          <div className="flex items-center gap-5 py-[25px] border-b border-[#ff003c]/30 transition-all duration-300 ease-in-out hover:bg-[#ff003c]/10 hover:tranred-x-[10px] px-4">
            <span className="text-lg font-bold min-w-[30px]">03</span>
            <p>SOMETHING</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Timeline;
