import {useState, useEffect} from 'react';

export function useLocalStorage<T>(key:string, initialValue: T | (() => T)) {
    const [value, setValue] = useState<T>(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)
        if (typeof initialValue === 'function') {
            return (initialValue as () => T)()
        } else {
            return initialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue] as [typeof value, typeof setValue]
}

// const [storedValue, setStoredValue] = useState<T[]>(() => {
//     try {
//         const jsonValue = window.localStorage.getItem(key);
//         return jsonValue ? JSON.parse(jsonValue) : initialValue;
//     } catch(error) {
//         console.error('Error retrieving data from local storage: ', error);
//         return initialValue;
//     }
// });

// useEffect(() => {
//     try {
//         window.localStorage.setItem(key, JSON.stringify(storedValue));
//     } catch(error) {
//         console.error('Error saving data to local storage: ', error);
//     }
// }, [key, storedValue])

// const removeValue = () => {
//     try {
//         window.localStorage.removeItem(key);
//     } catch (error) {
//         console.error('Error removing data from local storage: ', error)
//     }
// };

// return [storedValue, setStoredValue, removeValue]