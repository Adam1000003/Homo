import { useState } from 'react'
import s from './MenuMobile.module.sass'

type Props = {}

export default function MenuMobile(props: Props) {
    const [getShowMenu, setShowMenu] = useState(false)
    const statusMenu = !getShowMenu? s.show: s.isShow
    const statusOverlay = !getShowMenu? s.isOverlay: s.overlay

    function showMenu() {
        setShowMenu(true)
    }
    function handleMenu() {
        setShowMenu(false)
    }
    return (
        <div className={s.contentMenu}>
            <div className={`${s.bg_layer} ${statusOverlay}`} onClick={handleMenu}></div>
            <div className={`${s.contentDetail} homo-container`}>
                <div className={s.logo}>
                    <img src="/assets/banner/logo.png" alt="" />
                    <p>HOMO</p>
                </div>

                <nav>
                    <ul className={statusMenu}> 
                        <li className={s.ic_close} onClick={handleMenu}><img src="/assets/banner/ic_close.svg" alt="" /></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Motivation</a></li>
                        <li><a href="#">For who?</a></li>
                        <li><a href="#">Support victim</a></li>
                        <li><a href="#">Ways?</a></li>
                        <li><a href="#">Homosa</a></li>
                        <li><a href="#">Tokennomics</a></li>
                        <li><a href="#">Roadmap</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="" className={s.btn_wp}>White paper</a></li>
                    </ul>
                </nav>


                <div className={s.icon_Bar} onClick={showMenu}>
                    <img src="/assets/banner/ic_bar.svg" alt="" />
                </div>
            </div>
        </div>
    )
}