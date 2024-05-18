/*
2.5 useFadeIn
custom hook, 화면에 있는 요소에 대해 fade-in 효과를 적용하는 예제

useFadeIn 훅은 duration과 delay 값을 인자로 받으며, duration은 페이드인 효과가 적용될 시간, delay는 페이드인 효과가 적용되기까지의 시간을 나타냅니다.

훅 내부에서는 useRef 훅을 사용하여 요소에 대한 참조를 생성하고, 
useEffect 훅을 사용하여 화면이 렌더링된 후에 해당 요소에 대해 opacity와 transition 속성을 변경합니다. 
opacity 값이 1로 설정되면서 요소가 서서히 나타나는 페이드인 효과가 적용됩니다.

마지막으로, useFadeIn 훅은 ref와 style 속성을 반환하며, 이를 활용하여 요소에 해당 페이드인 효과를 적용할 수 있습니다. 
이 예제에서는 h1과 p 태그에 대해 fadeInH1과 fadeInP를 만들어 이를 해당 태그의 속성으로 전달하여, 
화면에 요소가 나타나면서 페이드인 효과가 적용됩니다.
*/
import React, { useEffect, useRef } from 'react';

const useFadeIn = (duration = 1, delay = 0) => {
	const element = useRef();
	useEffect(() => {
		if(element.current){
			const { current } = element;
			current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
			current.style.opacity = 1;
		}
	}, []);
	if(typeof duration !== "number" || typeof delay !== "number"){
		return;
	}
	return { ref: element, style: {opacity : 0} };
};

const HookUseFadeIn = () => {
	const fadeInH1 = useFadeIn(1, 2)
	const fadeInP = useFadeIn(4, 3)
	return (
		<div>
			<h1 {...fadeInH1}>useFadeIn</h1>
			<p {...fadeInP}>3s 뒤, 4s동안 fadeIn</p>
		</div>
	);
};

export default HookUseFadeIn;