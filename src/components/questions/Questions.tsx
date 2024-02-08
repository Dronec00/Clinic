import { useEffect, useState } from 'react'
import './questions.css'
import texts from '../../texts.json'
import {ContextType} from '../types/types'

const Questions = () => {

    const InitialQuestions = [
        {heading: texts.question[0].heading1, paragraph: texts.question[0].text, active: false},
        {heading: texts.question[1].heading2, 
        paragraphOne: texts.question[1].par1,
        paragraphTwo: texts.question[1].par2,
        active: false},
        {heading: texts.question[2].heading3, paragraph: texts.question[2].text, active: false},
        {heading: texts.question[3].heading4, paragraph: texts.question[3].text, active: false}
    ];

    const [questions, setQuestions] = useState(InitialQuestions);

    const cross = (idx: number) : void => {
        const transform: boolean = !questions[idx].active
        const toggle = questions.map((item, index) => {
            if(index === idx) 
                {return {...item, active: transform}}
                return item
        });
        setQuestions(toggle);
    }
    // текст каждого вопроса будет отображаться на небольших экранах 
    const removecross = () => {
        if(window.innerWidth < 769) {
            const remove = questions.map(item => { return {...item, active: true}})
            setQuestions(remove)
        } else {return}
    }
    
    useEffect(()=>{
        removecross()
        window.addEventListener('resize', removecross)
        return () => window.removeEventListener('resize', removecross)
    }, [])

    return <div className="question_block">
        
        <span className="question-head">Часто задаваемые вопросы</span>
        
        <div className="questions-container">
            {questions.map((item, idx) => {
                if (idx !== 1) {
                return <div key={idx} className="questions-container-item"> 
                    <div className="questions-container-content">
                        <span className='question-head_item'>
                            {item.heading}
                            <div className='question-active' onClick={() => cross(idx)} >
                                <div className={item.active ? '' : 'horizontal'}>
                                    <span className="line"></span>
                                    <span className="line"></span>
                                </div>
                            </div>
                            </span>
                        { item.active? <span className='questions-container-text' >{item.paragraph}</span> : null}
                    </div>
                    
                </div>
                } else {
                    return <div key={idx} className="questions-container-item">
                    <div className="questions-container-content">
                        <span className='question-head_item'>
                            {item.heading}
                            <div className='question-active' onClick={() => cross(idx)} >
                                <div className={item.active ? '' : 'horizontal'}>
                                    <span className="line"></span>
                                    <span className="line"></span>
                                </div>
                            </div>
                            </span>
                        {item.active
                        ? 
                        <>
                        <span className={item.active? 'questions-container-text' : 'questions-container-text_none'}>{item.paragraphOne}</span>
                        <span className={item.active? 'questions-container-text' : 'questions-container-text_none'}>{item.paragraphTwo}</span> 
                        </>
                        :
                        null
                        }
                    </div>
                </div>
                }
            })}
        
        </div>
    </div>
}

export default Questions