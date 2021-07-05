<template>
    <div><select v-model="city">
        <option value="02">서울</option>
        <option value="042">대전</option>
        <option value="033">강원</option>
        </select>
        <button @click="getSelectValue">조회</button>
        </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            city: "042",
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        getSelectValue() {
        console.log(this.city);
    }
}
}
</script>