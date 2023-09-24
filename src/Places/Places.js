import './Places.css'
import './Place.css'
import { useState } from 'react'
export default function Places(){

    const [previousPlace, setPreviousPlace] = useState(undefined)

    function renderPlaces(){
        const p = [
            {
                name: "КАД",
                img: '/images/kad-sankt-peterburga.jpg',
                time: "42 минуты",
                distance: "~ 45 км",
                icon: "/icons/car.png",
                description: "Поселок находится всего в 45 километрах от Санкт-Петербурга. Он удобно расположен по отношению к Московскому и Мурманскому шоссе, а также к Кольцевой дороге. Поэтому до Петербурга добираться удобно, а при необходимости можно быстро и без пробок выехать в сторону Москвы или Мурманска."
            },
            {
                name: "Лес",
                img: '/images/les.jpg',
                time: "5 минут",
                distance: "~ 300 м",
                icon: "/icons/walk.png",
                description: "Несмотря на близость к Петербургу, рядом с деревней раскинулись тысячи гектар лесных массивов. В этих девственных лесах даже сейчас легко встретить любое дикое животное, характерное для Ленинградской области. Чаще всего встречаются кабан, лось, заяц, лисица."
            },
            {
                name: "город Кировск",
                img: '/images/kirovsk.jpg',
                time: "20 минут",
                icon: "/icons/car.png",
                distance: "~ 17 км",
                description: "Рынки, магазины, кинотеатры, детские аттракционы, спортивные площадки и другие социальные объекты."
            },
            {
                name: "Река Нева",
                img: '/images/reka-neva.jpg',
                time: "20 минут",
                icon: "/icons/car.png",
                distance: "~ 14 км",
                description: "Катание на лодках и катерах, рыбалка. Главная рыба, которую здесь можно поймать – корюшка. Так же попадаются окунь, лещ, угорь, минога, судак и другие."
            },
            {
                name: "Река Мга",
                img: '/images/mga-reka.jpg',
                time: "5 минут",
                icon: "/icons/walk.png",
                distance: "~ 400 м",
                description: "Воды Мги имеют темно-коричневую окраску, что связано с исходом из торфяной местности. Река Мга очень красивая и интересна для рыбалки. Виды рыбы очень разнообразны и представлены лещом, щукой, судаком, плотвой, окунем, сомом, густерой, ельцом."
            },
            {
                name: "Каньон реки Лава",
                img: '/images/kanon-reki-lava.jpg',
                time: "35 минут",
                icon: "/icons/car.png",
                distance: "~ 33 км",
                description: "Один из наиболее интересных в геологическом отношении памятников природы Ленинградской области. Река имеет цвет зелёного чая из-за торфяных веществ. Каньон тянется на 7 километров, а берега реки достигают в высоту 25 метров."
            },
            {
                name: "Крепость Орешек",
                img: '/images/krepost-oreshek.jpg',
                time: "30 минут",
                icon: "/icons/car.png",
                distance: "~ 26 км",
                description: "Древняя русская крепость на Ореховом острове в истоке реки Невы, напротив города Шлиссельбурга в Ленинградской области."
            },

            {
                name: "Мемориал Синявинские высоты",
                img: '/images/sinyavskie-visoti.jpg',
                time: "16 минут",
                icon: "/icons/car.png",
                distance: "~ 13 км",
                description: "Входит в число памятников Зеленого пояса славы. В 1941-1943 годах на Синявинских высотах, представляющих возвышенность до 50 метров над уровнем моря, шли ожесточенные бои за прорыв блокады Ленинграда."
            },
            {
                name: "Музей-панорама Прорыв",
                img: '/images/musei-panorama.jpg',
                time: "27 минут ",
                icon: "/icons/car.png",
                distance: "~ 21 км",
                description: "Единственный музей, который посвящён советским солдатам 63-й стрелковой дивизии Ленинградского фронта, совершившим подвиг: прорыв блокады Ленинграда в январе 1943 года, в результате чего появилась возможность построить железнодорожный путь в Ленинград — «Дорогу Победы». Состоит из панорамы и экспозиции военной техники — танков времён Великой Отечественной войны."
            },
            
        ]

        function handleCardClick(event){
            if(event.currentTarget.matches(".open")){
                event.currentTarget.classList.remove("open")
            } else {
                if(previousPlace !== undefined){
                    previousPlace.classList.remove("open")      
                }
                setPreviousPlace(event.currentTarget)
                event.currentTarget.classList.add('open')
            }
        }

        return ( 
        
                p.map((place, index) => {
                    return(
                    <div className='Place' key={index}>
                        <div className='Place-content'>
                            <div className='Place-imageContainer'>
                                <img className='Place-image' src={process.env.PUBLIC_URL + place.img} alt=''></img>
                            </div>
                            <div className='Place-description' onClick={handleCardClick}>
                                <div className='Place-icon'></div>
                                <div className='Place-text'>
                                    <div className='Place-title'>
                                        {place.name}
                                    </div>
                                    <div className='Place-time'>
                                        <img className='Place-timeIcon' src={process.env.PUBLIC_URL + place.icon} alt='icon'></img>
                                        <div className='Place-timeText'>{place.time}</div>
                                        <div className='Place-distance'>{place.distance}</div>
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
            <div className="Places-content">
                <div className='Places-container'>
                    {renderPlaces()}
                </div>
                <div className='Places-history'>
                    <div className='Places-historyTitle'>История деревни Пухолово:</div>
                    <ul className='Places-historyList'>
                        <li className='Places-historyListItem'>На карте Ингерманландии,  составленной по шведским материалам 1676 года, упоминается деревня Pucschowick.</li>
                        <li className='Places-historyListItem'>На шведской «Генеральной карте провинции Ингерманландии» 1704 года, составленной по материалам 1678 года она упомянута, как Puchala.</li>
                        <li className='Places-historyListItem'>На карте Санкт-Петербургской губернии Я. Ф. Шмита 1770 года она обозначена, как деревня Пухолова.</li>
                        <li className='Places-historyListItem'>На карте Санкт-Петербургской губернии Ф. Ф. Шуберта 1834 года обозначена деревня Пухолово, состоящая из 31 крестьянского двора. В деревне находилась водяная мельница.</li>
                        <li className='Places-historyListItem'>В 1837 году Княгиня Т. В. Юсупова стала полноправной хозяйкой деревень Пухолово и Сологубовка. Юсуповы – одна из самых видных по происхождению и богатству русских дворянских фамилий. Им принадлежали все земли в этой округе.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
