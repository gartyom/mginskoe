import './App.css';
import Header from './Header/Header'
import Map from './Map/Map';
import About from './About/About';
import Infrastructure from './Infrastructure/infrastructure';
import Route from './Location/Location';
import Gallery from './Gallery/Gallery';
import Footer from './Footer/Footer';
import Places from './Places/Places'
import Consultation from './Consultation/Consultation';
import Avolga from './Avolga/Avolga';

function App() {
  return (
    <div className="App">
        <Header/>
        <div className='App-content'>
          <div className='Hello-section'>
            <About></About>
            <Infrastructure></Infrastructure>
          </div>
          <Map></Map>
          <Route></Route>
          <Places></Places>
          <Gallery></Gallery>
          <Consultation></Consultation>
          <Avolga></Avolga>
          <Footer></Footer>
        </div>
    </div>
  );
}

export default App;
