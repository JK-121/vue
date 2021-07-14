import {
  createRouter,
  createWebHistory
} from "vue-router";
import Home from "../views/Home.vue";
// import About from "../views/About.vue";
// import DataBinding from "../views/DataBinding.vue";
import DataBindingHtml from "../views/DataBindingHtml.vue";
import DataBindinginputText from "../views/DataBindinginputText.vue";
import DataBindingTextArea from "../views/DataBindingTextArea.vue";
import DataBindingSelect from "../views/DataBindingSelect.vue";
import DataBindingCheckbox from "../views/DataBindingCheckbox.vue";
import DataBindingRadio from "../views/DataBindingRadio.vue";
import DataBindingAttribute from "../views/DataBindingAttribute.vue";
import DataBindingButton from "../views/DataBindingButton.vue";
import DataBindingClass from "../views/DataBindingClass.vue";
import DataBindingClass2 from "../views/DataBindingClass2.vue";
import DataBindingStyle from "../views/DataBindingStyle.vue";
import DataBindingList from "../views/DataBindingList.vue";
import DataBindingList2 from "../views/DataBindingList2.vue";
import DataBindingList3 from "../views/DataBindingList3.vue";
import DataBindingList4 from "../views/DataBindingList4.vue";
import RandaringIf from "../views/RandaringIf.vue";
import EventBinding from "../views/EventBinding.vue";
import Practice1 from "../views/Practice1.vue";
import Practice2 from "../views/Practice2.vue";
import Practice3 from "../views/Practice3.vue";
import Watch from "../views/Watch.vue";
import Practice4 from "../views/Practice4.vue";
import NestedComponent from "../views/NestedComponent.vue";
import NestedComponent2 from "../views/NestedComponent2.vue";
import NestedComponent3 from "../views/NestedComponent3.vue";
import NestedComponent4 from "../views/NestedComponent4.vue";
import NestedComponent5 from "../views/NestedComponent5.vue";
import Parent from "../views/Parent.vue";
import Parent2 from "../views/Parent2.vue";
import ProvideInject from "../views/ProvideInject.vue";
import StoreAccess from "../views/StoreAccess.vue";
import LoginAccess from "../views/LoginAccess.vue";
import Login from "../views/Login.vue";
import KakaoLogin from "../views/KakaoLogin.vue";
import NaverLogin from "../views/NaverLogin.vue";
import GoogleLogin from "../views/GoogleLogin.vue";
import ImageUpload from "../views/ImageUpload.vue";
const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: About,
  // },
  // {
  //   path: "/databinding",
  //   name: "DataBinding",
  //   component: DataBinding,
  // },
  {
    path: "/databindinghtml",
    name: "DataBindingHtml",
    component: DataBindingHtml,
  },
  {
    path: "/databindinginputtext",
    name: "DataBindinginputText",
    component: DataBindinginputText,
  },
  {
    path: "/databindingtextarea",
    name: "DataBindingTextArea",
    component: DataBindingTextArea,
  },
  {
    path: "/databindingselect",
    name: "DataBindingSelect",
    component: DataBindingSelect,
  },
  {
    path: "/databindingcheckbox",
    name: "DataBindingCheckbox",
    component: DataBindingCheckbox,
  },
  {
    path: "/databindingradio",
    name: "DataBindingRadio",
    component: DataBindingRadio,
  },
  {
    path: "/databindingattribute",
    name: "DataBindingAttribute",
    component: DataBindingAttribute,
  },
  {

    path: "/databindingbutton",
    name: "DataBindingButton",
    component: DataBindingButton,
  },
  {

    path: "/databindingclass",
    name: "DataBindingClass",
    component: DataBindingClass,
  },
  {

    path: "/databindingclass2",
    name: "DataBindingClass2",
    component: DataBindingClass2,
  },
  {

    path: "/databindingstyle",
    name: "DataBindingStyle",
    component: DataBindingStyle,
  },
  {

    path: "/databindinglist",
    name: "DataBindingList",
    component: DataBindingList,
  },
  {

    path: "/databindinglist2",
    name: "DataBindingList2",
    component: DataBindingList2,
  },
  {

    path: "/databindinglist3",
    name: "DataBindingList3",
    component: DataBindingList3,
  },
  {

    path: "/databindinglist4",
    name: "DataBindingList4",
    component: DataBindingList4,
  },
  {

    path: "/randaringif",
    name: "RandaringIf",
    component: RandaringIf,
  },
  {

    path: "/eventbinding",
    name: "EventBinding",
    component: EventBinding,
  },
  {

    path: "/practice1",
    name: "Practice1",
    component: Practice1,
  },
  {

    path: "/practice2",
    name: "Practice2",
    component: Practice2,
  },
  {

    path: "/practice3",
    name: "Practice3",
    component: Practice3,
  },
  {

    path: "/watch",
    name: "Watch",
    component: Watch,
  },
  {

    path: "/practice4",
    name: "Practice4",
    component: Practice4,
  },
  {

    path: "/nestedcomponent",
    name: "NestedComponent",
    component: NestedComponent,
  },
  {

    path: "/nestedcomponent2",
    name: "NestedComponent2",
    component: NestedComponent2,
  },
  {

    path: "/nestedcomponent3",
    name: "NestedComponent3",
    component: NestedComponent3,
  },
  {

    path: "/nestedcomponent4",
    name: "NestedComponent4",
    component: NestedComponent4,
  },
  {

    path: "/nestedcomponent5",
    name: "NestedComponent5",
    component: NestedComponent5,
  },
  {

    path: "/parent",
    name: "Parent",
    component: Parent,
  },
  {

    path: "/parent2",
    name: "Parent2",
    component: Parent2,
  },
  {

    path: "/provideinject",
    name: "ProvideInject",
    component: ProvideInject,
  },
  {

    path: "/storeaccess",
    name: "StoreAccess",
    component: StoreAccess,
  },

  {
    path: "/loginaccess",
    name: "LoginAccess",
    component: LoginAccess,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/kakaologin",
    name: "KakaoLogin",
    component: KakaoLogin,
  },
  {
    path: "/naverlogin",
    name: "NaverLogin",
    component: NaverLogin,
  },
  {
    path: "/googlelogin",
    name: "GoogleLogin",
    component: GoogleLogin,
  },
  {
    path: "/imageupload",
    name: "ImageUpload",
    component: ImageUpload,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/databinding",
    name: "DataBinding",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "databinding" */ "../views/DataBinding.vue"),
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;