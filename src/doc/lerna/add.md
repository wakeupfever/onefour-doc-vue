# lerna add 个人的使用理解，以及对各个命令的注解和记录。

## 选项

## --dev

将新包添加到 devDependencies 而不是 dependencies。

## --exact

这个时候下载包的时候，将不再添加 ^ ~ 这两个标识，代表着所下载的包的版本号将会固定，除非手动调整。

## --peer

将新包添加到 peerDependencies 而不是 dependencies

## registry

使用自定义源地址下载包

## --no-bootstrap

跳过链式的lerna bootstrap。不明觉厉？查阅后无果，待实践


## 例子

```
# packages 所有的包都将添加 vue 这个模块
lerna add vue

# 这里 vue  只会被添加指定的 module 里面，名称就是包名。用逗号区分多个指定模块的包名
lerna add vue --scope=module-package.name,

# 以上操作都是携带 --dev、--peer 等操作符
```