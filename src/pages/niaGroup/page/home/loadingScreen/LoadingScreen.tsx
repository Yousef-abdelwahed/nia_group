import { navLogo } from "@/assets";
import { Box } from "@chakra-ui/react";
import React from "react";

interface LoadingScreenProps {
  message?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      backgroundColor=""
      flexDirection="column"
      className="sticky top-0 bottom-0 left-0 right-0 z-50 h-screen bg-white "
    >
      <section className="flex  flex-col items-center justify-center">
        <div className="relative flex items-center justify-center">
          <img
            src={navLogo}
            alt="Logo"
            className="size-[400px] relative animate-bounceBallUpDown "
            sizes="500"
          />
        </div>
      </section>
    </Box>
  );
};

export default LoadingScreen;
