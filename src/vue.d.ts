import { Action, Getter, Mutation, Store } from 'vuex'
import { DocState } from './store/modules/doc'
import { TestState } from './store/modules/test'

declare module '@vue/runtime-core' {
  // declare your own store states

  interface GetterTree<S, R> {
    getKey: Getter<S, R>
  }

  interface ModuleType<T, R> {
    namespaced: boolean
    state: T
    getters: {
      [key in string]: Getter<T, R>
    }
    actions: {
      [key in string]: Action<T, R>
    }
    mutations: {
      [key in string]: Mutation<T>
    }
  }

  export interface AllStateTypes {
    test: TestState
    doc: DocState
  }
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<AllStateTypes>
  }
}
