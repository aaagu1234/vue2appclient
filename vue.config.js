const path = require('path');
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss', // 自动引入 在当前每个页面中导入scss变量
      // patterns:[]
      patterns: [path.resolve(__dirname,'src/assets/common.scss')]
    }
  } 
}

