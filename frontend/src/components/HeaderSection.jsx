import React from "react";
import img from "../assets/Bg-header.jpg";
import Header from "./Header";

const HeaderSection = () => {
  return (
    <div className="relative min-h-[80vh]">
      <img
        src={img}
        alt="background img"
        className="w-full  h-[100vh] lg:max-h-[80vh] object-cover"
      />
      <div className="bg-[#00000046] h-[100vh] lg:max-h-[80vh] w-full absolute top-0">
        <div className="max-w-[1024px] mx-auto">
          <Header />
          <div className="text-center text-white mt-18">
            <p className="text-2xl lg:text-5xl font-bold mb-4">
              Browse Our Properties
            </p>
            <p className="text-[18px] lg:text-2xl w-[100%] mx-auto">
              Find your perfect home among our curated properties. Start
              browsing now!
            </p>
          </div>

          <div className="px-2 mt-4 lg:mt-20">
            <div className="bg-[#FFFFFF33] w-full lg:p-10 px-4  py-4 rounded-sm ">
              <div className="bg-white rounded-lg py-4 lg:py-0">
                <div className="flex flex-col md:flex-row md:justify-between ">
                  <div className="p-4 text-center md:text-left">
                    <p>Locaton</p>
                    <p className="text-[#787878]">eg. Gbagada</p>
                  </div>
                  <div className="text-center md:text-left p-4">
                    <p>PROPERTY TYPE</p>
                    <p className="text-[#787878]">eg. Duplex, Bedroom Flat</p>
                  </div>
                  <div className="p-4 text-center md:text-left">
                    <p>BEDROOM</p>
                    <p className="text-[#787878]">
                      <i class="ri-subtract-line mr-2"></i>0
                      <i class="ri-add-circle-line ml-2"></i>
                    </p>
                  </div>
                  <button className="bg-[#3D9970] text-white rounded-lg p-4 lg:w-[200px] mx-auto lg:mx-0 lg:rounded-none  lg:rounded-tr-lg lg:rounded-br-lg  ">
                    Find Property
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
