import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import registerProperties from "./register-properties"

export function register(app: any) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  app.use(registerProperties)
}
