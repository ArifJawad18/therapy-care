import React, { useEffect, useState } from "react";

const OrderRow = ({ order, handleDelete, handleStatusUpdate  }) => {
  const { _id, serviceName, price, email, service, status } = order;
  const [orderService, setOrderService] = useState({});
  useEffect(() => {
    fetch(`http:/localhost:5000/services/${service}`)
      .then(res => res.json())
      .then(data => setOrderService(data));
  }, [service])



  return (
    
      <table className="table w-full">
        <thead>
          <tr>
         
            <th>ServiceName: {serviceName}</th>
            <th>price: ${price}</th>
            <th>Email: {email}</th>
            <th>
              
                <button onClick={() => handleDelete(_id)} className="btn btn-warning btn-sm">Delete</button>
              
            </th>
            <th>
              
                <button onClick={() => handleStatusUpdate(_id)}  className="btn btn-info btn-sm">{status ? status: 'pending'}</button>
              
            </th>
          </tr>
        </thead>
      </table>
  
  );
};

export default OrderRow;
