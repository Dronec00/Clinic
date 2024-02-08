import './bottom.css'
import './bottom_mobile.css'
import inst from '../../assets/img/instagram 4 1.svg'
import whats from '../../assets/img/whatsapp_bottom.svg'
import telegram from '../../assets/img/telegram.svg'
import logo from '../../assets/img/logo_bottom.svg'

const Bottom: React.FC<any> = () => {
    return <div className="bottom-nav-container">
    <div className="container">
        <div className="bottom-nav-container-logo">
            <img src={logo} alt=""/>
        </div>
        <div className="bottom-nav-container-navigation">
            <ul>
                <li><a href="/#">О клинике</a></li>
                <li><a href="/#">Услуги</a></li>
                <li><a href="/#">Специалисты</a></li>
                <li><a href="/#">Цены</a></li>
                <li><a href="/#">Контакты</a></li>
            </ul>
        </div>
        <div className="bottom-nav-container-social_media">
            <a href="/#"><img src={inst} alt=""/></a>
            <a href="/#"><img src={whats} alt=""/></a>
            <a href="/#"><img src={telegram} alt=""/></a> 
        </div>
    </div>
  </div>
}

export default Bottom