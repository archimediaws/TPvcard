<?php 
header("Access-Control-Allow-Origin:*", false);
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authoriration");
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE");

require "flight/Flight.php"; 
require "autoload.php";

//Enregistre en global dans Flight le BddManager
Flight::set("BddManager", new BddManager());



// routes CATEGORIES


//CATEGORIES GET ALL Lire toutes les categories
Flight::route("GET /categories", function(){
    
        $bddManager = Flight::get("BddManager");
        $repoCat = $bddManager->getCategorieRepository();
        $categories = $repoCat->getAllCategories();
    
        echo json_encode ( $categories );
    
    });


//CATEGORIES GET CATEGORIE par id
Flight::route("GET /categorie/@id", function( $id ){
    
    $status = [
        "success" => false,
        "categoryId" => false
    ];

    $categorie = new Categorie();
    $categorie->setId( $id );

    $bddManager = Flight::get("BddManager");
    $repoCat = $bddManager->getCategorieRepository();
    $categorie = $repoCat->getCategoryById( $categorie );

    if( $categorie != false ){
        $status["success"] = true;
        $status["categoryId"] = $categorie;
    }

    echo json_encode( $status );

});


// CATEGORIE POST  / Créer une categorie
Flight::route("POST /categorie", function(){
    
        $categoryname = Flight::request()->data["categoryname"];
        // $userId = Flight::request()->data["userId"];
        
    
        $status = [
            "success" => false
            // "userId" => 0
        ];
    
        if( strlen( $categoryname ) > 0  ) {
    
            $categorie = new Categorie();
            
            $categorie->setCategoryname( $categoryname );
            // $categorie->setUserId( $userId );
            
    
            $bddManager = Flight::get("BddManager");
            $repoCat = $bddManager->getCategorieRepository();
            $id = $repoCat->save( $categorie );
    
            if( $id != 0 ){
                $status["success"] = true;
                // $status["userId"] = $id;
            }
    
        }
    
        echo json_encode( $status ); 
        
    });


// CATEGORIE DELETE / Supprimer la categorie à l'@id
Flight::route("DELETE /categorie/@id", function( $id ){
    
        $status = [
            "success" => false
        ];
    
        $categorie = new Categorie();
        $categorie->setId( $id );
    
        $bddManager = Flight::get("BddManager");
        $repoCat = $bddManager->getCategorieRepository();
        $rowCount = $repoCat->delete( $categorie );
    
        if( $rowCount == 1 ){
            $status["success"] = true;
        }
    
        echo json_encode( $status );
        
    });  


    //CATEGORIE GET CARD / Récupere les cards de la categorie @id

    Flight::route("GET /cards/cat/@id", function( $id ){
        
        $status = [
            "success" => false,
            "cards" => false
        ];

        $categorie = new Categorie();
        $categorie->setId( $id );

        $bddManager = Flight::get("BddManager");
        $repoCat = $bddManager->getCategorieRepository();
        $cards = $repoCat->getAllCardByCategorieId($categorie);

        if( $cards != false ){
            $status["success"] = true;
            $status["cards"] = $cards;
        }

        echo json_encode( $status );

    });



// routes CARDS

//CARDS GET CARDS Lire tous les cards
Flight::route("GET /cards", function(){

    $bddManager = Flight::get("BddManager");
    $repo = $bddManager->getCardRepository();
    $cards = $repo->getAll();

    echo json_encode ( $cards );

});

//CARDS GET CARD Récuperer le card @id
Flight::route("GET /card/@id", function( $id ){
    
    $status = [
        "success" => false,
        "product" => false
    ];

    $card = new Card();
    $card->setId( $id );

    $bddManager = Flight::get("BddManager");
    $repo = $bddManager->getCardRepository();
    $card = $repo->getById( $card );

    if( $card != false ){
        $status["success"] = true;
        $status["product"] = $card;
    }

    echo json_encode( $status );

});


// CARDS POST CARD / Créer une card
Flight::route("OPTIONS /card", function(){ echo "{}"; }); // pour angular declaration de la route OPTION

Flight::route("POST /card", function(){

    $cardtitle = Flight::request()->data["cardtitle"];
    $cardcontent = Flight::request()->data["cardcontent"];
    // $userId = Flight::request()->data["userId"];
    $categoryId = Flight::request()->data["categoryId"];
    $cardimg = Flight::request()->data["cardimg"];

    $status = [
        "success" => false,
        "id" => 0
    ];

    if( strlen( $cardtitle ) > 0 && strlen( $cardcontent ) > 0  && strlen( $categoryId ) > 0 && strlen( $cardimg ) > 0 ) {

        $card = new Card();
        
        $card->setCardtitle( $cardtitle );
        $card->setCardcontent( $cardcontent );
        $card->setCardimg( $cardimg );
        // $product->setUserId( $userId );
        $card->setCategoryId( $categoryId );

        $bddManager = Flight::get("BddManager");
        $repo = $bddManager->getCardRepository();
        $id = $repo->save( $card );

        if( $id != 0 ){
            $status["success"] = true;
            $status["id"] = $id;
        }

    }

    echo json_encode( $status ); 
    
});

// CARD POST updater = modifier les datas d'une card  = en POST 

