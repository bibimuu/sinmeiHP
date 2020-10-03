import React from "react";

function WorkPhoto({ photoNumber, children }) {
  return (
    <>
      <div className={`work-photo work-photo${photoNumber}`}>
        <div className="work-photo--bg-black work-photo__flex--center">
          <h3 className="heading-tertiary heading-tertiary--white">
            {children}
          </h3>
        </div>
      </div>
    </>
  );
}

export default WorkPhoto;
