import React from "react";

function GreyBox({ title, children }) {
  return (
    <>
      <div className="info-wrapper">
        <div className="grey-box">
          <h3 className="heading-quaternary heading-quaternary--padding">
            {title}
          </h3>
        </div>
        <div className="">
          <p className="pg padding">{children}</p>
        </div>
      </div>
    </>
  );
}

export default GreyBox;
