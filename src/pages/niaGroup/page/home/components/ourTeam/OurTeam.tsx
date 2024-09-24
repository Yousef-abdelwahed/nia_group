import { useData } from "@/context/DataContext";
import { BaseProps } from "@/interface/sharedTypes";
import { useTranslation } from "react-i18next";
import RectanglesComponent from "../regtangles/Rectangles";
import Titles from "../titles";
import React from "react";
import { extractTeam } from "@/lib/textTranslationUtils";
import { API_BASE_IMG } from "@/constants/constants";

interface IOurTeamProp extends BaseProps {
  ourTeamProp: { [key: string]: { [key: string]: string } };
  location: "sa" | "EG";
}
const TeamSection: React.FC<IOurTeamProp> = ({ ourTeamProp }) => {
  // const { SA, EG } = niaTeams;
  const { currentLanguage } = useData();
  const { t } = useTranslation();
  const saData = (data, branshLocation) => {
    const filteredData = data.filter(
      (item) => item.location === branshLocation
    );
    return filteredData;
  };
  const resultSA = saData(ourTeamProp, "SA");
  const resultEG = saData(ourTeamProp, "EG");
  return (
    <section className="ourTeam relative pt-[40px]" id="our-team">
      <div className="container max-md:py-10 md:py-[57px] lg:py-20 relative">
        <div className="mx-[18px] md:mx-[32px]">
          <Titles>
            {t("home.ourTeam.header.darkText")}{" "}
            <span className="text-primary">
              {t("home.ourTeam.header.orangeText")}{" "}
            </span>
          </Titles>
          <p className="p-line-hight text-dark text-[1rem] md:text-lg mt-4 max-w-[912px]">
            {t("home.ourTeam.description")}
          </p>
        </div>
        <div className="team_container mx-[18px] md:mx-[32px]">
          {[
            { location: t("location.sa"), team: resultSA },
            { location: t("location.eg"), team: resultEG },
          ].map(({ location, team }, index) => (
            <div
              key={index}
              className={`team  w-full  lg:flex mt-10  ${
                location === "egypt" || location === "مصر"
                  ? "mt-[50px] md:mt-[80px]"
                  : " "
              }`}
            >
              <h3
                style={{ letterSpacing: "3.36px", lineHeight: "110%" }}
                className={`mb-[18px] max-lg:mb-[24px] ${
                  location == "egypt" || location === "مصر"
                    ? "w-full  lg:text-end me-[2rem] ms-auto"
                    : "lg:ms-[2rem]"
                }
                    ${
                      index === 0 ? "order-2" : "order-1"
                    } text-[1.375rem] md:text-4xl lg:text-[48px] uppercase tracking-[1.54px]`}
              >
                {location}
              </h3>
              <div
                className={`flex  ${
                  location === "egypt" || location === "مصر" ? "ms-auto" : " "
                }
                 ${
                   index === 0 ? "order-1" : "order-2"
                 } flex-col md:flex-row md:gap-[32px] mb-[1.125rem]`}
              >
                {team.map((member) => {
                  const dataTeamPotions = extractTeam(
                    member,
                    currentLanguage,
                    "position"
                  );
                  const dataTeamName = extractTeam(member, currentLanguage);
                  const teamPotions =
                    dataTeamPotions?.position_en ||
                    dataTeamPotions?.position_ar;
                  const teamName =
                    dataTeamName?.name_ar || dataTeamName?.name_en;
                  return (
                    <div
                      key={member.id}
                      className="team_card-member max-md:mt-8 max-md:mx-auto"
                    >
                      <figure className="lg:w-[193px] min-w-[180px] ">
                        <img
                          src={`${API_BASE_IMG}/${member.img}`}
                          alt={teamName}
                          className="w-full   ourTeamImg min-h-[145px] lg:h-[192px] mx-auto object-cover "
                        />
                        <figcaption className="text-[22px] mx-auto max-w-[14rem] md:text-[24px] lg:text-[28px] capitalize font-semibold text-center my-2">
                          {teamPotions}
                        </figcaption>
                      </figure>
                      <h4 className="text-[#464440]  text-center text-[18px] md:text-[20px] lg:text-[24px] capitalize ">
                        {teamName}
                      </h4>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`absolute bottom-0 `}>
        <RectanglesComponent localization={currentLanguage} />
      </div>
    </section>
  );
};

export default TeamSection;
