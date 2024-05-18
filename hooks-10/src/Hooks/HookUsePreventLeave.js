/*
#2.3 usePreventLeav 
custom hook을 만들기

사용자가 페이지를 떠날 때 발생하는 beforeunload 이벤트를 가로채서 페이지를 떠나기 전에 확인 메시지를 보여주는 기능.
해당 컴포넌트를 사용하면 페이지를 떠나기 전에 사용자에게 경고 메시지를 띄워서 실수로 페이지를 떠나는 것을 방지할 수 있다.
*/
import React from 'react';

const Hook = () =>{
    const listener = event => {
        event.preventDefault();
        event.returnValue = "";
    };
    const enablePrevent = () => window.addEventListener("beforeunload", listener)//이벤트를 등록
    const disablePrevent = () =>
        window.addEventListener("beforeunload", listener);//등록된 이벤트를 삭제
    return {enablePrevent, disablePrevent}
};

const HookUsePreventLeave= () => {
    const { enablePrevent, disablePrevent } = Hook();
    return (
        <div>
            <h1>usePreventLeave</h1>
            <button onClick={enablePrevent}>Protect</button>
            {/* Protect 버튼을 누르면 enablePrevent 함수를 실행하여 beforeunload 이벤트를 등록 */}
            <button onClick={disablePrevent}>UnProtect</button>
            {/* UnProtect 버튼을 누르면 disablePrevent 함수를 실행하여 등록된 이벤트를 삭제 */}
        </div>
    )
};

export default HookUsePreventLeave;