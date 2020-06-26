module.exports= {
  plugins: [ // массив плагинов всё что в нём считается зарегистрированным плагином
    require('autoprefixer'), // для корректного отображение display: flex во всех браузерах
    require('css-mqpacker'), // группировка @media запросов
    require('cssnano')({ // cssnano минифицирует код
      preset: [ // настройки для cssnano
        'default',{ 
          discardComments: { //что-то передаётся в дефолт
            removeAll: true,//что-то передаётся в discardComments (ну это уже совсем какой-то)))) Данные настройки считаются стандартными и просто убирают коментарии 
          }
        }
      ]
    })
  ]
}