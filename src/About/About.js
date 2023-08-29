import { useEffect, useState } from 'react'
import './About.css'
import { useRef } from 'react'

export default function About(){
    const [slide, setSlide] = useState(0)
    const aboutDescription = useRef()
    const text = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tellus ipsum, rhoncus a orci id, imperdiet pulvinar erat. Nunc interdum nibh nisi, ac imperdiet est dignissim a. Quisque auctor, mauris et vestibulum blandit, mi nisl euismod lacus, vel hendrerit lorem nisi non nulla. Curabitur ornare lorem eu mollis lobortis. ",
                    "Mauris eu sollicitudin dolor. Vivamus eget libero nec turpis aliquam luctus. Sed ac mattis libero. Morbi vitae arcu justo. Proin in urna metus. Nulla vitae lectus vitae metus ornare euismod id sed arcu. Suspendisse ultrices lorem quis bibendum laoreet. Donec eget auctor nisi.",
                    "Etiam neque lacus, feugiat nec urna eget, tempor molestie nulla. Nulla ultrices a nibh id suscipit. In hac habitasse platea dictumst. Vestibulum rhoncus maximus tortor, vitae faucibus diam elementum quis. Proin eget felis cursus est auctor ultricies. Vestibulum eu rutrum mi. Quisque magna ex, tincidunt eu malesuada a, ultrices vitae diam."]


    function description(){

        return (
            text.map((t, index) => {
                <div className='About-description' ref={aboutDescription}>
                    {t}
                </div>
            })
            
        )
    }

    useEffect(() => {
        setInterval(() => {
            if (slide == (text.length - 1)){
                setSlide(0)
            } else {
                setSlide(slide+1)
            }
        }, 1000);
    })

    return (
        <div className="About" id='About'>
            <div className='About-content'>
                <video className='About-background' loop autoPlay muted>
                    <source src='/flyvideo_1.mp4'></source>
                </video>
                <div className='About-description'>
                    <div className='About-title IndependentSection-title'>Поселок в Кировском районе</div>
                    <div className='About-text'>
                        Доступная стоимость. Простота оформления в собственность. Участки размежеваны и выделены. Электричество подведено к участкам. Обустроены проезды.
                    </div>
                </div>
            </div>
        </div>
    )
}
