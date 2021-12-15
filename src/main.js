import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.esm.min";

import { createApp } from "vue";

import root from "./root/root.vue";
import { router } from "./root/router";
import { store } from "./root/store";

const app = createApp(root)

app.use(router)
app.use(store)
app.mount("#root");
