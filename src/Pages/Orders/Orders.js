import React, { useContext, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user, signOut } = useContext(AuthContext);

  const [orders, setOrders] = useState([]);

  useState(() => {
    fetch(
      `https://therapy-care-server.vercel.app/orders?email=${user?.email}`,
      {
        header: {
          authorization: `Bearer ${localStorage.getItem("therapycare-token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return signOut();
        }

        return res.json();
      })
      .then((data) => {
        console.log("receive", data);
        setOrders(data);
      });
  }, [user?.email, signOut]);

  const handleDelete = (id) => {
    fetch(`https://therapy-care-server.vercel.app/orders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("Deleted Order Successfully");
          const remaining = orders.filter((odr) => odr._id !== id);
          setOrders(remaining);
        }
      });
  };

  const handleStatusUpdate = (id) => {
    fetch(`https://therapy-care-server.vercel.app/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = orders.filter((odr) => odr._id !== id);
          const approving = orders.find((odr) => odr._id === id);
          approving.status = "Approved";

          const newOrder = [approving, ...remaining];
          setOrders(newOrder);
        }
      });
  };

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead className="bg-gray-300">
            <h2 className="text-2xl text-center text-blue-700">All Orders</h2>
          </thead>
          <th>
            {orders.map((order) => (
              <OrderRow
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                handleStatusUpdate={handleStatusUpdate}
              ></OrderRow>
            ))}
            <Toaster />
          </th>
        </table>
      </div>
    </div>
  );
};

export default Orders;
