import './form.css'
import {Context} from '../Context'
import { useContext, useState } from 'react'
import axios from 'axios'
import { FormEvent } from 'react';

interface formDataTypes {
  fio: string;
  tel: string;
  email: string;
}

export default function Form () {
    const {formState, formClose} = useContext(Context)

    const [formData, setFormData] = useState<formDataTypes>({
        fio: '',
        tel: '',
        email: ''
      });
      const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
          await axios.post('http://localhost:3000/send-email', formData);
          alert('Форма отправлена');
        } catch (error) {
          alert('Форма не отправлена((');
        }
      };

    return <div className={formState? "popup active" : "popup"}>
        
        <div className="form_container">
            <div onClick={formClose} className="cross"></div>
            <div className="form_container-text">
                <div className="form_container_heading">
                Запишитесь <br/> на приём онлайн
                </div>
                <div className="form_container_description">
                Администратор свяжется с вами через <br/> WhatsApp в течение дня и уточнит детали
                </div>
            </div>
            <form onSubmit={handleSubmit} className='form'>
                <input
                    type="text"
                    name='fio'
                    placeholder='ФИО'
                    value={formData.fio}
                    onChange={handleChange}
                    required
                    className="form_fio" />
                <input
                    type="tel"
                    name='tel'
                    placeholder='Номер телефона'
                    pattern='8-[0-9]{3}-[0-9]{3}-[0-9]{4}'
                    value={formData.tel}
                    onChange={handleChange}
                    required
                    className="form_tel" />
                <input
                    type="email"
                    name='email'
                    placeholder='Электронная почта'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form_mail" />
                <button type='submit' className="form_send">Записаться</button>
            </form>
        </div>
    </div>
}