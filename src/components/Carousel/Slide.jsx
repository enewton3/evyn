// import { Link } from "react-router-dom";

export default function Slide(props) {
  const { index, source, currentIndex, type, length } = props;

  const classNameDefault = type ? `carousel-slide-${type}` : "carousel-slide";
  const classNameActive = type
    ? `carousel-slide-active-${type}`
    : "carousel-slide-active";
  const classNameLast = type
    ? `carousel-slide-last-${type}`
    : "carousel-slide-last";
  const classNameNext = type
    ? `carousel-slide-next-${type}`
    : "carousel-slide-next";

  let className;

  if (index === currentIndex) {
    className = classNameActive;
  } else if (index === currentIndex + 1) {
    className = classNameNext;
  } else if (currentIndex === length - 1 && index === 0) {
    className = classNameNext;
  } else if (index === currentIndex - 1) {
    className = classNameLast;
  } else if (currentIndex === 0 && index === length - 1) {
    className = classNameLast;
  } else {
    className = classNameDefault;
  }

  return (
    <div
      className={`${classNameDefault} ${className}`}
      style={{ backgroundImage: `url(${source.url})` }}
    />
  );
}
