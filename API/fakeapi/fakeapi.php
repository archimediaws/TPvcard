<?php
 header("Access-Control-Allow-Origin: *");
$array = [

    [
    	"id" => 1,
        "title" => "Test 1",
        "content" =>"Content 1",
        "cat"=>"cat01",
        "img" => "http://localhost/EcoleDuNum/Angular/TP/vcard/src/assets/img/poke01.jpg"
        
    ],
    [
    	"id" => 2,
        "title" => "Test 2",
        "content" =>"Content 2",
        "cat"=>"cat02",
        "img" => "http://localhost/EcoleDuNum/Angular/TP/vcard/src/assets/img/poke02.jpg"
        
    ],
    [
    	"id" => 3,
        "title" => "Test 3",
        "content" =>"Content 3",
        "cat"=>"cat03",
        "img" => "http://localhost/EcoleDuNum/Angular/TP/vcard/src/assets/img/poke03.jpg"
    ],
    [
    	"id" => 4,
        "title" => "Test 4",
        "content" =>"Content 4",
        "cat"=>"cat04",
        "img" => "http://localhost/EcoleDuNum/Angular/TP/vcard/src/assets/img/poke04.jpg"
    ]


    ];
    echo json_encode( $array);