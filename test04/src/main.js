import {
    createApp
} from "vue";
import App from "./App.vue";
import router from "./router";
import ApiMixin from "./api";
import store from "../store/store";

createApp(App).use(router).use(store).mixin(ApiMixin).mount("#app");

window.Kakao.init('aa73cd73088b427276306761f838d292');
window.Kakao.isInitialized();