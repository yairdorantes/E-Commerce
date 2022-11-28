import { useEffect, useState } from "react";
import "./styles/heartstyles.scss";
const Heart = ({ emptyHeart, heart, active }) => {
  const [heartActive, setHeartActive] = useState(false);
  useEffect(() => {
    active ? setHeartActive(true) : setHeartActive(false);
  }, []);

  const handleHeart = () => {
    heartActive ? setHeartActive(false) : setHeartActive(true);
  };
  return (
    <img
      className={
        heartActive
          ? "heart-component animationHeart"
          : "heart-component animation"
      }
      onClick={handleHeart}
      src={heartActive ? heart : emptyHeart}
    />
  );
};

export default Heart;
