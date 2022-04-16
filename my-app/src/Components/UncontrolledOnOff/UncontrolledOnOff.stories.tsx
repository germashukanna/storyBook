import React from 'react';
import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
};

const callback = action ('on or off clicked')

export const OnMode = () => <UncontrolledOnOff onClick={callback}/>
export const OffMode = () => <UncontrolledOnOff onClick={callback}/>

