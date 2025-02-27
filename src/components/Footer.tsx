import { useEffect, useState } from "react";
import axios from "axios";

type FooterData = {
  desc: string;
  title: string;
};
export default function FooterComponent() {
  const [footer, setFooter] = useState<FooterData>();
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://cms-next-rosy.vercel.app/api/footer", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response.data.data);
        if (response.data && response.data.data) {
          const dt = response.data.data;
          console.log(dt, "footer");
          setFooter(dt[0]);
        }
      })
      .catch(function (error) {
        console.log("Error:", error);
        setError(error.message);
      });
    // .finally(function () {
    // setLoading(false);
    // });
  }, []);

  // if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    // <div className="bg-[#07152A] flex flex-row py-[25px] px-[32px] md:px-[79px]">
    //   <div className="w-[100%] justify-start text-[white] font-[Poppins] text-[14px] md:text-[20px] font-normal">
    //     Copyright © Attorney Law
    //   </div>
    //   {/* <div className="w-[50%] justify-end flex flex-row"></div> */}
    // </div>
    <div className="bg-[linear-gradient(180deg,_#009688_29%,_#4db6ac_100%)]  text-[white] font-[Poppins] text-[14px] md:text-[20px] font-normal leading-[200%] text-center py-[15px]">
      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-[80px] py-[31px] md:py-[71px] bg-[#CBD1D1] border-b-[1px] border-b-solid border-b-[#3A4553]">
        <div>
          <img src={img} />
        </div>
        <div>
          <div className="border-b-[#3A4553] border-b-[1px] border-b-solid pb-[20px] md:pb-[33px] pt-[20px] md:pt-[33px] mb-[20px] md:mb-[33px] border-t-[#3A4553] border-t-[1px] border-t-solid">
            <p className="text-[#000000] font-[Poppins] text-[26px] md:text-[30px] font-bold leading-[114.6%]">
              Layanan Jasa
            </p>
          </div>
          <ul>
            <li className="text-[#000000] font-[Poppins] text-[14px] md:text-[20px] font-normal leading-[200%]">
              Legal Advice
            </li>
            <li className="text-[#000000] font-[Poppins] text-[14px] md:text-[20px] font-normal leading-[200%]">
              Legal Drafting
            </li>
            <li className="text-[#000000] font-[Poppins] text-[14px] md:text-[20px] font-normal leading-[200%]">
              Legal Opinion
            </li>
            <li className="text-[#000000] font-[Poppins] text-[14px] md:text-[20px] font-normal leading-[200%]">
              Somasi
            </li>
            <li className="text-[#000000] font-[Poppins] text-[14px] md:text-[20px] font-normal leading-[200%]">
              Negosiasi
            </li>
            <li className="text-[#000000] font-[Poppins] text-[14px] md:text-[20px] font-normal leading-[200%]">
              Legal Investigasi
            </li>
            <li className="text-[#000000] font-[Poppins] text-[14px] md:text-[20px] font-normal leading-[200%]">
              Pendirian Badan Usaha
            </li>
            <li className="text-[#000000] font-[Poppins] text-[14px] md:text-[20px] font-normal leading-[200%]">
              Berbadan Hukum
            </li>
          </ul>
        </div>
        <div>
          <div className=" md:pb-[33px] pt-[20px] md:pt-[33px] mb-[20px] md:mb-[33px] ">
            <p className="text-[white] font-[Poppins] text-[26px] md:text-[30px] font-bold leading-[114.6%] invisible">
              Layanan Jasa
            </p>
          </div>
          <ul>
            <li className="text-[#000000] font-[Poppins] text-[14px] md:text-[20px] font-normal leading-[200%]">
              Perdata
            </li>
            <li className="text-[#000000] font-[Poppins] text-[14px] md:text-[20px] font-normal leading-[200%]">
              Pidana
            </li>
            <li className="text-[#000000] font-[Poppins] text-[14px] md:text-[20px] font-normal leading-[200%]">
              Sengketa TUN
            </li>
            <li className="text-[#000000] font-[Poppins] text-[14px] md:text-[20px] font-normal leading-[200%]">
              Sengketa Merek
            </li>
            <li className="text-[#000000] font-[Poppins] text-[14px] md:text-[20px] font-normal leading-[200%]">
              Sengketa Pajak
            </li>
            <li className="text-[#000000] font-[Poppins] text-[14px] md:text-[20px] font-normal leading-[200%]">
              Perkara Perdata Agama
            </li>
            <li className="text-[#000000] font-[Poppins] text-[14px] md:text-[20px] font-normal leading-[200%]">
              Pendirian Badan Usaha
            </li>
          </ul>
        </div>
        <div>
          <div className="border-b-[#3A4553] border-b-[1px] border-b-solid pb-[20px] md:pb-[33px] pt-[20px] md:pt-[33px] mb-[20px] md:mb-[33px] border-t-[#3A4553] border-t-[1px] border-t-solid">
            <p className="text-[#000000] font-[Poppins] text-[26px] md:text-[30px] font-bold leading-[114.6%]">
              Hubungi Kami
            </p>
          </div>
          <p className="text-[#000000] font-[Poppins] text-[14px] md:text-[20px] font-normal leading-[200%] mb-[50px]">
            Jl. Pondasi Raya No. 28, RT.02 RW 17, Pulo Gadung, Jakarta Timur,
            13210
          </p>
          <p className="text-[#000000] font-[Poppins] text-[14px] md:text-[20px] font-normal leading-[200%]">
            Phone: (+62) 81294457400 <br />
            Email: psa_lawoffice@gmail.com
          </p>
        </div>
      </div> */}
      <div className="block md:hidden">
        {footer?.title} © <br />
        {footer?.desc}
      </div>
      <div className="hidden md:block">
        {footer?.title} © {footer?.desc}
      </div>
      {/* <div className="bg-[#CBD1D1] text-[#0056B3] font-[Poppins] text-[14px] md:text-[20px] font-normal leading-[200%] text-center py-[25px] border-b-[1px] border-b-solid border-b-[#3A4553]">
        {footer?.title} © {footer?.desc}
      </div> */}
    </div>
  );
}
