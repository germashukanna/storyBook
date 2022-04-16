import React, {useState} from 'react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Select',
    component: Select,
}

// type ItemType = {
//     title: string,
//     value: any
// }
// type SelectPropsType = {
//     value: any
//     onClick: (value: any) => void
//     items: ItemType[]
// }

export const NewSelect = () => {
    const [value, setValue] = useState("2")

        return(
    <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: "1", title: "Minsk"},
                    {value: "2", title: "Vitebsk"},
                    {value: "3", title: "Novogrudok"},
                ]}/>
    </>
        )
}
export const SelectWithoutValue = () =>{
const [value, setValue] = useState(null)
    return(
    <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: "1", title: "Minsk"},
                    {value: "2", title: "Vitebsk"},
                    {value: "3", title: "Novogrudok"},
                ]}/>

    </>
    )
}
