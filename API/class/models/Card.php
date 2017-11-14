<?php
class Card extends Model implements JsonSerializable {

    private $cardtitle;
    private $cardcontent;
    private $categoryId;
    private $cardimg;

    // GETTER

    function getCardtitle(){
        return $this->cardtitle;
    }

    function getCardContent(){
        return $this->cardcontent;
    }


    function getCategoryId(){
        return $this->categoryId;
    }

    function getCardimg(){
        return $this->cardimg;
    }
    // SETTER

    function setCardtitle( $cardtitle ){
        $this->cardtitle = $cardtitle;
    }

    function setCardcontent( $cardcontent ){
        $this->cardcontent = $cardcontent;
    }


    function setCategoryId( $categoryId){
        $this->categoryId = $categoryId;
    }

    function setCardimg( $cardimg ){
        $this->cardimg = $cardimg;
    }

    // JSON SERIALIZE 

    function jsonSerialize(){
        return [
            "id" => $this->id,
            "cardtitle" => $this->cardtitle,
            "cardcontent" => $this->cardcontent,
            "categoryId" => $this->categoryId,
            "cardimg" => $this->cardimg
        ];
    }

}