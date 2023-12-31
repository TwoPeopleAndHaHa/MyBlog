## 1.说说你对 Vue 的理解

- Vue 是一个开源的渐进式 JS 框架 . 它的核心特性就是数据驱动( MVVM ) , 
  - `Model`模型层 , 负责处理业务逻辑以及与服务器端进行交互 . 
  - `View`视图层 , 负责将数据转化为 UI 展示出来 , 可以理解成就是 HTML 页面 .
  - `ViewModel`视图模型层 , 用来连接 `Model`和 `View`,是`Model`和`View`之间的通信桥梁 .
- 组件化
  - 把各种逻辑抽象成一个统一的概念 ( 组件 ) , 来实现开发的模式 . 每一个 `.vue`文件都可以视为一个组件 .
  - 这样的好处就是降低系统的耦合度 , 方便复用 , 方便调试 , 以及提高可维护性 . 
- 与传统开发区别
  - Vue 是主要是靠着数据驱动

## 2.SPA 单页

- 就是单页面应用 , 通过动态重载当前页面来与用户交互 , 避免了之前页面之间切换打断用户体验 . 相对于 MPA 多页 来说更利于数据传递和页面切换,维护成本也相对容易 .

  - 优点
    - 用户体验舒适 , 内容的改变不需要重新加载整个页面 . 
    - 良好的前后端分离 , 分工明确 . 
  - 缺点
    - 不利于 SEO 搜索
    - 首次渲染速度较慢

- 解决 SPA 单页首屏加载慢 , 主要分为两大部分 , **资源加载优化**和**页面渲染优化**

  - 减小入口文件体积

    - 路由懒加载 , 当切换到当前路由的时候再去请求资源

  - 静态资源本地缓存

    - 后端采用 `http` 缓存 设置 `catche-control` 等响应头
    - 前端合理使用 `localStorage`

  - UI 框架按需加载

  - 组件重复打包

    - 当遇到一个 js 库多个路由使用的使用在 `webpack.config.js`中修改`CommonsChunkPlugin` 中的`minChunks`配置 , 表示为使用多少次及以上的包纹理出来 , 放进公共依赖中 , 避免重复加载 .

  - 图片资源压缩

    - 减少 `http` 请求压力

  - 开启 Gzip 压缩

  - 使用 SSR

    - SSR（Server side ），也就是服务端渲染，组件或页面通过服务器生成html字符串，再发送到浏览器

      从头搭建一个服务端渲染是很复杂的，`vue`应用建议使用`Nuxt.js`实现服务端渲染

## 3.`v-if `与 `v-show`

- 控制方式不同
  - `v-if` 是通过对 Dom 节点整个添加或删除 , `v-show` 则是通过 `css` 属性 `display:none` , 来控制元素的显示与隐藏
- 编译过程不同
  - `v-show`知识简单的切换 `css`类名 , `v-if`有一个局部编译或者卸载的过程 , 切换过程中会适当的销毁和重建内部的事件监听和子组件
- 编译条件不同
  - `v-show` 无论渲染条件是真假都会被创建 , 而`v-if`只有当条件为真的时候才会适当的销毁和重建 .
- `v-show`不会触发组件的生命周期 , `v-if`会触发 . 
- 性能消耗
  - `v-if`切换的时候有更高的消耗 , 频繁切换的场景建议使用 `v-show`

## 4.Vue 实例挂载过程

- 在 new Vue 的时候会调用 `_init`方法 , 去定义 Vue 中的初始化方法,事件以及生命周期 ( `$set` ,`$get`,`$watch`,`$on`,`emit`,`_update`,`destory` ) .
- 然后进行 `$mount`进行页面的挂载 , 挂载的时候主要是调用 `mountComponent`方法
- 定义 `updateComponent`更新函数
- 执行 `render`生成 虚拟 Dom
- 调用 `_update`将虚拟 Dom 渲染成真实 Dom 结构 , 并渲染到页面上

## 5.生命周期

## 6.`v-if`与`v-for`

- 不建议一起使用 , 因为 `v-for`的优先级高于 `v-if` , 会造成性能方面的浪费 , 每次渲染后会先循环 , 在进行条件判断 . 
- 解决方法是在外层嵌套 `template` , 在这一层进行 `v-if`
- 如果条件在内部 , 可以通过计算属性去过滤不需要显示的项

## 7.data为什么是函数不是对象

- 根本上是为了防止多个组件实例对象共用一个 `data` , 产生数据污染 . 使用函数的话每个组件都会然会一个自身维护的实例对象 . 

## 8. 给对象添加新属性界面不刷新

- 这是因为在 vue2 中的响应式是通过 `object.defienProperty`实现的 , 根本是因为在 vue 初始的时候会进行数据劫持 , 对所有的对象都进行绑定 , 但是后来增加的对象并没有被劫持 , 也就自然而然失去了响应式 , 但在 v3 中 , 使用 proxy 实现数据响应的 , 直接动态添加新属性仍然可以实现数据响应 . 
- 解决方案
  - `vue.set` : 响应式对象中添加一个 `property` , 并且也是响应式的.
  - `Object.assign` : 创建一个新对象 , 合并元对象和混入对象的属性
  - `$forceUpdate` : 强制更新 ( 不建议 )

## 9. vue 中的通信方式

