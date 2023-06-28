import{_ as s,o as a,c as n,O as l}from"./chunks/framework.bc62c6f7.js";const o="/MyBlog/assets/image-20230628181356961.817f85f7.png",C=JSON.parse('{"title":"V8引擎垃圾回收原理解析","description":"V8垃圾回收底层解析 , 包括闭包 , 作用域 , 预计内存泄漏","frontmatter":{"title":"V8引擎垃圾回收原理解析","description":"V8垃圾回收底层解析 , 包括闭包 , 作用域 , 预计内存泄漏","sticky":2,"tag":["前端进阶"],"tags":["Node.js"],"outline":[2,3],"top":2},"headers":[],"relativePath":"v8引擎垃圾回收原理.md","filePath":"v8引擎垃圾回收原理.md","lastUpdated":null}'),e={name:"v8引擎垃圾回收原理.md"},p=l(`<h1 id="v8-垃圾回收机制与内存限制" tabindex="-1">v8 垃圾回收机制与内存限制 <a class="header-anchor" href="#v8-垃圾回收机制与内存限制" aria-label="Permalink to &quot;v8 垃圾回收机制与内存限制&quot;">​</a></h1><p>​ JS 和 Java 一样 , 都是由垃圾回收机制来进行自动内存管理 , 这样的话开发者在编写代码的时候就不需要时刻关注内存的分配和释放问题 . V8 引擎就是 Node 的 JS 执行引擎 . Node 在 JS 的执行上直接受益于 V8 , 同时也受到 V8 的一些限制 . ( 例如:内存限制 )</p><h2 id="v8-的内存限制" tabindex="-1">V8 的内存限制 <a class="header-anchor" href="#v8-的内存限制" aria-label="Permalink to &quot;V8 的内存限制&quot;">​</a></h2><p>​ 在一般的后端开发语言中，在基本的内存使用上没有什么限制，然而在 Node 中通过 JS 使用内存时就会发现只能使用部分内存（64 位系统下约为 1.4 GB，32 位系统下约为 0.7 GB）。这就会导致 Node 无法直接操作大内存对象 ( 虽然在平时的开发中用不上 ) , 比如无法将一个 2GB 的文件读入内存中进行季父传分析处理 , 即使物理内存有足够的空间 , 在单个 Node 进程的情况下 , 计算机的内存资源也无法的到充分的使用 .</p><p>​ 造成这个问题主要是因为 Node 是基于 V8 构建 , 所以在 Node 中使用 JS 都是通过 V8 自己的方式来进行分配和管理 . V8 的内存管理机制其实在浏览器上已经绰绰有余 , 但在 Node 中 , 限制了开发者使用发内存的想法 .</p><p>​ 虽然在服务器端操作大内存也不是什么常见的需求场景 , 但是有了限制之后 , 如果在实际的应用中不小心触碰到了这个界限 , 会造成进程退出 .</p><h2 id="v8-的对象分配" tabindex="-1">V8 的对象分配 <a class="header-anchor" href="#v8-的对象分配" aria-label="Permalink to &quot;V8 的对象分配&quot;">​</a></h2><p>​ 在 V8 中 , 所有的 JS 对象都是通过堆来进行分配的 , Node 提供了 V8 中内存使用量的查看方式</p><ul><li>新建 index.js 文件</li><li>使用终端打开</li><li>JS 中编辑</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// process.memoryUsage() 方法遍历每个页面以收集有关内存使用情况的信息，这可能会根据程序内存分配而变慢。</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(process</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">memoryUsage</span><span style="color:#A6ACCD;">())</span></span></code></pre></div><ul><li>命令行输入 node ./index.js</li><li>返回内存使用情况</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">rss</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">30380032</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">heapTotal</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">6438912</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">heapUsed</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">5684848</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">external</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">423221</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">arrayBuffers</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">17606</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// heapTotal 和 heapUsed 都是 V8 的堆内存使用情况 , heapUsed 是已经申请到的堆内存 , heapUsed 是当前使用的量 .</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// rss ( resident set size ) 即进程的常驻内存部分 , 进程在主内存设备中占用的空间量 , 包含所有 C++ 和 JS 对象和代码 , 如果使用 Worker 线程时 , 则 rss 将是对整个进程都有效的值 , 其他字段仅涉及当前线程</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// external  绑定到 V8 管理的 JavaScript 对象的 C++ 对象的内存使用量。</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// arrayBuffers   ArrayBuffer 和 SharedArrayBuffer 分配的内存，包括所有 Node.js Buffer。这也包含 external 值中。 当 Node.js 被用作嵌入式库时，此值可能为 0，因为在这种情况下可能不会跟踪  ArrayBuffer  的分配。</span></span></code></pre></div><p>​ 当我们在代码中声明变量并赋值时 , 所使用对象的内存就分配在堆中 . 如果已申请的堆空闲内存不够分配新的对象 , 将继续申请堆内存 , 直到堆的大小超过 V8 的限制为止 .</p><p>​ 限制 V8 引擎堆的大小 , 主要是一个原因 , 表层原因是因为 V8 最初是为浏览器设计 , 浏览器中不太可能遇到大量内存的场景 , 所以对于网页来说 V8 的限制值已经绰绰有余了 . 深层原因是因为 V8 的垃圾回收机制的限制 . 按官方的说法 , 以 1.5G 的垃圾回收堆内存为例 , V8 做一次小的垃圾回收需要 <strong>50 毫秒</strong> 以上 , 做一次非增量式回收甚至要 <strong>1 秒</strong> 以上 . 而这也是垃圾回收中 JS 线程暂停执行的时间 . 正因如此这样的情况后端服务无法接受 , 前端浏览器也无法接受 , 在当时的考虑下直接限制堆内存是一个好的选择 .</p><p>​ 如果需要解除限制 , Node 在启动时可以传递 --max-old-space-size 或 --max-new-space-size 来调整内存限制的大小</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">node  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">max</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">old</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">space</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">size</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1700</span><span style="color:#A6ACCD;">  index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js </span><span style="color:#676E95;font-style:italic;">// 单位MB</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//或者</span></span>
<span class="line"><span style="color:#A6ACCD;">node  </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">max</span><span style="color:#89DDFF;">-new-</span><span style="color:#A6ACCD;">space</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">size</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1024</span><span style="color:#A6ACCD;">  index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">js </span><span style="color:#676E95;font-style:italic;">// 单位KB</span></span></code></pre></div><p>​ 这些参数都是在 V8 初始化的时候生效 , 一旦生效无法动态改变 . 如果遇到 Node 无法分配足够内存给 JS 对象的情况 可以用这个办法来放宽 V8 的限制 , 避免多用了一点内存就崩溃的情况 .</p><h2 id="v8-的垃圾回收机制" tabindex="-1">V8 的垃圾回收机制 <a class="header-anchor" href="#v8-的垃圾回收机制" aria-label="Permalink to &quot;V8 的垃圾回收机制&quot;">​</a></h2><ol><li>垃圾回收主要算法</li></ol><p>​ V8 的垃圾回收策略主要基于<strong>分代式垃圾回收机制</strong> , 现代的垃圾回收算法中按对象的存活时间将内存的垃圾回收进行了不同的分代 , 然后分别对不同分代的内存使用更高效的算法</p><ul><li><p>V8 的内存分代</p><p>​ 在 V8 中 , 主要将内存分为新生代和老生代两代 . 新生代中的对象为存活时间较短的对象 , 老生代中的对象为存活时间长或者常驻内存的对象 .</p><p>​ V8 堆的整体大小就是由<strong>新生代内存空间</strong>和<strong>老生代内存空间</strong>组合而成 , <code>--max-old-space-size</code>用来设置老生代内存空间的最大值 , <code>--max-new-space-size</code>用来设置新生代内存空间最大值 , 由于只能在 Node 启动时就指定 , 所以 V8 使用内存的情况没有办法自动扩充 , 一旦超过极限值就会引起进程出错 .</p><p>至于为什么在 <strong>64 位系统下约为 1.4 GB，32 位系统下约为 0.7 GB</strong> , 这是因为源码中有一套自定义的公式 , 按机器的位数不同 reserved<em>semispace_size</em> 这个数值在 64 位和 32 位为别是 16MB 和 8MB .这里就不展开讲了 , 最后根据公式的出 V8 堆内存的最大值在 64 位上是 1464MB , 32 位系统上是 732MB .</p></li><li><p>Scavenge 算法</p></li></ul><p>​ 在分代的基础上 , 新生代的对象主要通过 <strong>Scavenge 算法</strong> 进行垃圾回收 , 而 <strong>Scavenge 算法</strong> 具体实现中主要采用了 <strong>Cheney 算法</strong> .</p><p>​ Cheney 算法采用的是复制的方式实现的垃圾回收算法 . 它会将新生代内存空间分为两部分 , 一部分是处于使用中的 <strong>From 空间</strong> , 另一部分是出于闲置中的 <strong>To 空间</strong> . 当分配对象是先在 <strong>From 空间</strong>进行分配 , 开始垃圾回收时 , 会检查 <strong>From 空间</strong> 中的存活对象 , 这些存活对象将被复制到 <strong>To 空间</strong> , 而非存活对象就会被释放 , 完成复制后 <strong>From 空间</strong> 和 <strong>To 空间</strong> 的就会发生对换 . 简单来说 , 垃圾回收过程中就是将存活对象在两个空间中进行复制 .</p><p>​ 但是这种算法的缺点就是只能使用堆内存中的一半 , 这是由于划分空间和复制机制决定的 . 由于只复制存活的对象 , 并且对于生命周期短的场景存活对象只占少部分 , 所以在时间效率上有优异表现 .</p><p>​ 这种算法是一种典型的牺牲空间换取时间的算法 , 所以无法大规模应用所有的垃圾回收中 , 只是适合在新生代内存空间使用 , 因为新生代中对象的生命周期较短 . 当一个对象经过多次复制依然存活 , 这个对象就会<strong>晋升</strong> ( 生命周期较长的对象会被移动到老生代中 , 采用新的算法进行管理 ) .</p><p>​ 在单纯的 <strong>Scavenge</strong> 执行过程中 , <strong>From 空间</strong> 中的存活对象会被复制到 <strong>To 空间</strong> 中 , 然后对 <strong>From 空间</strong> 和 <strong>To 空间</strong> 进行角色对换( 也成为翻转 , 此时 From 空间是新的 To 空间 , To 空间是新的 From 空间 ) . 但是在 From 空间 复制到 To 空间的时候会对对象进行检查 , 看看是否满足<strong>晋升条件</strong>( 1.是否经历过 <strong>Scavenge 回收</strong> ; 2.是否 To 空间内存占用比超过了**25%**的限制 ) , 满足就会被复制到老生代空间 .</p><p>( tips : <strong>Scavenge 回收</strong> 是通过检查对象的内存地址来判断 ; <strong>25%限制值</strong> : 是因为即将发生翻转 , 接下来的内存分配将在这个空间进行 , 如果占比过高会影响后续的内存分配 )</p><ul><li><p>Mark-Sweep &amp; Mark-Compact ( 标记清除 &amp; 标记整理 )</p><ul><li><p><strong>Mark-Sweep</strong></p><p>​ Mark-Sweep 在标记阶段遍历堆中的所有对象 , 并标记活着的对象 , 在随后的清除阶段中 , 只清除没有被标记的对象 .</p><p>​ Mark-Sweep 最大的问题是再进行一次标记清除回收后 , 内存空间会出现不连续的状态 . 这种内存碎片会对后续的内存分配造成影响 . ( 当需要分配一个大对象的情况 , 这是所有的内存碎片都无法完成这次分配 , 就会提前出发垃圾回收 , 而这次回收是不必要的 )</p></li><li><p><strong>Mark-Compact</strong></p><p>​ 主要是为了解决 Mark-Sweep 的内存碎片问题 , Mark-Sweep 和 Mark-Compact 的差别就在于一个是标记清除 , 一个是标记整理 , 在对象被标记为死亡后 , 整理的过程中将活着的对象往一端移动 , 移动完成后就会直接清理掉边界外的内存 .</p><p><img src="`+o+'" alt="image-20230628181356961"></p><p>​ 此外要注意的是 , 在 V8 引擎中 , 两者是结合使用的 , 由于 Mark-Compac t 需要移动对象 ,所以执行速度没有 Mark-Sweep 和 Scavenge 效率高 , 所以 V8 主要采用 Mark-Sweep , 在空间不足和晋升过来的对象进行分配的才使用 Mark-Compact .</p></li></ul></li><li><p><strong>Incremental Marking</strong> ( 增量标记 )</p><p>​ 就是将本来一次性做完的事情拆分成许多小的阶段 , 目的是为了降低全堆垃圾回收带来的停顿时间 .</p></li><li><p><strong>思考 : 为什么老生代不适用于 Scavenge ?</strong></p><ul><li>老生代存活对象比较多 , 复制存活对象的效率将会很低</li><li>浪费一半的内存空间</li><li>Scavenge 只复制活的对象 , Mark-Sweep 只清理死亡对象 , 这刚好应对与新生代和老生代的场景 , 效率更高</li></ul></li></ul><h2 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h2><p>​ 对于 V8 的垃圾回收特点和 JS 在单线程上的执行情况 , 垃圾回收是影响性能的因素之一 . 想要高性能的执行效率 , 需要注意让垃圾回收尽量少地进行 , 尤其是全堆垃圾回收 .</p><p>​ 在正常的 JS 执行中 , 无法立即回收的内存有闭包和全局变量引用这两种情况 , 由于 V8 的内存限制 一定要十分小心此类变量无限制的增加 , 会导致老生代的对象增多 .</p><h1 id="作用域" tabindex="-1">作用域 <a class="header-anchor" href="#作用域" aria-label="Permalink to &quot;作用域&quot;">​</a></h1><p>​ 在 JS 中 , 作用域为可访问变量 , 对象 , 函数的集合 . 换句话说<strong>作用域就是一个独立的空间 , 让变量不会外泄、暴露出去 , 也就是说作用域最大的用处就是隔离变量</strong> , 不同作用域下同名变量不会有冲突. 在 ES5 中 , 只有全局作用域和函数作用域 , ES6 新引进了 <strong>块级作用域</strong> 的概念 .</p><ul><li>全局作用域 <ul><li>在代码中任何地方都能访问全局作用域的对象 , 函数 , 变量</li></ul></li><li>函数作用域 <ul><li>声明在函数内部的变量 , 只能固定在代码片段中可以访问</li></ul></li><li>块级作用域 <ul><li>使用 let 和 const 关键字 , 详见<a href="https://es6.ruanyifeng.com/#docs/let#%E5%9D%97%E7%BA%A7%E4%BD%9C%E7%94%A8%E5%9F%9F" target="_blank" rel="noreferrer">《 ES6 》</a></li></ul></li><li>作用域链 <ul><li>JS 在执行时会去查找改变量定义在哪里 , 首先要查找的就是当前作用域 , 当前作用域无法找到该变量的声明 , 将会向上级作用于查找 , 直到找到为止 , 否则就抛出未定义异常 . 查找是依靠标识符( 变量名 ) 来查找 , 由于标识符的查找方向是向上的 , 所以变量只能向外访问 , 而不能向内 .</li></ul></li><li>触发垃圾回收 ( ✨✨✨ ) <ul><li>在作用域内声明的局部变量分配在该作用域上 , 随着作用域的销毁而销毁 , 在作用域释放后 , 局部变量失效 , 引用的对象将会在下次垃圾回收时被释放</li></ul></li></ul><h1 id="闭包" tabindex="-1">闭包 <a class="header-anchor" href="#闭包" aria-label="Permalink to &quot;闭包&quot;">​</a></h1><p>​ 在 JS 中，实现外部作用域访问内部作用域中变量的方法叫做闭包 . 这得益于高阶函数的特性( 函数可以作为参数或者返回值 )</p><p>​ 闭包是 JS 的高级特性 , 它的问题在于一旦有变量引用中间函数 , 这个中间函数将不会释放 , 同时原始的作用域也不会得到释放 , 作用域中产生的内存占用也不会得到释放 . 只有不再有引用 , 才会逐步释放 .</p><h1 id="内存泄漏" tabindex="-1">内存泄漏 <a class="header-anchor" href="#内存泄漏" aria-label="Permalink to &quot;内存泄漏&quot;">​</a></h1><p>​ Node 对内存泄漏十分敏感 , 一旦线上应用有成千上万的流量 , 那怕是一个字节的内存泄漏也会造成堆积 , 垃圾回收过程中将会耗费更多时间进行对象扫描 , 应用响应缓慢 , 直到进程内存溢出 , 应用崩溃 . 在 V8 的垃圾回收机制下 , 在通常的代码编写中 , 很少会出现内存泄漏的情况 . 但是内存泄漏通常产生于无意间 , 较难排查 . 尽管内存泄漏的情况不尽相同 , 但其实质只有一个 , 那就是应当回收的对象出现意外而没有被回收 , 变成了常驻在老生代中的对象 . 通常 , 造成内存泄漏的原因有如下几个 .</p><ul><li>缓存 <ul><li>缓存在应用中的作用举足轻重 , 可以十分有效地节省资源 . 因为它的访问效率要比 I/O 的效率高 , 一旦命中缓存 , 就可以节省一次 I/O 的时间。 但是在 Node 中，缓存并非物美价廉。一旦一个对象被当做缓存来使用，那就意味着它将会常 驻在老生代中。缓存中存储的键越多，长期存活的对象也就越多，这将导致垃圾回收在进行扫描 和整理时，对这些对象做无用功。 另一个问题在于，JavaScript 开发者通常喜欢用对象的键值对来缓存东西，但这与严格意义上 的缓存又有着区别，严格意义的缓存有着完善的过期策略，而普通对象的键值对并没有。</li></ul></li><li>队列消费不及时</li><li>作用域未释放</li></ul>',40),t=[p];function r(c,i,y,g,F,d){return a(),n("div",null,t)}const u=s(e,[["render",r]]);export{C as __pageData,u as default};
