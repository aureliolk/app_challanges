import { useContext } from 'react';
import { ChallangeContexts } from '../contexts/ChallangeContexts';
import style from '../style/components/exp.module.css'


export function ExperienceBar() {
    const {currentExp, changellesExp} = useContext(ChallangeContexts)
    const porcentExp = Math.round(currentExp * 100) / changellesExp


    return (

        <div className={style.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${porcentExp}%` }} />
                
                <span className={style.userExperience} style={{ left: `${porcentExp}%` }}>{currentExp}</span>
            
            </div>
            <span>{changellesExp} xp</span>
        </div>

    );
}