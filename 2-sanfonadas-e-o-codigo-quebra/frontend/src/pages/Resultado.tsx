import React, { useEffect, useState } from 'react';
import '../main.css';
import logo from '../assets/logo.png';
import { useLocation } from 'react-router-dom';
import { get } from '../services/request';


const investOptions = ["Poupança", "CDB Liquidez Diária", "Tesouro Direto", "Fundo de Investimento"]

function Resultado() {
    const { state } = useLocation();
    const {risk, day} = state;
    const [ indexApi, setIndexApi] = useState('')

    const getApi = async () => {
        const response = await get(`/api?risk=${risk}&day=${day}`);
        return response;

    }

    useEffect(() => {
        const show = async () => {
           const response = await getApi();
           setIndexApi(response.investimento);
        }
        show()
    })

  return (
    <>
      <header className="row mw-100">
        <div className='d-flex'>
        <img className="mt-5 ml-5" src={logo} alt="lampada" />
        <div className="mt-5 ml-3">
          <h1 className='text'>techinvest</h1>
          <h2 className='subtitle'>Inteligência Artificial</h2>
        </div>
        </div>
      </header>
      <div className='mt-4 d-flex justify-content-center'>
        <div className='result-box row align-items-center'>
            <h1 className='text-white ml-5'>Investir</h1>
            <h2 className='text-white ml-5'>Para o seu investimento recomendamos:</h2>
            <h3 className='text-white ml-5'>{investOptions[indexApi]}</h3>
        </div>
      </div>
      
      <footer className='footer-color mt-4'></footer>
    </>
  );
}

export default Resultado;
