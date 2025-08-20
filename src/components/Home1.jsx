import { useState } from "react";

export default function Home1() {
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [roomType, setRoomType] = useState("");

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-gray-100">
        
        <div className="sm:h-[122vh] lg:h-auto overflow-hidden flex bg-[#EEE0CD]">
        <div className="w-full px-3 sm:w-[50%] ">
            <img src="/images/hero_sub.jpg" alt="hero_sub.jpg" className="mt-100 sm:mt-0 sm:absolute top-[320px] lg:top-[480px] left-[20px] md:left-[80px] lg:left-[110px] w-full sm:w-[288px] sm:h-[220px] rounded-t-3xl " />
        </div>
        <div className="hidden sm:block w-[50%] h-[794px] bg-[url(/images/hero_main.jpg)] "></div>
        </div>

        {/* Overlay content */}
        <div className=" absolute px-3 top-3 lg:top-50 w-full sm:w-auto min-[1100px]:right-[5%] text-[#000000]">
          <h4 className="text-[14px] mb-1 sm:text-[20px] sm:-mb-8 font-bold"><span className="text-[24px] sm:text-[36px] font-bold mr-1">PG ROOMS</span> Finding a room feels like home</h4>
          <h1 className=" text-[50px] sm:text-[70px] md:text-[100px] lg:text-[128px] font-extrabold">PG NEAR ME</h1>

          {/* Search Bar */}
          <div className="mt-5 bg-[#35392A] p-8 flex flex-col gap-3 md:flex-row items-center justify-between md:h-[85px] rounded-bl-[45px] rounded-tr-[45px] ">
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="px-4 sm:px-2 md:px-4 py-2 sm:py-1 border lg:ml-23 outline-none  rounded-full text-[18px] w-[90%] md:w-45 font-semibold text-[#FFFFFF]"
            />
            <input
              type="text"
              placeholder="Budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="px-4 sm:px-2 md:px-4 py-2 sm:py-1 border mx-3 outline-none rounded-full text-[18px] w-[90%] md:w-45 font-semibold text-[#FFFFFF]"
            />


            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="text-[#FFFFFF] border outline-none px-4 py-2 sm:py-1 w-[90%] md:w-auto rounded-full  text-[18px] font-semibold"
            >
              <option>Room Type</option>
              <option>Single</option>
              <option>Double</option>
              <option>Sharing</option>
            </select>

            <button className="bg-[#E9CBA0] lg:w-[131px] text-black px-8 mt-3 sm:mt-0 sm:px-5 py-2 ml-4 lg:mx-12 hover:bg-yellow-500 rounded-bl-[15px] rounded-tr-[15px]">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Your Home Away From Home: Simplifying PG Room Searches for Students and Professionals
        </h2>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 pb-16">
        {/* Image */}
        <div>
          <img
            src="/images/key_feture.jpg" // replace with your image
            alt="PG Room"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Features */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Key Features</h3>
          <ul className="space-y-3 text-lg">
            <li>✅ Easy Search</li>
            <li>✅ Verified Listings</li>
            <li>✅ Affordable Prices</li>
            <li>✅ Secure Payments</li>
          </ul>
          <button className="mt-6 px-8 py-1 ml-7 border border-black rounded-bl-[10px] rounded-tr-[10px] hover:bg-black hover:text-white duration-200">
            More
          </button>
        </div>
      </section>
    </div>
  );
}





{/* <div className="absolute top-10 md:top-20 left-1/2 transform -translate-x-1/2 text-[#000000] w-[90%] md:w-[80%] lg:w-[70%] text-center md:text-left">
  <h4 className="text-[18px] md:text-[20px] font-bold mb-2">
    <span className="text-[28px] md:text-[36px] font-bold mr-2">PG ROOMS</span>
    Finding a room feels like home
  </h4>
  <h1 className="text-[32px] md:text-[64px] lg:text-[128px] font-extrabold leading-tight">
    PG NEAR ME
  </h1>

  Search Bar
  <div className="mt-6 bg-[#35392A] p-3 flex flex-col md:flex-row items-center gap-3 md:gap-4 justify-between rounded-bl-[45px] rounded-tr-[45px]">
    <input
      type="text"
      placeholder="Location"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      className="px-4 py-2 outline-none rounded-full text-[16px] md:text-[18px] w-full md:w-1/3 font-semibold text-white bg-transparent border border-white"
    />
    <input
      type="text"
      placeholder="Budget"
      value={budget}
      onChange={(e) => setBudget(e.target.value)}
      className="px-4 py-2 outline-none rounded-full text-[16px] md:text-[18px] w-full md:w-1/4 font-semibold text-white bg-transparent border border-white"
    />
    <select
      value={roomType}
      onChange={(e) => setRoomType(e.target.value)}
      className="text-white outline-none px-4 py-2 rounded-full text-[16px] md:text-[18px] font-semibold w-full md:w-1/4 bg-transparent border border-white"
    >
      <option className="text-black">Room Type</option>
      <option className="text-black">Single</option>
      <option className="text-black">Double</option>
      <option className="text-black">Sharing</option>
    </select>
    <button className="bg-[#E9CBA0] w-full md:w-[131px] text-black px-5 py-2 hover:bg-yellow-500 rounded-bl-[15px] rounded-tr-[15px]">
      Search
    </button>
  </div>
</div> */}

