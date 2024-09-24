import { FC, ReactNode } from "react";
import "./Title.scss";
import { useTranslation } from "react-i18next";

// Define the interface for the props
interface ITitleProps {
  type?: "header" | "aboutUsHeader" | "services";
  headerDark: string;
  headerOrang?: string;
  classes?: string;
  children?: ReactNode;
}

// Define the functional component with the correct prop type
// mt-small md:mt-medium lg:mt-large
const HeadingTitle: FC<ITitleProps> = ({
  type = "header",
  headerDark = "",
  headerOrang = "",
  classes = "",
  children,
}) => {
  const { i18n } = useTranslation();
  return (
    <header
      className={` inline-flex justify-center items-center mt-xsmall md:mt-medium lg:mt-0 xl:mt-large text-center ${
        type !== "services"
          ? type === "aboutUsHeader"
            ? "mb-4 lg:mb-small text-center "
            : " mb-2 lg:mb-small  "
          : " mx-auto justify-center "
      }`}
    >
      {/*   justify-center  */}
      <h2
        className={`${
          type !== "services"
            ? "titleSections text-center "
            : "font-semibold md:font-bold"
        } capitalize text-2xl md:text-[30px] lg:text-[40px] md:px-4 lg:px-small	`}
      >
        <span
          className={`${classes} text-[#131312] font-montserrat font-semibold  capitalize break-words ${
            i18n.language === "ar" ? "inline-block" : ""
          } `}
        >
          {headerDark}
        </span>
        <span
          className={`${classes} ms-2 text-[#EF7D00] font-montserrat font-semibold break-words capitalize ${
            i18n.language === "ar" ? "inline-block" : ""
          }`}
        >
          {headerOrang}
        </span>
        {children}
        {headerDark === "why" && (
          <span className="text-[#131312] font-montserrat font-semibold capitalize break-words ">
            ?
          </span>
        )}
      </h2>
    </header>
  );
};

export default HeadingTitle;
