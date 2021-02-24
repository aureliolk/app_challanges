import { useContext } from 'react'
import { ChallangeContexts } from '../contexts/ChallangeContexts'
import style from '../style/components/compleChallenges.module.css'

export function CompleteChangelles(){
    const {challangesComplete} = useContext(ChallangeContexts)
    return(
        <div className={style.challangesContainer}>
            <span>Desafios Completos</span>
            <span>{challangesComplete}</span>
        </div>
    )
}