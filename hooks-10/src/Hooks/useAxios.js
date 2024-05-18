/*
#2.8 useAxios

HookUseAxios.js 컴포넌트로 내보냄 !

useAxios는 axiosInstance와 opts라는 두 가지 매개변수를 받습니다. 
axiosInstance는 Axios 객체를 전달하기 위한 선택적 매개변수이며, 기본값으로 Axios 모듈의 기본 객체를 사용합니다. 
opts는 Axios 요청을 보내기 위한 설정 객체입니다. 
이 설정 객체에는 요청 URL, 요청 방식(method), 요청에 필요한 데이터(data), 요청 헤더(headers) 등을 설정할 수 있습니다.

useAxios는 useState 훅을 사용하여 state 객체를 생성하고, 초기값으로 loading: true, error: null, data: null을 설정합니다.
그리고 useState 훅을 사용하여 trigger와 setTrigger를 생성하고, refetch 함수를 정의합니다. 
refetch 함수는 loading 값을 true로 변경하고, setTrigger를 사용하여 trigger 값을 변경합니다. 
trigger 값이 변경되면 useEffect 훅이 호출되고, Axios 요청을 수행하여 데이터를 가져옵니다. 
데이터가 성공적으로 가져와지면 state 객체를 업데이트하여 loading 값을 false로, data 값을 가져온 데이터로, error 값을 null로 설정합니다.
만약 에러가 발생하면 error 값을 업데이트합니다.
*/
import defaultAxios from "axios";
import { useEffect, useState } from 'react';

const useAxios = (opts, axiosInstance = defaultAxios) => {
    const [ state, setState ] = useState({
        loading : true,
        error : null,
        data : null
    });
    const [trigger, setTrigger] = useState(0);
    const refetch = () => {
        setState({
            ...state,
            loading: true
        });
        setTrigger(Date.now());
    }
    useEffect(() => {
        if(!opts.url){
            return;
        };
        axiosInstance(opts)
        .then(data => {
            setState({
                ...state,
                loading: false,
                data
            });
        })
        .catch(error => {
            setState({ ...state, loading: false, error });
        });
    }, [trigger]);
    return { ...state, refetch};
};

export default useAxios;