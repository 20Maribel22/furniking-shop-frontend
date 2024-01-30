import React, { useState } from "react";
import "./FeedbackCard.css";
import right from "../../images/pagination/right-arrow.png";
import left from "../../images/pagination/left-arrow.png";
import SliderItem from "../SliderItem/SliderItem";
import { useContext } from "react";
import { AppContext } from "../../context";
import Preloader from "../Preloader/Preloader";

function FeedbackCard() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { feedback, isLoading } = useContext(AppContext)

  const prevSlide = () => {
   const index = currentSlide > 0 ? currentSlide - 1 : feedback.length - 1;
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    const index = currentSlide < feedback.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };

  return (
    <section id="feedback" className="feedback-card">
      <h2 className="section__title section__title_feedback">
        What Our Customer Says
      </h2>
      {isLoading && <Preloader />}
      <div className="slide">
        <div
          className="slide__inner"
          style={{ transform: `translateX(${-currentSlide * 100}%)` }}
        >
          {feedback.map((p, index) => (
            <SliderItem
              p={p}
              key={p._id}
            />
          ))}
        </div>
        <button
          className="feedback-card__btn feedback-card__btn_left"
          onClick={prevSlide}
        >
          <img src={left} alt="Arrow" />
        </button>
        <button className="feedback-card__btn" onClick={nextSlide}>
          <img src={right} alt="Arrow" />
        </button>
      </div>
    </section>
  );
}

export default FeedbackCard;
