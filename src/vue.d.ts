import { Getter, Store } from 'vuex'

declare module '@vue/runtime-core' {
  // declare your own store states
  interface IDocState {
    docCurrentPath: string
  }

  interface ITestState {
    test: string
  }

  interface IDocGetter {
    getDocCurrentPath: Getter<IDocState, IDocState>
  }

  type IAllType = IDocState & ITestState

  interface IAllModules {
    docStore: IDocState
    testStore: ITestState
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<IAllType>
  }
}
