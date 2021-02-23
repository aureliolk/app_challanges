import { useState } from 'react'

interface buttonColor {
    children: string
    color: string
}

export function Button(props: buttonColor) {

    const [count, setCount] = useState(1)

    function increment() {
        setCount(count + 1)
    }

    return (
        <button
            type="button"
            style={{ backgroundColor: props.color, fontFamily:'Rajdhani',padding:'0.3rem 1rem', color:'white'}}
            onClick={increment}
            >
            {props.children} {count}
        </button>
    )
}
