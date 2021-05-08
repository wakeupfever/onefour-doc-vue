import { h } from "@vue/runtime-core"
import { useRouter } from "vue-router"

const router = useRouter()

/**
 * @description 转换 doc 路径
 * @param {string[][]} list
 * @return {*} 
 */
function useCreateDoc(list: string[][]) {
  return list.reduce((obj, item) => {
    item.reduce((o: any, name: string) => {
      let item = o.find((ci: any): boolean => ci.name === name)
      if (!item) {
        item = {
          name: name,
          children: [],
        };
        o.push(item);
      }
      return item.children;
    }, obj)
    return obj
  }, [])
}

/**
 * @description 读取 doc 路径
 * @return {*} 
 */
function useDocAnalyze () {
  const doc = import.meta.glob("../../../doc/**/*")
  let list = Object.keys(doc).map((item) => {
    let current = item.replace(/\.\.\/doc\//, "").split("/");
    return current.slice(2, current.length);
  })
  let allDocPath = useCreateDoc(list)
  return allDocPath
}

/**
 * @description 生成 doc menu 节点
 * @param {*} list
 * @param {*} [l=[]]
 * @return {*} 
 */
function createMenuElement(list: any = useDocAnalyze(), l: any = []) {
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    l.push(
      h("ul", {
        class: ["sidebar-ul"],
        onClick: function () {
          const router = useRouter()
          console.log(router)
          // router.push('/test')
        }
      }, [
        h("li", { class: ["sidebar-li"] }, item.name),
      ])
    );
    if (item.children.length) {
      createMenuElement(item.children, l[l.length - 1].children);
    }
  }
  return l;
};

function useCreateMenuElement() {
  return createMenuElement()
}

export const useDocMenu = {
  setup() {
    return () => createMenuElement()
  }
}