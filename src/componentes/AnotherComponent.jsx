import React from "react";

const AnotherComponent = ()=>{
    
    function handClick(){
        console.log('clicou no botao!');
    }
    
    return(
        <div>
            <p>Segundo Componente</p>
            <button onClick={handClick}>Executar</button>
        </div>
    );
};

export default AnotherComponent;