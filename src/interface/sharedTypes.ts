// Define base types
export type Localization = { currentLanguage: string };
export type Translation = (key: string) => string;

// Combine types into a single type
export type BaseProps = {
  localization: Localization;
  translation: Translation;
};

// export type MainSectionProps = Omit<BaseProps, 'translation'>;

export interface ServiceCardProps extends BaseProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}
