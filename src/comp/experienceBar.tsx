import style from '../style/components/exp.module.css'


export function ExperienceBar() {

    return (

        <div className={style.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: '50%' }} />
                <span className={style.userExperience} style={{ left: '50%' }}>{'50%'}</span>
            </div>
            <span>100 xp</span>
        </div>

    );
}