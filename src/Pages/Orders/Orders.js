import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Orders = () => {
    const {user} = useContext(AuthContext);

    const [orders, setOrders] = useState({})


    useState(() =>{
        fetch(`http:/localhost:5000/services`)
        .then(res => res.json())
        .then(data =>setOrders(data))
        
    }, [user?.email])

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
        <th>ServiceName</th>
        <th>Price</th>
        <th>Email</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* {
        orders.map(order => <OrderRow
        key={order._id}
        order={order}
        ></OrderRow>)    
       } */}
    
      <tr>
        <th>
          <label>
            <button className='btn btn-ghost'>X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="" alt="" />
              </div>
            </div>
            <div>
              <div className="font-bold"></div>
              <div className="text-sm opacity-50"></div>
            </div>
          </div>
        </td>
        <td>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</div>
    );
};

export default Orders;