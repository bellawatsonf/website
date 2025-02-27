import { Card,  Spin, Pagination } from "antd";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

type BannerData = {
  desc: string;
  title: string;
  url_banner: string;
};

type Galery = {
  url_image: string;
  description: string;
}[];

export default function Galery() {
  // const [bannerData, setBannerData] = useState<BannerData[]>([]);
  const [logo, setLogo] = useState<BannerData | null>(null);
  const [dataGalery, setDataGalery] = useState<Galery>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // State Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // Jumlah item per halaman

  useEffect(() => {
    axios
      .get("https://cms-next-rosy.vercel.app/api/banner", {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        const banners = response.data.data || [];
        setLogo(banners.find((el) => el.type === "logo") || null);
        // setBannerData(banners.filter((el) => el.type === "about"));
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    axios
      .get("https://cms-next-rosy.vercel.app/api/galery", {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => setDataGalery(response.data.data || []))
      .catch((error) => setError(error.message));
  }, []);

  // Menghitung data yang akan ditampilkan berdasarkan halaman saat ini
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentItems = dataGalery.slice(indexOfFirstItem, indexOfLastItem);

  if (loading)
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <Spin size="large" />
      </div>
    );

  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <style>{`
        .custom-pagination .ant-pagination-item {
          border-color: #00695c;
        }

        /* Warna Angka di Pagination */
        .custom-pagination .ant-pagination-item a {
          color: #00695c;
        }

        /* Warna Saat Hover */
        .custom-pagination .ant-pagination-item:hover a {
          color: white;
        }
        .custom-pagination .ant-pagination-item:hover {
          background-color: #004d40;
          border-color: #004d40;
        }

        /* Warna Saat Aktif */
        .custom-pagination .ant-pagination-item-active {
          background-color: #00695c !important;
          border-color: #00695c !important;
        }
        .custom-pagination .ant-pagination-item-active a {
          color: white !important;
        }

        

       
      `}</style>
      <HeaderComponent logo={logo} />

      {/* <Carousel arrows infinite={false}>
        {bannerData.map((el, index) => (
          <div
            key={index}
            className="h-[70vh] bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${el?.url_banner})` }}
          >
            <div className="text-center text-white px-6 md:w-1/2">
              <h2 className="text-4xl font-bold">{el?.title}</h2>
              {el?.desc && <p className="mt-2">{el?.desc}</p>}
            </div>
          </div>
        ))}
      </Carousel> */}

      {/* Galeri */}
      <div className="w-full py-[30px] bg-white px-6 md:px-16">
        <p className="text-center text-[#00695c] font-[Poppins] text-[32px] md:text-[60px] font-bold leading-[32px] py-[32px]">
          Galeri
        </p>
        {currentItems.map((el, index) => (
          <Card
          key={index}
          className="max-w-full mx-auto px-[10px] md:px-[20px] shadow-lg rounded-2xl mb-6 bg-[#f2fcfb] md:py-[50px]"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 ">
            {/* Gambar lebih besar */}
            <div className="col-span-2 flex justify-center md:justify-start">
              <img
                src={el?.url_image}
                alt="Gallery"
                className="w-[90%] md:w-[80%] rounded-xl"
              />
            </div>
            
            {/* Deskripsi */}
            <div className="col-span-3">
              <p className="text-gray-600 text-justify tracking-wide">
                {el?.description}
              </p>
            </div>
          </div>
        </Card>
        
        ))}

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <Pagination
            className="custom-pagination"
            current={currentPage}
            pageSize={pageSize}
            total={dataGalery.length}
            onChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>

      <FooterComponent />
    </>
  );
}
