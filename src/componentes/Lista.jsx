import React, { useEffect, useState } from "react";

function Lista(){

    let [input, setIpunt] = useState('');
    let [lista, setLista] = useState([]);

    function handlerRegister(e){
        e.preventDefault();
        setLista([...lista, input]);
        setIpunt('');
    }

    useEffect(
        
    );


    return(
        <div>
            <h1>Lista de Tarefas</h1>
            <form onSubmit={handlerRegister}>
                <label htmlFor="">Nome:</label><br />
                <input 
                    type="text" 
                    placeholder="Digite uma Tarefa" 
                    value={input}
                    onChange={(e)=>setIpunt(e.target.value)}
                /><br />

                
                <button type="subbmit">Registar</button>
            </form>
            <br />
            <br />

            <ul>
                {
                    lista.map( nome => (
                        <li key={nome}>{nome}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Lista