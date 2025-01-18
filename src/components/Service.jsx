import React from "react";

const Service = () => {
  const services = [
    {
      pack: "เริ่มต้น",
      price: "800 - 1,500 THB",
      content:
        "เว็บหน้าเดียวรองรับการเลื่อน เขียนตามดีไซน์ลูกค้า เหมาะสำหรับการใช้งานเบื้องต้น รองรับทุกขนาดหน้าจอ",
    },
    {
      pack: "ระดับกลาง",
      price: "2,000 - 4,000 THB",
      content:"เขียนตามดีไซน์ลูกค้า เปลี่ยนหน้าได้ 3-4หน้า รองรับทุกขนาดหน้าจอ" 
       },
  
  ];
  return (
    <section className="max-w-[1200px] mx-auto my-4">
      <div className="grid grid-cols-1 mx-6 md:grid-cols-2  gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="glass p-6 text-gray-300 flex flex-col items-center"
          >
            <h2>{service.pack}</h2>
            <p>{service.price}</p>
            <p>{service.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
