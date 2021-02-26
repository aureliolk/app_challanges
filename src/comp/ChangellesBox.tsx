import { useContext } from 'react';
import { ChallangeContexts } from '../contexts/ChallangeContexts';
import { CountDownContexts } from '../contexts/CountDownContexts';
import style from '../style/components/ChangellesBox.module.css'

export function ChangellesBox() {
    const {activeChallanges, resetChallanges, completeChallanges} = useContext(ChallangeContexts)
    const {resetCountDown} = useContext(CountDownContexts)

    function fail(){
        resetChallanges()
        resetCountDown()
    }

    function sucess(){
        completeChallanges()
        resetCountDown()
    }

    return (
        <div className={style.ChangellesBoxContainer}>
            {activeChallanges ? (
                <div className={style.ChangellesBoxActive}>
                    <header> Ganhe {activeChallanges.amount} xp</header>
                    <main>
                        <object data={`icons/${activeChallanges.type}.svg`} type="image/svg+xml" />
                        <strong>Novo desafio</strong>
                        <p>{activeChallanges.description}</p>
                    </main>
                    <footer>
                        <button 
                        type='button'
                        onClick={fail}
                        className={style.buttonFailed}>
                            Falhei
                        </button>
                        <button 
                        type='button'
                        onClick={sucess}

                        className={style.buttonFinished}>
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={style.ChangellesBoxContainerNotActive}>
                    <strong>Finalize o ciclo para receber novos desafios!</strong>
                    <p>
                        <object type="image/svg+xml" data="icons/level-up.svg" />
                        <span>Avance de level completando os desafios.</span>
                    </p>
                </div>
            )}
        </div>
    );
}