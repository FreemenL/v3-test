import { ref } from "vue";

export default function Count () {
    let count = ref(0);
    function add () {
        count.value++;
    };
    return {count, add};
}