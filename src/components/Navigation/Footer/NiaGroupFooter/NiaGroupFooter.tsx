import { useTranslation } from "react-i18next";
import { footerLogo } from "../../../../assets";
import { customIcon } from "../../../../assets/icons/customIcon";
import { v4 as uuidv4 } from "uuid";
import { socialMediaLinks } from "@/constants/constants";
import { Link } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";

interface IProps {}
const socialIcons = [
  {
    id: uuidv4(),
    name: "youtube",
    url: socialMediaLinks.youtube_link,
    icon: customIcon.niaGroupIcon.socialIcon.youtube,
  },

  {
    id: uuidv4(),
    name: "facebook",
    url: socialMediaLinks.facebook_link,
    icon: customIcon.niaGroupIcon.socialIcon.facebook,
  },
  {
    id: uuidv4(),
    name: "whatsApp",
    url: socialMediaLinks.whatsApp_link,
    icon: customIcon.niaGroupIcon.socialIcon.whatsApp,
  },
  {
    id: uuidv4(),
    name: "instagram",
    url: socialMediaLinks.instagram_link,
    icon: customIcon.niaGroupIcon.socialIcon.instagram,
  },
  {
    id: uuidv4(),
    name: "twitter",
    url: socialMediaLinks.twitter_link,
    icon: customIcon.niaGroupIcon.socialIcon.twitter,
  },
  {
    id: uuidv4(),
    name: "linkedIn",
    url: socialMediaLinks.linkedin_link,
    icon: customIcon.niaGroupIcon.socialIcon.linkedIn,
  },
  {
    id: uuidv4(),
    name: "pinterest",
    url: socialMediaLinks.pinterest_link,
    icon: customIcon.niaGroupIcon.socialIcon.pinterest,
  },
  {
    id: uuidv4(),
    name: "tiktok",
    url: socialMediaLinks.tiktok_link,
    icon: customIcon.niaGroupIcon.socialIcon.tiktok,
  },
];

const NiaGroupFooter = ({}: IProps) => {
  const { t, i18n } = useTranslation();
  const footerLinks = [
    {
      id: uuidv4(),
      page: t("nav.pages.home"),
      url: location.pathname == "/" ? "#about-us" : "/",
    },
    {
      id: uuidv4(),
      page: t("nav.pages.aboutUs") + (i18n.language === "ar" ? " Nia" : ""),
      url: location.pathname == "/" ? "#hero_section" : "/",
    },
    {
      id: uuidv4(),
      page: t("nav.pages.ourServices"),
      url: location.pathname == "/" ? "#services" : "/",
      icon: "",
    },
    {
      id: uuidv4(),
      page: t("nav.pages.ourTeam"),
      url: location.pathname == "/" ? "#our-team" : "/",
    },
  ];
  return (
    <footer
      className={` sticky bottom-0 left-0 right-0 z-0 bg-[#131312]  text-white mx-auto  w-full   overflow-hidden  ${
        i18n.language === "ar" ? "rtl" : "ltr"
      }`}
    >
      <div className="footer_links mx-auto  max-md:max-w-[51.5%] md:max-w-[47.9%] lg:max-w-[30%] ">
        <NavHashLink to={location.pathname == "/" ? "#hero_section" : "/"}>
          <img
            src={footerLogo}
            width={109}
            alt="logo of brand nia"
            className="mx-auto py-[32px]"
          />
        </NavHashLink>
        <ul className="grid gap-4 grid-cols-2  md:flex md:justify-between   ">
          {footerLinks.map((link) => (
            <li
              key={uuidv4()}
              className="text-[1.125rem]  text-[#DCDCDC] text-nowrap capitalize text-start  "
            >
              <HashLink to={link.url}>{link.page} </HashLink>
            </li>
          ))}
        </ul>
        <ul className="flex justify-center max-md:flex-wrap gap-4 max-w-[264px] mt-[40px] pb-8 mx-auto">
          {socialIcons.map((icon) => (
            <li
              key={icon.id}
              className="hover:scale-125 transition-all delay-75"
            >
              <Link to={icon.url} aria-label={icon.name}>
                {icon.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer_details  mb-8 pt-8  text-4 text-[#DCDCDC] border-t-2 ">
        <div className="footer_details_location-description lg:flex items-center justify-between  w-[88.8%] mx-auto ">
          <div className="flex">
            <span className="inline-block me-2">
              {customIcon.locationIcon.pin}
            </span>
            <div className="footer_details_location-description max-w-[37.5rem] font-normal">
              <span>
                <HashLink to={"https://maps.app.goo.gl/dSy7sRZLnQYe78xp9"}>
                  {" "}
                  {t("address.ga")}
                </HashLink>
              </span>
              <span>
                /{" "}
                <HashLink to={"https://maps.app.goo.gl/JfBCSeFpTknsdbU67"}>
                  {" "}
                  {t("address.gz")}
                </HashLink>
              </span>
              <br />
              <span>
                <HashLink to={"https://maps.app.goo.gl/J4SJcQB8knKtzZen8"}>
                  {" "}
                  {t("address.rd")}
                </HashLink>
              </span>
            </div>
          </div>
          <div className="footer_details-phone flex flex-col gap-2 max-lg:mt-[18px]">
            <div className="flex">
              {" "}
              <span className="inline-block me-2">
                {customIcon.locationIcon.telephone}
              </span>
              <div
                className={`footer_details_location-description font-normal flex gap-2  ${
                  i18n.language === "ar" && "phoneDirection"
                }`}
              >
                <span className="flex">
                  <HashLink to={"tel:+966535463430"} className="flex">
                    +966535463430
                  </HashLink>{" "}
                  <HashLink to={"tel:+966535530319"} className="flex mx-2">
                    / +966535530319
                  </HashLink>
                </span>
                /{" "}
                <HashLink to={"tel:+201080721500"} className="flex">
                  +201080721500
                </HashLink>
              </div>
            </div>
            <div>
              <HashLink to={"tel:+966551326054"} className="flex">
                <span className="inline-block me-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11 23.59V19.99C5.99 19.73 2 15.57 2 10.5C2 5.26 6.26 1 11.5 1C16.74 1 21 5.26 21 10.5C21 15.45 17.56 20.43 12.43 22.9L11 23.59ZM11.5 3C7.36 3 4 6.36 4 10.5C4 14.64 7.36 18 11.5 18H13V20.3C16.64 18 19 14.22 19 10.5C19 6.36 15.64 3 11.5 3ZM10.5 14.5H12.5V16.5H10.5V14.5ZM12.5 13H10.5C10.5 9.75 13.5 10 13.5 8C13.5 6.9 12.6 6 11.5 6C10.4 6 9.5 6.9 9.5 8H7.5C7.5 5.79 9.29 4 11.5 4C13.71 4 15.5 5.79 15.5 8C15.5 10.5 12.5 10.75 12.5 13Z"
                      fill="#DCDCDC"
                    />
                  </svg>
                </span>{" "}
                <div
                  className={`footer_details_location-description font-normal   ${
                    i18n.language === "ar" && "phoneDirection"
                  }`}
                >
                  <HashLink to={"tel:+966551326054"} className="flex">
                    {" "}
                    +966551326054
                  </HashLink>
                </div>
              </HashLink>
            </div>
          </div>
        </div>
        <div className="contact_details-number"></div>
      </div>
    </footer>
  );
};

export default NiaGroupFooter;
