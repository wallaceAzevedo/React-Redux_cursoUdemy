import React from "react";
import IndiretaFilho from "./IndiretaFilho";

// eslint-disable-next-line import/no-anonymous-default-export
export default props=> {
    
    //pasando os props no elemento pai aula 34 11 minutos e 40 segundos
    let nome = '?'
    let idade = 0
    let nerd = false
        
    // nome idade nerd
    function fornecerInformacoes(nomeParam, idadeParam, nerdParam){
        nome = nomeParam
        idade = idadeParam
        nerd = nerdParam
        
        console.log(nomeParam, idadeParam, nerdParam)
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