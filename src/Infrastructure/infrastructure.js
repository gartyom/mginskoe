import './Infrastructure.css'
import './Card.css'

export default function Infrastructure(){

    function renderInfrastructure(){
        const i = [
            {
                name:"Электричество",
                info: "15 квт",
                img: "/icons/plug.png"
            },
            {
                name:"Вода",
                info: "Скважина, колодец",
                img: "/icons/drop.png"
            },
            {
                name:"Дорога",
                info: "Грунтовая, с укрепленным основанием",
                img: "/icons/road.png"
            },
            {
                name:"Транспорт",
                info: "Электрички, автобусы, маршрутные такси",
                img: '/icons/bus.png'
            }
        ]

        return (
            i.map((infrastructure, index) => {
                return (
                    <div className="Card" key={index}>
                    <div className="Card-content">
                        <div className="Card-imageContainer"><img src={process.env.PUBLIC_URL + infrastructure.img} alt={infrastructure.name} className='Card-image'/></div>
                        <div className="Card-title">{infrastructure.name}</div>
                        <div className="Card-info">{infrastructure.info}</div>
                    </div>
                </div>
                )
            })
        )
    }

    return (
        <div className="Infrastructure" id='Infrastructure'>
            <div className="Infrastructure-content">
                {renderInfrastructure()}
            </div>
        </div>
    )
}
