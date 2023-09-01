import { createApp } from "vue";
import "./style.css";
import { createPinia } from "pinia";
import router from "./router";
const pinia = createPinia();

import App from "./App.vue";
const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount("#app");
