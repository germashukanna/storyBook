import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";

const CategoryObj = (categoryName: string) => ({
    table: {
        category: categoryName
    },
})

export default {
    title: 'Accordion',
    component: Accordion,
    color:{
        control: 'color',
        table: {
            ...CategoryObj("Color")
        },
        onClick:{
            ...CategoryObj("Event")
        },
        collapsed:{...CategoryObj("Main")},
        titleValue:{...CategoryObj("Main")}
    }
};

const callback = action ('Accordion mode change event fired')
const onClickcallback = action ('oma item wos clicked')


const TempLate: Story<AccordionPropsType> = (args) => <Accordion{...args}/>

const callbackProps = {
    onClick: callback,
    onChange: onClickcallback
}

const MenuCollapsedMode = TempLate.bind({})
MenuCollapsedMode.args={
    ...callbackProps,
    titleValue: "Menu",
    collapsed: true,
    items: []
}

const UsersUncollapsedMode = TempLate.bind({})
UsersUncollapsedMode.args={
    ...callbackProps,
    titleValue: "Users",
    collapsed: false,
    items: [{title: "Ann", value: 1}, {title: "Alex", value: 2},{title: "Meggi", value: 3}, {title: "Dima", value: 4}]

}

export const ModeCharging: Story<AccordionPropsType> = (args) => {
    const [value, setvalue] = useState<boolean>(true)
    return <Accordion {...args} collapsed={value} onClick={() => setvalue(!value)} onChange={onClickcallback} items={[{title: "Ann",
        value: 1}, {title: "Alex", value: 2},{title: "Meggi", value: 3}, {title: "Dima", value: 4}]}/>
}

ModeCharging.args={
    titleValue: "Users",

}
