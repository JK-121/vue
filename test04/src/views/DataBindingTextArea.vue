<template>
    <div>
        <textarea v-model="message" cols="30" rows="10"></textarea>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            message: "여러줄을 입력할 수 있는 textarea 입니다.",
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>