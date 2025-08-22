import { useState } from "react";
import { content1, content2, content3 } from "../constants/contens";
import Card from "./card";

const PropertSection = () => {
  const [next, setNext] = useState(1);

  const forward = () => {
    if (next >= 4) return;
    setNext((prev) => prev + 1);
  };

  const back = () => {
    if (next === 1) return;
    setNext((prev) => prev - 1);
  };
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

      {next === 1 && <Card content={content1} />}
      {next === 2 && <Card content={content2} />}
      {next === 3 && <Card content={content3} />}
      {next >= 4 && (
        <p className="text-center mt-10 mb-10 text-2xl ">
          No more content to display at this time
        </p>
      )}

      <div className="mx-auto flex justify-center items-center gap-4 p-5 text-[19px]">
        <button className="cursor-pointer" onClick={back}>
          <i className="ri-arrow-left-s-line"></i>
        </button>
        {Array.from([1, 2, 3, 4]).map((item, i) => (
          <div className="flex gap-2 " key={i}>
            <button
              onClick={() => setNext(item)}
              className={`${
                next === item && "text-white bg-[#3D9970] px-2 rounded-sm"
              } cursor-pointer`}
            >
              {item}
            </button>
          </div>
        ))}
        <span className="cursor-pointer" onClick={forward}>
          <i className="ri-arrow-right-s-line"></i>
        </span>
      </div>
    </div>
  );
};

export default PropertSection;
