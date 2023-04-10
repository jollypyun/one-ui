const createProxyMiddleware = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(
        createProxyMiddleware("/nation/allNation", {
            target: "http://localhost:9010",
            changeOrigin: true
        })
    )
}