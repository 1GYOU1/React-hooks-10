/*
    #2.1 useTitle
    보통은 helmet이라는 것을 사용하지만, hook으로 만들어보기 !
*/
import React, { useEffect, useState }from 'react';

const useTitle = initialTitle => {
                  //setTitle은 Loading... 기본값이 됨.
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    }
    useEffect(updateTitle, [title]);
    return setTitle;//titleUpdater과 동일한 값을 가짐.
};
const HookUseTitle = () => {   
    const titleUpdater = useTitle('Loading...');
    setTimeout(() => titleUpdater("Home"), 5000);//5초 뒤 "Home"으로 타이틀 업데이트
    return (
        <div>
            <h1>useTitle</h1>
            <div>Hi</div>
        </div>
    )
} 
export default HookUseTitle;