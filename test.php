<?php
ini_set('display_errors', 1);

function parse_page($url){
    $fp = file_get_contents($url); // получаем страницу (тут можно по разному даже через CURL)
    if (!$fp) {
        return null;
    }  // Если страницу не получили выйти и отправить указатель на null

    $res = preg_match('/<title>(.*)<\/title>/', $fp, $title_matches); // Найти title
    $res2 = preg_match('/<meta name="keywords" content="(.*) \/>/', $fp, $meta_keywords_matches); // Найти keywords
    $res3 = preg_match('/<meta name="description" content="(.*) \/>/', $fp, $meta_description_matches); // Найти description

    if (!$res || !$res2 || !$res3){
        return null; // если ничего не нашли выйти и отправить указатель на null
    }

    /*$title = trim(preg_replace('/\s+/', ' ', $title_matches[1])); // уберем мусор переводы строк
    $keywords = trim(preg_replace('/\s+/', ' ', $meta_keywords_matches[1])); // уберем мусор переводы строк
    $description = trim(preg_replace('/\s+/', ' ', $meta_description_matches[1])); // уберем мусор переводы строк
    */
    return $url." || ".$title_matches[1]." || ".$meta_keywords_matches[1]." || ".$meta_description_matches[1]; // Отдадим заголовок
}

/**************************************************************************************/

echo "start<br>";
$handle = fopen("C:/Users/User/Desktop/parcer js/new1.csv", "r");
while ($data = fgetcsv($handle)){
    $title = parse_page($data[0])."\n";
    file_put_contents("C:/Users/User/Desktop/parcer js/result.csv", $title, FILE_APPEND);
}
fclose($handle);
echo "<br>end";

//$handle = fopen("C:/Users/User/Desktop/parcer js/new1.csv", "r");
//var_dump($handle);
//$data = fgetcsv($handle);
//print_r($data);
//$data = fgetcsv($handle);
//print_r($data);


//$arr = [1,2,3,4];
//$obj = (object)array("name" => "Bohdan");
//for($i=0;$i<count($arr);$i++){
//    echo $arr[$i];
//}