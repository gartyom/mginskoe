import './Header.css'
import './Nav.css'
import './Phone.css'
import { useRef } from 'react'

export default function Header(){
    const HeaderIcon = useRef()
    const Nav = useRef()
    const Header = useRef()

    function toggleHeader(){
        HeaderIcon.current.classList.toggle('open')
        Nav.current.classList.toggle('open')
        Header.current.classList.toggle('open')
        // 
    }

    return (
        <div className="Header" ref={Header}>
            <div className="Header-content">
                <div className='Header-navIcon' ref={HeaderIcon} onClick={toggleHeader}>
                    <div className='Header-navIconTop-bun'></div>
                    <div className='Header-navIconBottom-bun'></div>
                </div>
                <div className="Nav" ref={Nav}>
                    <ul className="Nav-content">
                        <li className="Nav-item">
                            <a className='Nav-itemLink' href='#About' onClick={toggleHeader}>О нас</a>
                        </li>
                        <li className="Nav-item">
                            <a className='Nav-itemLink' href='#Map' onClick={toggleHeader}>Карта</a>
                        </li>
                        <li className="Nav-item">
                            <a className='Nav-itemLink' href='#Location' onClick={toggleHeader}>Как добраться</a>
                        </li>
                        <li className="Nav-item">
                            <a className='Nav-itemLink' href='#Places' onClick={toggleHeader}>Что рядом</a>
                        </li>
                        <li className="Nav-item">
                            <a className='Nav-itemLink' href='#Gallery' onClick={toggleHeader}>Галерея</a>
                        </li>
                    </ul>
                </div>
                <div className="Phone">
                    <a className="Phone-number">
                        <div className='Phone-numberText'>+7 777 777 77 77</div>
                        <img className='Phone-numberIcon'  src={process.env.PUBLIC_URL + '/icons/phone.png'}></img>
                        </a>
                </div>
            </div>
        </div>
    )
}
