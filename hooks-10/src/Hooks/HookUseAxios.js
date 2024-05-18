/*
#2.8 useAxios

custom Hook
API 요청을 보내기 위한 custom hook인 useAxios를 구현하고, 해당 custom hook을 사용하는 HookUseAxios 컴포넌트를 정의하는 코드

HookUseAxios는 useAxios를 사용하여 API 요청을 보내고, loading, data, error, refetch 값을 가져옵니다. 
이 값을 이용하여 화면을 렌더링하고, 버튼을 클릭하면 refetch 함수를 호출하여 API 요청을 다시 보냅니다. 
console.log를 사용하여 loading, error, data 값을 확인할 수 있습니다.
*/
import React from "react";
import useAxios from "./useAxios";

const HookUseAxios = () => {
    const {loading, data, error, refetch} = useAxios({
        url : "https://yts.mx/api/v2/list_movies.json"
    });
    console.log(
        `Loading: ${loading}\nError:${error}\nData:${JSON.stringify(data)}`
    );
    return (
        <div>
            <h1>useAxios</h1>
            <h4>{data && data.status}</h4>
            <h4>{loading && "Loading"}</h4>
            <button onClick = {refetch}>Refecth</button>
        </div>
    )
}
export default HookUseAxios;