<template>
    <div class="container" v-bind:class="[activeClass, errorClass, fontClass]">Class Binding</div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            activeClass: "active",
            errorClass:"text-red",
            fontClass:"font-big"
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>

<style scoped>
.container {
    width: 100%;
    height: 200px;
}

.active{
    background-color: aquamarine;
    font-weight: bold;
}

.text-red{
    color: red;
}
</style>