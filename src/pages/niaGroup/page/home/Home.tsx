import { useData } from "@/context/DataContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import MainSection from "./components/mainSection/MainSection";
import AboutBrand from "./components/aboutBrand/AboutBrand";
import ServiceSection from "./components/serviceSection/OurServices";
import TeamSection from "./components/ourTeam/OurTeam";
import { Spinner } from "@chakra-ui/react";
import LoadingScreen from "./loadingScreen";

const Home = () => {
  const { fetchData } = useData();
  const fetchAllData = async (fetchData: any) => {
    const [bannerResponse, aboutUsResponse, teams] = await axios.all([
      fetchData("banners"),
      fetchData("about_us"),
      fetchData("teams"),
    ]);
    return {
      bannerData: bannerResponse,
      aboutUsData: aboutUsResponse,
      ourTeamData: teams,
    };
  };
  // react query
  const { data, isLoading, error, isFetching } = useQuery({
    queryKey: ["homePageData"],
    queryFn: () => fetchAllData(fetchData),
    staleTime: 1000 * 60 * 10, // Increase stale time to 10 minutes
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    refetchOnMount: true, // Disable refetch on mount
  });
  const { bannerData, aboutUsData, ourTeamData } = data || {};

  if (isLoading) return <LoadingScreen />;
  if (error)
    return (
      <div className="min-h-screen  flex justify-center items-center text-2xl">
        ERROR 404
      </div>
    );
  return (
    <>
      <MainSection bannerProp={bannerData} />
      <section
        id="about-us"
        className="about_brand relative pb-6 md:pb-[84px] xl:pb-[145px] bg-[#F5F5F5]"
      >
        <AboutBrand aboutProp={aboutUsData} />
        <div className="max-md:hidden">
          {/* <RectanglesComponent localization={localization} /> */}
        </div>
      </section>
      <ServiceSection />
      <TeamSection ourTeamProp={ourTeamData} />
    </>
  );
};

export default Home;
