import { InjectionKey, IAllType, IAllModules } from '@vue/runtime-core'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

import { docStore } from './modules/doc'
import { testStore } from './modules/test'

export const key: InjectionKey<Store<IAllModules>> = Symbol()

export const store: Store<IAllType> = createStore<IAllType>({
  modules: {
    docStore,
    testStore,
  },
})

export function useStore() {
  return baseUseStore(key)
}
