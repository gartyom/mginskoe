import './Gallery.css'

export default function Gallery(){
    return (
        <div className="Gallery" id='Gallery'>
            <div className='Gallery-title'>Галерея</div>
            <div className="Gallery-content">
                <div className='Gallery-card'>
                    <img className='Gallery-img' src={process.env.PUBLIC_URL + '/images/dji_fly_1.jpg'}></img>
                </div>
                <div className='Gallery-card'>
                    <img className='Gallery-img' src={process.env.PUBLIC_URL + '/images/dji_fly_2.jpg'}></img>
                </div>
                <div className='Gallery-card'>
                    <img className='Gallery-img' src={process.env.PUBLIC_URL + '/images/dji_fly_3.jpg'}></img>
                </div>
                <div className='Gallery-card'>
                    <img className='Gallery-img' src={process.env.PUBLIC_URL + '/images/dji_fly_4.jpg'}></img>
                </div>
                <div className='Gallery-card'>
                    <img className='Gallery-img' src={process.env.PUBLIC_URL + '/images/dji_fly_5.jpg'}></img>
                </div>
                <div className='Gallery-card'>
                    <img className='Gallery-img' src={process.env.PUBLIC_URL + '/images/dji_fly_6.jpg'}></img>
                </div>
                <div className='Gallery-card'>
                    <img className='Gallery-img' src={process.env.PUBLIC_URL + '/images/dji_fly_7.jpg'}></img>
                </div>
                <div className='Gallery-card'>
                    <img className='Gallery-img' src={process.env.PUBLIC_URL + '/images/dji_fly_8.jpg'}></img>
                </div>
                <div className='Gallery-card'>
                    <img className='Gallery-img' src={process.env.PUBLIC_URL + '/images/dji_fly_9.jpg'}></img>
                </div>
            </div>
        </div>
    )
}
