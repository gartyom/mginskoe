import './Header.css'
import './Nav.css'
import './Phone.css'

export default function Header(){
    return (
        <div className="Header">
            <div className="Header-content">
                <div className="Nav">
                    <ul className="Nav-content">
                        <li className="Nav-item">
                            <a className='Nav-itemLink' href='#About'>О нас</a>
                        </li>
                        <li className="Nav-item">
                            <a className='Nav-itemLink' href='#Map'>Карта</a>
                        </li>
                        <li className="Nav-item">
                            <a className='Nav-itemLink' href='#Location'>Расположение</a>
                        </li>
                        <li className="Nav-item">
                            <a className='Nav-itemLink' href='#Gallery'>Галерея</a>
                        </li>
                    </ul>
                </div>
                <div className="Phone">
                    <a className="Phone-number">+7 777 777 77 77</a>
                </div>
            </div>
        </div>
    )
}
