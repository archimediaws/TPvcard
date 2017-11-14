<?php 
class CardRepository extends Repository {

    function getAll(){
        $query = "SELECT * FROM card";
        $result = $this->connection->query( $query );
        $result = $result->fetchAll( PDO::FETCH_ASSOC );

        $products = [];
        foreach( $result as $data ){
            $cards[] = new Card( $data );
        }

        return $cards;  
    }

    function getById( Card $card ){

        $query = "SELECT * FROM card WHERE id=:id";
        $prep = $this->connection->prepare( $query );
        $prep->execute([
            "id" => $product->getId()
        ]);
        $result = $prep->fetch(PDO::FETCH_ASSOC);

        if( empty( $result ) ){
            return false;
        }
        else {
            return new Card( $result );
        }
        
    }



    function save( Card $card ){
        if( empty( $card->getId() ) ){
            return $this->insert( $card );
        }
        else {
            return $this->update( $card );
        }
    }

    private function insert( Card $card ){

        $query = "INSERT INTO card SET cardtitle=:cardtitle, cardcontent=:cardcontent, categoryId=:categoryId, cardimg=:cardimg  ";
        $prep = $this->connection->prepare( $query );
        $prep->execute( [
            "cardtitle" => $card->getCardtitle(),
            "cardcontent" => $card->getCardcontent(),
            "categoryId" => $card->getCategoryId(),
            "cardimg" => $card->getCardimg()
        ] );
        return $this->connection->lastInsertId();

    }

    private function update( Card $card ){

        $query = "UPDATE card SET cardtitle=:cardtitle, cardcontent=:cardcontent, categoryId=:categoryId,  cardimg=:cardimg WHERE id=:id";
        $prep = $this->connection->prepare( $query );
        $prep->execute( [
            "cardtitle" => $card->getCardtitle(),
            "cardcontent" => $card->getCardcontent(),
            "categoryId" => $card->getCategoryId(),
            "cardimg" => $card->getCardimg(),
            "id" => $card->getId()
        ] );
        return $prep->rowCount();

    }

    function delete( Card $card ) {

        $query = "DELETE FROM card WHERE id=:id";
        $prep = $this->connection->prepare( $query );
        $prep->execute([
            "id" => $card->getId()
        ]);
        return $prep->rowCount();

    }

  
}