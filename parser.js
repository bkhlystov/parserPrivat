//--------Третий парсер------
var  items = [];
function fromCsvToArray() {
    var columns = ["link"];     //инициализация начального массива с ключами
    require("csv-to-array")({
        file: "C:/Users/User/Desktop/parcer js/new.csv",
        columns: columns
    }, function (err, array) {
        // console.log(err || array);
        bustArray(array);       //передаем массив на перебор
    });
}

//перебераем массив и подставляем в url
function bustArray(array){

    for(var i = 0;i<array.length;i++){
        var arr = array[i];
        // console.log(arr);
        for(var item in arr){
            //console.log(typeof(arr[item]));
            parsing(arr[item]); //парсинг указанных урлов(принимает ссылку с csv файла)
        }
    }
}

//Парсин элементов страницы в массив обьектов
function parsing(url){
    var request = require("request"),
        cheerio = require("cheerio");

    request(url, function (error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);
            $('html').each(function () {
                items.push({
                    title: $('title', this).text(),
                    url: url,   //$('a', this).attr('href'),
                    description: $('meta[name=description]').attr('content'),
                    keywords: $('meta[name=keywords]').attr('content')
                });

            });
            // console.log(items);
            //fromArrayToScv(items);           //вызов функции записи из массива в CSV

        } else {
            console.log("Произошла ошибка: " + error);
        }
    });
}

//распарсиваем массив обльектов в CSV
function fromArrayToScv(items) {
    var json2csv = require('json2csv');
    var fs = require('fs');
    var fields = ['title', 'url', 'description', 'keywords'];       //заголовок к созданной таблице
    var csv = json2csv({ data: items, fields: fields });
    fs.writeFile('C:/Users/User/Desktop/parcer js/result.csv', csv, function(err) {
        // if (err){console.log(err)}
        // console.log('file saved');
    });
}


fromCsvToArray();