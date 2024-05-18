/*
#2.7 useNotification

custom Hook, React 컴포넌트. 
브라우저 알림(Notification)을 발생시키는 예제입니다.

useNotification은 title과 options 두 가지 인자를 받습니다. title은 알림의 제목, options는 알림의 설정을 나타내는 객체입니다.

커스텀 훅 내부에서는, Notification 객체가 브라우저에서 지원되는지 여부를 확인하고, 지원되지 않으면 함수를 종료합니다. Notification 객체가 지원되면, fireNotif 함수를 반환합니다. 이 함수는 Notification.permission을 확인하여, 알림 권한이 허용되어 있는지 여부를 파악한 후, 알림을 발생시키는 코드를 작성합니다.

컴포넌트에서는 useNotification 훅을 호출하여 triggerNotif 함수를 받습니다. triggerNotif 함수는 useNotification에서 반환된 fireNotif 함수이며, 알림을 발생시키기 위해 클릭 이벤트에 연결됩니다.

따라서 이 코드를 실행하면 "useNotification"이라는 제목과 "Notice"라는 버튼이 있는 페이지가 생성됩니다. 버튼을 클릭하면 "Hello 1GYOU1 !"이라는 제목과 "oh yeah~"라는 내용이 포함된 브라우저 알림이 발생합니다. 만약 브라우저에서 알림 권한이 거부되어 있는 경우, 알림 권한을 요청하는 창이 나타납니다. 권한을 허용하면 알림이 발생합니다.
*/
import React from 'react';

const useNotification = (title, options) => {
	if(!("Notification" in window)){
        return;
    }
    const fireNotif = () => {
        if(Notification.permission !== "granted"){
            Notification.requestPermission().then(permission => {
                if(permission === "granted"){
                    new Notification(title, options)
                }else{
                    return;
                }
            })
        }else{
            new Notification(title, options);
        }
    }
    return fireNotif;
};

const HookUseNotification = () => {
    const triggerNotif = useNotification("Hello 1GYOU1 !", {body:"oh yeah~"});
	return (
		<div>
            <h1>useNotification</h1>
            <button onClick={triggerNotif}>Notice</button>
		</div>
	);
};

export default HookUseNotification;