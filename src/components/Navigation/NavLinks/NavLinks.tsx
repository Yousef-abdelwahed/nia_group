import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Button from "../../Button";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher ";
import React from "react";
import { HashLink } from "react-router-hash-link";
import {
  Menu,
  Center,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  useTheme,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "lucide-react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import InnerMenu from "./components/InnerMenu";
import MenuItemSubMenu from "./components/MenuItemSubMenu";

const className =
  " lg:text-sm xl:text-xl 2xl:mx-4  flex flex-row items-center lg:mx-2   capitalize hover:text-orange-400 pt-3 transition ";

const NavItems = ({ type = "header" }) => {
  const { t, i18n } = useTranslation();

  const location = useLocation();
  const getRoutesPages = (t: Function) => [
    {
      name: t("nav.pages.home"),
      url: location.pathname == "/" ? "#hero_section" : "/",
      icon: "",
    },
    {
      name: t("nav.pages.aboutUs") + (i18n.language === "ar" ? " Nia" : ""),
      url: location.pathname == "/" ? "#about-us" : "/",
    },
    {
      name: t("nav.pages.ourServices"),
      url: location.pathname == "/" ? "#services" : "/",
      icon: "",
    },
    {
      name: t("nav.pages.ourTeam"),
      url: location.pathname == "/" ? "#our-team" : "/",
    },
  ];

  const routes = getRoutesPages(t);
  const getRoutesServiceList = (t: Function) => [
    {
      name: "Web Development",
      subServices: [
        { name: "Frontend Development", url: "/frontend" },
        { name: "Backend Development", url: "/backend" },
      ],
    },
    {
      name: "Design",
      subServices: [
        { name: "UI/UX Design", url: "/ui-ux" },
        { name: "Graphic Design", url: "/graphic-design" },
      ],
    },
  ];

  const linkPages = routes.map((item) => {
    const { url, name, icon } = item;
    const isactiveLink = location.pathname === url;
    if ((name === "services" || name === "الخدمات") && type === "header") {
      const isactiveLink = location.pathname === url;

      return (
        <div key={uuidv4()}>
          <Center>
            <Menu>
              <MenuButton
                px={0}
                py={0}
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="0px"
                _hover={{ bg: "" }}
                // _expanded={{ bg: "orange.500" }}
                fontWeight={600}
                _focus={{ boxShadow: "none" }}
              >
                <span
                  className={`${className} font-bold ${
                    isactiveLink ? "active" : ""
                  }`}
                >
                  {t("nav.pages.ourServices")}
                  <ChevronDownIcon color="#000" />
                </span>
              </MenuButton>
              <MenuList
                minW={207}
                textAlign="center"
                justifyContent="center"
                {...{ right: 0, left: "auto" }}
              >
                <MenuItemSubMenu>
                  <InnerMenu
                    title={t("nav.pages.solution.sw.solution")}
                    childrenItems={[
                      {
                        label: t("nav.pages.solution.sw.sw"),
                        url: "https://www.soluation.nia.com.eg/",
                      },
                      {
                        label: t("nav.pages.solution.sw.mr"),
                        url: "https://www.soluation.nia.com.eg/",
                      },
                    ]}
                  />
                </MenuItemSubMenu>
                <MenuItemSubMenu>
                  <InnerMenu
                    title={t("nav.pages.ads.ads")}
                    childrenItems={[
                      {
                        label: t("nav.pages.ads.outDoor"),
                        url: "https://www.nia.com.eg/",
                      },
                      {
                        label: t("nav.pages.ads.inDoor"),
                        url: "https://www.nia.com.eg/",
                      },
                    ]}
                  />
                </MenuItemSubMenu>
              </MenuList>
            </Menu>
          </Center>
        </div>
      );
    }
    return (
      <li
        key={uuidv4()}
        className={`text-start my-auto   ${
          type === "footer" ? "flex items-center first:pb-[22px]" : ""
        }`}
      >
        <HashLink
          to={url}
          className={`${className} text-nowrap relative transition duration-300 font-semibold text-[1.375rem] md:text-[1.5rem] lg:text-[1.25rem] ${
            isactiveLink ? "active" : ""
          }`}
        >
          {item.name}
        </HashLink>
      </li>
    );
  });

  return (
    <>
      <ul
        key={uuidv4()}
        className={`flex justify-center  gap-6 ${
          type === "header"
            ? "mx-auto   items-center w-full   max-h-[150px] "
            : ""
        }`}
      >
        {linkPages}
      </ul>
      <div className="ms-auto my-auto   flex me-10">
        <LanguageSwitcher classes="text-dark " svgColor="stroke-dark	" />
        <Link
          to="contact-us"
          className="inline-block order-1 my-auto text-xl capitalize "
        >
          <Button className="flex flex-row items-center  justify-center">
            {t("components.contactUs")}
            <div className="inline-block mx-2  items-center my-auto"></div>
          </Button>
        </Link>
      </div>
    </>
  );
};

export default NavItems;
