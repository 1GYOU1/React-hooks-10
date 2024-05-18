/*
#2.6 useFullscreen

custom Hook, React 컴포넌트. 

useFullscreen은 callback 함수를 인자로 받아서 element, triggerFull, exitFull 세 가지를 반환합니다. 이 커스텀 훅은 전달받은 callback 함수를 사용하여, 전체화면 모드로 전환할 때와 나갈 때의 동작을 추가로 정의할 수 있도록 합니다.

triggerFull 함수는 element가 존재하는 경우 element.current를 전체화면 모드로 전환합니다. 
만약 전달된 callback 함수가 존재하면 true 값을 전달하여 실행합니다.

exitFull 함수는 전체화면 모드에서 나가게 하는 기능을 제공합니다. 
이 함수는 document.exitFullscreen()를 호출하여 현재 전체화면 모드를 해제합니다. 
만약 전달된 callback 함수가 존재하면 false 값을 전달하여 실행합니다.

HookUseFullscreen 컴포넌트는 useFullscreen 훅을 사용하여 element, triggerFull, exitFull을 반환받아서, 전체화면 모드로 전환할 때와 나갈 때의 동작을 추가로 정의합니다.

이 컴포넌트는 이미지와 버튼을 렌더링하고 있습니다. 이미지는 element 속성에 대한 참조로 설정되어 있으며, 전체화면 모드가 아닐 때는 이미지 위에 버튼이 나타납니다. 버튼을 누르면 triggerFull 함수가 호출되어 전체화면 모드로 전환됩니다. 전체화면 모드에서는 버튼이 보이지 않습니다. 대신, 전체화면 모드를 해제하는 기능을 제공하는 버튼이 이미지 아래쪽에 나타납니다. 이 버튼을 누르면 exitFull 함수가 호출되어 전체화면 모드를 해제합니다.
*/
import React, { useRef, useState, useEffect } from 'react';

const useFullscreen = (callback) => {
	const element = useRef();
    const [isFullscreen, setIsFullscreen] = useState(false);

    const triggerFull = () => {
        if(element.current){
            element.current.requestFullscreen()
            .then(() => {
                setIsFullscreen(true);
                if(callback && typeof callback === "function"){
                    callback(true);
                }
            });
        }
    }

    const exitFull = () => {
        if(document.fullscreenElement){
            document.exitFullscreen()
            .then(() => {
                setIsFullscreen(false);
                if(callback && typeof callback === "function"){
                    callback(false);
                }
            });
        }
    }

    useEffect(() => {
        const onChange = () => {
            if (!document.fullscreenElement) {
                setIsFullscreen(false);
                if(callback && typeof callback === "function"){
                    callback(false);
                }
            }
        };
        document.addEventListener("fullscreenchange", onChange);
        return () => {
            document.removeEventListener("fullscreenchange", onChange);
        };
    }, [callback]);

    return { element, triggerFull, exitFull, isFullscreen };
};

const HookUseFullscreen = () => {
    const onFullS = (isFull) => {
        console.log(isFull ? "We are full" : "We are small");
    }
    const { element, triggerFull, exitFull, isFullscreen } = useFullscreen(onFullS);

    return (
        <div>
            <h1>useFullscreen</h1>
            <div ref={element}>
                <img 
                    src="https://i.pinimg.com/564x/3d/10/49/3d1049af2da6f799fbc86f2b8edd6d92.jpg" 
                    alt=""
                />
                {isFullscreen && <button onClick={exitFull}>Exit Fullscreen</button>}
            </div>
            {!isFullscreen && <button onClick={triggerFull}>Make Fullscreen</button>}
        </div>
    );
};

export default HookUseFullscreen;
