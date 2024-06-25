<template>
    <div class="guessPassword">
        <div>
            <input type="text" placeholder="输入密码" v-model="guessObj.correctPassword" maxlength="4">
            <input type="number" placeholder="正确位置正确数量" v-model="guessObj.correctPositionCount" @wheel="stopScrollFun">
            <input type="number" placeholder="正确数量位置错误数量" v-model="guessObj.correctNumberCount" maxlength="1">
            <button @click="checkPassword">确定</button>
        </div>
        <div>
            {{possiblePasswords}}
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref, reactive} from 'vue';

// 示例：输入正确密码、正确位置和数量、正确数量但错误位置
const guessObj = reactive({
    correctPassword: '',
    correctPositionCount: undefined,
    correctNumberCount: undefined,
})
// 判断猜测与密码的匹配情况
const checkGuess = (password: string, guess: string)=> {
    let correctPositionCount = 0;
    let correctNumberCount = 0;

    for (let i = 0; i < 4; i++) {
        if (guess[i] === password[i]) {
            correctPositionCount++;
        } else if (password.includes(guess[i])) {
            correctNumberCount++;
        }
    }

    return { correctPositionCount, correctNumberCount };
}

// 枚举可能是正确密码的数组
const enumeratePossiblePasswords = (correctPassword: string, correctPositionCount: number | undefined, correctNumberCount: number | undefined) =>{
    const possiblePasswords = [];

    for (let i = 0; i <= 9999; i++) {
        const guessPassword = i.toString().padStart(4, '0');
        const result = checkGuess(correctPassword, guessPassword);

        if (result.correctPositionCount === correctPositionCount && result.correctNumberCount === correctNumberCount) {
            possiblePasswords.push(guessPassword);
        }
    }

    return possiblePasswords;
}

/*// 示例：输入正确密码、正确位置和数量、正确数量但错误位置
const correctPassword = '1234';
const correctPositionCount = 2;
const correctNumberCount = 1;*/

// 枚举可能是正确密码的数组
const possiblePasswords = ref()
const checkPassword = () =>{
    possiblePasswords.value = enumeratePossiblePasswords(guessObj.correctPassword, guessObj.correctPositionCount, guessObj.correctNumberCount);
// 打印结果
    console.log('可能是正确密码的数组：', possiblePasswords.value);

}
function stopScrollFun(evt?:any) {
    evt = evt || window.event;
    if(evt.preventDefault) {
        // Firefox
        evt.preventDefault();
        evt.stopPropagation();
    } else {
        // IE
        evt.cancelBubble=true;
        evt.returnValue = false;
    }
    return false;
}

</script>
<style>
input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{
    -webkit-appearance: none;
}
input[type="number"]{
    -moz-appearance: textfield;
}
</style>