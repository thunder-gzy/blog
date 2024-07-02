import{_ as e,o as t,c as r,a}from"./app.f983686f.js";const b=JSON.parse('{"title":"Fiber","description":"","frontmatter":{},"headers":[],"relativePath":"react/Fiber.md","lastUpdated":1675253508000}'),i={name:"react/Fiber.md"},o=a('<h1 id="fiber" tabindex="-1">Fiber <a class="header-anchor" href="#fiber" aria-hidden="true">#</a></h1><p>React V15 在渲染时，会递归比对 VirtualDOM 树，找出需要变动的节点，然后同步更新它们， 一气呵成。这个过程期间， React 会占据浏览器资源，这会导致用户触发的事件得不到响应，并且会导致掉帧，<strong>导致用户感觉到卡顿</strong>。</p><p>为了给用户制造一种应用很快的“假象”，不能让一个任务长期霸占着资源。 可以将浏览器的渲染、布局、绘制、资源加载(例如 HTML 解析)、事件响应、脚本执行视作操作系统的“进程”，需要通过某些调度策略合理地分配 CPU 资源，从而提高浏览器的用户响应速率, 同时兼顾任务执行效率。</p><p>所以 React 通过 Fiber 架构，让这个执行过程变成可被中断。“适时”地让出 CPU 执行权，除了可以让浏览器及时地响应用户的交互，还有其他好处:</p><ul><li>分批延时对 DOM 进行操作，避免一次性操作大量 DOM 节点，可以得到更好的用户体验；</li><li>给浏览器一点喘息的机会，它会对代码进行编译优化（JIT）及进行热代码优化，或者对 reflow 进行修正。</li></ul><p><strong>核心思想:</strong> Fiber 也称协程或者纤程。它和线程并不一样，协程本身是没有并发或者并行能力的（需要配合线程），它只是一种控制流程的让出机制。让出 CPU 的执行权，让 CPU 能在这段时间执行其他的操作。渲染的过程可以被中断，可以将控制权交回浏览器，让位给高优先级的任务，浏览器空闲后再恢复渲染。</p>',6),s=[o];function _(c,n,p,d,l,f){return t(),r("div",null,s)}const u=e(i,[["render",_]]);export{b as __pageData,u as default};
