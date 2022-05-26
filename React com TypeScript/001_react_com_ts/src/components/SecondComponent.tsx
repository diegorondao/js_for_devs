import React from "react"

interface Props {
    name: string
}

const SecondComponent = (props: Props) =>{
    return (
        <div>
            <p>Meu <b>{props.name}</b> com props</p>
        </div>
    )
}
export default SecondComponent