# Toast 轻提示

全局展示操作反馈信息。

## 何时使用

- 可提供成功、警告和错误等反馈信息。
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

## API

组件提供了一些静态方法，使用方式和参数如下：

- `Toast.success(content, duration, onClose)`
- `Toast.error(content, duration, onClose)`
- `Toast.info(content, duration, onClose)`
- `Toast.warning(content, duration, onClose)`
- `Toast.warn(content, duration, onClose)` // alias of warning
- `Toast.loading(content, duration, onClose)`

| 参数       | 说明           | 类型                       | 默认值       |
|------------|----------------|--------------------------|--------------|
| content    | 提示内容       | string\|ReactNode | -           |
| duration   | 自动关闭的延时，单位秒 | number               | 1.5          |
| onClose   | 关闭时触发的回调函数 | Function          | -         |

还提供了全局配置和全局销毁方法：

- `Toast.config(options)`
- `Toast.destroy()`

### Toast.config

```js
Toast.config({
  top: 100,
  duration: 2,
});
```

| 参数       | 说明                | 类型                       | 默认值       |
|------------|--------------------|--------------------------|-------------|
| top        | 消息距离顶部的位置 | number                      | 24px        |
| duration   | 默认自动关闭延时，单位秒 | number                 | 1.5         |
| getContainer | 配置渲染节点的输出位置 | () => HTMLElement | () => document.body |