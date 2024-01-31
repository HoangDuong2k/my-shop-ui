import styles from "./Banner.module.css";
import allBanner from "../../../../assets/images/all.jpg";
import cosmeticsBanner from "../../../../assets/images/cosmetics.webp";
import housewareBanner from "../../../../assets/images/houseware.jpg";
import ginsengBanner from "../../../../assets/images/ginseng.webp";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { useEffect, useState } from "react";

function Banner() {
  const sliderList = [
    allBanner,
    cosmeticsBanner,
    housewareBanner,
    ginsengBanner,
  ];

  const [currentSlider, setCurrentSlider] = useState(0);
  const handleClickLeftBtn = () => {
    if (currentSlider === 0) setCurrentSlider(3);
    else setCurrentSlider(currentSlider - 1);
  };
  const handleClickRightBtn = () => {
    if (currentSlider === 3) setCurrentSlider(0);
    else setCurrentSlider(currentSlider + 1);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (currentSlider === 3) setCurrentSlider(0);
      else setCurrentSlider((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(timerId);
  });

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.slider}
        style={{
          transform: "translateX(" + -100 * currentSlider + "vw)",
        }}
      >
        {sliderList.map((sliderImg, index) => (
          <img
            key={index}
            src={sliderImg}
            className={styles.sliderItemImg}
            alt="slider item"
          />
        ))}
      </div>
      <button className={styles.sliderBtnLeft} onClick={handleClickLeftBtn}>
        <IoIosArrowDropleft />
      </button>
      <button className={styles.sliderBtnRight} onClick={handleClickRightBtn}>
        <IoIosArrowDropright />
      </button>
      <div className={styles.sliderDots}>
        <div
          className={
            currentSlider === 0
              ? styles.dot + " " + styles.selectedDot
              : styles.dot
          }
          onClick={() => setCurrentSlider(0)}
        ></div>
        <div
          className={
            currentSlider === 1
              ? styles.dot + " " + styles.selectedDot
              : styles.dot
          }
          onClick={() => setCurrentSlider(1)}
        ></div>
        <div
          className={
            currentSlider === 2
              ? styles.dot + " " + styles.selectedDot
              : styles.dot
          }
          onClick={() => setCurrentSlider(2)}
        ></div>
        <div
          className={
            currentSlider === 3
              ? styles.dot + " " + styles.selectedDot
              : styles.dot
          }
          onClick={() => setCurrentSlider(3)}
        ></div>
      </div>
    </div>
  );
}

export default Banner;
