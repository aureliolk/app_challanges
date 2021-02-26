import { useContext } from 'react'
import { ChallangeContexts } from '../contexts/ChallangeContexts'
import style from '../style/components/levelUpModal.module.css'

export function LevelUpModal(){
    
    const { level, closeModal} = useContext(ChallangeContexts)
    
    return(
        <div className={style.overlay}>
            <div className={style.container}>
                <header>{level}</header>
                <strong>Parabêns</strong>
                <p>Você alcançou um proxímo nivel</p>
                <button type='button' onClick={closeModal}>
                    <img src="icons/close.svg" alt="Fechar Modal" />
                </button>
            </div>
        </div>
    )
}