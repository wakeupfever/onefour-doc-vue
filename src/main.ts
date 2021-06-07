import { createApp } from 'vue'
import App from '~/App.vue'
import router from '~/router'

import store, { key } from '~/store/index'

// const allStore = import.meta.glob('./store/modules/*')

// function getStoreModulesKey () {
//   let keys = Object.keys(allStore)
//   console.log(keys)
// }

// getStoreModulesKey()

const app = createApp(App)

app.use(router)
app.use(store, key)
app.mount('#app')
