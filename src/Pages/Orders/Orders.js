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
      fetch(`http:/localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data.deletedCount > 0){
            alert('deleted successfully');
            const remaining = orders.filter(odr => odr._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map(order =><OrderRow
              key={order._id}
              order ={order}
              handleDelete={handleDelete}
              ></OrderRow>)
            }
          </tbody>
        </table>
      </div>

    
    </div>
  );
};

export default Orders;
