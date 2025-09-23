import { useState } from 'react'
import React from 'react'
import { FaStar } from "react-icons/fa";
import { FiMapPin, FiSearch } from "react-icons/fi";
import { ImMenu } from "react-icons/im";
import FilterSidebar from '../components/filter';
import { FaAngleDoubleRight } from "react-icons/fa";


const filters = {
  // budget: ["Rs 1k-2k", "Rs 2k-4k", "Rs 4k-6k", "Rs 6k+"],
  cities: ["Delhi", "Mumbai", "Bangalore", "Noida"],
  area: ["Koramangala", "Whitefield", "Connaught Place"],
  landmarks: ["Near Metro Station", "Near Airport", "Near College/University"],
  roomType: ["Single Room", "Double Room", "Triple Room", "Shared Room"],
};

const properties = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    title: "Uttar Pradesh",
    price: "Rs 1k-2k",
    rating: 4.2,
    city:"Delhi",
    landmarks:"Near Metro Station",
    tags: ["Single", "Double"],
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80",
    title: "Uttar Pradesh",
    price: "Rs 1k-2k",
    rating: 4.5,
    city:"Mumbai",
    landmarks:"Near Metro Station",
    tags: ["Single", "Double"],
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    title: "Uttar Pradesh",
    price: "Rs 1k-2k",
    rating: 4.1,
    city:"Bangalore",
    landmarks:"Near Metro Station",
    description:"hjadslfpiqrfaodfivmdfv;oikef oe vvfloi merif vej vejk df; lk er;lkfv e;lfk vel;kvwksdjlfhalkfdhlkjsdfkljsfsldflhs",
    tags: ["Single", "Double"],
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    title: "Uttar Pradesh",
    price: "Rs 1k-2k",
    rating: 4.1,
    city:"Bangalore",
    tags: ["Single", "Double"],
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    title: "Uttar Pradesh",
    price: "Rs 1k-2k",
    rating: 4.2,
    city:"Delhi",
    tags: ["Single", "Double"],
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80",
    title: "Uttar Pradesh",
    price: "Rs 1k-2k",
    rating: 4.5,
    city:"Mumbai",
    tags: ["Single"],
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80",
    title: "Uttar Pradesh",
    price: "Rs 1k-2k",
    rating: 4.5,
    city:"Mumbai",
    tags: ["Single", "Double"],
  },
];






