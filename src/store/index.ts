import { AllStateTypes, InjectionKey } from '@vue/runtime-core'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

import doc from './modules/doc'
import test from './modules/test'

export const key: InjectionKey<Store<AllStateTypes>> = Symbol('vue-store')

export default createStore<AllStateTypes>({
  modules: {
    test,
    doc,
  },
})

export function useStore<T = AllStateTypes>(defaultKey = key) {
  return baseUseStore<T>(defaultKey)
}
