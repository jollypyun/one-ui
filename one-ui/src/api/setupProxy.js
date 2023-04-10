const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = (app) => {
    app.use('/nation',
        createProxyMiddleware({
            target: "http://localhost:9010",
            changeOrigin: true
        })
    )
}