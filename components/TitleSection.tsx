import s from './TitleSection.module.sass'


type Props = {
    title: string;
    statusText: boolean;
}

export default function Title (props: Props) {
    const styleText = props.statusText? s.yellow: s.white
    return (
        <h1 className={`${s.text} ${styleText}`}>{props.title}</h1>
    )
}