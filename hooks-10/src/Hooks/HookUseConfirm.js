//App.js안에서 작성 방식
// import React from 'react';
// import { useConfirm } from './Hooks/HookUseConfirm';
// function App() {
//     const handleConfirm = () => console.log("Confirmed");
//     const handleCancel = () => console.log("Cancelled");
//     const confirmAction = useConfirm("Are you sure?", handleConfirm, handleCancel);
//     return (
//         <>
//             <button onClick={confirmAction}>Confirm Action</button>
//         </>
//     )
// }
// export default App;

//useConfirm 컴포넌트로 분리해서 App.js에 import
// export const useConfirm = (message = "", onConfirm, onCancel) => {
//     if(!onConfirm || typeof onConfirm !== "function"){
//         return;
//     }
//     if(onCancel && typeof onCancel !== "function"){
//         return;
//     }
//     const confirmAction = () => {
//         if(window.confirm(message)){
//             onConfirm();
//         }else{
//             onCancel();
//         }
//     };
//     return confirmAction;
// }

//-----------------------------------------------------------------

/*
    #2.3 useConfirm
    custom hook,

    이 코드는 useConfirmDialog라는 커스텀 훅을 만들어서 confirmAction이라는 함수를 반환합니다. 
    이 함수는 window.confirm을 이용해서 메시지를 띄우고, 
    확인 버튼을 눌렀을 때 callback 함수를 실행하고, 취소 버튼을 눌렀을 때 rejection 함수를 실행합니다.

    HookUseConfirm 컴포넌트에서는 useConfirmDialog를 호출해서 반환받은 confirmDelete 함수를 onClick 이벤트 핸들러로 등록합니다. 
    이 버튼을 클릭하면 confirmAction 함수가 실행되어 메시지를 띄우고, 
    확인 버튼을 누르면 deleteWorld 함수가 실행되고, 
    취소 버튼을 누르면 abort 함수가 실행됩니다.

    따라서, HookUseConfirm 컴포넌트를 렌더링하고 "Delete the world" 버튼을 클릭하면 confirm 창이 뜨고, 확인 버튼을 누르면 "Deleting World..."이라는 메시지가 출력되고, 취소 버튼을 누르면 "Aborted"라는 메시지가 출력됩니다.
*/
import React from 'react';
                                        /*
                                        callback : 확인 버튼을 눌렀을 때 실행할 함수, 
                                        rejection : 취소 버튼을 눌렀을 때 실행할 함수.
                                        */
const useConfirmDialog = (message = "", callback, rejection) => {
    if(typeof callback !== "function"){
        return;
    }
    const confirmAction = () => {
        if(window.confirm(message)){//함수를 호출하면 메세지가 담긴 confirm창이 뜸.
            callback();//확인버튼 클릭히면 callback 함수 실행
        }else{
            rejection();//취소버튼 클릭하면 rejection 함수 실행
        }
    };
    return confirmAction;
}
const HookUseConfirm= () => {
    const deleteWorld = () => console.log("Deleting World...")//확인버튼을 누르면 출력할 메시지
    const abort = () => console.log("Aborted")//취소 버튼을 누르면 출력할 메시지
    const confirmDelete = useConfirmDialog("Are you sure", deleteWorld, abort)
	return (
		<div>
            <h1>useConfirm</h1>
            <button onClick={confirmDelete}>Delete the world</button>
		</div>
	);
};

export default HookUseConfirm;