import React from "react";
import "./App.css"

import Card from "./components/layout/Card";

import Familia from "./components/basico/Familia";
import FamiliaMembro from "./components/basico/FamiliaMembro";
import Aleatorio from "./components/basico/Aleatorio";
import ComParametro from "./components/basico/ComParametro";
import Primeiro from "./components/basico/Primeiro";
import Fragmento from "./components/basico/Fragmento"
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";

// eslint-disable-next-line import/no-anonymous-default-export
export default ()=>{
    return(
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="08 - Renderização Condicional" color="#982395">
                    <ParOuImpar numero={2}/>
                    <UsuarioInfo usuario={{ nome: 'Teobaldo'}}/>
                    {/*Caso não passar um Usuario vai imprimir um seja bem vindo amigão */}
                    <UsuarioInfo />
                </Card>
                <Card titulo="07 - Repetição Produtos" color="#3A9AD9">
                        <TabelaProdutos/>
                </Card>
                <Card titulo="06 - Repetição" color="#FF4C65">
                        <ListaAlunos></ListaAlunos>
                </Card>
                <Card titulo="05 -Componentes com filhos" color="#00c8f8">
                    <Familia sobrenome=" Azevedo">
                        <FamiliaMembro nome="wallace"/>
                        <FamiliaMembro nome="Allan" />
                        <FamiliaMembro nome="Maria" />
                    </Familia>
                </Card>
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