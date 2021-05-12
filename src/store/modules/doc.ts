import { IDocState } from '@vue/runtime-core'
import { ActionTree, MutationTree, GetterTree } from 'vuex'

const state: IDocState = {
  docCurrentPath: '1',
}

const getters: GetterTree<IDocState, IDocState> = {
  getDocCurrentPath(state: IDocState): string {
    return state.docCurrentPath
  },
}

const actions: ActionTree<IDocState, IDocState> = {}

const mutations: MutationTree<IDocState> = {}

export const docStore = {
  state,
  getters,
  actions,
  mutations,
}
