import { Link } from 'react-router-dom';
import './style.css';

const Dashboard: React.FC = (): JSX.Element => {
    return(
      <>
        <header className='header'>
          <nav className='nav menu'>
              <ul>
                  <li>Início</li>
                  <li>Serviços</li>
                  <li>Sobre</li>
                  <Link className='cadastroButton' to="/criarconta">CADASTRE-SE</Link>
                  <Link className='cadastroButton' to="/login">LOGIN</Link>
              </ul>
          </nav>
        </header>
      
        
      </>
    )
}

export default Dashboard;
