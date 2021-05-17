import { AllStateTypes, InjectionKey, ModuleType } from 'vue'
import { Store } from 'vuex'

export interface TestState {
  value: string
  key: string
}

export const userKey: InjectionKey<Store<TestState>> = Symbol('testKey')

const TestState: TestState = {
  value: 'value',
  key: 'key',
}

const testStore: ModuleType<TestState, AllStateTypes> = {
  namespaced: true,
  state: {
    ...TestState,
  },
  mutations: {},
  actions: {},
  getters: {
    getKey(state) {
      return state.key
    },
  },
}

export default testStore
