<!-- <template>
    <div @click="add">{{count}}</div>
    <div>{{doubleCount}}</div>
</template>
<style scope>
    .count{
        color: v-bind(color)
    }
</style>
<script setup>
    import { computed, ref, watchEffect } from "vue";
    import Count from "./count.js";
    let color = ref('red');
    const { count, add } = Count();
    let doubleCount = computed(() => count.value * 2);
    watchEffect(() => {
        if (count.value % 2) {
            color.value = 'green';
        } else {
            color.value = 'red';
        }
    })
</script> -->

<template>
    <div @click="handleAdd">{{count}}</div>
</template>
<script setup>
    import {ref} from 'vue'
    import {useLocalstorage} from "./useLocalstorage.js";
    const count = ref(0);
    useLocalstorage('count',count);
    const handleAdd = ()=>{
        count.value+=1;
    }
</script> 