//#2.0 Introduction to useEffect
import React, { useEffect, useState }from 'react';

/* 함수형 */
const HookUseEffect = () => {
    const sayHello = () => console.log('hello');
    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);
    useEffect(sayHello, [number]);//number 실행할때만 console에 hello 찍힘. number2는 한번만 실행.
    return (
        <>
            <h1>useEffect</h1>
            <button onClick={() => setNumber(number + 1)}>{number}</button>
            <button onClick={() => setNumber2(number2 + 1)}>{number2}</button>
        </>
    )
} 
export default HookUseEffect;