import React, {useState} from "react";

export default {
    title: "useState demo"
}

function generateData(){
    console.log("generateData")
    return 1;
}

export const Exampl1 = () => {
    console.log("Exampl1");

    //const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState<number>(generateData)

    return <>
        <button onClick={() => {
            setCounter(state => state + 1)
        }}>+</button>
            {counter}

    </>
}