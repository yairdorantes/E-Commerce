import { useContext, useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import "./styles/heartstyles.scss";
import { vars } from "./variables";
import AuthContext from "../context/AuthContext";

// http://localhost:4000/api/favorites/2S
const Heart = ({ emptyHeart, heart, active, id, changingState, dos }) => {
  let { user } = useContext(AuthContext);
  const urlFav = `${vars.mySite}favorites/${user.user.id}`;
  const [heartActive, setHeartActive] = useState(false);
  useEffect(() => {
    active ? setHeartActive(true) : setHeartActive(false);
  }, [changingState]);

  const handleHeart = () => {
    console.log("jaaj heart");
    if (heartActive) {
      setHeartActive(false);
      let options = {
        body: { items: [id] },
        headers: { "content-type": "application/json" },
      };
      helpHttp()
        .del(urlFav, options)
        .then((res) => {
          console.log(res);
        });
    } else {
      setHeartActive(true);
      let options = {
        body: { item: id },
        headers: { "content-type": "application/json" },
      };
      helpHttp()
        .post(urlFav, options)
        .then((res) => {
          console.log(res);
        });
    }
  };
  return (
    <div
      className="container-heart"
      onClick={() => {
        console.log("loliisisis");
        handleHeart();
      }}
    >
      <img
        className={
          heartActive
            ? "heart-component animationHeart"
            : "heart-component animation"
        }
        src={heartActive ? heart : emptyHeart}
      />
    </div>
  );
};

export default Heart;
