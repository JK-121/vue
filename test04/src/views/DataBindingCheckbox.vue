<template>
    <div>
       <label for=""><input type="checkbox" v-bind:value="seoul" v-model="cities">서울</label>
        <label for=""><input type="checkbox" value="042" v-model="cities">대전</label>
        <label for=""><input type="checkbox" value="033" v-model="cities">강원</label>
        <br>
        <div>선택한 지역: {{cities}}</div>

        
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            cities: [],
            seoul:"02",
        
            
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>