import './style.css';
import { toast, ToastContainer} from 'react-toastify';
import { useEffect, useState } from 'react';
import { getLogin } from '../../services/services';
import { Link, useHistory } from 'react-router-dom';

const Login: React.FC = (): JSX.Element => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const Login = async (): Promise<any> => {
    await getLogin(email,password).then(async (resp: any) => {      
      if(resp.data.length !== 0){
        toast.success('Cadastro criado com sucesso !', {
          position: toast.POSITION.TOP_RIGHT
        });        

        console.log(resp.data[0].id);
        
       window.localStorage.setItem('user_id', resp.data[0].id);
      }else{
        return toast.error("Aconteceu um erro durante o cadastro", { autoClose: 6000 });
      }

      history.push("/gastos")

    }).catch(error => {
      return toast.error("Aconteceu um erro durante o cadastro", { autoClose: 6000 });
    })
    
  }
  return(
    <>
      <ToastContainer />
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
      <div className='form-create-account'>
        <div className='form'>
          <h1 className='h1'> Criar Conta</h1>
          <input onChange={(e: any) => setEmail(e.target.value)} type="text" placeholder='Nickname'/>
          <input onChange={(e: any) => setPassword(e.target.value)} type="password" placeholder='Senha'/>
          <button type="submit" onClick={Login} className='button'>LOGAR</button>
        </div>
      </div>
    </>
  )
}

export default Login;
