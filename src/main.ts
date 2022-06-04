import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { setupStore } from "./store/index"
import { register } from "./global"
import "normalize.css"
import "./assets/css/index.css"
const app = createApp(App)
register(app)
setupStore()
app.use(store).use(router).mount("#app")
