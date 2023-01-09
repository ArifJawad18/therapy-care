import { data } from "autoprefixer";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Orders = () => {
  const { user } = useContext(AuthContext);

  const [orders, setOrders] = useState({});

  useState(() => {
    fetch(`http:/localhost:5000/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
    if (data.deleteCount > 0) {
      const remaining = orders.filter((odr) => odr._id);
      setOrders(remaining);
    }
  }, []);

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <label>
                  <button className="btn btn-ghost">X</button>
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="" alt="" />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <h1></h1>
              </td>
              <td></td>
              <th>
                <button className="btn btn-ghost btn-xs"></button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>

      {/* {
        orders.map(order => <OrderRow
        key={order._id}
        order={order}
        handleDelete={ handleDelete}
        
        ></OrderRow>)    
       }  */}
    </div>
  );
};

export default Orders;
