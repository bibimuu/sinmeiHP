import React from "react";

function Button({ children }) {
  return (
    <>
      <div className="button__position">
        <a href="/works" className="button__link">
          <div className="button__box">
            <h4 className="heading-quaternary">{children}</h4>
          </div>
        </a>
      </div>
    </>
  );
}

export default Button;
