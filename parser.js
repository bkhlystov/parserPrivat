// var a = [1, 3, 2, 4, 5, 7, 6, 8, 0, 9,'b','A'];
// function sort(a) {
//     var tmp;
//     for(var i=0;i<a.length;i++){
//         for(var j=0;j<a.length;j++){
//             if(a[j+1]<a[j]){
//                 tmp = a[j];
//                 a[j]=a[j+1];
//                 a[j+1]=tmp;
//             }
//         }
//     }
//     console.log(a);
// }
// //sort(a);
//
// var name1 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod';
// var name2 = 'Lorem ipsum dolor sed do eiusmod sit amet, consectetur adipisicing elit,';
// function name(arr1, arr2){
//     var n1 = arr1.toLowerCase().split('').sort().join('');
//     var n2 = ((((arr2.toLowerCase()).split('')).sort()).join(''));
//     console.log(n1==n2);
//     console.log(n1);
//     console.log(n2);
//     // if(n1==n2){
//     //     console.log('одинаковые');
//     // }
// }
// //name(name1,name2);
//
// myname = "global";
// function func() {
//     // console.log(myname+'I');
//     var myname = "local";
//     //console.log(myname);
//     console.log(myname);
// }
// console.log(func());
// console.log(myname);
// //--------Третий парсер------
// var  items = [];
// function fromCsvToArray() {
//     var columns = ["link"];     //инициализация начального массива с ключами
//     require("csv-to-array")({
//         file: "C:/Users/User/Desktop/parcer js/new.csv",
//         columns: columns
//     }, function (err, array) {
//         //console.log(err || array);
//         //bustArray(array);       //передаем массив на перебор
//         console.log(array.length);
//         console.log(array);
//     });
// }
//
// //перебераем массив и подставляем в url
// function bustArray(array){
//
//     for(var i = 0;i<array.length;i++){
//         var arr = array[i];
//         // console.log(arr);
//         for(var item in arr){
//             //console.log(typeof(arr[item]));
//             parsing(arr[item]); //парсинг указанных урлов(принимает ссылку с csv файла)
//         }
//     }
// }
//
// //Парсин элементов страницы в массив обьектов
// function parsing(url){
//     var request = require("request"),
//         cheerio = require("cheerio");
//
//     request(url, function (error, response, html) {
//         if (!error) {
//             var $ = cheerio.load(html);
//             $('html').each(function () {
//                 items.push({
//                     title: $('title', this).text(),
//                     url: url,   //$('a', this).attr('href'),
//                     description: $('meta[name=description]').attr('content'),
//                     keywords: $('meta[name=keywords]').attr('content')
//                 });
//
//             });
//             //console.log(items);
//             fromArrayToScv(items);           //вызов функции записи из массива в CSV
//             response.end();
//             // response.socket.destroyed;
//
//         } else {
//             console.log("Произошла ошибка: " + error);
//         }
//     });
// }
//
// //распарсиваем массив обльектов в CSV
// function fromArrayToScv(items) {
//     var json2csv = require('json2csv');
//     var fs = require('fs');
//     var fields = ['title', 'url', 'description', 'keywords'];       //заголовок к созданной таблице
//     var csv = json2csv({ data: items, fields: fields });
//     fs.writeFile('C:/Users/User/Desktop/parcer js/result.csv', csv, function(err) {
//          if (err){
//              console.log(err);
//          }else{
//              console.log('file saved');
//          }
//
//     });
// }
//
//
// fromCsvToArray();
//
//
// var fs = require('fs');
// var text = fs.readFileSync('C:/Users/User/Desktop/parcer js/test.txt', 'utf8');
// var b = text.split('\r\n');
// console.log(b.length);
// console.log(b[0]);
//
// fs.writeFileSync('C:/Users/User/Desktop/parcer js/test1.txt', 'Привет');


