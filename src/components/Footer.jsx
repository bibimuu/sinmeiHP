import React from "react";
import instagram from "../assets/instagram.png";
import line from "../assets/line.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <ul className="footer__list text-center">
          <li className="footer__item">
            <a href="/top" className="footer__link">
              TOP
            </a>
            <span className="footer__link--span">|</span>
          </li>
          <li className="footer__item">
            <a href="/about" className="footer__link">
              会社概要
            </a>
            <span className="footer__link--span">|</span>
          </li>
          <li className="footer__item">
            <a href="/top#work-photo" className="footer__link">
              事業紹介
            </a>
            <span className="footer__link--span">|</span>
          </li>
          <li className="footer__item">
            <a href="/works" className="footer__link">
              実績
            </a>
            <span className="footer__link--span">|</span>
          </li>
          <li className="footer__item">
            <a href="/recruit" className="footer__link">
              求人募集
            </a>
            <span className="footer__link--span">|</span>
          </li>
          <li className="footer__item">
            <a href="/top#inquiry" className="footer__link">
              お問合せ
            </a>
          </li>
        </ul>

        <p className="pg text-center padding--small-bottom">
          株式会社伸明工業 <br />
          〒914-0131 福井県敦賀市公文名33-6-16
          <br />
          代表直通TEL　090－2126－3319
          <br />
          事務所TEL/FAX : 0770-21-2310
          <br />
          E-mail : sinmei.kougyou@gmail.com
          <br />
        </p>
        <div className="sns">
          <a href="https://www.instagram.com/sinmei_kougyou2020/">
            <img
              className="sns__logo--small-instagram"
              src={instagram}
              alt="instagram"
            />
          </a>
          <a href="#sss">
            <img className="sns__logo--small-line" src={line} alt="instagram" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
