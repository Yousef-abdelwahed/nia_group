import { API_BASE_IMG } from "@/constants/constants";
import { useData } from "@/context/DataContext";
import { getLastWord, removeLastWord } from "@/lib/textUtils";
import { useTranslation } from "react-i18next";
import { ToastContainer } from "react-toastify";
import ContentEmail from "./components/ContentEmail";

interface IProp {
  bannerProp: { [key: string]: { [key: string]: string } };
}
const MainSection: React.FC<IProp> = (bannerProp: IProp) => {
  const { currentLanguage } = useData();
  const { t } = useTranslation();
  const bannerData = bannerProp?.bannerProp[0];
  const getProcessedText = (text: string) => {
    return {
      firstWord: removeLastWord(text),
      darkText: removeLastWord(text),

      lightText: getLastWord(text),
    };
  };
  const { darkText, lightText } = bannerProp
    ? getProcessedText(
        currentLanguage === "ar" ? bannerData?.text_ar : bannerData?.text_en
      )
    : { darkText: "", lightText: "" };
  return (
    <>
      <section
        id="hero_section"
        className="main_container   overflow-hidden relative h-[421px] md:h-[638px] lg:h-screen xl:h-[100vh]   p-0 m-0 w-screen"
      >
        <div className="max-md:w-full md:w-[80%] lg:w-[80%] xl:w-[60%] flex flex-col   md:gap-28 px-[18px]  z-30 absolute left-1/2   bottom-[50%] transform translate-y-[50%] -translate-x-[50%]  ">
          <div className="flex gap-8 flex-col max-md:justify-around ">
            <h1
              style={{ letterSpacing: "2px" }}
              className="main_container-header text-center  capitalize break-words	font-bold  max-md:text-balance md:text-center    text-[28px] md:text-[40px] lg:text-[60px] xl:text-[70px]  "
            >
              <span className="text-[#FFFDFB]"> {darkText}</span>
              <span className="text-primary"> {lightText}</span>
            </h1>
            <p className="md:text-xl lg:text-2xl text-[#FFFDFB] text-center  capitalize text-pretty">
              {t("home.mainSection.header.caption")}
            </p>
          </div>
          <div className=" w-full m-auto md:w-[60vw] lg:w-[40vw] xl:w-[40vw] max-w-[560px]  max-md:mx-auto   my-5 relative top-5 ">
            <ContentEmail language={currentLanguage} />
          </div>
        </div>
        <div className="    h-[392px] md:h-[638px] xl:h-[1024px]">
          <img
            alt="site of nia advertising"
            src={`${API_BASE_IMG}/${bannerData.img}`}
            style={{ objectPosition: " 40% 10%" }}
            className={`ms-auto  w-full h-full object-cover  absolute z-0 transform translate-x-[-6px]  right-0 brightness-75	 ${
              currentLanguage === "ar" && "scaleImg"
            }  `}
          />
        </div>
        <ToastContainer
          position="bottom-left"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </section>
    </>
  );
};

export default MainSection;
