webpackJsonp([44],{1721:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(72),r=a(l),u=n(6),o=a(u),c=n(10),d=a(c),m=n(7),f=a(m),i=n(8),p=a(i),s=n(1),k=a(s),y=n(315),M=n(662);n(1872);var h=M.Menu.SubMenu,E=(M.Menu.ItemGroup,function(e){function t(){var e,n,a,l;(0,o.default)(this,t);for(var u=arguments.length,c=Array(u),d=0;d<u;d++)c[d]=arguments[d];return n=a=(0,f.default)(this,(e=t.__proto__||(0,r.default)(t)).call.apply(e,[this].concat(c))),a.handleMenuClick=function(e){a.props.setCurrentAppPath(""+e.key),document.body.scrollTop=0,document.documentElement.scrollTop=0},a.handleGithubClick=function(){window.open("https://github.com/ziaochina/mk-component")},l=n,(0,f.default)(a,l)}return(0,p.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props.payload.get("currentAppPath")||"about";return k.default.createElement("div",{className:"app-root"},k.default.createElement("div",{className:"app-root-header"},k.default.createElement("div",{className:"app-root-header-left"},k.default.createElement("h1",null,"mk-componnet")),k.default.createElement("div",{className:"app-root-header-right"},k.default.createElement(M.Icon,{type:"github",onClick:this.handleGithubClick}))),k.default.createElement("div",{className:"app-root-content"},k.default.createElement("div",{className:"app-root-content-left"},this.getMenu()),k.default.createElement("div",{className:"app-root-content-main",id:"main"},e?k.default.createElement(y.AppLoader,{name:e}):null)))}},{key:"getMenu",value:function(){return k.default.createElement(M.Menu,{theme:"dark",mode:"inline",defaultSelectedKeys:["about"],defaultOpenKeys:["components"],onClick:this.handleMenuClick},k.default.createElement(M.Menu.Item,{key:"about"},"关于"),k.default.createElement(M.Menu.Item,{key:"start"},"开始使用"),k.default.createElement(h,{key:"components",title:"组件"},k.default.createElement(M.Menu.Item,{key:"layout"},"Layout 布局"),k.default.createElement(M.Menu.Item,{key:"icon"},"Icon 图标"),k.default.createElement(M.Menu.Item,{key:"input"},"Input 输入框"),k.default.createElement(M.Menu.Item,{key:"select"},"Select 选择框"),k.default.createElement(M.Menu.Item,{key:"datePicker"},"DatePicker 日期"),k.default.createElement(M.Menu.Item,{key:"checkbox"},"Checkbox 多选框"),k.default.createElement(M.Menu.Item,{key:"radio"},"Radio 单选框"),k.default.createElement(M.Menu.Item,{key:"cascader"},"Cascader 级联选择"),k.default.createElement(M.Menu.Item,{key:"button"},"Button 按钮"),k.default.createElement(M.Menu.Item,{key:"dropdown"},"Dropdown 下拉"),k.default.createElement(M.Menu.Item,{key:"link"},"Link 链接"),k.default.createElement(M.Menu.Item,{key:"switch"},"Switch 开关"),k.default.createElement(M.Menu.Item,{key:"rate"},"Rate 评分"),k.default.createElement(M.Menu.Item,{key:"slider"},"Slider 滑动输入条"),k.default.createElement(M.Menu.Item,{key:"upload"},"Upload 上传"),k.default.createElement(M.Menu.Item,{key:"transfer"},"Transfer 穿梭框"),k.default.createElement(M.Menu.Item,{key:"datagrid"},"DataGrid 数据网格"),k.default.createElement(M.Menu.Item,{key:"table"},"Table 表格"),k.default.createElement(M.Menu.Item,{key:"form"},"Form 表单"),k.default.createElement(M.Menu.Item,{key:"menu"},"Menu 菜单"),k.default.createElement(M.Menu.Item,{key:"card"},"Card 卡片"),k.default.createElement(M.Menu.Item,{key:"collapse"},"Collapse 折叠面板"),k.default.createElement(M.Menu.Item,{key:"tabs"},"Tabs 标签页"),k.default.createElement(M.Menu.Item,{key:"tree"},"Tree 树"),k.default.createElement(M.Menu.Item,{key:"treeSelect"},"TreeSelect 树选择框"),k.default.createElement(M.Menu.Item,{key:"toast"},"Toast 轻提示"),k.default.createElement(M.Menu.Item,{key:"modal"},"Modal 对话框"),k.default.createElement(M.Menu.Item,{key:"alert"},"Alert 警告提示"),k.default.createElement(M.Menu.Item,{key:"notification"},"Notification 通知"),k.default.createElement(M.Menu.Item,{key:"popconfirm"},"Popconfirm 气泡确认框"),k.default.createElement(M.Menu.Item,{key:"affix"},"Affix 固钉"),k.default.createElement(M.Menu.Item,{key:"anchor"},"Anchor 瞄点"),k.default.createElement(M.Menu.Item,{key:"backTop"},"BackTop 回到顶部"),k.default.createElement(M.Menu.Item,{key:"breadcrumb"},"Breadcrumb 面包屑"),k.default.createElement(M.Menu.Item,{key:"badge"},"Badge 徽标数"),k.default.createElement(M.Menu.Item,{key:"carousel"},"Carousel 走马灯"),k.default.createElement(M.Menu.Item,{key:"popover"},"Popover 气泡卡片"),k.default.createElement(M.Menu.Item,{key:"tooltip"},"Tooltip 文字提示"),k.default.createElement(M.Menu.Item,{key:"spin"},"Spin 加载中"),k.default.createElement(M.Menu.Item,{key:"progress"},"Progress 进度条"),k.default.createElement(M.Menu.Item,{key:"timeline"},"Timeline 时间轴"),k.default.createElement(M.Menu.Item,{key:"pagination"},"Pagination 分页"),k.default.createElement(M.Menu.Item,{key:"steps"},"Steps 步骤条"),k.default.createElement(M.Menu.Item,{key:"echarts"},"Echarts 图表")))}}]),t}(s.Component));t.default=E,e.exports=t.default},1722:function(e,t,n){"use strict";function a(e){return new u}Object.defineProperty(t,"__esModule",{value:!0});var l=n(6),r=function(e){return e&&e.__esModule?e:{default:e}}(l);t.default=a;var u=function e(){(0,r.default)(this,e),this.setCurrentAppPath=function(e){return function(t){t.reduce("setCurrentAppPath",e)}}};e.exports=t.default},1723:function(e,t,n){"use strict";function a(e){return new u(e)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(6),r=function(e){return e&&e.__esModule?e:{default:e}}(l);t.default=a;var u=(n(154),function e(){(0,r.default)(this,e),this.setCurrentAppPath=function(e,t){return e.set("currentAppPath",t)}});e.exports=t.default},1872:function(e,t,n){var a=n(1873);"string"==typeof a&&(a=[[e.i,a,""]]);var l={};l.transform=void 0;n(204)(a,l);a.locals&&(e.exports=a.locals)},1873:function(e,t,n){t=e.exports=n(153)(void 0),t.push([e.i,".app-root {\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: #ececec;\n}\n.app-root-header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 0px 24px 0px 24px;\n  flex: 0 0 54px;\n  height: 54px;\n  background-color: #333;\n  color: #fff;\n}\n.app-root-header-left {\n  flex: 1;\n}\n.app-root-header-left h1 {\n  color: #fff;\n}\n.app-root-header-right {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.app-root-header-right i {\n  font-size: 20px;\n  cursor: pointer;\n}\n.app-root-content {\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  flex: 1 1 auto;\n}\n.app-root-content-left {\n  width: 200px;\n  overflow: auto;\n  flex: 0 0 auto;\n}\n.app-root-content-main {\n  flex: 1 1 auto;\n  background-color: translation;\n  padding: 20px;\n  overflow: auto;\n}\n",""])}});