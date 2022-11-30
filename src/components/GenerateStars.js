import emptyStar from "../media/emptystar.png";
import Star from "../media/star.png";
const GenerateStars = ({ fullStars }) => {
  const emptyStars = 5 - fullStars;
  return (
    <>
      {(() => {
        var mystars = [];
        for (let i = 0; i < fullStars; i++) {
          mystars.push(<img key={i} className="star-rate" src={Star} alt="" />);
        }
        return mystars;
      })()}
      {emptyStars > 0 &&
        (() => {
          var mystars = [];
          for (let i = 0; i < emptyStars; i++) {
            mystars.push(
              <img key={i} className="star-rate" src={emptyStar} alt="" />
            );
          }
          return mystars;
        })()}
    </>
  );
};
export default GenerateStars;
