import style from '../style/components/profile.module.css'

export function Profile(){
    return(
        <div className={style.profileContainer}>
            <img src="https://github.com/aureliolk.png"  alt=" Aurélio Castro "/>
            <div>
                <strong> Aurélio Castro </strong>
                <br></br>
                <span>Developer FrontEnd</span>
                <p> 
                    <img src="icons/level.svg" alt='level'/>
                    <span>Level 1</span>     
                </p>
            </div>
        </div>
    )
}
