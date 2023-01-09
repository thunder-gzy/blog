import{_ as s,c as a,o as n,a as l}from"./app.db61a8d7.js";const p="/blog/assets/2023-01-06-16-57-09.02129cc3.png",o="/blog/assets/2023-01-06-16-58-00.54f4410f.png",h=JSON.parse('{"title":"webpack 5","description":"","frontmatter":{},"headers":[{"level":2,"title":"top-level-await","slug":"top-level-await","link":"#top-level-await","children":[]},{"level":2,"title":"打包体积优化","slug":"打包体积优化","link":"#打包体积优化","children":[]},{"level":2,"title":"打包缓存开箱即用","slug":"打包缓存开箱即用","link":"#打包缓存开箱即用","children":[]},{"level":2,"title":"资源模块","slug":"资源模块","link":"#资源模块","children":[]},{"level":2,"title":"模块联邦","slug":"模块联邦","link":"#模块联邦","children":[{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":3,"title":"暴露自身模块","slug":"暴露自身模块","link":"#暴露自身模块","children":[]},{"level":3,"title":"使用对方暴露的模块","slug":"使用对方暴露的模块","link":"#使用对方暴露的模块","children":[]},{"level":3,"title":"共享模块","slug":"共享模块","link":"#共享模块","children":[]}]}],"relativePath":"front-end-engineering/webpack5.md","lastUpdated":1672995499000}'),e={name:"front-end-engineering/webpack5.md"},c=l(`<h1 id="webpack-5" tabindex="-1">webpack 5 <a class="header-anchor" href="#webpack-5" aria-hidden="true">#</a></h1><h2 id="top-level-await" tabindex="-1">top-level-await <a class="header-anchor" href="#top-level-await" aria-hidden="true">#</a></h2><p><code>webpack5</code>现在允许在模块的顶级代码中直接使用<code>await</code></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> resp </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fetch</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://www.baidu.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> jsonBody </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> resp</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">json</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> jsonBody</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>目前，<code>top-level-await</code>还未成为正式标准，因此，对于<code>webpack5</code>而言，该功能是作为<code>experiments</code>发布的，需要在<code>webpack.config.js</code>中配置开启</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// webpack.config.js</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">experiments</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">topLevelAwait</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h2 id="打包体积优化" tabindex="-1">打包体积优化 <a class="header-anchor" href="#打包体积优化" aria-hidden="true">#</a></h2><p><code>webpack5</code>对模块的合并、作用域提升、<code>tree shaking</code>等处理更加智能</p><h2 id="打包缓存开箱即用" tabindex="-1">打包缓存开箱即用 <a class="header-anchor" href="#打包缓存开箱即用" aria-hidden="true">#</a></h2><p>在<code>webpack4</code>中，需要使用<code>cache-loader</code>缓存打包结果以优化之后的打包性能</p><p>而在<code>webpack5</code>中，默认就已经开启了打包缓存，无须再安装<code>cache-loader</code></p><p>默认情况下，<code>webpack5</code>是将模块的打包结果缓存到内存中，可以通过<code>cache</code>配置进行更改</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> path </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">path</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">cache</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 缓存类型，支持：memory、filesystem</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">filesystem</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 缓存目录，仅类型为 filesystem 有效</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">cacheDirectory</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#A6ACCD;">(__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">node_modules/.cache/webpack</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><blockquote><p><a href="https://webpack.docschina.org/configuration/other-options/#cache" target="_blank" rel="noreferrer">关于<code>cache</code>的更多配置参考</a></p></blockquote><h2 id="资源模块" tabindex="-1">资源模块 <a class="header-anchor" href="#资源模块" aria-hidden="true">#</a></h2><p>在<code>webpack4</code>中，针对资源型文件我们通常使用<code>file-loader</code>、<code>url-loader</code>、<code>raw-loader</code>进行处理</p><p>由于大部分前端项目都会用到资源型文件，因此<code>webpack5</code>原生支持了资源型模块</p><p>详见：<a href="https://webpack.docschina.org/guides/asset-modules/" target="_blank" rel="noreferrer">https://webpack.docschina.org/guides/asset-modules/</a></p><h2 id="模块联邦" tabindex="-1">模块联邦 <a class="header-anchor" href="#模块联邦" aria-hidden="true">#</a></h2><p>在大型项目中，往往会把项目中的某个区域或功能模块作为单独的项目开发，最终形成「微前端」架构</p><p>在微前端架构中，不同的工程可能出现下面的场景</p><p><img src="`+p+'" alt=""></p><p>这涉及到很多非常棘手的问题：</p><ul><li>如何避免公共模块重复打包</li><li>如何将某个项目中一部分模块分享出去，同时还要避免重复打包</li><li>如何管理依赖的不同版本</li><li>如何更新模块</li><li><code>......</code></li></ul><p><code>webpack5</code>尝试着通过<code>模块联邦</code>来解决此类问题</p><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-hidden="true">#</a></h3><p>现有两个微前端工程，它们各自独立开发、测试、部署，但它们有一些相同的公共模块，并有一些自己的模块需要分享给其他工程使用，同时又要引入其他工程的模块。</p><p><img src="'+o+`" alt=""></p><h3 id="暴露自身模块" tabindex="-1">暴露自身模块 <a class="header-anchor" href="#暴露自身模块" aria-hidden="true">#</a></h3><p>如果一个项目需要把一部分模块暴露给其他项目使用，可以使用<code>webpack5</code>的模块联邦将这些模块暴露出去</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// webpack.config.js</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> ModuleFederationPlugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">webpack/lib/container/ModuleFederationPlugin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 使用模块联邦插件</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ModuleFederationPlugin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 模块联邦的名称</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 该名称将成为一个全部变量，通过该变量将可获取当前联邦的所有暴露模块</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">home</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 模块联邦生成的文件名，全部变量将置入到该文件中</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">filename</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">home-entry.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 模块联邦暴露的所有模块</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">exposes</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// key：相对于模块联邦的路径</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 这里的 ./Timer 将决定该模块的访问路径为 home/Timer</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// value: 模块的具体路径</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">./Timer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./src/Timer.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="使用对方暴露的模块" tabindex="-1">使用对方暴露的模块 <a class="header-anchor" href="#使用对方暴露的模块" aria-hidden="true">#</a></h3><p>在模块联邦的配置中，不仅可以暴露自身模块，还可以使用其他项目暴露的模块</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// webpack.config.js</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> ModuleFederationPlugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">webpack/lib/container/ModuleFederationPlugin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 使用模块联邦插件</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ModuleFederationPlugin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 远程使用其他项目暴露的模块</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">remotes</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// key: 自定义远程暴露的联邦名</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 比如为 abc， 则之后引用该联邦的模块则使用 import &quot;abc/模块名&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// value: 模块联邦名@模块联邦访问地址</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 远程访问时，将从下面的地址加载</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">home</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">home@http://localhost:8080/home-entry.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="共享模块" tabindex="-1">共享模块 <a class="header-anchor" href="#共享模块" aria-hidden="true">#</a></h3><p>不同的项目可能使用了一些公共的第三方库，可以将这些第三方库作为共享模块，避免反复打包</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// webpack.config.js</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> ModuleFederationPlugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">webpack/lib/container/ModuleFederationPlugin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 使用模块联邦插件</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ModuleFederationPlugin</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">shared</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">jquery</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lodash</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><code>webpack</code>会根据需要从合适的位置引入合适的版本</p>`,38),t=[c];function r(D,i,y,F,C,A){return n(),a("div",null,t)}const u=s(e,[["render",r]]);export{h as __pageData,u as default};
