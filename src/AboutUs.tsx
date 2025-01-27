import HeaderComponent from "./components/Header";
import img from "./assets/Rectangle438.svg";
import { Button, Carousel, Spin } from "antd";
// import Meta from "antd/es/card/Meta";
import FooterComponent from "./components/Footer";

import { useEffect, useState } from "react";
import axios from "axios";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

type BannerData = {
  desc: string;
  title: string;
  url_banner: string;
};

type AboutData = {
  section_1_title: string;
  section_1_desc: string;
  section_1_url_image: string;
  title_card_section: string;
  section_advokat_1: string; // Added this field
};

type DataAdvokat = {
  name: string;
  desc: string;
  url_images: string;
  section_advokat_1: string;
}[]; // Changed to array type

export default function AboutUs() {
  const [bannerData, setBannerData] = useState<BannerData>();
  const [aboutData, setAboutData] = useState<AboutData>();
  const [dataAdvokat, setDataAdvokat] = useState<DataAdvokat>();
  const [show, setShow] = useState(false);
  const [openId, setOpenId] = useState<null | number>(null);
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
      .get("https://cms-next-rosy.vercel.app/api/about", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response.data.data);
        if (response.data && response.data.data) {
          const dt = response.data.data[0];
          setAboutData(dt);
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
      .get("https://cms-next-rosy.vercel.app/api/advokat", {
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
          setDataAdvokat(dt);
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
  console.log(show, "show");
  return (
    <>
      <HeaderComponent />
      <Carousel afterChange={onChange} arrows infinite={false}>
        {Array.isArray(bannerData) && bannerData.map((el) => (
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
                    ? "pt-[40px] md:pt-[280px]"
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
                  className={`h-[40px] bg-[#0056B3] rounded-[999px] uppercase p-[8px 32px] text-[12px] md:text-[16px] font-semibold font-[Poppins] text-[white] ${
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
      <div className="w-100% py-[50px] bg-[white] ">
        <div className="m-auto block w-[70%] border-b-[2px] border-b-[#C7C7CC] border-b-solid">
          <p className="text-[#0056B3] font-[Poppins] text-center text-[32px] md:text-[40px] leading-[32px] font-bold pt-[32px] pb-[14px] md:pb-[32px]">
            {aboutData?.section_1_title}
          </p>
          <p className="text-[#374354] font-[Poppins] text-justify md:text-center text-[14px] md:text-[20px] leading-[32px] font-normal pt-[20px] md:pt-[32px] pb-[32px]">
            {aboutData?.section_1_desc}
          </p>

          <img src={img} className="block m-auto pb-[50px]" />
        </div>
        <div className="pt-[50px] md:pt-[100px]">
          <p className="text-[#0056B3] font-[Poppins] text-center text-[22px] md:text-[40px] leading-[32px] font-sembibold pb-[60px]">
            {aboutData?.title_card_section}
          </p>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-auto">
            {dataAdvokat?.map((el) => (
              <div>
                <Card
                  hoverable
                  style={{
                    width: 300,
                    display: "block",
                    margin: "auto",
                    background: "#CBD1D1",
                  }}
                  cover={<img alt="example" src={el.url_images} />}
                >
                  <Meta title={el.name} description={el.desc} />
                </Card>
              </div>
            ))}
          </div> */}

          <div
            className="container grid grid-cols-1 w-[70vw] md:w[90vw] md:grid-cols-3 gap-4 flex justify-center items-center "
            style={{ margin: "0 auto" }}
          >
            {dataAdvokat?.map((el, i) => (
              <div
                key={i}
                className={`${
                  show === true && i === openId ? "h-[400px]" : "h-auto"
                }  rounded-md bg-[#d3d3d3] relative `}
              >
                <div className="bg-[#0056B3] rounded-t-md pt-[26px] pb-[16px] h-[auto] md:h-[200px]">
                  <p className="text-[white] font-[Poppins] text-center text-[16px] h-[auto] md:h-[70px] md:text-[20px] leading-[32px] font-sembibold px-[10px] ">
                    {el?.name}
                  </p>
                  <p className="text-[white] font-[Poppins] text-center text-[14px] md:text-[16px] leading-[32px] font-sembibold pb-[60px] px-[10px]">
                    {el.desc}
                  </p>
                </div>

                <div className="mt-[-60px] md:mt-[-40px] ">
                  <div className="flex-col justify-center items-center w-full ">
                    <img
                      src={el.url_images}
                      className=" w-[100px] h-[100px] object-cover rounded-full block m-auto"
                    />
                    {i === openId ? (
                      <CaretUpOutlined
                        className="text-[#778899]  text-[50px] block m-auto"
                        onClick={() => {
                          setOpenId(null);
                          setShow(false);
                        }}
                      />
                    ) : (
                      <CaretDownOutlined
                        className="text-[#778899] text-[50px] block m-auto"
                        onClick={() => {
                          setOpenId(i);
                          setShow(true);
                        }}
                      />
                    )}
                    <p
                      className={`${
                        show === true && i === openId ? "block" : "hidden"
                      } text-[#696969] font-[Poppins] text-center text-[14px] md:text-[16px] leading-[32px] font-sembibold pb-[60px]`}
                    >
                      {el.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="py-[16px] w-full bg-[#0056B3] mt-[48px]">
            <p className="text-[#dbdde0] text-center text-[16px] md:text-[20px] font-medium font-[Poppins] leading-[150%]">
              {aboutData?.section_advokat_1}
            </p>
          </div> */}
        </div>
      </div>
      {/* <OurClientComponent /> */}
      <FooterComponent />
    </>
  );
}
