import React from "react";
import "./App.css"
import Aleatorio from "./components/basico/Aleatorio";
import Card from "./components/layout/Card";

// eslint-disable-next-line import/no-anonymous-default-export
export default ()=>{
    return(
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="Exemplo Card">
                    <Aleatorio min={1} max={60}/>
                </Card>
                <Card titulo="Exemplo Card">
                    <Aleatorio min={1} max={60}/>
                </Card>
                <Card titulo="Exemplo Card">
                    <Aleatorio min={1} max={60}/>
                </Card>
            </div>
        </div>
    )
};