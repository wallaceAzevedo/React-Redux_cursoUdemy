import React from 'react'

export default function ComParametro(props){
    return (
        <div>
            <h2> {props.titulo}</h2>
            <h3> {props.aluno} </h3>
            <h3> {props.nota} </h3>
        </div>
    )
}