import { useEffect, useState } from "react";

const Hooks = () => {

    let [idade, setIdade] = useState(28);

    function alterarIdade(){
        setIdade(31);
    }

    useEffect(
        () => {
            console.log("Eu reajo...");
        }
    );

    return (
        <>
            <p>Idade: {idade}</p>
            <button onClick={alterarIdade}>Alterar Idade</button>
        </>
    );

}

export default Hooks;