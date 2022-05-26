import React, { useContext } from 'react'
import { AppContext } from '../context'

const Context = () => {

    const details = useContext(AppContext)
  
    return (
       <>
        {details && (
            <div>
                <h4>Linguagem: {details.language}</h4>
                <h4>FW: {details.framework}</h4>
                <p>Quantidade: {details.projects}</p>
            </div>
        )}
       </>
    )
}

export default Context