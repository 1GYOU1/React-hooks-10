//#1.3 useTabs
import React, { useState }from 'react';

/* 함수형 */
const content = [
    {
        tab:"Section 1",
        content: "I'm the content of the Section 1"
    },
    {
        tab: "Section 2",
        content: "I'm the content of the Section 2"
    }
];

const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentindex] = useState(initialTab);
    //allTabs가 true가 아니거나 배열이 아닐 경우
    if(!allTabs || !Array.isArray(allTabs)){
        return;
    }
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentindex
    }
}

const HookUseTabs = () => {
    const { currentItem, changeItem } = useTabs(0, content);
    return (
        <div>
            <h1>useState - useTabs</h1>
            {content.map((section,index) => (
                <button onClick={() => changeItem(index)} key={index}>{section.tab}</button>
            ))}
            <div>{currentItem.content}</div>
        </div>
    )
}


export default HookUseTabs;