// //--------Третий парсер------
// var  items = [];
// function fromCsvToArray() {
//     var fs = require('fs');
//     var text = fs.readFileSync('C:/Users/User/Desktop/parcer js/test.txt', 'utf8');
//     var arr = text.split('\r\n');
//     //console.log(arr);
//     // bustArray(array);
//     parsing(arr);
// }
//
// //перебераем массив и подставляем в url
// function bustArray(array){
//
//     // for(var i = 0;i<array.length;i++){
//     //
//     //     parsing(array[i]); //парсинг указанных урлов(принимает ссылку с csv файла)
//     // }
// }
//
// //Парсин элементов страницы в массив обьектов
// function parsing(array) {
//     var request = require("request"),
//         cheerio = require("cheerio");
//     var http = require('http');
//     //console.log(array.length);
//     for (var i = 0; i < array.length; i++) {
//         var url = array[i];
//         if (i <= 5000) {
//
//             request(url, function (error, req, html) {
//                 if (!error)  {
//                     var $ = cheerio.load(html);
//                     $('html').each(function () {
//                             items.push({
//                                 title: $('title', this).text(),
//                                 url: url,   //$('a', this).attr('href'),
//                                 description: $('meta[name=description]').attr('content'),
//                                 keywords: $('meta[name=keywords]').attr('content')
//                             });
//                     });
//                     fromArrayToScv(items);
//                     // response.close();
//                     // var keepAliveAgent = new http.Agent({ keepAlive: false });
//                     // options.agent = keepAliveAgent;
//                     // http.request(options, onResponseCallback);
//                     //вызов функции записи из массива в CSV
//                 } else {
//                     //throw error;
//                     console.log("Произошла ошибка: 3" + error);
//                 }
//
//             });
//         }
//
//     }
// }
//
// //распарсиваем массив обльектов в CSV
// function fromArrayToScv(items) {
//     var json2csv = require('json2csv');
//     var fs = require('fs');
//     var fields = ['title', 'url', 'description', 'keywords'];       //заголовок к созданной таблице
//     var csv = json2csv({ data: items, fields: fields });
//     fs.writeFile('C:/Users/User/Desktop/parcer js/result.csv', csv, function(err) {
//         if (err){
//             console.log(err);
//         }else{
//             console.log('file saved');
//             items = [];
//         }
//
//     });
// }
//
//
// fromCsvToArray();


// var  items = [];
// function fromCsvToArray() {
//     var fs = require('fs');
//     var text = fs.readFileSync('C:/Users/User/Desktop/parcer js/test.txt', 'utf8');
//     var arr = text.split('\r\n');
//     //console.log(arr);
//     // bustArray(array);
//     bustArray(array);
// }
//
// //перебераем массив и подставляем в url
// function bustArray(array) {
//
//     for (var i = 0; i < array.length; i++) {
//         //console.log(typeof(arr[item]));
//         parsing(arr[item]); //парсинг указанных урлов(принимает ссылку с csv файла)
//     }
// }
//
//
// function  parsing(url){
// request('html',function(err,res, body){
//
//         $ = cheerio.load(body);
//         var pager = $('html');
//         var Q = require('q');
//         var limitPage = parseInt( pager.eq(pager.length-1).text().trim(), 10);
//         //stage 2
//         function parsePage(page){
//             var defer = Q.defer();
//             request('/pager/'+page,function(err,res, body){
//                 if(page<=limitPage){
//                     defer.resolve(page+1); //инкрементируем счетчик страниц прямо в асинхронной последовательности передавая его в качестве аргумента следующим вызовам
//                 } else {
//                     defere.reject();
//                 }
//                 //тут код из первого абстракного примера
//                 request(url, function(err, res, body) {
//                     if (err) {
//                         console.log(err);
//                     }
//                     else {
//                         var $ = cheerio.load(html);
//                         $('head').each(function () {
//                             items.push({
//                                 title: $('title', this).text(),
//                                 url: url,   //$('a', this).attr('href'),
//                                 description: $('meta[name=description]').attr('content'),
//                                 keywords: $('meta[name=keywords]').attr('content')
//                             });
//                         });
//                     }
//                 });
//             //возвращаем promise чтобы на нем построить последовательность.
//             return defer.promise;
//         });
//
//         var chain = Q.fcall(function(){
//             return parsePage(1);
//         });
//         for(var i = 2; i<limitPage;i++){
//             chain = chain.then(function(page){
//                 return parsePage(page); // цепляем в цепь новые задачи на парсинг, как старые выполнятся.
//             });
//           }
//         }
//     });
// }


// var _this = this;
// var name = "Roman";
// var a = Object.create(_this);
// var a = {name: "Bohdan",
// namesec: function(){ _this.name}};
// if(a.hasOwnProperty("name")){
//     a.namesec();
// }


// var a = [1, 3, 2, 4, 5, 7, 6, 8, 0, 9,'b','A'];
//     var tmp;
//     for (var i = 0; i < a.length; i++) {
//         for (var j = 0; j < a.length; j++) {
//             if (a[j+1] < a[j]) {
//                 tmp = a[j+1];
//                 a[j+1] = a[j];
//                 a[j]=tmp;
//             }
//         }
//     }
//
//     console.log(a);

// var str = "Слива Яблоко Апельсин Груша Яблоко Яблоко Апельсин Груша Яблоко";
// function search(str) {
//     var arr = str.split(' ');
//     var count =0;
//     var word = [];
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < arr.length; j++) {
//             if (arr[i]==arr[j]) {
//                 count++;
//                 // arr.splice(arr[j], 1);
//                 // delete arr[j];
//             }
//             if(j==arr.length-1){
//                 console.log('Слово '+arr[i]+' '+'Количество вхождений '+(count));
//                 // for(var c = 0;c<word.length;c++){
//                 //     if(arr[i]!=word[c].name || word[0] == null || word[0] == undefined){
//                 //         word.push({name: arr[i], count: count});
//                 //     }
//                 // }
//                 var count=0;
//                 // console.log(word);
//             }
//         }
//     }
//
// }
// search(str);