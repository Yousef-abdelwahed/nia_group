import { useData } from "@/context/DataContext";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface IShowMoreProps {
  type?: string;
  url: string;
}

const ShowMore: FC<IShowMoreProps> = ({ url, type = "" }) => {
  const { currentLanguage } = useData();
  const { t } = useTranslation();

  return (
    <div className="service_card-showMore flex gap-3  justify-center hover:scale-105 hover:text-stone-600 active:scale-95 active:text-stone-900">
      <span className="my-auto font-bold text-xl capitalize text-[1.375rem] xl:text-[1.5rem]">
        <Link to={url}>{t("components.showMore")}</Link>
      </span>
      <span className={`${currentLanguage === "ar" && "scaleImg"}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M26.0023 16L19.3357 9.33331M26.0023 16L19.3357 22.6666M26.0023 16L12.669 16C10.4468 16 6.00232 17.3333 6.00232 22.6666"
            stroke={type === "service" ? "#131312" : "#EF7D00"}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
};

export default ShowMore;
