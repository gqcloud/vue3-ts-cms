import * as ElementPlusIconsVue from "@element-plus/icons-vue"

export function register(app: any) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
