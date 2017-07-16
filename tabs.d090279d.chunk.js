webpackJsonp([22],{1731:function(t,n,a){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var s=a(72),x=e(s),d=a(6),l=e(d),o=a(10),r=e(o),p=a(7),c=e(p),u=a(8),i=e(u),h=a(1),f=e(h),F=a(1740),b=e(F),E=a(1739),C=e(E),B=a(1905),j=e(B),y=a(1906),m=e(y),g=a(1907),T=e(g),k=function(t){function n(){return(0,l.default)(this,n),(0,c.default)(this,(n.__proto__||(0,x.default)(n)).apply(this,arguments))}return(0,i.default)(n,t),(0,r.default)(n,[{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement(b.default,{title:"示例一",content:f.default.createElement(m.default,null),doc:j.default}),(0,C.default)({content:T.default}))}}]),n}(h.Component);n.default=k,t.exports=n.default},1739:function(t,n,a){"use strict";function e(t){return x.default.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:t.content}})}Object.defineProperty(n,"__esModule",{value:!0}),n.default=e;var s=a(1),x=function(t){return t&&t.__esModule?t:{default:t}}(s);t.exports=n.default},1740:function(t,n,a){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var s=a(72),x=e(s),d=a(6),l=e(d),o=a(10),r=e(o),p=a(7),c=e(p),u=a(8),i=e(u),h=a(1),f=e(h),F=a(662),b=a(1739),E=e(b),C=F.Collapse.Panel,B=function(t){function n(){return(0,l.default)(this,n),(0,c.default)(this,(n.__proto__||(0,x.default)(n)).apply(this,arguments))}return(0,i.default)(n,t),(0,r.default)(n,[{key:"render",value:function(){return f.default.createElement(F.Card,{title:this.props.title,style:{overflow:"visible"},className:"example-template"},f.default.createElement(F.Collapse,{bordered:!1,defaultActiveKey:["1"],style:{overflow:"visible"}},f.default.createElement(C,{header:f.default.createElement("a",null,"效果"),key:"1",style:{overflow:"visible"}},f.default.createElement("div",{className:"example-content"},f.default.cloneElement(this.props.content,this.props))),f.default.createElement(C,{header:f.default.createElement("a",null,"代码"),key:"2"},(0,E.default)({content:this.props.doc}))))}}]),n}(h.Component);n.default=B,t.exports=n.default},1905:function(t,n){t.exports='<pre class="hljs"><span class="hljs-keyword">import</span> React, { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;react&apos;</span>\n<span class="hljs-keyword">import</span> { Tabs } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;mk-component&apos;</span>\n<span class="hljs-keyword">const</span> TabPane = Tabs.TabPane\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Example1</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Component</span> </span>{\n\n    handleChange = <span class="hljs-function">(<span class="hljs-params">key</span>) =&gt;</span> {\n        <span class="hljs-built_in">console</span>.log(key)\n    }\n\n    render() {\n        <span class="hljs-keyword">return</span> (\n            <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Tabs</span> <span class="hljs-attr">defaultActiveKey</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{this.handleChange}</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">TabPane</span> <span class="hljs-attr">tab</span>=<span class="hljs-string">&quot;Tab 1&quot;</span> <span class="hljs-attr">key</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>Content of Tab Pane 1<span class="hljs-tag">&lt;/<span class="hljs-name">TabPane</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">TabPane</span> <span class="hljs-attr">tab</span>=<span class="hljs-string">&quot;Tab 2&quot;</span> <span class="hljs-attr">key</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>Content of Tab Pane 2<span class="hljs-tag">&lt;/<span class="hljs-name">TabPane</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">TabPane</span> <span class="hljs-attr">tab</span>=<span class="hljs-string">&quot;Tab 3&quot;</span> <span class="hljs-attr">key</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>Content of Tab Pane 3<span class="hljs-tag">&lt;/<span class="hljs-name">TabPane</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">Tabs</span>&gt;</span></span>\n        )\n    }\n}\n</pre>\n'},1906:function(t,n,a){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var s=a(72),x=e(s),d=a(6),l=e(d),o=a(10),r=e(o),p=a(7),c=e(p),u=a(8),i=e(u),h=a(1),f=e(h),F=a(662),b=F.Tabs.TabPane,E=function(t){function n(){var t,a,e,s;(0,l.default)(this,n);for(var d=arguments.length,o=Array(d),r=0;r<d;r++)o[r]=arguments[r];return a=e=(0,c.default)(this,(t=n.__proto__||(0,x.default)(n)).call.apply(t,[this].concat(o))),e.handleChange=function(t){console.log(t)},s=a,(0,c.default)(e,s)}return(0,i.default)(n,t),(0,r.default)(n,[{key:"render",value:function(){return f.default.createElement(F.Tabs,{defaultActiveKey:"1",onChange:this.handleChange},f.default.createElement(b,{tab:"Tab 1",key:"1"},"Content of Tab Pane 1"),f.default.createElement(b,{tab:"Tab 2",key:"2"},"Content of Tab Pane 2"),f.default.createElement(b,{tab:"Tab 3",key:"3"},"Content of Tab Pane 3"))}}]),n}(h.Component);n.default=E,t.exports=n.default},1907:function(t,n){t.exports='<h1 id="tabs-">Tabs &#x6807;&#x7B7E;&#x9875;</h1>\n<h2 id="antd-tabs-api">antd Tabs API</h2>\n<p><a href="https://ant.design/components/tabs-cn/">&#x8BE6;&#x60C5;&#x8BF7;&#x70B9;&#x51FB;&#x67E5;&#x770B;&#x5B98;&#x65B9;</a></p>\n<p>Ant Design &#x4F9D;&#x6B21;&#x63D0;&#x4F9B;&#x4E86;&#x4E09;&#x7EA7;&#x9009;&#x9879;&#x5361;&#xFF0C;&#x5206;&#x522B;&#x7528;&#x4E8E;&#x4E0D;&#x540C;&#x7684;&#x573A;&#x666F;&#x3002;</p>\n<ul>\n<li>&#x5361;&#x7247;&#x5F0F;&#x7684;&#x9875;&#x7B7E;&#xFF0C;&#x63D0;&#x4F9B;&#x53EF;&#x5173;&#x95ED;&#x7684;&#x6837;&#x5F0F;&#xFF0C;&#x5E38;&#x7528;&#x4E8E;&#x5BB9;&#x5668;&#x9876;&#x90E8;&#x3002;</li>\n<li>&#x6807;&#x51C6;&#x7EBF;&#x6761;&#x5F0F;&#x9875;&#x7B7E;&#xFF0C;&#x7528;&#x4E8E;&#x5BB9;&#x5668;&#x5185;&#x90E8;&#x7684;&#x4E3B;&#x529F;&#x80FD;&#x5207;&#x6362;&#xFF0C;&#x8FD9;&#x662F;&#x6700;&#x5E38;&#x7528;&#x7684; Tabs&#x3002;</li>\n<li><a href="/components/radio/#components-radio-demo-radiobutton">RadioButton</a> &#x53EF;&#x4F5C;&#x4E3A;&#x66F4;&#x6B21;&#x7EA7;&#x7684;&#x9875;&#x7B7E;&#x6765;&#x4F7F;&#x7528;&#x3002;</li>\n</ul>\n<h3 id="tabs">Tabs</h3>\n<table>\n<thead>\n<tr>\n<th>&#x53C2;&#x6570;</th>\n<th>&#x8BF4;&#x660E;</th>\n<th>&#x7C7B;&#x578B;</th>\n<th>&#x9ED8;&#x8BA4;&#x503C;</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>activeKey</td>\n<td>&#x5F53;&#x524D;&#x6FC0;&#x6D3B; tab &#x9762;&#x677F;&#x7684; key</td>\n<td>string</td>\n<td>&#x65E0;</td>\n</tr>\n<tr>\n<td>defaultActiveKey</td>\n<td>&#x521D;&#x59CB;&#x5316;&#x9009;&#x4E2D;&#x9762;&#x677F;&#x7684; key&#xFF0C;&#x5982;&#x679C;&#x6CA1;&#x6709;&#x8BBE;&#x7F6E; activeKey</td>\n<td>string</td>\n<td>&#x7B2C;&#x4E00;&#x4E2A;&#x9762;&#x677F;</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>&#x5207;&#x6362;&#x9762;&#x677F;&#x7684;&#x56DE;&#x8C03;</td>\n<td>Function</td>\n<td>&#x65E0;</td>\n</tr>\n<tr>\n<td>onTabClick</td>\n<td>tab &#x88AB;&#x70B9;&#x51FB;&#x7684;&#x56DE;&#x8C03;</td>\n<td>Function</td>\n<td>&#x65E0;</td>\n</tr>\n<tr>\n<td>onPrevClick</td>\n<td>prev &#x6309;&#x94AE;&#x88AB;&#x70B9;&#x51FB;&#x7684;&#x56DE;&#x8C03;</td>\n<td>Function</td>\n<td>&#x65E0;</td>\n</tr>\n<tr>\n<td>onNextClick</td>\n<td>next &#x6309;&#x94AE;&#x88AB;&#x70B9;&#x51FB;&#x7684;&#x56DE;&#x8C03;</td>\n<td>Function</td>\n<td>&#x65E0;</td>\n</tr>\n<tr>\n<td>tabBarExtraContent</td>\n<td>tab bar &#x4E0A;&#x989D;&#x5916;&#x7684;&#x5143;&#x7D20;</td>\n<td>React.ReactNode</td>\n<td>&#x65E0;</td>\n</tr>\n<tr>\n<td>tabBarStyle</td>\n<td>tar bar &#x7684;&#x6837;&#x5F0F;&#x5BF9;&#x8C61;</td>\n<td>object</td>\n<td>-</td>\n</tr>\n<tr>\n<td>type</td>\n<td>&#x9875;&#x7B7E;&#x7684;&#x57FA;&#x672C;&#x6837;&#x5F0F;&#xFF0C;&#x53EF;&#x9009; <code>line</code>&#x3001;<code>card</code> <code>editable-card</code> &#x7C7B;&#x578B;</td>\n<td>string</td>\n<td>&apos;line&apos;</td>\n</tr>\n<tr>\n<td>size</td>\n<td>&#x5927;&#x5C0F;&#xFF0C;&#x63D0;&#x4F9B; <code>default</code> &#x548C; <code>small</code> &#x4E24;&#x79CD;&#x5927;&#x5C0F;&#xFF0C;&#x4EC5;&#x5F53; <code>type=&quot;line&quot;</code> &#x65F6;&#x751F;&#x6548;&#x3002;</td>\n<td>string</td>\n<td>&apos;default&apos;</td>\n</tr>\n<tr>\n<td>tabPosition</td>\n<td>&#x9875;&#x7B7E;&#x4F4D;&#x7F6E;&#xFF0C;&#x53EF;&#x9009;&#x503C;&#x6709; <code>top</code> <code>right</code> <code>bottom</code> <code>left</code></td>\n<td>string</td>\n<td>&apos;top&apos;</td>\n</tr>\n<tr>\n<td>onEdit</td>\n<td>&#x65B0;&#x589E;&#x548C;&#x5220;&#x9664;&#x9875;&#x7B7E;&#x7684;&#x56DE;&#x8C03;&#xFF0C;&#x5728; <code>type=&quot;editable-card&quot;</code> &#x65F6;&#x6709;&#x6548;</td>\n<td>(targetKey, action): void</td>\n<td>&#x65E0;</td>\n</tr>\n<tr>\n<td>hideAdd</td>\n<td>&#x662F;&#x5426;&#x9690;&#x85CF;&#x52A0;&#x53F7;&#x56FE;&#x6807;&#xFF0C;&#x5728; <code>type=&quot;editable-card&quot;</code> &#x65F6;&#x6709;&#x6548;</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>animated</td>\n<td>&#x662F;&#x5426;&#x4F7F;&#x7528;&#x52A8;&#x753B;&#x5207;&#x6362; Tabs&#xFF0C;&#x5728; <code>tabPosition=top or bottom</code> &#x65F6;&#x6709;&#x6548;</td>\n<td>boolean or {inkBar:boolean, tabPane:boolean}</td>\n<td>true</td>\n</tr>\n</tbody>\n</table>\n<h3 id="tabs-tabpane">Tabs.TabPane</h3>\n<table>\n<thead>\n<tr>\n<th>&#x53C2;&#x6570;</th>\n<th>&#x8BF4;&#x660E;</th>\n<th>&#x7C7B;&#x578B;</th>\n<th>&#x9ED8;&#x8BA4;&#x503C;</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>key</td>\n<td>&#x5BF9;&#x5E94; activeKey</td>\n<td>string</td>\n<td>&#x65E0;</td>\n</tr>\n<tr>\n<td>tab</td>\n<td>&#x9009;&#x9879;&#x5361;&#x5934;&#x663E;&#x793A;&#x6587;&#x5B57;</td>\n<td>string or ReactNode</td>\n<td>&#x65E0;</td>\n</tr>\n</tbody>\n</table>\n'}});