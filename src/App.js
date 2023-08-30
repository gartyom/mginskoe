import logo from './logo.svg';
import './App.css';
import Header from './Header/Header'
import Map from './Map/Map';
import About from './About/About';
import Infrastructure from './Infrastructure/infrastructure';
import Route from './Location/Location';
import Gallery from './Gallery/Gallery';
import Footer from './Footer/Footer';

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
          <Gallery></Gallery>
          <Footer></Footer>
        </div>
    </div>
  );
}

export default App;
