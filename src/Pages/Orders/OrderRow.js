import React, { useEffect, useState } from 'react';



const OrderRow = ({orders}) => {
    const {serviceName,  price,  email} = orders;
    const [orderService, setOrdersService] =useState({})

    useEffect(() =>{
        fetch('/}')
        .then(res => res.json())
        .then(data => setOrdersService(data))
    }, [])
    return (
        <div className="overflow-x-auto w-full">
        <table className="table w-full">
      
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>{serviceName}</th>
              <th>{price}</th>
              <th>{email}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          </tbody>
          
        </table>
      </div>
    );
};

export default OrderRow;