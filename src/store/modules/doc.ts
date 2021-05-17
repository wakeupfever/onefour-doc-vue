import { AllStateTypes, InjectionKey, ModuleType } from 'vue'
import { Getter, Mutation, Store } from 'vuex'
import { SET_DOC_CURRENT_PATH } from '../mutationTypes'

export interface DocState {
  docCurrentPath: string
}

export const docKey: InjectionKey<Store<DocState>> = Symbol('docKey')

export interface DocModuleType {
  namespaced: boolean
  state: DocState
  mutations: {
    [SET_DOC_CURRENT_PATH]: Mutation<DocState>
  }
  actions: {}
  getters: {
    getDocCurrentPath: Getter<DocState, AllStateTypes>
  }
}

const docState: DocState = {
  docCurrentPath: '',
}

const docStore: ModuleType<DocState, AllStateTypes> = {
  namespaced: true,
  state: {
    ...docState,
  },
  mutations: {
    [SET_DOC_CURRENT_PATH](state, data) {
      state.docCurrentPath = data
    },
  },
  actions: {},
  getters: {
    getDocCurrentPath(state) {
      return state.docCurrentPath
    },
  },
}

export default docStore