const SearchPage = () => {

  const [fltr, setfltr] = useState(true)
  const [row, setRow] = useState(false)
  const [currentPage, setCurrentPage] = useState(1); // abhi 1st page

console.log("row"+row,"fltr"+fltr)



  // const itemsPerPage = 6; // ek page me kitne cards dikhane hain
  const itemsPerPage = row ? 3 : 6;
  const [selectedFilters, setSelectedFilters] = useState({
    cities: [],
    area: [],
    landmarks: [],
    roomType: [],
  });

  // ✅ Checkbox select/deselect
  function checkedvalue(category, value, checked) {
    console.log(category,value,checked)
    setSelectedFilters((prev) => {
      const updated = { ...prev };
      if (checked) {
        updated[category] = [...prev[category], value];
      } else {
        updated[category] = prev[category].filter((v) => v !== value);
 
      }

      return updated;
    });
  }

  console.log(selectedFilters)

  // ✅ Filtering logic
  const filteredProperties = properties.filter((p) => {

    const cityMatch =
      selectedFilters.cities.length === 0 || selectedFilters.cities.includes(p.city);

    const areaMatch =
      selectedFilters.area.length === 0 ||
      selectedFilters.area.some((a) => p.title.includes(a));

    const landmarkMatch =
      selectedFilters.landmarks.length === 0 ||
      selectedFilters.landmarks.includes(p.landmarks);

    const roomMatch =
      selectedFilters.roomType.length === 0 ||
      selectedFilters.roomType.some((r) =>
        p.tags.some((t) => r.toLowerCase().includes(t.toLowerCase()))
      );

    return cityMatch && areaMatch && landmarkMatch && roomMatch;
  });

  // Index calculate karna
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  console.log(indexOfFirstItem)
  const currentItems = filteredProperties.slice(indexOfFirstItem, indexOfLastItem);

  // Total pages
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);


  function moreinfo(e){
      console.log(e.target.id)
  }

  function handlemenu(){
    let menu = document.getElementById("menubar");
    if(menubar){
      menu.classList.remove("menubar")
      menu.style.display="none"
    }else{
      menu.style.display="block"
    }
    
  }

  
 
  return (
    <>
      <div className='w-full h-70 flex items-center justify-center'>
            <div className='md:w-250 md:h-20 bg-[#2d3224] rounded-tr-4xl rounded-bl-4xl text-white w-200 h-17 '>
                 <ul className='flex justify-around items-center'>
                  <li><a href='#'>Area</a></li>
                  <li><a href='#'>LandMark</a></li>
                  <li><a href='#'>Room Type</a></li>
                  <li><a href='#'>Gender Preferences</a></li>
                  <button className='px-7 p-2  rounded-tr-2xl rounded-bl-2xl bg-yellow-200 mt-5 text-black cursor-pointer'> Search </button>
                 </ul> 
            </div>
               
      </div>
          <div className='flex justify-between px-5 pb-5'>
              <div>
                  <h1 className='!text-4xl font-bold'>Mumbai City </h1>
                   <span>1000 PG Room are available</span> 
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-2xl cursur-pointer menuhide' id='menubar'  onClick={()=>setRow(!row)} ><ImMenu/></span>
                <button className='px-4 py-1 border rounded flex justify-center items-center gap-3 filteroption' onClick={()=>{setfltr(!fltr),setRow(true),handlemenu()}}>  
                  <h1>Filter</h1>
                  <span ><FaAngleDoubleRight /></span>
                </button>
              </div>
         </div>
              <div className="flex min-h-screen bg-gray-50 ">
      {/* Sidebar Filters */}
      {/* <aside className="w-72 bg-white shadow-md p-4">
        <div className="mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/India_location_map.svg/1024px-India_location_map.svg.png"
            alt="Map"
            className="rounded-lg"
          />
          <p className="text-center mt-2 text-sm font-semibold">Show on Map</p>
        </div>

        <h2 className="text-lg font-semibold mb-2">Filters</h2>
        <input
          type="text"
          placeholder="Find a Filter"
          className="w-full p-2 border rounded mb-4"
        />

        {Object.entries(filters).map(([key, values]) => (
          <div key={key} className="mb-4">
            <h3 className="font-medium capitalize mb-2">{key}</h3>
            {values.map((v, i) => (
              <label key={i} className="flex items-center space-x-2 mb-1">
                <input type="checkbox" className="form-checkbox" onChange={(e) => checkedvalue(key, v, e.target.checked)} />
                <span>{v}</span>
              </label>
            ))}
          </div>
        ))}
      </aside> */}
     <div className='hidden sm:block'>
     {
        fltr?<FilterSidebar
        filters={filters}
        onFilterChange={checkedvalue}
      />:""
      }
     </div>
      

      
      {/* Properties */}
      {/* <main className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
      <main
  className={`flex-1 p-6 grid gap-6 h-50
    ${row ? "grid-cols-1" : fltr ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
>
        {currentItems.map((p) => (
          <div
  key={p.id}
  className={`bg-white rounded-2xl shadow hover:shadow-lg transition p-3 
    ${row ? "flex gap-4 h-60" : ""}
  `}
>
    
       <div className={`${row ? "w-1/3" : "w-full"}`}>
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className={`${row ? "w-2/3 flex flex-col justify-between" : "mt-3"}`}>
        <div>
          <h3 className="font-semibold text-lg">{p.title}</h3>
          <div className="flex items-center text-yellow-500">
            <FaStar />
            <span className="ml-1 text-sm">{p.rating}</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="font-medium">{p.price}</span>
            <span className="font-medium">{p.city}</span>
            <span className="font-medium">{p.landmarks}</span>
          </div>
            <span className="font-medium">{fltr?"":`${p.description}`}</span>
        </div>
              <div className="flex  mt-2 items-center justify-between">
                <div className='flex gap-3'>
                {p.tags.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-200 text-xs rounded-lg cursor-pointer hover:bg-green-300"
                  >
                    {t}
                  </span>
                ))}

                </div>
              <div>
                 <button id={p.id} onClick={moreinfo} className="mt-3  px-2 border rounded-lg hover:bg-gray-800 hover:text-white">
                   More
                 </button>
              </div>
                
              </div>
            
            </div>
          </div>
        ))}
      </main>
      </div>

      <div className={fltr?"flex justify-center gap-2 mt-30" :"flex justify-center gap-2 mt-65"}>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === i + 1 ? "bg-gray-800 text-white" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>



      {/* <Footer/> */}
    </>
  )
}

export default SearchPage
 