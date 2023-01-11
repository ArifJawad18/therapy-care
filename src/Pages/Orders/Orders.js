import { data } from "autoprefixer";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";


const Orders = () => {
  const { user } = useContext(AuthContext);

  const [orders, setOrders] = useState({});

  useState(() => {
    fetch(``)
      .then((res) => res.json())
      .then((data) => setOrders(data));
    if (data.deleteCount > 0) {
      const remaining = orders.filter((odr) => odr._id);
      setOrders(remaining);
    }
  }, []);

  return (
    <div>
      <h1>{orders.length}</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
               
              </th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <label>
                  <button className="btn btn-ghost"></button>
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="">
                      {/* <img src="" alt="" /> */}
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

    
    </div>
  );
};

export default Orders;
