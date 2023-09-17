import './Places.css'
import './Place.css'
import { useState } from 'react'
export default function Places(){

    const [previousPlace, setPreviousPlace] = useState(undefined)

    function handlePlaceClick(event){
        if (event.target.matches(".Place-openIcon")){
            let element = event.target.parentElement.parentElement
            if(!element.matches(".open")){
                if(previousPlace != undefined){
                    previousPlace.classList.remove("open")
                }
                setPreviousPlace(element)
            }
            element.classList.toggle("open")
        }
    }

    function renderPlaces(){
        const p = [
            {
                name: "КАД",
                img: '/images/kad-sankt-peterburga.jpg',
                time: "42 минуты",
                icon: "/icons/car.png",
                description: "Поселок находится всего в 45 километрах от Санкт-Петербурга. Он удобно расположен по отношению к Московскому и Мурманскому шоссе, а также к Кольцевой дороге. Поэтому до Петербурга добираться удобно, а при необходимости можно быстро и без пробок выехать в сторону Москвы или Мурманска."
            },
            {
                name: "Лес",
                img: '/images/les.jpg',
                time: "5 минут",
                icon: "/icons/walk.png",
                description: "Несмотря на близость к Петербургу, рядом с деревней раскинулись тысячи гектар лесных массивов. В этих девственных лесах даже сейчас легко встретить любое дикое животное, характерное для Ленинградской области. Чаще всего встречаются кабан, лось, заяц, лисица."
            },
            {
                name: "город Кировск",
                img: '/images/kirovsk.jpg',
                time: "20 минут",
                icon: "/icons/car.png",
                description: "Рынки, магазины, кинотеатры, детские аттракционы, спортивные площадки и другие социальные объекты."
            },
            {
                name: "Река Нева",
                img: '/images/reka-neva.jpg',
                time: "20 минут",
                icon: "/icons/car.png",
                description: "Катание на лодках и катерах, рыбалка. Главная рыба, которую здесь можно поймать – корюшка. Так же попадаются окунь, лещ, угорь, минога, судак и другие."
            },
            {
                name: "Река Мга",
                img: '/images/mga-reka.jpg',
                time: "10 минут",
                icon: "/icons/walk.png",
                description: "Воды Мги имеют темно-коричневую окраску, что связано с исходом из торфяной местности. Река Мга очень красивая и интересна для рыбалки. Виды рыбы очень разнообразны и представлены лещом, щукой, судаком, плотвой, окунем, сомом, густерой, ельцом."
            },
            {
                name: "Каньон реки Лава",
                img: '/images/kanon-reki-lava.jpg',
                time: "35 минут",
                icon: "/icons/car.png",
                description: "Один из наиболее интересных в геологическом отношении памятников природы Ленинградской области. Река имеет цвет зелёного чая из-за торфяных веществ. Каньон тянется на 7 километров, а берега реки достигают в высоту 25 метров."
            },
            {
                name: "Крепость Орешек",
                img: '/images/krepost-oreshek.jpg',
                time: "30 минут",
                icon: "/icons/car.png",
                description: "Древняя русская крепость на Ореховом острове в истоке реки Невы, напротив города Шлиссельбурга в Ленинградской области."
            },

            {
                name: "Мемориал Синявинские высоты",
                img: '/images/sinyavskie-visoti.jpg',
                time: "16 минут",
                icon: "/icons/car.png",
                description: "Входит в число памятников Зеленого пояса славы. В 1941-1943 годах на Синявинских высотах, представляющих возвышенность до 50 метров над уровнем моря, шли ожесточенные бои за прорыв блокады Ленинграда."
            },
            {
                name: "Музей-панорама Прорыв",
                img: '/images/musei-panorama.jpg',
                time: "27 минут",
                icon: "/icons/car.png",
                description: "Единственный музей, который посвящён советским солдатам 63-й стрелковой дивизии Ленинградского фронта, совершившим подвиг: прорыв блокады Ленинграда в январе 1943 года, в результате чего появилась возможность построить железнодорожный путь в Ленинград — «Дорогу Победы». Состоит из панорамы и экспозиции военной техники — танков времён Великой Отечественной войны."
            },
            
        ]

        return ( 
        
                p.map((place, index) => {
                    return(
                    <div className='Place' key={index}>
                        <div className='Place-content'>
                            <div className='Place-imageContainer'>
                                <img className='Place-image' src={process.env.PUBLIC_URL + place.img} alt=''></img>
                            </div>
                            <div className='Place-description'>
                                <div className='Place-icon'></div>
                                <div className='Place-text'>
                                    <div className='Place-title'>
                                        {place.name}
                                    </div>
                                    <div className='Place-time'>
                                        <img className='Place-timeIcon' src={process.env.PUBLIC_URL + place.icon}></img><div className='Place-timeText'>{place.time}</div>
                                    </div>
                                    <div className='Place-mainText'>
                                        {place.description}
                                    </div>
                                    <div className='Place-openIcon'></div>
                                </div>
                            </div>
                        </div>
                    </div>)
                    
                })
            )
    }

    return(
        <div className="Places" id='Places'>
            <div className="Places-title">Что рядом</div>
            <div className="Places-content" onClick={handlePlaceClick}>
                {renderPlaces()}
            </div>
        </div>
    )
}
