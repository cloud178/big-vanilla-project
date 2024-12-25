import React, {useState} from 'react';
import {AddressType} from "../02/02_02";
import {LessonsType} from "./destructuring.test";

export type ManType = {
    name: string
    age: number
    lessons: LessonsType[]
    address: AddressType
}

type ManComponentType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

function useCustomState (defaultValue: string) {
    return [defaultValue, function(){}]
}

function useCustomState2 (defaultValue: string) {
    return {message: defaultValue, setMessage: function(){}}
}

// export const ManComponent: React.FC<ManComponentType> = ({ title, man, ...props }) => {
export const ManComponent: React.FC<ManComponentType> = (props) => {
    const {title, man, ...restProps} = props;
    // const { title, man } = props;
    // const {name} = props.man;

    const [message, setMessage] = useCustomState('hello')

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            {/*<div>{props.car.model}</div>*/}
            <div>{restProps.car.model}</div>
            <div>{man.name}</div>
        </div>
    );
};
