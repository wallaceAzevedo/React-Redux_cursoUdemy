import React from "react";
import DiretaFilho from "./DiretaFilho";


// eslint-disable-next-line import/no-anonymous-default-export
export default props=> {
   
    return (
        <div>
            <DiretaFilho nome="Dinosauro" idade={20} nerd={true} />
            <DiretaFilho nome="Ulalau Filho" idade={17} nerd={false} />
        </div>
    )
}