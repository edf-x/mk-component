webpackJsonp([10],{1710:function(s,a,t){"use strict";function n(s){return s&&s.__esModule?s:{default:s}}Object.defineProperty(a,"__esModule",{value:!0});var e=t(72),l=n(e),p=t(6),r=n(p),o=t(10),c=n(o),d=t(7),u=n(d),h=t(8),i=n(h),j=t(1),f=n(j),g=t(1740),y=n(g),m=t(1739),x=n(m),C=t(1825),k=n(C),E=t(1826),b=n(E),_=t(1827),L=n(_),w=t(1828),v=n(w),F=t(1829),I=n(F),A=function(s){function a(){return(0,r.default)(this,a),(0,u.default)(this,(a.__proto__||(0,l.default)(a)).apply(this,arguments))}return(0,i.default)(a,s),(0,c.default)(a,[{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement(y.default,{title:"示例一",content:f.default.createElement(b.default,null),doc:k.default}),f.default.createElement(y.default,{title:"示例二",content:f.default.createElement(v.default,null),doc:L.default}),(0,x.default)({content:I.default}))}}]),a}(j.Component);a.default=A,s.exports=a.default},1739:function(s,a,t){"use strict";function n(s){return l.default.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:s.content}})}Object.defineProperty(a,"__esModule",{value:!0}),a.default=n;var e=t(1),l=function(s){return s&&s.__esModule?s:{default:s}}(e);s.exports=a.default},1740:function(s,a,t){"use strict";function n(s){return s&&s.__esModule?s:{default:s}}Object.defineProperty(a,"__esModule",{value:!0});var e=t(72),l=n(e),p=t(6),r=n(p),o=t(10),c=n(o),d=t(7),u=n(d),h=t(8),i=n(h),j=t(1),f=n(j),g=t(662),y=t(1739),m=n(y),x=g.Collapse.Panel,C=function(s){function a(){return(0,r.default)(this,a),(0,u.default)(this,(a.__proto__||(0,l.default)(a)).apply(this,arguments))}return(0,i.default)(a,s),(0,c.default)(a,[{key:"render",value:function(){return f.default.createElement(g.Card,{title:this.props.title,style:{overflow:"visible"},className:"example-template"},f.default.createElement(g.Collapse,{bordered:!1,defaultActiveKey:["1"],style:{overflow:"visible"}},f.default.createElement(x,{header:f.default.createElement("a",null,"效果"),key:"1",style:{overflow:"visible"}},f.default.createElement("div",{className:"example-content"},f.default.cloneElement(this.props.content,this.props))),f.default.createElement(x,{header:f.default.createElement("a",null,"代码"),key:"2"},(0,m.default)({content:this.props.doc}))))}}]),a}(j.Component);a.default=C,s.exports=a.default},1825:function(s,a){s.exports='<pre class="hljs"><span class="hljs-keyword">import</span> React, { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;react&apos;</span>\n<span class="hljs-keyword">import</span> { Layout } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;mk-component&apos;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Example1</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Component</span> </span>{\n    render() {\n        <span class="hljs-keyword">return</span> (\n            <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">height</span>=<span class="hljs-string">{200}</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">height</span>=<span class="hljs-string">{50}</span> <span class="hljs-attr">justifyContent</span>=<span class="hljs-string">&apos;center&apos;</span> <span class="hljs-attr">alignItems</span>=<span class="hljs-string">&apos;center&apos;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">backgroundColor:</span> &apos;#<span class="hljs-attr">eee</span>&apos; }}&gt;</span>header<span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">justifyContent</span>=<span class="hljs-string">&apos;center&apos;</span> <span class="hljs-attr">alignItems</span>=<span class="hljs-string">&apos;center&apos;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">backgroundColor:</span> &apos;<span class="hljs-attr">aliceblue</span>&apos; }}&gt;</span>content<span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">height</span>=<span class="hljs-string">{50}</span> <span class="hljs-attr">justifyContent</span>=<span class="hljs-string">&apos;center&apos;</span> <span class="hljs-attr">alignItems</span>=<span class="hljs-string">&apos;center&apos;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">backgroundColor:</span> &apos;#<span class="hljs-attr">eee</span>&apos; }}&gt;</span>footer<span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span></span>\n        )\n    }\n}\n</pre>\n'},1826:function(s,a,t){"use strict";function n(s){return s&&s.__esModule?s:{default:s}}Object.defineProperty(a,"__esModule",{value:!0});var e=t(72),l=n(e),p=t(6),r=n(p),o=t(10),c=n(o),d=t(7),u=n(d),h=t(8),i=n(h),j=t(1),f=n(j),g=t(662),y=function(s){function a(){return(0,r.default)(this,a),(0,u.default)(this,(a.__proto__||(0,l.default)(a)).apply(this,arguments))}return(0,i.default)(a,s),(0,c.default)(a,[{key:"render",value:function(){return f.default.createElement(g.Layout,{height:200},f.default.createElement(g.Layout,{height:50,justifyContent:"center",alignItems:"center",style:{backgroundColor:"#eee"}},"header"),f.default.createElement(g.Layout,{justifyContent:"center",alignItems:"center",style:{backgroundColor:"aliceblue"}},"content"),f.default.createElement(g.Layout,{height:50,justifyContent:"center",alignItems:"center",style:{backgroundColor:"#eee"}},"footer"))}}]),a}(j.Component);a.default=y,s.exports=a.default},1827:function(s,a){s.exports='<pre class="hljs"><span class="hljs-keyword">import</span> React, { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;react&apos;</span>\n<span class="hljs-keyword">import</span> { Layout } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;mk-component&apos;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Example2</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Component</span> </span>{\n    render() {\n        <span class="hljs-keyword">return</span> (\n            <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">height</span>=<span class="hljs-string">{200}</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">height</span>=<span class="hljs-string">{50}</span> <span class="hljs-attr">justifyContent</span>=<span class="hljs-string">&apos;center&apos;</span> <span class="hljs-attr">alignItems</span>=<span class="hljs-string">&apos;center&apos;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">backgroundColor:</span> &apos;#<span class="hljs-attr">eee</span>&apos; }}&gt;</span>header<span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&apos;row&apos;</span> <span class="hljs-attr">justifyContent</span>=<span class="hljs-string">&apos;center&apos;</span> <span class="hljs-attr">alignItems</span>=<span class="hljs-string">&apos;stretch&apos;</span>&gt;</span>\n                    <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">width</span>=<span class="hljs-string">{100}</span> <span class="hljs-attr">justifyContent</span>=<span class="hljs-string">&apos;center&apos;</span> <span class="hljs-attr">alignItems</span>=<span class="hljs-string">&apos;center&apos;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">backgroundColor:</span> &apos;<span class="hljs-attr">antiquewhite</span>&apos; }}&gt;</span>left<span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n                    <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">justifyContent</span>=<span class="hljs-string">&apos;center&apos;</span> <span class="hljs-attr">alignItems</span>=<span class="hljs-string">&apos;center&apos;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">backgroundColor:</span> &apos;<span class="hljs-attr">aliceblue</span>&apos; }}&gt;</span>content<span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n                <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">Layout</span> <span class="hljs-attr">height</span>=<span class="hljs-string">{50}</span> <span class="hljs-attr">justifyContent</span>=<span class="hljs-string">&apos;center&apos;</span> <span class="hljs-attr">alignItems</span>=<span class="hljs-string">&apos;center&apos;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">backgroundColor:</span> &apos;#<span class="hljs-attr">eee</span>&apos; }}&gt;</span>footer<span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">Layout</span>&gt;</span></span>\n        )\n    }\n}\n</pre>\n'},1828:function(s,a,t){"use strict";function n(s){return s&&s.__esModule?s:{default:s}}Object.defineProperty(a,"__esModule",{value:!0});var e=t(72),l=n(e),p=t(6),r=n(p),o=t(10),c=n(o),d=t(7),u=n(d),h=t(8),i=n(h),j=t(1),f=n(j),g=t(662),y=function(s){function a(){return(0,r.default)(this,a),(0,u.default)(this,(a.__proto__||(0,l.default)(a)).apply(this,arguments))}return(0,i.default)(a,s),(0,c.default)(a,[{key:"render",value:function(){return f.default.createElement(g.Layout,{height:200},f.default.createElement(g.Layout,{height:50,justifyContent:"center",alignItems:"center",style:{backgroundColor:"#eee"}},"header"),f.default.createElement(g.Layout,{direction:"row",justifyContent:"center",alignItems:"stretch"},f.default.createElement(g.Layout,{width:100,justifyContent:"center",alignItems:"center",style:{backgroundColor:"antiquewhite"}},"left"),f.default.createElement(g.Layout,{justifyContent:"center",alignItems:"center",style:{backgroundColor:"aliceblue"}},"content")),f.default.createElement(g.Layout,{height:50,justifyContent:"center",alignItems:"center",style:{backgroundColor:"#eee"}},"footer"))}}]),a}(j.Component);a.default=y,s.exports=a.default},1829:function(s,a){s.exports='<h1 id="layout">Layout</h1>\n<p>&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684;&#x5E03;&#x5C40;&#x7EC4;&#x4EF6;&#xFF0C;&#x91C7;&#x7528;flex&#x5E03;&#x5C40;</p>\n<h2 id="api">API</h2>\n<h3 id="menu-props">Menu props</h3>\n<table>\n<thead>\n<tr>\n<th>&#x53C2;&#x6570;</th>\n<th>&#x8BF4;&#x660E;</th>\n<th>&#x7C7B;&#x578B;</th>\n<th>&#x9ED8;&#x8BA4;&#x503C;</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>width</td>\n<td>&#x5BBD;&#x5EA6;</td>\n<td>number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>height</td>\n<td>&#x9AD8;&#x5EA6;</td>\n<td>number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>direction</td>\n<td>&#x65B9;&#x5411;</td>\n<td>string&#xFF1A;<code>row</code> <code>column</code></td>\n<td><code>column</code></td>\n</tr>\n<tr>\n<td>justifyContent</td>\n<td>&#x4E3B;&#x8F74;&#x4E0A;&#x7684;&#x5BF9;&#x9F50;&#x65B9;&#x5F0F;</td>\n<td>string&#xFF1A; <code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code></td>\n<td><code>flex-start</code></td>\n</tr>\n<tr>\n<td>alignItems</td>\n<td>&#x4EA4;&#x53C9;&#x8F74;&#x4E0A;&#x7684;&#x5BF9;&#x9F50;&#x65B9;&#x5F0F;</td>\n<td>string&#xFF1A; <code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code></td>\n<td><code>flex-start</code></td>\n</tr>\n<tr>\n<td>style</td>\n<td>&#x6837;&#x5F0F;</td>\n<td>object</td>\n<td>-</td>\n</tr>\n<tr>\n<td>className</td>\n<td>&#x6837;&#x5F0F;&#x540D;</td>\n<td>string</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n'}});