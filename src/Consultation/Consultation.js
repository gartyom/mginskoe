import './Consultation.css'
import  './Form.css'

export default function Consultation(){

    function handleButtonClick(){}

    return (
        <div className="Consultation">
            <div className="Consultation-content">
                <img className='Consultation-background' src={process.env.PUBLIC_URL + '/images/consultation.jpg'}></img>
                <div className='Consultation-form Form'>
                    <div className='Form-title'>Получите консультацию</div>
                    <div className='Form-inputContainer'>
                        <input className='Form-input' placeholder='Как к вам обращаться?'></input>
                        <div className='Form-inputSeparator'></div>
                        <input className='Form-input' placeholder='Ваш телефон?'></input>
                    </div>
                    <button className='Form-button' onClick={handleButtonClick}>Перезвоните мне</button>
                </div>
            </div>
        </div>
    )
}
