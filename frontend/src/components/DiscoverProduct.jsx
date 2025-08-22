import React from "react";
import house1 from "../assets/house1.jpg";
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.jpg";
import house4 from "../assets/house4.jpg";

const DiscoverProduct = () => {
  const products = [
    {
      title: "Semi Detached Duplex",
      img: house1,
      price: "₦ 1, 430,000,000",
      bed: "6 Bed ",
      bath: "3 Bath ",
      space: "720 sq ft",
      location: "Victoria Island, Lagos",
    },
    {
      title: "Special Duplex",
      img: house2,
      price: "₦ 670,000,000",
      bed: "6 Bed ",
      bath: "3 Bath ",
      space: "720 sq ft",
      location: "Victoria Island, Lagos",
    },
    {
      title: "Split-Level House",
      img: house3,
      price: "₦ 340,000,000",
      bed: "6 Bed ",
      bath: "3 Bath ",
      space: "720 sq ft",
      location: "Victoria Island, Lagos",
    },
    {
      title: "Twin Duplex",
      img: house4,
      price: "₦ 290,000,000",
      bed: "6 Bed ",
      bath: "3 Bath ",
      space: "720 sq ft",
      location: "Victoria Island, Lagos",
    },
  ];
  return (
    <div className="max-w-[1024px] mx-auto mt-10">
      <div className="text-center font-bold">
        <p className="text-4xl">Discover Our Popular Properties</p>
      </div>

      <div className="flex items-center relative mt-18 lg:flex-row flex-col">
        <div className="hidden lg:block absolute top-1/2 left-[-12px] -translate-y-1/2 z-[10]">
          <i className="ri-arrow-left-long-line bg-[#F4F4F4] p-4 rounded-full"></i>
        </div>
        <div className="flex justify-between w-full gap-4 lg:flex-row flex-col px-3">
          {products.map((item, i) => (
            <div key={i} className="relative ">
              <img
                src={item.img}
                alt={item.title}
                className="rounded-lg w-full lg:w-[400px] h-[400px] object-cover"
              />
              <div className="absolute bottom-0 bg-[#00000046]  w-full  text-white  rounded-bl-lg rounded-br-lg px-2 py-4">
                <p className="font-bold text-[16px]">{item.title}</p>
                <p className="font-bold text-[16px]">{item.price}</p>

                <div className="flex gap-2 items-center text-[14px]">
                  <p>{item.bed}</p>
                  <p className="h-[8px] bg-[#FFFFFF] w-[1px] rounded-sm "></p>
                  <p>{item.bath}</p>
                  <p className="h-[8px] bg-[#FFFFFF] w-[1px] rounded-sm"></p>
                  <p>{item.space}</p>
                </div>

                <p>
                  <i className="ri-map-pin-2-fill mr-1"></i>
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden lg:block absolute top-1/2 right-[-10px] -translate-y-1/2 z-[10] text-white">
          <i className="ri-arrow-right-long-line bg-[#3D9970] p-4 rounded-full"></i>
        </div>
      </div>
    </div>
  );
};

export default DiscoverProduct;
