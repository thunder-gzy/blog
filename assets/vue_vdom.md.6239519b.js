import{_ as s,o as n,c as a,a as l}from"./app.f983686f.js";const p="/blog/assets/2023-02-01-13-16-09.4f2b336d.png",o="/blog/assets/2023-02-01-13-18-13.395fc83e.png",e="/blog/assets/2023-02-01-13-21-47.813c0eeb.png",r="/blog/assets/2023-02-01-13-27-42.d1eeb527.png",b=JSON.parse('{"title":"虚拟 DOM","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是虚拟 dom？","slug":"什么是虚拟-dom","link":"#什么是虚拟-dom","children":[]},{"level":2,"title":"为什么需要虚拟 dom？","slug":"为什么需要虚拟-dom","link":"#为什么需要虚拟-dom","children":[]},{"level":2,"title":"虚拟 dom 是如何转换为真实 dom 的？","slug":"虚拟-dom-是如何转换为真实-dom-的","link":"#虚拟-dom-是如何转换为真实-dom-的","children":[]},{"level":2,"title":"模板和虚拟 dom 的关系","slug":"模板和虚拟-dom-的关系","link":"#模板和虚拟-dom-的关系","children":[]},{"level":2,"title":"模版预编译","slug":"模版预编译","link":"#模版预编译","children":[]},{"level":2,"title":"挂载","slug":"挂载","link":"#挂载","children":[]},{"level":2,"title":"总结：完整流程","slug":"总结-完整流程","link":"#总结-完整流程","children":[]},{"level":2,"title":"Vue template 到 render 的过程","slug":"vue-template-到-render-的过程","link":"#vue-template-到-render-的过程","children":[]}],"relativePath":"vue/vdom.md","lastUpdated":1706324209000}'),c={name:"vue/vdom.md"},t=l(`<h1 id="虚拟-dom" tabindex="-1">虚拟 DOM <a class="header-anchor" href="#虚拟-dom" aria-hidden="true">#</a></h1><h2 id="什么是虚拟-dom" tabindex="-1">什么是虚拟 dom？ <a class="header-anchor" href="#什么是虚拟-dom" aria-hidden="true">#</a></h2><p>虚拟 dom 本质上就是一个普通的 JS 对象，用于描述视图的界面结构 在 vue 中，每个组件都有一个<code>render</code>函数，每个<code>render</code>函数都会返回一个虚拟 dom 树，这也就意味着每个组件都对应一棵虚拟 DOM 树</p><p>查看虚拟 DOM：</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#61AFEF;">mounted</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">_vnode</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">},</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">mounted() {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">console</span><span style="color:#B392F0;">.log(</span><span style="color:#79B8FF;">this</span><span style="color:#B392F0;">._vnode);</span></span>
<span class="line"><span style="color:#B392F0;">}</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>vdom 结构：</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">vnode</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">tag</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;h1&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">children</span><span style="color:#ABB2BF;">: [{ </span><span style="color:#E06C75;">tag</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">undefined</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">text</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;第一个vue应用：Hello World&quot;</span><span style="color:#ABB2BF;"> }],</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#B392F0;"> vnode </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  tag</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;h1&quot;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  children</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> [{ tag</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">undefined</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> text</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;第一个vue应用：Hello World&quot;</span><span style="color:#B392F0;"> }]</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>上面的对象描述了：有一个标签名为 h1 的节点，它有一个子节点，该子节点是一个文本，内容为第一个 vue 应用：Hello World</p><p><img src="`+p+`" alt=""></p><h2 id="为什么需要虚拟-dom" tabindex="-1">为什么需要虚拟 dom？ <a class="header-anchor" href="#为什么需要虚拟-dom" aria-hidden="true">#</a></h2><ul><li>解决框架自身的效率问题（权衡）</li><li>抽象层次和表达力</li></ul><p>在<code>vue</code>中，渲染视图会调用<code>render</code>函数，这种渲染不仅发生在组件创建时，同时发生在视图依赖的数据更新时。如果在渲染时，直接使用真实<code>DOM</code>，由于真实<code>DOM</code>的创建、更新、插入等操作会带来大量的性能损耗，从而就会极大的降低渲染效率。 因此，<code>vue</code>在渲染时，使用虚拟 dom 来替代真实 dom，主要为解决渲染效率的问题。</p><p>对比 JS 对象和真实 DOM 对象</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">times</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">10000000</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">time</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">\`js object\`</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">; </span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">times</span><span style="color:#ABB2BF;">; </span><span style="color:#E06C75;">i</span><span style="color:#56B6C2;">++</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {};</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">timeEnd</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;js object&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">time</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">\`dom object\`</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">; </span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">times</span><span style="color:#ABB2BF;">; </span><span style="color:#E06C75;">i</span><span style="color:#56B6C2;">++</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">createElement</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;div&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">timeEnd</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;dom object&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#B392F0;"> times </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">10000000</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#79B8FF;">console</span><span style="color:#B392F0;">.time(</span><span style="color:#FFAB70;">\`js object\`</span><span style="color:#B392F0;">);</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#B392F0;"> (</span><span style="color:#F97583;">var</span><span style="color:#B392F0;"> i </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0</span><span style="color:#B392F0;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#B392F0;"> times; i</span><span style="color:#F97583;">++</span><span style="color:#B392F0;">) {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">var</span><span style="color:#B392F0;"> obj </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> {};</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#79B8FF;">console</span><span style="color:#B392F0;">.timeEnd(</span><span style="color:#FFAB70;">&quot;js object&quot;</span><span style="color:#B392F0;">);</span></span>
<span class="line"><span style="color:#79B8FF;">console</span><span style="color:#B392F0;">.time(</span><span style="color:#FFAB70;">\`dom object\`</span><span style="color:#B392F0;">);</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#B392F0;"> (</span><span style="color:#F97583;">var</span><span style="color:#B392F0;"> i </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0</span><span style="color:#B392F0;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#B392F0;"> times; i</span><span style="color:#F97583;">++</span><span style="color:#B392F0;">) {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">var</span><span style="color:#B392F0;"> obj </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">document</span><span style="color:#B392F0;">.createElement(</span><span style="color:#FFAB70;">&quot;div&quot;</span><span style="color:#B392F0;">);</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#79B8FF;">console</span><span style="color:#B392F0;">.timeEnd(</span><span style="color:#FFAB70;">&quot;dom object&quot;</span><span style="color:#B392F0;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="虚拟-dom-是如何转换为真实-dom-的" tabindex="-1">虚拟 dom 是如何转换为真实 dom 的？ <a class="header-anchor" href="#虚拟-dom-是如何转换为真实-dom-的" aria-hidden="true">#</a></h2><p>在一个组件实例首次被渲染时，它先生成虚拟 dom 树，然后根据虚拟 dom 树创建真实 dom，并把真实 dom 挂载到页面中合适的位置，此时，每个虚拟 dom 便会对应一个真实的 dom。<strong>这时候虚拟 dom 多一个创建虚拟 dom 树的过程，所以效率比真实 dom 低。</strong></p><p>如果一个组件受响应式数据变化的影响，需要重新渲染时，它仍然会重新调用 render 函数，创建出一个新的虚拟 dom 树，用新树和旧树对比，通过对比，vue 会找到<strong>最小更新量</strong>，然后<strong>更新必要的虚拟 dom 节点</strong>，最后，这些更新过的虚拟节点，会去修改它们对应的真实 dom</p><blockquote><p>实际直接使用新树，抛弃旧树，只更新必要的真实 dom 这样一来，就保证了对真实 dom 达到最小的改动。</p></blockquote><p><img src="`+o+`" alt=""></p><p>虚拟 DOM 树会最终生成为真实的 DOM 树，这个过程叫渲染 当数据变化后，将引发重新渲染，vue 会比较新旧两棵 vnode tree，找出差异，然后仅把差异部分应用到真实 dom tree 中。对比的是对象，效率很高</p><p><strong>可见，在 vue 中，要得到最终的界面，必须要生成一个 vnode tree</strong></p><p><strong>渲染的本质: render 生成虚拟 DOM</strong></p><h2 id="模板和虚拟-dom-的关系" tabindex="-1">模板和虚拟 dom 的关系 <a class="header-anchor" href="#模板和虚拟-dom-的关系" aria-hidden="true">#</a></h2><p>vue 框架中有一个<code>compile</code>模块，它主要负责将模板(实际上是字符串)转换为<code>render</code>函数，而<code>render</code>函数调用后将得到虚拟 dom。</p><p>编译的过程分两步：</p><p>a. 将模板字符串转换成为<code>AST</code>抽象语法树</p><p>b. 将<code>AST</code>转换为<code>render</code>函数</p><div class="info custom-block"><p class="custom-block-title">AST 是什么？</p><p>一句话概括：使用 js 树形结构描述原始代码</p></div><ul><li><p>如果使用传统的引入方式(script 的 src)，则编译时间发生在组件第一次加载时，这称之为运行时编译。</p></li><li><p>如果是在<code>vue-cli</code>的默认配置下，编译发生在打包时，这称之为模板预编译。（打包的时候编译完成）</p></li><li><p>编译是一个极其耗费性能的操作，预编译可以有效的提高运行时的性能，而且，由于运行的时候已不需要编译，<code>vue-cli</code>在打包时会排除掉<code>vue</code>中的<code>compile</code>模块，以减少打包体积</p></li></ul><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//vue config.js</span></span>
<span class="line"><span style="color:#E5C07B;">module</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">runtimeCompiler</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;">//打包的时候要不要包含运行时候编译，默认false，不建议使用true</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#6B737C;">//vue config.js</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#B392F0;">.export </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  runtimeCompiler</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">true</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#6B737C;">//打包的时候要不要包含运行时候编译，默认false，不建议使用true</span></span>
<span class="line"><span style="color:#B392F0;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>模板的存在，仅仅是为了让开发人员更加方便的书写界面代码</p><p><strong>vue 最终运行的时候，最终需要的是 render 函数，而不是模板，因此，模板中的各种语法，在虚拟 dom 中都是不存在的，它们都会变成虚拟 dom 的配置</strong></p><p>总之：模板会编译成 render 方法，最终总是 render()</p><p><strong>注意：虚拟节点树必须是单根的，所以模板必须单根（v2）</strong></p><h2 id="模版预编译" tabindex="-1">模版预编译 <a class="header-anchor" href="#模版预编译" aria-hidden="true">#</a></h2><p>当<code>vue-cli</code>进行<strong>打包</strong>时，会直接把组件中的模板转换为<code>render</code>函数，这叫做模板预编译 这样做的好处在于：</p><ol><li>运行时就不再需要编译模板了，提高了运行效率</li><li>打包结果中不再需要 vue 的编译代码，减少了打包体积</li></ol><p><img src="`+e+'" alt=""></p><blockquote><p>易混淆：vue-cli 打包存在预编译，发现有模板，会覆盖 render；</p><p>在 vue 中，如果有模板和 render，则 render 优先</p></blockquote><h2 id="挂载" tabindex="-1">挂载 <a class="header-anchor" href="#挂载" aria-hidden="true">#</a></h2><p>将生成的真实 DOM 树，放置到某个元素位置，称之为<strong>挂载</strong> 挂载的方式：</p><ol><li>通过<code>el:&quot;css选择器&quot;</code>进行配置</li><li>通过<code>vue实例.$mount(&quot;css选择器&quot;)</code>进行配置</li></ol><h2 id="总结-完整流程" tabindex="-1">总结：完整流程 <a class="header-anchor" href="#总结-完整流程" aria-hidden="true">#</a></h2><p><img src="'+r+`" alt=""></p><h2 id="vue-template-到-render-的过程" tabindex="-1">Vue template 到 render 的过程 <a class="header-anchor" href="#vue-template-到-render-的过程" aria-hidden="true">#</a></h2><p>vue 的模版编译过程主要如下：<strong>template -&gt; ast -&gt; render 函数</strong> vue 在模版编译版本的码中会执行 compileToFunctions 将 template 转化为 render 函数：</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 将模板编译为render函数</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">render</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">staticRenderFns</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">compileToFunctions</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;">options</span><span style="color:#7F848E;font-style:italic;">//省略}, this)</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#6B737C;">// 将模板编译为render函数</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> { </span><span style="color:#79B8FF;">render</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">staticRenderFns</span><span style="color:#B392F0;"> } </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> compileToFunctions(template</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;">options</span><span style="color:#6B737C;">//省略}, this)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>CompileToFunctions 中的主要逻辑如下 ∶ <strong>（1）调用 parse 方法将 template 转化为 ast（抽象语法树）</strong></p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">constast</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">parse</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">template</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">trim</span><span style="color:#ABB2BF;">(), </span><span style="color:#E06C75;">options</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">constast </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> parse(</span><span style="color:#79B8FF;">template</span><span style="color:#B392F0;">.trim()</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> options);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><strong>parse 的目标</strong>：把 tamplate 转换为 AST 树，它是一种用 JavaScript 对象的形式来描述整个模板。</li><li><strong>解析过程</strong>：利用正则表达式顺序解析模板，当解析到开始标签、闭合标签、文本的时候都会分别执行对应的 回调函数，来达到构造 AST 树的目的。</li></ul><p>AST 元素节点总共三种类型：type 为 1 表示普通元素、2 为表达式、3 为纯文本 <strong>（2）对静态节点做优化</strong></p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#61AFEF;">optimize</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">ast</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">options</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">optimize(ast</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> options);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这个过程主要分析出哪些是静态节点，给其打一个标记，为后续更新渲染可以直接跳过静态节点做优化</p><p>深度遍历 AST，查看每个子树的节点元素是否为静态节点或者静态节点根。如果为静态节点，他们生成的 DOM 永远不会改变，这对运行时模板更新起到了极大的优化作用。</p><p><strong>（3）生成代码</strong></p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">code</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">generate</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">ast</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">options</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">code</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> generate(ast</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> options);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>generate 将 ast 抽象语法树编译成 render 字符串并将静态部分放到 staticRenderFns 中，最后通过 new Function(<code>render</code>) 生成 render 函数。</p>`,57),B=[t];function i(d,y,F,m,u,v){return n(),a("div",null,B)}const h=s(c,[["render",i]]);export{b as __pageData,h as default};
