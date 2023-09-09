import './Location.css'
import React, { useEffect } from 'react';

export default function Route(){
    return (
        <div className="Location" id='Location'>
            <div className="Location-content">
                <div style={{position:"relative", overflow:"hidden"}} className='Location-mapContainer'>
                    <div className='Location-title'>
                        Как добраться
                    </div>
                    <iframe src="https://yandex.ru/map-widget/v1/?ll=31.101994%2C59.721374&mode=routes&rtext=59.938784%2C30.314997~59.728593%2C31.089879&rtt=auto&ruri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzAwMDA5MxIr0KDQvtGB0YHQuNGPLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsyIKDR2F8kEVUcFvQg%2C%2C~&z=10.16" allowFullScreen={true} style={{position:"relative", outline:"none", border:"none"}} className='Location-mapFrame'></iframe>
                </div>
                <div className='Location-text'>
                    <div className='Location-description'>
                        Участки из новой нарезки в Кировском районе Ленинградской области: 
                        <ul className='Location-list'>
                            <li className='Location-listItem'>до деревни Пухолово - 2,5 км</li>
                            <li className='Location-listItem'>до ж/д станции Мга - 5 км</li> 
                            <li className='Location-listItem'>Ближайшая остановка общественного транспорта - 700 м</li> 
                            <li className='Location-listItem'>Вид разрешенного использования - для дачного строительства, земли с/х назначения.</li>  
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
