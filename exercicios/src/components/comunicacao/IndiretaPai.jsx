import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

// eslint-disable-next-line import/no-anonymous-default-export
export default props=> {
    //pasando os props no elemento pai aula 34 11 minutos e 40 segundos
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)
        
    // nome idade nerd
    function fornecerInformacoes(nome, idade, nerd){
        setNome (nome)
        setIdade (idade)
        setNerd (nerd)

    }
    return (
        <div>
            <span>{nome} </span>
            <span><strong> {idade} </strong></span>
            <span> {nerd ? 'Verdadeiro' : 'Falso'}</span>

            <div>Pai</div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}