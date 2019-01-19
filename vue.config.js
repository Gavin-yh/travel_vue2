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
    }
}