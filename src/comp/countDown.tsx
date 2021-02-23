import { Console } from 'console'
import { useEffect, useState } from 'react'
import style from '../style/components/countDown.module.css'

export function CountDown() {

    const [active, setActive] = useState(false)

    const [time, setTime] = useState(25 * 60)
    const minute = Math.floor(time / 60)
    const seconds = time % 60

    const [minuteRight, miunteLeft] = String(minute).padStart(2, '0').split('');
    const [secondRight, secondLeft] = String(seconds).padStart(2, '0').split('');

    const [nameButton, setNameButton] = useState(null)
    
    function startCountDown() {
        if(active != true){
            setActive(true)
        }else{
            setActive(false)
        }
    }


    useEffect(() => {
        if(active && time > 0){
            setTimeout(() => {
                setTime(time - 1)
            }, 1000);
        }

        if(active){
            setNameButton('PARAR')
        }else{
            setNameButton('INICIAR')
        }

    }, [active, time])

    return (
        <>
            <div className={style.countDownContainer}>
                <div>
                    <span>{minuteRight}</span>
                    <span>{miunteLeft}</span>
                </div>
                <div className={style.countSpace}> : </div>
                <div>
                    <span>{secondRight}</span>
                    <span>{secondLeft}</span>
                </div>
            </div>
            <button type='button' onClick={startCountDown} className={style.buttonCoutdown}>{nameButton}</button>
        </>
    )
}