import React from "react";
import "./BrandSlider.scss";

export function BrandSlider() {
  const ads = [
    "advertising",
    "design",
    "digital marketing",
    "ui/ux",
    "back end",
    "front end",
  ];
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return;

    const handleScroll = () => {
      scrollContainer.scrollLeft += 1;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }
    };

    const interval = setInterval(handleScroll, 20); // Adjust the interval speed as needed

    return () => clearInterval(interval);
  }, []);
  // const scrollContainerRef = React.useRef(null);

  //       React.useEffect(() => {
  //       const scrollContainer = scrollContainerRef.current;
  //       const handleScroll = () => {
  //         if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
  //           scrollContainer.scrollLeft = 0;
  //         } else {
  //           scrollContainer.scrollLeft += 1;
  //         }
  //       };
  //       const interval = setInterval(handleScroll, 20); // Adjust the interval speed as needed
  //       return () => clearInterval(interval);
  //     }, []);

  return (
    <>
      <div className="scroll-container" ref={scrollContainerRef}>
        <div className="scroll-line flex">
          {[...ads, ...ads].map((ad, index) => (
            <React.Fragment key={index}>
              <span className="capitalize  text-xl inline-block my-auto">
                {ad}
              </span>
              <span className="star my-auto pt-4 inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    d="M8.98309 1.85373C9.09617 1.57733 9.28434 1.33809 9.52633 1.16309C9.76831 0.98808 10.0544 0.884289 10.3523 0.863457C10.6503 0.842625 10.9481 0.905584 11.212 1.04521C11.476 1.18484 11.6957 1.39556 11.8461 1.65353L14.3789 5.99142L19.3891 6.36483C19.687 6.38703 19.9726 6.49215 20.2138 6.6683C20.455 6.84444 20.6421 7.08458 20.7539 7.36154C20.8657 7.6385 20.8977 7.94122 20.8464 8.23544C20.795 8.52967 20.6624 8.80365 20.4634 9.02638L17.1187 12.7748L18.3121 17.6555C18.383 17.9454 18.3715 18.2493 18.2788 18.533C18.186 18.8167 18.0158 19.0688 17.7873 19.2608C17.5588 19.4528 17.2811 19.5771 16.9857 19.6196C16.6903 19.662 16.3888 19.621 16.1155 19.5012L11.5131 17.4773L7.23917 20.1219C6.98516 20.2786 6.69238 20.3612 6.39392 20.3602C6.09546 20.3593 5.80321 20.2748 5.55021 20.1165C5.29721 19.9582 5.09354 19.7322 4.96221 19.4642C4.83089 19.1962 4.77715 18.8968 4.80707 18.5998L5.30757 13.6007L1.47377 10.3543C1.24568 10.1613 1.07618 9.90825 0.984483 9.62388C0.892784 9.33952 0.882542 9.03515 0.954919 8.74526C1.0273 8.45537 1.1794 8.19154 1.394 7.98365C1.6086 7.77575 1.87713 7.6321 2.16917 7.56897L7.07883 6.50389L8.98309 1.85373Z"
                    fill="#EF7D00"
                  />
                </svg>
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
