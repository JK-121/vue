<template>
    <div>
        <Child ref="child_component" />
    </div>
</template>
<script>
import Child from "../components/Child.vue";
export default {
    name: "",
    components: { Child },
    data() {
        return {
            sampleData: ""
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>