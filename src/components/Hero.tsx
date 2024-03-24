export default function Hero() {
  return (
    <div className="max-w-screen-xl mx-auto px-2 py-16 md:py-32 flex flex-col md:flex-row items-center justify-between">
      <div className="md:mr-16">
        <div>
          <h1 className="text-5xl md:text-5xl text-slate-300 font-bold">
            Bhumika Patidar
          </h1>
          <p className="text-slate-300 text-lg md:text-2xl mt-2 md:mt-4 text-center md:text-left">
            Frontend Engineer
          </p>
          <p className="text-slate-500 text-xl mt-4 md:max-w-xs sm:text-center lg:text-left">
            I'm passionate about designing and developing engaging digital
            experiences that are accessible and pixel-perfect!
          </p>
        </div>
      </div>
      <div className="mt-4 md:mt-0">
        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D"
          className="w-64 md:w-80"
          alt="Your Image"
        />
      </div>
    </div>
  );
}
