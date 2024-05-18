/*
#2.4 useBeforeLeave
custom hook, 마우스가 브라우저 윈도우를 벗어나기 전에 호출될 함수를 등록하는 예제

useEffect를 사용하여 document.addEventListener로 "mouseleave" 이벤트를 등록하고, 
이벤트가 발생할 때 호출될 콜백 함수 handle을 작성합니다. 
마우스가 윈도우를 벗어나면 clientY 값을 확인하여 브라우저 윈도우의 위쪽 경계선을 벗어난 경우, 
즉 위쪽에서 벗어나는 경우에만 onBefore 함수를 호출합니다.

useBeforeLeave를 호출하는 HookUseBeforeLeave 컴포넌트는 begForLife 함수를 등록하여 
마우스가 브라우저 윈도우를 벗어나기 전에 경고 메시지를 표시합니다.
*/
import React, { useEffect } from 'react';

const useBeforeLeave = (onBefore) => {
	useEffect(() => {
		document.addEventListener("mouseleave", handle);
		return () => document.removeEventListener("mouseleave", handle);//useEffect의 cleanup 함수를 이용하여, 컴포넌트가 언마운트 될 때 등록된 이벤트를 해제하도록 처리
	}, []);
	if(typeof onBefore !== "function"){
		return;
	}
	const handle = event => {
		const { clientY } = event;
		if(clientY <= 0){
			onBefore();                 
		}
	};
};

const HookUseBeforeLeave = () => {
	const begForLife = () => console.log("Pls dont leave");
	useBeforeLeave(begForLife);
	return (
		<div>
			<h1>useBeforeLeave</h1>
			<span>checking the console.log ! <br/>마우스가 상단 브라우저를 벗어나는 것을 감지</span>
		</div>
	);
};

export default HookUseBeforeLeave;