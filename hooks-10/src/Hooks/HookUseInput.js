//#1.1 useInput ~ #1.2 useInput part Two

import React, { useState }from 'react';

/* 함수형 */
const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
        const {
            target : { value }
        } = event;
        let willUpdate = true;//항상 업데이트
        if(typeof validator === "function"){//valudator가 function이라면
            willUpdate = validator(value);//value의 유효성 검사 실행. willIodate에 validator의 결과를 업로드.
        }
        if(willUpdate){//willUpdate(validator의 결과)는 true/false (maxLen 참고. 길이가 10보다 작으면 true)
            setValue(value)
        }
    };
    return { value, onChange }
};

const HookUseInput = () => {
    const maxLengAndEnter = (value) => {
        return value.length <= 10 && !value.includes("@");
    }
    /* 최대 길이를 검증하는 함수. 최대 길이 10 넘거나 && @이 입력 안되는 기능.
    validator의 value를 가져와서 true/false를 return 하고, value의 길이를 저장. */
    const name = useInput('Mr.', maxLengAndEnter);
    return (
        <div>
            <h1>useState - useInput</h1>
            <input placeholder='Name' {...name}/>
                                    {/* 
                                    {...name}은 하단과 같이 쓸 수 있다.
                                    value={name.value} onChange={name.onChange} 
                                    */}
        </div>
    )
}
export default HookUseInput;