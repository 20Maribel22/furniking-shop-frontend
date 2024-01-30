import React, { useEffect, useState } from "react";
import "./Baner.css";
import { baner } from "../../utils/data";

import BanerCard from "../BanerCard/BanerCard";
import BanerIndicators from "../BanerIndicators/BanerIndicators";

function Baner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const slideInterval = setInterval(() => {
  //     setCurrentSlide((currentSlide) =>
  //       currentSlide < baner.length - 1 ? currentSlide + 1 : 0
  //     );
  //     return () => clearInterval(slideInterval);
  //   }, 5000);
  // }, [currentSlide]);

  useEffect(() => {
    const lastSlide = baner.length - 1;
    if (currentSlide < 0) {
      setCurrentSlide(lastSlide);
    }
    if (currentSlide > lastSlide) {
      setCurrentSlide(0);
    }
  }, [currentSlide]);

  useEffect(() => {
    const slideInterval = setInterval(
      () => setCurrentSlide((prev) => prev + 1),
      5000
    );

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <div className="baner">
      <div
        className="baner__inner"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {baner.map((b, index) => (
          <BanerCard b={b} key={index} />
        ))}
      </div>
      <BanerIndicators baner={baner} currentSlide={currentSlide} />
    </div>
  );
}

export default Baner;
