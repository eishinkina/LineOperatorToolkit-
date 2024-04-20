import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/main.scss";
import router from "./router";
import { createBootstrap } from "bootstrap-vue-next";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import axios from "axios";

const app = createApp(App);
app.use(router);
app.use(createBootstrap());
app.mount("#app");

app.config.globalProperties.$http = axios;

// createApp(App).use(router).mount("#app");
