import React from 'react';

const ServicesCard = ({service}) => {
    const {_id,img, price, title,description} = service;
    return (
        <div>
        <div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800">
	<img src= {img} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h5 className="text-3xl font-semibold tracking-wide">{title}</h5>
            <p className='text-blue-500 font-semibold'>Price: ${price}</p>
			<p className="text-gray-800">{description}.</p>
		</div>
		<button type="button" className="px-8 py-3 font-semibold rounded-full bg-blue-500 text-gray-100"> <a href={`/checkout/${_id}`}>SEE MORE</a></button>
		
	</div>
</div>
        </div>
    );
};

export default ServicesCard;