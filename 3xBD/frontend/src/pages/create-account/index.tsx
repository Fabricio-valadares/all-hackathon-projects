import { CreateAccout } from '../../services/services';
import './style.css';
import { toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const CreateAccount: React.FC = (): JSX.Element => {

  const [name, setName] = useState("");
  const [nickname, setNicknamen] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  let history = useHistory();

  const createAccount = async (): Promise<any> => {
    await CreateAccout(name,nickname,email,password).then((resp: any) => {
       toast.success('Cadastro criado com sucesso !', {
        autoClose: 6000,
      });
      history.push("/login");

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
            <input onChange={(e: any) => setEmail(e.target.value)} type="email" placeholder='E-mail'/>
            <input onChange={(e: any) => setName(e.target.value)} type="text" placeholder='Nome'/>
            <input onChange={(e: any) => setNicknamen(e.target.value)} type="text" placeholder='Nickname'/>
            <input onChange={(e: any) => setPassword(e.target.value)} type="password" placeholder='Senha'/>
            <button type="submit" onClick={createAccount} className='button'> CADASTRAR-SE</button>
          </div>

        </div>
      </>
    )
}

export default CreateAccount;
