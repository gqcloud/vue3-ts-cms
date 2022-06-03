import { createApp } from "vue"
// import { registerApp } from "./global/index"
import App from "./App.vue"
import router from "./router"
import store from "./store"
const app = createApp(App)
// registerApp(app)

app.use(store).use(router).mount("#app")
