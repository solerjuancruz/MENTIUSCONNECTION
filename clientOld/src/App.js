import { Link } from 'react-router-dom';
import './App.css';
import MisRutas from './router/MisRutas';

function App() {
  return (
    <div className='layout'>
      <nav className='nav'>
        <ul className='dataNav'>
          <li><Link src="home">UserName</Link></li>
          <li><Link src="home">Hora login</Link></li>
          <li><Link src="home">Otros tiempos</Link></li>
        </ul>
        <ul className='appsNav'>
          <li><Link src="home">Movistar</Link></li>
          <li><Link src="home">One to One</Link></li>
          <li><Link src="home">Equipos</Link></li>
          <li><Link src="home">DB Personal</Link></li>
          <li><Link src="home">Profile</Link></li>
        </ul>
      </nav>
      <MisRutas/>
    </div>
  );
}
export default App;