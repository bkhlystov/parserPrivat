--------Третий парсер------
var  items = [];
function fromCsvToArray() {
    var fs = require('fs');
    var text = fs.readFileSync('C:/Users/User/Desktop/parcer js/test.txt', 'utf8');
    var array = text.split('\r\n');
    console.log(array);
    //bustArray(array);
}

//перебераем массив и подставляем в url
function bustArray(array){

    for(var i = 0;i<array.length;i++){

            parsing(array[i]); //парсинг указанных урлов(принимает ссылку с csv файла)
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
            //console.log(items);
            fromArrayToScv(items);           //вызов функции записи из массива в CSV

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
        if (err){
            console.log(err);
        }else{
            console.log('file saved');
        }

    });
}


fromCsvToArray();


