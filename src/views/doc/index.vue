<template>
  <div class="container">
    <header class="header">Doc</header>
    <div class="content">
      <aside class="aside">
        <CreateMenu />
        <useDocMenu />
        <te />
      </aside>
      <main class="main" @click="handleToTest">main</main>
    </div>
    <router-view v-slot="{ Component }">
      <Suspense>
        <component :is="Component" />
      </Suspense>
    </router-view>
  </div>
</template>
<script>
import { useDocMenu } from "./compoSables/useDocAnalyze";
import { h, reactive, toRefs } from "@vue/runtime-core";
import { useRouter } from "vue-router";
export default {
  components: {
    useDocMenu
  },
  setup() {
    /**
     * @description 转换 doc 路径
     * @param {string[][]} list
     * @return {*}
     */
    function useCreateDoc(list) {
      return list.reduce((obj, item) => {
        item.reduce((o, name) => {
          let item = o.find((ci) => ci.name === name);
          if (!item) {
            item = {
              name: name,
              children: [],
            };
            o.push(item);
          }
          return item.children;
        }, obj);
        return obj;
      }, []);
    }

    /**
     * @description 读取 doc 路径
     * @return {*}
     */
    function useDocAnalyze() {
      const doc = import.meta.glob("../../../doc/**/*");
      let list = Object.keys(doc).map((item) => {
        let current = item.replace(/\.\.\/doc\//, "").split("/");
        return current.slice(2, current.length);
      });
      let allDocPath = useCreateDoc(list);
      return allDocPath;
    }

    /**
     * @description 生成 doc menu 节点
     * @param {*} list
     * @param {*} [l=[]]
     * @return {*}
     */
    function createMenuElement(list = useDocAnalyze(), l = []) {
      for (let i = 0; i < list.length; i++) {
        const item = list[i];
        l.push(
          h(
            "ul",
            {
              class: ["sidebar-ul"],
              onClick: () => {
                const router = useRouter();
                console.log(router);
                // router.push('/test')
              },
            },
            [h("li", { class: ["sidebar-li"] }, item.name)]
          )
        );
        if (item.children.length) {
          createMenuElement(item.children, l[l.length - 1].children);
        }
      }
      return l;
    }

    function CreateMenu () {
      return createMenuElement()
    }
    
    return {
      ...toRefs(CreateMenu)
    }
  },
};

// const doc = import.meta.glob("../../doc/**/*")
// const router = useRouter()

// let allDocPath = Object.keys(doc).map((item) => {
//   let current = item.replace(/\.\.\/doc\//, "").split("/");
//   return current.slice(1, current.length);
// });
// const state = reactive({});

// const getDocMenu = (list = allDocPath, l = []) =>
//   list.reduce((obj, item) => {
//     item.reduce((o, name) => {
//       let item = o.find((ci) => ci.name === name);
//       if (!item) {
//         item = {
//           name: name,
//           children: [],
//         };
//         o.push(item);
//       }
//       return item.children;
//     }, obj);
//     return obj;
//   }, []);
// const handleToTest = () => {
//   router.push('/test')
// }
// const CreateMenu = () => {
//   const createElement = (list = getDocMenu(), l = []) => {
//     for (let i = 0; i < list.length; i++) {
//       const item = list[i];
//       l.push(
//         h("ul", {
//           class: ["sidebar-ul"],
//           onClick: () => {
//             router.push('/test')
//           }
//         }, [
//           h("li", { class: ["sidebar-li"] }, item.name),
//         ])
//       );
//       if (item.children.length) {
//         createElement(item.children, l[l.length - 1].children);
//       }
//     }
//     return l;
//   };
//   return createElement();
// }
</script>

<style lang="scss">
.container {
  .header {
    height: 35px;
    padding: 12px 24px;
    border-bottom: 1px solid rgba(60, 60, 67, 0.12);
    display: flex;
    align-items: center;
  }
  .content {
    display: flex;
    width: 100%;
    .aside {
      width: 320px;
      z-index: 10;
      margin: 0;
      top: 3.6rem;
      left: 0;
      bottom: 0;
      box-sizing: border-box;
      border-right: 1px solid #eaecef;
      overflow-y: auto;
      .sidebar-ul {
        cursor: pointer;
        color: red;
      }
    }
    .main {
      flex: 1;
    }
  }
}
</style>
