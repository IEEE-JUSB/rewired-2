const About = () => {
  return (
    <section className="w-full min-h-[90svh] flex flex-col items-center px-4 md:px-0" id="about">
      {/* Event Section */}
      <div className="w-full mx-auto my-12 md:mt-16 flex flex-col items-center">
        <div className="text-center">
          <h2 className="text-3xl mb-6 md:text-5xl font-bold text-red">About The Event</h2>
          <div className="bg-red/80 text-white px-6 py-3 rounded-full inline-block mb-6">
            <span>13-14 September, 2025</span>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 mt-16 w-4/5 gap-20 items-center">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground text-center">Rewired 2.0</h3>
            <div className="space-y-12 text-foreground/80 leading-relaxed">
              <p className="mb-6">
                ReWired 2.0 is a two-day hands-on workshop for creativity, collaboration and problem-solving. Spoiler Alert: you'll actually hook up ECG probes to capture and visualize your own heart activity signals—LIVE! Cool, right?
              </p>
              <p className="mb-6">
                Also, raw signals come with their share of buzzes, cracks, and hisses. You'll learn to clean those up using signal processing and noise reduction techniques. From messy to meaningful—right before your eyes!
              </p>
              <p className="mb-6">
                Power up, because at ReWired, the current is always high. 🔥⚡
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="flex justify-center items-center rounded-2xl bg-background border-2 border-red/40 p-2">
              <video
                src="/videos/rewired.mp4"
                controls
                autoPlay
                // muted
                loop
                playsInline
                className="rounded-2xl shadow-lg max-h-[60vh] max-w-[40vw] object-contain"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;