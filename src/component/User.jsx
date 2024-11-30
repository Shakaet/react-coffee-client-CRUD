import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const User = () => {
    let loaderUser= useLoaderData()

    let [user,setuser]=useState(loaderUser)

    let handleDelete=(id)=>{
        // alert(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          })

          .then((result) => {
            if (result.isConfirmed) {

                fetch(`https://coffee-crud-server-five.vercel.app/users/${id}`, {
                    method: 'DELETE', // HTTP method
                    headers: {
                      'Content-Type': 'application/json',
                    },
                  })
                  .then(res=>res.json())
                  .then(data=>{
                    console.log(data)
                    if(data.deletedCount){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                       
        
                        let remaining=user.filter((item=>item._id !== id))
                        setuser(remaining)
                    }
                  })



             
            }
          });

       


    }
    return (
        <div>

            <h2>Total User :{user.length}</h2>



            <div className="overflow-x-auto">
  <table className="table-auto w-full text-left border-collapse">
    {/* Table Head */}
    <thead className="bg-gray-200">
      <tr>
        <th className="px-4 py-2">Serial No</th>
        <th className="px-4 py-2">Name</th>
        <th className="px-4 py-2">Email</th>
        <th className="px-4 py-2">Creation Time</th>
        <th className="px-4 py-2">Sign In Time</th>
        <th className='px-4 py-2'>Action</th>
      </tr>
    </thead>
    <tbody>
      {user.map((item, index) => (
        <tr key={index} className="hover:bg-gray-100">
          <td className="border px-4 py-2">{index + 1}</td>
          <td className="border px-4 py-2">{item.name}</td>
          <td className="border px-4 py-2">{item.email}</td>
          <td className="border px-4 py-2">{item.creationTime}</td>
          <td className="border px-4 py-2">{item.lastSignInTime}</td>
          <td className='border px-4 py-2'> 
            
            <button className='btn '>Edit</button>
            <button onClick={()=>handleDelete(item._id)} className='btn ms-3'>Delete</button>
        
            
            </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


            
        </div>
    );
};

export default User;