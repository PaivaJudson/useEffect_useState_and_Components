import React, { useState } from "react";

function Form() {

    let [nome, setNome] = useState("");
    let [idade, setIdade] = useState("");
    let [email, setEmail] = useState("");

    let [user, setUser] = useState({});


    function registos(e) {
        e.preventDefault();
        alert("Cadastro efectuado com sucesso!");

        setUser({
            nome: nome,
            idade: idade,
            email: email
        });
    }

    return (
        <div>
            <h1>Cadastrando Usuários</h1>
            <form onSubmit={registos}>
                <label htmlFor="">Nome:</label><br />
                <input 
                    type="text" 
                    placeholder="Digite seu nome" 
                  
                    onChange={(e)=>setNome(e.target.value)}
                /><br />

                <label htmlFor="">Email:</label><br />
                <input 
                    type="text" 
                    placeholder="Digite seu Email" 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                /><br />

                <label htmlFor="">Idade:</label><br />
                <input 
                    type="text" 
                    placeholder="Digite a sua idade" 
                    value={idade}
                    onChange={(e)=>setIdade(e.target.value)}
                /><br />

                <button type="subbmit">Registar</button>
            </form>
            <br />
            <br />

            <div>
                <span>Bem-vindo: {user.nome}</span><br />
                <span>Idade: {user.idade}</span><br />
                <span>Email: {user.email}</span><br />
            </div>
        </div>
    );
}


export default Form;