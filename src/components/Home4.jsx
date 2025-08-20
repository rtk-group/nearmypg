// import React from 'react'

// function Home4() {
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default Home4


export default function HomePage() {
  return (
    <div className="font-sans bg-white min-h-screen">
      {/* User Reviews Section */}
      <section className="bg-[#2d3224] text-white py-12 px-6 rounded-br-[60px]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              WHAT OUR USERS HAS TO SAY
            </h2>
            <p className="text-gray-300 text-sm mb-6">
              Experience Hassle-Free Room Hunting with Our Comprehensive PG Listings
            </p>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold">4.9</span>
              <span className="text-yellow-400">★★★★★</span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/456/456212.png"
                alt="user icons"
                className="h-6"
              />
            </div>
          </div>

          {/* Right Side - Reviews */}
          <div className="space-y-6">
            <div className="bg-white text-black rounded-lg shadow-md p-6">
              <p>
                Husein transforms complex ideas into intuitive designs. His
                innovative approach ensures our digital products are both
                beautiful and user-friendly. Discover creativity at its finest
                with Husein on our team.
              </p>
            </div>
            <div className="bg-white text-black rounded-lg shadow-md p-6">
              <p>
                Husein transforms complex ideas into intuitive designs. His
                innovative approach ensures our digital products are both
                beautiful and user-friendly. Discover creativity at its finest
                with Husein on our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comfortable Rooms Section */}
      <section className="text-center py-12 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          COMFORTABLE ROOM OPTIONS
        </h2>
        <p className="text-gray-700 mb-10">
          Experience Hassle-Free Room Hunting with Our Comprehensive PG Listings
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-300"
            >
              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1600585152913-6cc2f6fda36e"
                alt="PG Room"
                className="h-56 w-full object-cover"
              />

              {/* Content */}
              <div className="p-4 text-left">
                {/* Rating */}
                <div className="flex text-yellow-500 mb-2">★★★★★</div>

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
