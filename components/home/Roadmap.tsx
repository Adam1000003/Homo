import SilderTeam from 'components/slider/SliderTeam'
import Title from 'components/TitleSection'
import s from './Roadmap.module.sass'

type Props = {}

export default function Roadmap(props: Props) {
    return (
        <section className={`${s.container_roadmap}`}>
            <div className={`${s.bg_overlay} ${s.bg_overlay1}`}></div>
            <div className={s.bg_container}>
                <div className={s.block_bg}>
                    <div className={`${s.bg_overlay} ${s.bg_overlay2}`}></div>
                    <img src="/assets/Roadmap/bg_roadmap.png" alt="" />
                </div>
            </div>
            <div className={`${s.heading_roadmap} homo-container`}>
                <Title statusText={false} title='ROADMAP' />
                <p>If you are a supporter of the Ukrainian people, war victims. Come and buy HOMO token now. Your act of buying tokens will help form the token value that Ukrainians have received the Airdrop</p>
            </div>

            <div className={s.content_roadmap}>
                <div className={s.block_container}>
                    <div className={`${s.block_roadmapTop} ${s.block_roadmap}`}>
                        <div className={s.item}>
                            <h1>24/2/2022</h1>
                            <p>Russia Attacks Ukraine</p>
                        </div>
                        <div className={s.item}>
                            <h1>February 28, 2022</h1>
                            <ul>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    Homosa SocialFi demo version build up
                                </li>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    Homo coin tokennomics design
                                </li>
                            </ul>
                        </div>
                        <div className={s.item}>
                            <h1>March 8, 2022</h1>
                            <p>Global marketing campaign master plan</p>
                        </div>
                        <div className={s.item}>
                            <h1>March 20, 2022</h1>
                            <ul>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    Homo coin Airdrop program launching
                                </li>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    Ukraine community support
                                </li>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    Ukraine Supporter community supporting
                                </li>
                            </ul>
                        </div>
                        <div className={s.item}>
                            <h1>April 15, 2022</h1>
                            <ul>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    USDT Staking Pool for HOMO coin hodlers launching
                                </li>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    HOMO coin CEX listing
                                </li>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    HOMO coin DEX listing
                                </li>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    Airdrop program on going
                                </li>
                            </ul>
                        </div>
                        <div className={s.item}>
                            <h1>10/5/2022</h1>
                            <ul>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    Homosa on-chain NTFs tool testing
                                </li>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    HOMO coin CEX listing
                                </li>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    HOMO coin DEX listing
                                </li>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    Airdrop program on going
                                </li>
                            </ul>
                        </div>
                        <div className={s.item}>
                            <h1>June 20, 2022</h1>
                            <ul>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    Homosa official alpha version launching
                                </li>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    HOMO coin CEX listing
                                </li>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    HOMO coin DEX listing
                                </li>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    Airdrop program on going
                                </li>
                            </ul>
                        </div>
                        <div className={s.item}>
                            <h1>Quater 4/ 2022</h1>
                            <ul>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    Third party DeFi integrations
                                </li>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    Homasa SocialFi 1 million accounts Milestone
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={s.vector}></div>
                    <div className={`${s.block_roadmapbottom} ${s.block_roadmap}`}>
                        <div className={s.item}>
                            <h1>February 27, 2022</h1>
                            <ul>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    The flow of Ukrainian refugees began to flood into Poland
                                </li>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    Homo token ideas
                                </li>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    Homosa SocialFi ideas
                                </li>
                            </ul>
                        </div>
                        <div className={s.item}>
                            <h1>March 1, 2022</h1>
                            <ul>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    Homo coin airdrop support Dashboard building up
                                </li>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    Homo coin public sales supporting Dashboard building up
                                </li>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    Homosa SocialFi ID management building up
                                </li>
                            </ul>
                        </div>
                        <div className={s.item}>
                            <h1>March 16, 2022</h1>
                            <ul>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    Homo coin deploy on BSC
                                </li>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    Airdrop, KYC platform integration
                                </li>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    IEO, IDO, ICO platform integration
                                </li>
                            </ul>
                        </div>
                        <div className={s.item}>
                            <h1>April 1, 2022 - April 10, 2022</h1>
                            <ul>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    Homo coin public sale launching on multi IEO, ICO, IDO platform
                                </li>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    Airdrop program on going
                                </li>
                            </ul>
                        </div>
                        <div className={s.item}>
                            <h1>April 30, 2022</h1>
                            <ul>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    Homosa SocialFi testing version launching
                                </li>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    HOMO coin CEX listing
                                </li>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    HOMO coin DEX listing
                                </li>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    Airdrop program on going
                                </li>
                            </ul>
                        </div>
                        <div className={s.item}>
                            <h1>May 20, 2022</h1>
                            <ul>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    Homosa NFTs market place testing
                                </li>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    HOMO coin CEX listing
                                </li>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    HOMO coin DEX listing
                                </li>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    Airdrop program on going
                                </li>
                            </ul>
                        </div>
                        <div className={s.item}>
                            <h1>Quater 3 / 2022</h1>
                            <ul>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    Homosa SocialFi official beta version
                                </li>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    HOMO coin CEX listing
                                </li>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    HOMO coin DEX listing
                                </li>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    Airdrop program on going
                                </li>
                            </ul>
                        </div>
                        <div className={s.item}>
                            <h1>2023</h1>
                            <ul>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    HOMO coin 5 millions wallets accounts milestone
                                </li>
                                <li>
                                    <img src="/assets/Homosa/ic_roadmap.svg" alt="" />
                                    Homosa SocialFi 3 million account milestone
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>




            <div className={`${s.container_Team} homo-container`}>
                <div className={s.heading_team}>
                    <Title statusText={false} title='OPEN TEAM' />
                    <p>If you are a supporter of the Ukrainian people, war victims. Come and buy HOMO token now. Your act of buying tokens will help form the token value that Ukrainians have received the Airdrop</p>
                    <a href="#">Join team now</a>
                </div>

                <SilderTeam />
            </div>

        </section>
    )
}