import './styles.css'
import React, { useEffect, useState } from 'react';
import { AddIncoming, AddSpends, getIncoming, getMySpends } from '../../services/services';
import { toast, ToastContainer} from 'react-toastify';

interface ElementListProps {
  title: string;
  elements?: Array<{
    name: string;
    Price: number;
    type_spend: number;
  }>
}


function ElementList(){
  const [addNewItem,setAddNewItem] = useState(false)
  const [addHideAddButton,setAddHideAddButton] = useState(true)
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [spend, setSpend] = useState([]);
  const [incoming, setIncoming] = useState([]);

  let user = window.localStorage.getItem('user_id')

  function showAddSpend(){
    setAddNewItem(true)
    setAddHideAddButton(false)
  } 

  function addSpend(type: number){
    AddSpends(Number(user), name, description, price, type).then((resp) => {
      setName("")
      setDescription("")
      setPrice(0)
      setAddNewItem(false)
      setAddHideAddButton(true)

      let user = window.localStorage.getItem('user_id')

      getMySpends(String(user)).then((resp: any) => {      
        if(resp.data.length !== 0){
          setSpend(resp.data)
        }else{
          return toast.error("Aconteceu um erro durante o cadastro", { autoClose: 6000 });
        }
      }).catch(error => {
        return toast.error("Aconteceu um erro durante o cadastro", { autoClose: 6000 });
      })

    }).catch((error) => {

    })
  }
  
  function addIncoming(){
    AddIncoming(Number(user),price,description,"0").then((resp) => {    
      setName("")
      setDescription("")
      setPrice(0)
      setAddNewItem(false)
      setAddHideAddButton(true)


      getIncoming(String(user)).then((resp: any) => {      
        if(resp.data.length !== 0){          
          setIncoming(resp.data);
        }else{
          return toast.error("Aconteceu um erro durante o cadastro", { autoClose: 6000 });
        }
      }).catch(error => {
        return toast.error("Aconteceu um erro durante o cadastro", { autoClose: 6000 });
      })
    }).catch((error) =>{

    })
  }

  useEffect(() => {

    let user = window.localStorage.getItem('user_id')

    getMySpends(String(user)).then((resp: any) => {      
      if(resp.data.length !== 0){
        setSpend(resp.data);
      }else{
        return toast.error("Aconteceu um erro durante o cadastro", { autoClose: 6000 });
      }
    }).catch(error => {
      return toast.error("Aconteceu um erro durante o cadastro", { autoClose: 6000 });
    })

    getIncoming(String(user)).then((resp: any) => {      
      if(resp.data.length !== 0){        
        setIncoming(resp.data);
      }else{
        return toast.error("Aconteceu um erro durante o cadastro", { autoClose: 6000 });
      }
    }).catch(error => {
      return toast.error("Aconteceu um erro durante o cadastro", { autoClose: 6000 });
    })
  }, [])

  return(
    <>
      <div className='background-card'>
        <div className='outgoing'>
          <div className='headrs'>
            <p className='font-big font-small-bold'>Gastos Fixos</p>
            <p className='font-big font-small-bold'>Valor</p>
          </div>
          <li className='list-scroll'>  
            {spend?.map((element: any)=>{
              return(
                element.type_spend === 0 ? 
                  <ul>
                    <div className='list-item-container'>
                      <text className='list-item width-8ovw'>{element.name}</text>
                      <text className='list-item font-small-bold'>{element.Price}</text>
                    </div>
                  </ul>
                : <></>
              )
            })}
          {
            addNewItem ? 
            <div className='input-add'>
              <input onChange={(e: any) => setName(e.target.value)} placeholder='Título'></input>
              <input onChange={(e: any) => setDescription(e.target.value)} placeholder='Description'></input>
              <input onChange={(e: any) => setPrice(e.target.value)} placeholder='Valor'></input>
              <button id="font-big" className='button-add' onClick={ () => {
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    addSpend(0); 
                  }} >ADICIONAR</button>
            </div> : null
          }
          </li>
        </div>
        {
          addHideAddButton ? 
            <button id="font-big" className='button' onClick={()=>{showAddSpend()}}>Adicionar Renda</button>
          : null
        }
      </div>

      <div className='background-card'>
        <div className='outgoing'>
          <div className='headrs'>
            <p className='font-big font-small-bold'>Gastos Variaveis</p>
            <p className='font-big font-small-bold'>Valor</p>
          </div>
          <li className='list-scroll'>  
            {spend?.map((element: any)=>{
                return(
                  element.type_spend === 1 ? 
                    <ul>
                      <div className='list-item-container'>
                        <text className='list-item width-8ovw'>{element.name}</text>
                        <text className='list-item font-small-bold'>{element.Price}</text>
                      </div>
                    </ul>
                  : <></>
                )
              })}
            {
              addNewItem ? 
              <div className='input-add'>
                <input onChange={(e: any) => setName(e.target.value)} placeholder='Título'></input>
                <input onChange={(e: any) => setDescription(e.target.value)} placeholder='Description'></input>
                <input onChange={(e: any) => setPrice(e.target.value)} placeholder='Valor'></input>

                <button id="font-big" className='button-add' onClick={ () => {
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    addSpend(1); 
                  }} >ADICIONAR</button>
              </div> : null
            }
          </li>
        </div>
        {
          addHideAddButton ? 
            <button id="font-big" className='button' onClick={()=>{showAddSpend()}}>Adicionar Renda</button>
          : null
        }
      </div>

      <div className='background-card'>
        <div className='outgoing'>
          <div className='headrs'>
            <p className='font-big font-small-bold'>Entrada</p>
            <p className='font-big font-small-bold'>Valor</p>
          </div>
          <li className='list-scroll'>  
            {incoming?.map((element: any)=>{
                return(
                  <ul>
                    <div className='list-item-container'>
                      <text className='list-item width-8ovw'>{element.Description}</text>
                      <text className='list-item font-small-bold'>{element.earned_income}</text>
                    </div>
                  </ul>
                )
              })}
            {
              addNewItem ? 
              <div className='input-add'>
                <input onChange={(e: any) => setDescription(e.target.value)} placeholder='Description'></input>
                <input onChange={(e: any) => setPrice(e.target.value)} placeholder='Valor'></input>
                <button id="font-big" className='button-add' onClick={ () => {
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    addIncoming(); 
                  }} >ADICIONAR</button>
              </div> : null
            }
          </li>
        </div>
        {
          addHideAddButton ? 
            <button id="font-big" className='button' onClick={()=>{showAddSpend()}}>Adicionar Renda</button>
          : null
        }
      </div>
    </>
  )
}

export default ElementList;