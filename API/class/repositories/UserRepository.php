<?php 
class UserRepository extends Repository {

    function getAllUser(){
        $query = "SELECT * FROM user";
        $result = $this->connection->query( $query );
        $result = $result->fetchAll( PDO::FETCH_ASSOC );

        $users = [];
        foreach( $result as $data ){
            $users[] = new User( $data );
        }

        return $users;  
    }

    function getUserById( User $user ){

        $query = "SELECT * FROM user WHERE id=:id";
        $prep = $this->connection->prepare( $query );
        $prep->execute([
            "id" => $user->getId()
        ]);
        $result = $prep->fetch(PDO::FETCH_ASSOC);

        if( empty( $result ) ){
            return false;
        }
        else {
            return new User( $result );
        }
        
    }

    public function getUserByUsername(User $user){
        $prep = $this->connection->prepare('SELECT * FROM user WHERE username=:username');
        $prep->execute(array(
            'username'=> $user->getUsername()
            
        ));
        $result = $prep->fetch(PDO::FETCH_ASSOC);

        if( empty( $result)){
            return false;
        }
        else{
            return new User($result);
        }

        
    }

    public function getAllCardsByUserId(User $user){
        
                // recupérer l'id du user en cours
                $userId = $user->getId();

                //SELECT product.* FROM product
                //JOIN user_product ON user_product.id_user = 1
                //WHERE product.id = user_product.id_product

                $object = $this->connection->prepare('SELECT card.* FROM card JOIN usercards ON usercards.userId=:userId  WHERE card.id = usercards.cardId');
                $object->execute(array(
                    'userId'=> $userId
                ));
                $cardSuser = $object->fetchAll(PDO::FETCH_ASSOC);
                
                // $arrayObjet = [];
                foreach ($cardSuser as $carduser){
                    // $arrayObjet[] = new Product($productvendor);
                    $card =new Card($carduser);
                    $user->addCard( $card);
                }
       
                // return $arrayObjet;
                
            }


    function save( User $user ){
        if( empty( $user->getId() ) ){
            return $this->insert( $user );
        }
        else {
            return $this->update( $user );
        }
    }

    private function insert( User $user ){

        $query = "INSERT INTO user SET username=:username, uPassword=:uPassword";
        $prep = $this->connection->prepare( $query );
        $prep->execute( [
            "username" => $user->getUsername(),
            "uPassword" => $user->getUPassword()
        ] );
        return $this->connection->lastInsertId();

    }

    private function update( User $user ){

        $query = "UPDATE user SET username=:username, uPassword=:uPassword WHERE id=:id";
        $prep = $this->connection->prepare( $query );
        $prep->execute( [
            "username" => $user->getUsername(),
            "uPassword" => $user->getUPassword(),
            "id" => $user->getId()
        ] );
        return $prep->rowCount();

    }

    function delete( User $user ) {

        $query = "DELETE FROM user WHERE id=:id";
        $prep = $this->connection->prepare( $query );
        $prep->execute([
            "id" => $user->getId()
        ]);
        return $prep->rowCount();

    }

// function getUserById(): User {

// }
// function getProductsByvendeur (Vendor $vendor){
//     $result =$prep->fetchAll();
//     foreach ($result as $data){
//         $product =new Product($data);
//         $vendor->addProduct( $product);
//     }
// }

}