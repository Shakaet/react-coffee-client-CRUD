import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from './Provider';
import Swal from 'sweetalert2';

const Login = () => {
                 

    let {handleSignIn}= useContext(AuthProvider)
    const navigate = useNavigate();
    let location= useLocation()

    const redirectPath = location.state?.from || "/";
    
    let handleLogin=(e)=>{
        e.preventDefault()

        let email=e.target.email.value
        let password=e.target.password.value

        console.log(email,password)
        handleSignIn(email,password)
        .then((result) => {
            // alert("login Successful")
            console.log(result.user)
            navigate(redirectPath);
            



            let lastSignInTime= result.user.metadata.lastSignInTime

            let UpdateData={
                email,lastSignInTime
            }

            fetch(`https://coffee-crud-server-five.vercel.app/${email}`, {
                method: "PATCH", // or PATCH for partial updates
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(UpdateData), // Convert object to JSON string
              })
                .then((response) => response.json())
                .then((data) => {
                    
                  console.log(data)
                  if(data.matchedCount){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Login successfully',
                        icon: 'success',
                        confirmButtonText: 'OK',
                      });
                    //   navigate(redirectPath);
                      // Reset form fields
                  }
                })





          })
          .catch((error) => {
            console.log(error)
            alert(error)
          });


    }
    return (
        <div>
             <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Login to Your Account
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              name='email'
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              name='password'
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
            <label className="label">
              <button
                type="button"
                className="label-text-alt text-blue-600 hover:underline"
              >
                Forgot Password?
              </button>
            </label>
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>
        <button
         
          type="button"
          className="btn btn-primary w-full mt-5"
        >
          Google Sign In
        </button>
        <p className="text-center mt-5">
          Don't have an account?
          <Link to="/register" className="text-blue-500 font-bold ms-2">
            Register
          </Link>
        </p>
      </div>
    </div>
        </div>
    );
};

export default Login;