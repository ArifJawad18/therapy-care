import React, { useEffect, useState } from "react";

const OrderRow = ({ order,  }) => {
  const { _id, serviceName, price, email, service,  } = order;
  const [orderService, setOrdersService] = useState({});
  useEffect(() => {
    fetch(`http:/localhost:5000/services/${service}`)
      .then(res => res.json())
      .then(data => setOrdersService(data));
  }, [service])

 const handleDelete = id =>{
  const proceed = window.confirm('Are you sure');
  if(proceed){
    fetch(`http:/localhost:5000/orders/${_id}`,{
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })

}

 }

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
         
            <th>ServiceName: {serviceName}</th>
            <th>price: ${price}</th>
            <th>Email: {email}</th>
            <th>
              
                <button onClick={() => handleDelete(_id)} className="btn btn-warning btn-sm">Delete</button>
              
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">

                    {
                      orderService?.img && 
                      <img src={orderService.img} alt="" />
                    }
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderRow;
