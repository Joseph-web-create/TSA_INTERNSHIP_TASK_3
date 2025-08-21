const PropertSection = () => {

  const content = [{
    img:""
  }]
  return (
    <div className="max-w-[1024px] mx-auto">
      <div className="mt-10 flex justify-between">
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
    </div>
  );
};

export default PropertSection;
