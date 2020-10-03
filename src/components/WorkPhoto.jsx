import React from "react";

function WorkPhoto({ photoNumber, children }) {
  return (
    <>
      <a href="#" className="work-photo__link">
        <div className={`work-photo work-photo${photoNumber}`}>
          <div className="work-photo--bg-black work-photo__flex--center">
            <h3 className="heading-tertiary heading-tertiary--white text-center">
              {children}
            </h3>
          </div>
        </div>
      </a>
    </>
  );
}

export default WorkPhoto;
