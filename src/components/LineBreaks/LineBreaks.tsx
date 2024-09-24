import React from "react";
interface Iprops {
  text: string;
}

const LineBreaks = (text: Iprops) => {
  // Split the text by dot (.)
  const sentences = text.split(".");
  return (
    <div>
      {sentences.map((sentence, index) => (
        <React.Fragment key={index}>
          {sentence.trim()}
          {index !== sentences.length - 1 && <br />}
        </React.Fragment>
      ))}
    </div>
  );
};
export default LineBreaks;
