import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import OrderRow from "./OrderRow";


const Orders = () => {
  const { user } = useContext(AuthContext);

  const [orders, setOrders] = useState([]);

  useState(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setOrders(data))
 
  }, [user?.email]);

  const handleDelete = id => {
    const proceed = window.confirm("A you want to cancel this order ?");
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data.deletedCount > 0){
            alert("Deleted successfully");
            const remaining = orders.filter((odr) => odr._id !== id);
            setOrders(remaining);
          }
        });
      
    }
  }

  const handleStatusUpdate = id =>{
    fetch(`http://localhost:5000/orders/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({status: 'Approved'})
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.modifiedCount > 0){
        const remaining = orders.filter(odr => odr._id !== id);
        const approving = orders.find(odr => odr._id === id);
        approving.status ='Approved'

        const newOrder = [approving, ...remaining];
        setOrders(newOrder);
      }
    })

  }

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead className="bg-gray-300">
           <h2 className="text-2xl text-center text-blue-700">All Orders</h2>
          </thead>
          <th>
            {
              orders.map(order =><OrderRow
              key={order._id}
              order ={order}
              handleDelete={handleDelete}
              handleStatusUpdate={handleStatusUpdate}
              ></OrderRow>)
            }
          </th>
        </table>
      </div>

    
    </div>
  );
};

export default Orders;
