import { createContext, ReactNode, useState } from 'react'
import ChallangesJson from '../../challenges.json'

interface Challange {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChangellesProviderProprs {
    children: ReactNode
}

interface ChallangeContextsList {
    level: number
    currentExp: number
    changellesExp: number
    challangesComplete : number
    activeChallanges: Challange
    levelUp : () => void
    startNewChallanges : () => void
    resetChallanges: () => void
 }

export const ChallangeContexts = createContext({} as ChallangeContextsList)


export function ChallangeContextsProvider({ children }: ChangellesProviderProprs) {

    const [level, setLevel] = useState(1)
    const [currentExp, setCurrentExp] = useState(30)
    const [challangesComplete, setChallangesComplete] = useState(0)
    const [activeChallanges, setChangeChallanges] = useState(null)
    const changellesExp = Math.pow((level + 1)*4,2) 

    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallanges() {
        const randoChallange = Math.floor(Math.random() * ChallangesJson.length)
        const challanges = ChallangesJson[randoChallange]
        setChangeChallanges(challanges)
    }

    function resetChallanges(){
        setChangeChallanges(null)
    }
    return (
        <ChallangeContexts.Provider value={{
            level,
            changellesExp,
            currentExp,
            challangesComplete,
            activeChallanges,
            levelUp,
            startNewChallanges,
            resetChallanges
        }}>
            {children}
        </ChallangeContexts.Provider>
    )
}