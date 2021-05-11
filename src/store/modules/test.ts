import { ITestState } from "@vue/runtime-core";
import { ActionTree, GetterTree, ModuleTree, MutationTree } from "vuex";

const state: ITestState = {
  test: ''
}

const getters: GetterTree<ITestState, ITestState> = {
}

const actions: ActionTree<ITestState, ITestState> = {
}

const mutations: MutationTree<ITestState> = {
}


export const testStore = {
  namespace: true,
  state,
  getters,
  actions,
  mutations
}