import React from "react";
import instagram from "../assets/instagram.png";
import line from "../assets/line.png";

function Inquiry({ children }) {
  return (
    <>
      <div>
        <p className="pg text-center padding--small-bottom">{children}</p>
        <p className="pg text-center padding--small-bottom">
          代表直通TEL　090-2126-3319
          <br />
          事務所TEL/FAX　0770-21-2310
          <br />
          メールアドレス　sinmei.kougyou@gmail.com
          <br />
          受付時間　8:00～19:00 （日曜定休）
        </p>
        <p className="pg text-center padding--small-bottom">
          当社のインスタグラムのDM、LINEからも受付しています。
        </p>
        <div className="sns">
          <a href="https://www.instagram.com/sinmei_kougyou2020/">
            <img
              className="sns__logo--instagram"
              src={instagram}
              alt="instagram"
            />
          </a>
          <a href="https://lin.ee/8CVPenK">
            <img className="sns__logo--line" src={line} alt="line" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Inquiry;
