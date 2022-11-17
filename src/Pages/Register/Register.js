import React from 'react';


const Register = () => {

  const handleSubmit = event => {
    event.preventDefault();

  }
  
    return (
        <div onSubmit={handleSubmit} className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-2xl text-center text-blue-500 font-bold">Register</h1>
            <form className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input type="text" name='name' placeholder="Username" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="Email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name='photoURL' placeholder="Photo URL" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="Password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
              <button type="button" className="flex items-center justify-center p-3 mr-5 font-semibold tracking-wide rounded-md bg-blue-600 text-gray-50">Register</button>
              <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
              <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          </div>
      
              </div>
          <p className="text-xs text-center sm:px-6 text-gray-600">You have an account?
              <a rel="noopener noreferrer" href="/login" className="underline text-gray-800">Login</a>
          </p>
            </form>
            </div>
          </div>
    );
};

export default Register;