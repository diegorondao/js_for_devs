import styles from "./integracao2.module.css"

export default function integracao (){
    return (
        <div>
            <div className={styles.vermelha}>Text #001</div>
            <div className={styles.azul}>Text #002</div>
            <div className={styles.branca}>Text #003</div>
        </div>
    )
}