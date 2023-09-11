import './About.css'

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
            </div>
        </div>
    )
}
