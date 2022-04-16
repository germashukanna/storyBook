import React from "react";

type ItemType={
    title: string,
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick:()=>void
    /**
     * optional color of header text
     */
    color?: string
    items: ItemType[]
    onChange: (value: any)=> void
}

export const Accordion = (props: AccordionPropsType) => {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick} color={props.color}/>
            {!props.collapsed && <AccordionBody onChange={props.onChange} items={props.items}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick:()=>void
    color?: string
}

export type AccordionBodyPropsType = {
    items: ItemType[]
    onChange: (value: any)=> void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering')
    return <h3 style={{color: props.color ? props.color : "black"}}
        onClick={(e) => props.onClick()} >{props.title}</h3>
}

const AccordionBody = (props:AccordionBodyPropsType) => {
    console.log('AccordionBody rendering')
    return <ul>
        {props.items.map( (i, index) => <li onChange={() => {props.onChange(i.value)}} key={index}>{i.title}</li>)}
    </ul>
}