import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props=> {

    const min = 50
    const max = 70
    const gerarIdade = () => parseInt(Math.random() * ( max - min )) + min
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={ e => props.quandoClicar('Fabio', gerarIdade(), true)}>
                Fornecer Informações
            </button>
        </div>
    )
}