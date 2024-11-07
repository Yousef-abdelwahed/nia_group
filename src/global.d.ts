// global.d.ts
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[]; // Optional: if you want to type dataLayer as well
  }
}

export {}; // Ensure the file is treated as a module
