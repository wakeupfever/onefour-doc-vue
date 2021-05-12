// // 自动加载 views 内的所有 store.ts 文件

// import { Module, ModuleTree } from "vuex"

// export interface StoreModuleType<S> extends Module<S, S> {
//   namespaced: true
//   name: string
// }

// export function importAllStore<S>(): ModuleTree<S> {
//   const modules: ModuleTree<S> = {}
//   try {
//     // 导入 @/store 下文件
//     const requireContext: __WebpackModuleApi.RequireContext = require.context(
//       "@/store/modules",
//       false,
//       /\.ts$/,
//     )
//     requireContext.keys().forEach((fileName) => {
//       const modulesContent = requireContext(fileName)
//       if (modulesContent.default) {
//         const { name, ...module } = modulesContent.default
//         const modulesName = name || fileName.replace(/^\.\/(.*)\.\w+$/, "$1")
//         modules[modulesName] = { ...module }
//       }
//     })
//   } catch (error) {
//     console.error(error)
//   }
//   return modules
// }
