import styles from "../styles/Form.module.css"
import Cartao from "../components/Cartao"
import Link from "next/link"
import { useState } from "react"
import EntradaNumerica from "../components/EntradaNumerica"

export default function form() {
    const [qtdePortas, setQtdePortas] = useState(3)
    const [comPresente, setComPresente] = useState(1)

  return (
    <div className={styles.formulario}>
        <div>
            <Cartao bgcolor="#c0392c">
                <h1>Monty Hall</h1>
            </Cartao>
            <Cartao>
                <EntradaNumerica  text = "Quantas portas ?"
                    value={qtdePortas} 
                    onChange={novaQtde => setQtdePortas(novaQtde)}
                />
            </Cartao>
        </div>
        <div>
            <Cartao>
            <EntradaNumerica  text = "Porta com presente"
                    value={comPresente} 
                    onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)}
                />
            </Cartao>
            <Cartao bgcolor="#28a085">
                <Link href={`/jogo/${qtdePortas}/${comPresente}`} >
                    <h2 className={styles.link}>Iniciar</h2>
                </Link>
            </Cartao>
        </div>
    </div>
  )
}
