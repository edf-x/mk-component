# Menu 菜单

该组件来源于antd menu，为页面和功能提供导航的菜单列表。

## antd Menu API

[详情请点击查看官方](https://ant.design/components/menu-cn/)

### Menu props

| 参数     | 说明           | 类型     | 默认值       |
|----------|---------------|----------|--------------|
| theme    | 主题颜色 | string: `light` `dark` | `light` |
| mode | 菜单类型，现在支持垂直、水平、和内嵌模式三种 | string: `vertical` `horizontal` `inline` | `vertical` |
| selectedKeys | 当前选中的菜单项 key 数组 | string[] |  -    |
| defaultSelectedKeys | 初始选中的菜单项 key 数组 | string[] |  -    |
| openKeys | 当前展开的 SubMenu 菜单项 key 数组 | string[] | - |
| defaultOpenKeys | 初始展开的 SubMenu 菜单项 key 数组 |-  |  -    |
| onOpenChange | SubMenu 展开/关闭的回调 | Function(openKeys: string[]) | noop |
| onSelect | 被选中时调 | Function({ item, key, selectedKeys }) | 无   |
| onDeselect | 取消选中时调用，仅在 multiple 生效 | Function({ item, key, selectedKeys }) | - |
| onClick | 点击 menuitem 调用此函数，参数为 {item, key, keyPath} | function | - |
| style | 根节点样式 | object | - |
| inlineIndent | inline 模式的菜单缩进宽度 | number | 24 |
| multiple | 是否允许多选 | boolean | false |

### Menu.Item props

| 参数     | 说明           | 类型     | 默认值       |
|----------|----------------|----------|--------------|
| disabled    | 是否禁用 | boolean   |  false  |
| key   | item 的唯一标志 |  string | -	 |

### Menu.SubMenu props

| 参数     | 说明           | 类型     | 默认值       |
|----------|----------------|----------|--------------|
| disabled    | 是否禁用 | boolean   |  false  |
| key | 唯一标志 |  string | - |
| title    | 子菜单项值 | string or ReactNode |  - |
| children | 子菜单的菜单项 | Array<MenuItem or SubMenu> | - |
| onTitleClick | 点击子菜单标题 | Function({ eventKey, domEvent }) | - |

### Menu.ItemGroup props

| 参数     | 说明           | 类型     | 默认值       |
|----------|----------------|----------|--------------|
| title    | 分组标题       | string or  ReactNode |  -  |
| children | 分组的菜单项    | MenuItem[] | - |

### Menu.Divider

菜单项分割线，只用在弹出菜单内。


