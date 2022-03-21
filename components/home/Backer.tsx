import s from './Backer.module.sass'


import Title from 'components/TitleSection'
import SilderBacker from 'components/slider/SliderBacker'

type Props = {}

export default function Backer(props: Props) {
    return (
        <section>
            <div className={`${s.container_Backer} homo-container`}>
                <div className={s.heading_backer}>
                    <Title statusText={false} title='Backers' />
                    <p>If you are a supporter of the Ukrainian people, war victims. Come and buy HOMO token now. Your act of buying tokens will help form the token value that Ukrainians have received the Airdrop</p>
                    <a href="#">Join team now</a>
                </div>

                <SilderBacker />
            </div>

        </section>
    )
}