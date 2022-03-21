import s from './CardTeam.module.sass'

type Props = {}

export default function CardSlider(props: Props) {
    return (
        <div className={s.contentCard}>
            <div className={s.border_im}>
                <div className={s.im_team}>
                    <img src="/assets/Roadmap/im_teamHung.png" alt="" />
                </div>
            </div>
            <div className={s.heading}>
                <h1>Name</h1>
                <p>RESERVE POSITION</p>
            </div>
        </div>
    )
}