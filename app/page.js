import NewsComponent from './components/NewsComponent';
import WeatherComponent from './components/WeatherComponent';
import RandomDataComponent from './components/RandomDataComponent';
import './globals.css'; 

export default function Home() {
  return (
    <div className="container">
      <h1>Prueba de APIs</h1>
      <div className="grid">
        <div className="card">
          <NewsComponent />
        </div>
        <div className="card">
          <WeatherComponent />
        </div>
        <div className="card">
          <RandomDataComponent />
        </div>
      </div>
    </div>
  );
}
