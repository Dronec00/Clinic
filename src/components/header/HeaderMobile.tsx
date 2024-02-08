import './header_mobile.css'
import logo from '../../assets/img/logo.svg'
import { useState, useContext, useMemo, useEffect } from 'react'
import {Context} from '../Context'
import {ItemType} from '../types/types'

const HeaderMobile : React.FC<any> = () => {
    const [active, setActive] = useState<boolean>(false);
    const {formActive, formState ,items} = useContext(Context);

    const menuMobile = useMemo(() => {
        return items.map((item: ItemType, idx: number) => {
            if(idx === 0) {
                return <li key={2131} className="menu-top_li"><a href={item.href}> {item.value} </a></li>
            }
            else {
                return <li key={idx + 2131}> <a href={item.href}> {item.value} </a> </li>
            }
        })
    }, [])
    const signup = useMemo(() => {
        return  <button className="button-form" onClick={formActive}>
                    <a href="/#">Записаться на прием</a> 
                </button>
    },[])
    return <>
            
        <nav className="navbar">
            <ul className="nav-links">
                <div className="hamburger" onClick={()=>{setActive(!active)}}>
                    <div className={ active? "line_hamburger top active" : "line_hamburger top"}></div>
                    <div className={ active? "line_hamburger middle active" : "line_hamburger middle"}></div>
                    <div className={ active? "line_hamburger bottom active" : "line_hamburger bottom"}></div>
                </div>
                <div className={ active? "menu active" : "menu"}>
                    {!formState && menuMobile}
                    {!formState && signup}
                </div>
            </ul>
            <a href="/#">
                <img src={logo} alt="Logo" />
            </a>
        </nav>

        <div className="header-top-mobile-right">
            <a className="header-top-mobile-tel" href='tel: +7(863) 000 00 00'>
                <span>+7(863) 000 00 00</span>
            </a>
            <span className="header-top-mobile-city">Ростов-на-Дону</span>
        </div>
    
    </>
}

export default HeaderMobile