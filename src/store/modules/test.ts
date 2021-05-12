import { InjectionKey } from 'vue'
import { Getter, Store } from 'vuex'
import { StoreModuleType } from '..'

export interface testState {
  value: string
  key: string
}

export const userKey: InjectionKey<Store<testState>> = Symbol('testKey')

export interface ModuleType extends StoreModuleType<testState> {
  state: testState
  mutations: {}
  actions: {}
  getters: {
    getKey: Getter<testState, testState>
  }
}

const testState: testState = {
  value: 'value',
  key: 'key',
}

const testStore: ModuleType = {
  namespaced: true,
  name: 'test',
  state: {
    ...testState,
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
