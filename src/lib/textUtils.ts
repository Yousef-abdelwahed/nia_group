export const removeLastWord = (text: string): string => {
  const wordsArray = text?.split(" ");
  wordsArray?.pop();
  return wordsArray?.join(" ");
};

export const getLastWord = (text: string): string => {
  const wordsArray = text.split(" ");
  return wordsArray.slice(-1)[0];
};
