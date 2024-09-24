import { motion } from "framer-motion";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { navLogo } from "../../../../../assets";
import NavItems from "../../../NavLinks/NavLinks";
import { useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

// interface IProp {
//   isVisible: boolean;
//   currentUrl: { [key: string]: string };
// }

const NavDeskTop: FC = () => {
  const { i18n } = useTranslation();

  return (
    <nav
      className={`fixed  top-0 left-0 right-0 z-40 max-lg:hidden bg-white  shadow-md   pt-6 md:pt-0
      ${i18n.language === "ar" ? "rtl" : "ltr"}
      
    `}
    >
      <div className=" flex items-center container">
        <div className={` ${i18n.language !== "ar" ? "" : ""}  `}>
          <NavHashLink to={location.pathname == "/" ? "#hero_section" : "/"}>
            <img src={navLogo} className="w-[150px]" alt="" />
          </NavHashLink>
        </div>
        <NavItems />
      </div>
    </nav>
  );
};

export default NavDeskTop;
