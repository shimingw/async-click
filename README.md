## async-click
> 防止重复触发点击事件

## Install
```
npm install async-click --save
```

## Features
以自定义指令的方式重新定义点击事件，在点击事件触发后，会有500ms的禁用时间，以此来防止某个点击事件的因为快速点击而触发多次的情况
如果点击事件是一个异步事件，并且返回的是返回的是一个promise对象，则会等待该异步事件执行完毕，再延长500ms，之后才可以继续点击

## Usage
```js
import asyncClick from 'async-click'
Vue.use(asyncClick)

<el-button type="primary" v-asyncClick="{ event: confirm, params:[rows,id,...] }">保存</el-button>
```