import React, {useEffect, useState, KeyboardEvent} from "react";
import s from './Select.module.css'

type ItemType = {
    title: string,
    value: any
}


type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectItems = props.items.find(i => i.value === props.value);
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue);
useEffect(() => {
    setHoveredElementValue(props.value)
}, [props.value])

    const togleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value);
        togleItems();
    }

    const onKeyUp = (event: KeyboardEvent<HTMLDivElement>) => {
    if(event.key === "ArrowDown" || event.key === "ArrowUp"){
        for(let i=0; i<props.items.length; i++){
            if (props.items[i].value === hoveredElementValue) {
                const pretendentElement = event.key === "ArrowDown"
                    ? props.items[i + 1]
                    : props.items[i - 1];

                if (pretendentElement) {
                    props.onChange(pretendentElement.value)
                    return
                }
            }
            }
        if (!selectItems) {
            props.onChange(props.items[0].value)
        }
        }
    if(event.key === "Enter" || event.key === "Escape"){
        setActive(false)
    }
}

    return (
        <>
            {/*<select>*/}
            {/*    <option value={"1"}>Minsk</option>*/}
            {/*    <option value={"2"}>Vitebsk</option>*/}
            {/*    <option value={"3"}>Novogrudok</option>*/}
            {/*</select>*/}
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={togleItems}>{selectItems && selectItems.title}</span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(i => <div className={s.item + " " + (hoveredItem === i ? s.selected : "")}
                                                   onMouseEnter={()=> {setHoveredElementValue(i.value)}}
                                                   key={i.value}
                                                   onClick={() => {
                                                       onItemClick(i.value)
                                                   }}
                        >{i.title}</div>)}
                    </div>
                }
            </div>
        </>
    )
}