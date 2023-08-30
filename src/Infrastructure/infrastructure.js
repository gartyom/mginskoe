import './Infrastructure.css'
import './Card.css'

export default function Infrastructure(){
    return (
        <div className="Infrastructure" id='Infrastructure'>
            {/* <div className="Infrastructure-title">Инфраструктура</div> */}
            <div className="Infrastructure-content">
                <div className="Card">
                    <div className="Card-content">
                        <div className="Card-imageContainer"><img src={process.env.PUBLIC_URL + "/icons/plug.png"} alt="Электричество" className='Card-image'/></div>
                        <div className="Card-title">Электричество</div>
                        <div className="Card-info">15 квт</div>
                        {/* <div className="Card-description">Электричество заведено на территорию посёлка и разведено между участков. Собственник подключается самостоятельно за свой счёт. Абонентское обслуживание - прямой договор с энергоснабжающей организацией.</div> */}
                    </div>
                </div>
                <div className="Card">
                    <div className="Card-content">
                        <div className="Card-imageContainer"><img src={process.env.PUBLIC_URL + "/icons/drop.png"} alt="Вода" className='Card-image'/></div>
                        <div className="Card-title">Вода</div>
                        <div className="Card-info">Скважина, колодец</div>
                        {/* <div className="Card-description">Работы собственник выполняет самостоятельно за свой счёт.</div> */}
                    </div>
                </div>
                <div className="Card">
                    <div className="Card-content">
                        <div className="Card-imageContainer"><img src={process.env.PUBLIC_URL + "/icons/road.png"} alt="Дорога" className='Card-image'/></div>
                        <div className="Card-title">Дорога</div>
                        <div className="Card-info">Грунтовая, с укрепленным основанием</div>
                        {/* <div className="Card-description">Покрытие - асфальтовая крошка.</div> */}
                    </div>
                </div>
                <div className="Card">
                    <div className="Card-content">
                        <div className="Card-imageContainer"><img src={process.env.PUBLIC_URL + '/icons/bus.png'} alt="Вода" className='Card-image'/></div>
                        <div className="Card-title">Транспорт</div>
                        <div className="Card-info">Автобусы, маршрутные такси</div>
                        {/* <div className="Card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut suscipit reprehenderit ea dolores incidunt iste.</div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
