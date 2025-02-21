// import React from "react";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
// import img2 from "./assets/Rectangle.svg";
import type { FormProps } from "antd";
import { Button, Carousel, Form, Input, Spin } from "antd";
import TextArea from "antd/es/input/TextArea";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
// import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import axios from "axios";

type FieldType = {
  firstname?: string;
  lastname?: string;
  phone?: string;
};

type ContactData = {
  email: string;
  phone: string;
  address: string;
  embed_url: string;
  company_name: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

type BannerData = {
  desc: string;
  title: string;
  url_banner: string;
};

export default function ContactUs() {
  const [bannerData, setBannerData] = useState<BannerData>();
  const [contactData, setContactData] = useState<ContactData>();
  const [logo, setLogo] = useState<BannerData>();
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
            (el: { type: string }) => el.type === "contact"
          );
          console.log(dt, "ini hasildt")
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
      .get("https://cms-next-rosy.vercel.app/api/contact", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response.data.data);
        if (response.data && response.data.data) {
         
          const dt = response.data.data[0];
          console.log(dt, "i");
          setContactData(dt);
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
console.log(bannerData, "ini banner data")
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
      {/* <Helmet>
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
      </Helmet> */}
      <HeaderComponent logo={logo} />
      {/* <div
        style={{
          backgroundImage: `url(${bannerData?.url_banner})`,
        }}
        className="h-[auto] md:h-[480px] px-[80px] pt-[70px] md:pt-[186px] pb-[40px] md:pb-[0px] bg-cover"
      >
        <p className="text-[white] text-[28px] md:text-[64px] font-semibold font-[Poppins] pb-[32px]">
          {bannerData?.title}
        </p>
      </div> */}
      <Carousel afterChange={onChange} arrows infinite={false}>
        {Array.isArray(bannerData) && bannerData.map((el)=> (
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
      <div className="px-[20px] md:px-[80px] pt-[10px] md:pt-[80px] bg-[#F8F8F8]  ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="pb-[0px] md:pb-[32px] px-[24px] pt-[10%] md:pt-[3%]">
            {/* <img src={logo} className="hidden md:block" /> */}
            <p className="text-[#00695c] text-[20px] md:text-[24px] font-bold font-[Poppins] py-[10px] md:py-[24px]">
              {contactData?.company_name}
            </p>
            <p className="text-[#1D1D1D] text-[16px] md:text-[20px] font-medium font-[Poppins] ">
              {contactData?.address}
            </p>
            <div className="flex flex-row items-center pt-[20px] md:pt-[32px]">
              <MailOutlined className="text-[#1D1D1D] text-[16px] md:text-[20px] font-medium font-[Poppins]" />
              <a href="mailto:perkasa.phe@gmail.com" target="_blank">
                <p className="hover:cursor-pointer text-[#1D1D1D] text-[16px] md:text-[20px] font-medium font-[Poppins] pl-[10px]">
                  {contactData?.email}
                </p>
              </a>
            </div>
            <div className="flex flex-row items-center pt-[20px] md:pt-[32px]">
              <PhoneOutlined className="text-[#1D1D1D] text-[16px] md:text-[20px] font-medium font-[Poppins]" />
              <a href={`https://wa.me/+62${contactData?.phone}`}target="_blank">
                <p className="hover:cursor-pointer text-[#1D1D1D] text-[16px] md:text-[20px] font-medium font-[Poppins] pl-[10px]">
                  {contactData?.phone}
                </p>
              </a>
            </div>
            <div className="mt-[30px] md:mt-[40px]">
            {/* <img src={logo} className="hidden md:block" /> */}
            <p className="text-[#00695c] text-[24px] md:text-[40px] font-semibold font-[Poppins] leading-[32px]">
              Send us Message
            </p>
            <div className="w-full md:w-[70%] mt-[12px] md:mt-[40px]">
              <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <div className="flex flex-row">
                  <div className="w-[50%] mr-[10px]">
                    <Form.Item<FieldType>
                      name="firstname"
                      rules={[
                        {
                          required: true,
                          message: "Please input your firstname",
                        },
                      ]}
                    >
                      <Input placeholder="input your firstname" />
                    </Form.Item>
                  </div>
                  <div className="w-[50%]">
                    <Form.Item<FieldType>
                      name="lastname"
                      rules={[
                        {
                          required: true,
                          message: "Please input your lastname",
                        },
                      ]}
                    >
                      <Input placeholder="input your lastname" />
                    </Form.Item>
                  </div>
                </div>

                <Form.Item<FieldType>
                  name="phone"
                  rules={[
                    { required: true, message: "Please input your phone" },
                  ]}
                >
                  <Input placeholder="input your phone number" />
                </Form.Item>

                <Form.Item>
                  <TextArea rows={4} />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="bg-[#00695c] w-[100%]"
                  >
                    Send
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
          </div>

          <div className="hidden md:block py-[12px] md:py-[32px] px-[10px] md:px-[24px]">
            <iframe
              width="100%"
              height="100%"
              src={contactData?.embed_url}
            ></iframe>
          </div>
          <div className="block md:hidden py-[12px] md:py-[32px] px-[10px] md:px-[24px]">
            <iframe
              width="100%"
              height="400px"
              src={contactData?.embed_url}
            ></iframe>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/*<div className="py-[0px] md:py-[32px] px-[10px] md:px-[24px] ">
            <img src={img2} className="w-[100%]  h-[302px] md:h-[402px]" />
          </div>*/}
          {/* <div className="mt-[0px] md:mt-[40px]">
            <img src={logo} className="hidden md:block" />
            <p className="text-[#00695c] text-[28px] md:text-[40px] font-semibold font-[Poppins] leading-[32px]">
              Send us Message
            </p>
            <div className="w-full md:w-[70%] mt-[12px] md:mt-[40px]">
              <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <div className="flex flex-row">
                  <div className="w-[50%] mr-[10px]">
                    <Form.Item<FieldType>
                      name="firstname"
                      rules={[
                        {
                          required: true,
                          message: "Please input your firstname",
                        },
                      ]}
                    >
                      <Input placeholder="input your firstname" />
                    </Form.Item>
                  </div>
                  <div className="w-[50%]">
                    <Form.Item<FieldType>
                      name="lastname"
                      rules={[
                        {
                          required: true,
                          message: "Please input your lastname",
                        },
                      ]}
                    >
                      <Input placeholder="input your lastname" />
                    </Form.Item>
                  </div>
                </div>

                <Form.Item<FieldType>
                  name="phone"
                  rules={[
                    { required: true, message: "Please input your phone" },
                  ]}
                >
                  <Input placeholder="input your phone number" />
                </Form.Item>

                <Form.Item>
                  <TextArea rows={4} />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="bg-[#00695c] w-[100%]"
                  >
                    Send
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div> */}
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
