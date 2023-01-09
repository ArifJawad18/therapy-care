import React, { useEffect, useState } from "react";
import ServicedtlsCard from "./ServicedtlsCard";

const Servicedetails = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("allservices.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="grid gap-6 ml-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServicedtlsCard
            key={service._id}
            service={service}
          ></ServicedtlsCard>
        ))}
      </div>
    </div>
  );
};

export default Servicedetails;
