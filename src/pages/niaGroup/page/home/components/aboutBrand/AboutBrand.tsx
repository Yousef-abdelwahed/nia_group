import { aboutNiaGroup, RectanglesBackImg } from "@/assets";
import { BrandSlider } from "@/components/BrandSlider/BrandSlider";
import React from "react";
import { useTranslation } from "react-i18next";
import Titles from "../titles";
import { extractTextData } from "@/lib/textTranslationUtils";
import { useData } from "@/context/DataContext";
import { API_BASE_IMG } from "@/constants/constants";

interface IAboutProp {
  aboutProp: { [key: string]: string } | any;
}
const AboutBrand: React.FC<IAboutProp> = ({ aboutProp }) => {
  const { currentLanguage } = useData();
  const { t, i18n } = useTranslation();
  const aboutUsLitter = t("home.aboutNia.litter");
  const aboutPropData = aboutProp[0];
  const translateText = extractTextData(aboutPropData, currentLanguage);
  const aboutNiaBrand = translateText.text1_ar || translateText.text1_en;
  const sentences = aboutNiaBrand
    .split(".")
    .filter((sentence) => sentence.trim().length > 0);
  return (
    <>
      <div className="line_services_container py-12 lg:py-20 relative">
        <BrandSlider />
      </div>
      <div className="relative w-screen pb-12 lg:pb-16">
        {/* background-text */}
        <div
          className={`background-text text-base text-[24px] ${
            i18n.language === "ar" ? "ltr" : "rtl"
          }`}
        >
          {t("home.aboutNia.header.orangeText")}
        </div>
        {/* bg -rectangle */}
        <div
          className={`ms-auto absolute size-14 md:size-16 ${
            i18n.language === "ar" ? "left-0 scaleImg" : "right-0"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 109 171"
            fill="none"
          >
            <g opacity="0.08" clipPath="url(#clip0_64_606)">
              <path d="M99.67 0L0 170.09H191.37L99.67 0Z" fill="white" />
              <path
                d="M97.81 3.21L187.78 170.09H191.36L99.67 0L97.81 3.21ZM4.89 164.16L8.08 170.08H4.5L3.03 167.36L4.89 164.16ZM7.55 159.55L13.23 170.09H16.81L9.4 156.34L7.55 159.55ZM12.06 151.73L21.96 170.08H25.54L13.91 148.52L12.06 151.73ZM16.57 143.92L30.68 170.09H34.26L18.42 140.71L16.57 143.92ZM21.09 136.1L39.41 170.09H42.99L22.94 132.89L21.09 136.1ZM25.6 128.28L48.14 170.09H51.72L27.45 125.08L25.6 128.28ZM30.12 120.47L56.87 170.09H60.45L31.97 117.26L30.12 120.47ZM34.63 112.65L65.6 170.09H69.18L36.48 109.44L34.63 112.65ZM39.14 104.83L74.32 170.08H77.9L40.99 101.62L39.14 104.83ZM43.66 97.01L83.06 170.08H86.64L45.51 93.8L43.66 97.01ZM48.17 89.2L91.78 170.09H95.36L50.02 85.99L48.17 89.2ZM52.68 81.38L100.5 170.09H104.08L54.53 78.17L52.68 81.38ZM57.2 73.56L109.24 170.08H112.82L59.05 70.35L57.2 73.56ZM61.71 65.75L117.96 170.09H121.54L63.56 62.54L61.71 65.75ZM66.22 57.93L126.69 170.09H130.27L68.07 54.72L66.22 57.93ZM70.74 50.11L135.42 170.09H139L72.59 46.9L70.74 50.11ZM75.25 42.29L144.15 170.08H147.73L77.11 39.08L75.25 42.29ZM79.76 34.48L152.87 170.09H156.45L81.62 31.27L79.76 34.48ZM84.27 26.66L161.6 170.09H165.18L86.13 23.45L84.27 26.66ZM88.79 18.84L170.33 170.08H173.91L90.64 15.63L88.79 18.84ZM93.3 11.03L179.05 170.09H182.63L95.16 7.82L93.3 11.03Z"
                fill="#EF7D00"
              />
            </g>
            <defs>
              <clipPath id="clip0_64_606">
                <rect width="191.37" height="170.09" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className="about_brand_container container mt-4 relative">
        <div
          className={`background-text ${
            i18n.language === "ar" ? "left-0" : "right-0"
          } bottom-0 transform translate-y-[100%]`}
        >
          {t("home.aboutNia.header.darkText")}
        </div>

        <div className="about_brand-header max-md:mx-4 md:hidden">
          <Titles>
            {t("home.aboutNia.header.darkText")}
            <span className="text-primary ">
              {t("home.aboutNia.header.orangeText")}
            </span>
          </Titles>
        </div>

        <div className="about_brand_container  mx-[1.125rem] md:mx-8   flex flex-col md:flex-row md:gap-11  md:mt-8 lg:mt-14 ">
          <article className="about_brand-Litter max-md:order-2 max-md:mt-4 md:text-[18px] max-w-[765px]">
            <div className="about_brand-header max-md:mx-4 md:mb-8 xl:mb-[57px] max-md:hidden">
              <h2 className="capitalize">
                {t("home.aboutNia.header.darkText")}
                <span className="text-primary max-md:hidden inline-block capitalize">
                  {t("home.aboutNia.header.orangeText")}
                </span>
              </h2>
            </div>
            {sentences.map((sentence, index) => (
              <React.Fragment key={index}>
                {sentence.trim() + "."}
                {index !== sentences.length - 1 && <br />}
              </React.Fragment>
            ))}
          </article>
          <div className="about_brand-img  order-1 mx-auto relative max-md:my-10 w-full pt-5">
            <div className="relative w-[83.9%] h-[284px] md:w-[318px] md:h-[366px] lg:w-[405px] mx-auto">
              <img
                src={RectanglesBackImg}
                alt="rectangle"
                className="absolute -top-5 -left-5 z-0 size-[90px] md:size-[120px] xl:size-[150px]"
              />
              <img
                src={RectanglesBackImg}
                alt="rectangle"
                className="absolute -bottom-5 -right-5 rotate-180 size-[90px]  md:size-[120px] xl:size-[150px]"
              />
              <img
                src={`${API_BASE_IMG}/${aboutPropData.img1}`}
                alt="About Nia Group"
                className="mx-auto relative z-10 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBrand;
