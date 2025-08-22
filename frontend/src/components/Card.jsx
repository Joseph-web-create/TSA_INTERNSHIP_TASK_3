import React from "react";

const Card = ({ content }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 mt-4 p-2 lg:p-0">
      {content.map((item, i) => (
        <div key={i} className="">
          <div className="relative ">
            <img
              src={item.img}
              className="rounded-tl-lg w-full rounded-tr-lg h-[300px] object-cover"
            />
            <div className="text-white flex justify-between absolute top-2 p-2 w-full">
              <button className="bg-[#3D9970] px-4 py-2 rounded-lg">
                Featured
              </button>
              <button className="bg-[#D3D3D3B2] px-2 py-1 rounded-lg">
                For Sale
              </button>
            </div>

            <div className="flex gap-3 absolute bottom-2 right-1 text-white">
              <div className="bg-[#878787B2] px-2 rounded-sm ">
                <i className="ri-link"></i>
              </div>
              <div className="bg-[#878787B2] px-2 rounded-sm">
                <i className="ri-video-on-fill"></i>
              </div>
              <div className="bg-[#878787B2] px-2 rounded-sm">
                <i className="ri-image-fill"></i>
              </div>
            </div>
          </div>

          <div className="px-4 border border-[#DDD8D8] py-4 rounded-bl-lg rounded-br-lg">
            <p className="font-bold text-[#444444]">{item.title}</p>

            <p>
              <i className="ri-map-pin-2-fill text-[#666666] mr-2"></i>
              {item.location}
            </p>

            <div className="flex justify-between mt-4">
              <p>
                <i className="ri-hotel-bed-fill text-[#666666] mr-2"></i>
                {item.bedRoom}
              </p>
              <p>
                <i className="fa-solid fa-bath text-[#666666] mr-2"></i>
                {item.bathRoom}
              </p>
            </div>
            <div className="px-3">
              <div className="divider "></div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-2xl text-[#373737] font-bold">{item.price}</p>
              <span className="flex gap-2">
                <i className="ri-arrow-left-right-line"></i>
                <i className="ri-share-line"></i>
                <i className="ri-heart-line"></i>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
