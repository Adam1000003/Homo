import { useWindowSize } from 'hooks/useWindowSize';
import s from './Header.module.sass'
import MenuMobile from './home/menu/menuMobile';

type Props = {
  handleMenuOpen: Function,
};
export default function Header(props: Props) {
  const [width, height] = useWindowSize();

  return (
    <section className={`${s.container}`}>
      <div className={s.bg_banner}></div>

      {
        width > 1280 ? 
        <div className={`${s.contentMenu} homo-container`}>
          <div className={`${s.contentDetail}`}>
            <div className={s.logo}>
              <img src="/assets/banner/logo.png" alt="" />
              <p>HOMO</p>
            </div>

            <nav>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Motivation</a></li>
                <li><a href="#">For who?</a></li>
                <li><a href="#">Support victim</a></li>
                <li><a href="#">Ways?</a></li>
                <li><a href="#">Homosa</a></li>
                <li><a href="#">Tokennomics</a></li>
                <li><a href="#">Roadmap</a></li>
                <li><a href="#">Team</a></li>
              </ul>
            </nav>

            <a href="" className={s.btn_wp}>White paper</a>
          </div>
        </div>
        : <MenuMobile />
      }
      <div className={`${s.title} homo-container`}>
        <p>HOMO</p>
        <span>World War 3 never comes</span>
      </div>
      <div className={`${s.blockAvt} homo-container`}>
        <div className={`${s.content_vector} ${s.vector_left}`}>
          <img src="/assets/banner/vector_left.svg" alt="" />
          <div className={`${s.text} ${s.text_left}`}>
            <p>Homo coin airdrop</p>
            <a href="">Join now</a>
          </div>
        </div>
        <div className={s.avt}><img src="/assets/banner/avt.png" alt="" /></div>
        <div className={s.content_vector}>
          <img src="/assets/banner/vector_right.svg" alt="" />
          <div className={`${s.text} ${s.text_right}`}>
            <p>Homo coin airdrop</p>
            <a href="">Join now</a>
          </div>
        </div>
      </div>
    </section>
  );
}
