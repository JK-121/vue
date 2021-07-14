<template>
    <div>
        <h1>{{ user.Nt ? "환영합니다!" : "로그인이 필요합니다." }}</h1>
        <center><div v-show="!user.Nt" id="google-signin-btn" style="width:200px; heigth:100px;" ></div></center>
        <br>
        <button v-show="user.Nt" @click="signOut" style="border: none; background-color: white;"><img src="https://i.stack.imgur.com/I3NM6.png" alt="" style="width:200px; heigth:50px;"></button>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            sampleData: ""
        };
    },
    setup() {},
    created() {},
    mounted() {
        window.gapi.signin2.render("google-signin-btn", {onsuccess: this.onSignIn});

        
    },
    unmounted() {},
     computed: {
        user() {
            return this.$store.state.user;
        },
     },
    methods: {
        onSignIn(googleUser) {
            const profile = googleUser.getBasicProfile();
            console.log("ID: " + profile.getId());
            console.log('Full Name: ' + profile.getName());
            console.log('Given Name: ' + profile.getGivenName());
            console.log('Family Name: ' + profile.getFamilyName());
            console.log("Image URL: " + profile.getImageUrl());
            console.log("Email: " + profile.getEmail());

            const id_token = googleUser.getAuthResponse().id_token;
            console.log("ID Token: " + id_token);

            this.$store.commit("user", profile);
            console.table(this.$store.state.user);
        },

        signOut() {
            window.gapi.auth2.getAuthInstance().disconnect();

            this.$store.commit("user", {});
        }
    }
}
</script>

<style scoped>
@import url(//fonts.googleapis.com/earlyaccess/hanna.css);

    * {
      box-sizing: border-box;
      font-family: 'Hanna', sans-serif;

    }

    </style>