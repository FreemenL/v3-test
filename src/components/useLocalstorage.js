import { watchEffect,ref  } from "vue";

const useLocalstorage = (name,value={})=>{
    const localeDate = ref(JSON.parse(localStorage.getItem(name))||value);
    watchEffect(()=>{
        localStorage.setItem(name,JSON.stringify(localeDate.value))
    })
    return localeDate;
}   

export {
    useLocalstorage
}