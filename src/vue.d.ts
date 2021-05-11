import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // declare your own store states
  interface IDocState {
    docCurrentPath: string
  }

  interface IDocGetter {
    getDocCurrentPath: Function
  }

  interface ITestState {
    test: string
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