import { useState, useEffect } from "react";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import Slide from "./Slide";
import Indicator from "./Indicator";
// import "./Carousel.css";

export default function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { source, imageChange, intervalTime, type } = props;
  // const nextIndex = currentIndex === source.length - 1 ? 0 : currentIndex + 1;

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(source.length);
    }
    setCurrentIndex((prev) => prev - 1);
  };

  const goToNextSlide = () => {
    if (currentIndex >= source.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (imageChange) {
      const interval = setInterval(() => {
        goToNextSlide();
      }, intervalTime);
      return () => clearInterval(interval);
    }
  });

  // console.log(source);

  return (
    <div className={type ? `carousel-${type}` : "carousel"}>
      <ArrowLeft
        type={type}
        onClick={() => {
          goToPrevSlide();
        }}
      />
      <div className={type ? `slides-${type}` : "slides"}>
        {source.map((item, index) => {
          return (
            <Slide
              key={`s${index}`}
              index={index}
              source={item}
              currentIndex={currentIndex}
              type={type}
              length={source.length}
            />
          );
        })}
      </div>
      <div className={type ? `indicators-${type}` : "indicators"}>
        {source.map((item, index) => {
          return (
            <Indicator
              key={`ind${index}`}
              index={index}
              onClick={() => goToSlide(index)}
              currentIndex={currentIndex}
              type={type}
            />
          );
        })}
      </div>

      <ArrowRight
        onClick={() => {
          goToNextSlide();
        }}
        type={type}
      />
    </div>
  );
}
