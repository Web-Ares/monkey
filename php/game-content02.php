<?php

$loadedCount = $_GET['loadedCount'];

if ( $loadedCount == 10 ){

//  "has_items" - the number of not downloaded images
//  "title" - title of news
//  "picture" - preview picture
//  "date" - date of news
//  "href" - link to main news

    $json_data = '{
        "has_items": 1,
                    "items":[

                        {
                            "id":1,
                            "picture": "pic/game-pic01.jpg",
                            "name": "Game Title 1",
                            "href": "#"
                            },
                        {
                            "id":2,
                            "picture": "pic/game-pic02.jpg",
                            "name": "Game Title 1",
                            "href": "#"
                            },
                        {
                            "id":3,
                            "picture": "pic/game-pic03.jpg",
                            "name": "Game Title 1",
                            "href": "#"
                            },
                        {
                            "id":4,
                            "picture": "pic/game-pic04.jpg",
                            "name": "Game Title 1",
                            "href": "#"
                            },

                        {
                            "id":5,
                            "picture": "pic/game-pic05.jpg",
                            "name": "Game Title 1",
                            "href": "#"
                            }
                    ]
    }';

} else {

//  "has_items" - the number of not downloaded news
//  "title" - title of news
//  "picture" - preview picture
//  "date" - date of news
//  "href" - link to main news

    $json_data = '{

        "has_items": 0,
                    "items":[

                        {
                            "id":6,
                            "picture": "pic/game-pic01.jpg",
                            "name": "Game Title 1",
                            "href": "#"
                            },
                        {
                            "id":7,
                            "picture": "pic/game-pic02.jpg",
                            "name": "Game Title 1",
                            "href": "#"
                            },
                        {
                            "id":8,
                            "picture": "pic/game-pic03.jpg",
                            "name": "Game Title 1",
                            "href": "#"
                            },
                        {
                            "id":9,
                            "picture": "pic/game-pic04.jpg",
                            "name": "Game Title 1",
                            "href": "#"
                            },

                        {
                            "id":10,
                            "picture": "pic/game-pic05.jpg",
                            "name": "Game Title 1",
                            "href": "#"
                            }

                    ]
        }';

};
echo $json_data;
exit;
?>
