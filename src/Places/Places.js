import './Places.css'
import './Place.css'
export default function Places(){

    function handlePlaceClick(event){
        if (event.target.matches(".Place-openIcon")){
            event.target.parentElement.classList.toggle("open")
        }
    }

    return(
        <div className="Places" id='Places'>
            <div className="Places-title">Что рядом</div>
            <div className="Places-content" onClick={handlePlaceClick}>
                <div className='Place'>
                    <div className='Place-content'>
                        <div className='Place-imageContainer'>
                            <img className='Place-image' src={process.env.PUBLIC_URL + '/images/kad-sankt-peterburga.jpg'}></img>
                        </div>
                        <div className='Place-description'>
                            <div className='Place-icon'></div>
                            <div className='Place-text'>
                                <div className='Place-title'>
                                    КАД
                                </div>
                                <div className='Place-timeText'>
                                    42 минуты
                                </div>
                                <div className='Place-mainText'>
                                    Поселок находится всего в 45 километрах от Санкт-Петербурга. Он удобно расположен по отношению к Московскому и Мурманскому шоссе, а также к Кольцевой дороге. Поэтому до Петербурга добираться удобно, а при необходимости можно быстро и без пробок выехать в сторону Москвы или Мурманска.
                                </div>
                                <div className='Place-openIcon'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Place'>
                    <div className='Place-content'>
                        <div className='Place-imageContainer'>
                            <img className='Place-image' src={process.env.PUBLIC_URL + '/images/kirovsk.jpg'}></img>
                        </div>
                        <div className='Place-description'>
                            <div className='Place-icon'></div>
                            <div className='Place-text'>
                                <div className='Place-title'>
                                    город Кировск
                                </div>
                                <div className='Place-timeText'>
                                    20 минут
                                </div>
                                <div className='Place-mainText'>
                                    Рынки, магазины, кинотеатры, детские аттракционы, спортивные площадки и другие социальные объекты.
                                </div>
                                <div className='Place-openIcon'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Place'>
                    <div className='Place-content'>
                        <div className='Place-imageContainer'>
                            <img className='Place-image' src={process.env.PUBLIC_URL + '/images/kanon-reki-lava.jpg'}></img>
                        </div>
                        <div className='Place-description'>
                            <div className='Place-icon'></div>
                            <div className='Place-text'>
                                <div className='Place-title'>
                                    Каньон реки Лава
                                </div>
                                <div className='Place-timeText'>
                                    35 минут
                                </div>
                                <div className='Place-mainText'>
                                    Один из наиболее интересных в геологическом отношении памятников природы Ленинградской области. Река имеет цвет зелёного чая из-за торфяных веществ. Каньон тянется на 7 километров, а берега реки достигают в высоту 25 метров. Долина реки Лавы охраняется государством как уникальный памятник природы.
                                </div>
                                <div className='Place-openIcon'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Place'>
                    <div className='Place-content'>
                        <div className='Place-imageContainer'>
                            <img className='Place-image' src={process.env.PUBLIC_URL + '/images/krepost-oreshek.jpg'}></img>
                        </div>
                        <div className='Place-description'>
                            <div className='Place-icon'></div>
                            <div className='Place-text'>
                                <div className='Place-title'>
                                    Крепость Орешек
                                </div>
                                <div className='Place-timeText'>
                                    30 минут
                                </div>
                                <div className='Place-mainText'>
                                    Древняя русская крепость на Ореховом острове в истоке реки Невы, напротив города Шлиссельбурга в Ленинградской области.
                                </div>
                                <div className='Place-openIcon'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Place'>
                    <div className='Place-content'>
                        <div className='Place-imageContainer'>
                            <img className='Place-image' src={process.env.PUBLIC_URL + '/images/sinyavskie-visoti.jpg'}></img>
                        </div>
                        <div className='Place-description'>
                            <div className='Place-icon'></div>
                            <div className='Place-text'>
                                <div className='Place-title'>
                                    Мемориал Синявинские высоты
                                </div>
                                <div className='Place-timeText'>
                                    16 минут
                                </div>
                                <div className='Place-mainText'>
                                    Входит в число памятников Зеленого пояса славы. В 1941-1943 годах на Синявинских высотах, представляющих возвышенность до 50 метров над уровнем моря, шли ожесточенные бои за прорыв блокады Ленинграда
                                </div>
                                <div className='Place-openIcon'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
