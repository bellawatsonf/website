import HeaderComponent from "./components/Header";
// import img from "./assets/Rectangle438.svg";
import { Button, Card, Carousel, Spin } from "antd";
// import Meta from "antd/es/card/Meta";
import FooterComponent from "./components/Footer";

import { useEffect, useState } from "react";
import axios from "axios";

type BannerData = {
  desc: string;
  title: string;
  url_banner: string;
};

// type AboutData = {
//   section_1_title: string;
//   section_1_desc: string;
//   section_1_url_images: string;
//   title_card_section: string;
//   section_advokat_1: string; // Added this field
// };

type Galery = {
  url_image: string;
  description: string;
 
}[]; // Changed to array type

export default function Galery2() {
  const [bannerData, setBannerData] = useState<BannerData>();
  const [logo, setLogo] = useState<BannerData>();
  const [dataGalery, setDataGalery] = useState<Galery>();
  // const [show, setShow] = useState(false);
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
          const logo = response.data.data.filter(
            (el: { type: string }) => el.type === "logo"
          );
          setLogo(logo[0]);
          const dt = response.data.data.filter(
            (el: { type: string }) => el.type === "about"
          );
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
      .get("https://cms-next-rosy.vercel.app/api/galery", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response.data.data);
        if (response.data && response.data.data) {
          const dt = response.data.data;
          console.log(dt, "advokat");
          setDataGalery(dt)
        }
      })
      .catch(function (error) {
        console.log("Error:", error);
        setError(error.message);
      })
      .finally(function () {
        // setLoading(false);
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
  // console.log(show, "show");
  return (
    <>
      <HeaderComponent logo={logo} />
      <Carousel afterChange={onChange} arrows infinite={false}>
        {Array.isArray(bannerData) &&
          bannerData.map((el) => (
            <div>
              <div
                style={{
                  backgroundImage: `url(${el?.url_banner})`,
                }}
                className={
                  "h-[auto] md:h-[70vh] bg-cover w-[100%] md:w-full px-[20px] md:px-[0px] pb-[50px]"
                }
              >
                <div
                  className={`md:w-[35%] relative left-[0px] md:left-[80px] ${
                    el?.desc === null || el.desc === ""
                      ? "pt-[100px] md:pt-[280px]"
                      : "top-[40px] md:top-[100px]"
                  }  `}
                >
                  <div className="font-[Poppins] text-[26px] md:text-[64px] font-medium leading-[40px] md:leading-[80px]  text-[white] pb-[32px]">
                    {el?.title}
                  </div>
                  {el?.desc === null && el.desc === "" ? null : (
                    <p className="font-[Poppins] text-[14px] md:text-[20px] font-normal leading-[24px] text-[white] pb-[32px]">
                      {el?.desc}
                    </p>
                  )}

                  <Button
                    type="primary"
                    className={`h-[40px] bg-[linear-gradient(180deg,_#009688_29%,_#4db6ac_100%)] rounded-[999px] uppercase p-[8px 32px] text-[12px] md:text-[16px] font-semibold font-[Poppins] text-[white] ${
                      el.button_text !== null && el.button_text !== ""
                        ? "block"
                        : "hidden"
                    }`}
                    // onClick={()=>navigate(el.button_url)}
                  >
                    <a
                      className={`${
                        el.button_text !== null && el.button_text !== ""
                          ? "block"
                          : "hidden"
                      }`}
                      href={el.button_url}
                    >
                      {el?.button_text}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </Carousel>
      <div className="w-100% py-[50px] bg-[white] px-[50px]">
        {
          dataGalery?.map((el)=>(
      <Card className="max-w-full mx-auto p-5 shadow-lg rounded-2xl mb-[30px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
        {/* Gambar di kiri */}
        <div>
          <img
            src={el?.url_image}
            alt="Deskripsi Gambar"
            className="rounded-xl w-[50%]"
          />
        </div>

        {/* Penjelasan di kanan */}
        <div>
          {/* <h2 className="text-xl font-bold text-gray-800">Judul Penjelasan</h2> */}
          <p className="text-gray-600 mt-2">
            {el?.description}
          </p>
        </div>
      </div>
    </Card>

          ))
        }
      </div>
      {/* <OurClientComponent /> */}
      <FooterComponent />
    </>
  );
}
