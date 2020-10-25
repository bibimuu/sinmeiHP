import React, { useState } from "react";
import Menu from "./Menu";

function Navigation() {
  const [show, setShow] = useState("navigation--none");

  return (
    <>
      <Menu setShow={setShow} show={show} />
      <div className={`${show} navigation`}>
        <div className="navigation__logo">
          <a className="link" href="/top">
            <h1 className="heading-primary">伸明工業</h1>
          </a>
        </div>

        <div>
          <ul className="navigation__list text-center">
            <li className="navigation__item">
              <a href="/top" className="navigation__link link">
                TOP
              </a>
            </li>
            <li className="navigation__item">
              <a href="/about" className="navigation__link link">
                会社概要
              </a>
            </li>
            <li className="navigation__item">
              <a href="/top#work-photo" className="navigation__link link">
                事業紹介
              </a>
            </li>
            <li className="navigation__item">
              <a href="/works" className="navigation__link link">
                実績
              </a>
            </li>
            <li className="navigation__item">
              <a href="/recruit" className="navigation__link link">
                求人募集
              </a>
            </li>
            <li className="navigation__item">
              <a href="/top#inquiry" className="navigation__link link">
                お問合せ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navigation;
