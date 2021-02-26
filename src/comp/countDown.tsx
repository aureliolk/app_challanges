
import { useContext } from 'react';
import { CountDownContexts } from '../contexts/CountDownContexts';
import style from '../style/components/countDown.module.css'



export function CountDown() {
    
    const {hasFinished,active,minute,resetCountDown,seconds,startCountDown} = useContext(CountDownContexts)

    const [minuteRight, miunteLeft] = String(minute).padStart(2, '0').split('');
    const [secondRight, secondLeft] = String(seconds).padStart(2, '0').split('');


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