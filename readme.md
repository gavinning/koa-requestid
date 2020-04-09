Koa-RequestId
---
koa requestid, koa responseid

### Install
```sh
npm i @4a/koa-requestid
```

### Usage
```js
const requestid = require('@4a/koa-requestid')

app.use(requestid())

router.get('/', (ctx) => {
    console.log(ctx.ResponseId)
})
```

### Notes
```js
// RequestId默认会从headers中查询，查询失败则使用uuid新建
ctx.RequestId = ctx.req.headers.requestId || ctx.req.headers['X-Request-Id'] || uuid.v4().toUpperCase()

// 请求处理完毕RequestId会赋值给ResponseId，下游路由可以按需调用
ctx.ResponseId = ctx.RequestId
```
