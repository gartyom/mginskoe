import './About.css'
// import './Infrastructure.css'

export default function About(){
    return (
        <div className="About" id='About'>
            <div className='About-content'>
                <video className='About-background' loop autoPlay playsInline preload='true' muted>
                    <source src={process.env.PUBLIC_URL + '/videos/flyvideo.mp4'} type="video/mp4" ></source>
                </video>
                <div className='About-description'>
                    <div className='About-title IndependentSection-title'>Поселок в Кировском районе</div>
                    <div className='About-text'>
                        Доступная стоимость. Простота оформления в собственность. Подходит как для круглогодичного проживания, так и для дачного строительства. Рядом есть магазины и все объекты социальной инфраструктуры. Легко добираться как личным, так и общественным транспортом.
                    </div>
                </div>
                {/* <div className="Infrastructure" id='Infrastructure'>
                    <div className="Infrastructure-content">
                        <div className="Card">
                            <div className="Card-content">
                                <div className="Card-imageContainer"><img src={process.env.PUBLIC_URL + "/icons/plug.png"} alt="Электричество" className='Card-image'/></div>
                                <div className="Card-title">Электричество</div>
                                <div className="Card-info">15 квт</div>
                            </div>
                        </div>
                        <div className="Card">
                            <div className="Card-content">
                                <div className="Card-imageContainer"><img src={process.env.PUBLIC_URL + "/icons/drop.png"} alt="Вода" className='Card-image'/></div>
                                <div className="Card-title">Вода</div>
                                <div className="Card-info">Скважина, колодец</div>
                            </div>
                        </div>
                        <div className="Card">
                            <div className="Card-content">
                                <div className="Card-imageContainer"><img src={process.env.PUBLIC_URL + "/icons/road.png"} alt="Дорога" className='Card-image'/></div>
                                <div className="Card-title">Дорога</div>
                                <div className="Card-info">Грунтовая, с укрепленным основанием</div>
                            </div>
                        </div>
                        <div className="Card">
                            <div className="Card-content">
                                <div className="Card-imageContainer"><img src={process.env.PUBLIC_URL + '/icons/bus.png'} alt="Вода" className='Card-image'/></div>
                                <div className="Card-title">Транспорт</div>
                                <div className="Card-info">Автобусы, маршрутные такси</div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
