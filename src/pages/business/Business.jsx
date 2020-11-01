import React from "react";
import { useLocation } from "react-router-dom";
import { businessPages } from "./businessPages";
import WorksSlider from "../../components/WorksSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BusinessPhoto from "../../components/BusinessPhoto";
import Inquiry from "../../components/Inquiry";

const Business = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
          <Slider {...settings} className="works-slider__box">
            <WorksSlider photoNumber="--floor1"></WorksSlider>
            <WorksSlider photoNumber="--floor2"></WorksSlider>
            <WorksSlider photoNumber="--floor3"></WorksSlider>
            <WorksSlider photoNumber="--floor4"></WorksSlider>
            <WorksSlider photoNumber="--floor5"></WorksSlider>
            <WorksSlider photoNumber="--floor6"></WorksSlider>
            <WorksSlider photoNumber="--floor7"></WorksSlider>
          </Slider>
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
          <Slider {...settings} className="works-slider__box">
            <WorksSlider photoNumber="--steel1"></WorksSlider>
            <WorksSlider photoNumber="--steel2"></WorksSlider>
            <WorksSlider photoNumber="--steel3"></WorksSlider>
            <WorksSlider photoNumber="--steel4"></WorksSlider>
            <WorksSlider photoNumber="--steel5"></WorksSlider>
            <WorksSlider photoNumber="--steel6"></WorksSlider>
            <WorksSlider photoNumber="--steel7"></WorksSlider>
          </Slider>
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
          <Slider {...settings} className="works-slider__box">
            <WorksSlider photoNumber="--blacksmith1"></WorksSlider>
            <WorksSlider photoNumber="--blacksmith2"></WorksSlider>
            <WorksSlider photoNumber="--blacksmith3"></WorksSlider>
            <WorksSlider photoNumber="--blacksmith4"></WorksSlider>
            <WorksSlider photoNumber="--blacksmith5"></WorksSlider>
            <WorksSlider photoNumber="--blacksmith6"></WorksSlider>
            <WorksSlider photoNumber="--blacksmith7"></WorksSlider>
          </Slider>
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
          <Slider {...settings} className="works-slider__box">
            <WorksSlider photoNumber="--factory1"></WorksSlider>
            <WorksSlider photoNumber="--factory2"></WorksSlider>
            <WorksSlider photoNumber="--factory3"></WorksSlider>
            <WorksSlider photoNumber="--factory4"></WorksSlider>
            <WorksSlider photoNumber="--factory5"></WorksSlider>
            <WorksSlider photoNumber="--factory6"></WorksSlider>
            <WorksSlider photoNumber="--factory7"></WorksSlider>
          </Slider>
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
          <Slider {...settings} className="works-slider__box">
            <WorksSlider photoNumber="--anchor1"></WorksSlider>
            <WorksSlider photoNumber="--anchor2"></WorksSlider>
            <WorksSlider photoNumber="--anchor3"></WorksSlider>
            <WorksSlider photoNumber="--anchor4"></WorksSlider>
            <WorksSlider photoNumber="--anchor5"></WorksSlider>
          </Slider>
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
          <Slider {...settings} className="works-slider__box">
            <WorksSlider photoNumber="--drawing1"></WorksSlider>
            <WorksSlider photoNumber="--drawing2"></WorksSlider>
            <WorksSlider photoNumber="--drawing3"></WorksSlider>
            <WorksSlider photoNumber="--drawing4"></WorksSlider>
            <WorksSlider photoNumber="--drawing5"></WorksSlider>
            <WorksSlider photoNumber="--drawing6"></WorksSlider>
            <WorksSlider photoNumber="--drawing7"></WorksSlider>
          </Slider>
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
          <Slider {...settings} className="works-slider__box">
            <WorksSlider photoNumber="--trainee3"></WorksSlider>
            <WorksSlider photoNumber="--trainee2"></WorksSlider>
            <WorksSlider photoNumber="--trainee7"></WorksSlider>
            <WorksSlider photoNumber="--trainee4"></WorksSlider>
            <WorksSlider photoNumber="--trainee5"></WorksSlider>
            <WorksSlider photoNumber="--trainee6"></WorksSlider>
            <WorksSlider photoNumber="--trainee1"></WorksSlider>
          </Slider>
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
