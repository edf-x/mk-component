webpackJsonp([3],{1703:function(t,e,n){"use strict";function l(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(72),s=l(a),d=n(6),o=l(d),r=n(10),c=l(r),x=n(7),u=l(x),p=n(8),h=l(p),i=n(1),f=l(i),m=n(1740),C=l(m),E=n(1739),g=l(E),w=n(1788),y=l(w),F=n(1789),j=l(F),b=n(1790),k=l(b),D=n(1791),A=l(D),B=n(1792),v=l(B),S=n(1793),G=l(S),I=n(1794),_=l(I),K=function(t){function e(){return(0,o.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).apply(this,arguments))}return(0,h.default)(e,t),(0,c.default)(e,[{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement(C.default,{title:"示例一",content:f.default.createElement(j.default,null),doc:y.default}),f.default.createElement(C.default,{title:"示例二",content:f.default.createElement(A.default,null),doc:k.default}),f.default.createElement(C.default,{title:"示例三",content:f.default.createElement(G.default,null),doc:v.default}),(0,g.default)({content:_.default}))}}]),e}(i.Component);e.default=K,t.exports=e.default},1739:function(t,e,n){"use strict";function l(t){return s.default.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:t.content}})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var a=n(1),s=function(t){return t&&t.__esModule?t:{default:t}}(a);t.exports=e.default},1740:function(t,e,n){"use strict";function l(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(72),s=l(a),d=n(6),o=l(d),r=n(10),c=l(r),x=n(7),u=l(x),p=n(8),h=l(p),i=n(1),f=l(i),m=n(662),C=n(1739),E=l(C),g=m.Collapse.Panel,w=function(t){function e(){return(0,o.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).apply(this,arguments))}return(0,h.default)(e,t),(0,c.default)(e,[{key:"render",value:function(){return f.default.createElement(m.Card,{title:this.props.title,style:{overflow:"visible"},className:"example-template"},f.default.createElement(m.Collapse,{bordered:!1,defaultActiveKey:["1"],style:{overflow:"visible"}},f.default.createElement(g,{header:f.default.createElement("a",null,"效果"),key:"1",style:{overflow:"visible"}},f.default.createElement("div",{className:"example-content"},f.default.cloneElement(this.props.content,this.props))),f.default.createElement(g,{header:f.default.createElement("a",null,"代码"),key:"2"},(0,E.default)({content:this.props.doc}))))}}]),e}(i.Component);e.default=w,t.exports=e.default},1788:function(t,e){t.exports='<pre class="hljs"><span class="hljs-keyword">import</span> React, { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;react&apos;</span>\n<span class="hljs-keyword">import</span> { DataGrid, Checkbox, Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;mk-component&apos;</span>\n\n<span class="hljs-keyword">const</span> Column = DataGrid.Column\n<span class="hljs-keyword">const</span> Cell = DataGrid.Cell\n\n<span class="hljs-keyword">const</span> dataSource = []\n\n<span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">100</span>; i++) {\n    dataSource.push({\n        <span class="hljs-attr">code</span>: <span class="hljs-string">`code<span class="hljs-subst">${i}</span>`</span>,\n        <span class="hljs-attr">name</span>: <span class="hljs-string">`name<span class="hljs-subst">${i}</span>`</span>\n    })\n}\n\n<span class="hljs-keyword">const</span> columns = [\n    &lt;Column\n        columnKey=&apos;select&apos;\n        fixed\n        header={&lt;Cell&gt;&lt;Checkbox /&gt;&lt;/Cell&gt;}\n        cell={(ps) =&gt; &lt;Cell&gt;&lt;Checkbox /&gt;&lt;/Cell&gt;}\n        width={40}\n    /&gt;,\n    &lt;Column\n        columnKey=&apos;option&apos;\n        fixed\n        header={&lt;Cell&gt;&#x64CD;&#x4F5C;&lt;/Cell&gt;}\n        cell={(ps) =&gt; &lt;Cell &gt;&lt;Icon type=&apos;github&apos; showStyle=&apos;showy&apos; style={{ marginRight: 8 }} /&gt;&lt;Icon type=&apos;github&apos; showStyle=&apos;softly&apos; /&gt;&lt;/Cell&gt;}\n        width={70}\n    /&gt;,\n    &lt;Column\n        columnKey=&apos;code&apos;\n        header={&lt;Cell&gt;&#x7F16;&#x7801;&lt;/Cell&gt;}\n        cell={(ps) =&gt; &lt;Cell&gt;{dataSource[ps.rowIndex].code}&lt;/Cell&gt;}\n        footer={&lt;Cell&gt;footer&lt;/Cell&gt;}\n        width={200}\n    /&gt;,\n    &lt;Column\n        columnKey=&apos;name&apos;\n        header={&lt;Cell&gt;&#x540D;&#x79F0;&lt;/Cell&gt;}\n        cell={(ps) =&gt; &lt;Cell&gt;{dataSource[ps.rowIndex].name}&lt;/Cell&gt;}\n        footer={&lt;Cell&gt;footer&lt;/Cell&gt;}\n        flexGrow={1}\n        width={200}\n    /&gt;,\n    &lt;Column\n        columnKey=&apos;ext1&apos;\n        header={&lt;Cell&gt;Ext1&lt;/Cell&gt;}\n        cell={(ps) =&gt; &lt;Cell&gt;ext1&lt;/Cell&gt;}\n        flexGrow={1}\n        width={400}\n    /&gt;,\n    &lt;Column\n        columnKey=&apos;ext2&apos;\n        header={&lt;Cell&gt;Ext2&lt;/Cell&gt;}\n        cell={(ps) =&gt; &lt;Cell&gt;ext2&lt;/Cell&gt;}\n        flexGrow={1}\n        width={400}\n    /&gt;,\n    &lt;Column\n        columnKey=&apos;ext3&apos;\n        header={&lt;Cell&gt;Ext3&lt;/Cell&gt;}\n        cell={(ps) =&gt; &lt;Cell&gt;ext3&lt;/Cell&gt;}\n        flexGrow={1}\n        width={400}\n    /&gt;\n]\n\nexport default class Example1 extends Component {\n    render() {\n        return (\n            &lt;div style={{ height: 300, display: &apos;flex&apos; }}&gt;\n                &lt;DataGrid\n                    headerHeight={35}\n                    rowsCount={100}\n                    rowHeight={35}\n                    footerHeight={35}\n                    columns={columns}\n                /&gt;\n            &lt;/div&gt;\n        )\n    }\n}\n</pre>\n'},1789:function(t,e,n){"use strict";function l(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});for(var a=n(72),s=l(a),d=n(6),o=l(d),r=n(10),c=l(r),x=n(7),u=l(x),p=n(8),h=l(p),i=n(1),f=l(i),m=n(662),C=m.DataGrid.Column,E=m.DataGrid.Cell,g=[],w=0;w<100;w++)g.push({code:"code"+w,name:"name"+w});var y=[f.default.createElement(C,{columnKey:"select",fixed:!0,header:f.default.createElement(E,null,f.default.createElement(m.Checkbox,null)),cell:function(t){return f.default.createElement(E,null,f.default.createElement(m.Checkbox,null))},width:40}),f.default.createElement(C,{columnKey:"option",fixed:!0,header:f.default.createElement(E,null,"操作"),cell:function(t){return f.default.createElement(E,null,f.default.createElement(m.Icon,{type:"github",showStyle:"showy",style:{marginRight:8}}),f.default.createElement(m.Icon,{type:"github",showStyle:"softly"}))},width:70}),f.default.createElement(C,{columnKey:"code",header:f.default.createElement(E,null,"编码"),cell:function(t){return f.default.createElement(E,null,g[t.rowIndex].code)},footer:f.default.createElement(E,null,"footer"),width:200}),f.default.createElement(C,{columnKey:"name",header:f.default.createElement(E,null,"名称"),cell:function(t){return f.default.createElement(E,null,g[t.rowIndex].name)},footer:f.default.createElement(E,null,"footer"),flexGrow:1,width:200}),f.default.createElement(C,{columnKey:"ext1",header:f.default.createElement(E,null,"Ext1"),cell:function(t){return f.default.createElement(E,null,"ext1")},flexGrow:1,width:400}),f.default.createElement(C,{columnKey:"ext2",header:f.default.createElement(E,null,"Ext2"),cell:function(t){return f.default.createElement(E,null,"ext2")},flexGrow:1,width:400}),f.default.createElement(C,{columnKey:"ext3",header:f.default.createElement(E,null,"Ext3"),cell:function(t){return f.default.createElement(E,null,"ext3")},flexGrow:1,width:400})],F=function(t){function e(){return(0,o.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).apply(this,arguments))}return(0,h.default)(e,t),(0,c.default)(e,[{key:"render",value:function(){return f.default.createElement("div",{style:{height:300,display:"flex"}},f.default.createElement(m.DataGrid,{headerHeight:35,rowsCount:100,rowHeight:35,footerHeight:35,columns:y}))}}]),e}(i.Component);e.default=F,t.exports=e.default},1790:function(t,e){t.exports='<pre class="hljs"><span class="hljs-keyword">import</span> React, { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;react&apos;</span>\n<span class="hljs-keyword">import</span> { DataGrid, Checkbox } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;mk-component&apos;</span>\n\n<span class="hljs-keyword">const</span> Column = DataGrid.Column\n<span class="hljs-keyword">const</span> Cell = DataGrid.Cell\n<span class="hljs-keyword">const</span> TextCell = DataGrid.TextCell\n\n<span class="hljs-keyword">const</span> dataSource = []\n\n<span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">100</span>; i++) {\n    dataSource.push({\n        <span class="hljs-attr">code</span>: <span class="hljs-string">`code<span class="hljs-subst">${i}</span>`</span>,\n        <span class="hljs-attr">name</span>: <span class="hljs-string">`name<span class="hljs-subst">${i}</span>`</span>,\n        <span class="hljs-attr">memo</span>: <span class="hljs-string">&apos;&#x8FD9;&#x662F;&#x4E00;&#x4E2A;&#x4F7F;&#x7528;textCell&#x7684;&#x793A;&#x4F8B;&#xFF0C;&#x9F20;&#x6807;&#x79FB;&#x5165;&#x5230;&#x5F53;&#x524D;&#x4F1A;&#x6709;&#x63D0;&#x793A;&apos;</span>,\n    })\n}\n\n<span class="hljs-keyword">const</span> columns = [\n    &lt;Column\n        columnKey=&apos;select&apos;\n        fixed\n        header={&lt;Cell&gt;&lt;Checkbox /&gt;&lt;/Cell&gt;}\n        cell={(ps) =&gt; &lt;Cell&gt;&lt;Checkbox /&gt;&lt;/Cell&gt;}\n        width={40}\n    /&gt;,\n    &lt;Column\n        columnKey=&apos;code&apos;\n        header={&lt;Cell&gt;&#x7F16;&#x7801;&lt;/Cell&gt;}\n        cell={(ps) =&gt; &lt;TextCell value={dataSource[ps.rowIndex].code} /&gt;}\n        footer={&lt;Cell&gt;footer&lt;/Cell&gt;}\n        width={200}\n    /&gt;,\n    &lt;Column\n        columnKey=&apos;name&apos;\n        header={&lt;Cell&gt;&#x540D;&#x79F0;&lt;/Cell&gt;}\n        cell={(ps) =&gt; &lt;TextCell align=&apos;left&apos; value={dataSource[ps.rowIndex].name} sand={(v) =&gt; [&lt;span&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;/span&gt;, v]} /&gt;}\n        footer={&lt;Cell&gt;footer&lt;/Cell&gt;}\n        flexGrow={1}\n        width={200}\n    /&gt;,\n    &lt;Column\n        columnKey=&apos;memo&apos;\n        header={&lt;Cell&gt;&#x63CF;&#x8FF0;&lt;/Cell&gt;}\n        cell={(ps) =&gt; &lt;TextCell enableEllipsis value={dataSource[ps.rowIndex].memo} /&gt;}\n        footer={&lt;Cell&gt;footer&lt;/Cell&gt;}\n        flexGrow={1}\n        width={200}\n    /&gt;,\n    &lt;Column\n        columnKey=&apos;price&apos;\n        header={&lt;Cell&gt;&#x5355;&#x4EF7;&lt;/Cell&gt;}\n        cell={(ps) =&gt; &lt;TextCell dataType=&apos;float&apos; align=&apos;right&apos; style={{ paddingRight: 8 }} precision={2} enableTooltip value={43243432.116666666} sand={(v) =&gt; (&quot;&quot; + v).replace(/(\\d{1,3})(?=(\\d{3})+(?:$|\\.))/g, &quot;$1,&quot;)} /&gt;}\n        flexGrow={1}\n        width={200}\n    /&gt;,\n    &lt;Column\n        columnKey=&apos;bool&apos;\n        header={&lt;Cell&gt;&#x5E03;&#x5C14;&lt;/Cell&gt;}\n        cell={(ps) =&gt; &lt;TextCell dataType=&apos;bool&apos; value={true} /&gt;}\n        flexGrow={1}\n        width={200}\n    /&gt;,\n    &lt;Column\n        columnKey=&apos;custom&apos;\n        header={&lt;Cell&gt;&#x81EA;&#x5B9A;&#x4E49;&lt;/Cell&gt;}\n        cell={(ps) =&gt; &lt;div&gt;&#x81EA;&#x5B9A;&#x4E49;cell&#x7EC4;&#x4EF6;&lt;/div&gt;}\n        flexGrow={1}\n        width={200}\n    /&gt;\n]\n\nexport default class Example2 extends Component {\n    render() {\n        return (\n            &lt;div style={{ height: 300, width: &apos;100%&apos;, display: &apos;flex&apos; }}&gt;\n                &lt;DataGrid\n                    headerHeight={35}\n                    rowsCount={100}\n                    rowHeight={35}\n                    footerHeight={35}\n                    columns={columns}\n                /&gt;\n            &lt;/div&gt;\n        )\n    }\n}\n</pre>\n'},1791:function(t,e,n){"use strict";function l(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});for(var a=n(72),s=l(a),d=n(6),o=l(d),r=n(10),c=l(r),x=n(7),u=l(x),p=n(8),h=l(p),i=n(1),f=l(i),m=n(662),C=m.DataGrid.Column,E=m.DataGrid.Cell,g=m.DataGrid.TextCell,w=[],y=0;y<100;y++)w.push({code:"code"+y,name:"name"+y,memo:"这是一个使用textCell的示例，鼠标移入到当前会有提示"});var F=[f.default.createElement(C,{columnKey:"select",fixed:!0,header:f.default.createElement(E,null,f.default.createElement(m.Checkbox,null)),cell:function(t){return f.default.createElement(E,null,f.default.createElement(m.Checkbox,null))},width:40}),f.default.createElement(C,{columnKey:"code",header:f.default.createElement(E,null,"编码"),cell:function(t){return f.default.createElement(g,{value:w[t.rowIndex].code})},footer:f.default.createElement(E,null,"footer"),width:200}),f.default.createElement(C,{columnKey:"name",header:f.default.createElement(E,null,"名称"),cell:function(t){return f.default.createElement(g,{align:"left",value:w[t.rowIndex].name,sand:function(t){return[f.default.createElement("span",null,"    "),t]}})},footer:f.default.createElement(E,null,"footer"),flexGrow:1,width:200}),f.default.createElement(C,{columnKey:"memo",header:f.default.createElement(E,null,"描述"),cell:function(t){return f.default.createElement(g,{enableEllipsis:!0,value:w[t.rowIndex].memo})},footer:f.default.createElement(E,null,"footer"),flexGrow:1,width:200}),f.default.createElement(C,{columnKey:"price",header:f.default.createElement(E,null,"单价"),cell:function(t){return f.default.createElement(g,{dataType:"float",align:"right",style:{paddingRight:8},precision:2,enableTooltip:!0,value:43243432.11666667,sand:function(t){return(""+t).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,"$1,")}})},flexGrow:1,width:200}),f.default.createElement(C,{columnKey:"bool",header:f.default.createElement(E,null,"布尔"),cell:function(t){return f.default.createElement(g,{dataType:"bool",value:!0})},flexGrow:1,width:200}),f.default.createElement(C,{columnKey:"custom",header:f.default.createElement(E,null,"自定义"),cell:function(t){return f.default.createElement("div",null,"自定义cell组件")},flexGrow:1,width:200})],j=function(t){function e(){return(0,o.default)(this,e),(0,u.default)(this,(e.__proto__||(0,s.default)(e)).apply(this,arguments))}return(0,h.default)(e,t),(0,c.default)(e,[{key:"render",value:function(){return f.default.createElement("div",{style:{height:300,width:"100%",display:"flex"}},f.default.createElement(m.DataGrid,{headerHeight:35,rowsCount:100,rowHeight:35,footerHeight:35,columns:F}))}}]),e}(i.Component);e.default=j,t.exports=e.default},1792:function(t,e){t.exports='<pre class="hljs"><span class="hljs-keyword">import</span> React, { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;react&apos;</span>\n<span class="hljs-keyword">import</span> ReactDOM <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;react-dom&apos;</span>\n<span class="hljs-keyword">import</span> { DataGrid, Checkbox, Input } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;mk-component&apos;</span>\n\n<span class="hljs-keyword">const</span> Column = DataGrid.Column\n<span class="hljs-keyword">const</span> Cell = DataGrid.Cell\n<span class="hljs-keyword">const</span> TextCell = DataGrid.TextCell\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Example3</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Component</span> </span>{\n    <span class="hljs-keyword">constructor</span>(props) {\n        <span class="hljs-keyword">super</span>(props)\n\n        <span class="hljs-keyword">this</span>.state = {\n            <span class="hljs-attr">focusCellInfo</span>: <span class="hljs-literal">undefined</span>,\n            <span class="hljs-attr">dataSource</span>: []\n        }\n\n        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">2</span>; i++) {\n            <span class="hljs-keyword">this</span>.state.dataSource.push({\n                <span class="hljs-attr">code</span>: <span class="hljs-string">`code<span class="hljs-subst">${i}</span>`</span>,\n                <span class="hljs-attr">name</span>: <span class="hljs-string">`name<span class="hljs-subst">${i}</span>`</span>,\n            })\n        }\n    }\n\n    isFocusCell(ps, columnKey) {\n        <span class="hljs-keyword">if</span> (!<span class="hljs-keyword">this</span>.state.focusCellInfo)\n            <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>\n        <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.state.focusCellInfo.columnKey == columnKey &amp;&amp; <span class="hljs-keyword">this</span>.state.focusCellInfo.rowIndex == ps.rowIndex\n    }\n\n    handleCellClick = <span class="hljs-function">(<span class="hljs-params">ps, columnKey</span>) =&gt;</span> {\n        <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n            <span class="hljs-keyword">this</span>.setState({ <span class="hljs-attr">focusCellInfo</span>: { <span class="hljs-attr">rowIndex</span>: ps.rowIndex, columnKey } })\n            <span class="hljs-keyword">const</span> that = <span class="hljs-keyword">this</span>\n            setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n                ReactDOM.findDOMNode(columnKey == <span class="hljs-string">&apos;code&apos;</span> ? <span class="hljs-keyword">this</span>.refCode : <span class="hljs-keyword">this</span>.refName).focus()\n            }, <span class="hljs-number">0</span>)\n        }\n    }\n\n    handleCellChange = <span class="hljs-function">(<span class="hljs-params">ps, columnKey</span>) =&gt;</span> {\n        <span class="hljs-keyword">return</span> <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {\n            <span class="hljs-keyword">var</span> dataSource = <span class="hljs-keyword">this</span>.state.dataSource\n            dataSource[ps.rowIndex][columnKey] = e.target.value\n            <span class="hljs-keyword">this</span>.setState({ dataSource })\n        }\n    }\n\n    handleAddrow = <span class="hljs-function">(<span class="hljs-params">ps</span>) =&gt;</span> {\n        <span class="hljs-keyword">const</span> dataSource = <span class="hljs-keyword">this</span>.state.dataSource\n        dataSource.push({\n            <span class="hljs-attr">code</span>: <span class="hljs-string">`code<span class="hljs-subst">${dataSource.length}</span>`</span>,\n            <span class="hljs-attr">name</span>: <span class="hljs-string">`name<span class="hljs-subst">${dataSource.length}</span>`</span>,\n        })\n\n        <span class="hljs-keyword">this</span>.setState({ dataSource })\n    }\n\n    handleDelrow = <span class="hljs-function">(<span class="hljs-params">ps</span>) =&gt;</span> {\n        <span class="hljs-keyword">const</span> dataSource = <span class="hljs-keyword">this</span>.state.dataSource\n        dataSource.splice(ps.rowIndex, <span class="hljs-number">1</span>)\n        <span class="hljs-keyword">this</span>.setState({ dataSource })\n    }\n\n    getColumns = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n        <span class="hljs-keyword">let</span> dataSource = <span class="hljs-keyword">this</span>.state.dataSource\n        <span class="hljs-keyword">const</span> columns = []\n        <span class="hljs-keyword">const</span> codeCellGetter = <span class="hljs-function">(<span class="hljs-params">ps</span>) =&gt;</span> {\n            <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.isFocusCell(ps, <span class="hljs-string">&apos;code&apos;</span>)\n                ? &lt;Input\n                    style={{ width: &apos;100%&apos;, height: &apos;100%&apos; }}\n                    onChange={this.handleCellChange(ps, &apos;code&apos;)}\n                    value={dataSource[ps.rowIndex].code}\n                    ref={o =&gt; this.refCode = o} /&gt;\n                : &lt;TextCell\n                    onClick={this.handleCellClick(ps, &apos;code&apos;)}\n                    value={dataSource[ps.rowIndex].code} /&gt;\n        }\n        columns.push(&lt;Column\n            columnKey=&apos;code&apos;\n            header={&lt;Cell&gt;&#x7F16;&#x7801;&lt;/Cell&gt;}\n            cell={codeCellGetter}\n            footer={&lt;Cell&gt;footer&lt;/Cell&gt;}\n            width={200}\n        /&gt;)\n\n        const nameCellGetter = (ps) =&gt; {\n            return this.isFocusCell(ps, &apos;name&apos;)\n                ? &lt;Input\n                    style={{ width: &apos;100%&apos;, height: &apos;100%&apos; }}\n                    onChange={this.handleCellChange(ps, &apos;name&apos;)}\n                    value={dataSource[ps.rowIndex].name}\n                    ref={o =&gt; this.refName = o} /&gt;\n                : &lt;TextCell\n                    onClick={this.handleCellClick(ps, &apos;name&apos;)}\n                    value={dataSource[ps.rowIndex].name} /&gt;\n        }\n        columns.push(&lt;Column\n            columnKey=&apos;name&apos;\n            header={&lt;Cell&gt;&#x540D;&#x79F0;&lt;/Cell&gt;}\n            cell={nameCellGetter}\n            footer={&lt;Cell&gt;footer&lt;/Cell&gt;}\n            width={200}\n            flexGrow={1}\n        /&gt;)\n\n        return columns\n    }\n\n    render() {\n        return (\n            &lt;div style={{ height: 300, width: &apos;100%&apos;, display: &apos;flex&apos; }}&gt;\n                &lt;DataGrid\n                    headerHeight={50}\n                    rowsCount={this.state.dataSource.length}\n                    rowHeight={50}\n                    footerHeight={50}\n                    readonly={false}\n                    enableSequence={true}\n                    enableAddDelrow={true}\n                    startSequence={1}\n                    sequenceFooter={&lt;Cell&gt;footer&lt;/Cell&gt;}\n                    onAddrow={this.handleAddrow}\n                    onDelrow={this.handleDelrow}\n                    columns={this.getColumns()}\n                /&gt;\n            &lt;/div&gt;\n        )\n    }\n}\n</pre>\n'},1793:function(t,e,n){"use strict";function l(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(72),s=l(a),d=n(6),o=l(d),r=n(10),c=l(r),x=n(7),u=l(x),p=n(8),h=l(p),i=n(1),f=l(i),m=n(17),C=l(m),E=n(662),g=E.DataGrid.Column,w=E.DataGrid.Cell,y=E.DataGrid.TextCell,F=function(t){function e(t){(0,o.default)(this,e);var n=(0,u.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t));n.handleCellClick=function(t,e){return function(){n.setState({focusCellInfo:{rowIndex:t.rowIndex,columnKey:e}});setTimeout(function(){C.default.findDOMNode("code"==e?n.refCode:n.refName).focus()},0)}},n.handleCellChange=function(t,e){return function(l){var a=n.state.dataSource;a[t.rowIndex][e]=l.target.value,n.setState({dataSource:a})}},n.handleAddrow=function(t){var e=n.state.dataSource;e.push({code:"code"+e.length,name:"name"+e.length}),n.setState({dataSource:e})},n.handleDelrow=function(t){var e=n.state.dataSource;e.splice(t.rowIndex,1),n.setState({dataSource:e})},n.getColumns=function(){var t=n.state.dataSource,e=[],l=function(e){return n.isFocusCell(e,"code")?f.default.createElement(E.Input,{style:{width:"100%",height:"100%"},onChange:n.handleCellChange(e,"code"),value:t[e.rowIndex].code,ref:function(t){return n.refCode=t}}):f.default.createElement(y,{onClick:n.handleCellClick(e,"code"),value:t[e.rowIndex].code})};e.push(f.default.createElement(g,{columnKey:"code",header:f.default.createElement(w,null,"编码"),cell:l,footer:f.default.createElement(w,null,"footer"),width:200}));var a=function(e){return n.isFocusCell(e,"name")?f.default.createElement(E.Input,{style:{width:"100%",height:"100%"},onChange:n.handleCellChange(e,"name"),value:t[e.rowIndex].name,ref:function(t){return n.refName=t}}):f.default.createElement(y,{onClick:n.handleCellClick(e,"name"),value:t[e.rowIndex].name})};return e.push(f.default.createElement(g,{columnKey:"name",header:f.default.createElement(w,null,"名称"),cell:a,footer:f.default.createElement(w,null,"footer"),width:200,flexGrow:1})),e},n.state={focusCellInfo:void 0,dataSource:[]};for(var l=0;l<2;l++)n.state.dataSource.push({code:"code"+l,name:"name"+l});return n}return(0,h.default)(e,t),(0,c.default)(e,[{key:"isFocusCell",value:function(t,e){return!!this.state.focusCellInfo&&(this.state.focusCellInfo.columnKey==e&&this.state.focusCellInfo.rowIndex==t.rowIndex)}},{key:"render",value:function(){return f.default.createElement("div",{style:{height:300,width:"100%",display:"flex"}},f.default.createElement(E.DataGrid,{headerHeight:50,rowsCount:this.state.dataSource.length,rowHeight:50,footerHeight:50,readonly:!1,enableSequence:!0,enableAddDelrow:!0,startSequence:1,sequenceFooter:f.default.createElement(w,null,"footer"),onAddrow:this.handleAddrow,onDelrow:this.handleDelrow,columns:this.getColumns()}))}}]),e}(i.Component);e.default=F,t.exports=e.default},1794:function(t,e){t.exports='<h1 id="datagrid-">DataGrid &#x6570;&#x636E;&#x7F51;&#x683C;</h1>\n<p>DataGrid &#x57FA;&#x4E8E;<a href="http://facebook.github.io/fixed-data-table/">fixed-data-table</a>,&#x505A;&#x4E86;&#x4E00;&#x4E9B;&#x4FEE;&#x6539;</p>\n<p>&#x91CD;&#x8981;&#x7684;&#x6539;&#x52A8;&#x6709;&#xFF1A;</p>\n<ul>\n<li>&#x9AD8;&#x5EA6;&#xFF0C;&#x5BBD;&#x5EA6;&#x5C5E;&#x6027;&#x4E0D;&#x53EF;&#x7528;&#xFF0C;&#x4F7F;&#x7528;&#x7236;&#x4EB2;&#x7EC4;&#x4EF6;&#x9AD8;&#x5BBD;&#x81EA;&#x9002;&#x7528;&#xFF0C;&#x7236;&#x7EC4;&#x4EF6;&#x9700;&#x8981;&#x662F;flex&#x5E03;&#x5C40;</li>\n<li>&#x53EA;&#x80FD;&#x4F7F;&#x7528; columns&#x5C5E;&#x6027;&#x8BBE;&#x7F6E;&#x5217;&#xFF0C;&#x539F;&#x6765;&#x4F7F;&#x7528;children</li>\n<li>&#x63D0;&#x4F9B;&#x65B0;&#x7684;Cell&#x548C;TextCell, Cell&#x4E0D;&#x518D;&#x4F7F;&#x7528;table&#x5E03;&#x5C40;&#x6539;flex</li>\n<li>&#x589E;&#x52A0;&#x4E86;&#x542F;&#x7528;&#x5E8F;&#x53F7;&#x5217;&#x529F;&#x80FD;</li>\n<li>&#x589E;&#x52A0;&#x4E86;&#x53EF;&#x7F16;&#x8F91;&#xFF0C;&#x542F;&#x7528;&#x589E;&#x5220;&#x884C;&#x529F;&#x80FD;</li>\n</ul>\n<h2 id="api">API</h2>\n<table>\n<thead>\n<tr>\n<th>&#x53C2;&#x6570;</th>\n<th>&#x8BF4;&#x660E;</th>\n<th>&#x7C7B;&#x578B;</th>\n<th>&#x9ED8;&#x8BA4;&#x503C;</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>columns</td>\n<td>&#x5217;</td>\n<td>Array<reactnode></reactnode></td>\n<td>-</td>\n</tr>\n<tr>\n<td>rowsCount</td>\n<td>&#x884C;&#x6570;</td>\n<td>Number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>headerHeight</td>\n<td>&#x5934;&#x90E8;&#x9AD8;&#x5EA6;</td>\n<td>Number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>rowHeight</td>\n<td>&#x884C;&#x9AD8;</td>\n<td>Number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>groupHeaderHeight</td>\n<td>&#x5934;&#x90E8;Group&#x9AD8;&#x5EA6;</td>\n<td>Number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>footerHeight</td>\n<td>&#x811A;&#x90E8;&#x9AD8;&#x5EA6;</td>\n<td>Number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>heightFromRowsCount</td>\n<td>&#x9AD8;&#x5EA6;&#x662F;&#x5426;&#x901A;&#x8FC7;&#x884C;&#x6570;&#x8BA1;&#x7B97;</td>\n<td>boolean</td>\n<td>-</td>\n</tr>\n<tr>\n<td>readonly</td>\n<td>&#x53EA;&#x8BFB;&#x5C5E;&#x6027;&#xFF0C;readonly&#x4E3A;false,&#x589E;&#x884C;&#x5220;&#x884C;&#x529F;&#x80FD;&#x4E0D;&#x80FD;&#x7528;,&#x884C;&#x4E8B;&#x4EF6;&#x4E5F;&#x4E0D;&#x53EF;&#x7528;</td>\n<td>boolean</td>\n<td>-</td>\n</tr>\n<tr>\n<td>scrollToRow</td>\n<td>&#x6EDA;&#x5230;&#x7B2C;&#x51E0;&#x884C;</td>\n<td>Number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>scrollToColumn</td>\n<td>&#x6EDA;&#x5230;&#x7B2C;&#x51E0;&#x5217;</td>\n<td>Number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>enableSequence</td>\n<td>&#x542F;&#x7528;&#x5E8F;&#x53F7;&#x5217;,&#x542F;&#x7528;&#x4F1A;&#x81EA;&#x52A8;&#x7ED9;&#x8FFD;&#x52A0;&#x4E00;&#x4E2A;&#x5E8F;&#x53F7;&#x5217;&#x5728;DataGrid&#x6700;&#x524D;&#x9762;</td>\n<td>boolean</td>\n<td>-</td>\n</tr>\n<tr>\n<td>startSequence</td>\n<td>&#x5F00;&#x59CB;&#x5E8F;&#x53F7;</td>\n<td>Number</td>\n<td>1</td>\n</tr>\n<tr>\n<td>enableAddDelrow</td>\n<td>&#x542F;&#x7528;&#x589E;&#x5220;&#x884C;&#x529F;&#x80FD;,&#x8868;&#x683C;readonly===false&#x53EF;&#x7528;,&#x542F;&#x7528;&#x540E;&#x9F20;&#x6807;&#x79FB;&#x5230;&#x884C;&#x4E0A;,&#x5E8F;&#x53F7;&#x5355;&#x5143;&#x683C;&#x4E2D;&#x51FA;&#x73B0;&#x589E;&#x5220;&#x56FE;&#x6807;</td>\n<td>boolean</td>\n<td>-</td>\n</tr>\n<tr>\n<td>sequenceFooter</td>\n<td>&#x5E8F;&#x53F7;&#x5217;Footer</td>\n<td>ReactNode</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onAddrow</td>\n<td>&#x589E;&#x884C;&#x4E8B;&#x4EF6;</td>\n<td>function</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onDelrow</td>\n<td>&#x5220;&#x884C;&#x4E8B;&#x4EF6;</td>\n<td>function</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onRowClick</td>\n<td>&#x884C;&#x70B9;&#x51FB;&#x4E8B;&#x4EF6;</td>\n<td>function</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onRowDoubleClick</td>\n<td>&#x884C;&#x53CC;&#x51FB;&#x4E8B;&#x4EF6;</td>\n<td>function</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onRowMouseEnter</td>\n<td>&#x884C;&#x8FDB;&#x5165;&#x4E8B;&#x4EF6;</td>\n<td>function</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onRowMouseLeave</td>\n<td>&#x884C;&#x79BB;&#x5F00;&#x4E8B;&#x4EF6;</td>\n<td>function</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onScrollEnd</td>\n<td>&#x6EDA;&#x5230;&#x672B;&#x5C3E;&#x4E8B;&#x4EF6;</td>\n<td>function</td>\n<td>-</td>\n</tr>\n<tr>\n<td>className</td>\n<td>&#x6837;&#x5F0F;&#x540D;</td>\n<td>string</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n<p>&#x5176;&#x4ED6;&#x5C5E;&#x6027;&#x53C2;&#x8003;&#x5B98;&#x7F51;</p>\n<h3 id="column">Column</h3>\n<table>\n<thead>\n<tr>\n<th>&#x53C2;&#x6570;</th>\n<th>&#x8BF4;&#x660E;</th>\n<th>&#x7C7B;&#x578B;</th>\n<th>&#x9ED8;&#x8BA4;&#x503C;</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>fixed</td>\n<td>&#x662F;&#x5426;&#x56FA;&#x5B9A;</td>\n<td>boolean</td>\n<td>-</td>\n</tr>\n<tr>\n<td>header</td>\n<td>&#x5934;&#x5355;&#x5143;&#x683C;</td>\n<td>ReactNode or Function</td>\n<td>-</td>\n</tr>\n<tr>\n<td>cell</td>\n<td>&#x884C;&#x5355;&#x5143;&#x683C;</td>\n<td>ReactNode or Function</td>\n<td>-</td>\n</tr>\n<tr>\n<td>footer</td>\n<td>&#x811A;&#x5355;&#x5143;&#x683C;</td>\n<td>ReactNode or Function</td>\n<td>-</td>\n</tr>\n<tr>\n<td>columnKey</td>\n<td>&#x552F;&#x4E00;&#x952E;</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>width</td>\n<td>&#x5BBD;&#x5EA6;</td>\n<td>Number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>minWidth</td>\n<td>&#x6700;&#x5C0F;&#x5BBD;&#x5EA6;</td>\n<td>Number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>maxWidth</td>\n<td>&#x6700;&#x5927;&#x5BBD;&#x5EA6;</td>\n<td>Number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>flexGrow</td>\n<td>&#x5217;&#x5BBD;&#x662F;&#x5426;&#x81EA;&#x52A8;&#x9002;&#x7528;</td>\n<td>Number</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n<h3 id="cell">Cell</h3>\n<table>\n<thead>\n<tr>\n<th>&#x53C2;&#x6570;</th>\n<th>&#x8BF4;&#x660E;</th>\n<th>&#x7C7B;&#x578B;</th>\n<th>&#x9ED8;&#x8BA4;&#x503C;</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>align</td>\n<td>&#x5E03;&#x5C40; <code>left</code> <code>center</code> <code>right</code></td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>className</td>\n<td>&#x6837;&#x5F0F;&#x540D;</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>style</td>\n<td>&#x6837;&#x5F0F;</td>\n<td>Object</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n<h3 id="textcell">TextCell</h3>\n<p>&#x9002;&#x7528;&#x4E8E;&#x53EA;&#x6709;&#x503C;&#x5F97;cell,&#x6CA1;&#x6709;children&#x8282;&#x70B9;</p>\n<table>\n<thead>\n<tr>\n<th>&#x53C2;&#x6570;</th>\n<th>&#x8BF4;&#x660E;</th>\n<th>&#x7C7B;&#x578B;</th>\n<th>&#x9ED8;&#x8BA4;&#x503C;</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>align</td>\n<td>&#x5E03;&#x5C40; <code>left</code> <code>center</code> <code>right</code>&#xFF0C;&#x8BBE;&#x7F6E;&#x540E;&#x5185;&#x5BB9;&#x4F1A;&#x6839;&#x636E;&#x8BBE;&#x7F6E;&#x6765;&#x5E03;&#x5C40;</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>value</td>\n<td>&#x503C;</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>dataType</td>\n<td>&#x503C;&#x6570;&#x636E;&#x7C7B;&#x578B; <code>float</code> <code>bool</code>,&#x8BBE;&#x7F6E;&#x4E3A;bool&#xFF08;true&#x5185;&#x5BB9;&#x4F1A;&#x663E;&#x793A;&#x4E3A;&#x662F;&#xFF09;&#xFF0C;&#x8BBE;&#x7F6E;&#x4E3A;float&#x53EF;&#x4EE5;&#x4F7F;&#x7528;precision</td>\n<td>string</td>\n<td>string</td>\n</tr>\n<tr>\n<td>precision</td>\n<td>&#x6570;&#x503C;&#x7CBE;&#x5EA6;</td>\n<td>Number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>enableTooltip</td>\n<td>&#x662F;&#x5426;&#x542F;&#x7528;&#x6587;&#x5B57;&#x63D0;&#x793A;</td>\n<td>boolean</td>\n<td>-</td>\n</tr>\n<tr>\n<td>enableEllipsis</td>\n<td>&#x662F;&#x5426;&#x542F;&#x7528;&#x7701;&#x7565;&#xFF0C;&#x5982;&#x679C;&#x6587;&#x5B57;&#x6EA2;&#x51FA;</td>\n<td>boolean</td>\n<td>-</td>\n</tr>\n<tr>\n<td>sand</td>\n<td>&#x6253;&#x78E8;&#x51FD;&#x6570;&#xFF0C;&#x53EF;&#x4EE5;&#x52A0;&#x5DE5;cell&#x7684;&#x8F93;&#x51FA;&#x7ED3;&#x679C;</td>\n<td>function</td>\n<td>-</td>\n</tr>\n<tr>\n<td>className</td>\n<td>&#x6837;&#x5F0F;&#x540D;</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>style</td>\n<td>&#x6837;&#x5F0F;</td>\n<td>Object</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n'}});