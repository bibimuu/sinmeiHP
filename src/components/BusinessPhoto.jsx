import React from "react";
import Button from "../components/Button";

function BusinessPhoto({ photo1, photo2 }) {
  return (
    <>
      <div className="padding--small-bottom row">
        <div className="col-1-of-2 text-center">
          <img
            className="business-photo__img"
            src={photo1}
            alt="BusinessPhoto"
          />
        </div>
        <div className="col-1-of-2 text-center">
          <img
            className="business-photo__img"
            src={photo2}
            alt="BusinessPhoto"
          />
        </div>
      </div>
      <Button>実績を見る</Button>
    </>
  );
}

export default BusinessPhoto;
