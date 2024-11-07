// useAnalytics.ts
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-PVT1181CZ7", {
        page_path: location.pathname,
      });
    }
  }, [location]);
};