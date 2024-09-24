import { homeImgsNiaGroup, niaTeams } from "./assets";

const { SA, EG } = niaTeams;
const { ourServicesImg, aboutUs, mainSection } = homeImgsNiaGroup;
const data = {
  ourServices: {
    header: {
      title: "services",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est.",
    },
    ads: {
      title: "nia advertising",
      description:
        "Lorem ipsum dolor sit amet consectetur. Curabitur molestie enim mauris a morbi dolor quisCurabitur molestie enim mauris a morbi dolor quis.",
    },
    solution: {
      title: "nia solution",
      description:
        "Lorem ipsum dolor sit amet consectetur. Curabitur molestie enim mauris a morbi dolor quisCurabitur molestie enim mauris a morbi dolor quis.",
    },
    servicesImg: ourServicesImg,
  },
  ourTeamData: {
    header: {
      title: "meet our",
      subTitle: "meet our",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est.",
    },
    teamLocation: {
      locationSA: "saudi arabia",
      locationEG: "egypt",
    },
    saTeam: [
      {
        name: "youssef bwazzer",
        position: "general manager",
        image: SA.seo,
      },
      {
        name: "ahmed elshigh",
        position: "executive manager",

        image: SA.EM,
      },
      {
        name: "samir el bataty",
        position: "administrative manager",
        image: SA.AM,
      },
    ],
    egTeam: [
      {
        name: "hossam el masry",
        position: "executive manager",

        image: EG.EM,
      },
      {
        name: "shadi youssef",
        position: "marketing manager",
        image: EG.MM,
      },
      {
        name: "abdallah el bataty",
        position: "administrative manager",
        image: EG.AM,
      },
    ],
  },
};

export { data };
