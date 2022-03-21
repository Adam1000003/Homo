import s from './CardItem.module.sass'

type Props = {
    title: string;
    text: string;
}

export default function CardItem(props: Props) {
    return (
        <div className={s.containerCard}>
            <div className={s.headingCard}>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    )
}