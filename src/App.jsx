import { Link, useLoaderData } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Swal from "sweetalert2";

function App() {
  let data = useLoaderData();

  let [coffee,setCoffee] =useState(data)



  let handleDelete=(id)=>{
    console.log(id)
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Proceed with the deletion
        fetch(`https://coffee-crud-server-five.vercel.app/user/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");

              // Update the local state to reflect the deletion
              const remainingCoffee = coffee.filter((item) => item._id !== id);
              setCoffee(remainingCoffee);
            }
          })
      }
    });




  }

  return (
    <div className="parkinsans-font">
      <div className='bg-[rgb(30,30,30)] w-full h-20 rounded flex justify-center items-center mb-10'>

<h2 className='text-[#FFFFFF] text-3xl font-extrabold'>Espresso Emporium</h2>

</div>
      <h1 className="text-5xl text-center my-8">Coffee House: {coffee.length}</h1>

      <div className='flex justify-center mb-5 mt-5'>
      <Link to="/addCoffee"><button className='btn btn-warning '>Add Coffee</button></Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-4">
        {coffee.map((item, index) => (
          <div key={index} className="bg-[#F4F3F0] rounded-lg shadow-md flex items-center p-4 space-x-6">
            {/* Coffee Image */}
            <div>
              <img
                src={item.photo || "https://via.placeholder.com/120x150"} // Use dynamic data for the image
                alt={item.name || "Coffee Cup"}
                className="w-24 h-32 object-cover rounded-lg"
              />
            </div>

            {/* Coffee Details */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-800">
                Name: <span className="font-normal">{item.name || "N/A"}</span>
              </h2>
              <p className="text-sm text-gray-700">
                Chef: <span className="font-medium">{item.chef || "N/A"}</span>
              </p>
              <p className="text-sm text-gray-700">
                Price: <span className="font-medium">{item.price || "N/A"} Taka</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col space-y-3">
              <button className="btn btn-sm btn-ghost text-[#D2B48C] hover:bg-[#D2B48C] hover:text-white rounded-md">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12h.01M12 15h.01M9 12h.01M12 9h.01M12 3v1m0 16v1m4-9h1m-9 0H7m4-4h.01M12 7v1m0 4v1m0 4v1"
                  />
                </svg> */}
                Show Details
              </button>
              <Link to={`/updateCoffee/${item._id}`} className="btn btn-sm btn-ghost text-gray-800 hover:bg-gray-800 hover:text-white rounded-md">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg> */}
                Update
              </Link>
              <button onClick={()=>handleDelete(item._id)} className="btn btn-sm btn-ghost text-red-500  hover:bg-red-500 hover:text-white rounded-md">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg> */}
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
