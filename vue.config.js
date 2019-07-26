const Dotenv = require('dotenv-webpack')

module.exports = {
  
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new Dotenv({
        systemvars: true
      }),
    
    ]
  },
  
}
