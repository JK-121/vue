<template>
<div>
    <div>
       <label><input type="radio" value="02" v-model="selectedCity" />서울</label>
       <label><input type="radio" value="042" v-model="selectedCity" />대전</label>
       <label><input type="radio" value="033" v-model="selectedCity"/>강원</label>
    </div>
    <div>선택한 지역: {{ selectedCity }}</div>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            selectedCity: "",
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>