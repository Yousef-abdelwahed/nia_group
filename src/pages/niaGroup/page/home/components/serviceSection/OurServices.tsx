import { RectanglesBackImg, serviceAds, serviceSw } from "@/assets";
import { customIcon } from "@/assets/icons/customIcon";
import ShowMore from "@/components/ReadMore/ShowMore";
import { useData } from "@/context/DataContext";
import { ServiceCardProps } from "@/interface/sharedTypes";
import { useTranslation } from "react-i18next";
import Titles from "../titles";

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  link,
}) => {
  return (
    <div className="service_card-box md:w-1/2 px-5  max-lg:mt-12 xl:w-[340px] relative pb-8  min-h-[23.25rem] max-h-[443px] overflow-hidden shadowEffect rounded-xl flex justify-between  text-center  flex-col  my-auto ">
      <div className="layer absolute bottom-0 left-0 right-0 p-[13px] bg-[#F18B1C] h-4 xl:h-[1.4375rem]"></div>
      <div className="mx-auto text-center pt-4">{icon}</div>
      <div className=" text-[#141414]">
        <h3 className="text-[1.375rem] capitalize font-medium md:text-[1.625rem] xl:text-[1.75rem]">
          {title}{" "}
        </h3>
        <p className="font-normal text-[#3D3D3D] mt-4">{description}</p>
      </div>
      <div className="">
        {" "}
        <div className="py-4">
          <ShowMore url={link} />
        </div>
      </div>
    </div>
  );
};

