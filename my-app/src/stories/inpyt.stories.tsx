import React, {ChangeEvent, ChangeEventHandler, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'input',
    // component: Button,
}
export const UncontrolledInput = () => <input/>;
export const TrackValueUncontrolledInput = () => {
    const [value, setValue] = useState("")
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue)
    }
    return <><input onChange={onChange}/> -{value}</>
}

export const GetValueUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null);
    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }
    return <><input ref={inputRef}/>
        <button onClick={save}>save</button>
        -{value}</>
}
export const ControlledInput1 = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChange}/>
}
// export const ControlledCheckbox = () => {
//     const [parentValue, setParentValue] = useState(true)
//     const onChange = (e: ChangeEvent<HTMLInputElement>) => {
//         setParentValue(e.currentTarget.checked)
//     }
//     return <input type="checkbox" checked={parentValue} onChange={onChange}/>
// }

// export const ControlledSelect = () => {
//     const [parentValue, setParentValue] = useState<string | undefined>(undefined)
//     const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
//         setParentValue(e.currentTarget.value)
//     }
//     return (
//         <select value={parentValue} onChange={onChange}>
//             <option>none</option>
//             <option value={"1"}>one</option>
//             <option value={"2"}>too</option>
//             <option value={"3"}>five</option>
//         </select>
//     )
// }

export const ControlledInput = () => <input value={"IT-incubator.by"}/>