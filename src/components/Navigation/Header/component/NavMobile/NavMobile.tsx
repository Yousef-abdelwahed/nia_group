import { AnimatePresence, motion } from "framer-motion";
import React, { FC, useRef, useState } from "react";
import { useClickAway } from "react-use";
import { navLogo } from "../../../../../assets";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Image,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { v4 as uuidv4 } from "uuid";
import Icon from "../../../../../assets/icons/Icons";
import Button from "../../../../Button";
import LanguageSwitcher from "../../../LanguageSwitcher/LanguageSwitcher ";

interface NavMobileProps {
  isVisible: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  currentUrl: object;
}

const SidebarItem: FC<{
  title: string;
  href?: string;
  activeAccordion: boolean;
  toggleAccordion: any;
}> = ({ title, href, activeAccordion, toggleSidebar }) => {
  const mutedText = activeAccordion && "text-[#464440]";

  return (
    <li
      className={`nav-links p-2 mt-4  hover:bg-gray-100 cursor-pointer   m-auto md:text-xl font-medium capitalize mx-auto border-[#4E4E4E]  ${mutedText}`}
    >
      <a
        href={href}
        className="flex items-center  me-12 justify-end space-x-2   font-medium  md:text-[20px] "
      >
        <span
          onClick={() => toggleSidebar()}
          className="block text-xl md:text-[32px]  "
        >
          {title}
        </span>
      </a>
    </li>
  );
};

