## 启动步骤
## yarn 
## yarn start

结构：
./components/Search.tsx  主页面，负责处理副作用，处理数据并下发
./components/loading     数据请求中展示的loading组件
./components/Qqbox       纯展示组件，接受来自Search组件的数据并做展示
./utils/require.ts       封装的axios插件功能
./utils/deounce.ts       helper函数，函数防抖，在数据请求的时候使用
