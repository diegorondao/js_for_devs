export default function jsx4(){
    const subtitulo = "estou no JS"
    return  (
        <div>
            <h1> Integração JS e JSX</h1>
            <h1>{subtitulo}</h1>
            <h1>{retornaValor()}</h1>
        </div>
    )
}


function retornaValor(){
    return "Alô da function"
}