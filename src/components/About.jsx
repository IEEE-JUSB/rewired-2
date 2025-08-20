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
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem.
              </p>
              <p className="mb-6">
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem.
              </p>
              <p className="mb-6">
                In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden bg-background border-2 border-red/40">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Rewired 2.0 Event Information"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;