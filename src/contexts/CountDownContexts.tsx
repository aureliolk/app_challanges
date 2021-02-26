import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallangeContexts } from '../contexts/ChallangeContexts'

interface CoutDownData {

    active: boolean
    hasFinished: boolean
    minute: number
    seconds: number
    startCountDown: () => void
    resetCountDown: () => void

}

interface CountDownChildrenProps {
    children: ReactNode
}



export const CountDownContexts = createContext({} as CoutDownData)
export function CountDownProvider({ children }: CountDownChildrenProps) {

    const { startNewChallanges } = useContext(ChallangeContexts)
    let timeCountDown: NodeJS.Timeout
    
    const [active, setActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)
    const [time, setTime] = useState(0.1 * 60)
    const minute = Math.floor(time / 60)
    const seconds = time % 60

    function startCountDown() {
        setActive(true)
    }

    function resetCountDown() {
        clearTimeout(timeCountDown)
        setActive(false)
        setTime(0.1 * 60)
        setHasFinished(false)
    }

    useEffect(() => {
        if (active && time > 0) {
            timeCountDown = setTimeout(() => {
                setTime(time - 1)
            }, 1000);
        } else if (time == 0) {
            setActive(false)
            setHasFinished(true)
            startNewChallanges()
        }


    }, [active, time])


    return (
        <CountDownContexts.Provider value={{
            active,
            hasFinished,
            minute,
            seconds,
            startCountDown,
            resetCountDown
        }} >
            {children}
        </CountDownContexts.Provider>
    )
}