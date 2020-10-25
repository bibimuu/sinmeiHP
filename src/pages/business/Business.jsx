import React from "react";
import { useLocation } from "react-router-dom";
import { businessPages } from "./businessPages";

import BusinessPhoto from "../../components/BusinessPhoto";
import Inquiry from "../../components/Inquiry";
import floorPic1 from "../../assets/床板.jpg";
import floorPic2 from "../../assets/床板2.jpg";
import steelPic1 from "../../assets/鉄骨１.jpg";
import steelPic2 from "../../assets/鉄骨２.jpg";
import blacksmithPic1 from "../../assets/鍛冶3.jpg";
import blacksmithPic2 from "../../assets/鍛冶５.jpg";
import factoryPic1 from "../../assets/工場製作work.jpg";
import factoryPic2 from "../../assets/工場製作４.jpg";
import anchorPic1 from "../../assets/アンカーフレーム1.jpg";
import anchorPic2 from "../../assets/アンカーフレーム2.jpg";
import drawingPic1 from "../../assets/図面作成1.jpg";
import drawingPic2 from "../../assets/図面作成2.jpg";
import traineePic1 from "../../assets/海外研修生1.jpg";
import traineePic2 from "../../assets/海外研修生2.jpg";

const Business = () => {
  const location = useLocation();

  if (businessPages.floor === location.pathname) {
    return (
      <>
        <section className="business padding--small-top">
          <div className="border">
            <h2 className="heading-secondary heading-secondary--no-padding-bottom">
              床版工事
            </h2>
            <a className="link" href="/top#work-photo">
              <p className="pg pg__change-button">ほかの事業を見る</p>
            </a>
          </div>
          <BusinessPhoto photo1={floorPic1} photo2={floorPic2} />
        </section>
        <section className="business">
          <h2 className="heading-secondary--border">お問合せ</h2>
          <Inquiry>
            お仕事のご依頼、求人お問い合わせは下記よりお願い致します。
            <br />
            なお、ご急ぎの方はお電話でお問い合わせくださいますようお願いいたします。
          </Inquiry>
        </section>
      </>
    );
  }
  if (businessPages.steel === location.pathname) {
    return (
      <>
        <section className="business padding--small-top">
          <div className="border">
            <h2 className="heading-secondary heading-secondary--no-padding-bottom">
              鉄骨工事
            </h2>
            <a className="link" href="/top#work-photo">
              <p className="pg pg__change-button">ほかの事業を見る</p>
            </a>
          </div>
          <BusinessPhoto photo1={steelPic1} photo2={steelPic2} />
        </section>
        <section className="business">
          <h2 className="heading-secondary--border">お問合せ</h2>
          <Inquiry>
            お仕事のご依頼、求人お問い合わせは下記よりお願い致します。
            <br />
            なお、ご急ぎの方はお電話でお問い合わせくださいますようお願いいたします。
          </Inquiry>
        </section>
      </>
    );
  }
  if (businessPages.blacksmith === location.pathname) {
    return (
      <>
        <section className="business padding--small-top">
          <div className="border">
            <h2 className="heading-secondary heading-secondary--no-padding-bottom">
              鍛冶工事/金物工事
            </h2>
            <a className="link" href="/top#work-photo">
              <p className="pg pg__change-button">ほかの事業を見る</p>
            </a>
          </div>

          <BusinessPhoto photo1={blacksmithPic1} photo2={blacksmithPic2} />
        </section>
        <section className="business">
          <h2 className="heading-secondary--border">お問合せ</h2>
          <Inquiry>
            お仕事のご依頼、求人お問い合わせは下記よりお願い致します。
            <br />
            なお、ご急ぎの方はお電話でお問い合わせくださいますようお願いいたします。
          </Inquiry>
        </section>
      </>
    );
  }
  if (businessPages.factory === location.pathname) {
    return (
      <>
        <section className="business padding--small-top">
          <div className="border">
            <h2 className="heading-secondary heading-secondary--no-padding-bottom">
              工場製作/金物製作
            </h2>
            <a className="link" href="/top#work-photo">
              <p className="pg pg__change-button">ほかの事業を見る</p>
            </a>
          </div>
          <BusinessPhoto photo1={factoryPic1} photo2={factoryPic2} />
        </section>
        <section className="business">
          <h2 className="heading-secondary--border">お問合せ</h2>
          <Inquiry>
            お仕事のご依頼、求人お問い合わせは下記よりお願い致します。
            <br />
            なお、ご急ぎの方はお電話でお問い合わせくださいますようお願いいたします。
          </Inquiry>
        </section>
      </>
    );
  }
  if (businessPages.anchor === location.pathname) {
    return (
      <>
        <section className="business padding--small-top">
          <div className="border">
            <h2 className="heading-secondary heading-secondary--no-padding-bottom">
              アンカーフレーム/柱脚工事
            </h2>
            <a className="link" href="/top#work-photo">
              <p className="pg pg__change-button">ほかの事業を見る</p>
            </a>
          </div>
          <BusinessPhoto photo1={anchorPic1} photo2={anchorPic2} />
        </section>
        <section className="business">
          <h2 className="heading-secondary--border">お問合せ</h2>
          <Inquiry>
            お仕事のご依頼、求人お問い合わせは下記よりお願い致します。
            <br />
            なお、ご急ぎの方はお電話でお問い合わせくださいますようお願いいたします。
          </Inquiry>
        </section>
      </>
    );
  }
  if (businessPages.drawing === location.pathname) {
    return (
      <>
        <section className="business padding--small-top">
          <div className="border">
            <h2 className="heading-secondary heading-secondary--no-padding-bottom">
              図面作成
            </h2>
            <a className="link" href="/top#work-photo">
              <p className="pg pg__change-button">ほかの事業を見る</p>
            </a>
          </div>
          <BusinessPhoto photo1={drawingPic1} photo2={drawingPic2} />
        </section>
        <section className="business">
          <h2 className="heading-secondary--border">お問合せ</h2>
          <Inquiry>
            お仕事のご依頼、求人お問い合わせは下記よりお願い致します。
            <br />
            なお、ご急ぎの方はお電話でお問い合わせくださいますようお願いいたします。
          </Inquiry>
        </section>
      </>
    );
  }
  if (businessPages.trainee === location.pathname) {
    return (
      <>
        <section className="business padding--small-top">
          <div className="border">
            <h2 className="heading-secondary heading-secondary--no-padding-bottom">
              海外研修生
            </h2>
            <a className="link" href="/top#work-photo">
              <p className="pg pg__change-button">ほかの事業を見る</p>
            </a>
          </div>
          <BusinessPhoto photo1={traineePic1} photo2={traineePic2} />
        </section>
        <section className="business">
          <h2 className="heading-secondary--border">お問合せ</h2>
          <Inquiry>
            お仕事のご依頼、求人お問い合わせは下記よりお願い致します。
            <br />
            なお、ご急ぎの方はお電話でお問い合わせくださいますようお願いいたします。
          </Inquiry>
        </section>
      </>
    );
  }
  throw new Error("unexpected url");
};

export default Business;
