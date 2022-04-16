import React, {useReducer, useState} from "react";
import {reducer, TOGGLE_CONSTANT} from "./reducer";

type UncontrolledAccordionPropsType = {
    titleValue: string
}



export const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {
    // let [collapsed, setCollapsed] = useState(true)
    let [state, dispatch] = useReducer(reducer, { collapsed: false})

    return (
        <div>
            <UncontrolledAccordionTitle title={props.titleValue} onClick={()=>{dispatch({type: TOGGLE_CONSTANT})}}/>
            {/*<button onClick={()=>setCollapsed(!collapsed)}>TOGGLE</button>*/}
            {state.collapsed && <UncontrolledAccordionBody/>}
        </div>
    )
}


type UncontrolledAccordionTitlePropsType = {
    title: string
    onClick:()=>void
}

const UncontrolledAccordionTitle = (props: UncontrolledAccordionTitlePropsType) => {
    return <h3 onClick={props.onClick}>{props.title}</h3>
}


const UncontrolledAccordionBody = () => {
    console.log('UncontrolledAccordionBody rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}