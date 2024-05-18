/*
#2.6 useScroll 

custom Hook, React 컴포넌트. 
윈도우 객체의 scroll 이벤트를 감지하고, 스크롤 위치에 따라 현재 스크롤의 x, y 좌표를 state로 저장. 
HookUseScroll 컴포넌트에서는 useScroll 커스텀 훅에서 반환된 y값을 사용하여, 
상단에 고정된 h1 태그의 색상을 스크롤 위치에 따라 변화시키고 있다. 
*/
import React, { useEffect, useState } from 'react';

const useScroll = () => {
	const [state, setState] = useState({
        x: 0,
        y: 0
    });
    const onScroll = () => {
        setState({ y : window.scrollY, x : window.scrollX })
    } 
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    return state;
};

const HookUseScroll = () => {
	const {y} = useScroll();
	return (
		<div style={{/*{ height: "1000vh" }*/}}>
            <h1>useScroll</h1>
            <span>스크롤 시 상단 우측의 텍스트 색상 변화를 봐주세요 :) !</span>
			<h1 style={{position:"fixed",right:30,top:0, color: y > 500 ? "red" : "blue"}}>useScroll</h1>
		</div>
	);
};

export default HookUseScroll;