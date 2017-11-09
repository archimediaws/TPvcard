<?php
 header("Access-Control-Allow-Origin: *");
$array = [

    [
    	"id" => 1,
        "title" => "Test 1",
        "content" =>"Content 1"
        
    ],
    [
    	"id" => 2,
        "title" => "Test 2",
        "content" =>"Content 2"
        
    ],
    [
    	"id" => 3,
        "title" => "Test 3",
        "content" =>"Content 3"
       
    ]

    ];
    echo json_encode( $array);