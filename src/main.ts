import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { register } from "./global"
import "normalize.css"
import "./assets/css/index.css"
const app = createApp(App)
register(app)
app.use(store).use(router).mount("#app")
