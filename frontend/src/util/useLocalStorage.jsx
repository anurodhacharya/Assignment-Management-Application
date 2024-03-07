import { useState, useEffect } from "react";

const useLocalStorage = (defaultValue, key) => {

    const [value, setValue] = useState(() => {
        const stickyValue = localStorage.getItem(key);
        console.log("Inside useState");
        return stickyValue !== null ? stickyValue : defaultValue;
    });

    useEffect(() => {
        console.log("HI")
        localStorage.setItem(key, value);
    }, [key, value]);

    console.log("Outside of useEffect at the end in useLocalStorage");
    return [value, setValue];
}

export default useLocalStorage;