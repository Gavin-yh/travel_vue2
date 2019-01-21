const path = require('path');
const resolve = dir => path.join(__dirname,dir)


module.exports = {
    devServer:{
        host:"localhost",
        port:"8080",
        proxy:{
            "/api":{
                target:"http://localhost:8080",
                pathRewrite:{
                    "^/api":"data"
                }
            }
        }
    },
    chainWebpack: (config)=>{
        config.resolve.alias
            .set("style", resolve('src/assets/styles/'))
            .set('@',resolve('src'))
    }
}