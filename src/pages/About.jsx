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
          技術職2名、ベトナム実習生2名、事務員1名
        </GreyBox>
        <GreyBox title="対応地域">
          主に福井県内ですが、隣県や東海地方の仕事も多いです。
        </GreyBox>
      </section>
      <section className="about">
        <h2 className="heading-secondary--border">代表メッセージ</h2>
        <p className="pg text-center text-left--phone">
          株式会社伸明工業は、福井県を拠点に、図面作成から製作、現場施工までを一貫して請け負う建設会社です。
          <br />
          鉄骨建方や床版工事にも対応しており、ご要望があれば全国どこへでも伺います。
          <br />
          また、金物製作も得意としており、高品質な製品を提供しています。
          <br />
          お客様のニーズに的確にお応えするため、安全・迅速・丁寧な仕事を第一に考え、日々努力を重ねております。
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
