import { Button } from "antd";
import "./App.css";
import HeaderComponent from "./components/Header";

import FooterComponent from "./components/Footer";
import OurClientComponent from "./components/OurClient";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import axios from "axios";

type BannerData = {
  desc: string;
  title: string;
};

type HomeData = {
  visi: string;
  misi: string;
  grid2_title: string;
  grid1_title: string;
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
        const data = response.data.data[0];
        setPortoClient(data);
      })
      .catch(function (error) {
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
      <div className="h-[auto] md:h-[100vh] bg-[url('/Hero.svg')] bg-cover w-[100%] md:w-full px-[20px] md:px-[0px] pb-[50px] ">
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
            Hubungi Kami
          </Button>
        </div>
      </div>
      <div className="bg-[white]  w-full bg-cover px-[24px] md:px-[80px] py-[50px] md:py-[131px] h-[auto]">
        <div className="w-full md:w-[50%] max-[869px]">
          <p className="text-[#0056B3] font-[Poppins] text-[32px] md:text-[40px] font-bold leading-[32px] pb-[32px]">
            Tentang Kami
          </p>
          <p className="text-[#374354] font-[Poppins] text-[16px] md:text-[20px] font-bold leading-[32px] pb-[32px]">
            PETRONEUS SAYUDI & ASSOCIATES memiliki dedikasi tinggi dan selalu
            bekerja berdasarkan profesionalisme dalam memberikan pelayanan hukum
            pada klien, dimana ukuran utama kesuksesannya adalah kepuasan klien.
            Untuk meraih kepuasan klien, penting memperhatikan apa yang menjadi
            masalah, kebutuhan dan tujuan-tujuan dari klien. Sehingga, komitmen
            untuk memberikan pelayanan hukum yang terbaik kepada klien yang
            dilakukan melalui optimalisasi pengetahuan dan keterampilan hukum
            benar-benar terwujud.
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
        <div className="flex flex-row py-[40px] md:py-[80px] px-[24px] md:px-[120px]">
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
        </div>
        <div className="w-[100%] px-[24px] md:px-[120px] pb-[60px] md:pb-[120px] ">
          <p className="text-[#0d1f3d] font-[Poppins] text-[24px] md:text-[32px] font-bold leading-[32px] pb-[32px] flex flex-row text-center justify-center">
            {homeData?.grid1_title.split("(")[0]}{"("}
            <div className="text-[#040915] font-[Poppins] text-[24px] md:text-[32px] font-bold leading-[32px] ">
              {homeData?.grid1_title.split("(")[1]}
            </div>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <div className="bg-[#CBD1D1] py-[58px] px-[49px]  w-auto">
              <div className="border-b-[1px] border-b-solid border-b-[#3A4553]">
                <p className="text-[#0056B3] text-[24px] md:text-[32px] font-bold leading-[114%] pb-[8px]">
                  Legal Advice
                </p>
                <p className="text-[#000000] text-[14px] md:text-[16px] font-normal leading-[140%] pb-[35px]">
                  Kami dapat memberikan nasihat hukum baik lisan maupun tulisan
                  terhadap permasalahan tertentu yang beraspek hukum pada
                  tahap-tahap sebelum atau sesudah kebijakan perusahaan
                  dilaksanakan.
                </p>
              </div>
              {/* <div className="flex flex-row pt-[34px] items-center">
                <div className="w-[50%] ">
                  <AndroidOutlined className="text-[20px] md:text-[40px] text-[#D1B06B]" />
                </div>
                <div className="w-[50%]">
                  <Button className="bg-[#161D27] text-[14px] md:text-[20px] font-medium text-[white] font-[Poppins] py-[15px] px-[38px] h-auto">
                    Hubungi
                  </Button>
                </div>
              </div> */}
            </div>
            <div className="bg-[#CBD1D1] py-[58px] px-[49px]  w-auto">
              <div className="border-b-[1px] border-b-solid border-b-[#3A4553]">
                <p className="text-[#0056B3] text-[24px] md:text-[32px] font-bold leading-[114%] pb-[8px]">
                  Legal Drafting
                </p>
                <p className="text-[#000000] text-[14px] md:text-[16px] font-normal leading-[140%] pb-[35px]">
                  Kami membuat, memeriksa dan/atau merevisi / menyempurnakan
                  draft kontrak dan/atau surat-surat lain yang mempunyai
                  Konsekuensi Yuridis yang berlaku dalam hubungan antara klien
                  dengan pihak rekanan atau pihak lain.{" "}
                </p>
              </div>
              {/* <div className="flex flex-row pt-[34px] items-center">
                <div className="w-[50%] ">
                  <AndroidOutlined className="text-[20px] md:text-[40px] text-[#D1B06B]" />
                </div>
                <div className="w-[50%]">
                  <Button className="bg-[#161D27] text-[14px] md:text-[20px] font-medium text-[white] font-[Poppins] py-[15px] px-[38px] h-auto">
                    Hubungi
                  </Button>
                </div>
              </div> */}
            </div>
            <div className="bg-[#CBD1D1] py-[32px] md:py-[58px] px-[49px] w-auto">
              <div className="border-b-[1px] border-b-solid border-b-[#3A4553]">
                <p className="text-[#0056B3] text-[24px] md:text-[32px] font-bold leading-[114%] pb-[8px]">
                  Legal Opinion
                </p>
                <p className="text-[#000000] text-[14px] md:text-[16px] font-normal leading-[140%] pb-[35px]">
                  Pada item ini, kami dapat memberikan pendapat yang didasarkan
                  pada bukti bukti yang dimiliki pihak-pihak dan terkait pula
                  dengan posisi klien di “muka hukum”.
                </p>
              </div>
              {/* <div className="flex flex-row pt-[34px] items-center">
                <div className="w-[50%] ">
                  <AndroidOutlined className="text-[20px] md:text-[40px] text-[#D1B06B]" />
                </div>
                <div className="w-[50%]">
                  <Button className="bg-[#161D27] text-[14px] md:text-[20px] font-medium text-[white] font-[Poppins] py-[15px] px-[38px] h-auto">
                    Hubungi
                  </Button>
                </div>
              </div> */}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-[50px]">
            <div className="bg-[#CBD1D1] py-[58px] px-[49px]  w-auto">
              <div className="border-b-[1px] border-b-solid border-b-[#3A4553]">
                <p className="text-[#0056B3] text-[24px] md:text-[32px] font-bold leading-[114%] pb-[8px]">
                  Somasi
                </p>
                <p className="text-[#000000] text-[14px] md:text-[16px] font-normal leading-[140%] pb-[35px]">
                  Kami dapat memberikan teguran tertulis atas kelalaian atau
                  kesengajaan yang dilakukan oleh pihak lain yang dapat atau
                  berakibat merugikan klien oleh karena tidak dipenuhinya suatu
                  prestasi.
                </p>
              </div>
              {/* <div className="flex flex-row pt-[34px] items-center">
                <div className="w-[50%] ">
                  <AndroidOutlined className="text-[20px] md:text-[40px] text-[#D1B06B]" />
                </div>
                <div className="w-[50%]">
                  <Button className="bg-[#161D27] text-[14px] md:text-[20px] font-medium text-[white] font-[Poppins] py-[15px] px-[38px] h-auto">
                    Hubungi
                  </Button>
                </div>
              </div> */}
            </div>
            <div className="bg-[#CBD1D1] py-[58px] px-[49px] w-auto">
              <div className="border-b-[1px] border-b-solid border-b-[#3A4553]">
                <p className="text-[#0056B3] text-[24px] md:text-[32px] font-bold leading-[114%] pb-[8px]">
                  Negosiasi
                </p>
                <p className="text-[#000000] text-[14px] md:text-[16px] font-normal leading-[140%] pb-[35px]">
                  Kami dapat melakukan upaya upaya untuk secara maksimal
                  mengupayakan tercapainya kesepakatan. Dalam hal ini upaya
                  untuk mencapai kesepakatan di luar Pengadilan yang merupakan
                  bagian dari upaya alternatif penyelesaian suatu kasus yang
                  dihadapi klien.
                </p>
              </div>
              {/* <div className="flex flex-row pt-[34px] items-center">
                <div className="w-[50%] ">
                  <AndroidOutlined className="text-[20px] md:text-[40px] text-[#D1B06B]" />
                </div>
                <div className="w-[50%]">
                  <Button className="bg-[#161D27] text-[14px] md:text-[20px] font-medium text-[white] font-[Poppins] py-[15px] px-[38px] h-auto">
                    Hubungi
                  </Button>
                </div>
              </div> */}
            </div>
            <div className="bg-[#CBD1D1] py-[32px] md:py-[58px] px-[49px] w-auto">
              <div className="border-b-[1px] border-b-solid border-b-[#3A4553]">
                <p className="text-[#0056B3] text-[24px] md:text-[32px] font-bold leading-[114%] pb-[8px]">
                  Legal Investigasi
                </p>
                <p className="text-[#000000] text-[14px] md:text-[16px] font-normal leading-[140%] pb-[35px]">
                  Kami dapat meneliti, menyelidiki, memeriksa dan selanjutnya
                  memberi pertimbangan mengenai keadaan suatu objek, terutama
                  mengenai status, kedudukan dan keabsahannya menurut hukum.
                </p>
              </div>
              {/* <div className="flex flex-row pt-[34px] items-center">
                <div className="w-[50%] ">
                  <AndroidOutlined className="text-[20px] md:text-[40px] text-[#D1B06B]" />
                </div>
                <div className="w-[50%]">
                  <Button className="bg-[#161D27] text-[14px] md:text-[20px] font-medium text-[white] font-[Poppins] py-[15px] px-[38px] h-auto">
                    Hubungi
                  </Button>
                </div>
              </div> */}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-[50px]">
            <div className="bg-[#CBD1D1] py-[58px] px-[49px]  w-auto ">
              <div className="border-b-[1px] border-b-solid border-b-[#3A4553]">
                <p className="text-[#0056B3] text-[24px] md:text-[32px] font-bold leading-[114%] pb-[8px]">
                  Pendirian Badan Usaha Berbadan Hukum
                </p>
                <p className="text-[#000000] text-[14px] md:text-[16px] font-normal leading-[140%] pb-[35px]">
                  Kami dapat mengurus pembuatan badan usaha berbadan hukum
                  beserta izin-izinnya seperti pembuatan PT, CV, Koperasi,
                  Yayasan dan lain-lain.
                </p>
              </div>
              {/* <div className="flex flex-row pt-[34px] items-center">
                <div className="w-[50%] ">
                  <AndroidOutlined className="text-[20px] md:text-[40px] text-[#D1B06B]" />
                </div>
                <div className="w-[50%]">
                  <Button className="bg-[#161D27] text-[14px] md:text-[20px] font-medium text-[white] font-[Poppins] py-[15px] px-[38px] h-auto">
                    Hubungi
                  </Button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="w-[100%] px-[24px] md:px-[120px] pb-[60px] md:pb-[120px] ">
        <p className="text-[#0d1f3d] font-[Poppins] text-[24px] md:text-[32px] font-bold leading-[32px] pb-[32px] flex flex-row text-center justify-center">
            {homeData?.grid2_title.split("(")[0]}{"("}
            <div className="text-[#040915] font-[Poppins] text-[24px] md:text-[32px] font-bold leading-[32px] ">
              {homeData?.grid2_title.split("(")[1]}
            </div>
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
