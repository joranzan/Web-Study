import {ref} from 'vue';
import {defineStore} from 'pinia';

export const useCommonStore = defineStore('common', ()=>{
    const title = ref("MY CAFE");
    const myDomain = ref("http://localhost:8080");

    function changeTitle(newTitle){
        title.value = newTitle;
    }

    return {title, myDomain, changeTitle}
});