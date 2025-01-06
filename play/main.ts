import { createApp } from "vue";
import App from "./app.vue";
import seattleui from "@seattle-ui/components";

const app = createApp(App);
app.use(seattleui);

app.mount("#app");