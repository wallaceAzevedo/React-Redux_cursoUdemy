/*
aqui estamos prassando um props que se for verdadeiro ira rederizar caso contraio não
https://www.udemy.com/course/react-redux-pt/learn/lecture/19636792#overview
<if test={exp}>  
    <span>...</span>
    <span>...</span>
    <span>...</span>
</if>

*/
export default props => {
    if(props.test){
        return props.children
    } else {
        return false
    }
}