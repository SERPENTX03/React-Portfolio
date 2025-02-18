import React from "react";
import { dataService } from "@/utils/data";

const Service = () => {
  return (
    <section className="max-w-[1200px] mx-auto my-10 " id="service">
      <div className=" mx-6  gap-6">
        {dataService().map((service, index) => (
        <div key={index} className="text-xl
         font-semibold rounded-lg px-1 py-1 bg-gradient-to-bl from-blue-500 to-purple-500 from-20%">
            <div className="p-8 bg-[#121212] text-neutral-200 rounded-lg">
              <h2>{service.pack}</h2>
              <p>{service.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
