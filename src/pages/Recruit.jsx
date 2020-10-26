import React from "react";
import GreyBox from "../components/GreyBox";
import Inquiry from "../components/Inquiry";

function Recruit() {
  return (
    <>
      <section className="recruit padding--small-top">
        <h2 className="heading-secondary--border">求人情報</h2>

        <GreyBox title="勤務地">
          会社集合後、確現場により異なる（直行直帰可能）
        </GreyBox>
        <GreyBox title="勤務時間">8時〜17時（残業の場合有り）</GreyBox>
        <GreyBox title="休日">
          日曜 GW お盆
          年末年始（勤務地により変動あり）代休あり。※応相談いたします
        </GreyBox>
        <GreyBox title="待遇">
          昇給：個人の能力、実績により　資格：取得支援制度あり
        </GreyBox>
        <GreyBox title="福利厚生">
          社会保険　労災保険　労災上乗せ　雇用保険完備
        </GreyBox>
        <GreyBox title="給与">
          日給10000円～18000円（経験、能力によるが未経験でもやる気考慮いたします）
        </GreyBox>
        <GreyBox title="諸手当">
          作業着支給、道具一式支給、時間外手当、出張手当
        </GreyBox>
      </section>
      <section className="recruit">
        <h2 className="heading-secondary--border">採用メッセージ</h2>
        <p className="pg text-center text-left--phone">
          株式会社伸明工業では、一緒に働く仲間を募集しております。
          <br />
          職人になりたい方、技術を磨きたい方、
          <br />
          他業界からの転職や未経験の方も丁寧に指導し、
          <br />
          当社での資格取得等スキルアップを目指すことが可能です。
          <br />
          学歴や経験は一切問いません。
          <br />
          もちろん業界経験者の方は優遇いたします。
          <br />
          どなたでもすぐに活躍可能ですので先ずはご連絡お待ちしております。
        </p>
      </section>

      <section className="recruit">
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

export default Recruit;
