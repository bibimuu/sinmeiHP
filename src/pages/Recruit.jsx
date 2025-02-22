import React from "react";
import GreyBox from "../components/GreyBox";
import Inquiry from "../components/Inquiry";

function Recruit() {
  return (
    <>
      <section className="recruit padding--small-top">
        <h2 className="heading-secondary--border">求人情報</h2>

        <GreyBox title="勤務地">
          敦賀市内工場 又は現場
        </GreyBox>
        <GreyBox title="勤務時間">8時〜17時</GreyBox>
        <GreyBox title="休日">
          日曜 GW お盆
          年末年始
        </GreyBox>
        <GreyBox title="待遇">
          入社して6ヶ月経過後有給あり<br/>
          資格取得支援制度あり<br/>
        </GreyBox>
        <GreyBox title="福利厚生">
          社会保険　厚生年金　労災保険　労災上乗せ　雇用保険完備
        </GreyBox>
        <GreyBox title="給与">
          26万円〜39万円＋各種手当(例:「入社3年目:326000＋賞与」)<br/>
          昇給賞与あり(業績による)<br/>
          手当: 資格手当　通勤手当　役職手当　出張手当　<br/>試用期間1ヶ月　
        </GreyBox>
        <GreyBox title="諸手当">
          休日出勤手当、時間外手当、出張手当等
        </GreyBox>
      </section>
      <section className="recruit">
        <h2 className="heading-secondary--border">採用メッセージ</h2>
        <p className="pg text-center text-left--phone">
        株式会社伸明工業では、一緒に働く仲間を募集しています。
          <br />
          ・職人になりたい方、技術を磨きたい方
          <br />
          ・異業種からの転職や未経験の方
          <br />
          どなたでも安心してスタートできるよう、丁寧に指導いたします。また、資格取得支援も充実しており、スキルアップを目指せる環境です。
          <br />
          学歴・経験は一切不問。業界経験者は優遇いたしますが、未経験の方も大歓迎です。
          <br />
          ※業務上、普通自動車運転免許（MT推奨）が必須です。
          <br />
          どなたでもすぐに活躍できる環境を整えておりますので、興味のある方はぜひお気軽にご連絡ください！
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
