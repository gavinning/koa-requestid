const uuid = require('uuid')

module.exports = () => {
    return async (ctx, next) => {
        ctx.RequestId = ctx.req.headers.requestId || ctx.req.headers['X-Request-Id'] || uuid.v4().toUpperCase()
        ctx.ResponseId = ctx.RequestId
        await next()
    }
}
