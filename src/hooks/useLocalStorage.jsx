import {useEffect, useState} from 'react';
const PREFIX = 'code-editor-'
function useLocalStorage(key, initialValue) {
    const prefKey = PREFIX+key;
    const [value, setValue] = useState(()=>{
        const jsonValue = localStorage.getItem(prefKey);
        if(jsonValue!=null) return JSON.parse(jsonValue);
        if(typeof initialValue === 'function'){
            return initialValue();
        }else{
            return initialValue;
        }
    })
    useEffect(()=>{
        localStorage.setItem(prefKey, JSON.stringify(value))
    }, [prefKey, value])
    return [value, setValue];
}

export default useLocalStorage;