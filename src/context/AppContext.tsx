import React, { createContext, useContext, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

// Define the shape of the context data
interface AppContextProps {
  localization: { language: string };
  translation: (key: string) => string;
}

// Create the context with a default value
const AppContext = createContext<AppContextProps | undefined>(undefined);

// Create the provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { t, i18n } = useTranslation(); 

  // Define the shared data
  const contextValue: AppContextProps = {
    localization: { language: i18n.language },
    translation: t,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

// Create a custom hook for access to the context
export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
