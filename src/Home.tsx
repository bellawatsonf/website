import { Button, Carousel, Spin } from "antd";
import "./App.css";
import HeaderComponent from "./components/Header";

import FooterComponent from "./components/Footer";
import OurClientComponent from "./components/OurClient";

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


type BannerData = {
  desc: string;
  title: string;
  button_text: string;
  url_banner: string;
};

type HomeData = {
  visi: string;
  misi: string;
  grid2_title: string;
  grid1_title: string;
  title_desc_section: string;
  desc_section: string;
  ruang_lingkup: string;
  image_url:string;
};

type GridItem = {
  title: string;
  description: string[];
  position: number;
};

type FirstGrid = GridItem[];

type PortoClient = {
  name: string;
  desc: string;
  url_image: string;
};

export default function Home() {
  const navigate = useNavigate();
  const [bannerData, setBannerData] = useState<BannerData>();
  const [logo, setLogo] = useState<BannerData>();
  const [homeData, setHomeData] = useState<HomeData>();
  const [firstGrid, setFirstGrid] = useState<FirstGrid>();
  const [portoClient, setPortoClient] = useState<PortoClient>();
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
        if (response.data && response.data.data) {
          const logo = response.data.data.filter(
            (el: { type: string }) => el.type === "logo"
          );
          setLogo(logo[0]);
          const dt = response.data.data.filter(
            (el: { type: string }) => el.type === "home"
          );
          console.log(dt, "banner");

          setBannerData(dt);
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
        console.log(response.data.data[0], "ppo"),
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
        const data = response.data.data.sort(
          (a: GridItem, b: GridItem) => a.position - b.position
        );
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
  useEffect(() => {
    axios
      .get("https://cms-next-rosy.vercel.app/api/manfaat", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        const data: string[] = [];
        response.data.data.forEach((item) => {
          data.push(item.description);
        });
        console.log(data, "ppos");
      })
      .catch(function (error) {
        setError(error.message);
      })
      .finally(function () {
        setLoading(false);
      });
  }, []);

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  if (loading)
    return (
      <div className="w-full h-[100vh] items-center justify-center flex">
        <Spin size="large" />
      </div>
    );
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <HeaderComponent logo={logo} />
      {/* <div
        style={{
          backgroundImage: `url(${bannerData?.url_banner})`,
        }}
        className={`h-[auto] md:h-[100vh]  bg-cover w-[100%] md:w-full px-[20px] md:px-[0px] pb-[50px] `}
      >
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
      </div> */}
      <Carousel afterChange={onChange} arrows autoplay autoplaySpeed={2500}>
        {Array.isArray(bannerData) &&
          bannerData.map((el) => (
            <div>
              <div
                style={{
                  backgroundImage: `url(${el?.url_banner})`,
                }}
                className={
                  "h-[auto] md:h-[70vh] bg-cover w-[100%] md:w-full px-[20px] md:px-[0px] pb-[100px] md:pb-[50px]"
                }
              >
                <div className="md:w-[50%] relative left-[0px] md:left-[80px] top-[40px] md:top-[100px] ">
                  <div className="font-[Poppins] text-[26px] md:text-[64px] font-medium leading-[40px] md:leading-[80px]  text-[white] pb-[32px]">
                    {el?.title}
                  </div>
                  <p className="text-justify font-[Poppins] text-[14px] md:text-[20px] font-normal leading-[24px] text-[white] pb-[32px]">
                    {el?.desc}
                  </p>

                  <Button
                    type="primary"
                    className={`h-[40px] bg-[linear-gradient(180deg,_#009688_29%,_#4db6ac_100%)] rounded-[999px] uppercase p-[8px 32px] text-[12px] md:text-[16px] font-semibold font-[Poppins] text-[white] `}
                    onClick={() => navigate(`/more?id=${el.id}`)}
                  >
                    Selengkapnya
                    {/* <a href={el.button_url}>{el.button_url}</a> */}
                    {/* <a className={`${el.button_text !== null && el.button_text !== "" ? 'block' :"hidden"}`} href={el.button_url}>{el?.button_text}</a>
                  <a href="/more">Selengkapnya</a> */}
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </Carousel>
      <div className="bg-[white] w-full bg-cover px-[24px] md:px-[80px] py-[50px] md:py-[131px] ">
        <div className="grid grid-cols-1-reverse md:grid-cols-5 gap-2 ">
        <p className="block md:hidden text-[#00695c] font-[Metropolis] text-[32px] md:text-[40px] font-bold leading-[32px] pb-[32px]">
              {homeData?.title_desc_section}
            </p>
          <div className="order-2 md:order-1 md:col-span-3">
            <p className="hidden md:block text-[#00695c] font-[Metropolis] leading-[56px] text-[32px] md:text-[40px] font-bold leading-[32px] pb-[32px]">
              {homeData?.title_desc_section}
            </p>
            <p className="text-justify text-[#374354] font-[Poppins] text-[16px] md:text-[20px] font-bold leading-[32px] pb-[32px]">
              {homeData?.desc_section}
            </p>
            <Button
              className="h-auto  bg-transparent py-[12px] px-[32px] text-[#07152A] font-[Poppins] text-[14px] md:text-[20px] font-semibold text-center rounded-[999px] border-solid border-1 border-[black]"
              onClick={() => {
                navigate("/about-us");
              }}
            >
              Selengkapnya
            </Button>
          </div>
          <div className="order-1 md:order-2 md:col-span-2 flex justify-center items-center">
            <div className="w-full ml-[0px] md:ml-[70px] ">
            <img
              src={homeData?.image_url}
              className="rounded-[20px] md:h-[350px]"
            />
            </div>
          
          </div>
        </div>
      </div>
      {/* <div className=" m-[auto] mt-[20px] mb-[40px] pb-[100px] px-[92px]  rounded-2xl shadow-lg border border-gray-200"> */}
      {/* <h1 className="text-6xl text-center py-[50px] font-bold bg-gradient-to-b from-gray-300 to-gray-800 bg-clip-text text-transparent">
            Manfaat
          </h1> */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
      {/* Sisi Kiri - Judul */}
      {/* <div className="flex flex-col  ">
          <h1 className="text-6xl font-bold bg-gradient-to-b from-gray-300 to-gray-800 bg-clip-text text-transparent">
            Manfaat
          </h1>
           
          </div> */}

      {/* Sisi Kanan - Looping Data */}
      {/* <div className="flex flex-col ">
            {manfaat?.map((item, i) => (
              <Card key={i} className="shadow-md rounded-lg p-4">
                <p className="text-[#464e4e] text-[14px]">{item}</p>
              </Card>
            ))}
          </div> */}
      {/* </div> */}
      {/* </div> */}

      <div className="text-[#E7C070] text-center text-[32px] md:text-[40px] font-semibold leading-[32px] font-[Poppins] py-[60px] md:py-[80px] px-[24px] md:px-[92px] bg-[#4DB6AC]">
        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className=" border-solid border-1 border-[white] bg-[white] bg-opacity-[0.1] rounded-[12px] backdrop-blur-[22.5px]  py-[40px] md:py-[24px] px-[32px]">
            <p className="text-[#FFF] text-left text-[24px] md:text-[32px] font-semibold leading-[32px] font-[Poppins] pb-[32px]">
              Visi
            </p>
            <p className="text-justify text-[#FFF] text-left text-[16px] md:text-[20px] font-normal leading-[32px] font-[Poppins] ">
              {homeData?.visi}
            </p>
          </div>
          <div className=" border-solid border-1 border-[white] bg-[white] bg-opacity-[0.1] rounded-[12px] backdrop-blur-[22.5px]  py-[40px] md:py-[24px] px-[32px]">
            <p className="text-[#FFF] text-left text-[24px] md:text-[32px] font-semibold leading-[32px] font-[Poppins] pb-[32px]">
              Misi
            </p>
            <p className="text-justify text-[#FFF] text-left text-[16px] md:text-[20px] font-normal leading-[32px] font-[Poppins] ">
              {homeData?.misi}
            </p>
          </div>
        </div>
        {/* <div className="pt-[100px] text-white text-center font-[Poppins] w-full text-[12px] md:text-[18px] leading-[24px] md:leading-[32px]">
          <p>{homeData?.ruang_lingkup}</p>
        </div> */}
      </div>
      {/* <div className="bg-[white]  w-full bg-cover px-[24px] md:px-[80px] pt-[40px]  h-[auto]">
        <div className="w-full  max-[869px]">
          <p className="align-justify text-[#00695c] font-[Poppins] text-[16px] md:text-[16px] font-bold leading-[32px] pb-[32px]">
            {homeData?.ruang_lingkup}
          </p>
         
        </div>
      </div> */}
      <div className="bg-[white] bg-cover w-full h-[auto]">
        {/* <div className="flex flex-col md:flex-row pt-[40px] md:pt-[80px] px-[24px] md:px-[120px] ">
          <div className="border-none md:border-solid border-r-[1px] border-[black] w-full md:w-[20%]">
            <p className="text-center md:text-left text-[#00695c] text-[24px] md:text-[32px] font-bold leading-[32px] md:leading-[114.6%] pb-[15px] md:pb-[0px]">
              Information
            </p>
          </div>
          <div className="text-justify font-[Poppins] w-full md:w-[85%] pl-[20px] md:pl-[80px] text-[12px] md:text-[18px] leading-[24px] md:leading-[32px]">
            <p>
               {homeData?.ruang_lingkup}
            </p>
          </div>
        </div> */}

        <div className="w-[100%] px-[24px] md:px-[120px] py-[60px] md:py-[120px] ">
          <p className=" text-[#0d1f3d] font-[Poppins] text-[24px] md:text-[32px] font-bold leading-[32px] pb-[32px] flex flex-row text-center justify-center">
            {homeData?.grid2_title}
            {/* <div className="text-[#040915] font-[Poppins] text-[24px] md:text-[32px] font-bold leading-[32px] ">
              {homeData?.grid2_title.split("(")[1]}
            </div> */}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            {firstGrid?.map((el) => (
              <div className="bg-[#E0F2F1] py-[58px] px-[49px] w-auto">
                <div className="border-b-[1px] border-b-solid border-b-[#3A4553]">
                  <p className="text-[#00695c] text-[24px] md:text-[32px] font-bold leading-[114%] pb-[8px]">
                    {el.title}
                  </p>
                  <p className="text-justify text-[#000000] text-[14px] md:text-[16px] font-normal leading-[140%] pb-[35px]">
                    {/* <ul>
                      {el.description.map((item) => {
                        return <li>{item}</li>;
                      })}
                    </ul> */}
                    {el.description}
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
