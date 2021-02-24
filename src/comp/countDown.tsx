import { useContext, useEffect, useState } from 'react'
import { ChallangeContexts } from '../contexts/ChallangeContexts'
import style from '../style/components/countDown.module.css'

let timeCountDown: NodeJS.Timeout


export function CountDown() {
    
    const  {startNewChallanges} = useContext(ChallangeContexts)
    const [active, setActive] = useState(false)
    const [hasFinished, sethasFinished] = useState(false)
    const [time, setTime] = useState(0.1 * 60)
    const minute = Math.floor(time / 60)
    const seconds = time % 60

    const [minuteRight, miunteLeft] = String(minute).padStart(2, '0').split('');
    const [secondRight, secondLeft] = String(seconds).padStart(2, '0').split('');


    function startCountDown() {
        setActive(true)
    }

    function resetCountDown() {
        clearTimeout(timeCountDown)
        setActive(false)
        setTime(0.1 * 60)
    }

    useEffect(() => {
        if (active && time > 0) {
            timeCountDown = setTimeout(() => {
                setTime(time - 1)
            }, 1000);
        } else if (time == 0) {
            setActive(false)
            sethasFinished(true)
            startNewChallanges()
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
            {hasFinished ? (
                <button
                    disabled
                    className={style.buttonCoutdown}>
                    <span>Ciclo Finalizado</span> <object type="image/svg+xml" data="icons/renewable.svg"></object>
                </button>
                
            ) : (
                    <>
                        {active ? (
                            <button type='button'
                                onClick={resetCountDown}
                                className={`${style.buttonCoutdown} ${style.buttonCoutdownActive}`}>
                                <span>Abandonar Ciclo</span><object type="image/svg+xml" data="icons/close-cross-symbol-in-a-circle.svg"></object>
                            </button>
                        ) : (
                                <button type='button'
                                    onClick={startCountDown}
                                    className={style.buttonCoutdown}>
                                    <span>Iniciar Ciclo</span><object type="image/svg+xml" data="icons/running-man.svg"></object>
                                </button>
                            )}

                    </>
                )}
        </>
    )
}