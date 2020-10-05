import React from "react";

function WorksSlider({ photoNumber, children }) {
  return (
    <>
      <div className="works-slider">
        <div className={`works-slider${photoNumber}`}></div>
        <h4 className="heading-quaternary">{children}</h4>
      </div>
    </>
  );
}

export default WorksSlider;
