# JavaScript typeof

typeof 我们一般是用于判断基本类型。

主要typeof运算时会有优先级的存在，因为会出现隐式转换的情况。所以会出现 () > typeof > +-*/

### 实际例子

```
typeof 1+1 === 'number1'
```
因为typeof 1 得到 number 然后再加1 所以得到 number1

```
typeof 1-1 !== NaN
```

因为typeof 1 得到 number 然后再减1 所以得到 NaN, 因为数字本身与字符串做减法运算被看作数字操作，所以得到 NaN。所以在做乘法、除法的时候也是得到 NaN，这里不再一一举例。

从这里我们得到一个第一个条件 如果在做 typeof 后面又加减乘除的时候 我们会先判断类型 然后再做运算。简单来说就是typeof的优先级大于+-*/。

但是当我们在运算的时候加上()，情况就又不一样了，这个时候我们会先处理()内部运算的结果，然后再typeof判断类型

### 实际例子

```
typeof (1+1) === 'number'
```

因为先运算1+1得到2，然后再typeof 2，得到number，依次类推，在括号内做运算时会先处理内部运算，然后再typeof类型

现在再说一说特殊情况，比如null、NaN、Array，Object这些类型typeof会得到什么。

```
typeof NaN === 'number'
```

NaN 属于 number 类型，并且 NaN 不等于自身，所以会出现一种情况
```
typeof NaN !== NaN
```

这个结果是正确的，因为NaN不等于自身。

```
typeof {} === 'object'
typeof [] === 'object'
```

都是object类型
