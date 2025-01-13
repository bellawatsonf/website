import { Button, Spin } from "antd";
import "./App.css";
import HeaderComponent from "./components/Header";

import FooterComponent from "./components/Footer";
import OurClientComponent from "./components/OurClient";

import { useEffect, useState } from "react";
import axios from "axios";

type BannerData = {
  desc: string;
  title: string;
  button_text: string;
  banner_url:string;
};

type HomeData = {
  visi: string;
  misi: string;
  grid2_title: string;
  grid1_title: string;
  title_desc_section:string;
  desc_section:string;
};

type GridItem = {
  title: string;
  description: string[];
  position: number;
}

type FirstGrid = GridItem[];

type PortoClient = {
  name: string;
  desc: string;
  url_image: string;
};



export default function Home() {
  const [bannerData, setBannerData] = useState<BannerData>();
  const [logo, setLogo] = useState<BannerData>();
  const [homeData, setHomeData] = useState<HomeData>();
  const [firstGrid, setFirstGrid] = useState<FirstGrid>();
  const [portoClient,setPortoClient] = useState<PortoClient>()
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://cms-next-rosy.vercel.app/api/banner", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response.data.data);
        if (response.data && response.data.data) {
          const logo = response.data.data.filter((el: { type: string; }) => el.type === "logo");
          setLogo(logo[0])
          const dt = response.data.data.filter((el: { type: string; }) => el.type === "home");
          setBannerData(dt[0]);
        }
      })
      .catch(function (error) {
        console.log("Error:", error);
        setError(error.message);
      })
      .finally(function () {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://cms-next-rosy.vercel.app/api/home", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response.data.data[0].grid1_title.split("("), "ppo"),
          setHomeData(response.data.data[0]);
      })
      .catch(function (error) {
        setError(error.message);
      })
      .finally(function () {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://cms-next-rosy.vercel.app/api/bidang_litigasi_dalam", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response.data.data, "pp");
       const data = response.data.data.sort((a:GridItem, b:GridItem) => a.position - b.position);
        console.log(data, "dg");
        setFirstGrid(data);
      })
      .catch(function (error) {
        setError(error.message);
      })
      .finally(function () {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://cms-next-rosy.vercel.app/api/porto_client", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response.data.data, "psp");
        const data = response.data.data;
        setPortoClient(data);
      })
      .catch(function (error) {
        setError(error.message);
      })
      .finally(function () {
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="w-full h-[100vh] items-center justify-center flex"><Spin  size="large" /></div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
   
      <HeaderComponent logo={logo}/>
      <div className={`h-[auto] md:h-[100vh] bg-[url('${bannerData?.banner_url}')] bg-cover w-[100%] md:w-full px-[20px] md:px-[0px] pb-[50px] `}>
        <div className=" md:w-[35%] relative left-[0px] md:left-[80px] top-[40px] md:top-[100px] ">
          <div className="font-[Poppins] text-[26px] md:text-[64px] font-medium leading-[40px] md:leading-[80px]  text-[white] pb-[32px]">
            {bannerData?.title}
          </div>
          <p className="font-[Poppins] text-[14px] md:text-[20px] font-normal leading-[24px] text-[white] pb-[32px]">
            {bannerData?.desc}
          </p>
          <Button
            type="primary"
            className="h-[40px] bg-[#0056B3] rounded-[999px] uppercase p-[8px 32px] text-[12px] md:text-[16px] font-semibold font-[Poppins] text-[white]"
          >
            {bannerData?.button_text}
          </Button>
        </div>
      </div>
      <div className="bg-[white]  w-full bg-cover px-[24px] md:px-[80px] py-[50px] md:py-[131px] h-[auto]">
        <div className="w-full md:w-[50%] max-[869px]">
          <p className="text-[#0056B3] font-[Poppins] text-[32px] md:text-[40px] font-bold leading-[32px] pb-[32px]">
            {homeData?.title_desc_section}
          </p>
          <p className="text-[#374354] font-[Poppins] text-[16px] md:text-[20px] font-bold leading-[32px] pb-[32px]">
          {homeData?.desc_section}
          </p>
          <Button className="h-auto  bg-transparent py-[12px] px-[32px] text-[#07152A] font-[Poppins] text-[14px] md:text-[20px] font-semibold text-center rounded-[999px] border-solid border-1 border-[black]">
            Selengkapnya
          </Button>
        </div>
      </div>

      <div className="text-[#E7C070] text-center text-[32px] md:text-[40px] font-semibold leading-[32px] font-[Poppins] py-[60px] md:py-[80px] px-[24px] md:px-[92px] bg-[#636767]">
        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className=" border-solid border-1 border-[white] bg-[white] bg-opacity-[0.1] rounded-[12px] backdrop-blur-[22.5px]  py-[40px] md:py-[24px] px-[32px]">
            <p className="text-[#FFF] text-left text-[24px] md:text-[32px] font-semibold leading-[32px] font-[Poppins] pb-[32px]">
              Visi
            </p>
            <p className="text-[#FFF] text-left text-[16px] md:text-[20px] font-normal leading-[32px] font-[Poppins] ">
              {homeData?.visi}
            </p>
          </div>
          <div className=" border-solid border-1 border-[white] bg-[white] bg-opacity-[0.1] rounded-[12px] backdrop-blur-[22.5px]  py-[40px] md:py-[24px] px-[32px]">
            <p className="text-[#FFF] text-left text-[24px] md:text-[32px] font-semibold leading-[32px] font-[Poppins] pb-[32px]">
              Misi
            </p>
            <p className="text-[#FFF] text-left text-[16px] md:text-[20px] font-normal leading-[32px] font-[Poppins] ">
              {homeData?.misi}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[white] bg-cover w-full h-[auto]">
        {/* <div className="flex flex-row py-[40px] md:py-[80px] px-[24px] md:px-[120px]">
          <div className="border-solid border-r-[1px] border-[black] w-full md:w-[15%]">
            <p className="text-[#0056B3] text-[24px] md:text-[32px] font-bold leading-[32px] md:leading-[114.6%]">
              RUANG LINGKUP PELAYANAN JASA
            </p>
          </div>
          <div className="w-full md:w-[85%] pl-[20px] md:pl-[80px] text-[14px] md:text-[20px] leading-[24px] md:leading-[32px]">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have su alteration in some form, by injected
              humour, oir randomised workds which don't look even slightly
              believable.
            </p>
          </div>
        </div> */}
      
        <div className="w-[100%] px-[24px] md:px-[120px] py-[60px] md:py-[120px] ">
        <p className="text-[#0d1f3d] font-[Poppins] text-[24px] md:text-[32px] font-bold leading-[32px] pb-[32px] flex flex-row text-center justify-center">
            {homeData?.grid2_title}
            {/* <div className="text-[#040915] font-[Poppins] text-[24px] md:text-[32px] font-bold leading-[32px] ">
              {homeData?.grid2_title.split("(")[1]}
            </div> */}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            {firstGrid?.map((el) => (
              <div className="bg-[#CBD1D1] py-[58px] px-[49px]  w-auto">
                <div className="border-b-[1px] border-b-solid border-b-[#3A4553]">
                  <p className="text-[#0056B3] text-[24px] md:text-[32px] font-bold leading-[114%] pb-[8px]">
                    {el.title}
                  </p>
                  <p className="text-[#000000] text-[14px] md:text-[16px] font-normal leading-[140%] pb-[35px]">
                    <ul>
                      {el.description.map((item) => {
                        return <li>{item}</li>;
                      })}
                    </ul>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <OurClientComponent portoClient={portoClient} />
      <FooterComponent />
    </>
  );
}
