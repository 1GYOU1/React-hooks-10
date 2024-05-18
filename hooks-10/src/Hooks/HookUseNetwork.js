/*
2.5 useNetwork
custom hook, 현재 브라우저의 온라인/오프라인 상태를 감지하여 그 상태를 반환.

useEffect 훅을 사용하고 window 객체에 "online"과 "offline" 이벤트를 등록하여 
상태가 변경될 때마다 handleChange 함수가 호출. 

handleChange 함수 내부에서는 
onChange 함수가 전달된 경우에는 온라인/오프라인 상태를 매개변수로 호출하고, 
현재 상태를 useState 훅으로 저장.

HookUseNetwork 컴포넌트에서는 useNetwork 훅을 사용하여 onLine 상태를 반환하고, 
handleNetworkChange 함수를 이용하여 현재 온라인/오프라인 상태가 변경될 때마다 콘솔에 로그를 출력. 

useNetwork 훅을 사용하여 현재 온라인/오프라인 상태를 표시하고, 
handleNetworkChange 함수를 사용하여 상태가 변경될 때마다 콘솔에 로그를 출력.
*/
import React, { useEffect, useState } from 'react';

const useNetwork = onChange => {
	const [status, setStatus] = useState(navigator.onLine);
	const handleChange = () => {
		if(typeof onChange === "function"){
			onChange(navigator.onLine);
		}
		setStatus(navigator.onLine);
	};
	useEffect(() => {
		window.addEventListener("online", handleChange);
		window.addEventListener("offline", handleChange);
		return () => {
			window.removeEventListener("online", handleChange);
			window.removeEventListener("offline", handleChange);
		};
	},[])
	return status;
};

const HookUseNetwork = () => {
	const handleNetworkChange = online => {
		console.log(online ? "We just went online" : "We are offline")
	};
	const onLine = useNetwork(handleNetworkChange);
	return (
		<div>
			<h1>useNetwork</h1>
			<h3>네트워크 감지 문구 : {onLine ? "Online" : "offline"}</h3>
			<span>checking the console.log !</span>
		</div>
	);
};

export default HookUseNetwork;