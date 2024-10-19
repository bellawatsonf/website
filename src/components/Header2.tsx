import { useNavigate } from "react-router-dom";
import logo from "../assets/Icon.svg";
import { useEffect, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";

export default function HeaderComponent() {
  let navigate = useNavigate();
  const [open, setopen] = useState("close");

  // const onClick: MenuProps["onClick"] = (e) => {
  //   console.log("click ", e);
  //   setCurrent(e.key);
  // };

  useEffect(() => {
    console.log(open, "open");
  }, [open]);
  return (
    <>
      {/* <div className="flex flex-row bg-[#243A5A] py-[24px] px-[80px] ">
        <div className="w-[100%] flex justify-start">
          <img src={logo} className="mr-[10px]" />
          <p className="font-[Cormorant Garamond] text-[white] font-semibold text-[30px] capitalize">
            Attorneyster
          </p>
        </div>
        <div className="w-[100%] bg-[red] flex justify-end font-[Poppins] text-[#E7C070] font-semibold text-[18px] leading-[32px] align-center items-center ">
          <p className="pr-[40px]">Beranda</p>
          <p className="pr-[40px]">Tentang Kami</p>
          <p className="pr-[40px]">Jenis Alat Berat</p>
          <p className="pr-[40px]">General Kontraktor</p>
          <p className="pr-[40px]">Hubungi Kami</p>
        </div>
      </div> */}

      <div className="hidden md:block">
        <div className="block md:flex bg-[#FFFAF1] w-[100%] h-auto px-[0px] md:px-[80px] py-[18px] justify-between items-center">
          <img src={logo} className="px-[20px] md:px-[0px]" />
          <ul className="flex flex-row text-[#2F2F2F] text-[18px] font-medium leading-[32px] font-[Poppins]">
            <li
              className="pr-[40px] hover:cursor-pointer"
              onClick={() => navigate("/")}
            >
              Beranda
            </li>
            <li
              className="pr-[40px] hover:cursor-pointer"
              onClick={() => navigate("/about-us")}
            >
              Tentang Kami
            </li>
            <li
              className="pr-[40px] hover:cursor-pointer"
              onClick={() => navigate("/")}
            >
              Layanan Kami
            </li>

            <li
              className="pr-[40px] hover:cursor-pointer"
              onClick={() => navigate("/contact-us")}
            >
              Hubungi Kami
            </li>
          </ul>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="flex flex-row py-[18px]">
          <div className="w-[50%] justify-start ">
            <img src={logo} className="px-[20px] md:px-[0px]" />
          </div>
          <div className="w-[50%] items-center flex justify-end">
            <MenuOutlined
              className="px-[20px] md:px-[0px] py-[20px] "
              onClick={() => {
                if (open === "open") {
                  setopen("close");
                } else {
                  setopen("open");
                }
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: open === "open" ? "block" : "none",

            background: "red",
          }}
        >
          <div
            style={{ transition: "0.2s", overflow: "hidden" }}
            className="absolute z-[999] bg-[#F8F8F8] w-full h-[100000px]"
          >
            <ul className="p-[20px]">
              <li
                className="pr-[40px] hover:cursor-pointer font-[Poppins] text-[20px] "
                onClick={() => {
                  if (open === "open") {
                    setopen("close");
                  }
                  navigate("/");
                }}
              >
                Beranda
              </li>
              <li
                className="pr-[40px] hover:cursor-pointer font-[Poppins] text-[20px] "
                onClick={() => {
                  console.log("masuk");

                  if (open === "open") {
                    setopen("close");
                  }
                  navigate("/about-us");
                }}
              >
                Tentang Kami
              </li>
              <li
                className="pr-[40px] hover:cursor-pointer font-[Poppins] text-[20px] "
                onClick={() => {
                  if (open === "open") {
                    setopen("close");
                  }
                  navigate("/");
                }}
              >
                Layanan Kami
              </li>
              {/* <li className="pr-[40px] hover:cursor-pointer" onClick={()=>navigate('/')}>General Kontraktor</li> */}
              <li
                className="pr-[40px] hover:cursor-pointer font-[Poppins] text-[20px] "
                onClick={() => {
                  if (open === "open") {
                    setopen("close");
                  }
                  navigate("/contact-us");
                }}
              >
                Hubungi Kami
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
