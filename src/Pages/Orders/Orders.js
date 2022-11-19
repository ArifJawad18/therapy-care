import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Orders = () => {
    const {user} = useContext(AuthContext);

    const [orders, setOrders] = useState({})


    useState(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data =>setOrders(data))
        
    }, [user?.email])


    return (
        <div>
            <h2 className='text-5xl'>You have {orders.length} orders</h2>
            
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
        <th>Email</th>
        <th>price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {/* {
            orders.map(orders => <OrderRow
            key={orders._id}
            order={orders}
            ></OrderRow>)
        } */}
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default Orders;