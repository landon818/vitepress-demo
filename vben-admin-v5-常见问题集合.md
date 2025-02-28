## vben admin v5 常见问题集合

#### 一、运行正常但是打包构建时突然异常退出

解决方案：1.查看是否使用了中文路径  	 2.使用vben内置script命令清除依赖等

#### 二、使用antd的组件内的 slot 时可以使用 tsx/jsx 语法,快速在script标签中创建dom节点

#### 三、vben admin v5 图标问题

#### 	1. templete中使用

```
//mdi:add --> mdi--add
<span class="icon-[mdi--add]"></span>  
```

#### 	4. 动态创建使用

```
// 引入icon创建组件
import { createIconifyIcon } from '@vben/icons';
// 使用组件
const Iconify=createIconifyIcon(<icones图标名称>)
```



