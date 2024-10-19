/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";

import logo from "../assets/Icon.svg";
import { useNavigate } from "react-router-dom";

export default function HeaderView() {
  let navigate = useNavigate();
  const [open, setopen] = useState("close");
  // const [show, setShow] = useState(false);

  useEffect(() => {
    console.log(open, "open");
  }, [open]);

  return (
    <>
      <div className="hidden md:block">
        <div className="block md:flex bg-[#0D71B0] w-[100%] h-auto px-[0px] md:px-[80px] py-[18px] justify-between items-center">
          <img src={logo} className="px-[20px] md:px-[0px]" />

          {/* <nav>
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
                onClick={() => navigate("/alat-berat")}
              >
                Jenis Alat Berat
              </li>
              <li
                className="pr-[40px] hover:cursor-pointer"
                onClick={() => navigate("/alat-berat")}
              >
                Portofolio
                <ul>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Socials</a>
                  </li>
                  <li>
                    <a href="#">Reviews</a>
                  </li>
                </ul>
              </li>

              <li
                className="pr-[40px] hover:cursor-pointer"
                onClick={() => navigate("/contact-us")}
              >
                Hubungi Kami
              </li>
            </ul>
          </nav> */}
          <nav>
            <ul className="flex flex-row text-[#f0ecec] text-[18px] font-medium leading-[32px] font-[Poppins]">
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
              {/* <li
                className="pr-[40px] hover:cursor-pointer"
                onClick={() => navigate("/alat-berat")}
              >
                Jenis Alat Berat
              </li>
              <li
                className="pr-[40px] hover:cursor-pointer"
                // onClick={() => navigate("/alat-berat")}
              >
                Portofolio <DownOutlined className="text-[12px] " />{" "}
                <ul>
                  <li>
                    <a href="#">Portofolio Proyek</a>
                  </li>
                  <li>
                    <a href="#">Potofolio Design</a>
                  </li>
                </ul>
              </li> */}

              <li
                className="pr-[40px] hover:cursor-pointer"
                onClick={() => navigate("/contact-us")}
              >
                Hubungi Kami
              </li>
            </ul>
          </nav>
          {/* <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            className="menu-custom"
          /> */}
        </div>
      </div>
      <div className="block md:hidden bg-[#0056B3]">
        <div className="flex flex-row py-[18px]">
          <div className="w-[50%] justify-start ">
            <img src={logo} className="px-[20px] md:px-[0px]" />
          </div>
          <div className="w-[50%] items-center flex justify-end text-[white]">
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
            className="absolute z-[999] bg-[white] w-full h-[100000px]"
          >
            <ul className="p-[20px]">
              <li
                className="pr-[40px] hover:cursor-pointer font-[Poppins] text-[20px] py-[10px] text-[#0056B3]"
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
                className="pr-[40px] hover:cursor-pointer font-[Poppins] text-[20px] py-[10px] text-[#0056B3]"
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
              {/* <li
                className="pr-[40px] hover:cursor-pointer font-[Poppins] text-[20px] py-[10px]"
                onClick={() => {
                  if (open === "open") {
                    setopen("close");
                  }
                  navigate("/alat-berat");
                }}
              >
                Jenis Alat Berat
              </li>
              <li
                className="pr-[40px] hover:cursor-pointer font-[Poppins] text-[20px] py-[10px]"
                onClick={() => (!show ? setShow(true) : setShow(false))}
              >
                Portofolio <DownOutlined className="text-[12px] " />{" "}
                <ul
                  className={`${
                    show ? "block" : "hidden"
                  } bg-[#f0f0f0] w-[auto] px-[20px] py-[10px]`}
                >
                  <li className="pr-[40px] hover:cursor-pointer font-[Poppins] text-[20px] pb-[10px]">
                    <a href="#">Portofolio Proyek</a>
                  </li>
                  <li className="pr-[40px] hover:cursor-pointer font-[Poppins] text-[20px]">
                    <a href="#">Potofolio Design</a>
                  </li>
                </ul>
              </li> */}
              {/* <li className="pr-[40px] hover:cursor-pointer" onClick={()=>navigate('/')}>General Kontraktor</li> */}
              <li
                className="pr-[40px] hover:cursor-pointer font-[Poppins] text-[20px] py-[10px] text-[#0056B3]"
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
