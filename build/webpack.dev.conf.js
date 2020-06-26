const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf'); // ссылаемся на файл базовой конфигурации т.е. конфига который будет выполняться в обоих модах (dev & build)

const devWebpackConfig = merge(baseWebpackConfig, {
  // DEV config
  mode: 'development',
  devtool: 'cheap-module-eval-source-map', 
  devServer: {
    contentBase: `${baseWebpackConfig.externals.paths.dist}`, // "указывает где у нас будет открываться вебпак" (c) человек из видео (хз че это значит РАЗОБРАТЬСЯ!!!) 
    // baseWebpackConfig.externals.paths.dist ссылается базовый конфиг в котором указан экстернал дающий ярлык для константы содержащей в себе пути к папкам, через местную константу baseWebpackConfig
    port: 8081, // порт серва "облегчает жизнь другим серверам"
    overlay: {
      warnings: true, //Вывод предупреждений в браузере
      errors: true, //Вывод ошибок в браузере
    }
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({ // Для корректной работы карты сайта
      filename: '[file].map' // Для того что-бы было видно вложенные файлы в SCSS подключаемые через @import
    }) 
  ]
});

module.exports = new Promise ((resolve, reject) => {
  resolve(devWebpackConfig);
});