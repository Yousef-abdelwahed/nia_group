import { v4 as uuidv4 } from "uuid";
// import "../../styles/main.scss";
import React from "react";
import { useTranslation } from "react-i18next";
import { RectanglesBackImg } from "../../assets";
import { HeadingTitle } from "../../components/text";
// import HeroImage from "../Services/components/HeroImage";
import { API_BASE_IMG } from "@/constants/constants";
import { customIcon } from "../../assets/icons/customIcon";
import FormData from "./components/FormData/FormData";
import LocationSection from "./components/Location/LocationSection";
interface ContactInfo {
  id: number;
  adds: string;
  phone: string;
  location: string;
  iconAdds: any;
  iconPhone: any;
}

const ContactUs = () => {
  const { t, i18n } = useTranslation();
  const contactsData: ContactInfo[] = [
    {
      id: 1,
      location: "saudi", // location for saudi
      adds:
        i18n.language === "ar"
          ? `صالحيه-الرياض-12662-الرياض -السعوديه  `
          : `Salhiya- <br/> Riyadh-12662, Saudi Arabia`,
      phone: "+966535463430",
      iconAdds: customIcon.locationPin,
      iconPhone: customIcon.locationPhone,
    },
    {
      id: 2,
      location: "saudi", // location for saudi
      adds:
        i18n.language === "ar"
          ? "العزيزية -جدة-23337-السعودية"
          : "Aziziyah-<br/> Jeddah-23337,SaudiArab",
      phone: "+966535530319 ",
      iconAdds: customIcon.locationPin,
      iconPhone: customIcon.locationPhone,
    },

    {
      id: 3,
      location: "egp", // location for egp
      adds:
        i18n.language === "ar"
          ? "مبني النصر- ميدان الجيزة-مصر"
          : "al naser giza ",
      phone: "+201028872884",
      iconAdds: customIcon.locationPin,
      iconPhone: customIcon.locationPhone,
    },
  ];

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="about_brand-header  container  ps-[18px] lg:pt-[50px] lg:px-6 mx-auto mt-[24px] md:mt-[60px] lg:mt-[80px] mb-[70px] ">
        <h2 className="capitalize ">
          {t("contactUs.header.darkText")}
          <span className="text-primary mx-2  max-md: inline-block capitalize ">
            {t("contactUs.header.orangeText")}
          </span>
        </h2>
        <p className="mt-4 md:text-[18px]"> {t("contactUs.description")}</p>
      </div>
      <LocationSection contactsData={contactsData} />
      <section className="contact_section container p-5 relative z-20 bg-[#FFF]   w-[89.8%] md:w-[89.2%]    flex flex-col justify-center mx-auto  items-start mb-8 md:mb-[56px] xl:mb-20  ">
        <div className=" relative z-10 bg-[#FFF]   contact_container shadowEffect flex flex-col w-[96.8%] lg:w-full min-h-[490px]    mx-auto items-start     ">
          <div className=" flex w-full justify-center lg:justify-between mx-auto">
            <div className="max-lg:hidden w-[41.8%] relative ">
              <img
                src={`${API_BASE_IMG}/images/contact.png`}
                alt="contact us"
                className="h-full object-cover w-full "
              />
              <div className="absolute inset-0 bg-gradient-overlay"></div>
            </div>
            <div className="w-full md:w-[55%] relative ">
              <div className="text-center ">
                <HeadingTitle
                  headerDark={
                    i18n.language === "ar"
                      ? t("contactUs.form.header")
                      : t("contactUs.form.header.darkText")
                  }
                  headerOrang={
                    i18n.language === "ar"
                      ? ""
                      : t("contactUs.form.header.orangeText")
                  }
                  type="services"
                />
              </div>
              <FormData />
            </div>
          </div>
        </div>

        <img
          src={RectanglesBackImg}
          alt="Background top"
          className="absolute top-0 left-0 md:size-[150px] max-md:hidden object-cover block -z-10 "
        />
        <img
          src={RectanglesBackImg}
          alt="Background bottom"
          className="absolute bottom-0 right-0 md:size-[150px] max-md:hidden object-cover rotate-180 -z-10"
        />
      </section>
    </>
  );
};

export default ContactUs;
