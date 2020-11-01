import React from "react";
import GreyBox from "../components/GreyBox";
import Inquiry from "../components/Inquiry";

function About() {
  return (
    <>
      <section className="about  padding--small-top">
        <h2 className="heading-secondary--border">会社概要</h2>
        <GreyBox title="会社名">株式会社伸明工業</GreyBox>
        <GreyBox title="代表者">平松亜紀夫</GreyBox>
        <GreyBox title="場所">〒914-0131 福井県敦賀市公文名33-6-16</GreyBox>
        <GreyBox title="TEL/FAX">0770-21-2310</GreyBox>
        <GreyBox title="Email">sinmei.kougyou@gmail.com</GreyBox>
        <GreyBox title="創業">個人事業 1997年　法人 2016年</GreyBox>
        <GreyBox title="社員数">
          技術職5名、ベトナム実習生2名、事務員1名、協力会社約10社
        </GreyBox>
        <GreyBox title="対応地域">
          福井県を中心に活動するデッキ屋（建設会社）です。北陸、東海地方、またお客様のご依頼があれば全国どこへでも行かせていただきます。
        </GreyBox>
      </section>
      <section className="about">
        <h2 className="heading-secondary--border">代表メッセージ</h2>
        <p className="pg text-center text-left--phone">
          株式会社伸明工業は、建設現場における鉄骨建方や床版工事などを主にしている福井県のデッキ屋（建設会社）です。
          <br />
          ホテルやマンション、店舗やショッピングモールなど、建物施工を請け負っております。
          <br />
          中でも鉄骨建方、床版工事、鍛冶工事などを主な業務としております。
          <br />
          また、最近では金物製作など工場作業、現場寸法取りからの図面製作も承っております。
          <br />
          当社ではお客様のニーズにお応えすべく、
          <br />
          一つ一つの仕事を安全、速やか、丁寧に行うことを第一にしております。
          <br />
        </p>
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

export default About;
