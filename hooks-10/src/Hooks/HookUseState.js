//#1.0 Introduction to useState

import React, { useState }from 'react';
// import React from 'react';

/* 함수형 */
function HookUseState() {
    const [item, setItem] = useState(1);
    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);
    return (
        <div>
            <h1>useState</h1>
            <h2>count : {item}</h2>
            <button onClick = {incrementItem}>incrementItem</button>
            <button onClick = {decrementItem}>decrementItem</button>
        </div>
    );
};
export default HookUseState;

/* 클래스형 */
/*
class Uglystate extends React.Component{
    state = {
        item : 1
    }
    render(){
        const { item } = this.state;
        return (
            <div>
                <h1>Hello {item}</h1>
                <h2>Start editing to see some magic happen!</h2>
                <button onClick = {this.incrementItem}>incrementItem</button>
                <button onClick = {this.decrementItem}>decrementItem</button>
            </div>
        );
    }
    incrementItem = () =>{
        this.setState(state => {
            return {
                item : state.item + 1
            }
        })
    }
    decrementItem = () =>{
        this.setState(state => {
            return {
                item : state.item - 1
            }
        })
    }
}
export default Uglystate;
*/