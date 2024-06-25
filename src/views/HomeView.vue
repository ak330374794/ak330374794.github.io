<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
        <div>姓名：{{ useinfo.name }}</div>
        <div>count：{{ useinfo.count }}</div>
        <div>年龄：{{ useinfo.age }}</div>
        <div>性别：{{ useinfo.sex ? '男' : '女' }}</div>
        <div>{{ xxx.a }}</div>
        <div>性别：{{ useinfo.sex ? '男' : '女' }}</div>
    </div>
</template>

<script setup lang="ts">
import {defineComponent, ref, onMounted} from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
interface objValidate {
    name: String;
    count: String | Number;
    age?: Number;
    readonly sex: Boolean;
}


const componentA = ref('HelloWorld')
const xxx = ref({
    a: 1,
    b: 2
})
let useinfo: objValidate = {
    name: 'wuha',
    count: 666,
    age: 23,
    sex: true,
}
console.log(componentA)
console.log(xxx)
</script>
