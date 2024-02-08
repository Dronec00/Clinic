import './clinic.css'
import clinicImg from '../../assets/img/Clinic.png'
import './clinic_mobile.css'
import texts from '../../texts.json'

const Clinic: React.FC<any> = () => {
    return <div className="clinic">
                {/* Clinic mobile START  */}
                    <div className="clinic-mobile-img_block">
                        <img src={clinicImg} alt="Клиника в Ростове" className="clinic-mobile_image" />
                    </div>
                {/* Clinic mobile END  */}
    <div className="container">
        <div className="clinic-about">
            <span className="clinic-info-heading">Многопрофильная клиника для детей
                и взрослых</span>
            <span className="clinic-description">{texts.clinic[0].text}</span>
        </div>
            <div className="clinic-image_block">
                <img src={clinicImg} alt="Клиника в Ростове" className="clinic-image" />
            </div>
    </div>
</div>
}

export default Clinic