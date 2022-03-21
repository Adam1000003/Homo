import Link from "next/link";

import s from "./Footer.module.sass";

type Props = {};
export default function Header(props: Props) {
  return (
    <section className={`${s.containerFooter}`}>
      <div className={`homo-container ${s.content}`}>
        <div>
          <img src="/assets/Banner/avt.png" alt="" />
        </div>

        <div className={s.content_right}>
          <div className={s.group_Link}>
            <div className={s.block_link}>
              <ul>
                <li><a href="#">Text1</a></li>
                <li><a href="#">Text2</a></li>
                <li><a href="#">Text3</a></li>
              </ul>
            </div>
            <div className={s.block_link}>
              <ul>
                <li><a href="#">Text1</a></li>
                <li><a href="#">Text2</a></li>
                <li><a href="#">Text3</a></li>
              </ul>
            </div>
            <div className={s.block_link}>
              <ul>
                <li><a href="#">Text1</a></li>
                <li><a href="#">Text2</a></li>
                <li><a href="#">Text3</a></li>
              </ul>
            </div>
          </div>
          <div className={s.formLink}>
            <input type="text" placeholder="Email" className={s.inputText} />
            <button>Subscribe now</button>
            <div className={s.group_SocialNetwork}>
              <a href="#"><img src="/assets/footer/tiktok.svg" alt="" /></a>
              <a href="#"><img src="/assets/footer/fb.svg" alt="" /></a>
              <a href="#"><img src="/assets/footer/ytb.svg" alt="" /></a>
              <a href="#"><img src="/assets/footer/tele.svg" alt="" /></a>
              <a href="#"><img src="/assets/footer/tw.svg" alt="" /></a>
              <a href="#"><img src="/assets/footer/dis.svg" alt="" /></a>
            </div>
          </div>
        </div>
      </div>



      <div className={s.end}>
        @2022, HOMO
      </div>
    </section>
  );
}
