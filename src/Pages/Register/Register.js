import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Register = () => {
  const [error,setError] = useState('');

  const {createUser, updateUserProfile} = useContext(AuthContext);

  const handleSubmit = event => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const photoURL = form.photoURL.value;
      const email = form.email.value;
      const password = form.password.value;
      // console.log(name,photoURL,email,password);

      createUser(email, password)
      .then( result => {
          const user = result.user;
          console.log(user);
          setError('');
          form.reset();
          handleUpdateUserProfile(name, photoURL)
      })
      .catch( e => {
          console.error(e)
          setError(e.message)

      });

      const handleUpdateUserProfile = (name, photoURL) => {
          const profile = {
              displayName:name,
              photoURL: photoURL
          }
          updateUserProfile(profile)
          .then(() => {})
          .catch(error => console.error(error));
      }

  }
  return (
    <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
          <h1 className="text-2xl text-center text-blue-500 font-bold">Register</h1>
          <form onSubmit={handleSubmit} novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
              <div className="space-y-1 text-sm">
                  <label for="name" className="block text-gray-600">Your Name</label>
                  <input type="text" name="name" id="name" placeholder="Your name" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600" />
              </div>
              <div className="space-y-1 text-sm">
                  <label for="email" className="block text-gray-600">Your Email</label>
                  <input type="text" name="email" id="email" placeholder="Enter email" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600" />
              </div>
              <div className="space-y-1 text-sm">
                  <label for="photo url" className="block text-gray-600">Photo URL</label>
                  <input type="text" name="photoURL" id="photo url" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600" />
              </div>
              <div className="space-y-1 text-sm">
                  <label for="password" className="block text-gray-600">Password</label>
                  <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600" />
              </div>
              <button className="block w-full p-3 text-center rounded-xl text-gray-50 bg-blue-600">Register</button>
          </form>
          </div>
      </div>
      
  );
};

export default Register;