import React from "react";

function Menu({ setShow, show }) {
  const showToggle = () => {
    if (show === "navigation--none") {
      setShow("navigation--show");
    } else {
      setShow("navigation--none");
    }
  };

  return (
    <>
      <div className="menu">
        <input
          type="checkbox"
          class="navigation__checkbox"
          id="navi-toggle"
          onClick={showToggle}
        />
        <label for="navi-toggle" class="navigation__button">
          <span class="navigation__icon"></span>
        </label>
      </div>
    </>
  );
}

export default Menu;
