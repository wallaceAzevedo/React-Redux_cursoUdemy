/* eslint-disable import/no-anonymous-default-export */
/*
aqui estamos prassando um props que se for verdadeiro ira rederizar caso contraio não ate a aula 31
https://www.udemy.com/course/react-redux-pt/learn/lecture/19636792#overview
<if test={exp}>  
    <span>...</span>
    <span>...</span>
    <span>...</span>
</if>
*/
export default props => {
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]

    const ifChild = props.children.filter(child => {
        return child !== elseChild
    })

    if(props.test){
        return ifChild
    } else if(elseChild){
        return elseChild
    } else {
        return false
    }
}

export const Else = props => props.children