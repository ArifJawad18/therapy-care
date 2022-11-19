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

        const Orders =  {
            service:_id,
            serviceName: title,
            email,
            message

        }
		
		fetch('', {
			method: 'POST',
			headers:{
				'content-type': ''
			},
			body: JSON.stringify(Orders)
		})
		.then(res => res.json())
		.then(data =>  {
			console.log(data)
			if(data.acknowledged){
				alert('Order successfully')
				form.reset();
			}
		})

		}

	return (
			<div>
			<div className=" mt-5 container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://www.summithealth.com/sites/default/files/2021-05/Hand%20Therapy.jpg" alt="" className="h-80 bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
				<h2 className="text-3xl font-bold">Hand Therapy</h2>
				<p className='text-blue-500 font-bold'>Price: $100</p>
				<p className="my-6 text-gray-600">Manage and reduce joint pain. Increase range of motion, function, dexterity, and strength. Desensitize nerves following injury or trauma. Provide education and training to adapt to daily activities and responsibilities.</p>
			</div>
		</div>
			</div>
            <h1>{title}</h1>
			<section className="p-6 text-gray-800">
	<form onSubmit={handlePlaceOrder} novalidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-50 ng-untouched ng-pristine ng-valid">
		<h2 className="w-full text-blue-500 text-3xl font-bold leading-tight">Customer Reviews</h2>
		<div>
			<label for="email" className="block mb-1 ml-1">Email</label>
			<input name="" id="email" type="email" placeholder="Your email" defaultValue={user?.email} required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-600 bg-gray-100" />
		</div>
		<div>
			<label for="message" className="block mb-1 ml-1">Customer Feedback?</label>
			<textarea name="" id="message" type="text" placeholder="Your feedback.." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-600 bg-gray-100"></textarea>
		</div>
			<button type="submit" value="Place Your Order" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-blue-600 focus:ring-blue-600 hover:ring-blue-600 text-gray-50">Submit</button>
	
	</form>
</section>
		</div>
	);
};

export default Checkout;