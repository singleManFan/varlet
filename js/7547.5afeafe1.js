(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[7547],{7547:(s,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>n});var d=e(7875),a={class:"varlet-site-doc"},c=(0,d.uE)('<h1>DatePicker 日期选择器</h1><div class="card"><h3>介绍</h3><p>用于选择日期或日期范围。</p></div><div class="card"><h3>引入</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { DatePicker } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(DatePicker)\n</code></pre></div><div class="card"><h3>基本使用</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-date-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;date&quot;</span> /&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> date = ref(<span class="hljs-string">&#39;2021-04-08&#39;</span>)\n    \n    <span class="hljs-keyword">return</span> {\n      date\n    }\n  }\n}\n</code></pre></div><div class="card"><h3>月份选择器</h3><p>使用 <code>type</code> 属性切换选择器的类型，<code>type</code> 默认值为 <code>date</code></p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-date-picker</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;month&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;date&quot;</span> <span class="hljs-attr">shadow</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>多选</h3><p>通过 <code>multiple</code> 属性选择多个日期，此时 <code>date</code> 为一个数组。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-date-picker</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;date&quot;</span> <span class="hljs-attr">multiple</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>选择范围</h3><p>通过 <code>range</code> 属性选择一个日期范围，此时 <code>date</code> 为 <code>[startDate, endDate]</code>。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-date-picker</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;date&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;date&quot;</span> <span class="hljs-attr">range</span>&gt;</span>\n</code></pre></div><div class="card"><h3>日期限制</h3><p>通过 <code>min</code> 和 <code>max</code> 属性来控制可选择的日期范围，使用 <code>allowed-dates</code> 属性限制可以选择的日期。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-date-picker</span> \n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;date&quot;</span> \n  <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;2020-10-15&quot;</span>\n  <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;2021-01-15&quot;</span> \n  <span class="hljs-attr">:allowed-dates</span>=<span class="hljs-string">&quot;allowedDates&quot;</span>\n/&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> date = ref(<span class="hljs-string">&#39;2020-11-11&#39;</span>)\n\n    <span class="hljs-keyword">const</span> allowedDates = <span class="hljs-function">(<span class="hljs-params">val</span>) =&gt;</span> {\n      <span class="hljs-keyword">return</span> <span class="hljs-built_in">parseInt</span>(val.split(<span class="hljs-string">&#39;-&#39;</span>)[<span class="hljs-number">2</span>], <span class="hljs-number">10</span>) % <span class="hljs-number">2</span> === <span class="hljs-number">1</span>\n    }\n    \n    <span class="hljs-keyword">return</span> {\n      date,\n      allowedDates,\n    }\n  }\n}\n</code></pre></div><div class="card"><h3>自定义</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-date-picker</span>\n  <span class="hljs-attr">shadow</span>\n  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;month&quot;</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;date&quot;</span>\n  <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;2016-07&quot;</span>\n  <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;2022-01&quot;</span>\n  <span class="hljs-attr">header-color</span>=<span class="hljs-string">&quot;purple&quot;</span>\n  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#7bb872&quot;</span>\n  <span class="hljs-attr">first-day-of-week</span>=<span class="hljs-string">&quot;1&quot;</span>\n  <span class="hljs-attr">:allowed-dates</span>=<span class="hljs-string">&quot;allowedDates&quot;</span>\n  @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">year</span>=<span class="hljs-string">&quot;{ year }&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{{ year }}年<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">month</span>=<span class="hljs-string">&quot;{ year, month }&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{{ year }}年{{ month }}月<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-date-picker</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> date = ref(<span class="hljs-string">&#39;2021-02&#39;</span>)\n\n    <span class="hljs-keyword">const</span> allowedDates = <span class="hljs-function">(<span class="hljs-params">val</span>) =&gt;</span> {\n      <span class="hljs-keyword">return</span> <span class="hljs-built_in">parseInt</span>(val.split(<span class="hljs-string">&#39;-&#39;</span>)[<span class="hljs-number">1</span>], <span class="hljs-number">10</span>) % <span class="hljs-number">2</span> === <span class="hljs-number">1</span>\n    }\n\n    <span class="hljs-keyword">const</span> change = <span class="hljs-function">(<span class="hljs-params">date</span>) =&gt;</span> {\n      <span class="hljs-built_in">console</span>.log(date)\n    }\n    \n    <span class="hljs-keyword">return</span> {\n      date,\n      change,\n      allowedDates\n    }\n  }\n}\n</code></pre></div><h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>被选择的日期（ISO 8601 格式，<code>YYYY-MM-DD</code> 或 <code>YYYY-MM</code>）</td><td><em>string[] | string</em></td><td><code>-</code></td></tr><tr><td><code>type</code></td><td>选择器类型，可选值为<code>date, month</code></td><td><em>string</em></td><td><code>date</code></td></tr><tr><td><code>allowed-dates</code></td><td>限制可以选择的日期</td><td><em>function</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>选择器的颜色</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>header-color</code></td><td>标题背景色。如果未指定，将使用由 color 属性或默认颜色。</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>shadow</code></td><td>是否添加阴影</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>first-day-of-week</code></td><td>设置一周的第一天，从周日的 0 开始。</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>min</code></td><td>允许的最小日期/月份（ISO 8601格式）</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>max</code></td><td>允许的最大日期/月份（ISO 8601格式）</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>show-current</code></td><td>是否显示当前日期</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>readonly</code></td><td>是否只读</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>multiple</code></td><td>是否支持选择多个日期</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>range</code></td><td>是否支持选择一个范围</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>change</code></td><td>日期变化时触发</td><td><code>value: string | string[]</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><p><code>weekIndex</code> 表示一周的第n天，从周末的<code>0</code>开始</p><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>year</code></td><td>自定义标题中的年</td><td><code>year: YYYY</code></td></tr><tr><td><code>month</code></td><td>自定义标题中的月</td><td><code>year: YYYY</code> <code>month: MM</code></td></tr><tr><td><code>date</code></td><td>自定义标题中的日期</td><td><code>year: YYYY</code> <code>month: MM</code> <code>date: DD</code> <code>week: weekIndex</code></td></tr><tr><td><code>range</code></td><td>自定义标题中的范围</td><td><code>choose: [startData, endDate]</code></td></tr><tr><td><code>multiple</code></td><td>自定义标题中的多选</td><td><code>choose: [&#39;YYYY-MM-DD&#39; | &#39;YYYY-MM&#39;]</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的css变量,可以使用<a href="#/zh-CN/style-provider">StyleProvider组件</a>进行样式定制</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--date-picker-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--date-picker-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--date-picker-min-width</code></td><td><code>290px</code></td></tr><tr><td><code>--date-picker-height</code></td><td><code>385px</code></td></tr><tr><td><code>--date-picker-title-padding</code></td><td><code>16px</code></td></tr><tr><td><code>--date-picker-title-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--date-picker-title-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--date-picker-title-year-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--date-picker-title-year-font-weight</code></td><td><code>500</code></td></tr><tr><td><code>--date-picker-title-year-margin-bottom</code></td><td><code>8px</code></td></tr><tr><td><code>--date-picker-title-date-height</code></td><td><code>48px</code></td></tr><tr><td><code>--date-picker-title-date-font-size</code></td><td><code>34px</code></td></tr><tr><td><code>--date-picker-title-date-font-weight</code></td><td><code>500</code></td></tr><tr><td><code>--date-picker-title-date-range-font-size</code></td><td><code>20px</code></td></tr><tr><td><code>--picker-header-padding</code></td><td><code>4px 16px</code></td></tr><tr><td><code>--picker-header-padding</code></td><td><code>4px 16px</code></td></tr><tr><td><code>--month-picker-padding</code></td><td><code>0 12px</code></td></tr><tr><td><code>--month-picker-item-width</code></td><td><code>33%</code></td></tr><tr><td><code>--month-picker-item-height</code></td><td><code>56px</code></td></tr><tr><td><code>--month-picker-item-button-max-width</code></td><td><code>140px</code></td></tr><tr><td><code>--year-picker-font-weight</code></td><td><code>400</code></td></tr><tr><td><code>--year-picker-item-padding</code></td><td><code>8px 0</code></td></tr><tr><td><code>--year-picker-item-active-font-size</code></td><td><code>26px</code></td></tr><tr><td><code>--year-picker-item-active-font-weight</code></td><td><code>500</code></td></tr><tr><td><code>--year-picker-item-active-font-padding</code></td><td><code>10px 0</code></td></tr><tr><td><code>--year-picker-item-active-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--day-picker-content-item-width</code></td><td><code>14.28%</code></td></tr><tr><td><code>--day-picker-content-item-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--day-picker-content-item-padding</code></td><td><code>2px 0</code></td></tr><tr><td><code>--day-picker-content-item-button-width</code></td><td><code>32px</code></td></tr><tr><td><code>--day-picker-content-item-button-height</code></td><td><code>32px</code></td></tr><tr><td><code>--day-picker-content-item-button-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--day-picker-head-item-color</code></td><td><code>rgba(0, 0, 0, 0.38)</code></td></tr><tr><td><code>--day-picker-head-item-padding</code></td><td><code>8px 0</code></td></tr><tr><td><code>--day-picker-head-item-font-weight</code></td><td><code>600</code></td></tr></tbody></table></div>',14);const n={render:function(s,t){return(0,d.wg)(),(0,d.j4)("div",a,[c])}}}}]);