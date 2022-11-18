import { useEffect, useState } from 'react';
import ListComponent from  '../../components/ListComponent'
import './style.css';
import { toast } from 'react-toastify';
import { AddIncoming, getIncoming, getMySpends } from '../../services/services';
import { Link } from 'react-router-dom';

const Spend: React.FC = (): JSX.Element => {

  const [spend, setSpend] = useState();
  const [incoming, setIncoming] = useState(Number);
  const [amountSpend, setAmountSpend] = useState(Number);
  const [amountIncoming, setAmountIncoming] = useState(Number);

  let user = window.localStorage.getItem('user_id')

  useEffect(() => {
    getMySpends(String(user)).then((resp: any) => {      
      if(resp.data.length !== 0){
        var result = resp.data.reduce(function(tot: any, arr: { Price: any; }) { 
          return tot + arr.Price;
        },0);
        setAmountSpend(result)
        // setSpend(resp.data);
      }else{
        return toast.error("Aconteceu um erro durante o cadastro", { autoClose: 6000 });
      }
    }).catch(error => {
      return toast.error("Aconteceu um erro durante o cadastro", { autoClose: 6000 });
    })

    getIncoming(String(user)).then((resp: any) => {      
      if(resp.data.length !== 0){
        var result = resp.data.reduce(function(tot: any, arr: { earned_income: any; }) { 
          console.log(arr.earned_income);

          return tot + arr.earned_income;
        },0);
        setAmountIncoming(result)
      }else{
        return toast.error("Aconteceu um erro durante o cadastro", { autoClose: 6000 });
      }
    }).catch(error => {
      return toast.error("Aconteceu um erro durante o cadastro", { autoClose: 6000 });
    })
  }, [])
  
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
      <div className='geral'>
        <div className='incoming-container'>
          <div className='incoming-container-input'>
            <label>Entrada</label>
            <input value={amountIncoming} onChange={(e: any) => setIncoming(e.target.value)}  />
          </div>
          <div className='incoming-container-input'>
            <label>Gastos</label>
            <input value={amountSpend} onChange={(e: any) => setIncoming(e.target.value)}  />
          </div>
          <div className='incoming-container-input'>
            <label>Restante</label>
            <input value={amountIncoming - amountSpend} />
          </div>
        </div>
        <div className='background'>
          <ListComponent />
        </div>
      </div>
      </>
    )
  
}
export default Spend;
