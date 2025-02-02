// import img1 from "/Spotifysvg.svg";

export default function OurClientComponent(params) {
  
  return (
    <>
      <div className="py-[24px] md:py-[80px] px-[100px]">
        <p className="text-[#00695c] font-[Poppins] text-[32px] md:text-[40px] font-semibold leading-[32px] text-center pb-[30px]">
          Our Clients
        </p>
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4`}>
          {params?.portoClient?.map((el) => (
            <div className="flex items-center pb-[15px]">
              <img src={el.url_image} className="block m-auto w-[200px]" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
