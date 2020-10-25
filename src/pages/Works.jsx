import React from "react";
import WorksSlider from "../components/WorksSlider";
import Inquiry from "../components/Inquiry";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Works extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <>
        <section className="works padding--small-top">
          <h2 className="heading-secondary--border">実績</h2>
          <Slider {...settings} className="works-slider__box">
            <WorksSlider photoNumber="--1">芝浦三丁目ホテル</WorksSlider>
            <WorksSlider photoNumber="--2">東海市ルートイン</WorksSlider>
            <WorksSlider photoNumber="--3">敦賀市市営駐車場</WorksSlider>
            <WorksSlider photoNumber="--4">敦賀市配管屋工場</WorksSlider>
            <WorksSlider photoNumber="--5">福井県敦賀市倉庫</WorksSlider>
            <WorksSlider photoNumber="--6">飛騨高山ホテル</WorksSlider>
          </Slider>
        </section>
        <section className="about">
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
}
