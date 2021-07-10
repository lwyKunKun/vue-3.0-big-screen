import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as echarts from "echarts"; //echarts图表
import ElementUI from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import "@/assets/css/base.scss"; //清除浏览器默认样式
import { resize } from "@/assets/js/utils.js"; //监听屏幕是否改变
import "@/assets/css/common.css"; //引入公共样式
import Vcomp from "@/components/index"; //封装的components组件
const app = createApp(App);
app.config.globalProperties.$echarts = echarts;
app.config.globalProperties.$resize = resize;

app.use(store).use(router).use(ElementUI).use(Vcomp).mount("#app");