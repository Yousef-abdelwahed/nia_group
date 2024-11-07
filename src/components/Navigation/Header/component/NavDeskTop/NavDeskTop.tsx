import { motion } from "framer-motion";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { navLogo } from "../../../../../assets";
import NavItems from "../../../NavLinks/NavLinks";
import { useLocation, useNavigate } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

// interface IProp {
//   isVisible: boolean;
//   currentUrl: { [key: string]: string };
// }

const NavDeskTop: FC = ({ isVisible }) => {
  const { i18n } = useTranslation();
  const navigation = useNavigate();
  return (
    <nav
      className={`fixed  top-0 left-0 right-0 z-40 max-lg:hidden bg-white  shadow-md  px-5   pt-6 md:pt-0 ${
        isVisible ? "bg-white opacity-90" : ""
      }
      ${i18n.language === "ar" ? "rtl" : "ltr"}
      
    `}
    >
      <div className=" flex items-center px-4">
        <div className={` ${i18n.language !== "ar" ? "" : ""}  `}>
          <img
            src={navLogo}
            className={`w-[15vh] min-w-[50px] `}
            alt="nia logo"
            onClick={() =>
              navigation(location.pathname == "/" ? "#hero_section" : "/")
            }
          />
        </div>
        <NavItems />
      </div>
    </nav>
  );
};

export default NavDeskTop;
