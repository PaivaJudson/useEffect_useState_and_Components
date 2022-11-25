import React, { useEffect, useState } from "react";

function UseEffect() {

    const [count, setCount] = useState(0);
    const [contB, setContB] = useState(10);
    const [user, setUser] = useState();
    
    // 1 - maneira
    useEffect(
        () => {
            console.log("Altera a cada renderizacao");
        }
    );

    // 2 - maneira
    useEffect(
        () => {
            console.log("Somente se existir incremento na dependencia");
        }, [count]);

    // 3 - maneira
    useEffect(
        () => {
            console.log("So executa no carregamento");
        }, []);    

    // 4 - maneira (clean up)
    
    useEffect(
        () => {
            const timer = setTimeout(() => {
                console.log(`O incrementador foi alterado ${count}`);
            }, 2000);

            return () =>{
                clearTimeout(timer);
            };
        }); 

    // 4 - fetch com useEffect  requisicoes  
    
    useEffect(
        () => {
            fetch("https://api.github.com/users/PaivaJudson")
            .then((res) => res.json())
            .then((json) => setUser(json));
        }, []);    

    return (
        <div className="App">
            <div>
                <button onClick={() => setCount(preventCount => preventCount + 1)}>Renderizar Count</button>
                <p>{count}</p>
            </div>
            <div>
                <button onClick={() => setContB(preventContB => preventContB + 1)}>Renderizar Cont</button>
                <p>{contB}</p>
            </div>
            {user && (
                <div>
                <h1>Dados do Usuário</h1>
                <h2>Nome: {user.name}</h2>
                <p>Morada: {user.location}</p>
                <p>Ocupação: {user.bio}</p>
                <img src={user.avatar_url} alt="Fotografia de Perfil" />
            </div>
            )}
        </div>
    );
}

export default UseEffect;