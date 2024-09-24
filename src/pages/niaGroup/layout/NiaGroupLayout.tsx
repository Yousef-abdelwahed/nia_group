import { useTranslation } from "react-i18next";
import { Outlet, useLocation } from "react-router-dom";
import { FooterForGroup, Header } from "../../../components/Navigation";
import { customIcon } from "@/assets/icons/customIcon";

const NiaGroupLayout = () => {
  const { t, i18n } = useTranslation();
  const currentUrl = useLocation();

  return (
    <>
      {currentUrl.pathname === "/nia-solution " && (
        <>
          <div className="ourTeamImg">
            <ul className="flex flex-col md:flex-row md:gap-[24px] md:justify-center py-[15px] px-[20px]">
              <li className="flex">
                <span className="me-[11px]">{customIcon.locationPin}</span>
                {t("contactUs.adress.EG")}{" "}
              </li>
              <li className="flex">
                <span className="me-[11px]">{customIcon.locationPhone}</span>
                +201080721500
              </li>
            </ul>
          </div>
        </>
      )}
      <Header />
      <main
        className={`overflow-hidden relative z-10 ${
          i18n.language === "ar" ? "rtl" : "ltr"
        } bg-[rgb(255,253,251)]`}
      >
        <Outlet />
      </main>
      <FooterForGroup />
    </>
  );
};

export default NiaGroupLayout;
