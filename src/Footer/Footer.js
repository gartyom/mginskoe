import './Footer.css'

export default function Footer(){
    return(
        <div className="Footer">
            <div className='Footer-content'>
                <div className='Footer-phone'>
                    +7 777 777 77 77
                </div>
                <div className='Footer-mail'>
                    noemail@noemail.ru
                </div>
                <div className='Footer-socials'>
                    <div className='Footer-iconContainer'>
                        <a className='Foote-socialLink'>
                            <img src={process.env.PUBLIC_URL + '/icons/instagram.png'} className='Footer-icon'></img>
                        </a>
                    </div>
                    <div className='Footer-iconContainer'>
                        <a className='Foote-socialLink'>
                            <img src={process.env.PUBLIC_URL + '/icons/vkontakte.png'} className='Footer-icon'></img>
                        </a>
                    </div>
                    <div className='Footer-iconContainer'>
                        <a className='Foote-socialLink'>
                            <img src={process.env.PUBLIC_URL + '/icons/youtube.png'} className='Footer-icon'></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