- props 父组件传递子组件
- $emit 触发自定义事件 , 子组件传递父组件
- ref 父组件在使用子组件的时候设置 ref 属性
- eventbus 事件总线 , 常用于兄弟组件传值 , a 组件通过 $emit 触发自定义事件 , 第二个参数为传递的数值 , b组件通过 $on 监听自定义事件
- $parents 和 #children
- $ atts 与 $listeners 用于 跟组件传递给嵌套多层的子组件
- provide inject 在跟组件定义 provide , 在要使用的嵌套组件中使用 inject 接收组件传递过来的值
- vuex 适用于关系复杂的组件数据传递 , 通常结合持久化

## 10.对双向绑定的理解

- 当用户操作`view`视图层的时候 , `model`数据层也会随之发生改变 , 当手动操作`model`数据层的时候 , `view`视图层也会自动更新 . 例如表单组件 , 当使用 js 去更改表单内容的时候就会自动触发视图层的更新 , 当用户操作视图层的时候 ,  对应的 js 数据也会自动改变
- vue 是双向绑定的框架 , 由三个最重要部分构成
  - 数据层 `model` : 应用的数据及业务逻辑
  - 视图层 `view` : 应用的展示效果 , UI 框架
  - 业务逻辑层 : `viewmodel` : 框架封装的核心 , 负责关联数据和视图 , 主要职责就是 数据变化后更新视图 , 视图变化后更新数据 . 
- 在 vue 中的具体流程
  - `new vue` 首先执行初始化 , 对 `data` 执行响应式处理 , 这个过程发生在 `observe` 中
  - 同时对模板进行编译 , 找到其中动态绑定的数据，从`data`中获取并初始化视图，这个过程发生在`Compile`中
  - 同时定义⼀个更新函数和`Watcher`，将来对应数据变化时`Watcher`会调用更新函数
  - 由于`data`的某个`key`在⼀个视图中可能出现多次，所以每个`key`都需要⼀个管家`Dep`来管理多个`Watcher`
  - 将来data中数据⼀旦发生变化，会首先找到对应的`Dep`，通知所有`Watcher`执行更新函数

## 11. nexttick是什么

- 官方定义 : `在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM`
  - 可以理解为 , `vue` 更新 `DOM` 的时候是异步执行的 , 当数据发生变化 , `vue`将开启一个异步更新队列 , 视图需要等队列中所有数据变化完成之后 , 在统一更新 , 本质是一种优化策略 . 
  - 使用场景
    - 修改数据后立即获得最新的 `DOM` 结构 , 可以使用 `vue.nexttick()`, 并且返回的是`promise`对象 , 也可以使用 `async/await`语法

## 12.组件缓存的理解以及 `keep-alive`

- `keep-alive`是`vue`中的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染`DOM

- `keep-alive` 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们

- `keep-alive`可以设置以下`props`属性：

  - `include` - 字符串或正则表达式。只有名称匹配的组件会被缓存

  - `exclude` - 字符串或正则表达式。任何名称匹配的组件都不会被缓存

  - `max` - 数字。最多可以缓存多少组件实例

- 设置 `keep-alive`属性的组件会多两个生命周期钩子 , `activated`与`deactivated` . 

- 缓存后如何获取数据 ? 

  - 可以采用 `beforeRouteEnter` 和 `actived`两个钩子

## 13. vue常用修饰符

- 表单修饰符
  - `lazy` , `trim` , `number`
- 事件修饰符
  - `stop`(阻止事件冒泡) , `prevent`阻止事件默认行为 , `self`(点击当前元素自身时触发) , `once`只能触发一次 , `capture`(使事件触发从包含这个元素的顶层开始往下触发) , `passive`(移动端滚动事件相当于给`onscrool`添加一个`.lazy`懒加载)
- 鼠标按钮修饰符
  - `left`,`right`,`middle`
- 键盘修饰符
  - enter、tab、delete、space、esc、up、ctrl、alt、meta、shift ...
- `v-bind`修饰符
  - async : 能对 `props` 进行一个双向绑定
  - 

## 14. 自定义指令

- 在 vue 中已经提供了很多的指令, `v-`开头的都是 vue 提供的方便使用的指令 , 但也会允许我们开发并使用自己的指令.

- 指令注册

  - 全局注册是通过在`main.js`通过`Vue.directive`

  ~~~javascript
  // 注册一个全局自定义指令 `v-focus`
  Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
      // 聚焦元素
      el.focus()  // 页面加载完成之后自动让输入框获取到焦点的小功能
    }
  })
  ~~~

  - 局部注册只用在组件 `options`选项中设置`directive`属性

  ~~~javascript
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus() // 页面加载完成之后自动让输入框获取到焦点的小功能
      }
    }
  }
  ~~~

## 15.vue中的过滤器

- `vue`中的过滤器可以用在两个地方：双花括号插值和 `v-bind` 表达式，过滤器应该被添加在 `JavaScript`表达式的尾部，由` | `符号标识 ( v3 中已经舍弃 `filter` )

- 当定义好过滤器之后 , 就可以使用了 , 分为全局和局部两种定义方式

  ~~~javascript
  // 定义
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
  ~~~

  ~~~html
  // 使用
  <!-- 在双花括号中 -->
  {{ message | capitalize }}
  
  <!-- 在 `v-bind` 中 -->
  <div v-bind:id="rawId | formatId"> </div>
  ~~~

  



















