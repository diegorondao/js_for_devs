export default function Titulo(props){
    console.log(props)
    return props.pequeno ? (
        <div>            
            <p>{props.principal}</p>
            <p>{props.secundario}</p>          
        </div>
    ) : (
        <div>
            <h1>{props.principal}</h1>
            <h2>{props.secundario}</h2>
        </div>  
    )
}