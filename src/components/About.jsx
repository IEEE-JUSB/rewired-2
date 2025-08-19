const About = () => {
  return (
    <section className="w-full flex flex-col items-center py-56 md:py-80 px-4 md:px-0">
      {/* Event Section */}
      <div className="w-full max-w-6xl mx-auto mb-32 mt-24 md:mt-40">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-red">Upcoming Event</h2>
          <p className="text-xl text-foreground/80 mb-8">Join us for our latest innovation showcase</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="bg-red/80 text-white px-6 py-3 rounded-full inline-block mb-6">
              <span className="font-semibold">March 15, 2025 • 7:00 PM EST</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-foreground">Rewired 2</h3>
            <div className="space-y-12 text-foreground/80 leading-relaxed">
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris viverra veniam sit amet lacus cursus.
              </p>
              <p className="mb-6">
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem.
              </p>
              <p className="mb-6">
                In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend.
              </p>
            </div>
            <button className="mt-12 bg-red hover:bg-red/80 text-white font-semibold py-3 px-10 rounded-full transition-all duration-300 transform hover:scale-105 border border-red/60 hover:border-red">
              Register Now
            </button>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden bg-background border-2 border-red/40">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Web3 Innovation Summit Preview"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="w-full max-w-6xl mx-auto mb-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-40 text-red pt-5 ">What We Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {[
            {
              title: "Web3 Applications",
              description: "Custom decentralized applications built for the future of the internet"
            },
            {
              title: "Smart Contracts",
              description: "Secure and efficient blockchain contracts tailored to your business needs"
            },
            {
              title: "NFT Development",
              description: "Complete NFT solutions from creation to marketplace integration"
            },
            {
              title: "Protocol Development",
              description: "Building robust protocols that power next-generation applications"
            },
            {
              title: "MVP Development",
              description: "Rapid prototyping and development to bring your ideas to life"
            },
            {
              title: "Audits",
              description: "Comprehensive security audits to ensure your smart contracts are bulletproof"
            }
          ].map((service, index) => (
            <div key={index} className="bg-background rounded-xl p-10 hover:bg-red/10 transition-colors duration-300 border border-red/10 hover:border-red/60 group mb-8">
              <div className="text-red font-bold text-2xl mb-6 group-hover:text-red/80 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                {service.title}
              </h3>
              <p className="text-foreground/70 group-hover:text-foreground transition-colors text-lg">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="w-full max-w-4xl mx-auto text-center py-30 md:py-40 mb-20 mt-200 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Ready to Build the Future?</h2>
        <p className="text-2xl text-foreground/80 mb-16 leading-relaxed">
          Let's collaborate to bring your web3 vision to life with cutting-edge technology and innovative solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-12 justify-center">
          <button className="bg-red hover:bg-red/80 text-white font-semibold py-4 px-12 rounded-full transition-all duration-300 transform hover:scale-105 text-lg">
            Start Your Project
          </button>
          <button className="border-2 border-red text-red hover:bg-red hover:text-white font-semibold py-4 px-12 rounded-full transition-all duration-300 text-lg">
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;