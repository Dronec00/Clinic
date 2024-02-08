import './header.css'
import logo from '../../assets/img/logo.svg'
import icon from '../../assets/img/placeholder.svg'
import whatsapp from '../../assets/img/whatsapp.svg'
import HeaderMobile from './HeaderMobile'
import { useContext } from 'react'
import {Context} from '../Context'
import {ItemType} from '../types/types'

export default function Header() {
    const {formActive, items} = useContext(Context)

    return <div className="site-header">
            <div className="header-top">
                <div className="container">
                    <HeaderMobile />
                    <div className="header-top-left">
                        <a href="/#">
                        <img src={logo} alt="Logo" />
                        </a>
                        <div className="adress">
                            <img src={icon} alt="ул. Ленина, 2Б Ростов-на-Дону" />
                            <div className="adress-info">
                                <span>Ростов-на-Дону</span>
                                <span>ул. Ленина, 2Б</span>
                            </div>
                        </div>
                    </div>
                    <div className="header-top-right">
                        <img src={whatsapp} alt="Whatsapp" />
                        <a href="tel: +7(863) 000 00 00">
                            <span>+7(863) 000 00 00</span>
                        </a>
                        <button className="button-form" onClick={formActive}>
                            <a href="/#">Записаться на прием</a> 
                        </button>
                    </div>
                    
                </div>

            </div>

            <div className="header-bottom">
                <div className="header-bottom-container">
                    <nav className="header-bottom-container-header_nav">
                        <ul>
                            {items.map((item: ItemType, idx: number) => {
                                return <li key={idx}> <a href={item.href}>{item.value}</a></li>
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
    </div>
}
