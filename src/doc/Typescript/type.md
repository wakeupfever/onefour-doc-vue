### typeof 类型提取
```

提取参数的基本信息，原始类型获取类型，已用类型获取所有属性类型

const obj = { a: '1', b: true }
const str = ''

type Obj = typeof obj
type Str = typeof str

const a: Obj = { a: '', b: true }
const b: Str = ''

```

### keyof 索引类型查询操作符
```

获取已知的公共属性名的联合

interface Person {
  name: string
  age: number
}

let person: Person = {
  name: 'Jarid',
  age: 35
}

let personProps: keyof Person = 'name' | 'age'

```

### in 关键字 组合
```

判断是否存在于某个引用类型中

interface OrdinaryType {
  a: number
  b: number
  c: number
}

interface ComplexType {
  testA: string
  testB: string
}

function useIt(arg: OrdinaryType | ComplexType, target: string): boolean{
  return target in arg
}

console.log(useIt({a: 1, b: 1, c: 1}, 'a'))

用于缩小联合类型的范围

class caseA {
  a() {}
  useA() {
    return 'A'
  }
}

class caseB {
  b() {}
  useB() {
    return 'B'
  }
}

function useIt(arg: caseA | caseB, target: string): void {
  target in arg ? (arg as caseA).useA() : (arg as caseB).useB()
}

复制已有定义类型，二次加工，

interface Obj {
  a: string
  b: string
  c: string
}

type Foo = { [T in keyof Obj]: Obj[T] }

// 检出 Obj 所有的属性组成一个新的类型 

type Foo = { [T in keyof Obj]?: Obj[T] } // 等同于 Partial<T>
let foo: Foo = { a: '', b: '', c:'' }

// 将所有属性变成可选

type Foo = { [T in keyof Obj]-?: Obj[T] } // 等同于 Required<T>
let foo: Foo = { a: '', b: '', c:'' }

// 去除带有可选修饰符的属性，Obj 所有属性变更为必传

type Foo = { readonly [T in keyof Obj]: Obj[T] } 等同于 Readonly<T>
let foo: Foo = { a: '', b: '', c:'' }

// 增加可选修饰符的属性，Obj 所有属性变更为可选传

type Foo = { -readonly [T in keyof Obj]: Obj[T] }
let foo: Foo = { a: '', b: '', c:'' }

// 去除带有可读修饰符的属性，Obj 的所有属性变更为可修改

type Foo<T, K extends keyof T> = { [P in K]: T[P] } // 等同于 Pick<T, P>
let foo: Foo<Obj, 'a' | 'b'> = { a: '', b: '' }

// 从泛型 T 中检出指定的属性组成一个新的对象类型

type Foo<K extends keyof any, T> = { [P in K]: T } // 等同于 Record<K, T>
let foo: Foo<'c' | 'd', Obj> = { c: { a: '', b: '' }, d: { a: '', b: '' } } 

// 从泛型K检索出所有属性当作键名，创建一个新的类型用泛型 T 作为 键值

type Foo<T, U> = T extends U ? never : T // 等同于 Exclude<T, U>
type T0 = Foo<'a' | 'b' | 'c' | 'd', 'a' | 'b' | 'c'> // 'd'

// 从泛型 T 中剔除可以赋值给 U 的类型

type Foo<T, U> = T extends U ? T :  never // 等同于 Extract<T, U>
type T0 = Foo<'a' | 'b' | 'c' | 'd', 'a' | 'b' | 'c'> // 'a' | 'b' | 'd'

// 提取 T 中 U 存在的属性，然后赋值给U

type Foo<T> = T extends null | undefined ? never : T
type T0 = Foo<string | number | null> // string

// 从泛型 T 过滤 null 和 undefined 类型

type Foo<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any

// 获取返回类型

type Foo<T extends (...args: any) => any> = T extends (...args: infer R) => any
  ? R
  : never

// 获取方法参数类型

type Foo<T extends new (...args: any) => any> = T extends new (
  ...args: any
) => infer R
  ? R
  : never

// 获取构造函数参数类型

type Foo<T extends Promise<any>> = T extends Promise<infer R> ? R : never

// 获取 promise 参数类型

type DeepFoo<T> = {
  [P in keyof T]: T[P] extends object ? DeepFoo<T[P]> : T[P]
}

// 递归类型

```