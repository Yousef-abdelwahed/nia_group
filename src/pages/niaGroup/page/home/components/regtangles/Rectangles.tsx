interface IProps {
  localization: string;
}

const RectanglesComponent = ({ localization }: IProps) => {
  return (
    <>
      {" "}
      <>
        <div
          className={`absolute bottom-[0%] left-0 w-[60px] md:w-[80px] lg:w-[130px]  transform  ${
            localization === "ar"
              ? "bottom-[0%] right-0 scaleImg"
              : "bottom-[0%] left-0 "
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 112"
            fill="none"
          >
            <g opacity="0.1">
              <path
                d="M19.7144 20.3678L-7.07142 38.0069L-7.07142 2.72878L19.7144 20.3678Z"
                fill="#EF7D00"
              />
              <path
                d="M19.7153 50.1226L-7.07045 67.7617L-7.07045 32.4835L19.7153 50.1226Z"
                fill="#EF7D00"
              />
              <path
                d="M19.7153 79.8774L-7.07045 97.5164L-7.07045 62.2383L19.7153 79.8774Z"
                fill="#EF7D00"
              />
              <path
                d="M19.7153 109.632L-7.07045 127.271L-7.07045 91.9932L19.7153 109.632Z"
                fill="#EF7D00"
              />
              <path
                d="M8.28564 35.9537L35.0714 18.3146L35.0714 53.5928L8.28564 35.9537Z"
                fill="#EF7D00"
              />
              <path
                d="M8.28564 93.6921L35.0714 76.053L35.0714 111.331L8.28564 93.6921Z"
                fill="#EF7D00"
              />
            </g>
          </svg>
        </div>
      </>
    </>
  );
};

export default RectanglesComponent;
