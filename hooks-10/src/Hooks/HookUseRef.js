import React, { useRef, useEffect } from 'react';

const HookUseRef = () => {
    const potato = useRef(); // getElementById()와 비슷한 느낌. 선택하는 데 사용. reference

    useEffect(() => {
        const timer = setTimeout(() => {
            if (potato.current) {
                potato.current.focus();
            }
        }, 3000);
        return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 클리어
    }, []); // 빈 배열을 두 번째 인자로 전달하여 마운트 시에만 실행

    return (
        <div>
            <h1>useRef</h1>
            <input ref={potato} placeholder="setTimeout focus 3000" />
        </div>
    );
};

export default HookUseRef;
