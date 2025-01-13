// import img1 from "/Spotifysvg.svg";

export default function OurClientComponent(params) {
  
  return (
    <>
      <div className="py-[24px] md:py-[80px] px-[100px]">
        <p className="text-[#0056B3] font-[Poppins] text-[32px] md:text-[40px] font-semibold leading-[32px] text-center pb-[60px]">
          Our Clients
        </p>
        <div className={`grid grid-cols-1 md:grid-cols-${params?.portoClient?.length} gap-${params?.portoClient?.length+2} `}>
          {params?.portoClient?.map((el) => (
            <div className="flex items-center py-[5px]">
              <img src={el.url_image} className="block m-auto w-[300px]" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