const ServiceSection: React.FC = () => {
  const { currentLanguage } = useData();
  const localization = { currentLanguage };
  const { t } = useTranslation();
  const serviceImages = [serviceSw, serviceAds];
  const serviceData = [
    {
      icon: customIcon.servicesIcons.software.ads,
      title: "ads.header",
      desc: "ads.description",
      img: serviceSw,
    },
    {
      icon: customIcon.servicesIcons.software.app,
      title: "niaSolution.header",
      desc: "niaSolution.description",
      img: serviceAds,
    },
    {
      icon: customIcon.servicesIcons.software.outDoor,
      title: "ads.outDoor.header",
      desc: "ads.outDoor.description",
    },
    {
      icon: customIcon.servicesIcons.software.inDoor,
      title: "ads.inDoor.header",
      desc: "ads.inDoor.description",
    },
  ];
  return (
    <section
      id="services"
      className="service_container container relative pt-[40px] "
    >
      <div className="py-[40px] md:py-[57px] xl:py-[80px] container">
        <div className="service-header  mx-[18px] ">
          <Titles>{t("home.services.header.darkText")}</Titles>
          <p
            className="p-line-height xl:px-3 max-w-[664px] text-pretty  md:mt-6 xl:text-[20px] md:text-[18px] "
            style={{ lineHeight: " 170%" }}
          >
            {t("home.services.description")}
          </p>
        </div>
        <div className="service_cover">
          <div className="service_cover-img relative p-6 md:-bottom-20">
            <div className="img_service_box">
              {/* {serviceImages.map((img, index) => ())} */}

              <div className="service_ads lg:flex max-md:gap-[10.5rem]  lg:gap-[2.25rem] xl:gap-[3.25rem] pb-10">
                <div className="about_brand-img lg:order-1  order-1 mx-auto relative max-md:my-10 w-full pt-5">
                  <div className="relative group w-[90.4%] h-[336px] md:w-[377px] lg:w-[405px] xl:w-[494px]   md:h-[408px] xl:h-[568px]  mx-auto">
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
                    <div className="relative z-10 mx-auto  w-full h-full ">
                      <img
                        src={`${serviceSw}`}
                        alt="About Nia Group"
                        className="  w-full h-full object-cover "
                      />
                      {/* hover:bg-[#F18B1CD9] */}
                      <div
                        className={`service_img bg-[#F18B1CE5]   flex justify-center items-center flex-col gap-6 md:gap-10 xl:gap-[70px]  opacity-0 group-hover:opacity-100  transition-opacity  delay-75	duration-300 ease-in-out  absolute w-[81.8%]  left-1/2 right-1/2 transform  top-0 bottom-0 ${
                          currentLanguage === "ar"
                            ? "translate-x-[50%]"
                            : "-translate-x-[50%]"
                        }`}
                      >
                        <h3 className="text-[1.75rem] md:text-[32px] capitalize">
                          {t("home.services.services.niaSolution.header")}
                        </h3>
                        <p className="service_description text-center text-pretty capitalize px-2 md:text-[22px] xl:text-[28px] md:px-6">
                          {t("home.services.services.niaSolution.description")}
                        </p>
                        <ShowMore url="" type="service" />
                      </div>
                      <div
                        className={`service_img  text-[#FFF] capitalize  flex justify-center items-center flex-col gap-6 md:gap-10 xl:gap-[70px]  opacity-100 group-hover:opacity-0  transition-opacity delay-150 duration-300 ease-in-out  absolute w-[81.8%]  left-1/2 right-1/2 transform  top-0 bottom-0 ${
                          currentLanguage === "ar"
                            ? "translate-x-[50%]"
                            : "-translate-x-[50%]"
                        }`}
                      >
                        <h3 className="text-[1.75rem] md:text-[32px] ">
                          {t("home.services.services.niaSolution.header")}
                        </h3>
                      </div>{" "}
                    </div>
                  </div>
                </div>
                <div className="service_card_box flex w-full max-md:flex-col  md:gap-[1rem] max-md:gap-[1rem]  lg:order-2">
                  <ServiceCard
                    icon={customIcon.servicesIcons.software.ads}
                    title={t("home.services.services.ads.header")}
                    description={t("home.services.services.ads.description")}
                    link={"https://www.soluation.nia.com.eg/"}
                    localization={localization}
                    translation={t}
                  />
                  <ServiceCard
                    icon={customIcon.servicesIcons.software.app}
                    title={t("home.services.services.niaSolution.header")}
                    description={t(
                      "home.services.services.niaSolution.description"
                    )}
                    link={"https://www.soluation.nia.com.eg/"}
                    localization={localization}
                    translation={t}
                  />
                </div>
              </div>
              <div className="service_sw xl:mt-20 mt-16  lg:flex max-md:gap-[10.5rem]  lg:gap-[2.25rem] xl:gap-[3.25rem] pb-10">
                <div className="about_brand-img   order-2 mx-auto relative max-md:my-10 w-full pt-5">
                  <div className="relative group w-[90.4%] h-[336px] md:w-[377px] lg:w-[405px] xl:w-[494px]   md:h-[408px] xl:h-[568px]  mx-auto">
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
                    <div className="relative z-10 mx-auto  w-full h-full ">
                      <img
                        src={`${serviceAds}`}
                        alt="About Nia Group"
                        className="  w-full h-full object-cover "
                      />
                      {/* hover:bg-[#F18B1CD9] */}
                      <div
                        className={`service_img  bg-[#F18B1CE5]  flex justify-center items-center flex-col gap-6 md:gap-10 xl:gap-[70px]  opacity-0 group-hover:opacity-100  transition-opacity delay-75	duration-300 ease-in-out  absolute w-[81.8%]  left-1/2 right-1/2 transform  top-0 bottom-0 ${
                          currentLanguage === "ar"
                            ? "translate-x-[50%]"
                            : "-translate-x-[50%]"
                        }`}
                      >
                        <h3 className="text-[1.75rem] md:text-[32px] ">
                          {t("home.services.services.ads.header")}
                        </h3>
                        <p className="service_description text-center text-pretty capitalize px-1 md:text-[22px] xl:text-[28px] md:px-6">
                          {t("home.services.services.ads.description")}
                        </p>
                        <div className="py-4">
                          {" "}
                          <ShowMore url="" type="service" />
                        </div>
                      </div>
                      {/* text img  */}
                      <div
                        className={`service_img  text-[#FFF] capitalize  flex justify-center items-center flex-col gap-6 md:gap-10 xl:gap-[70px]  opacity-100 group-hover:opacity-0  transition-opacity delay-150 duration-300 ease-in-out  absolute w-[81.8%]  left-1/2 right-1/2 transform  top-0 bottom-0 ${
                          currentLanguage === "ar"
                            ? "translate-x-[50%]"
                            : "-translate-x-[50%]"
                        }`}
                      >
                        <h3 className="text-[1.75rem] md:text-[32px] ">
                          {t("home.services.services.ads.header")}
                        </h3>
                      </div>{" "}
                    </div>
                  </div>
                </div>
                <div className="service_card_box flex max-md:flex-col  md:gap-[1rem] max-md:gap-[1rem] xl:gap-[2.25rem] lg:order-1">
                  <ServiceCard
                    icon={customIcon.servicesIcons.software.outDoor}
                    title={t("home.services.services.ads.outDoor.header")}
                    description={t(
                      "home.services.services.ads.outDoor.description"
                    )}
                    link={"https://www.adv.nia.com.eg/"}
                    localization={localization}
                  />
                  <ServiceCard
                    icon={customIcon.servicesIcons.software.inDoor}
                    title={t("home.services.services.ads.inDoor.header")}
                    description={t(
                      "home.services.services.ads.inDoor.description"
                    )}
                    link={"https://www.adv.nia.com.eg/"}
                    localization={localization}
                    translation={t}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
