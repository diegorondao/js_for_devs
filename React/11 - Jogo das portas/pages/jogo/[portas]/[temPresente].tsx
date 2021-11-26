import styles from '../../../styles/jogo.module.css'
import { useEffect, useState } from "react";
import Porta from '../../../components/Porta';
import { atualizarPortas, criarPortas } from "../../../functions/portas";
import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Jogo() {
  const router = useRouter()

  const [valido, setValido] = useState(false)
  const [portas, setPortas] = useState(criarPortas(4, 2))


  useEffect(() => {
    const portas = + router.query.portas
    const temPresente = + router.query.temPresente

    const qtdePortaValida = portas >= 3 && portas <= 100
    const temPresenteValido = temPresente >= 1 && temPresente <= portas
    
    setValido(qtdePortaValida && temPresenteValido)
  },[portas])


  useEffect(() => {
    const portas = + router.query.portas
    const temPresente = + router.query.temPresente
    setPortas(criarPortas(portas, temPresente))    
  },[ router?.query])
  
  function renderizarPortas() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta}
        onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
    })
  }

  return (
    <div className={styles.jogo}>
        <div className={styles.portas}>
            {valido ?
                renderizarPortas() :
                <h2>Dados Inválidos</h2>
            }
        </div>
        <div className={styles.botoes}>
            <Link href="/">
                <button>Reiniciar Jogo</button>
            </Link>
      </div>
    </div>
  )
}
