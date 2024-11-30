import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    let sigleCoffee= useLoaderData()

    let handleUpdate=(e)=>{
        e.preventDefault()
        let form=e.target
        let name=form.name.value
        let chef=form.chef.value
        let supplier=form.supplier.value
        let taste=form.taste.value
        let category=form.category.value
        let details=form.details.value
        let photo=form.photo.value
        let data={
            name,chef,supplier,taste,category,details,photo
        }

        console.log(data)

        fetch(`https://coffee-crud-server-five.vercel.app/user/${sigleCoffee._id}`, {
            method: "PUT", // or PATCH for partial updates
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data), // Convert object to JSON string
          })
            .then((response) => response.json())
            .then((data) => {
                
              console.log(data)
              if(data.matchedCount){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee info added successfully',
                    icon: 'success',
                    confirmButtonText: 'OK',
                  });
                  // Reset form fields
                  form.reset();
              }
            })
        

   
   }
    return (
        <div>
            <div>

            <div className='bg-[rgb(30,30,30)] w-full h-20 rounded flex justify-center items-center mb-10'>

                <h2 className='text-[#FFFFFF] text-3xl font-extrabold'>Espresso Emporium</h2>

            </div>


            <div className='flex justify-center mt-5 mb-5'>
            <Link to="/"><button className='btn btn-warning'>Show All Coffee</button></Link>
            </div>
            <div className="container mx-auto p-6 bg-[#F4F3F0] parkinsans-font ">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold text-[#374151]">Update Existing Coffee</h2>
        <p className="mt-2 text-gray-600 text-sm lg:w-1/2 mx-auto">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
        </p>
      </div>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input 
                type="text" 
                id="name"
                name='name' 
                required
                defaultValue={sigleCoffee.name}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter coffee name" 
              />
            </div>

            <div>
              <label htmlFor="chef" className="block text-sm font-medium text-gray-700">Chef</label>
              <input 
                type="text" 
                id="chef"
                name='chef'
                defaultValue={sigleCoffee.chef}
                required 
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter coffee chef" 
              />
            </div>

            <div>
              <label htmlFor="supplier" className="block text-sm font-medium text-gray-700">Supplier</label>
              <input 
                type="text" 
                id="supplier"
                required 
                defaultValue={sigleCoffee.supplier}
                name='supplier'

                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter coffee supplier" 
              />
            </div>

            <div>
              <label htmlFor="taste" className="block text-sm font-medium text-gray-700">Taste</label>
              <input 
                type="text" 
                id="taste"
                name='taste'
                defaultValue={sigleCoffee.taste}
                required 
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter coffee taste" 
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
              <input 
                type="text" 
                id="category"
                name='category'
                defaultValue={sigleCoffee.category}
                required 
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none
                  focus:ring-2 focus:ring-blue-500"
                placeholder="Enter coffee category" 
              />
            </div>

            <div>
              <label htmlFor="details" className="block text-sm font-medium text-gray-700">Details</label>
              <input 
                type="text" 
                id="details"
                name='details'
                defaultValue={sigleCoffee.details}
                required 
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter coffee details" 
              />
            </div>

            <div>
              <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Photo</label>
              <input 
                type="text" 
                id="photo"
                name='photo'
                defaultValue={sigleCoffee.photo} 
                required 
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter photo URL" 
              />
            </div>
          </div>

          <div className="mt-6 text-center">
            <button 
              type="submit" 
              className="px-6 py-3 bg-[#D2B48C] text-gray-600 font-bold rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Update Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
            
        </div>
        </div>
    );
};

export default UpdateCoffee;