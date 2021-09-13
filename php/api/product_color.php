<?php

// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$colors  = array(
    (object) [
        'sku' => '1110365',
        'name' => "Tell Her She's Stellar",
        'imageUrl' => "GEL-W-H-19-1110365-TellHerShesStellar.jpg"
    ],
    (object) [
        'sku' => '1110373',
        'name' => 'Copper Dream',
        'imageUrl' => "GEL-W-H-19-1110373-CopperDream.jpg"
    ],
    (object) [
        'sku' => '1110367',
        'name' => 'Sprinkle of Twinkle',
        'imageUrl' => "GEL-W-H-19-1110367-SprinkleofTwinkle.jpg"
    ],
    (object) [
        'sku' => '1110368',
        'name' => 'A Starry Sigh',
        'imageUrl' => "GEL-W-H-19-1110368-AStarrySight.jpg"
    ],
);

print_r(json_encode($colors));
