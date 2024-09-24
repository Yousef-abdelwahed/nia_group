import React, { createContext, useContext, useState, useCallback } from "react";
import axios from "axios";
import { API_BASE_URL } from "@/constants/constants";

interface DataContextProps {
  fetchData: (endPoint: string) => Promise<any>;
  currentLanguage: string;
  changeLanguage: (lang: string) => void;
}
// create provider
const DataContext = createContext<DataContextProps | undefined>(undefined);
// create a component

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>("en");
  //  fetch data
  const fetchData = useCallback(async (endPoint: string) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${endPoint}`);
      return response.data;
    } catch (error) {
      console.error(`Failed to fetch from ${endPoint}:`, error);
      throw new Error(`Error fetching data from ${endPoint}`);
    }
  }, []);

  // language switcher
  const changeLanguage = (lang: string) => {
    setCurrentLanguage(lang);
  };

  return (
    <DataContext.Provider
      value={{ fetchData, currentLanguage, changeLanguage }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use the DataContext
export const useData = () => {
  // component provider
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
