import { InjectionKey } from '@vue/runtime-core'
import { createStore, Module, Store, useStore as baseUseStore } from 'vuex'

// import { docStore } from "./modules/doc"
import test, { testState } from './modules/test'

export interface StoreModuleType<S> extends Module<S, S> {
  namespaced: true
  name: string
}

export interface RootStateTypes {
  name: string
  version: string
}

export interface AllStateTypes extends RootStateTypes {
  test: testState
}

export const key: InjectionKey<Store<AllStateTypes>> = Symbol('vue-store')

export default createStore({
  modules: {
    test,
  },
})

export function useStore<T = AllStateTypes>() {
  return baseUseStore<T>(key)
}
