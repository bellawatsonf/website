// import img1 from "/Spotifysvg.svg";
import client1 from "../assets/c1.jpeg";
import client2 from "../assets/c2.jpeg";
import client3 from "../assets/c3.jpeg";
import client4 from "../assets/c4.jpeg";
import client5 from "../assets/c5.jpeg";

export default function OurClientComponent() {
  return (
    <>
      <div className="py-[24px] md:py-[80px] px-[100px]">
        <p className="text-[#0056B3] font-[Poppins] text-[32px] md:text-[40px] font-semibold leading-[32px] text-center pb-[60px]">
          Our Clients
        </p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          <div className="flex items-center">
            <img src={client1} className="block m-auto" />
          </div>
          <div>
            <img src={client2} className="block m-auto" />
          </div>
          <div>
            <img src={client3} className="block m-auto" />
          </div>
          <div>
            <img src={client4} className="block m-auto" />
          </div>
          <div>
            <img src={client5} className="block m-auto" />
          </div>
        </div>
      </div>
    </>
  );
}
