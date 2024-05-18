/*
#2.2 useClick

작동 순서
1. componentWillMount
: render 전에 componentWillMount 실행, => element 의 click 이벤트 없애줌

2. render
: 페이지가 redering 됨
3. componentDidMount
rendering이 된 후에 componentDidMount 실행 => click 이벤트 등록 'sayHello'

4. []
dependency 에 아무것도 들어가있지 않음 => 페이지가 rendering 될 때 한 번만 동작

결과 : 클릭 이벤트 지우고 - 렌더링 하고 - 클릭이벤트 등록하고 - 한번만 로딩되니까 중복으로 클릭이벤트 등록 될 일 없음

정리
- reference는 component의 어떤 부분을 선택할 수 있는 방법, 
- 모든 component는 reference prop을 가지고 있음.
- htmlTag에 ref={이름} 와 같이 사용
- reference는 {current: HTMLHeadingElement} 의 형식으로 값을 반환
- useEffect에서 return한 함수는 componentWillUnmount 때 호출
- 참고로 useEffect에서 return한 함수를 cleanup function(클린업 함수)라고 부른다.
*/
import React, { useEffect, useRef } from 'react';

const useClick = (onClick) => {
	const ref = useRef();//useRef()는 document. getElementById() 와 같은 기능
	useEffect(() => {
	const element = ref;
	if (element.current) {//useEffect가 componentDidMount, componentDidUpdate 되었을때 단 한번 불러오는 부분
	element.current.addEventListener("click", onClick);
	}
	return () => {//componentWillUnMount때 호출, component가 mount 되지 않았을때 eventListener가 배치되지 않도록 하기위한 부분.
		if (element.current) {
			element.current.removeEventListener("click", onClick);
		}
	};
	}, []);
	if (typeof onclick !== "object") {
		return;
	}
		return ref;
};

const HookUseClick = () => {
	const sayHello = () => console.log("say hello");
	const title = useClick(sayHello);
	return (
		<div>
            <h1>useClick</h1>
			<h2 ref={title}>Click me ! and go to console.log</h2>
		</div>
	);
};

export default HookUseClick;