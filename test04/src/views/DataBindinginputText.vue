<template>
    <div>
        <input type="text" v-model.number="num1 " />
        <input type="number" v-model.number="num1 " />
        <button @click="changeValue()">값 변경</button>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            txt1: "",
            num1: 0,
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    //함수는 무조건 methods에 그리고 fucntion 쓸 필요 X
    methods: {
        changeValue(){
            var tx1 = "버튼실행";
           console.log(tx1); 
        //    this.txt1 = "South Korea";
        }
    }
}
</script>