import HeaderComponent from "./components/Header";
import img from "./assets/Rectangle438.svg";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import FooterComponent from "./components/Footer";
import img1 from "./assets/cardheader.svg";
import img2 from "./assets/2.svg";
import img3 from "./assets/3.svg";
import img4 from "./assets/4.svg";
import img5 from "./assets/5.svg";
import img6 from "./assets/6.svg";
import { Helmet } from "react-helmet-async";

export default function AboutUs() {
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
          TENTANG KAMI
        </p>
      </div>
      <div className="w-100% py-[50px] bg-[white] ">
        <div className="m-auto block w-[70%] border-b-[2px] border-b-[#C7C7CC] border-b-solid">
          <p className="text-[#0056B3] font-[Poppins] text-center text-[32px] md:text-[40px] leading-[32px] font-bold pt-[32px] pb-[14px] md:pb-[32px]">
            Petroneus Sayudi & Associates
          </p>
          <p className="text-[#374354] font-[Poppins] text-justify md:text-center text-[14px] md:text-[20px] leading-[32px] font-normal pt-[20px] md:pt-[32px] pb-[32px]">
            berkedudukan di Jl. Pondasi Raya No. 28, RT.02 RW 17, Pulo Gadung,
            Jakarta Timur, 13210, mempunyai komitmen untuk turut menjunjung
            tinggi kehormatan profesi Advokat demi penegakan hukum yang benar
            dan terwujudnya keadilan hukum bagi masyarakat.Kami memiliki
            dedikasi tinggi dan selalu bekerja berdasarkan profesionalisme dalam
            memberikan pelayanan hukum pada klien, dimana ukuran utama
            kesuksesannya adalah kepuasan klien. Untuk meraih kepuasan klien,
            penting memperhatikan apa yang menjadi masalah, kebutuhan dan
            tujuan-tujuan dari klien. Sehingga, komitmen untuk memberikan
            pelayanan hukum yang terbaik kepada klien yang dilakukan melalui
            optimalisasi pengetahuan dan keterampilan hukum benar-benar
            terwujud.
          </p>

          <img src={img} className="block m-auto pb-[50px]" />
        </div>
        <div className="pt-[50px] md:pt-[100px]">
          <p className="text-[#0056B3] font-[Poppins] text-center text-[22px] md:text-[40px] leading-[32px] font-sembibold pb-[60px]">
            PARA ADVOKAT & KONSULTAN HUKUM
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-auto">
            <div>
              <Card
                hoverable
                style={{ width: 300, display: "block", margin: "auto",background:'#CBD1D1'}}
                cover={<img alt="example" src={img1} />}
              >
                <Meta
                  title="Petroneus Marpaung, S.H."
                  description="Konsultan Hukum Perdata"
                />
              </Card>
            </div>
            <div>
              <Card
                hoverable
                style={{ width: 300, display: "block", margin: "auto",background:'#CBD1D1' }}
                cover={<img alt="example" src={img2} />}
              >
                <Meta
                  title="Akbar Sayudi, S.H., M.H."
                  description="Konsultan hukum bidang Hukum Tata Negara dan Hukum Administrasi Negara"
                />
              </Card>
            </div>
            <div>
              <Card
                hoverable
                style={{ width: 300, display: "block", margin: "auto",background:'#CBD1D1' }}
                cover={<img alt="example" src={img3} />}
              >
                <Meta
                  title="Alamando Jefri Teguh Manurung, S.H., M.H."
                  description="Konsultan Hukum Pidana"
                />
              </Card>
            </div>
            <div>
              <Card
                hoverable
                style={{ width: 300, display: "block", margin: "auto",background:'#CBD1D1' }}
                cover={<img alt="example" src={img4} />}
              >
                <Meta
                  title="Firmansyah Zulkarnaen Fhaderi, S.H. dan Senja Sukar Sarry, S.HH.,"
                  description="Konsultan Hukum Keluarga"
                />
              </Card>
            </div>
            <div>
              <Card
                hoverable
                style={{ width: 300, display: "block", margin: "auto",background:'#CBD1D1' }}
                cover={<img alt="example" src={img5} />}
              >
                <Meta
                  title="Priyo Jatmiko, S.H., M.H."
                  description="Konsultan Hukum Perusahaan, Ketua DPC PERADI Bekasi Periode 2015-2020"
                />
              </Card>
            </div>
            <div>
              <Card
                hoverable
                style={{ width: 300, display: "block", margin: "auto",background:'#CBD1D1' }}
                cover={<img alt="example" src={img6} />}
              >
                <Meta
                  title="Irene Yosephine Soeitoe, S.H., M.H."
                  description="Konsultan Hak Atas Kekayaan Intelektual dan Hukum Kepailitan"
                />
              </Card>
            </div>
          </div>
          <div className="py-[16px] w-full bg-[#0056B3] mt-[48px]">
            <p className="text-[#dbdde0] text-center text-[16px] md:text-[20px] font-medium font-[Poppins] leading-[150%]">
              Serta bekerja sama dengan Notaris Hermansyah, S.H., M.Kn., dengan
              wilayah kerja di Kabupaten Bekasi.
            </p>
          </div>
        </div>
      </div>
      {/* <OurClientComponent /> */}
      <FooterComponent />
    </>
  );
}
