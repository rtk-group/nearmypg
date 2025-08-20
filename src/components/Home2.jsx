export default function Home2() {
  return (
    <div className="font-sans">
      {/* Popular Locations Section */}
      <section className="bg-[#2d3224] text-white py-12 px-4 sm:px-6 rounded-bl-[60px] rounded-tr-[35px]">
        <div className="max-w-7xl mx-auto">
          {/* Images */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            <img
              src="/images/popular_img1.jpg"
              alt="Room"
              className="rounded-bl-[30px] rounded-tr-[30px] sm:rounded-bl-[45px] sm:rounded-tr-[45px] object-cover h-70 sm:h-90 w-full"
            />
            <img
              src="/images/popular_img2.jpg"
              alt="Room"
              className="rounded-bl-[30px] rounded-tr-[30px] sm:rounded-bl-[45px] sm:rounded-tr-[45px] object-cover h-70 sm:h-90 w-full"
            />
            <img
              src="/images/popular_img3.jpg"
              alt="Room"
              className="rounded-bl-[30px] rounded-tr-[30px] sm:rounded-bl-[45px] sm:rounded-tr-[45px] object-cover h-70 sm:h-90 w-full"
            />
            <img
              src="/images/popular_img2.jpg"
              alt="Room"
              className="rounded-bl-[30px] rounded-tr-[30px] sm:rounded-bl-[45px] sm:rounded-tr-[45px] object-cover h-70 sm:h-90 w-full"
            />
            <img
              src="/images/popular_img3.jpg"
              alt="Room"
              className="rounded-bl-[30px] rounded-tr-[30px] sm:rounded-bl-[45px] sm:rounded-tr-[45px] object-cover h-70 sm:h-90 w-full"
            />
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold mb-2">POPULAR LOCATIONS</h2>
          <p className="text-gray-300 text-sm">
            Experience Hassle-Free Room Hunting with Our Comprehensive PG Listings
          </p>
        </div>
      </section>

      {/* Intro + Cities */}
      <section className="py-12 text-center max-w-4xl mx-auto px-6">
        <p className="text-3xl md:text-4xl font-bold mb-8">
          Your Home Away From Home <span className="hidden md:inline">: Simplifying PG Room Searches for Students and Professionals </span>
        </p>

        {/* City Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* {["City Name", "City Name", "City Name", "City Name", "City Name", "City Name"].map(
            (city, idx) => (
              <button
                key={idx}
                className="border border-black px-4 py-2 rounded-bl-[14px] rounded-tr-[14px] hover:bg-black hover:text-white transition"
              >
                {city}
              </button>
            )
          )} */}
          <button className="border border-black px-4 py-2 rounded-bl-[14px] rounded-tr-[14px] hover:bg-black hover:text-white transition">City Name</button>
          <button className="border border-black px-4 py-2 rounded-bl-[14px] rounded-tr-[14px] hover:bg-black hover:text-white transition">City Name</button>
          <button className="hidden sm:block border border-black px-4 py-2 rounded-bl-[14px] rounded-tr-[14px] hover:bg-black hover:text-white transition">City Name</button>
          <button className="hidden sm:block border border-black px-4 py-2 rounded-bl-[14px] rounded-tr-[14px] hover:bg-black hover:text-white transition">City Name</button>
          <button className="hidden sm:block border border-black px-4 py-2 rounded-bl-[14px] rounded-tr-[14px] hover:bg-black hover:text-white transition">City Name</button>
          <button className="hidden sm:block border border-black px-4 py-2 rounded-bl-[14px] rounded-tr-[14px] hover:bg-black hover:text-white transition">City Name</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row justify-around items-center px-3 pb-16">
        {/* Features */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Key Features</h3>
          <ul className="space-y-3 text-lg">
            <li>✅ Easy Search</li>
            <li>✅ Verified Listings</li>
            <li>✅ Affordable Prices</li>
            <li>✅ Secure Payments</li>
          </ul>
          <button className="mt-6 px-6 py-1 ml-6 border border-black rounded-bl-[10px] rounded-tr-[10px] hover:bg-black hover:text-white duration-200">
            More
          </button>
        </div>

        {/* Image */}
        <div className="max-w-[550px] lg:w-[680px] mb-6">
          <img
            src="/images/key_feture2.jpg"
            alt="PG Room"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}

