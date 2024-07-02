import{_ as s,o as n,c as a,a as l}from"./app.f983686f.js";const d=JSON.parse('{"title":"CSS 预处理器之 SCSS","description":"","frontmatter":{},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"CSS 预处理器","slug":"css-预处理器","link":"#css-预处理器","children":[{"level":3,"title":"预处理器基本介绍","slug":"预处理器基本介绍","link":"#预处理器基本介绍","children":[]},{"level":3,"title":"Sass 快速入门","slug":"sass-快速入门","link":"#sass-快速入门","children":[]}]},{"level":2,"title":"Sass 基础语法","slug":"sass-基础语法","link":"#sass-基础语法","children":[{"level":3,"title":"注释","slug":"注释","link":"#注释","children":[]},{"level":3,"title":"变量","slug":"变量","link":"#变量","children":[]},{"level":3,"title":"数据类型","slug":"数据类型","link":"#数据类型","children":[]},{"level":3,"title":"嵌套语法","slug":"嵌套语法","link":"#嵌套语法","children":[]},{"level":3,"title":"插值语法","slug":"插值语法","link":"#插值语法","children":[]},{"level":3,"title":"运算","slug":"运算","link":"#运算","children":[]}]},{"level":2,"title":"Sass 控制指令","slug":"sass-控制指令","link":"#sass-控制指令","children":[{"level":3,"title":"三元运算符","slug":"三元运算符","link":"#三元运算符","children":[]},{"level":3,"title":"三元运算符","slug":"三元运算符-1","link":"#三元运算符-1","children":[]},{"level":3,"title":"@if 分支","slug":"if-分支","link":"#if-分支","children":[]},{"level":3,"title":"@for 循环","slug":"for-循环","link":"#for-循环","children":[]},{"level":3,"title":"@while 循环","slug":"while-循环","link":"#while-循环","children":[]},{"level":3,"title":"@each 循环","slug":"each-循环","link":"#each-循环","children":[]}]},{"level":2,"title":"Sass 混合指令","slug":"sass-混合指令","link":"#sass-混合指令","children":[{"level":3,"title":"混合指令基本的使用","slug":"混合指令基本的使用","link":"#混合指令基本的使用","children":[]},{"level":3,"title":"混合指令的参数","slug":"混合指令的参数","link":"#混合指令的参数","children":[]},{"level":3,"title":"@content","slug":"content","link":"#content","children":[]}]},{"level":2,"title":"Sass 函数指令","slug":"sass-函数指令","link":"#sass-函数指令","children":[{"level":3,"title":"自定义函数","slug":"自定义函数","link":"#自定义函数","children":[]},{"level":3,"title":"内置函数","slug":"内置函数","link":"#内置函数","children":[]}]},{"level":2,"title":"@规则","slug":"规则","link":"#规则","children":[{"level":3,"title":"@import","slug":"import","link":"#import","children":[]},{"level":3,"title":"@media","slug":"media","link":"#media","children":[]},{"level":3,"title":"@extend","slug":"extend","link":"#extend","children":[]},{"level":3,"title":"@at-root","slug":"at-root","link":"#at-root","children":[]},{"level":3,"title":"@debug、@warn、@error","slug":"debug、-warn、-error","link":"#debug、-warn、-error","children":[]}]},{"level":2,"title":"Sass 最佳实践与展望","slug":"sass-最佳实践与展望","link":"#sass-最佳实践与展望","children":[{"level":3,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[]},{"level":3,"title":"Sass 未来发展","slug":"sass-未来发展","link":"#sass-未来发展","children":[]}]}],"relativePath":"front-end-engineering/CSS 预处理器之SCSS.md","lastUpdated":1715070178000}'),p={name:"front-end-engineering/CSS 预处理器之SCSS.md"},o=l(`<h1 id="css-预处理器之-scss" tabindex="-1">CSS 预处理器之 SCSS <a class="header-anchor" href="#css-预处理器之-scss" aria-hidden="true">#</a></h1><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-hidden="true">#</a></h2><p>前端目前要做的事情是越来越多了，实际上有一部分工作是和业务逻辑无关的</p><ul><li>文件优化：压缩 <em>JavaScript</em>、<em>CSS</em>、<em>HTML</em> 代码，压缩合并图片等。</li><li>代码转换：将 <em>TypeScript</em>/<em>ES 6</em> 编译成 <em>JavaScript</em>、将 <em>SCSS</em> 编译成 <em>CSS</em> 等。</li><li>代码优化：为 <em>CSS</em> 代码添加兼容性前缀等。</li></ul><p>这些工作虽然和业务逻辑无关，但是你又不得不做。既然这些工作都要做，那么谁来做这些事情？</p><p>这里我们会通过一些工具来完成这些事情，但是这里又遇到一个问题，往往上面的这些事情需要好几个工作来完成。这里就会存在一种情况：需要先将项目拖入到工具 A 进行处理，拖入到工具 B 进行处理、C、D、E...</p><p>上面的步骤显得非常的麻烦，我们期望有那么一个工具能够帮助我们把上面的事情按照一定的顺序自动化的完成，这个工具就是我们前端构建工具。</p><p>总的来讲，“构建工具”里面“构建”二字是一个重点，这个工具究竟构建了一个啥？</p><p><strong>将我们开发环境下的项目代码构建为能够部署上线的代码</strong>。</p><p>通过构建工具，我们就可以省去繁杂的步骤，直接一条指令就能将开发环境的项目构建为生产环境的项目代码，之后要做的就是部署上线即可。</p><p>目前前端领域有非常的多的构建工具，整体来讲可以分为三代：</p><ul><li>第一代构建工具：以 grunt、gulp 为代表的构建工具</li><li>第二代构建工具：以 webpack 为代表的构建工具</li><li>第三代构建工具：以 Vite 为代表的构建工具</li></ul><ol><li>模块化</li></ol><p>模块化是将 <em>CSS</em> 代码分解成独立的、可重用的模块，从而提高代码的可维护性和可读性。通常，每个模块都关注一个特定的功能或组件的样式。这有助于减少样式之间的依赖和冲突，也使得找到和修改相关样式变得更容易。模块化的实现可以通过原生的 <em>CSS</em> 文件拆分，或使用预处理器（如 <em>Sass</em>）的功能（例如 @<em>import</em> 和 @<em>use</em>）来实现。</p><ol start="2"><li>命名规范</li></ol><p>为 <em>CSS</em> 类名和选择器定义一致的命名规范有助于提高代码的可读性和可维护性。</p><p>以下是一些常见的命名规范：</p><p><em>BEM</em>（<em>Block</em>, <em>Element</em>, <em>Modifier</em>）：<em>BEM</em> 是一种命名规范，将类名分为三个部分：块（<em>Block</em>）、元素（<em>Element</em>）和修饰符（<em>Modifier</em>）。这种方法有助于表示组件之间的层级关系和状态变化。例如，<em>navigation__link--active</em>。</p><p><em>OOCSS</em>（面向对象的 <em>CSS</em>）：<em>OOCSS</em> 旨在将可重用的样式划分为独立的“对象”，从而提高代码的可维护性和可扩展性。这种方法强调将结构（如布局）与皮肤（如颜色和字体样式）分离。这样可以让你更容易地复用和组合样式，创建更灵活的 UI 组件。</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;btn btn--primary&quot;</span><span style="color:#ABB2BF;">&gt;Primary Button&lt;/</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;btn btn--secondary&quot;</span><span style="color:#ABB2BF;">&gt;Secondary Button&lt;/</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">&lt;</span><span style="color:#FFAB70;">button</span><span style="color:#B392F0;"> class</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;btn btn--primary&quot;</span><span style="color:#B392F0;">&gt;Primary Button&lt;/</span><span style="color:#FFAB70;">button</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">&lt;</span><span style="color:#FFAB70;">button</span><span style="color:#B392F0;"> class</span><span style="color:#F97583;">=</span><span style="color:#FFAB70;">&quot;btn btn--secondary&quot;</span><span style="color:#B392F0;">&gt;Secondary Button&lt;/</span><span style="color:#FFAB70;">button</span><span style="color:#B392F0;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/* 结构样式 */</span></span>
<span class="line"><span style="color:#D19A66;">.btn</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">inline-block</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border: </span><span style="color:#D19A66;">none</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  cursor: </span><span style="color:#D19A66;">pointer</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">16</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* 皮肤样式 */</span></span>
<span class="line"><span style="color:#D19A66;">.btn--primary</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">blue</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">white</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.btn--secondary</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">gray</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">white</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#6B737C;">/* 结构样式 */</span></span>
<span class="line"><span style="color:#B392F0;">.btn {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">display</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">inline-block</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">padding</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">10px 20px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">border</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">none</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">cursor</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">pointer</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">16px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6B737C;">/* 皮肤样式 */</span></span>
<span class="line"><span style="color:#B392F0;">.btn--primary {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">blue</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">white</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.btn--secondary {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">gray</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">white</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><em>SMACSS</em>（可扩展和模块化的 <em>CSS</em> 架构）：是一种 <em>CSS</em> 编写方法，旨在提高 <em>CSS</em> 代码的可维护性、可扩展性和灵活性。<em>SMACSS</em> 将样式分为五个基本类别：<em>Base、Layout、Module、State</em> 和 <em>Theme</em>。这有助于组织 <em>CSS</em> 代码并使其易于理解和修改。</p><ul><li><em>Base</em>：包含全局样式和元素默认样式，例如：浏览器重置、全局字体设置等。</li><li><em>Layout</em>：描述页面布局的大致结构，例如：页面分区、网格系统等。</li><li><em>Module</em>：表示可重用的 <em>UI</em> 组件，例如：按钮、卡片、表单等。</li><li><em>State</em>：表示 <em>UI</em> 组件的状态，例如：激活、禁用、隐藏等。通常，状态类会与其他类一起使用以修改其显示。</li><li><em>Theme</em>：表示 <em>UI</em> 组件的视觉样式，例如：颜色、字体等。通常，主题类用于支持多个主题或在不同上下文中使用相同的组件。</li></ul><ol start="3"><li>预处理器</li></ol><p><em>CSS</em> 预处理器（如 <em>Sass、Less</em> 和 <em>Stylus</em>）是一种编程式的 <em>CSS</em> 语言，可以在开发过程中提供更高级的功能，如变量、嵌套、函数和混合等。预处理器将这些扩展语法编译为普通的 <em>CSS</em> 代码，以便浏览器能够解析。</p><ol start="4"><li>后处理器</li></ol><p><em>CSS</em> 后处理器（如 <em>PostCSS</em>）可以在生成的 <em>CSS</em> 代码上执行各种操作，如添加浏览器前缀、优化规则和转换现代 <em>CSS</em> 功能以兼容旧浏览器等。它通常与构建工具（例如 <em>Webpack</em>）一起使用，以自动化这些任务。</p><ol start="5"><li>代码优化</li></ol><p>代码优化旨在减少 <em>CSS</em> 文件的大小、删除无用代码和提高性能。一些常见的优化工具包括：</p><ul><li><p><em>CSSO</em>：<em>CSSO</em> 是一个 <em>CSS</em> 优化工具，可以压缩代码、删除冗余规则和合并相似的声明。</p></li><li><p><em>PurgeCSS</em>：<em>PurgeCSS</em> 是一个用于删除无用 <em>CSS</em> 规则的工具。它通过分析项目的 <em>HTML、JS</em> 和模板文件来检测实际使用的样式，并删除未使用的样式。</p></li><li><p><em>clean-css</em>：<em>clean-css</em> 是一个高效的 <em>CSS</em> 压缩工具，可以删除空格、注释和重复的规则等，以减小文件大小。</p></li></ul><ol start="6"><li>构建工具和自动化</li></ol><p>构建工具（如 <em>Webpack</em>、<em>Gulp</em> 或 <em>Grunt</em>）可以帮助您自动化开发过程中的任务，如编译预处理器代码、合并和压缩 <em>CSS</em> 文件、优化图片等。这可以提高开发效率，确保项目的一致性，并简化部署流程。这些工具通常可以通过插件和配置来定制，以满足项目的特定需求。</p><ol start="7"><li>响应式设计和移动优先</li></ol><p>响应式设计是一种使网站在不同设备和屏幕尺寸上都能保持良好显示效果的方法。这通常通过使用媒体查询、弹性布局（如 <em>Flexbox</em> 和 <em>CSS Grid</em>）和其他技术实现。移动优先策略是从最小屏幕尺寸（如手机）开始设计样式，然后逐步增强以适应更大的屏幕尺寸（如平板和桌面）。这种方法有助于保持代码的简洁性，并确保网站在移动设备上的性能优先。</p><ol start="8"><li>设计系统和组件库</li></ol><p>设计系统是一套规范，为开发人员和设计师提供统一的样式指南（如颜色、排版、间距等）、组件库和最佳实践。这有助于提高项目的一致性、可维护性和协作效率。组件库通常包含一系列预定义的可复用组件（如按钮、输入框、卡片等），可以快速集成到项目中。一些流行的组件库和 <em>UI</em> 框架包括 <em>Bootstrap、Foundation</em> 和 <em>Material-UI</em> 等。</p><p>因此整个 CSS 都是逐渐在向工程化靠近的，上面所罗列的那么几点都是 CSS 在工程化方面的一些体现。</p><h2 id="css-预处理器" tabindex="-1">CSS 预处理器 <a class="header-anchor" href="#css-预处理器" aria-hidden="true">#</a></h2><h3 id="预处理器基本介绍" tabindex="-1">预处理器基本介绍 <a class="header-anchor" href="#预处理器基本介绍" aria-hidden="true">#</a></h3><p>平时在工作的时候，经常会面临这样的情况：需要书写很多的样式代码，特别是面对比较大的项目的时候，代码量会急剧提升，普通的 CSS 书写方式不方便维护以及扩展还有复用。</p><p>通过 CSS 预处理技术就可以解决上述的问题。基于预处理技术的语言，我们可以称之为 CSS 预处理语言，该语言会为你提供一套增强语法，我们在书写 CSS 的时候就使用增强语法来书写，书写完毕后通过预处理技术编译为普通的 CSS 语言即可。</p><p>CSS 预处理器的出现，解决了如下的问题：</p><ul><li>代码组织：通过嵌套、模块化和文件引入等功能，使 <em>CSS</em> 代码结构更加清晰，便于管理和维护。</li><li>变量和函数：支持自定义变量和函数，增强代码的可重用性和一致性。</li><li>代码简洁：通过简洁的语法结构和内置函数，减少代码冗余，提高开发效率。</li><li>易于扩展：可以通过插件系统扩展预处理器的功能，方便地添加新特性。</li></ul><p>目前前端领域常见的 CSS 预处理器有三个：</p><ul><li>Sass</li><li>Less</li><li>Stylus</li></ul><p>下面我们对这三个 CSS 预处理器做一个简单的介绍。</p><p><strong>Sass</strong></p><p>Sass 是最早出现的 CSS 预处理器，出现的时间为 2006 年，该预处理器有两种语法格式：</p><ul><li>缩进式语法（2006 年）</li></ul><div class="language-sass line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">$primary-color</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#4CAF50</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.container</span></span>
<span class="line"><span style="color:#ABB2BF;">	background-color: </span><span style="color:#E06C75;">$primary-color</span></span>
<span class="line"><span style="color:#ABB2BF;">	padding: </span><span style="color:#D19A66;">20</span><span style="color:#C678DD;">px</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.title</span></span>
<span class="line"><span style="color:#ABB2BF;">    font-size: </span><span style="color:#D19A66;">24</span><span style="color:#C678DD;">px</span></span>
<span class="line"><span style="color:#ABB2BF;">    color: </span><span style="color:#D19A66;">white</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">$primary-color: </span><span style="color:#79B8FF;">#4CAF50</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.container</span></span>
<span class="line"><span style="color:#B392F0;">	</span><span style="color:#79B8FF;">background-color</span><span style="color:#B392F0;">: $primary-color</span></span>
<span class="line"><span style="color:#B392F0;">	</span><span style="color:#79B8FF;">padding</span><span style="color:#B392F0;">: </span><span style="color:#F8F8F8;">20</span><span style="color:#F97583;">px</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  .title</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">font-size</span><span style="color:#B392F0;">: </span><span style="color:#F8F8F8;">24</span><span style="color:#F97583;">px</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">color</span><span style="color:#B392F0;">: </span><span style="color:#79B8FF;">white</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>类 CSS 语法（2009 年）</li></ul><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">$primary-color</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#4caf50</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.container</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#E06C75;">$primary-color</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.title</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    font-size: </span><span style="color:#D19A66;">24</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    color: </span><span style="color:#D19A66;">white</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">$primary-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> #4caf50;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.container {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$primary-color</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">padding</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">20px</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  .title {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">24px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">white</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Sass 提供了很多丰富的功能，例如有声明变量、嵌套、混合、继承、函数等，另外 Sass 还有强大的社区支持以及丰富的插件资源，因此 Sass 比较适合大型项目以及团队协作。</p><ul><li>Less：Less 也是一个比较流行的 CSS 预处理器，该预处理器是在 2009 年出现的，该预处理器借鉴了 Sass 的长处，并在此基础上兼容 CSS 语法，让开发者开发起来更加的得心应手</li></ul><div class="language-less line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">@primary-color</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#4caf50</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.container</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#E06C75;">@primary-color</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.title</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    font-size: </span><span style="color:#D19A66;">24</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    color: </span><span style="color:#D19A66;">white</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">@primary-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> #4caf50;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.container {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">@primary-color</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">padding</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">20px</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  .title {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">24px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">white</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>早期的 Sass 一开始只有缩进式语法，所以 Less 的出现降低了开发者的学习成本，因为 Less 兼容原生 CSS 语法，相较于 Sass，Less 学习曲线平滑、语法简单，但是编程功能相比 Sass 要弱一些，并且插件和社区也没有 Sass 那么强大，Less 的出现反而让 Sass 出现了第二版语法（类 CSS 语法）</p><ul><li>Stylus：<em>Stylus</em> 是一种灵活且强大的 <em>CSS</em> 预处理器，其语法非常简洁，具有很高的自定义性。<em>Stylus</em> 支持多种语法风格，包括缩进式和类 <em>CSS</em> 语法。<em>Stylus</em> 提供了丰富的功能，如变量、嵌套、混合、条件语句、循环等。相较于 <em>Sass</em> 和 <em>Less</em>，<em>Stylus</em> 的社区规模较小，但仍有不少开发者喜欢其简洁灵活的特点。</li></ul><div class="language-stylus line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">stylus</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">primary-color</span><span style="color:#ABB2BF;"> = </span><span style="color:#D19A66;">#4CAF50</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.container</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color primary-color</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.title</span></span>
<span class="line"><span style="color:#ABB2BF;">    font-size </span><span style="color:#D19A66;">24</span><span style="color:#E06C75;">px</span></span>
<span class="line"><span style="color:#ABB2BF;">    color </span><span style="color:#D19A66;">white</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">primary-color </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> #4CAF50</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.container</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;"> </span><span style="color:#F8F8F8;">primary-color</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">padding</span><span style="color:#F97583;"> </span><span style="color:#F8F8F8;">20px</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  .title</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">font-size</span><span style="color:#F97583;"> </span><span style="color:#F8F8F8;">24px</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;"> </span><span style="color:#79B8FF;">white</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="sass-快速入门" tabindex="-1">Sass 快速入门 <a class="header-anchor" href="#sass-快速入门" aria-hidden="true">#</a></h3><p>Sass 最早是由 <em>Hampton Catlin</em> 于 2006 年开发的，并且于 2007 年首次发布。</p><p>在最初的时候， Sass 采用的是缩进敏感语法，文件的扩展名为 .sass，编写完毕之后，需要通过基于 ruby 的 ruby sass 的编译器编译为普通的 CSS。因此在最早期的时候，如果你想要使用 sass，你是需要安装 Ruby 环境。</p><p>为什么早期选择了采用 Ruby 呢？这和当时的 Web 开发大环境有关系，在 2006 - 2010 左右，当时 Web 服务器端开发就特别流行使用基于 Ruby 的 Web 框架 Ruby on Rails。像早期的 github、Twitter 一开始都是使用的 ruby。</p><p>到了 2009 年的时候， Less 的出现给 Sass 带来竞争压力，因为 Less 是基于原生 CSS 语法进行扩展，使用者没有什么学习压力，于是 <em>Natalie Weizenbaum</em> 和 <em>Chris Eppstein</em> 为 Sass 引入了新的类 CSS 语法，也是基于原生的 CSS 进行语法扩展，文件的后缀名为 scss。虽然文件的后缀以及语法更新了，但是功能上面仍然支持之前 sass 所支持的所有功能，加上 sass 本身插件以及社区就比 less 强大，因此 Sass 重新变为了主流。</p><p>接下来还需要说一下关于编译器。随着社区的发展和技术的进步，Sass 已经不在局限于 Ruby，目前已经有多种语言实现了 Sass 的编译器：</p><ul><li><p><em>Dart Sass</em>：由 <em>Sass</em> 官方团队维护，使用 <em>Dart</em> 语言编写。它是目前推荐的 <em>Sass</em> 编译器，因为它是最新的、功能最全的实现。</p><p><em>GitHub</em> 仓库：<em><a href="https://github.com/sass/dart-sass" target="_blank" rel="noreferrer">https://github.com/sass/dart-sass</a></em></p></li><li><p><em>LibSass</em>：使用 <em>C/C++</em> 编写的 <em>Sass</em> 编译器，它的性能优于 <em>Ruby</em> 版本。<em>LibSass</em> 有多个绑定，例如 <em>Node Sass</em>（ <em>Node.js</em> 绑定）和 <em>SassC</em>（<em>C</em> 绑定）。</p><p><em>GitHub</em> 仓库：<em><a href="https://github.com/sass/libsass" target="_blank" rel="noreferrer">https://github.com/sass/libsass</a></em></p></li><li><p><em>Ruby Sass</em>：最早的 <em>Ruby</em> 实现，已被官方废弃，并建议迁移到 <em>Dart Sass</em>。</p></li></ul><p>官方推荐使用 Dart Sass 来作为 Sass 的编译器，并且在 npm 上面发布了 Dart Sass 的包，直接通过 npm 安装即可。</p><p>接下来我们来看一个 Sass 的快速上手示例，首先创建一个新的项目目录 sass-demo，使用 pnpm init 进行项目初始化，之后安装 sass 依赖：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">pnpm </span><span style="color:#98C379;">add</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">sass</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-D</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">pnpm </span><span style="color:#9DB1C5;">add</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">sass</span><span style="color:#B392F0;"> </span><span style="color:#9DB1C5;">-D</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>接下来在 src/index.scss 里面写入如下的 scss 代码：</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">$primary-color</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#4caf50</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.container</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#E06C75;">$primary-color</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.title</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    font-size: </span><span style="color:#D19A66;">24</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    color: </span><span style="color:#D19A66;">white</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">$primary-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> #4caf50;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.container {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$primary-color</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">padding</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">20px</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  .title {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">24px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">white</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>接下来我们就会遇到第一个问题，编译。</p><p>这里我们就可以使用 sass 提供的 compile 方法进行编译。在 src 目录下面创建一个 index.js 文件，记入如下的代码：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 读取 scss 文件</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 调用 sass 依赖提供的 complie 进行文件的编译</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 最终在 dist 目录下面新生成一个 index.css（编译后的文件）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">sass</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;sass&quot;</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">// 做 scss 文件编译的</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">path</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;path&quot;</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">// 处理路径相关的</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">fs</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;fs&quot;</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">// 处理文件读写相关的</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 定义一下输入和输出的文件路径</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">scssPath</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">path</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">resolve</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;src&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;index.scss&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">cssDir</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;dist&quot;</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">// 之后编译的 index.css 要存储的目录名</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">cssPath</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">path</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">resolve</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">cssDir</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;index.css&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 编译</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">result</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">sass</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">compile</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">scssPath</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">result</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">css</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 将编译后的字符串写入到文件里面</span></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#56B6C2;">!</span><span style="color:#E5C07B;">fs</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">existsSync</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">cssDir</span><span style="color:#ABB2BF;">)) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 说明不存在，那就创建</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">fs</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">mkdirSync</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">cssDir</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">fs</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">writeFileSync</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">cssPath</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">result</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">css</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#6B737C;">// 读取 scss 文件</span></span>
<span class="line"><span style="color:#6B737C;">// 调用 sass 依赖提供的 complie 进行文件的编译</span></span>
<span class="line"><span style="color:#6B737C;">// 最终在 dist 目录下面新生成一个 index.css（编译后的文件）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">sass</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> require(</span><span style="color:#FFAB70;">&quot;sass&quot;</span><span style="color:#B392F0;">); </span><span style="color:#6B737C;">// 做 scss 文件编译的</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">path</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> require(</span><span style="color:#FFAB70;">&quot;path&quot;</span><span style="color:#B392F0;">); </span><span style="color:#6B737C;">// 处理路径相关的</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">fs</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> require(</span><span style="color:#FFAB70;">&quot;fs&quot;</span><span style="color:#B392F0;">); </span><span style="color:#6B737C;">// 处理文件读写相关的</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6B737C;">// 定义一下输入和输出的文件路径</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">scssPath</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">path</span><span style="color:#B392F0;">.resolve(</span><span style="color:#FFAB70;">&quot;src&quot;</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;index.scss&quot;</span><span style="color:#B392F0;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">cssDir</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;dist&quot;</span><span style="color:#B392F0;">; </span><span style="color:#6B737C;">// 之后编译的 index.css 要存储的目录名</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">cssPath</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">path</span><span style="color:#B392F0;">.resolve(cssDir</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;index.css&quot;</span><span style="color:#B392F0;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6B737C;">// 编译</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">result</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">=</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">sass</span><span style="color:#B392F0;">.compile(scssPath);</span></span>
<span class="line"><span style="color:#79B8FF;">console</span><span style="color:#B392F0;">.log(</span><span style="color:#79B8FF;">result</span><span style="color:#B392F0;">.css);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6B737C;">// 将编译后的字符串写入到文件里面</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#B392F0;"> (</span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">fs</span><span style="color:#B392F0;">.existsSync(cssDir)) {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#6B737C;">// 说明不存在，那就创建</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">fs</span><span style="color:#B392F0;">.mkdirSync(cssDir);</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">fs</span><span style="color:#B392F0;">.writeFileSync(cssPath</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">result</span><span style="color:#B392F0;">.css);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>上面的方式，每次需要手动的运行 index.js 来进行编译，而且还需要手动的指定要编译的文件是哪一个，比较麻烦。早期的时候出现了一个专门做 sass 编译的 GUI 工具，叫做考拉，对应的官网地址为：<a href="http://koala-app.com/" target="_blank" rel="noreferrer">http://koala-app.com/</a></p><p>现在随着 Vscode 这个集大成的 IDE 的出现，可以直接安装 Sass 相关的插件来做编译操作，例如 scss-to-css</p><p>注意在一开始安装的时候，该插件进行 scss 转换时会压缩 CSS 代码，这个是可以进行配置的。</p><h2 id="sass-基础语法" tabindex="-1">Sass 基础语法 <a class="header-anchor" href="#sass-基础语法" aria-hidden="true">#</a></h2><h3 id="注释" tabindex="-1">注释 <a class="header-anchor" href="#注释" aria-hidden="true">#</a></h3><p>CSS 里面的注释 /* */ ，Sass 中支持 // 来进行注释，// 类型的注释再编译后是会消失</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  Hello</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// World</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#6B737C;">/*</span></span>
<span class="line"><span style="color:#6B737C;">  Hello</span></span>
<span class="line"><span style="color:#6B737C;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6B737C;">// World</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  Hello</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">*/</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#6B737C;">/*</span></span>
<span class="line"><span style="color:#6B737C;">  Hello</span></span>
<span class="line"><span style="color:#6B737C;">*/</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>如果是压缩输出模式，那么注释也会被去掉，这个时候可以在多行注释的第一个字符书写一个 ! ，此时即便是在压缩模式，这条注释也会被保留，通常用于添加版权信息</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/*!</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  该 CSS 作者 XXX</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  创建于 xxxx年xx月xx日</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.test</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">300</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#6B737C;">/*!</span></span>
<span class="line"><span style="color:#6B737C;">  该 CSS 作者 XXX</span></span>
<span class="line"><span style="color:#6B737C;">  创建于 xxxx年xx月xx日</span></span>
<span class="line"><span style="color:#6B737C;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.test {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">300px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/*!</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  该 CSS 作者 XXX</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  创建于 xxxx年xx月xx日</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">*/</span></span>
<span class="line"><span style="color:#D19A66;">.test</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">300</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#6B737C;">/*!</span></span>
<span class="line"><span style="color:#6B737C;">  该 CSS 作者 XXX</span></span>
<span class="line"><span style="color:#6B737C;">  创建于 xxxx年xx月xx日</span></span>
<span class="line"><span style="color:#6B737C;">*/</span></span>
<span class="line"><span style="color:#B392F0;">.test {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">300px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-hidden="true">#</a></h3><p>这是当初 Sass 推出时一个极大的亮点，支持变量的声明，声明方式很简单，通过 $ 开头来进行声明，赋值方法和 CSS 属性的写法是一致的。</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 声明变量</span></span>
<span class="line"><span style="color:#E06C75;">$width</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1600</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$pen-size</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">3</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#E06C75;">$width</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#E06C75;">$pen-size</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#6B737C;">// 声明变量</span></span>
<span class="line"><span style="color:#B392F0;">$width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1600px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">$pen-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">3em</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$width</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$pen-size</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">1600</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">3</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1600px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">3em</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>变量的声明时支持块级作用域的，如果是在一个嵌套规则内部定义的变量，那么就只能在嵌套规则内部使用（局部变量），如果不是在嵌套规则内定义的变量那就是全局变量。</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 声明变量</span></span>
<span class="line"><span style="color:#E06C75;">$width</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1600</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">$width</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">800</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">p</span><span style="color:#D19A66;">.one</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    width: </span><span style="color:#E06C75;">$width</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 800px */</span></span>
<span class="line"><span style="color:#ABB2BF;">    color: </span><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* red */</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">p</span><span style="color:#D19A66;">.two</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#E06C75;">$width</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 1600px */</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 报错，因为 $color 是一个局部变量 */</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#6B737C;">// 声明变量</span></span>
<span class="line"><span style="color:#B392F0;">$width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1600px</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  $width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">800px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  $color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">red</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">p</span><span style="color:#B392F0;">.one {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$width</span><span style="color:#B392F0;">; </span><span style="color:#6B737C;">/* 800px */</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$color</span><span style="color:#B392F0;">; </span><span style="color:#6B737C;">/* red */</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">p</span><span style="color:#B392F0;">.two {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$width</span><span style="color:#B392F0;">; </span><span style="color:#6B737C;">/* 1600px */</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$color</span><span style="color:#B392F0;">; </span><span style="color:#6B737C;">/* 报错，因为 $color 是一个局部变量 */</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>可以通过一个 !global 将一个局部变量转换为全局变量</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 声明变量</span></span>
<span class="line"><span style="color:#E06C75;">$width</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1600</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">$width</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">800</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;"> !global;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">p</span><span style="color:#D19A66;">.one</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    width: </span><span style="color:#E06C75;">$width</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    color: </span><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">p</span><span style="color:#D19A66;">.two</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#E06C75;">$width</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#6B737C;">// 声明变量</span></span>
<span class="line"><span style="color:#B392F0;">$width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1600px</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  $width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">800px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  $color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">red</span><span style="color:#F8F8F8;"> !global</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">p</span><span style="color:#B392F0;">.one {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$width</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$color</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">p</span><span style="color:#B392F0;">.two {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$width</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$color</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">div</span><span style="color:#C678DD;"> </span><span style="color:#E06C75;">p</span><span style="color:#D19A66;">.one</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">800</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">p</span><span style="color:#D19A66;">.two</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">1600</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">p</span><span style="color:#B392F0;">.one {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">800px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">red</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">p</span><span style="color:#B392F0;">.two {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1600px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">red</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-hidden="true">#</a></h3><p>因为 CSS 预处理器就是针对 CSS 这一块融入编程语言的特性进去，所以自然会有数据类型。</p><p>在 Sass 中支持 7 种数据类型：</p><ul><li>数值类型：1、2、13、10px</li><li>字符串类型：有引号字符串和无引号字符串 &quot;foo&quot;、&#39;bar&#39;、baz</li><li>布尔类型：true、false</li><li>空值：null</li><li>数组（list）：用空格或者逗号来进行分隔，1px 10px 15px 5px、1px,10px,15px,5px</li><li>字典（map）：用一个小括号扩起来，里面是一对一对的键值对 (key1:value1, key2:value2)</li><li>颜色类型：blue、#04a012、rgba(0,0,12,0.5)</li></ul><h4 id="数值类型" tabindex="-1">数值类型 <a class="header-anchor" href="#数值类型" aria-hidden="true">#</a></h4><p>Sass 里面支持两种数值类型：<u>带单位数值</u> 和 <u>不带单位的数值</u>，数字可以是正负数以及浮点数</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">$my-age</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">19</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$your-age</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">19.5</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$height</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">120</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">$my-age</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">19</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">$your-age</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">19.5</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">$height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">120px</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="字符串类型" tabindex="-1">字符串类型 <a class="header-anchor" href="#字符串类型" aria-hidden="true">#</a></h4><p>支持两种：<u>有引号字符串</u> 和 <u>无引号字符串</u></p><p>并且引号可以是单引号也可以是双引号</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">$name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;Tom Bob&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$container</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;top bottom&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$what</span><span style="color:#ABB2BF;">: heart;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-image: </span><span style="color:#56B6C2;">url</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$what</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;.png&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">$name</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;Tom Bob&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">$container</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;top bottom&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">$what</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> heart;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-image</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> url</span><span style="color:#F8F8F8;">($what </span><span style="color:#F97583;">+</span><span style="color:#F8F8F8;"> </span><span style="color:#FFAB70;">&quot;.png&quot;</span><span style="color:#F8F8F8;">)</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-image: </span><span style="color:#56B6C2;">url</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">heart.png</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-image</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> url</span><span style="color:#F8F8F8;">(heart.png)</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="布尔类型" tabindex="-1">布尔类型 <a class="header-anchor" href="#布尔类型" aria-hidden="true">#</a></h4><p>该类型就两个值：true 和 false，可以进行逻辑运算，支持 and、or、not 来做逻辑运算</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">$a</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> and </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">&gt;</span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">// false</span></span>
<span class="line"><span style="color:#E06C75;">$b</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;a&quot;</span><span style="color:#ABB2BF;"> == a; </span><span style="color:#7F848E;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#E06C75;">$c</span><span style="color:#ABB2BF;">: false; </span><span style="color:#7F848E;font-style:italic;">// false</span></span>
<span class="line"><span style="color:#E06C75;">$d</span><span style="color:#ABB2BF;">: not </span><span style="color:#E06C75;">$c</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">// true</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">$a</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1</span><span style="color:#B392F0;">&gt;</span><span style="color:#F8F8F8;">0</span><span style="color:#B392F0;"> and </span><span style="color:#F8F8F8;">0</span><span style="color:#B392F0;">&gt;</span><span style="color:#F8F8F8;">5</span><span style="color:#B392F0;">; </span><span style="color:#6B737C;">// false</span></span>
<span class="line"><span style="color:#B392F0;">$b</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;a&quot;</span><span style="color:#B392F0;"> == a; </span><span style="color:#6B737C;">// true</span></span>
<span class="line"><span style="color:#B392F0;">$c</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> false; </span><span style="color:#6B737C;">// false</span></span>
<span class="line"><span style="color:#B392F0;">$d</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> not $c; </span><span style="color:#6B737C;">// true</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="空值类型" tabindex="-1">空值类型 <a class="header-anchor" href="#空值类型" aria-hidden="true">#</a></h4><p>就一个值：null 表示为空的意思</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">$value</span><span style="color:#ABB2BF;">: null;</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">$value</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> null;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>因为是空值，因此不能够使用它和其他类型进行算数运算</p><h4 id="数组类型" tabindex="-1">数组类型 <a class="header-anchor" href="#数组类型" aria-hidden="true">#</a></h4><p>数组有两种表示方式：<u>通过空格来间隔</u> 以及 <u>通过逗号来间隔</u></p><p>例如：</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">$list0</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">5</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">6</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$list1</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">5</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">6</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$list2</span><span style="color:#ABB2BF;">: (</span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">) (</span><span style="color:#D19A66;">5</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">6</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">$list0</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1px</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">2px</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">5px</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">6px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">$list1</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1px</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">2px</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">5px</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">6px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">$list2</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> (</span><span style="color:#F8F8F8;">1px</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">2px</span><span style="color:#B392F0;">) (</span><span style="color:#F8F8F8;">5px</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">6px</span><span style="color:#B392F0;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>关于数组，有如下的注意事项：</p><ol><li>数组里面可以包含子数组，例如 1px 2px, 5px 6px 就是包含了两个数组，1px 2px 是一个数组，5px 6px 又是一个数组，如果内外数组的分隔方式相同，例如都是采用空格来分隔，这个时候可以使用一个小括号来分隔 (1px 2px) (5px 6px)</li><li>添加了小括号的内容最终被编译为 CSS 的时候，是会被去除掉小括号的，例如 (1px 2px) (5px 6px) ---&gt; 1px 2px 5px 6px</li></ol><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">$list0</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">5</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">6</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$list1</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">5</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">6</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$list2</span><span style="color:#ABB2BF;">: (</span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">) (</span><span style="color:#D19A66;">5</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">6</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding: </span><span style="color:#E06C75;">$list2</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">$list0</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1px</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">2px</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">5px</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">6px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">$list1</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1px</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">2px</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">5px</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">6px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">$list2</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> (</span><span style="color:#F8F8F8;">1px</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">2px</span><span style="color:#B392F0;">) (</span><span style="color:#F8F8F8;">5px</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">6px</span><span style="color:#B392F0;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">padding</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$list2</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding: </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">5</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">6</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">padding</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1px 2px 5px 6px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="3"><li>小括号如果为空，则表示是一个空数组，空数组是不可以直接编译为 CSS 的</li></ol><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">$list2</span><span style="color:#ABB2BF;">: ();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding: </span><span style="color:#E06C75;">$list2</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">// 报错</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">$list2</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> ();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">padding</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$list2</span><span style="color:#B392F0;">; </span><span style="color:#6B737C;">// 报错</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>但是如果是数组里面包含空数组或者 null 空值，编译能够成功，空数组以及空值会被去除掉</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">$list2</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> null </span><span style="color:#D19A66;">3</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$list3</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> () </span><span style="color:#D19A66;">3</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding: </span><span style="color:#E06C75;">$list2</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.div2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding: </span><span style="color:#E06C75;">$list3</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">$list2</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1px</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">2px</span><span style="color:#B392F0;"> null </span><span style="color:#F8F8F8;">3px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">$list3</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1px</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">2px</span><span style="color:#B392F0;"> () </span><span style="color:#F8F8F8;">3px</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">padding</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$list2</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.div2 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">padding</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$list3</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="4"><li>可以使用 nth 函数去访问数组里面的值，注意数组的下标是从 1 开始的。</li></ol><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 创建一个 List</span></span>
<span class="line"><span style="color:#E06C75;">$font-sizes</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">12</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">14</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">16</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">18</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">24</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 通过索引访问 List 中的值</span></span>
<span class="line"><span style="color:#E06C75;">$base-font-size</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">nth</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$font-sizes</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 使用 List 中的值为元素设置样式</span></span>
<span class="line"><span style="color:#E06C75;">body</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#E06C75;">$base-font-size</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#6B737C;">// 创建一个 List</span></span>
<span class="line"><span style="color:#B392F0;">$font-sizes</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">12px</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">14px</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">16px</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">18px</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">24px</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6B737C;">// 通过索引访问 List 中的值</span></span>
<span class="line"><span style="color:#B392F0;">$base-font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> nth($font-sizes</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">3</span><span style="color:#B392F0;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6B737C;">// 使用 List 中的值为元素设置样式</span></span>
<span class="line"><span style="color:#FFAB70;">body</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$base-font-size</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">body</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">16</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#FFAB70;">body</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">16px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>最后我们来看一个实际开发中用到数组的典型案例：</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">$sizes</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">40</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">50</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">60</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">@each</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$s</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">in</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$sizes</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.icon-</span><span style="color:#E06C75;">#{$s}</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    font-size: </span><span style="color:#E06C75;">$s</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    width: </span><span style="color:#E06C75;">$s</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    height: </span><span style="color:#E06C75;">$s</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">$sizes</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">40px</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">50px</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">60px</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@each</span><span style="color:#B392F0;"> $s </span><span style="color:#F97583;">in</span><span style="color:#B392F0;"> $sizes {</span></span>
<span class="line"><span style="color:#B392F0;">  .icon-#{$s} {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$s</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$s</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$s</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.icon-40px</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">40</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">40</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">40</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.icon-50px</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">50</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">50</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">50</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.icon-60px</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">60</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">60</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">60</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.icon-40px {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">40px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">40px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">40px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.icon-50px {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">50px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">50px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">50px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.icon-60px {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">60px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">60px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">60px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h4 id="字典类型" tabindex="-1">字典类型 <a class="header-anchor" href="#字典类型" aria-hidden="true">#</a></h4><p>字典类型必须要使用小括号扩起来，小括号里面是一对一对的键值对</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">$a</span><span style="color:#ABB2BF;">: (</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">$key1</span><span style="color:#ABB2BF;">: value1,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">$key2</span><span style="color:#ABB2BF;">: value2,</span></span>
<span class="line"><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">$a</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> (</span></span>
<span class="line"><span style="color:#B392F0;">  $key1: value1</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  $key2: value2</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>可以通过 map-get 方法来获取字典值</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 创建一个 Map</span></span>
<span class="line"><span style="color:#E06C75;">$colors</span><span style="color:#ABB2BF;">: (</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;primary&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#4caf50</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;secondary&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#ff9800</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;accent&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#2196f3</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">$primary</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">map-get</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$colors</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;primary&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#E06C75;">$primary</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#6B737C;">// 创建一个 Map</span></span>
<span class="line"><span style="color:#B392F0;">$colors</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> (</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">&quot;primary&quot;</span><span style="color:#B392F0;">: #4caf50</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">&quot;secondary&quot;</span><span style="color:#B392F0;">: #ff9800</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">&quot;accent&quot;</span><span style="color:#B392F0;">: #2196f3</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">$primary</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> map-get($colors</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;primary&quot;</span><span style="color:#B392F0;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">button</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$primary</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">#4caf50</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#FFAB70;">button</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#4caf50</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>接下来还是看一个实际开发中的示例：</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">$icons</span><span style="color:#ABB2BF;">: (</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;eye&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;</span><span style="color:#56B6C2;">\\f112</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;start&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;</span><span style="color:#56B6C2;">\\f12e</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;stop&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;</span><span style="color:#56B6C2;">\\f12f</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">@each</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$key</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">$value</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">in</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$icons</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.icon-</span><span style="color:#E06C75;">#{$key}</span><span style="color:#56B6C2;">:before</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    display: </span><span style="color:#D19A66;">inline-block</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    font-family: </span><span style="color:#98C379;">&quot;Open Sans&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">content</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">$value</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">$icons</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> (</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">&quot;eye&quot;</span><span style="color:#B392F0;">: </span><span style="color:#FFAB70;">&quot;\\f112&quot;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">&quot;start&quot;</span><span style="color:#B392F0;">: </span><span style="color:#FFAB70;">&quot;\\f12e&quot;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">&quot;stop&quot;</span><span style="color:#B392F0;">: </span><span style="color:#FFAB70;">&quot;\\f12f&quot;</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@each</span><span style="color:#B392F0;"> $key, $value </span><span style="color:#F97583;">in</span><span style="color:#B392F0;"> $icons {</span></span>
<span class="line"><span style="color:#B392F0;">  .icon-#{$key}:before {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">display</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">inline-block</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">font-family</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;Open Sans&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#FFAB70;">content</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$value</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.icon-eye</span><span style="color:#56B6C2;">:before</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">inline-block</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-family: </span><span style="color:#98C379;">&quot;Open Sans&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  content: </span><span style="color:#98C379;">&quot;</span><span style="color:#56B6C2;">\\f112</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.icon-start</span><span style="color:#56B6C2;">:before</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">inline-block</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-family: </span><span style="color:#98C379;">&quot;Open Sans&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  content: </span><span style="color:#98C379;">&quot;</span><span style="color:#56B6C2;">\\f12e</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.icon-stop</span><span style="color:#56B6C2;">:before</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">inline-block</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-family: </span><span style="color:#98C379;">&quot;Open Sans&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  content: </span><span style="color:#98C379;">&quot;</span><span style="color:#56B6C2;">\\f12f</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.icon-eye:before {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">display</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">inline-block</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-family</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;Open Sans&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">content</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;\\f112&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.icon-start:before {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">display</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">inline-block</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-family</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;Open Sans&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">content</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;\\f12e&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.icon-stop:before {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">display</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">inline-block</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-family</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;Open Sans&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">content</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;\\f12f&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h4 id="颜色类型" tabindex="-1">颜色类型 <a class="header-anchor" href="#颜色类型" aria-hidden="true">#</a></h4><p>支持原生 CSS 中各种颜色的表示方式，十六进制、RGB、RGBA、HSL、HSLA、颜色英语单词。</p><p>Sass 还提供了内置的 Colors 相关的各种函数，可以方便我们对颜色进行一个颜色值的调整和操作。</p><ul><li>lighten 和 darken：调整颜色的亮度，lighten 是增加亮度、darken 是减少亮度</li></ul><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.div1</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#56B6C2;">lighten</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">// 亮度增加10%</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.div2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#56B6C2;">darken</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">// 亮度减少10%</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">$color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">red</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.div1 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> lighten</span><span style="color:#F8F8F8;">($color</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 10%)</span><span style="color:#B392F0;">; </span><span style="color:#6B737C;">// 亮度增加10%</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.div2 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> darken</span><span style="color:#F8F8F8;">($color</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 10%)</span><span style="color:#B392F0;">; </span><span style="color:#6B737C;">// 亮度减少10%</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.div1</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">#ff3333</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.div2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">#cc0000</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.div1 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#ff3333</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.div2 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#cc0000</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li>saturate 和 desaturate：调整颜色的饱和度</li></ul><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#4caf50</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.div1</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#56B6C2;">saturate</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">// 饱和度增加10%</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.div2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#56B6C2;">desaturate</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">// 饱和度减少10%</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">$color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> #4caf50;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.div1 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> saturate</span><span style="color:#F8F8F8;">($color</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 10%)</span><span style="color:#B392F0;">; </span><span style="color:#6B737C;">// 饱和度增加10%</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.div2 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> desaturate</span><span style="color:#F8F8F8;">($color</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 10%)</span><span style="color:#B392F0;">; </span><span style="color:#6B737C;">// 饱和度减少10%</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ul><li><em>Adjust Hue</em>：通过调整颜色的色相来创建新颜色。</li></ul><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#4caf50</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$new-hue</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">adjust-hue</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">30</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">// 色相增加 30 度</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">$color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> #4caf50;</span></span>
<span class="line"><span style="color:#B392F0;">$new-hue</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> adjust-hue($color</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">30</span><span style="color:#B392F0;">); </span><span style="color:#6B737C;">// 色相增加 30 度</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li><em>RGBA</em>：为颜色添加透明度。</li></ul><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#4caf50</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$transparent</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">rgba</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0.5</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">// 添加 50% 透明度</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">$color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> #4caf50;</span></span>
<span class="line"><span style="color:#B392F0;">$transparent</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> rgba($color</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0.5</span><span style="color:#B392F0;">); </span><span style="color:#6B737C;">// 添加 50% 透明度</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li><em>Mix</em>：混合两种颜色。</li></ul><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">$color1</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#4caf50</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$color2</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#2196f3</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$mixed</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">mix</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$color1</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">$color2</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">50</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">// 混合两种颜色，权重 50%</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">$color1</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> #4caf50;</span></span>
<span class="line"><span style="color:#B392F0;">$color2</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> #2196f3;</span></span>
<span class="line"><span style="color:#B392F0;">$mixed</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> mix($color1</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> $color2</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">50%</span><span style="color:#B392F0;">); </span><span style="color:#6B737C;">// 混合两种颜色，权重 50%</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><em>Complementary</em>：获取颜色的补充颜色。</li></ul><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#4caf50</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$complementary</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">adjust-hue</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">180</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">// 色相增加 180 度，获取补充颜色</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">$color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> #4caf50;</span></span>
<span class="line"><span style="color:#B392F0;">$complementary</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> adjust-hue($color</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">180</span><span style="color:#B392F0;">); </span><span style="color:#6B737C;">// 色相增加 180 度，获取补充颜色</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果想要查阅具体有哪些颜色相关的函数，可以参阅官方文档：<a href="https://sass-lang.com/documentation/modules/color" target="_blank" rel="noreferrer">https://sass-lang.com/documentation/modules/color</a></p><h3 id="嵌套语法" tabindex="-1">嵌套语法 <a class="header-anchor" href="#嵌套语法" aria-hidden="true">#</a></h3><h3 id="插值语法" tabindex="-1">插值语法 <a class="header-anchor" href="#插值语法" aria-hidden="true">#</a></h3><h3 id="运算" tabindex="-1">运算 <a class="header-anchor" href="#运算" aria-hidden="true">#</a></h3><p>关于运算相关的一些函数：</p><ul><li>calc</li><li>max 和 min</li><li>clamp</li></ul><h4 id="calc" tabindex="-1">calc <a class="header-anchor" href="#calc" aria-hidden="true">#</a></h4><p>该方法是 CSS3 提供的一个方法，用于做属性值的计算。</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.container</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">80</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.element</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    width: </span><span style="color:#56B6C2;">calc</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">40</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.element2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    width: </span><span style="color:#56B6C2;">calc</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">40</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.container {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">80%</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">padding</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0 20px</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  .element {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> calc</span><span style="color:#F8F8F8;">(100% </span><span style="color:#F97583;">-</span><span style="color:#F8F8F8;"> 40px)</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  .element2 {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> calc</span><span style="color:#F8F8F8;">(100px </span><span style="color:#F97583;">-</span><span style="color:#F8F8F8;"> 40px)</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.container</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">80</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.container</span><span style="color:#C678DD;"> </span><span style="color:#D19A66;">.element</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#56B6C2;">calc</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">40</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.container</span><span style="color:#C678DD;"> </span><span style="color:#D19A66;">.element2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">60</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.container {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">80%</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">padding</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0 20px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#B392F0;">.container .element {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> calc</span><span style="color:#F8F8F8;">(100% </span><span style="color:#F97583;">-</span><span style="color:#F8F8F8;"> 40px)</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#B392F0;">.container .element2 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">60px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>注意，在上面的编译当中，如果单位相同，Sass 在做编译的时候会直接运行 calc 运算表达式，得到计算出来的最终值，但是如果单位不相同，会保留 calc 运算表达式。</p><h4 id="min-和-max" tabindex="-1">min 和 max <a class="header-anchor" href="#min-和-max" aria-hidden="true">#</a></h4><p>min 是在一组数据里面找出最小值，max 就是在一组数据里面找到最大值。</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">$width1</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">500</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$width2</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">600</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.element</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#56B6C2;">min</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$width1</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">$width2</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">$width1</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">500px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">$width2</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">600px</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.element {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> min</span><span style="color:#F8F8F8;">($width1</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> $width2)</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.element</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">500</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.element {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">500px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="clamp" tabindex="-1">clamp <a class="header-anchor" href="#clamp" aria-hidden="true">#</a></h4><p>这个也是 CSS3 提供的函数，语法为：</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">clamp(min</span><span style="color:#ABB2BF;">,</span><span style="color:#C678DD;"> value</span><span style="color:#ABB2BF;">,</span><span style="color:#C678DD;"> max</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">clamp(min</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> value</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> max)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>min 代表下限，max 代表上限，value 是需要限制的值。clamp 的作用就是将 value 限制在 min 和 max 之间，如果 value 小于了 min 那么就取 min 作为值，如果 vlaue 大于了 max，那么就取 max 作为值。如果 value 在 min 和 max 之间，那么就返回 value 值本身。</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">$min-font-size</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">16</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$max-font-size</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">24</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">body</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#56B6C2;">clamp</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$min-font-size</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">1.25</span><span style="color:#E06C75;">vw</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">rem</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">$max-font-size</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">$min-font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">16px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">$max-font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">24px</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">body</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> clamp</span><span style="color:#F8F8F8;">($min-font-size</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 1.25vw </span><span style="color:#F97583;">+</span><span style="color:#F8F8F8;"> 1rem</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> $max-font-size)</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">body</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#56B6C2;">clamp</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">16</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">1.25</span><span style="color:#E06C75;">vw</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">rem</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">24</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#FFAB70;">body</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> clamp</span><span style="color:#F8F8F8;">(16px</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 1.25vw + 1rem</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 24px)</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>在上面的 CSS 代码中，我们希望通过视口宽度动态的调整 body 的字体大小。value 部分为 1.25vw + 1rem（这个计算会在浏览器环境中进行计算）。当视口宽度较小时，1.25vw + 1rem 计算结果可能是小于 16px，那么此时就取 16px。当视口宽度较大时，1.25vw + 1rem 计算结果可能大于 24px，那么此时就取 24px。如果 1.25vw + 1rem 计算值在 16px - 24px 之间，那么就取计算值结果。</p><h2 id="sass-控制指令" tabindex="-1">Sass 控制指令 <a class="header-anchor" href="#sass-控制指令" aria-hidden="true">#</a></h2><p>前面我们说了 CSS 预处理器最大的特点就是将编程语言的特性融入到了 CSS 里面，因此既然 CSS 预处理器里面都有变量、数据类型，自然而然也会有流程控制。</p><h3 id="三元运算符" tabindex="-1">三元运算符 <a class="header-anchor" href="#三元运算符" aria-hidden="true">#</a></h3><h3 id="三元运算符-1" tabindex="-1">三元运算符 <a class="header-anchor" href="#三元运算符-1" aria-hidden="true">#</a></h3><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">if(expression, value1, value2)</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">if(expression, value1, value2)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>示例如下：</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#56B6C2;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">+</span><span style="color:#D19A66;">1</span><span style="color:#E06C75;font-style:italic;">==2</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">green</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">yellow</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#56B6C2;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">+</span><span style="color:#D19A66;">1</span><span style="color:#E06C75;font-style:italic;">==3</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">green</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">yellow</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#FFAB70;">p</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> if</span><span style="color:#F8F8F8;">(1</span><span style="color:#79B8FF;">+</span><span style="color:#F8F8F8;">1==2</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> </span><span style="color:#79B8FF;">green</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> </span><span style="color:#79B8FF;">yellow</span><span style="color:#F8F8F8;">)</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> if</span><span style="color:#F8F8F8;">(1</span><span style="color:#79B8FF;">+</span><span style="color:#F8F8F8;">1==3</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> </span><span style="color:#79B8FF;">green</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> </span><span style="color:#79B8FF;">yellow</span><span style="color:#F8F8F8;">)</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">green</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">yellow</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#FFAB70;">p</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">green</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">yellow</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="if-分支" tabindex="-1">@if 分支 <a class="header-anchor" href="#if-分支" aria-hidden="true">#</a></h3><p>这个表示是分支。分支又分为三种：</p><ul><li>单分支</li><li>双分支</li><li>多分支</li></ul><h4 id="单分支" tabindex="-1">单分支 <a class="header-anchor" href="#单分支" aria-hidden="true">#</a></h4><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@if</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">+</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    color: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@if</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">+</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    color: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#FFAB70;">p</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@if</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1</span><span style="color:#79B8FF;">+</span><span style="color:#F8F8F8;">1</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">==</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">2</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">red</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">margin</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">10px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@if</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1</span><span style="color:#79B8FF;">+</span><span style="color:#F8F8F8;">1</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">==</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">3</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">red</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">margin</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">10px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#FFAB70;">p</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">red</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">margin</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">10px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">margin</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">10px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="双分支" tabindex="-1">双分支 <a class="header-anchor" href="#双分支" aria-hidden="true">#</a></h4><p>仍然使用的是 @else</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@if</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">+</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    color: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  } </span><span style="color:#C678DD;">@else </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    color: </span><span style="color:#D19A66;">blue</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@if</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">+</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    color: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  } </span><span style="color:#C678DD;">@else </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    color: </span><span style="color:#D19A66;">blue</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#FFAB70;">p</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@if</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1</span><span style="color:#79B8FF;">+</span><span style="color:#F8F8F8;">1</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">==</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">2</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">red</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  } </span><span style="color:#F97583;">@else </span><span style="color:#B392F0;">{</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">blue</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">margin</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">10px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@if</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1</span><span style="color:#79B8FF;">+</span><span style="color:#F8F8F8;">1</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">==</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">3</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">red</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  } </span><span style="color:#F97583;">@else </span><span style="color:#B392F0;">{</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">blue</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">margin</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">10px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">blue</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#FFAB70;">p</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">red</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">margin</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">10px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">blue</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">margin</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">10px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="多分支" tabindex="-1">多分支 <a class="header-anchor" href="#多分支" aria-hidden="true">#</a></h4><p>使用 @else if 来写多分支</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">$type</span><span style="color:#ABB2BF;">: monster;</span></span>
<span class="line"><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@if</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$type</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> ocean {</span></span>
<span class="line"><span style="color:#ABB2BF;">    color: </span><span style="color:#D19A66;">blue</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  } </span><span style="color:#C678DD;">@else if</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$type</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> matador {</span></span>
<span class="line"><span style="color:#ABB2BF;">    color: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  } </span><span style="color:#C678DD;">@else if</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$type</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> monster {</span></span>
<span class="line"><span style="color:#ABB2BF;">    color: </span><span style="color:#D19A66;">green</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  } </span><span style="color:#C678DD;">@else </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    color: </span><span style="color:#D19A66;">black</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">$type</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> monster;</span></span>
<span class="line"><span style="color:#FFAB70;">p</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@if</span><span style="color:#B392F0;"> $type </span><span style="color:#F97583;">==</span><span style="color:#B392F0;"> ocean {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">blue</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  } </span><span style="color:#F97583;">@else if</span><span style="color:#B392F0;"> $type </span><span style="color:#F97583;">==</span><span style="color:#B392F0;"> matador {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">red</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  } </span><span style="color:#F97583;">@else if</span><span style="color:#B392F0;"> $type </span><span style="color:#F97583;">==</span><span style="color:#B392F0;"> monster {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">green</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  } </span><span style="color:#F97583;">@else </span><span style="color:#B392F0;">{</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">black</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">green</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#FFAB70;">p</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">green</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="for-循环" tabindex="-1">@for 循环 <a class="header-anchor" href="#for-循环" aria-hidden="true">#</a></h3><p>语法如下：</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">@for</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$var</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;</span><span style="color:#D19A66;">start</span><span style="color:#C678DD;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">through</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;</span><span style="color:#D19A66;">end</span><span style="color:#C678DD;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">#会包含</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">end</span><span style="color:#ABB2BF;"> 结束值</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 或者</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@for</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">$var</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">&lt;</span><span style="color:#D19A66;">start</span><span style="color:#C678DD;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">to</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">&lt;</span><span style="color:#D19A66;">end</span><span style="color:#C678DD;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">#to</span></span>
<span class="line"><span style="color:#ABB2BF;">  不会包含</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">end</span><span style="color:#ABB2BF;"> 结束值</span></span>
<span class="line"><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#F97583;">@for</span><span style="color:#B392F0;"> $var</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">from</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;">start</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">through</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;">end</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">  #会包含</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">end</span><span style="color:#B392F0;"> 结束值</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#6B737C;">// 或者</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@for</span></span>
<span class="line"><span style="color:#B392F0;">  $var</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">from</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;">start</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">to</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;">end</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">  #to</span></span>
<span class="line"><span style="color:#B392F0;">  不会包含</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">end</span><span style="color:#B392F0;"> 结束值</span></span>
<span class="line"><span style="color:#B392F0;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">@for</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">to</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.item-</span><span style="color:#E06C75;">#{$i}</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    width: </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">@for</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">through</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.item2-</span><span style="color:#E06C75;">#{$i}</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    width: </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#F97583;">@for</span><span style="color:#B392F0;"> $i </span><span style="color:#F97583;">from</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">to</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">3</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  .item-#{$i} {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$i </span><span style="color:#F97583;">*</span><span style="color:#F8F8F8;"> 2em</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@for</span><span style="color:#B392F0;"> $i </span><span style="color:#F97583;">from</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1</span><span style="color:#B392F0;"> </span><span style="color:#F97583;">through</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">3</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  .item2-#{$i} {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$i </span><span style="color:#F97583;">*</span><span style="color:#F8F8F8;"> 2em</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.item-1</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.item-2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">4</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.item2-1</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.item2-2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">4</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.item2-3</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">6</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.item-1 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">2em</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.item-2 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">4em</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.item2-1 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">2em</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.item2-2 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">4em</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.item2-3 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">6em</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="while-循环" tabindex="-1">@while 循环 <a class="header-anchor" href="#while-循环" aria-hidden="true">#</a></h3><p>语法如下：</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">@while</span><span style="color:#ABB2BF;"> expression ;</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#F97583;">@while</span><span style="color:#B392F0;"> expression ;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">6</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">@while</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.item-</span><span style="color:#E06C75;">#{$i}</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    width: </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">$i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">$i</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">6</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#F97583;">@while</span><span style="color:#B392F0;"> $i </span><span style="color:#F97583;">&gt;</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  .item-#{$i} {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">2em </span><span style="color:#F97583;">*</span><span style="color:#F8F8F8;"> $i</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  $i</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$i </span><span style="color:#F97583;">-</span><span style="color:#F8F8F8;"> 2</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.item-6</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">12</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.item-4</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">8</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.item-2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">4</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.item-6 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">12em</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.item-4 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">8em</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.item-2 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">4em</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>注意，一定要要在 while 里面书写改变变量的表达式，否则就会形成一个死循环。</p><h3 id="each-循环" tabindex="-1">@each 循环 <a class="header-anchor" href="#each-循环" aria-hidden="true">#</a></h3><p>这个优有点类似于 JS 里面的 for...of 循环，会把数组或者字典类型的每一项值挨着挨着取出来</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">@each</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$var</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">in</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$vars</span><span style="color:#ABB2BF;"> ;</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#F97583;">@each</span><span style="color:#B392F0;"> $var </span><span style="color:#F97583;">in</span><span style="color:#B392F0;"> $vars ;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>$var 可以是任意的变量名，但是 $vars 只能是 list 或者 maps</p><p>下面是一个遍历列表（数组）</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">$arr</span><span style="color:#ABB2BF;">: puma, sea-slug, egret, salamander;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">@each</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$animal</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">in</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$arr</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.</span><span style="color:#E06C75;">#{$animal}</span><span style="color:#D19A66;">-icon</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    background-image: </span><span style="color:#56B6C2;">url</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;/images/</span><span style="color:#E06C75;">#{$animal}</span><span style="color:#98C379;">.png&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">$arr</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> puma</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> sea</span><span style="color:#79B8FF;">-</span><span style="color:#B392F0;">slug</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> egret</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> salamander;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@each</span><span style="color:#B392F0;"> $animal </span><span style="color:#F97583;">in</span><span style="color:#B392F0;"> $arr {</span></span>
<span class="line"><span style="color:#B392F0;">  .#{$animal}-icon {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">background-image</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> url</span><span style="color:#F8F8F8;">(</span><span style="color:#FFAB70;">&quot;/images/#{$animal}.png&quot;</span><span style="color:#F8F8F8;">)</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.puma-icon</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-image: </span><span style="color:#56B6C2;">url</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;/images/puma.png&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.sea-slug-icon</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-image: </span><span style="color:#56B6C2;">url</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;/images/sea-slug.png&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.egret-icon</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-image: </span><span style="color:#56B6C2;">url</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;/images/egret.png&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.salamander-icon</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-image: </span><span style="color:#56B6C2;">url</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;/images/salamander.png&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.puma-icon {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-image</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> url</span><span style="color:#F8F8F8;">(</span><span style="color:#FFAB70;">&quot;/images/puma.png&quot;</span><span style="color:#F8F8F8;">)</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.sea-slug-icon {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-image</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> url</span><span style="color:#F8F8F8;">(</span><span style="color:#FFAB70;">&quot;/images/sea-slug.png&quot;</span><span style="color:#F8F8F8;">)</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.egret-icon {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-image</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> url</span><span style="color:#F8F8F8;">(</span><span style="color:#FFAB70;">&quot;/images/egret.png&quot;</span><span style="color:#F8F8F8;">)</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.salamander-icon {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-image</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> url</span><span style="color:#F8F8F8;">(</span><span style="color:#FFAB70;">&quot;/images/salamander.png&quot;</span><span style="color:#F8F8F8;">)</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>下面是一个遍历字典类型的示例：</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">$dict</span><span style="color:#ABB2BF;">: (</span></span>
<span class="line"><span style="color:#ABB2BF;">  h1: </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  h2: </span><span style="color:#D19A66;">1.5</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  h3: </span><span style="color:#D19A66;">1.2</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  h4: </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">@each</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$header</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">$size</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">in</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$dict</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">#{$header}</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    font-size: </span><span style="color:#E06C75;">$size</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">$dict</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> (</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">h1</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">2em</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">h2</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1.5em</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">h3</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1.2em</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">h4</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1em</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@each</span><span style="color:#B392F0;"> $header, $size </span><span style="color:#F97583;">in</span><span style="color:#B392F0;"> $dict {</span></span>
<span class="line"><span style="color:#B392F0;">  #{$header} {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$size</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">h1</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">1.5</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">h3</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">1.2</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">h4</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#FFAB70;">h1</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">2em</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">h2</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1.5em</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">h3</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1.2em</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">h4</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1em</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="sass-混合指令" tabindex="-1">Sass 混合指令 <a class="header-anchor" href="#sass-混合指令" aria-hidden="true">#</a></h2><p>在 Sass 里面存在一种叫做混合指令的东西，它最大的特点就是允许我们创建可以重用的代码片段，从而避免了代码的重复，提供代码的可维护性。</p><h3 id="混合指令基本的使用" tabindex="-1">混合指令基本的使用 <a class="header-anchor" href="#混合指令基本的使用" aria-hidden="true">#</a></h3><p>首先要使用混合指令，我们需要先定义一个混合指令：</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">@mixin</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">name</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 样式。。。。</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#B392F0;"> name {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#6B737C;">// 样式。。。。</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>例如：</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 创建了一个指令</span></span>
<span class="line"><span style="color:#C678DD;">@mixin</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">large-text</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">font</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    family: </span><span style="color:#98C379;">&quot;Open Sans&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">sans-serif</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    size: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    weight: </span><span style="color:#D19A66;">bold</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#ff0000</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#6B737C;">// 创建了一个指令</span></span>
<span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#B392F0;"> large-text {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">font</span><span style="color:#B392F0;">: {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">family</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;Open Sans&quot;</span><span style="color:#F8F8F8;">, </span><span style="color:#79B8FF;">sans-serif</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">20px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">weight</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">bold</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#ff0000</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>接下来是如何使用指令，需要使用到 @include，后面跟上混合指令的名称即可。</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 创建了一个指令</span></span>
<span class="line"><span style="color:#C678DD;">@mixin</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">large-text</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">font</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    family: </span><span style="color:#98C379;">&quot;Open Sans&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">sans-serif</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    size: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    weight: </span><span style="color:#D19A66;">bold</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#ff0000</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@include</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">large-text</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">#fff</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@include</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">large-text</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#6B737C;">// 创建了一个指令</span></span>
<span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#B392F0;"> large-text {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">font</span><span style="color:#B392F0;">: {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">family</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;Open Sans&quot;</span><span style="color:#F8F8F8;">, </span><span style="color:#79B8FF;">sans-serif</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">20px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">weight</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">bold</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#ff0000</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">p</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@include</span><span style="color:#B392F0;"> large-text;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">padding</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">20px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#fff</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@include</span><span style="color:#B392F0;"> large-text;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-family: </span><span style="color:#98C379;">&quot;Open Sans&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">sans-serif</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-weight: </span><span style="color:#D19A66;">bold</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#ff0000</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">#fff</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-family: </span><span style="color:#98C379;">&quot;Open Sans&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">sans-serif</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-weight: </span><span style="color:#D19A66;">bold</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#ff0000</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#FFAB70;">p</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-family</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;Open Sans&quot;</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> </span><span style="color:#79B8FF;">sans-serif</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">20px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-weight</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">bold</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#ff0000</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">padding</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">20px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#fff</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-family</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;Open Sans&quot;</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> </span><span style="color:#79B8FF;">sans-serif</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">20px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-weight</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">bold</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#ff0000</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>我们发现，混合指令编译之后，就是将混合指令内部的 CSS 样式放入到了 @include 的地方，因此我们可以很明显的感受到混合指令就是提取公共的样式出来，方便复用和维护。</p><p>在混合指令中，我们也可以引用其他的混合指令：</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">@mixin</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">background</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">#fc0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">@mixin</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">header-text</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">@mixin</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">compound</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@include</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">background</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@include</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">header-text</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@include</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">compound</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#B392F0;"> background {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#fc0</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#B392F0;"> header-text {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">20px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#B392F0;"> compound {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@include</span><span style="color:#B392F0;"> background;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@include</span><span style="color:#B392F0;"> header-text;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">p</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@include</span><span style="color:#B392F0;"> compound;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">#fc0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#FFAB70;">p</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#fc0</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">20px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>混合指令是可以直接在最外层使用的，但是对混合指令本身有一些要求。要求混合指令的内部要有选择器。</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">@mixin</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">background</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">#fc0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">@mixin</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">header-text</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">@mixin</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">compound</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">@include</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">background</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">@include</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">header-text</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">@include</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">compound</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#B392F0;"> background {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#fc0</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#B392F0;"> header-text {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">20px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#B392F0;"> compound {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#F97583;">@include</span><span style="color:#B392F0;"> background;</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#F97583;">@include</span><span style="color:#B392F0;"> header-text;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@include</span><span style="color:#B392F0;"> compound;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">#fc0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#fc0</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">20px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>例如在上面的示例中，compound 混合指令里面不再是单纯的属性声明，而是有选择器在里面，这样的话就可以直接在最外层使用。</p><p>一般来讲，我们要在外部直接使用，我们一般会将其作为一个后代选择器。例如：</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.box</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@include</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">compound</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.box {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@include</span><span style="color:#B392F0;"> compound;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.box</span><span style="color:#C678DD;"> </span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">#fc0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.box </span><span style="color:#FFAB70;">div</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#fc0</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">20px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="混合指令的参数" tabindex="-1">混合指令的参数 <a class="header-anchor" href="#混合指令的参数" aria-hidden="true">#</a></h3><p>混合指令能够设置参数，只需要在混合指令的后面添加一对圆括号即可，括号里面书写对应的形参。</p><p>例如：</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">@mixin</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">bg-color</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">$radius</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-radius: </span><span style="color:#E06C75;">$radius</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.box1</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@include</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">bg-color</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.box2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@include</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">bg-color</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">blue</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#B392F0;"> bg-color($color, $radius) {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">margin</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">10px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$color</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">border-radius</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$radius</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.box1 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@include</span><span style="color:#B392F0;"> bg-color(</span><span style="color:#79B8FF;">red</span><span style="color:#B392F0;">, </span><span style="color:#F8F8F8;">10px</span><span style="color:#B392F0;">);</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.box2 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@include</span><span style="color:#B392F0;"> bg-color(</span><span style="color:#79B8FF;">blue</span><span style="color:#B392F0;">, </span><span style="color:#F8F8F8;">20px</span><span style="color:#B392F0;">);</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.box1</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-radius: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.box2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">blue</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-radius: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.box1 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">margin</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">10px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">red</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">border-radius</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">10px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.box2 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">margin</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">10px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">blue</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">border-radius</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">20px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>既然在定义混合指令的时候，指定了参数，那么在使用的时候，传递的参数的个数一定要和形参一致，否则编译会出错。</p><p>在定义的时候，支持给形参添加默认值，例如：</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">@mixin</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">bg-color</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">$radius</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-radius: </span><span style="color:#E06C75;">$radius</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.box1</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@include</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">bg-color</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">blue</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#B392F0;"> bg-color($color, $radius</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">20px</span><span style="color:#B392F0;">) {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">margin</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">10px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$color</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">border-radius</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$radius</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.box1 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@include</span><span style="color:#B392F0;"> bg-color(</span><span style="color:#79B8FF;">blue</span><span style="color:#B392F0;">);</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>上面的示例是可以通过编译的，因为在定义 bg-color 的时候，我们为 $radius 设置了默认值。所以在使用的时候，即便没有传递第二个参数，也是 OK 的，因为会直接使用默认值。</p><p>在传递参数的时候，还支持关键词传参，就是指定哪一个参数是对应的哪一个形参，例如：</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">@mixin</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">bg-color</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">blue</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">$radius</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-radius: </span><span style="color:#E06C75;">$radius</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.box1</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@include</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">bg-color</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$radius</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">: pink);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.box2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@include</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">bg-color</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$radius</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#B392F0;"> bg-color($color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">blue</span><span style="color:#B392F0;">, $radius) {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">margin</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">10px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$color</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">border-radius</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$radius</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.box1 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@include</span><span style="color:#B392F0;"> bg-color($radius</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">20px</span><span style="color:#B392F0;">, $color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">pink</span><span style="color:#B392F0;">);</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.box2 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@include</span><span style="color:#B392F0;"> bg-color($radius</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">20px</span><span style="color:#B392F0;">);</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.box1</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: pink;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-radius: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.box2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">blue</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-radius: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.box1 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">margin</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">10px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">pink</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">border-radius</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">20px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.box2 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">margin</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">10px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">blue</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">border-radius</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">20px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>在定义混合指令的时候，如果不确定使用混合指令的地方会传入多少个参数，可以使用 ... 来声明（类似于 js 里面的不定参数），Sass 会把这些值当作一个列表来进行处理。</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">@mixin</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">box-shadow</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$shadow</span><span style="color:#ABB2BF;">...) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#ABB2BF;">  box-shadow: </span><span style="color:#E06C75;">$shadow</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.box1</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@include</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">box-shadow</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">rgba</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0.5</span><span style="color:#ABB2BF;">));</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.box2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@include</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">box-shadow</span><span style="color:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">rgba</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0.5</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">5</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">rgba</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">100</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0.5</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  );</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#B392F0;"> box-shadow($shadow...) {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#6B737C;">// ...</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">box-shadow</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$shadow</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.box1 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@include</span><span style="color:#B392F0;"> box-shadow(</span><span style="color:#F8F8F8;">0</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1px</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">2px</span><span style="color:#B392F0;"> rgba(</span><span style="color:#F8F8F8;">0</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0.5</span><span style="color:#B392F0;">));</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.box2 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@include</span><span style="color:#B392F0;"> box-shadow(</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#F8F8F8;">0</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1px</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">2px</span><span style="color:#B392F0;"> rgba(</span><span style="color:#F8F8F8;">0</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0.5</span><span style="color:#B392F0;">),</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#F8F8F8;">0</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">2px</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">5px</span><span style="color:#B392F0;"> rgba(</span><span style="color:#F8F8F8;">100</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0.5</span><span style="color:#B392F0;">)</span></span>
<span class="line"><span style="color:#B392F0;">  );</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.box1</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  box-shadow: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">rgba</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0.5</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.box2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  box-shadow: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">rgba</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0.5</span><span style="color:#ABB2BF;">), </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">5</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">rgba</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">100</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0.5</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.box1 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">box-shadow</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0 1px 2px </span><span style="color:#B392F0;">rgba</span><span style="color:#F8F8F8;">(0</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 0</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 0</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 0.5)</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.box2 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">box-shadow</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0 1px 2px </span><span style="color:#B392F0;">rgba</span><span style="color:#F8F8F8;">(0</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 0</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 0</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 0.5)</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 0 2px 5px </span><span style="color:#B392F0;">rgba</span><span style="color:#F8F8F8;">(100</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 0</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 0</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 0.5)</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>在 Sass 中，... 有些时候也可以表示为参数展开的含义，例如：</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">@mixin</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">colors</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$text</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">$background</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">$border</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#E06C75;">$text</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#E06C75;">$background</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-color: </span><span style="color:#E06C75;">$border</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">$values</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">blue</span><span style="color:#ABB2BF;">, pink;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.box</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@include</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">colors</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$values</span><span style="color:#ABB2BF;">...);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#B392F0;"> colors($text, $background, $border) {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$text</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$background</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">border-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$border</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">$values</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">red</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">blue</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">pink</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.box {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@include</span><span style="color:#B392F0;"> colors($values...);</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="content" tabindex="-1">@content <a class="header-anchor" href="#content" aria-hidden="true">#</a></h3><p>@content 表示占位的意思，在使用混合指令的时候，会将指令大括号里面的内容放置到 @content 的位置，有点类似于插槽。</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">@mixin</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">test</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">html</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">@content</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">@include</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">test</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.logo</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    width: </span><span style="color:#D19A66;">600</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">@include</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">test</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">blue</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.box</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    width: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    height: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#B392F0;"> test {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">html</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#F97583;">@content</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@include</span><span style="color:#B392F0;"> test {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">red</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  .logo {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">600px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@include</span><span style="color:#B392F0;"> test {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">blue</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  .box {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">html</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#E06C75;">html</span><span style="color:#C678DD;"> </span><span style="color:#D19A66;">.logo</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">600</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">html</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">blue</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#E06C75;">html</span><span style="color:#C678DD;"> </span><span style="color:#D19A66;">.box</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#FFAB70;">html</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">red</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#FFAB70;">html</span><span style="color:#B392F0;"> .logo {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">600px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">html</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">blue</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#FFAB70;">html</span><span style="color:#B392F0;"> .box {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>下面是一个实际开发中的例子：</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">@mixin</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">button-theme</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border: </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">solid</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">darken</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">15</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">&amp;</span><span style="color:#56B6C2;">:hover</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    background-color: </span><span style="color:#56B6C2;">lighten</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">5</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    border-color: </span><span style="color:#56B6C2;">darken</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@content</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.button-primary</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@include</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">button-theme</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">#007bff</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    width: </span><span style="color:#D19A66;">500</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    height: </span><span style="color:#D19A66;">400</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.button-secondary</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@include</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">button-theme</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">#6c757d</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    width: </span><span style="color:#D19A66;">300</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    height: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#B392F0;"> button-theme($color) {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$color</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">border</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1px </span><span style="color:#79B8FF;">solid</span><span style="color:#F8F8F8;"> </span><span style="color:#B392F0;">darken</span><span style="color:#F8F8F8;">($color</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 15%)</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">&amp;</span><span style="color:#B392F0;">:hover {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> lighten</span><span style="color:#F8F8F8;">($color</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 5%)</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">border-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> darken</span><span style="color:#F8F8F8;">($color</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 10%)</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@content</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.button-primary {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@include</span><span style="color:#B392F0;"> button-theme(#007bff) {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">500px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">400px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.button-secondary {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@include</span><span style="color:#B392F0;"> button-theme(#6c757d) {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">300px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.button-primary</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">#007bff</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border: </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">solid</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">#0056b3</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">500</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">400</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.button-primary</span><span style="color:#56B6C2;">:hover</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">#1a88ff</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-color: </span><span style="color:#D19A66;">#0062cc</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.button-secondary</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">#6c757d</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border: </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">solid</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">#494f54</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">300</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.button-secondary</span><span style="color:#56B6C2;">:hover</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">#78828a</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-color: </span><span style="color:#D19A66;">#545b62</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.button-primary {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#007bff</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">border</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1px </span><span style="color:#79B8FF;">solid</span><span style="color:#F8F8F8;"> #0056b3</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">500px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">400px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#B392F0;">.button-primary:hover {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#1a88ff</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">border-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#0062cc</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.button-secondary {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#6c757d</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">border</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1px </span><span style="color:#79B8FF;">solid</span><span style="color:#F8F8F8;"> #494f54</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">300px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">200px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#B392F0;">.button-secondary:hover {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#78828a</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">border-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#545b62</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>最后我们需要说一先关于 @content 的作用域的问题。</p><p>在混合指令的局部作用域里面所定义的变量不会影响 @content 代码块中的变量，同样，在 @content 代码块中定义的变量不会影响到混合指令中的其他变量，<strong>两者之间的作用域是隔离的</strong>。</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">@mixin</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">scope-test</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">$test-variable</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;mixin&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.mixin</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">content</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">$test-variable</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@content</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.test</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">$test-variable</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;test&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@include</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">scope-test</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">.content</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">content</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">$test-variable</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#B392F0;"> scope-test {</span></span>
<span class="line"><span style="color:#B392F0;">  $test-variable</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;mixin&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  .mixin {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#FFAB70;">content</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$test-variable</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@content</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.test {</span></span>
<span class="line"><span style="color:#B392F0;">  $test-variable</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;test&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@include</span><span style="color:#B392F0;"> scope-test {</span></span>
<span class="line"><span style="color:#B392F0;">    .content {</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#FFAB70;">content</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$test-variable</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    }</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.test</span><span style="color:#C678DD;"> </span><span style="color:#D19A66;">.mixin</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  content: </span><span style="color:#98C379;">&quot;mixin&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.test</span><span style="color:#C678DD;"> </span><span style="color:#D19A66;">.content</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  content: </span><span style="color:#98C379;">&quot;test&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.test .mixin {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">content</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;mixin&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#B392F0;">.test .content {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">content</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;test&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="sass-函数指令" tabindex="-1">Sass 函数指令 <a class="header-anchor" href="#sass-函数指令" aria-hidden="true">#</a></h2><p>上一小节所学习的混合指令虽然有点像函数，但是它并不是函数，因为混合指令所做的事情就是单纯的代码的替换工作，里面并不存在任何的计算。在 Sass 里面是支持函数指令。</p><h3 id="自定义函数" tabindex="-1">自定义函数 <a class="header-anchor" href="#自定义函数" aria-hidden="true">#</a></h3><p>在 Sass 里面自定义函数的语法如下：</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">@function</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">fn-name</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$params</span><span style="color:#E06C75;font-style:italic;">...</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@return</span><span style="color:#ABB2BF;"> XXX;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#F97583;">@function</span><span style="color:#B392F0;"> fn-name($params...) {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@return</span><span style="color:#B392F0;"> XXX;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>具体示例如下：</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">@function</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">divide</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$a</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">$b</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$b</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.container</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#56B6C2;">divide</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#F97583;">@function</span><span style="color:#B392F0;"> divide($a</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> $b) {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@return</span><span style="color:#B392F0;"> $a </span><span style="color:#F97583;">/</span><span style="color:#B392F0;"> $b;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.container {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> divide</span><span style="color:#F8F8F8;">(100px</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 2)</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.container</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">50</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.container {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">50px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>函数可以接收多个参数，如果不确定会传递几个参数，那么可以使用前面介绍过的不定参数的形式。</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">@function</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">sum</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$nums</span><span style="color:#E06C75;font-style:italic;">...</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">$sum</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@each</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$n</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">in</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$nums</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">$sum</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">$sum</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$n</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$sum</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.box1</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#56B6C2;">sum</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">) </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> px;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.box2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#56B6C2;">sum</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">6</span><span style="color:#ABB2BF;">) </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> px;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#F97583;">@function</span><span style="color:#B392F0;"> sum($nums...) {</span></span>
<span class="line"><span style="color:#B392F0;">  $sum</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@each</span><span style="color:#B392F0;"> $n </span><span style="color:#F97583;">in</span><span style="color:#B392F0;"> $nums {</span></span>
<span class="line"><span style="color:#B392F0;">    $sum</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$sum </span><span style="color:#F97583;">+</span><span style="color:#F8F8F8;"> $n</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@return</span><span style="color:#B392F0;"> $sum;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.box1 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> sum</span><span style="color:#F8F8F8;">(1</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 2</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 3) </span><span style="color:#F97583;">+</span><span style="color:#F8F8F8;"> px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.box2 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> sum</span><span style="color:#F8F8F8;">(1</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 2</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 3</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 4</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 5</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 6) </span><span style="color:#F97583;">+</span><span style="color:#F8F8F8;"> px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.box1</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">6</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.box2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">21</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.box1 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">6px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.box2 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">21px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>最后我们还是来看一个实际开发中的示例：</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 根据传入的 $background-color 返回适当的文字颜色</span></span>
<span class="line"><span style="color:#C678DD;">@function</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">contrast-color</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$background-color</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 计算背景颜色的亮度</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">$brightness</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">red</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$background-color</span><span style="color:#ABB2BF;">) </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0.299</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">green</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$background-color</span><span style="color:#ABB2BF;">) </span><span style="color:#56B6C2;">*</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">0.587</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">blue</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$background-color</span><span style="color:#ABB2BF;">) </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0.114</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 根据亮度来返回黑色或者白色的文字颜色</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@if</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$brightness</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">128</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">@return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">#000</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  } </span><span style="color:#C678DD;">@else </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">@return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">#fff</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.button</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">$background-color</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#007bff</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#E06C75;">$background-color</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#56B6C2;">contrast-color</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$background-color</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#6B737C;">// 根据传入的 $background-color 返回适当的文字颜色</span></span>
<span class="line"><span style="color:#F97583;">@function</span><span style="color:#B392F0;"> contrast-color($background-color) {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#6B737C;">// 计算背景颜色的亮度</span></span>
<span class="line"><span style="color:#B392F0;">  $brightness</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> red</span><span style="color:#F8F8F8;">($background-color) </span><span style="color:#F97583;">*</span><span style="color:#F8F8F8;"> 0.299 </span><span style="color:#F97583;">+</span><span style="color:#F8F8F8;"> </span><span style="color:#B392F0;">green</span><span style="color:#F8F8F8;">($background-color) </span><span style="color:#F97583;">*</span></span>
<span class="line"><span style="color:#F8F8F8;">    0.587 </span><span style="color:#F97583;">+</span><span style="color:#F8F8F8;"> </span><span style="color:#B392F0;">blue</span><span style="color:#F8F8F8;">($background-color) </span><span style="color:#F97583;">*</span><span style="color:#F8F8F8;"> 0.114</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#6B737C;">// 根据亮度来返回黑色或者白色的文字颜色</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@if</span><span style="color:#B392F0;"> $brightness </span><span style="color:#F97583;">&gt;</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">128</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#F97583;">@return</span><span style="color:#B392F0;"> #000;</span></span>
<span class="line"><span style="color:#B392F0;">  } </span><span style="color:#F97583;">@else </span><span style="color:#B392F0;">{</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#F97583;">@return</span><span style="color:#B392F0;"> #fff;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.button {</span></span>
<span class="line"><span style="color:#B392F0;">  $background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#007bff</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$background-color</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> contrast-color</span><span style="color:#F8F8F8;">($background-color)</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>在上面的代码示例中，我们首先定义了一个名为 contrast-color 的函数，该函数接收一个背景颜色参数，函数内部会根据这个背景颜色来决定文字应该是白色还是黑色。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.button</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">#007bff</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#fff</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.button {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#007bff</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#fff</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="内置函数" tabindex="-1">内置函数 <a class="header-anchor" href="#内置函数" aria-hidden="true">#</a></h3><p>除了自定义函数，Sass 里面还提供了非常多的内置函数，你可以在官方文档：</p><p><a href="https://sass-lang.com/documentation/modules" target="_blank" rel="noreferrer">https://sass-lang.com/documentation/modules</a></p><h4 id="字符串相关内置函数" tabindex="-1">字符串相关内置函数 <a class="header-anchor" href="#字符串相关内置函数" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">函数名和参数类型</th><th style="text-align:center;">函数作用</th></tr></thead><tbody><tr><td style="text-align:left;">quote($string)</td><td style="text-align:center;">添加引号</td></tr><tr><td style="text-align:left;">unquote($string)</td><td style="text-align:center;">除去引号</td></tr><tr><td style="text-align:left;">to-lower-case($string)</td><td style="text-align:center;">变为小写</td></tr><tr><td style="text-align:left;">to-upper-case($string)</td><td style="text-align:center;">变为大写</td></tr><tr><td style="text-align:left;">str-length($string)</td><td style="text-align:center;">返回$string 的长度(汉字算一个)</td></tr><tr><td style="text-align:left;">str-index($string，$substring)</td><td style="text-align:center;">返回$substring在$string 的位置</td></tr><tr><td style="text-align:left;">str-insert($string, $insert, $index)</td><td style="text-align:center;">在$string的$index 处插入$insert</td></tr><tr><td style="text-align:left;">str-slice($string, $start-at, $end-at）</td><td style="text-align:center;">截取$string的$start-at 和$end-at 之间的字符串</td></tr></tbody></table><p>注意索引是从 1 开始的，如果书写 -1，那么就是倒着来的。两边都是闭区间</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">$str</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;Hello world!&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.slice1</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">content</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">str-slice</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$str</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.slice2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">content</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">str-slice</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$str</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">-1</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">$str</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;Hello world!&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.slice1 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">content</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> str-slice</span><span style="color:#F8F8F8;">($str</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 1</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 5)</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.slice2 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">content</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> str-slice</span><span style="color:#F8F8F8;">($str</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> -1)</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.slice1</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  content: </span><span style="color:#98C379;">&quot;Hello&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.slice2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  content: </span><span style="color:#98C379;">&quot;!&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.slice1 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">content</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;Hello&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.slice2 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">content</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;!&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="数字相关内置函数" tabindex="-1">数字相关内置函数 <a class="header-anchor" href="#数字相关内置函数" aria-hidden="true">#</a></h4><table><thead><tr><th>函数名和参数类型</th><th style="text-align:center;">函数作用</th></tr></thead><tbody><tr><td>percentage($number)</td><td style="text-align:center;">转换为百分比形式</td></tr><tr><td>round($number)</td><td style="text-align:center;">四舍五入为整数</td></tr><tr><td>ceil($number)</td><td style="text-align:center;">数值向上取整</td></tr><tr><td>floor($number)</td><td style="text-align:center;">数值向下取整</td></tr><tr><td>abs($number)</td><td style="text-align:center;">获取绝对值</td></tr><tr><td>min($number...)</td><td style="text-align:center;">获取最小值</td></tr><tr><td>max($number...)</td><td style="text-align:center;">获取最大值</td></tr><tr><td>random($number?:number)</td><td style="text-align:center;">不传入值：获得 0-1 的随机数；传入正整数 n：获得 0-n 的随机整数（左开右闭）</td></tr></tbody></table><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.item</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#56B6C2;">percentage</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">/</span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#56B6C2;">random</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">100</span><span style="color:#ABB2BF;">) </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> px;</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#56B6C2;">rgb</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">random</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">255</span><span style="color:#ABB2BF;">), </span><span style="color:#56B6C2;">random</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">255</span><span style="color:#ABB2BF;">), </span><span style="color:#56B6C2;">random</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">255</span><span style="color:#ABB2BF;">));</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.item {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> percentage</span><span style="color:#F8F8F8;">(2</span><span style="color:#79B8FF;">/</span><span style="color:#F8F8F8;">5)</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> random</span><span style="color:#F8F8F8;">(100) </span><span style="color:#F97583;">+</span><span style="color:#F8F8F8;"> px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> rgb</span><span style="color:#F8F8F8;">(</span><span style="color:#B392F0;">random</span><span style="color:#F8F8F8;">(255)</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> </span><span style="color:#B392F0;">random</span><span style="color:#F8F8F8;">(255)</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> </span><span style="color:#B392F0;">random</span><span style="color:#F8F8F8;">(255))</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.item</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">40</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">83</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#56B6C2;">rgb</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">31</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">86</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">159</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.item {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">40%</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">height</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">83px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> rgb</span><span style="color:#F8F8F8;">(31</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 86</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 159)</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="数组相关内置函数" tabindex="-1">数组相关内置函数 <a class="header-anchor" href="#数组相关内置函数" aria-hidden="true">#</a></h4><table><thead><tr><th>函数名和参数类型</th><th style="text-align:center;">函数作用</th></tr></thead><tbody><tr><td>length($list)</td><td style="text-align:center;">获取数组长度</td></tr><tr><td>nth($list, n)</td><td style="text-align:center;">获取指定下标的元素</td></tr><tr><td>set-nth($list, $n, $value)</td><td style="text-align:center;">向$list的$n 处插入$value</td></tr><tr><td>join($list1, $list2, $separator)</td><td style="text-align:center;">拼接$list1和list2；$separator 为新 list 的分隔符，默认为 auto，可选择 comma、space</td></tr><tr><td>append($list, $val, $separator)</td><td style="text-align:center;">向$list的末尾添加$val；$separator 为新 list 的分隔符，默认为 auto，可选择 comma、space</td></tr><tr><td>index($list, $value)</td><td style="text-align:center;">返回$value值在$list 中的索引值</td></tr><tr><td>zip($lists…)</td><td style="text-align:center;">将几个列表结合成一个多维的列表；要求每个的列表个数值必须是相同的</td></tr></tbody></table><p>下面是一个具体的示例：</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 演示的是 join 方法</span></span>
<span class="line"><span style="color:#E06C75;">$list1</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">solid</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">dotted</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$list2</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">3</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">dashed</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">4</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">double</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$combined-list</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">join</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$list1</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">$list2</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">comma</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 演示的是 append 方法</span></span>
<span class="line"><span style="color:#E06C75;">$base-colors</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">green</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">blue</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$extended-colors</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">append</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$base-colors</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">yellow</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">comma</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 演示 zip 方法</span></span>
<span class="line"><span style="color:#E06C75;">$fonts</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;Arial&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;Helvetica&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;Verdana&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$weights</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;normal&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;bold&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;italic&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// $font-pair: (&quot;Arial&quot;, &quot;normal&quot;),(&quot;Helvetica&quot;, &quot;bold&quot;),(&quot;Verdana&quot;,&quot;italic&quot;)</span></span>
<span class="line"><span style="color:#E06C75;">$font-pair</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">zip</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$fonts</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">$weights</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 接下来我们来生成一下具体的样式</span></span>
<span class="line"><span style="color:#C678DD;">@each</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$border-style</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">in</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$combined-list</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.border-</span><span style="color:#E06C75;">#{</span><span style="color:#56B6C2;">index</span><span style="color:#E06C75;">($combined-list</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;"> $border-style)}</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    border: </span><span style="color:#E06C75;">$border-style</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">@each</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">in</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$extended-colors</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.bg-</span><span style="color:#E06C75;">#{</span><span style="color:#56B6C2;">index</span><span style="color:#E06C75;">($extended-colors</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;"> $color)}</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    background-color: </span><span style="color:#E06C75;">$color</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">@each</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$pair</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">in</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$font-pair</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">$font</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">nth</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$pair</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">$weight</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">nth</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$pair</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.text-</span><span style="color:#E06C75;">#{</span><span style="color:#56B6C2;">index</span><span style="color:#E06C75;">($font-pair</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;"> $pair)}</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    font-family: </span><span style="color:#E06C75;">$font</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    font-weight: </span><span style="color:#E06C75;">$weight</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#6B737C;">// 演示的是 join 方法</span></span>
<span class="line"><span style="color:#B392F0;">$list1</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1px</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">solid</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">2px</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">dotted</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">$list2</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">3px</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">dashed</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">4px</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">double</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">$combined-list</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> join($list1</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> $list2</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> comma);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6B737C;">// 演示的是 append 方法</span></span>
<span class="line"><span style="color:#B392F0;">$base-colors</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">red</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">green</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">blue</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">$extended-colors</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> append($base-colors</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">yellow</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> comma);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6B737C;">// 演示 zip 方法</span></span>
<span class="line"><span style="color:#B392F0;">$fonts</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;Arial&quot;</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;Helvetica&quot;</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;Verdana&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">$weights</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;normal&quot;</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;bold&quot;</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;italic&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#6B737C;">// $font-pair: (&quot;Arial&quot;, &quot;normal&quot;),(&quot;Helvetica&quot;, &quot;bold&quot;),(&quot;Verdana&quot;,&quot;italic&quot;)</span></span>
<span class="line"><span style="color:#B392F0;">$font-pair</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> zip($fonts</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> $weights);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6B737C;">// 接下来我们来生成一下具体的样式</span></span>
<span class="line"><span style="color:#F97583;">@each</span><span style="color:#B392F0;"> $border-style </span><span style="color:#F97583;">in</span><span style="color:#B392F0;"> $combined-list {</span></span>
<span class="line"><span style="color:#B392F0;">  .border-#{index($combined-list</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> $border-style)} {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">border</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$border-style</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@each</span><span style="color:#B392F0;"> $color </span><span style="color:#F97583;">in</span><span style="color:#B392F0;"> $extended-colors {</span></span>
<span class="line"><span style="color:#B392F0;">  .bg-#{index($extended-colors</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> $color)} {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$color</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@each</span><span style="color:#B392F0;"> $pair </span><span style="color:#F97583;">in</span><span style="color:#B392F0;"> $font-pair {</span></span>
<span class="line"><span style="color:#B392F0;">  $font</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> nth</span><span style="color:#F8F8F8;">($pair</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 1)</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  $weight</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> nth</span><span style="color:#F8F8F8;">($pair</span><span style="color:#BBBBBB;">,</span><span style="color:#F8F8F8;"> 2)</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  .text-#{index($font-pair</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> $pair)} {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">font-family</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$font</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">font-weight</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$weight</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.border-1</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  border: </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">solid</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.border-2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  border: </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">dotted</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.border-3</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  border: </span><span style="color:#D19A66;">3</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">dashed</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.border-4</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  border: </span><span style="color:#D19A66;">4</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">double</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.bg-1</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.bg-2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">green</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.bg-3</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">blue</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.bg-4</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">yellow</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.text-1</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-family: </span><span style="color:#98C379;">&quot;Arial&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-weight: </span><span style="color:#98C379;">&quot;normal&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.text-2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-family: </span><span style="color:#98C379;">&quot;Helvetica&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-weight: </span><span style="color:#98C379;">&quot;bold&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.text-3</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-family: </span><span style="color:#98C379;">&quot;Verdana&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-weight: </span><span style="color:#98C379;">&quot;italic&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.border-1 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">border</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1px </span><span style="color:#79B8FF;">solid</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.border-2 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">border</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">2px </span><span style="color:#79B8FF;">dotted</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.border-3 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">border</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">3px </span><span style="color:#79B8FF;">dashed</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.border-4 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">border</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">4px </span><span style="color:#79B8FF;">double</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.bg-1 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">red</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.bg-2 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">green</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.bg-3 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">blue</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.bg-4 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">yellow</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.text-1 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-family</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;Arial&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-weight</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;normal&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.text-2 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-family</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;Helvetica&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-weight</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;bold&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.text-3 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-family</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;Verdana&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">font-weight</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;italic&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h4 id="字典相关内置函数" tabindex="-1">字典相关内置函数 <a class="header-anchor" href="#字典相关内置函数" aria-hidden="true">#</a></h4><table><thead><tr><th>函数名和参数类型</th><th style="text-align:center;">函数作用</th></tr></thead><tbody><tr><td>map-get($map, $key)</td><td style="text-align:center;">获取$map中$key 对应的$value</td></tr><tr><td>map-merge($map1, $map2)</td><td style="text-align:center;">合并$map1和$map2，返回一个新$map</td></tr><tr><td>map-remove($map, $key)</td><td style="text-align:center;">从$map中删除$key，返回一个新$map</td></tr><tr><td>map-keys($map)</td><td style="text-align:center;">返回$map所有的$key</td></tr><tr><td>map-values($map)</td><td style="text-align:center;">返回$map所有的$value</td></tr><tr><td>map-has-key($map, $key)</td><td style="text-align:center;">判断$map中是否存在$key，返回对应的布尔值</td></tr><tr><td>keywords($args)</td><td style="text-align:center;">返回一个函数的参数，并可以动态修改其值</td></tr></tbody></table><p>下面是一个使用了字典内置方法的相关示例：</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 创建一个颜色映射表</span></span>
<span class="line"><span style="color:#E06C75;">$colors</span><span style="color:#ABB2BF;">: (</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;primary&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#007bff</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;secondary&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#6c757d</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;success&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#28a745</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;info&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#17a2b8</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;warning&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#ffc107</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;danger&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#dc3545</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 演示通过 map-get 获取对应的值</span></span>
<span class="line"><span style="color:#C678DD;">@function</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">btn-color</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$color-name</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@return</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">map-get</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$colors</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">$color-name</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 演示通过 map-keys 获取映射表所有的 keys</span></span>
<span class="line"><span style="color:#E06C75;">$color-keys</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">map-keys</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$colors</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 一个新的颜色映射表</span></span>
<span class="line"><span style="color:#E06C75;">$more-colors</span><span style="color:#ABB2BF;">: (</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;light&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#f8f9fa</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;dark&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#343a40</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 要将新的颜色映射表合并到 $colors 里面</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">$all-colors</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">map-merge</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$colors</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">$more-colors</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 接下来我们来根据颜色映射表生成样式</span></span>
<span class="line"><span style="color:#C678DD;">@each</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$color-key</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">$color-value</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">in</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$all-colors</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.text-</span><span style="color:#E06C75;">#{$color-key}</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    color: </span><span style="color:#E06C75;">$color-value</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#56B6C2;">btn-color</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;primary&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#6B737C;">// 创建一个颜色映射表</span></span>
<span class="line"><span style="color:#B392F0;">$colors</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> (</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">&quot;primary&quot;</span><span style="color:#B392F0;">: #007bff</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">&quot;secondary&quot;</span><span style="color:#B392F0;">: #6c757d</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">&quot;success&quot;</span><span style="color:#B392F0;">: #28a745</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">&quot;info&quot;</span><span style="color:#B392F0;">: #17a2b8</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">&quot;warning&quot;</span><span style="color:#B392F0;">: #ffc107</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">&quot;danger&quot;</span><span style="color:#B392F0;">: #dc3545</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6B737C;">// 演示通过 map-get 获取对应的值</span></span>
<span class="line"><span style="color:#F97583;">@function</span><span style="color:#B392F0;"> btn-color($color-name) {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@return</span><span style="color:#B392F0;"> map-get($colors</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> $color-name);</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6B737C;">// 演示通过 map-keys 获取映射表所有的 keys</span></span>
<span class="line"><span style="color:#B392F0;">$color-keys</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> map-keys($colors);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6B737C;">// 一个新的颜色映射表</span></span>
<span class="line"><span style="color:#B392F0;">$more-colors</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> (</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">&quot;light&quot;</span><span style="color:#B392F0;">: #f8f9fa</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">&quot;dark&quot;</span><span style="color:#B392F0;">: #343a40</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6B737C;">// 要将新的颜色映射表合并到 $colors 里面</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">$all-colors</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> map-merge($colors</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> $more-colors);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6B737C;">// 接下来我们来根据颜色映射表生成样式</span></span>
<span class="line"><span style="color:#F97583;">@each</span><span style="color:#B392F0;"> $color-key, $color-value </span><span style="color:#F97583;">in</span><span style="color:#B392F0;"> $all-colors {</span></span>
<span class="line"><span style="color:#B392F0;">  .text-#{$color-key} {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$color-value</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">button</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> btn-color</span><span style="color:#F8F8F8;">(</span><span style="color:#FFAB70;">&quot;primary&quot;</span><span style="color:#F8F8F8;">)</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.text-primary</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#007bff</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.text-secondary</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#6c757d</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.text-success</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#28a745</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.text-info</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#17a2b8</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.text-warning</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#ffc107</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.text-danger</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#dc3545</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.text-light</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#f8f9fa</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.text-dark</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#343a40</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#007bff</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.text-primary {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#007bff</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.text-secondary {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#6c757d</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.text-success {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#28a745</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.text-info {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#17a2b8</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.text-warning {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#ffc107</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.text-danger {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#dc3545</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.text-light {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#f8f9fa</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.text-dark {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#343a40</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">button</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#007bff</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h4 id="颜色相关内置函数" tabindex="-1">颜色相关内置函数 <a class="header-anchor" href="#颜色相关内置函数" aria-hidden="true">#</a></h4><p><em>RGB</em> 函数</p><table><thead><tr><th>函数名和参数类型</th><th style="text-align:center;">函数作用</th></tr></thead><tbody><tr><td>rgb($red, $green, $blue)</td><td style="text-align:center;">返回一个 16 进制颜色值</td></tr><tr><td>rgba($red,$green,$blue,$alpha)</td><td style="text-align:center;">返回一个 rgba；$red,$green 和$blue 可被当作一个整体以颜色单词、hsl、rgb 或 16 进制形式传入</td></tr><tr><td>red($color)</td><td style="text-align:center;">从$color 中获取其中红色值</td></tr><tr><td>green($color)</td><td style="text-align:center;">从$color 中获取其中绿色值</td></tr><tr><td>blue($color)</td><td style="text-align:center;">从$color 中获取其中蓝色值</td></tr><tr><td>mix($color1,$color2,$weight?)</td><td style="text-align:center;">按照$weight比例，将$color1 和$color2 混合为一个新颜色</td></tr></tbody></table><p><em>HSL</em> 函数</p><table><thead><tr><th>函数名和参数类型</th><th>函数作用</th></tr></thead><tbody><tr><td>hsl($hue,$saturation,$lightness)</td><td>通过色相（hue）、饱和度(saturation)和亮度（lightness）的值创建一个颜色</td></tr><tr><td>hsla($hue,$saturation,$lightness,$alpha)</td><td>通过色相（hue）、饱和度(saturation)、亮度（lightness）和透明（alpha）的值创建一个颜色</td></tr><tr><td>saturation($color)</td><td>从一个颜色中获取饱和度（saturation）值</td></tr><tr><td>lightness($color)</td><td>从一个颜色中获取亮度（lightness）值</td></tr><tr><td>adjust-hue($color,$degrees)</td><td>通过改变一个颜色的色相值，创建一个新的颜色</td></tr><tr><td>lighten($color,$amount)</td><td>通过改变颜色的亮度值，让颜色变亮，创建一个新的颜色</td></tr><tr><td>darken($color,$amount)</td><td>通过改变颜色的亮度值，让颜色变暗，创建一个新的颜色</td></tr><tr><td>hue($color)</td><td>从一个颜色中获取亮度色相（hue）值</td></tr></tbody></table><p><em>Opacity</em> 函数</p><table><thead><tr><th>函数名和参数类型</th><th>函数作用</th></tr></thead><tbody><tr><td>alpha($color)/opacity($color)</td><td>获取颜色透明度值</td></tr><tr><td>rgba($color,$alpha)</td><td>改变颜色的透明度</td></tr><tr><td>opacify($color, $amount) / fade-in($color, $amount)</td><td>使颜色更不透明</td></tr><tr><td>transparentize($color, $amount) / fade-out($color, $amount)</td><td>使颜色更加透明</td></tr></tbody></table><h4 id="其他内置函数" tabindex="-1">其他内置函数 <a class="header-anchor" href="#其他内置函数" aria-hidden="true">#</a></h4><table><thead><tr><th>函数名和参数类型</th><th style="text-align:center;">函数作用</th></tr></thead><tbody><tr><td>type-of($value)</td><td style="text-align:center;">返回$value 的类型</td></tr><tr><td>unit($number)</td><td style="text-align:center;">返回$number 的单位</td></tr><tr><td>unitless($number)</td><td style="text-align:center;">判断$number 是否没用带单位，返回对应的布尔值，没有带单位为 true</td></tr><tr><td>comparable($number1, $number2)</td><td style="text-align:center;">判断$number1和$number2 是否可以做加、减和合并，返回对应的布尔值</td></tr></tbody></table><p>示例如下：</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">$value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">42</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">$value-type</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">type-of</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$value</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">// number</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">$length</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$length-unit</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">unit</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$length</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">// &quot;px&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">$is-unitless</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">unitless</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">42</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">$can-compare</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">comparable</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">// false</span></span>
<span class="line"><span style="color:#E06C75;">$can-compare2</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">comparable</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 根据 type-of 函数的结果生成样式</span></span>
<span class="line"><span style="color:#D19A66;">.box</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">content</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;Value type: </span><span style="color:#E06C75;">#{$value-type}</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 根据 unit 函数的结果生成样式</span></span>
<span class="line"><span style="color:#D19A66;">.length-label</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">content</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;Length unit: </span><span style="color:#E06C75;">#{$length-unit}</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 根据 unitless 函数的结果生成样式</span></span>
<span class="line"><span style="color:#D19A66;">.unitless-label</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">content</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;Is unitless: </span><span style="color:#E06C75;">#{$is-unitless}</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 根据 comparable 函数的结果生成样式</span></span>
<span class="line"><span style="color:#D19A66;">.comparable-label</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">content</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;Can compare: </span><span style="color:#E06C75;">#{$can-compare}</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.comparable-label2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">content</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;Can compare: </span><span style="color:#E06C75;">#{$can-compare2}</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">$value</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">42</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">$value-type</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> type-of($value); </span><span style="color:#6B737C;">// number</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">$length</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">10px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">$length-unit</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> unit($length); </span><span style="color:#6B737C;">// &quot;px&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">$is-unitless</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> unitless(</span><span style="color:#F8F8F8;">42</span><span style="color:#B392F0;">); </span><span style="color:#6B737C;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">$can-compare</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> comparable(</span><span style="color:#F8F8F8;">1px</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">2em</span><span style="color:#B392F0;">); </span><span style="color:#6B737C;">// false</span></span>
<span class="line"><span style="color:#B392F0;">$can-compare2</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> comparable(</span><span style="color:#F8F8F8;">1px</span><span style="color:#BBBBBB;">,</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">2px</span><span style="color:#B392F0;">); </span><span style="color:#6B737C;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6B737C;">// 根据 type-of 函数的结果生成样式</span></span>
<span class="line"><span style="color:#B392F0;">.box {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">content</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;Value type: #{$value-type}&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6B737C;">// 根据 unit 函数的结果生成样式</span></span>
<span class="line"><span style="color:#B392F0;">.length-label {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">content</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;Length unit: #{$length-unit}&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6B737C;">// 根据 unitless 函数的结果生成样式</span></span>
<span class="line"><span style="color:#B392F0;">.unitless-label {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">content</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;Is unitless: #{$is-unitless}&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6B737C;">// 根据 comparable 函数的结果生成样式</span></span>
<span class="line"><span style="color:#B392F0;">.comparable-label {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">content</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;Can compare: #{$can-compare}&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.comparable-label2 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#FFAB70;">content</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;Can compare: #{$can-compare2}&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.box</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  content: </span><span style="color:#98C379;">&quot;Value type: number&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.length-label</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  content: </span><span style="color:#98C379;">&quot;Length unit: px&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.unitless-label</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  content: </span><span style="color:#98C379;">&quot;Is unitless: true&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.comparable-label</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  content: </span><span style="color:#98C379;">&quot;Can compare: false&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.comparable-label2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  content: </span><span style="color:#98C379;">&quot;Can compare: true&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.box {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">content</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;Value type: number&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.length-label {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">content</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;Length unit: px&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.unitless-label {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">content</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;Is unitless: true&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.comparable-label {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">content</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;Can compare: false&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.comparable-label2 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">content</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;Can compare: true&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="规则" tabindex="-1">@规则 <a class="header-anchor" href="#规则" aria-hidden="true">#</a></h2><p>在原生 CSS 中，存在一些 @ 开头的规则，例如 @import、@media，Sass 对这些 @ 规则完全支持，不仅支持，还在原有的基础上做了一些扩展。</p><h3 id="import" tabindex="-1">@import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h3><p>在原生的 CSS 里面，@import 是导入其他的 CSS 文件，Sass 再此基础上做了一些增强：</p><ol><li><p>编译时合并：<em>Sass</em> 在编译时将导入的文件内容合并到生成的 <em>CSS</em> 文件中，这意味着只会生成一个 <em>CSS</em> 文件，而不是像原生 <em>CSS</em> 那样需要额外的 <em>HTTP</em> 请求去加载导入的文件。</p></li><li><p>变量、函数和混合体共享：<em>Sass</em> 允许在导入的文件之间共享变量、函数和混合体，这有助于组织代码并避免重复。</p></li><li><p>部分文件：<em>Sass</em> 支持将文件名前缀为 _ 的文件称为部分文件（<em>partials</em>）。当使用 @<em>import</em> 指令导入部分文件时，<em>Sass</em> 不会生成一个单独的 <em>CSS</em> 文件，而是将其内容合并到主文件中。这有助于更好地组织项目。</p></li><li><p>文件扩展名可选：在 <em>Sass</em> 中，使用 @<em>import</em> 指令时可以省略文件扩展名（.<em>scss</em> 或 .<em>sass</em>），<em>Sass</em> 会自动识别并导入正确的文件。</p></li><li><p>嵌套导入：<em>Sass</em> 允许在一个文件中嵌套导入其他文件，但请注意，嵌套导入的文件将在父级上下文中编译，这可能会导致输出的 <em>CSS</em> 文件中的选择器层级不符合预期。</p></li></ol><p>接下来，我们来看一个具体的例子：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#abb2bf;">src/</span></span>
<span class="line"><span style="color:#abb2bf;">  ├── _variable.scss</span></span>
<span class="line"><span style="color:#abb2bf;">  ├── _mixins.scss</span></span>
<span class="line"><span style="color:#abb2bf;">  ├── _header.scss</span></span>
<span class="line"><span style="color:#abb2bf;">  └── index.scss</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#b392f0;">src/</span></span>
<span class="line"><span style="color:#b392f0;">  ├── _variable.scss</span></span>
<span class="line"><span style="color:#b392f0;">  ├── _mixins.scss</span></span>
<span class="line"><span style="color:#b392f0;">  ├── _header.scss</span></span>
<span class="line"><span style="color:#b392f0;">  └── index.scss</span></span>
<span class="line"><span style="color:#b392f0;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// _variable.scss</span></span>
<span class="line"><span style="color:#E06C75;">$primary-color</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#007bff</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">$secondary-color</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">#6c757d</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#6B737C;">// _variable.scss</span></span>
<span class="line"><span style="color:#B392F0;">$primary-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> #007bff;</span></span>
<span class="line"><span style="color:#B392F0;">$secondary-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> #6c757d;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// _mixins.scss</span></span>
<span class="line"><span style="color:#C678DD;">@mixin</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">reset-margin-padding</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#6B737C;">// _mixins.scss</span></span>
<span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#B392F0;"> reset-margin-padding {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">margin</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">padding</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// _header.scss</span></span>
<span class="line"><span style="color:#E06C75;">header</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#E06C75;">$primary-color</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#E06C75;">$secondary-color</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@include</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">reset-margin-padding</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#6B737C;">// _header.scss</span></span>
<span class="line"><span style="color:#FFAB70;">header</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$primary-color</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$secondary-color</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@include</span><span style="color:#B392F0;"> reset-margin-padding;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>可以看出，在 _header.scss 里面使用了另外两个 scss 所定义的变量以及混合体，说明变量、函数和混合体是可以共享的。</p><p>之后我们在 index.scss 里面导入了这三个 scss</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">@import</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;variable&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">@import</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;mixins&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">@import</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;header&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">body</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#E06C75;">$primary-color</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#E06C75;">$secondary-color</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@include</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">reset-margin-padding</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#F97583;">@import</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;variable&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#F97583;">@import</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;mixins&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#F97583;">@import</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;header&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">body</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$primary-color</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$secondary-color</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@include</span><span style="color:#B392F0;"> reset-margin-padding;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>最终生成的 css 如下：</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">header</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">#007bff</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#6c757d</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">body</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">#007bff</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">#6c757d</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#FFAB70;">header</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#007bff</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#6c757d</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">margin</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">padding</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFAB70;">body</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#007bff</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#6c757d</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">margin</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">padding</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">0</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>最终只会生成一个 css。</p><p>通常情况下，我们在通过 @import 导入文件的时候，不给后缀名，会自动的寻找 sass 文件并将其导入。但是有一些情况下，会编译为普通的 CSS 语句，并不会导入任何文件：</p><ul><li>文件拓展名是 .<em>css</em>；</li><li>文件名以 <em>http</em>😕/ 开头；</li><li>文件名是 <em>url</em>()；</li><li>@<em>import</em> 包含 <em>media queries</em>。</li></ul><p>例如：</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">@import</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;foo.css&quot;</span><span style="color:#ABB2BF;"> @</span><span style="color:#56B6C2;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;foo&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">screen</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">@import</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;http://foo.com/bar&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">@import</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">url</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">foo</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#F97583;">@import</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;foo.css&quot;</span><span style="color:#B392F0;"> @import </span><span style="color:#FFAB70;">&quot;foo&quot;</span><span style="color:#B392F0;"> screen;</span></span>
<span class="line"><span style="color:#F97583;">@import</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;http://foo.com/bar&quot;</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#F97583;">@import</span><span style="color:#B392F0;"> url(foo);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="media" tabindex="-1">@media <a class="header-anchor" href="#media" aria-hidden="true">#</a></h3><p>这个规则在原生 CSS 里面是做媒体查询，Sass 里面是完全支持的，并且做了一些增强操作。</p><ol><li>Sass 里面允许你讲 @media 嵌套在选择器内部</li></ol><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.navigation</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">flex</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  justify-content: </span><span style="color:#D19A66;">flex-end</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@media</span><span style="color:#ABB2BF;"> (max-width: </span><span style="color:#D19A66;">768</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    flex-direction: </span><span style="color:#D19A66;">column</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.navigation {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">display</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">flex</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">justify-content</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">flex-end</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@media</span><span style="color:#B392F0;"> (</span><span style="color:#79B8FF;">max-width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">768px</span><span style="color:#B392F0;">) {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">flex-direction</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">column</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.navigation</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">flex</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  justify-content: </span><span style="color:#D19A66;">flex-end</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;">@media</span><span style="color:#ABB2BF;"> (max-width: </span><span style="color:#D19A66;">768</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.navigation</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    flex-direction: </span><span style="color:#D19A66;">column</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.navigation {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">display</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">flex</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">justify-content</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">flex-end</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#B392F0;"> (</span><span style="color:#79B8FF;">max-width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">768px</span><span style="color:#B392F0;">) {</span></span>
<span class="line"><span style="color:#B392F0;">  .navigation {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">flex-direction</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">column</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="2"><li>允许使用变量</li></ol><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#E06C75;">$mobile-breakpoint</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">768</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.navigation</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">flex</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  justify-content: </span><span style="color:#D19A66;">flex-end</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@media</span><span style="color:#ABB2BF;"> (max-width: </span><span style="color:#E06C75;">$mobile-breakpoint</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    flex-direction: </span><span style="color:#D19A66;">column</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">$mobile-breakpoint</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">768px</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.navigation {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">display</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">flex</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">justify-content</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">flex-end</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@media</span><span style="color:#B392F0;"> (</span><span style="color:#79B8FF;">max-width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">$mobile-breakpoint</span><span style="color:#B392F0;">) {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">flex-direction</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">column</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.navigation</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">flex</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  justify-content: </span><span style="color:#D19A66;">flex-end</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;">@media</span><span style="color:#ABB2BF;"> (max-width: </span><span style="color:#D19A66;">768</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.navigation</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    flex-direction: </span><span style="color:#D19A66;">column</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.navigation {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">display</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">flex</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">justify-content</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">flex-end</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#B392F0;"> (</span><span style="color:#79B8FF;">max-width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">768px</span><span style="color:#B392F0;">) {</span></span>
<span class="line"><span style="color:#B392F0;">  .navigation {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">flex-direction</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">column</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="3"><li>可以使用混合体</li></ol><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#C678DD;">@mixin</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">respond-to</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">$breakpoint</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@if</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$breakpoint</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;mobile&quot;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">@media</span><span style="color:#ABB2BF;"> (max-width: </span><span style="color:#D19A66;">768</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">@content</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  } </span><span style="color:#C678DD;">@else if</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$breakpoint</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;tablet&quot;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">@media</span><span style="color:#ABB2BF;"> (min-width: </span><span style="color:#D19A66;">769</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">) </span><span style="color:#56B6C2;">and</span><span style="color:#ABB2BF;"> (max-width: </span><span style="color:#D19A66;">1024</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">@content</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  } </span><span style="color:#C678DD;">@else if</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$breakpoint</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;desktop&quot;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">@media</span><span style="color:#ABB2BF;"> (min-width: </span><span style="color:#D19A66;">1025</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">@content</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.container</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">80</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@include</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">respond-to</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;mobile&quot;</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    width: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@include</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">respond-to</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;desktop&quot;</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    width: </span><span style="color:#D19A66;">70</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#B392F0;"> respond-to($breakpoint) {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@if</span><span style="color:#B392F0;"> $breakpoint </span><span style="color:#F97583;">==</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;mobile&quot;</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#F97583;">@media</span><span style="color:#B392F0;"> (</span><span style="color:#79B8FF;">max-width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">768px</span><span style="color:#B392F0;">) {</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#F97583;">@content</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    }</span></span>
<span class="line"><span style="color:#B392F0;">  } </span><span style="color:#F97583;">@else if</span><span style="color:#B392F0;"> $breakpoint </span><span style="color:#F97583;">==</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;tablet&quot;</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#F97583;">@media</span><span style="color:#B392F0;"> (</span><span style="color:#79B8FF;">min-width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">769px</span><span style="color:#B392F0;">) </span><span style="color:#F97583;">and</span><span style="color:#B392F0;"> (</span><span style="color:#79B8FF;">max-width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1024px</span><span style="color:#B392F0;">) {</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#F97583;">@content</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    }</span></span>
<span class="line"><span style="color:#B392F0;">  } </span><span style="color:#F97583;">@else if</span><span style="color:#B392F0;"> $breakpoint </span><span style="color:#F97583;">==</span><span style="color:#B392F0;"> </span><span style="color:#FFAB70;">&quot;desktop&quot;</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#F97583;">@media</span><span style="color:#B392F0;"> (</span><span style="color:#79B8FF;">min-width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1025px</span><span style="color:#B392F0;">) {</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#F97583;">@content</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    }</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.container {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">80%</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@include</span><span style="color:#B392F0;"> respond-to(</span><span style="color:#FFAB70;">&quot;mobile&quot;</span><span style="color:#B392F0;">) {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">100%</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@include</span><span style="color:#B392F0;"> respond-to(</span><span style="color:#FFAB70;">&quot;desktop&quot;</span><span style="color:#B392F0;">) {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">70%</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.container</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">80</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;">@media</span><span style="color:#ABB2BF;"> (max-width: </span><span style="color:#D19A66;">768</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.container</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    width: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;">@media</span><span style="color:#ABB2BF;"> (min-width: </span><span style="color:#D19A66;">1025</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.container</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    width: </span><span style="color:#D19A66;">70</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.container {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">80%</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#B392F0;"> (</span><span style="color:#79B8FF;">max-width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">768px</span><span style="color:#B392F0;">) {</span></span>
<span class="line"><span style="color:#B392F0;">  .container {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">100%</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#B392F0;"> (</span><span style="color:#79B8FF;">min-width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1025px</span><span style="color:#B392F0;">) {</span></span>
<span class="line"><span style="color:#B392F0;">  .container {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">70%</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="extend" tabindex="-1">@extend <a class="header-anchor" href="#extend" aria-hidden="true">#</a></h3><p>我们在书写 CSS 样式的时候，经常会遇到一种情况：一个元素使用的样式和另外一个元素基本相同，但是又增加了一些额外的样式。这个时候就可以使用继承。Sass 里面提供了@extend 规则来实现继承，让一个选择器能够继承另外一个选择器的样式规则。</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.button</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">inline-block</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">white</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.primary-button</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@extend</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">.button</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">blue</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.button {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">display</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">inline-block</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">padding</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">20px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">red</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">white</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.primary-button {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@extend</span><span style="color:#B392F0;"> .button;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">blue</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.button</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#D19A66;">.primary-button</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">inline-block</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">white</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.primary-button</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">blue</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.button</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">.primary-button {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">display</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">inline-block</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">padding</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">20px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">red</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">white</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.primary-button {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">blue</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>如果是刚接触的同学，可能会觉得 @extend 和 @mixin 比较相似，感觉都是把公共的样式提取出来了，但是两者其实是不同的。</p><ul><li>参数支持：@<em>mixin</em> 支持传递参数，使其更具灵活性；而 @<em>extend</em> 不支持参数传递。</li><li>生成的 <em>CSS</em>：@<em>extend</em> 会将选择器合并，生成更紧凑的 <em>CSS</em>，并且所继承的样式在最终生成的 CSS 样式中也是真实存在的；而 @<em>mixin</em> 会在每个 @<em>include</em> 处生成完整的 <em>CSS</em> 代码，做的就是一个简单的 CSS 替换。</li><li>使用场景：@<em>extend</em> 更适用于继承已有样式的情况，例如 <em>UI</em> 框架中的通用样式；而 @<em>mixin</em> 更适用于需要自定义参数的情况，例如为不同组件生成类似的样式。</li></ul><p>接下来我们来看一个复杂的例子：</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.box</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  border: </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">#f00</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">#fdd</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.container</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@extend</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">.box</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-width: </span><span style="color:#D19A66;">3</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.box.a</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-image: </span><span style="color:#56B6C2;">url</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;/image/abc.png&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.box {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">border</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1px #f00</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#fdd</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.container {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@extend</span><span style="color:#B392F0;"> .box;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">border-width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">3px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.box.a {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-image</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> url</span><span style="color:#F8F8F8;">(</span><span style="color:#FFAB70;">&quot;/image/abc.png&quot;</span><span style="color:#F8F8F8;">)</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.box</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#D19A66;">.container</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  border: </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">#f00</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">#fdd</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.container</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-width: </span><span style="color:#D19A66;">3</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.box.a</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#D19A66;">.a.container</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-image: </span><span style="color:#56B6C2;">url</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;/image/abc.png&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.box</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">.container {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">border</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">1px #f00</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">#fdd</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.container {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">border-width</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">3px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.box.a</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">.a.container {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-image</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> url</span><span style="color:#F8F8F8;">(</span><span style="color:#FFAB70;">&quot;/image/abc.png&quot;</span><span style="color:#F8F8F8;">)</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>在上面的代码中，container 是继承了 box 里面的所有样式，假设一个元素需要有 box 和 a 这两个类才能对应一段样式（abc），由于 box 类所对应的样式，如果是挂 container 这个类的话，这些样式也会有，所以一个元素如果挂了 container 和 a 这两个类，同样应该应用对应 abc 样式。</p><p>有些时候，我们需要定义一套用于继承的样式，不希望 Sass 单独编译输出，那么这种情况下就可以使用 % 作为占位符。</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">%button</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">inline-block</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">white</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.primary-button</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@extend</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">%button</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">blue</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.secondary-button</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@extend</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">%button</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: pink;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">%button {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">display</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">inline-block</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">padding</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">20px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">red</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">white</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.primary-button {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@extend</span><span style="color:#B392F0;"> %button;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">blue</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.secondary-button {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@extend</span><span style="color:#B392F0;"> %button;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">pink</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.secondary-button</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#D19A66;">.primary-button</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">inline-block</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">white</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.primary-button</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">blue</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.secondary-button</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: pink;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.secondary-button</span><span style="color:#BBBBBB;">,</span></span>
<span class="line"><span style="color:#B392F0;">.primary-button {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">display</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">inline-block</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">padding</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#F8F8F8;">20px</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">red</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">white</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.primary-button {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">blue</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.secondary-button {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">pink</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="at-root" tabindex="-1">@at-root <a class="header-anchor" href="#at-root" aria-hidden="true">#</a></h3><p>有些时候，我们可能会涉及到将嵌套规则移动到根级别（声明的时候并没有写在根级别）。这个时候就可以使用 @at-root</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.parent</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@at-root</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">.child</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    color: </span><span style="color:#D19A66;">blue</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.parent {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">red</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@at-root</span><span style="color:#B392F0;"> .child {</span></span>
<span class="line"><span style="color:#B392F0;">    </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">blue</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.parent</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.child</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">blue</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.parent {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">red</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#B392F0;">.child {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">blue</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>如果你想要移动的是一组规则，这个时候需要在 @at-root 后面添加一对大括号，将想要移动的这一组样式放入到大括号里面</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.parent</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">@at-root</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">.child</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      color: </span><span style="color:#D19A66;">blue</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">.test</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      color: pink;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">.test2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      color: </span><span style="color:#D19A66;">purple</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.parent {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">red</span><span style="color:#B392F0;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#F97583;">@at-root</span><span style="color:#B392F0;"> {</span></span>
<span class="line"><span style="color:#B392F0;">    .child {</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">blue</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    }</span></span>
<span class="line"><span style="color:#B392F0;">    .test {</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">pink</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    }</span></span>
<span class="line"><span style="color:#B392F0;">    .test2 {</span></span>
<span class="line"><span style="color:#B392F0;">      </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">purple</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">    }</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.parent</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.child</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">blue</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.test</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: pink;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">.test2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">purple</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.parent {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">red</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#B392F0;">.child {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">blue</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.test {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">pink</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.test2 {</span></span>
<span class="line"><span style="color:#B392F0;">  </span><span style="color:#79B8FF;">color</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> </span><span style="color:#79B8FF;">purple</span><span style="color:#B392F0;">;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="debug、-warn、-error" tabindex="-1">@debug、@warn、@error <a class="header-anchor" href="#debug、-warn、-error" aria-hidden="true">#</a></h3><p>这三个规则是和调试相关的，可以让我们在编译过程中输出一条信息，有助于调试和诊断代码中的问题。</p><h2 id="sass-最佳实践与展望" tabindex="-1">Sass 最佳实践与展望 <a class="header-anchor" href="#sass-最佳实践与展望" aria-hidden="true">#</a></h2><h3 id="最佳实践" tabindex="-1">最佳实践 <a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a></h3><ol><li>合理的组织你的文件和目录结构：可以将一个大的 Sass 文件拆分成一个一个小的模块，我们可以按照功能、页面、组件来划分我们的文件结构，这样的话更加利于我们的项目维护。</li></ol><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">sass/</span></span>
<span class="line"><span style="color:#ABB2BF;">|</span></span>
<span class="line"><span style="color:#ABB2BF;">|-- base/</span></span>
<span class="line"><span style="color:#ABB2BF;">|   |-- _reset</span><span style="color:#D19A66;">.scss</span><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 重置样式</span></span>
<span class="line"><span style="color:#ABB2BF;">|   |-- _typography</span><span style="color:#D19A66;">.scss</span><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 排版相关样式</span></span>
<span class="line"><span style="color:#ABB2BF;">|   ...</span></span>
<span class="line"><span style="color:#ABB2BF;">|</span></span>
<span class="line"><span style="color:#ABB2BF;">|-- components/</span></span>
<span class="line"><span style="color:#ABB2BF;">|   |-- _buttons</span><span style="color:#D19A66;">.scss</span><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 按钮相关样式</span></span>
<span class="line"><span style="color:#ABB2BF;">|   |-- _forms</span><span style="color:#D19A66;">.scss</span><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 表单相关样式</span></span>
<span class="line"><span style="color:#ABB2BF;">|   ...</span></span>
<span class="line"><span style="color:#ABB2BF;">|</span></span>
<span class="line"><span style="color:#ABB2BF;">|-- layout/</span></span>
<span class="line"><span style="color:#ABB2BF;">|   |-- _header</span><span style="color:#D19A66;">.scss</span><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 页眉相关样式</span></span>
<span class="line"><span style="color:#ABB2BF;">|   |-- _footer</span><span style="color:#D19A66;">.scss</span><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 页脚相关样式</span></span>
<span class="line"><span style="color:#ABB2BF;">|   ...</span></span>
<span class="line"><span style="color:#ABB2BF;">|</span></span>
<span class="line"><span style="color:#ABB2BF;">|-- pages/</span></span>
<span class="line"><span style="color:#ABB2BF;">|   |-- _home</span><span style="color:#D19A66;">.scss</span><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 首页相关样式</span></span>
<span class="line"><span style="color:#ABB2BF;">|   |-- _about</span><span style="color:#D19A66;">.scss</span><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 关于页面相关样式</span></span>
<span class="line"><span style="color:#ABB2BF;">|   ...</span></span>
<span class="line"><span style="color:#ABB2BF;">|</span></span>
<span class="line"><span style="color:#ABB2BF;">|-- utils/</span></span>
<span class="line"><span style="color:#ABB2BF;">|   |-- _variables</span><span style="color:#D19A66;">.scss</span><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 变量定义</span></span>
<span class="line"><span style="color:#ABB2BF;">|   |-- _mixins</span><span style="color:#D19A66;">.scss</span><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 混入定义</span></span>
<span class="line"><span style="color:#ABB2BF;">|   |-- _functions</span><span style="color:#D19A66;">.scss</span><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 函数定义</span></span>
<span class="line"><span style="color:#ABB2BF;">|   ...</span></span>
<span class="line"><span style="color:#ABB2BF;">|</span></span>
<span class="line"><span style="color:#ABB2BF;">|-- </span><span style="color:#E06C75;">main</span><span style="color:#D19A66;">.scss</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">// 主入口文件</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">sass/</span></span>
<span class="line"><span style="color:#B392F0;">|</span></span>
<span class="line"><span style="color:#B392F0;">|-- base/</span></span>
<span class="line"><span style="color:#B392F0;">|   |-- _reset.scss  </span><span style="color:#6B737C;">// 重置样式</span></span>
<span class="line"><span style="color:#B392F0;">|   |-- _typography.scss  </span><span style="color:#6B737C;">// 排版相关样式</span></span>
<span class="line"><span style="color:#B392F0;">|   ...</span></span>
<span class="line"><span style="color:#B392F0;">|</span></span>
<span class="line"><span style="color:#B392F0;">|-- components/</span></span>
<span class="line"><span style="color:#B392F0;">|   |-- _buttons.scss  </span><span style="color:#6B737C;">// 按钮相关样式</span></span>
<span class="line"><span style="color:#B392F0;">|   |-- _forms.scss  </span><span style="color:#6B737C;">// 表单相关样式</span></span>
<span class="line"><span style="color:#B392F0;">|   ...</span></span>
<span class="line"><span style="color:#B392F0;">|</span></span>
<span class="line"><span style="color:#B392F0;">|-- layout/</span></span>
<span class="line"><span style="color:#B392F0;">|   |-- _header.scss  </span><span style="color:#6B737C;">// 页眉相关样式</span></span>
<span class="line"><span style="color:#B392F0;">|   |-- _footer.scss  </span><span style="color:#6B737C;">// 页脚相关样式</span></span>
<span class="line"><span style="color:#B392F0;">|   ...</span></span>
<span class="line"><span style="color:#B392F0;">|</span></span>
<span class="line"><span style="color:#B392F0;">|-- pages/</span></span>
<span class="line"><span style="color:#B392F0;">|   |-- _home.scss  </span><span style="color:#6B737C;">// 首页相关样式</span></span>
<span class="line"><span style="color:#B392F0;">|   |-- _about.scss  </span><span style="color:#6B737C;">// 关于页面相关样式</span></span>
<span class="line"><span style="color:#B392F0;">|   ...</span></span>
<span class="line"><span style="color:#B392F0;">|</span></span>
<span class="line"><span style="color:#B392F0;">|-- utils/</span></span>
<span class="line"><span style="color:#B392F0;">|   |-- _variables.scss  </span><span style="color:#6B737C;">// 变量定义</span></span>
<span class="line"><span style="color:#B392F0;">|   |-- _mixins.scss  </span><span style="color:#6B737C;">// 混入定义</span></span>
<span class="line"><span style="color:#B392F0;">|   |-- _functions.scss  </span><span style="color:#6B737C;">// 函数定义</span></span>
<span class="line"><span style="color:#B392F0;">|   ...</span></span>
<span class="line"><span style="color:#B392F0;">|</span></span>
<span class="line"><span style="color:#B392F0;">|-- </span><span style="color:#FFAB70;">main</span><span style="color:#B392F0;">.scss </span><span style="color:#6B737C;">// 主入口文件</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><ol start="2"><li><p>多使用变量：在开发的时候经常会遇到一些会重复使用的值（颜色、字体、尺寸），我们就可以将这些值定义为变量，方便在项目中统一进行管理和修改。</p></li><li><p>关于嵌套：嵌套非常好用，但是要避免层数过多的嵌套，通常来讲不要超过 3 层</p></li></ol><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.a</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  .....</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.b</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    ....</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.a {</span></span>
<span class="line"><span style="color:#B392F0;">  .....</span></span>
<span class="line"><span style="color:#B392F0;">  .b {</span></span>
<span class="line"><span style="color:#B392F0;">    ....</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.a</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  ....;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.a</span><span style="color:#C678DD;"> </span><span style="color:#D19A66;">.b</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  ....;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.a {</span></span>
<span class="line"><span style="color:#B392F0;">  ....;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"><span style="color:#B392F0;">.a .b {</span></span>
<span class="line"><span style="color:#B392F0;">  ....;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>如果嵌套层数过多：</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.a</span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  ...</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#D19A66;">.b</span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    ...</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">.c</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      ...</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#D19A66;">.d</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">        ....</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#D19A66;">.e</span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">          ....</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.a{</span></span>
<span class="line"><span style="color:#B392F0;">  ...</span></span>
<span class="line"><span style="color:#B392F0;">  .b{</span></span>
<span class="line"><span style="color:#B392F0;">    ...</span></span>
<span class="line"><span style="color:#B392F0;">    .c {</span></span>
<span class="line"><span style="color:#B392F0;">      ...</span></span>
<span class="line"><span style="color:#B392F0;">      .d {</span></span>
<span class="line"><span style="color:#B392F0;">        ....</span></span>
<span class="line"><span style="color:#B392F0;">        .e{</span></span>
<span class="line"><span style="color:#B392F0;">          ....</span></span>
<span class="line"><span style="color:#B392F0;">        }</span></span>
<span class="line"><span style="color:#B392F0;">      }</span></span>
<span class="line"><span style="color:#B392F0;">    }</span></span>
<span class="line"><span style="color:#B392F0;">  }</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-dark-pro vp-code-dark"><code><span class="line"><span style="color:#D19A66;">.a</span><span style="color:#C678DD;"> </span><span style="color:#D19A66;">.b</span><span style="color:#C678DD;"> </span><span style="color:#D19A66;">.c</span><span style="color:#C678DD;"> </span><span style="color:#D19A66;">.d</span><span style="color:#C678DD;"> </span><span style="color:#D19A66;">.e</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  .....;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki min-dark vp-code-light"><code><span class="line"><span style="color:#B392F0;">.a .b .c .d .e {</span></span>
<span class="line"><span style="color:#B392F0;">  .....;</span></span>
<span class="line"><span style="color:#B392F0;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="4"><li>多使用混合指令：混合指令可以将公共的部分抽离出来，提高了代码的复用性。但是要清楚混合指令和 @extend 之间的区别，具体使用哪一个，取决于你写项目时的具体场景，不是说某一个就比另一个绝对的好。</li><li>使用函数：可以编写自定义函数来处理一些复杂的计算和操作。而且 Sass 还提供了很多非常好用的内置函数。</li><li>遵循常见的 Sass 编码规范：</li></ol><ul><li>Sass guidelines：<a href="https://sass-guidelin.es/" target="_blank" rel="noreferrer">https://sass-guidelin.es/</a></li><li>Airbnb CSS：<a href="https://github.com/airbnb/css" target="_blank" rel="noreferrer">https://github.com/airbnb/css</a></li></ul><h3 id="sass-未来发展" tabindex="-1">Sass 未来发展 <a class="header-anchor" href="#sass-未来发展" aria-hidden="true">#</a></h3><p>我们如果想要获取到 Sass 的最新动向，通常可以去 Sass 的社区看一下。</p><p>注意：一门成熟的技术，是一定会有对应社区的。理论上来讲，社区的形式是不限的，但是通常是以论坛的形式存在的，大家可以在论坛社区自由的讨论这门技术相关的话题。</p><p>社区往往包含了这门技术最新的动态，甚至有一些优秀的技术解决方案是先来自于社区，之后才慢慢成为正式的标准语法的。</p><ul><li>reddit：<a href="https://www.reddit.com/r/Sass/" target="_blank" rel="noreferrer">https://www.reddit.com/r/Sass/</a></li><li>twitter：官方的 twitter 也是我们了解技术最新动向的一个渠道 <a href="https://twitter.com/SassCSS" target="_blank" rel="noreferrer">https://twitter.com/SassCSS</a></li></ul><p>目前市面上又很多 CSS 库都是基于 Sass 来进行构建了，例如：</p><ol><li><em>Compass</em> - 老牌 <em>Sass</em> 框架，提供大量 <em>Sass mixins</em> 和函数,方便开发。</li><li><em>Bourbon</em> - 轻量级的 <em>Sass mixin</em> 库，提供常用的 <em>mixins</em>，简化 <em>CSS</em> 开发。</li><li><em>Neat</em> - 构建具有响应式网格布局的网站，基于 <em>Sass</em> 和 <em>Bourbon</em>，容易上手。</li><li><em>Materialize</em> - 实现 <em>Material Design</em> 风格，基于 <em>Sass</em> 构建，提供丰富组件和元素。</li><li><em>Bulma</em> - 现代 <em>CSS</em> 框架，提供弹性网格和常见组件，可与 <em>Sass</em> 一起使用。</li><li><em>Foundation</em> - 老牌前端框架，基于 <em>Sass</em>，提供全面的组件和工具，适合构建复杂项目。</li><li><em>Semantic UI</em> - 设计美观的 <em>UI</em> 套件，基于 <em>Sass</em> 构建，提供丰富样式和交互。</li><li><em>Spectre.css</em> - 轻量级、响应式和现代的 <em>CSS</em> 框架，可以与 <em>Sass</em> 结合使用。</li></ol><p>因此，基本上目前 Sass 已经成为了前端开发人员首选的 CSS 预处理器。因为 Sass 相比其他两个 CSS 预处理器，功能是最强大的，特性是最多的，社区也是最活跃的。</p><p>关于 Sass 官方团队，未来再对 Sass 进行更新的时候，基本上会往以下几个方面做出努力：</p><ul><li>性能优化</li><li>持续的与现代 Web 技术的集成</li><li>新功能的改进</li></ul><blockquote><p>本文所有源码均在 <a href="https://github.com/Sunny-117/blog/tree/main/code/sass-demo" target="_blank" rel="noreferrer">https://github.com/Sunny-117/blog/tree/main/code/sass-demo</a></p></blockquote>`,394),e=[o];function c(r,t,B,y,i,F){return n(),a("div",null,e)}const u=s(p,[["render",c]]);export{d as __pageData,u as default};
