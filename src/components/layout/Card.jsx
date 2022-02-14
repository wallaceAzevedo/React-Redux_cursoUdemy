import './Card.css';
import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

    const CardStyle = {
        backgroundColor: props.color || '#f00',
        borderColor: props.color || '#f00',
    }
    return(
        <div className='Card' style={CardStyle}>
            <div className='Titulo'>{props.titulo}</div>
            <div className='Content'>
                {props.children}
            </div>
        </div>
    )
}