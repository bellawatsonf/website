import HeaderComponent from "./components/Header";
import img from "./assets/Rectangle438.svg";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import FooterComponent from "./components/Footer";
import img1 from "./assets/cardheader.svg";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import axios from "axios";

type BannerData = {
  desc: string;
  title: string;
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
}[];  // Changed to array type

export default function AboutUs() {
  const [bannerData, setBannerData] = useState<BannerData>();
  const [aboutData, setAboutData] = useState<AboutData>();
  const [dataAdvokat, setDataAdvokat] = useState<DataAdvokat>();
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
          const dt = response.data.data.filter((el: { type: string; }) => el.type === "about");
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
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="robots" content="follow, index" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          PETRONEUS SAYUDI & ASSOCIATES - Pelayanan Hukum Profesional
        </title>
        <meta
          name="description"
          content="PETRONEUS SAYUDI & ASSOCIATES memiliki dedikasi tinggi dan selalu bekerja berdasarkan profesionalisme dalam memberikan pelayanan hukum pada klien."
        />
        <meta
          property="og:title"
          content="PETRONEUS SAYUDI & ASSOCIATES - Pelayanan Hukum Profesional"
        />
        <meta
          property="og:description"
          content="PETRONEUS SAYUDI & ASSOCIATES memiliki dedikasi tinggi dan selalu bekerja berdasarkan profesionalisme dalam memberikan pelayanan hukum pada klien."
        />
        <meta property="og:url" content="https://www.psalawoffice.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="URL_TO_YOUR_IMAGE" />
        <link rel="canonical" href="https://www.psalawoffice.com" />
      </Helmet>
      <HeaderComponent />
      <div className="bg-[url('/AboutUs.svg')]  h-[auto] md:h-[480px] px-[80px] pt-[70px] md:pt-[186px] pb-[40px] md:pb-[0px] bg-cover">
        <p className=" text-[white] text-[28px] md:text-[64px] font-semibold font-[Poppins] pb-[32px]">
          {bannerData?.title}
        </p>
      </div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-auto">
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
                  cover={<img alt="example" src={img1} />}
                >
                  <Meta title={el.name} description={el.desc} />
                </Card>
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
