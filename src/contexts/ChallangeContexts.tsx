import { createContext, ReactNode, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import ChallangesJson from '../../challenges.json'
import { LevelUpModal } from '../comp/LevelUpModal'

interface Challange {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChangellesProviderProprs {
    children: ReactNode
    level: number
    currentExp: number
    challangeCompletes: number
}

interface ChallangeContextsList {
    level: number
    currentExp: number
    changellesExp: number
    challangesComplete: number
    activeChallanges: Challange
    levelUp: () => void
    startNewChallanges: () => void
    resetChallanges: () => void
    completeChallanges: () => void
    closeModal: ()=> void
}




export const ChallangeContexts = createContext({} as ChallangeContextsList)



export function ChallangeContextsProvider({ children, ...rest }: ChangellesProviderProprs) {

    const [level, setLevel] = useState(rest.level ?? 1)
    const [currentExp, setCurrentExp] = useState(rest.currentExp ?? 0)
    const [challangesComplete, setChallangesComplete] = useState(rest.challangeCompletes ?? 0)
    const [activeChallanges, setChangeChallanges] = useState(null)
    const [levelUpModal, setlevelUpModal] = useState(false)

    const changellesExp = Math.pow((level + 1) * 4, 2)

    useEffect(() => {
        Notification.requestPermission()
    }, [])

    useEffect(() => {
        Cookies.set('level', level.toString())
        Cookies.set('currentExp', currentExp.toString())
        Cookies.set('challangesComplete', challangesComplete.toString())
    }, [level, currentExp, challangesComplete])

    
    function levelUp() {
        setLevel(level + 1)
        setlevelUpModal(true)
    }

    function closeModal(){
        setlevelUpModal(false)
    }

    function startNewChallanges() {
        const randoChallange = Math.floor(Math.random() * ChallangesJson.length)
        const challanges = ChallangesJson[randoChallange]
        setChangeChallanges(challanges)
        new Audio('notification.mp3').play()
        if (Notification.permission == 'granted') {
            new Notification('Novo desafio', {
                body: `Desafio valendo ${challanges.amount} de xp `
            })
        }
    }

    function resetChallanges() {
        setChangeChallanges(null)
    }

    function completeChallanges() {
        if (!activeChallanges) {
            return
        }

        const { amount } = activeChallanges

        let finalExperience = currentExp + amount


        if (finalExperience >= changellesExp) {
            finalExperience = finalExperience - changellesExp
            levelUp()
        }

        setCurrentExp(finalExperience)
        setChangeChallanges(null)
        setChallangesComplete(challangesComplete + 1)
    }




    return (
        <ChallangeContexts.Provider value={{
            level,
            changellesExp,
            currentExp,
            challangesComplete,
            activeChallanges,
            closeModal,
            levelUp,
            startNewChallanges,
            resetChallanges,
            completeChallanges
        }}>
            {children}
            {levelUpModal && <LevelUpModal/>}
        </ChallangeContexts.Provider>
    )
}