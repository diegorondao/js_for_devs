import React from 'react'
import styles from './index.module.css'

type Props = {
  children: React.ReactNode
}

const index = ({children}: Props) => {

  const handlerCloseModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector('#modal') 
    modal!.classList.add('hide')
  }

  return (
    <div id='modal' className="hide">
        <div className={styles.fade} onClick={handlerCloseModal}></div>
        <div className={styles.modal}>
            <h2>texto modal</h2>
            {children}
        </div>
    </div>
  )
}

export default index