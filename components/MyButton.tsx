import { useState } from "preact/hooks"
export function MyButton(){
    const [value, setValue] = useState(0)
    return <button onClick={()=> setValue(value + 1)}>{value}</button>
}