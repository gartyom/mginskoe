import './Map.css'

export default function Map(){
    return (
        <div className='Map' id='Map'>
            <div className='Map-content'>
                <div className="Map-title">Карта участков</div>
                <div className="Map-container">
                    <div className='Map-imageWrapper'>
                        <img className='Map-image' src={process.env.PUBLIC_URL + '/images/Image7-transformed.jpeg'} draggable="false"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
