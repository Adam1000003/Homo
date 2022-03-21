import Title from 'components/TitleSection'
import s from './TokenBorn.module.sass'

type Props = {
}

export default function TokenBorn (props: Props) {
    return(
        <section className={`${s.container} homo-container`}>
            <img className={s.bg_tb} src="/assets/TokenBorn/im_tb.png" alt="" />
            <div className={s.heading}>
                <Title title='Why was Homo token born?' statusText={true} />
                <p>HOMO is a cryptocurrency born in the context of planet earth erupting in the most intense geopolitical conflict in 80 years since World War 2. Using the HOMO token is a way to awaken us as a species of Homosapience, but we are destroying each other, it is necessary to reverse this survival situation.</p>
                <a href="#">{`Read more >>>`}</a>
            </div>
            <img src="/assets/TokenBorn/im_war.png" alt="" />
        </section>
    )
}