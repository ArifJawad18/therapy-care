import React, { useEffect, useState } from 'react';



const OrderRow = ({orders}) => {
    const {_id,serviceName,  price,  email} = orders;
    const [orderService, setOrdersService] = useState({})
    useEffect(() =>{
        fetch(`http:/localhost:5000/services/${service}`)
        .then(res => res.json())
        .then(data => setOrdersService(data))
    }, [service])

    const handleDelete = id =>{
      const proceed = window.confirm('A you want to cancel this order ?');
      if(proceed){
        fetch(`http:/localhost:5000/services/${id}`,{
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data)

        })

      }

    }



    return (
      <div>
      <div className="overflow-x-auto w-full">
 <table className="table w-full">

   <thead>
     <tr>
       <th>{serviceName}</th>
       <th>{price}</th>
       <th>{email}</th>
       <th></th>
     </tr>
   </thead>
   <tbody>
     <tr>
       <th>
         <label>
           <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
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
     </tr>
   </tbody>
 </table>
</div>
   <tbody>
   </tbody>
   
</div>
    );
};

export default OrderRow;