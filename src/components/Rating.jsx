import React from "react";

function Rating({ rating }) {
  const filledStars = Math.round(rating);
  const emptyStars = 5 - filledStars;

    function renderStars(){
        const stars = [];
        for (let i = 0; i < filledStars; i++) {
          stars.push(<span key={i} className="fa fa-star active"></span>);
        }
        for (let i = 0; i < emptyStars; i++) {
          stars.push(<span key={filledStars + i} className="fa fa-star"></span>);
        }
        return stars;
    }

  return (
    <div className="show_star">
      {renderStars()}
    </div>
  );
}

export default Rating;