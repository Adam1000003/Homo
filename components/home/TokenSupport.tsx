import Title from 'components/TitleSection'
import { useWindowSize } from 'hooks/useWindowSize';
import s from './TokenSupport.module.sass'


type Props = {}
export default function TokenSupport(props: Props) {
  const [width, height] = useWindowSize();

    return (
        <section className={`${s.container}`}>
                    <div className={`${s.bg_overlay} ${s.bg_overlay1}`}></div>
                    <div className={`${s.bg_overlay} ${s.bg_overlay2}`}></div>
            <div className={s.bg_container}>
                <div className={s.block_bg}>
                    <img src="/assets/tokenSupport/bg_tokenSp.png" alt="" />
                </div>
            </div>

            <div className='homo-container'>
                <div className={s.heading}>
                    <Title statusText={false} title='Who does Homo token support?' />
                    <p>HOMO token belongs, to those who right now are victims, are hurt by war. They are the people who were still living in Hoa Binh yesterday, today who have suffered ruins, devastated by war, lost their homes, lost income, lost loved ones, lost their homeland</p>
                    <a href="#">{`Read more >>>`}</a>
                </div>

                <div className={s.block_card}>
                    <div className={s._item}>
                        <img src="/assets/tokenSupport/im_war1.png" alt="" />
                        <p>Ukrainian refugees</p>
                    </div>
                    <div className={s._item}>
                        <img src="/assets/tokenSupport/im_war2.png" alt="" />
                        <p>People who lost their homes</p>
                    </div>
                    <div className={s._item}>
                        <img src="/assets/tokenSupport/im_war3.png" alt="" />
                        <p>People who lost their jobs,income</p>
                    </div>
                    <div className={s._item}>
                        <img src="/assets/tokenSupport/im_war4.png" alt="" />
                        <p>People who lost their family</p>
                    </div>
                </div>

                <div className={s.meaning}>
                    <div className={s.content_meaning}>
                        <div className={s.text_left}>
                            <Title statusText={true} title='The meaning of Home token for the people of Ukraine' />
                            <p>Support the people of Ukraine by supporting the HOMO token that each citizen has received the Airdrop</p>
                            <a href="">White paper</a>
                        </div>
                        <div>
                            {
                                width < 992 ?
                                <img src="/assets/banner/avt.png" alt="" />
                                : ''
                            }
                        </div>
                        {
                        width >= 992 ? 
                        <div className={s.avt}>
                            <img src="/assets/banner/avt.png" alt="" />
                        </div>
                        : ''
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}