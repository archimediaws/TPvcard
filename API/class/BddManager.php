<?php 

class BddManager {

    private $cardRepository;
    private $categorieRepository;
    private $userRepository;
    private $connection;

    function __construct(){
        $this->connection = Connection::getConnection();
        $this->cardRepository = new CardRepository( $this->connection );
        $this->categorieRepository = new CategorieRepository( $this->connection );
        $this->userRepository = new UserRepository( $this->connection );
    }

    function getCardRepository(){
        return $this->cardRepository;
    }

    function getCategorieRepository(){
        return $this->categorieRepository;
    }

    function getUserRepository(){
        return $this->userRepository;
    }

}