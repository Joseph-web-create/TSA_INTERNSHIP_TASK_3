import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#035A33]">
      <div className="max-w-[1024px] mx-auto mt-10">
        <div className="text-white flex lg:flex-row flex-col px-2 gap-4 justify-between py-10">
          <div>
            <div>
              <div className="text-white flex items-center  gap-2 mb-4">
                <p className="bg-[#4BA586] rounded-full p-2">BH</p>
                <p className="text-2xl font-bold">BetaHouse</p>
              </div>
            </div>
            <div className="mb-2">
              <p className="text-white ">
                Discover, rent, and find your ideal home hassle-free with <br />
                BetaHouse. Take control of your rental journey <br /> today!
              </p>
            </div>

            <div className="text-white flex flex-col gap-2">
              <p>
                <i className="ri-map-pin-2-fill mr-1"></i> 95 Tinubu Estate,
                Lekki, Lagos
              </p>
              <p>
                <i className="ri-phone-fill mr-1"></i>+234 675 8935 675
              </p>
              <p>
                <i className="ri-mail-fill mr-1"></i>support@rentbetahouse.com
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-2xl font-bold mb-4">Quick Links</p>
            <p>Home</p>
            <p>Properties</p>
            <p>About</p>
            <p>Contact us</p>
            <p>Blog</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-2xl font-bold mb-4">More</p>
            <p>Agents</p>
            <p>Affordable Houses</p>
            <p>FAQ’s</p>
          </div>
          <div className="flex flex-col gap-2 ">
            <p className="text-2xl font-bold mb-4">Popular Search</p>
            <p>Apartment for sale</p>
            <p>Apartment for rent</p>
            <p>3 bedroom flat</p>
            <p>Bungalow</p>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="max-w-[1024px] mx-auto ">
        <div className="text-white flex lg:flex-row flex-col gap-2 justify-between py-10">
          <p>
            Copyright 2023 Betahouse <br className="lg:hidden"/> | Designed by Michael.fig
          </p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