const NavMobile: FC<NavMobileProps> = ({
  isVisible,
  setOpen,
  isOpen,
  currentUrl,
}) => {
  const sidebarRef = useRef(null);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useClickAway(sidebarRef, () => {
    if (isOpen) setOpen(false);
  });
  const [activeAccordion, setActiveAccordion] = useState(false);
  const toggleAccordion = () => setActiveAccordion((prev) => !prev);
  const toggleSidebar = () => setOpen((prev) => !prev);
  const items = [
    { title: t("nav.pages.home"), href: "/" },
    {
      title: t("nav.pages.aboutUs") + (i18n.language === "ar" ? " Nia" : ""),
      href: location.pathname == "/" ? "#about-us" : "/",
    },
    {
      title: t("nav.pages.ourServices"),
      icon: <Icon name="ChevronLeft" size={24} color="#ffffff" />,
      href: location.pathname == "/" ? "#services" : "/",
    },
    {
      title: t("nav.pages.ourTeam"),
      href: location.pathname == "/" ? "#our-team" : "/",
    },
  ];

  const urlLinks = {
    solution: "https://www.soluation.nia.com.eg/",
    ads: "https://www.soluation.nia.com.eg/nia-digital-marketing",
    indoor: "",
    outDoor: "",
  };
  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : 5 }}
      transition={{ duration: 0.2, type: "spring" }}
      className={`lg:hidden bg-white   flex fixed top-0 left-0 right-0  z-50 justify-between  w-screen h-[55px]  md:h-20  bg-transparent transition-transform duration-300 ${
        currentUrl.pathname === "/contact-us"
          ? "border-b-2 w-full shadow-primary "
          : "  "
      }  
         ${isVisible ? "translate-y-0" : "-translate-y-full"}${
        i18n.language === "ar" ? "rtl" : "ltr"
      }`}
    >
      <div className="w-[45px] md:w-[70px] h-auto left-0 mx-4 translate-y-[5px]">
        <NavHashLink to={location.pathname == "/" ? "#hero_section" : "/"}>
          <img src={navLogo} alt="Logo" />
        </NavHashLink>
      </div>
      <aside className="transform  ">
        <button
          aria-label="toggle sidebar"
          onClick={toggleSidebar}
          className={`menuIcon mx-10  translate-y-[40%] md:translate-y-[100%]  `}
        >
          <Icon
            name="Menu"
            size={30}
            color={currentUrl.pathname === "/nia-solution" ? "white" : "black"}
          />
        </button>
      </aside>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={sidebarRef}
            initial={{ width: 0 }}
            animate={{ width: "100vw" }}
            exit={{ width: 0 }}
            className="bg-white   flex flex-col justify-between text-[#131312] h-[105vh] absolute -top-5 z-50 right-0  shadow-lg overflow-hidden w-full"
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-[20px]">
                <button
                  onClick={toggleSidebar}
                  className=" flex items-center my-auto  order-2 "
                >
                  <Icon name="X" size={30} />
                </button>
                <Image
                  src={navLogo}
                  alt="Nia logo"
                  boxSize={{ base: "70px" }}
                  className="order-1"
                />
              </div>

              <ul
                className={`text-center first:mb-[20px] ${
                  i18n.language === "ar" ? "ltr" : "rtl"
                }`}
              >
                {items.map((item, index) => {
                  return item.title === t("nav.pages.ourServices") ? (
                    <Accordion key={index} allowMultiple>
                      <AccordionItem border={"none"}>
                        <h2 className="flex items-center text-[20px]  md:text-[32px]   me-12 justify-end space-x-2 font-medium  ">
                          <AccordionButton
                            textAlign="end"
                            justifyContent="end"
                            fontSize={{ base: 24, md: 32 }}
                            marginTop={2}
                            padding={0}
                            className="capitalize "
                          >
                            <AccordionIcon />
                            {t("nav.pages.ourServices")}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} allowMultiple>
                          <AccordionItem border={"none"} padding={0}>
                            <h2 className="flex items-center  me-12  justify-end space-x-2  font-medium  md:text-[20px]   ">
                              <AccordionButton
                                textAlign="end"
                                justifyContent="end"
                                fontSize={24}
                                padding={0}
                                className="capitalize text-[1.5rem]"
                                marginTop={0}
                              >
                                <AccordionIcon />
                                {t("nav.pages.solution.sw.solution")}
                              </AccordionButton>
                            </h2>

                            <AccordionPanel pb={4}>
                              <li
                                style={{
                                  display: "flex",
                                  justifyContent: "end",
                                  marginLeft: "3rem",
                                  fontSize: "1.5rem",
                                }}
                                className="hover:bg-stone-100 capitalize"
                              >
                                <Link to={urlLinks.solution}>
                                  {" "}
                                  {t("nav.pages.solution.sw.sw")}
                                </Link>
                              </li>
                              <li
                                style={{
                                  display: "flex",
                                  justifyContent: "end",
                                  marginLeft: "3rem",
                                  marginTop: ".5rem",
                                  fontSize: "1.5rem",
                                }}
                                className="hover:bg-stone-100 capitalize"
                              >
                                <Link to={urlLinks.ads}>
                                  {" "}
                                  {t("nav.pages.solution.sw.mr")}
                                </Link>
                              </li>
                            </AccordionPanel>
                          </AccordionItem>
                          {/*Ads  */}
                          <AccordionItem border={"none"} marginTop={2}>
                            <h2 className="flex items-center  me-12 justify-end space-x-2 text-lg  font-medium  md:text-[20px]  ">
                              <AccordionButton
                                textAlign="end"
                                justifyContent="end"
                                fontSize={24}
                                padding={0}
                                className="capitalize"
                              >
                                <AccordionIcon />
                                {t("nav.pages.ads.ads")}
                              </AccordionButton>
                            </h2>

                            <AccordionPanel pb={4}>
                              <li
                                style={{
                                  display: "flex",
                                  justifyContent: "end",
                                  marginLeft: "3rem",
                                  fontSize: "1.25rem",
                                  fontWeight: "400",
                                }}
                                className="hover:bg-stone-100 capitalize"
                              >
                                <Link to="/service2">
                                  {" "}
                                  {t("nav.pages.ads.outDoor")}
                                </Link>
                              </li>
                              <li
                                style={{
                                  display: "flex",
                                  justifyContent: "end",
                                  marginLeft: "3rem",
                                  marginTop: ".5rem",
                                  fontSize: "1.5rem",
                                  fontWeight: "400",
                                }}
                                className="hover:bg-stone-100 capitalize"
                              >
                                <Link to="/service2">
                                  {" "}
                                  {t("nav.pages.ads.inDoor")}
                                </Link>
                              </li>
                            </AccordionPanel>
                          </AccordionItem>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <SidebarItem
                      toggleSidebar={toggleSidebar}
                      key={uuidv4()}
                      activeAccordion={false}
                      {...item}
                    />
                  );
                })}
              </ul>
            </div>
            <div
              className={` text-white mb-[50px]  flex justify-start pb-6 container ${
                i18n.language === "ar" ? "rtl" : ""
              }`}
            >
              <div onClick={() => toggleSidebar()} className="text-[#131312]">
                <LanguageSwitcher
                  classes="text-[#131312]"
                  svgColor="stroke-white	"
                />
              </div>
              <Button className="capitalize ">
                <Link to={"contact-us"} onClick={() => toggleSidebar()}>
                  contact us
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavMobile;
