import React, { useState } from "react";
import { useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import GenerateStars from "./GenerateStars";
import { vars } from "./variables";
const Reviews = ({ product }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    helpHttp()
      .get(`${vars.mySite}reviews/${product}`)
      .then((res) => {
        // console.log(res);
        setReviews(res);
      });
  }, []);

  return (
    <div className="container-reviews">
      <div className="title-reviews">Opiniones del producto</div>
      <div>
        <strong>4.5</strong>
      </div>
      <div className="container-opinions">
        {reviews &&
          reviews.map((opinion, key) => {
            return (
              <div key={key} className="opinion-box">
                <div>
                  <GenerateStars fullStars={opinion.rating} />
                  {/* <div>{opinion.date}</div> */}
                </div>
                <p>{opinion.text}</p>
                <hr className="h-re" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Reviews;
