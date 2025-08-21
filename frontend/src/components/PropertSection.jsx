import image1 from "../assets/home1.png";
import image2 from "../assets/home2.jpg";
import image3 from "../assets/home3.png";
import image4 from "../assets/home4.png";
import image5 from "../assets/home5.png";
import image6 from "../assets/home6.png";
import image7 from "../assets/home7.png";
import image8 from "../assets/home8.png";
import image9 from "../assets/home9.png";

const PropertSection = () => {
  const content = [
    {
      title: "Real House Luxury Villa",
      location: "Victoria Island, Lagos",
      bedRoom: "6 Bedrooms",
      bathRoom: "3 Bathrooms",
      price: "₦ 3,340,000,000",
      img: image1,
    },
    {
      title: "Exquisite Haven Villa",
      location: "Festac, Lagos",
      bedRoom: "5 Bedrooms",
      bathRoom: "3 Bathrooms",
      price: "₦ 4,000,000/1 Year",
      img: image2,
    },
    {
      title: "Luxe Palatial Villa",
      location: "Gbagada, Lagos",
      bedRoom: "7 Bedrooms",
      bathRoom: "3 Bathrooms",
      price: "₦ 5,350,000,000",
      img: image3,
    },
    {
      title: "Harmony Luxury Villa",
      location: "Mushin, Lagos",
      bedRoom: "4 Bedrooms",
      bathRoom: "3 Bathrooms",
      price: "₦ 4,000,000/1 Year",
      img: image4,
    },
    {
      title: "Real House Luxury Villa",
      location: "Mushin, Lagos",
      bedRoom: "6 Bedrooms",
      bathRoom: "3 Bathrooms",
      price: "₦ 350,000,000",
      img: image5,
    },
    {
      title: "Real House Luxury Villa",
      location: "Lekki-Ajah, Lagos",
      bedRoom: "5 Bedrooms",
      bathRoom: "3 Bathrooms",
      price: "₦ 4,200,000/1 Year",
      img: image6,
    },
    {
      title: "Infinite Bliss Villa",
      location: "Ishiagu, Enugu",
      bedRoom: "5 Bedrooms",
      bathRoom: "3 Bathrooms",
      price: "₦ 2,350,000,000",
      img: image7,
    },
    {
      title: "Real House Luxury Villa",
      location: "Works Layout, Owerri",
      bedRoom: "8 Bedrooms",
      bathRoom: "6 Bathrooms",
      price: "₦ 3, 350,000/1 Year",
      img: image8,
    },
    {
      title: "Real House Luxury Villa",
      location: "Ikeja, Lagos",
      bedRoom: "6 Bedrooms",
      bathRoom: "6 Bathrooms",
      price: "₦ 600,000,000",
      img: image9,
    },
  ];
  return (
    <div className="max-w-[1024px] mx-auto">
      <div className="mt-10 flex flex-col lg:flex-row justify-between p-2 lg:p-0">
        <div className="flex gap-4">
          <p>
            <i class="ri-equalizer-line"></i> More Filter
          </p>
          <p>Showing 1 – 10 of 15 results</p>
        </div>
        <div className="flex gap-4">
          <p className="text-[#717171]">Sort by:</p>
          <p>
            Default <i class="ri-arrow-down-s-line"></i>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 p-2 lg:p-0">
        {content.map((item, i) => (
          <div key={i}>
            <div className="relative">
              <img
                src={item.img}
                className="rounded-tl-lg rounded-tr-lg h-[300px] object-cover"
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
                  <i class="ri-link"></i>
                </div>
                <div className="bg-[#878787B2] px-2 rounded-sm">
                  <i class="ri-video-on-fill"></i>
                </div>
                <div className="bg-[#878787B2] px-2 rounded-sm">
                  <i class="ri-image-fill"></i>
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
                <p className="text-2xl text-[#373737] font-bold">
                  {item.price}
                </p>
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
    </div>
  );
};

export default PropertSection;
