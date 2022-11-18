import React, { useState } from 'react';
import '../main.css';
import logo from '../assets/logo.png';
import home from '../assets/home.png';
import { useNavigate, } from "react-router-dom";


function Home() {
    const [day,setDay] = useState('');
    const [money, setMoney] = useState('');
    const [risk, setRisk] = useState('');
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault();
        navigate("/resultado", {state: {
          day, money, risk
        }})
    }
  return (
    <div className="App">
      <header className="row mw-100">
        <div className='d-flex'>
        <img className="mt-5 ml-5" src={logo} alt="lampada" />
        <div className="mt-5 ml-3">
          <h1 className='text'>techinvest</h1>
          <h2 className='subtitle'>Inteligência Artificial</h2>
        </div>
        </div>
      </header>
      <div className='mt-5'>
        <img className="w-100" src={home} alt="home" />
        <div className='img-text'>
          <h2 className='col-sm-8'>Somos a Tech Invest, preparado 
          para viver uma inteligência artificial? 
          </h2>
          <h2 className='col-sm-8'>Preparado para investir?
          </h2>
          <h2 className='col-sm-8'>Aqui você terá o melhor resultado.</h2>
        </div>
        
      </div>
      <div className='mt-5  mb-5 d-flex justify-content-center'>
        <div>
        <h1 className='text-question mb-5'>Responda as perguntas</h1>
        <form onSubmit={handleSubmit}>
            <h3 className='mt-3'>Qual grau de risco?</h3>
            <select value={risk} onChange={(e) => setRisk(e.target.value)} className="custom-select mt-3" id="inputGroupSelect01" required>
              <option selected>Escolha o risco ...</option>
              <option value="1">Leve</option>
              <option value="2">Moderado</option>
              <option value="3">Alto</option>
            </select> 

            <h3 className='mt-3'>Em quanto tempo deseja retirar seus investimentos?</h3>
            <input className='form-control mt-3' value={day} onChange={(e) => setDay(e.target.value)} type="day" required name="day" id="" placeholder='Digite um valor em dias ...'/>
            <div className=' mt-3 d-flex justify-content-center'>

            <button className='w-50 btn-lg mt-5 mb-5 footer-color' type="submit">Enviar Respostas</button>
            </div>

          </form>
        </div>
          

        
      </div>
      <footer className='footer-color mt-5'></footer>
    </div>
  );
}

export default Home;
