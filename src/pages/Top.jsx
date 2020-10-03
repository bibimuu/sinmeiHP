import React from "react";
import WorkPhoto from "../components/WorkPhoto";

function Top() {
  return (
    <>
      <main>
        <section className="message">
          <h2 className="heading-secondary heading-secondary--white text-center">
            代表メッセージ
          </h2>
          <p className="pg pg--white text-center padding--bottom">
            株式会社伸明工業は、建設現場における鉄骨建方や床版工事などを主にしている会社です。
            <br />
            ホテルやマンション、店舗やショッピングモールなど建物施工を請け負っております。
            <br />
            中でも床版工事、鍛冶工事などが主な業務になります。
            <br />
            また、最近では金物製作など工場作業、現場寸法取りからの図面製作も承っております。
            <br />
            当社ではお客様のニーズにお応えすべく、
            <br />
            一つ一つの仕事を安全、速やか、丁寧に行うことを第一にしております。
            <br />
          </p>
        </section>
        <section>
          <h2 className="heading-secondary text-center">事業紹介</h2>
          <div className="row">
            <div className="col-1-of-4">
              <WorkPhoto photoNumber="--1">床版工事</WorkPhoto>
            </div>
            <div className="col-1-of-4">
              <WorkPhoto photoNumber="--2">鉄骨工事</WorkPhoto>
            </div>
            <div className="col-1-of-4">
              <WorkPhoto photoNumber="--3">
                鍛冶工事
                <br />
                金物工事
              </WorkPhoto>
            </div>
            <div className="col-1-of-4">
              <WorkPhoto photoNumber="--4">
                工場製作
                <br />
                金物製作
              </WorkPhoto>
            </div>
          </div>
          <div className="row row__last">
            <div className="col-1-of-4">
              <WorkPhoto photoNumber="--5">
                アンカーフレーム
                <br />
                柱脚工事
              </WorkPhoto>
            </div>
            <div className="col-1-of-4">
              <WorkPhoto photoNumber="--6">図面作成</WorkPhoto>
            </div>
            <div className="col-1-of-4">
              <WorkPhoto photoNumber="--7">海外研修生</WorkPhoto>
            </div>
            <div className="col-1-of-4">
              <WorkPhoto photoNumber="--8"></WorkPhoto>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Top;
