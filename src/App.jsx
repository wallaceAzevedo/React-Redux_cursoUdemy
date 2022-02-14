import React from "react";
import "./App.css"
import Aleatorio from "./components/basico/Aleatorio";
import ComParametro from "./components/basico/ComParametro";
import Primeiro from "./components/basico/Primeiro";
import Fragmento from "./components/basico/Fragmento"

import Card from "./components/layout/Card";

// eslint-disable-next-line import/no-anonymous-default-export
export default ()=>{
    return(
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="04 -Desafio Aleatorio" color="#FA6900">
                    <Aleatorio min={1} max={60}/>
                </Card>
                <Card titulo=" 03 Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>
                <Card titulo="02 Com Parâmetros" color="#E8B71A">
                    <ComParametro 
                    titulo="situação"
                    aluno="Wallace"
                    nota={9.3}
                    />
                </Card>
                <Card titulo="01 Primeiro componente" color="#588C73">
                    <Primeiro />
                </Card>
            </div>
        </div>
    )
};