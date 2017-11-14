<?php
class User extends Model implements JsonSerializable {

    private $username;
    private $uPassword;
    
    private $cards = []; // tableau des cards du user

    function getUsername(){
        return $this->username;
    }

    function getUPassword(){
        return $this->uPassword;
    }


    function setUsername( $username ){
        $this->username = $username;
    }

    function setUPassword( $uPassword ){
        $this->uPassword = $uPassword;
    }

    function addCard(Card $card){
        $this->cards[] = $card;

    }

    function jsonSerialize(){
        return [
            "id" => $this->id,
            "username" => $this->username,
            "uPassword" => $this->uPassword,
            "card" => $this->cards
        ];
    }

    
}