Flight::route("POST /card/@id", function($id){
    
        $cardtitle = Flight::request()->data["cardtitle"];
        $cardcontent = Flight::request()->data["cardcontent"];
        $categoryId = Flight::request()->data["categoryId"];
        $cardimg = Flight::request()->data["cardimg"];
        
        // $userId = Flight::request()->data["userId"];
        

        $status = [
            "success" => false,
        
        ];
    
        if( strlen( $cardtitle ) > 0 && strlen( $cardcontent ) > 0 && strlen( $categoryId ) > 0 && strlen( $cardimg ) > 0 ) {
    
            $card = new Card();

            $card->setId($id);
            $card->setCardtitle( $cardtitle );
            $card->setCardcontent( $cardcontent );
            $card->setCategoryId( $categoryId );
            $card->setCardimg( $cardimg );
            // $card->setUserId( $userId );
    
            $bddManager = Flight::get("BddManager");
            $repo = $bddManager->getCardRepository();
            $rowCount = $repo->save( $card );
    
            
            if( $rowCount == 1 ){
                $status["success"] = true;
            }
    
        }
    
        echo json_encode( $status ); 
        
    });


// CARDS PUT updater = modifier les datas d'une card  = en PUT 
Flight::route("PUT /card/@id", function( $id ){
    
        //Pour récuperer des données PUT -> les données sont encodées en json string
        //avec ajax, puis décodées ici en php
        $json = Flight::request()->getBody();
        $_PUT = json_decode( $json , true);//true pour tableau associatif
    
        $status = [
            "success" => false
        ];
    
        if( isset( $_PUT["cardtitle"] ) && isset( $_PUT["cardcontent"] )  && isset( $_PUT["categoryId"]) && isset( $_PUT["cardimg"]) ){
    
            $cardtitle = $_PUT["cardtitle"];
            $cardcontent = $_PUT["cardcontent"];
            $categoryId = $_PUT["categoryId"];
            $cardimg = $_PUT["cardimg"];

            $card = new Card();
    
            $card->setId( $id );
            $card->setCardtitle( $cardtitle );
            $card->setCardcontent( $cardcontent );
            $card->setCategoryId( $categoryId );
            $card->setCardimg( $cardimg );
    
            $bddManager = Flight::get("BddManager");
            $repo = $bddManager->getCardRepository();
            $rowCount = $repo->save( $card );
    
            if( $rowCount == 1 ){
                $status["success"] = true;
            }
    
        }
    
        echo json_encode( $status );
    
    });

// CARD DELETE / Supprimer la carte à l'@id
Flight::route("OPTIONS /card/@id", function(){ echo "{}"; }); // pour angular declaration de la route OPTION

Flight::route("DELETE /card/@id", function( $id ){

    $status = [
        "success" => false
    ];

    $card = new Card();
    $card->setId( $id );

    $bddManager = Flight::get("BddManager");
    $repo = $bddManager->getCardRepository();
    $rowCount = $repo->delete( $card );

    if( $rowCount == 1 ){
        $status["success"] = true;
    }

    echo json_encode( $status );
    
});


// ROUTES USER

// USER LOGIN 

Flight::route("POST /user/login", function(){ // route login user 
    
        $username = Flight::request()->data['username'];
        $uPassword = Flight::request()->data['uPassword'];

        
        $user = new User();
        $user->setUsername ($username);
        $user->setUPassword ($uPassword);
    
        $bddManager = Flight::get("BddManager");
        $repo = $bddManager->getUserRepository();
        $findedUser = $repo->getUserByUsername($user);
        $repo->getAllCardsByUserId($findedUser);
    
        $status = [
            "success" => "",
            "error" => "",
            "user" => ""
        ];
    
        if( $findedUser == false ){
            $status["success"] = false;
            $status["error"] = "identifiant incorrect";
        }
        else if( $findedUser->getUPassword()  != $user->getUPassword()){
            
            $status["success"] = false;
            $status["error"] = "mot de passe incorrect";
        }
        else {
            
            $status["success"] = true;
            $status["user"] = $findedUser;
        }
    
    
        echo json_encode($status); 
    
    });

    // USER REGISTER utilise le registerservice

Flight::route("POST /user/register", function(){ 
    
       

        $param = Flight::request()->data->getData();
        $service = new RegisterService($param);
        $service->launchControls();

        $status = [
            "success" => "",
            "error" => "",
            "user" => ""
        ];


        if($service->getError()){
        
            $status["success"] = false;
            $status["error"] = "il y a des erreurs dans le formulaire d'enregistrement";
        }
        else
        {

        $username = $service->getParams()['username'];
        $uPassword = $service->getParams()['uPassword'];

        $user = new User();
        $user->setUsername ($username);
        $user->setUPassword ($uPassword);
    
        $bddManager = Flight::get("BddManager");
        $repo = $bddManager->getUserRepository();
        $createdUser = $repo->getUserByUsername($user);
    
    
            
            $status["success"] = true;
            $status["user"] = $createdUser;
        }
    
    
        echo json_encode($status); 
    
    });

 //USER GET BY ID / Récupere le user et card du user par son id@id

    Flight::route("GET /user/@id/cards", function( $id ){
        
        $status = [
            "success" => false,
            "user" => ""
        ];

        $user = new User();
        $user->setId( $id );

        $bddManager = Flight::get("BddManager");
        $repoUser = $bddManager->getUserRepository();
        $vuser = $repoUser->getUserById($user);
        $repoUser->getAllCardsByUserId($vuser);

        if( $vuser->getId() != false ){
            $status["success"] = true;
            $status["user"] = $vuser;
            
            
        }

        echo json_encode( $status );

    });

//USER GET BY ID / Récupere le user par son id@id

Flight::route("GET /user/@id", function( $id ){
    
    $status = [
        "success" => false,
        "id" => false
    ];

    $user = new User();
    $user->setId( $id );

    $bddManager = Flight::get("BddManager");
    $repoUser = $bddManager->getUserRepository();
    $vuser = $repoUser->getUserById($user);
   

    if( $vuser != false ){
        $status["success"] = true;
        $status["id"] = $vuser->getId();
        
        
    }

    echo json_encode( $status );

});


Flight::start();