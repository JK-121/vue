<template>
    <div>
        <div v-show="!user.email" id="naverIdLogin"></div>
        <button v-show="user.email" @click="logout()">로그아웃</button>
    </div>
</template>
<script>
import axios from "axios";

export default {
    name: "",
    components: {},
    data() {
        return {
            naverLogin: null,
        };
    },

    computed: {
        user() {
            return this.$store.state.user;
        }
    },
    setup() {},
    created() {},
    mounted() {
this.naverLogin = new window.naver.LoginWithNaverId({
    clientId:"67TQtFVrk8dqA3CU87a5",
    callbackUrl: "http://localhost:8080/naverlogin",
    isPopup: false,
    loginButton: {color:"green", type:3, height: 70}
});

this.naverLogin.init();

this.naverLogin.getLoginStatus((status) => {
    if(status) {
        console.log(status);
        console.log(this.naverLogin.user);

        this.$store.commit("user", this.naverLogin.user);
    }
    });
    },
    unmounted() {},
    methods: {
        logout() {
                   const accessToken = this.naverLogin.accessToken.accessToken;
                   const url="/oauth2.0/token?grant_type=delete&client_id=67TQtFVrk8dqA3CU87a5&client_secret=HdBqtLMqTh&access_token=" +accessToken+ "&service_provider=NAVER"
                   
                   axios.get(url).then((res) => {
                     console.log(res);
                     this.$store.commit("user", {});
                     this.$router.push({ path:"/naverlogin" });
                   });
        }
    }
}
</script>