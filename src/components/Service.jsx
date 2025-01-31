import React from "react";
import { dataService } from "@/utils/data";

const Service = () => {
  return (
    <section className="max-w-[1200px] mx-auto my-10 " id="service">
      <div className="grid grid-cols-1 mx-6  gap-6">
        {dataService().map((service, index) => (
          <div
            key={index}
            className="glass p-6 text-gray-300 flex flex-col items-center"
          >
            <h2>{service.pack}</h2>
            <p>{service.detail}</p>
     
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
