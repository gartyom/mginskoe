import './Avolga.css'
import './Banner.css'

export default function Avolga(){

    return(
        <div className="Avolga">
            <div className="Avolga-content">
                <img className='Avolga-background' src={process.env.PUBLIC_URL + '/images/avolga.jpg'}></img>
                <div className='Avolga-banner Banner'>
                    <div className='Banner-title'>Хотите Построить Дом?</div>
                    <div className='Banner-text'>
                        Мы рекомендуем проекты <a className='Banner-textHighlight' href='https://www.google.com'>Аволга Дом.</a>
                        &nbsp;Экологично рационально, комфортно.
                    </div>
                    <div className='Banner-urls'>
                        <div className='Banner-socials'>
                            <a className='Banner-socialImageContainer'>
                                <img className='Banner-socialImage' src={process.env.PUBLIC_URL + '/icons/vk-avolga.png'}></img>
                            </a>
                            <a className='Banner-socialImageContainer'>
                                <img className='Banner-socialImage'  src={process.env.PUBLIC_URL + '/icons/instagram-avolga.png'}></img>
                            </a>
                            <a className='Banner-socialImageContainer'>
                                <img className='Banner-socialImage'  src={process.env.PUBLIC_URL + '/icons/youtube-avolga.png'}></img>
                            </a>
                        </div>
                        
                    </div>
                    <div className='Banner-phone'>
                            <a className='Banner-PhoneUrl'>+7 (921) 997-16-74</a>
                    </div>
                </div>
            </div>
        </div>
    )

}
