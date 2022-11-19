import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Checkout = () => {
    const {_id,title} =  useLoaderData();
    const {user} = useContext(AuthContext)

    const handlePlaceOrder = event =>{
        event.preventDefault();
        const form = event.target;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const order =  {
            service:_id,
            serviceName: title,
            email,
            message

        }
        
    }
	return (
		<div>
            <h1>{title}</h1>
			<section className="p-6 text-gray-800">
	<form onSubmit={handlePlaceOrder} novalidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-50 ng-untouched ng-pristine ng-valid">
		<h2 className="w-full text-blue-500 text-3xl font-bold leading-tight">Customer Reviews</h2>
		<div>
			<label for="email" className="block mb-1 ml-1">Email</label>
			<input name="" id="email" type="email" placeholder="Your email" defaultValue={user?.email} required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-600 bg-gray-100" />
		</div>
		<div>
			<label for="message" className="block mb-1 ml-1">How was your experience?</label>
			<textarea name="" id="message" type="text" placeholder="Your experience..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-600 bg-gray-100"></textarea>
		</div>
			<button type="submit" value="Place Your Order" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-blue-600 focus:ring-blue-600 hover:ring-blue-600 text-gray-50">Place Your Order</button>
	
	</form>
</section>
		</div>
	);
};

export default Checkout;