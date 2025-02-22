import React from "react";
import WorkPhoto from "../components/WorkPhoto";
import Inquiry from "../components/Inquiry";
import Header from "../components/Header";

function Top() {
  return (
    <>
      <main>
        <Header />
        <section className="message">
          <h2 className="heading-secondary heading-secondary--white text-center">
            代表メッセージ
          </h2>
          <p className="pg pg--white text-left--phone text-center padding--large-bottom">
            株式会社伸明工業は、福井県を拠点に、図面作成から製作、現場施工までを一貫して請け負う建設会社です。
            <br />
            鉄骨建方や床版工事にも対応しており、ご要望があれば全国どこへでも伺います。
            <br />
            また、金物製作も得意としており、高品質な製品を提供しています。
            <br />
            お客様のニーズに的確にお応えするため、安全・迅速・丁寧な仕事を第一に考え、日々努力を重ねております。
          </p>
        </section>
        <section>
          <h2 className="heading-secondary text-center" id="work-photo">
            事業紹介
          </h2>
          <div className="row">
            <div className="col-1-of-4">
              <WorkPhoto photoNumber="--1" name="floor">
                床版工事
              </WorkPhoto>
            </div>
            <div className="col-1-of-4">
              <WorkPhoto photoNumber="--2" name="steel">
                鉄骨工事
              </WorkPhoto>
            </div>
            <div className="col-1-of-4">
              <WorkPhoto photoNumber="--3" name="blacksmith">
                鍛冶工事
                <br />
                金物工事
              </WorkPhoto>
            </div>
            <div className="col-1-of-4">
              <WorkPhoto photoNumber="--4" name="factory">
                工場製作
                <br />
                金物製作
              </WorkPhoto>
            </div>
          </div>
          <div className="row">
            <div className="col-1-of-4">
              <WorkPhoto photoNumber="--5" name="anchor">
                アンカーフレーム
                <br />
                柱脚工事
              </WorkPhoto>
            </div>
            <div className="col-1-of-4">
              <WorkPhoto photoNumber="--6" name="drawing">
                図面作成
              </WorkPhoto>
            </div>
            <div className="col-1-of-4">
              <WorkPhoto photoNumber="--7" name="trainee">
                海外研修生
              </WorkPhoto>
            </div>
            <div className="col-1-of-4">
              <a href="#" className="work-photo__link disabled">
                <div className="work-photo work-photo--8">
                  <div className="work-photo--bg-black work-photo__flex--center"></div>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section>
          <h2 className="heading-secondary text-center" id="inquiry">
            お問合せ
          </h2>
          <Inquiry>
            お仕事のご依頼、求人お問い合わせは下記よりお願い致します。
            <br />
            なお、ご急ぎの方はお電話でお問い合わせくださいますようお願いいたします。
          </Inquiry>
        </section>
      </main>
    </>
  );
}

export default Top;
