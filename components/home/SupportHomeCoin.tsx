import CardItem from 'components/Card/CardItem'
import Title from 'components/TitleSection'
import s from './SupportHomeCoin.module.sass'

type Props = {}

const listCard = [
    {
        title: 'Homo token airdrop',
        text: ' ',
    },
    {
        title: 'Homo token airdrop',
        text: 'By accepting HOMO transactions in DAPP applications, you are empowering the value of HOMO already in the hands of the Ukrainian people',
    },
    {
        title: 'Homo token airdrop',
        text: "By supporting the listing of HOMO on the world's leading centralized cryptocurrency exchanges, you are helping to popularize the HOMO that is already in the wallets of Ukrainians",
    },
    {
        title: 'Homo token airdrop',
        text: 'By building derivative investment service packages around HOMO, derivatives exchanges such as Binance, FTX, Bybit, Bitmex, have supported Ukraine HOMO Hodlers',
    },
    {
        title: 'Homo token airdrop',
        text: "By Adding Liquidity to HOMO's liquidity pairs on decentralized cryptocurrency exchanges, you are making HOMO's liquidity nolimit. The people of Ukraine will be warmed",
    },
    {
        title: 'Homo token airdrop',
        text: "By building DeFi services around HOMO, you are increasing the Use Cases for it, and that's how to support 50 million Ukrainians",
    },
]

export default function SupportHomeCoin(props: Props) {
    return (
        <section className='homo-container'>
            <div className={s.heading}>
                <Title statusText={false} title='Ways to support Homo coin' />
                <p>If you are a supporter of the Ukrainian people, war victims. Come and buy HOMO token now. Your act of buying tokens will help form the token value that Ukrainians have received the Airdrop</p>
            </div>

            <div className={s.blockCard}>
                <CardItem text='By participating in HOMO Public Sales, you have activated the value of the HOMO token that Ukrainians received the Airdrop. At the same time, you also help build HOMOSA, a means of making a living right now for war victims' title='Homo token airdrop' />
                <CardItem text='By accepting HOMO transactions in DAPP applications, you are empowering the value of HOMO already in the hands of the Ukrainian people' title='Homo token airdrop' />
                <CardItem text="By supporting the listing of HOMO on the world's leading centralized cryptocurrency exchanges, you are helping to popularize the HOMO that is already in the wallets of Ukrainians" title='Homo token airdrop' />
                <CardItem text='By building derivative investment service packages around HOMO, derivatives exchanges such as Binance, FTX, Bybit, Bitmex, have supported Ukraine HOMO Hodlers' title='Homo token airdrop' />
                <CardItem text="By Adding Liquidity to HOMO's liquidity pairs on decentralized cryptocurrency exchanges, you are making HOMO's liquidity nolimit. The people of Ukraine will be warmed" title='Homo token airdrop' />
                <CardItem text="By building DeFi services around HOMO, you are increasing the Use Cases for it, and that's how to support 50 million Ukrainians" title='Homo token airdrop' />
            </div>
        </section>
    )
}