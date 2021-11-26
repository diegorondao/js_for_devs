import Titulo from '../../components/Titulo'

export default function usandoComponentTitulo(){
    return (
        <div>
            <Titulo
                principal="Págian de Cadastro"
                secundario="incluir, Excluir, Alterar coisas"
            />

            <Titulo
                principal="Págian de Cadastro"
                secundario="incluir, Excluir, Alterar coisas"
                pequeno = {true}

            />
        </div>
    )
}