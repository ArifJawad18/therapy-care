import React, { useEffect, useState } from "react";

const OrderRow = ({ orders }) => {
  const { _id, serviceName, price, email, status } = orders;
  const [orderService, setOrdersService] = useState({});
  useEffect(() => {
    fetch(`http:/localhost:5000/services/${_id}`)
      .then((res) => res.json())
      .then((data) => setOrdersService(data));
  }, [service]);

  const handleDelete = (id) => {
    const proceed = window.confirm("A you want to cancel this order ?");
    if (proceed) {
      fetch(`http:/localhost:5000/services/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

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
            <td></td>
            <td></td>
            <th>
              <button className="btn btn-ghost btn-xs"></button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderRow;
