import React from "react";

function FirstComponent() {
    
    const nome = "Judson Paiva";
    
    return(
        <div className="firstComponent">
            <p>Primeiro Componente</p>
            <h2>Nome: {nome}</h2>
        </div>
    );
}

export default FirstComponent;
