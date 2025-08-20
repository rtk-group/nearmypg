export default function Home3() {
  return (
    <div className="font-sans bg-[#f5ebdd] min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8">
          PERFECT HOME
        </h1>

        {/* Stats */}
        <div className="flex justify-center gap-7 min-[410px]:gap-12 mb-6 text-sm min-[410px]:text-xl font-semibold">
          <p>1000+ <br /> Customers</p>
          <p>1000+ <br /> Customers</p>
          <p>1000+ <br /> Customers</p>
        </div>

        {/* City Dropdown */}
        <button className="bg-[#2d3224] text-white px-6 py-2 rounded-md">
          City Name
        </button>
      </section>

      {/* Divider */}
      <div className="border-t border-black w-[65%] mx-auto"></div>
      <div className="border border-black my-2 w-[80%] mx-auto"></div>

      {/* Nearby Locations */}
      <section className="text-center py-8 px-6">
        <h2 className="text-3xl md:text-[64px] font-bold mb-2">
          YOUR NEARBY LOCATIONS
        </h2>
        <p className="text-[#000000] mb-10 text-[20px] font-semibold">
          Experience Hassle-Free Room Hunting with Our Comprehensive PG Listings
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border max-w-7xl mx-auto ">
          {[1, 2, 3].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-bl-[50px] rounded-tr-[50px] border border-red-500 w-[410px] h-[614px] shadow-md overflow-hidden border border-gray-300"
            >
              {/* Image */}
              <img
                src={`/images/nearby_img${item}.jpg`}
                alt="PG Room"
                className="h-[350px] w-full object-cover"
              />

              {/* Content */}
              <div className="p-4 text-left">
                {/* Rating */}
                <div className="flex text-yellow-500 mb-2">
                  ★★★★★
                </div>

                {/* Location */}
                <h3 className="text-lg font-bold">Uttar Pradesh</h3>
                <p className="text-gray-600 text-sm">
                  798/21 Kidwai nagar kanpur
                </p>

                {/* Button */}
                <button className="mt-4 bg-[#9b6a34] text-white px-4 py-2 rounded-md hover:opacity-90">
                  More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
