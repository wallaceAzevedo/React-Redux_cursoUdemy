import React from "react";
import FamiliaMembro from './FamiliaMembro'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{
    return(
        <div>
            <FamiliaMembro nome="wallace" sobrenome=" Azevedo"/>
            <FamiliaMembro nome="Allan" sobrenome={...props}/>
            <FamiliaMembro nome="Maria" sobrenome={props.sobrenome}/>
        </div>
    )
}