<?php


class CategorieRepository extends Repository
{
    

    public function getCategoryById(Categorie $id){
        
        $object = $this->connection->prepare('SELECT * FROM categories WHERE id=:id ');
        $object->execute(array(
            'id'=>$id->getId()
        ));
        $result = $object->fetch(PDO::FETCH_ASSOC);
        if( empty( $result ) ){
            return false;
        }
        else {
        return new Categorie($result);
        }
    }



    public function getAllCategories(){
        $object = $this->connection->prepare('SELECT * FROM categories');
        $object->execute(array());
        $categories = $object->fetchAll(PDO::FETCH_ASSOC);

        foreach ($categories as $c){
            $arrayObjet[] = new Categorie($c);
        }

        return $arrayObjet;
    }

    public function getAllCardByCategorieId(Categorie $categorie){
        
                // recupérer l'id de categorie en cours
                $catId = $categorie->getId();
                
                $object = $this->connection->prepare('SELECT * FROM card WHERE categoryId=:categoryId');
                $object->execute(array(
                    'categoryId'=> $catId
                ));
                $cardScat = $object->fetchAll(PDO::FETCH_ASSOC);
                $arrayObjet = [];
                foreach ($cardScat as $cardcat){
                    $arrayObjet[] = new Card($cardcat);
                }
        
                return $arrayObjet;
            }

    public function save(Categorie $categories){
        if(empty($categories->getId())){
            return $this->insertCategories($categories);
        }else{
            return $this->updateCategories($categories);
        }
    }



    private function insertCategories(Categorie $categories){
        $query="INSERT INTO categories SET categoryname=:categoryname ";
        $pdo = $this->connection->prepare($query);
        $pdo->execute(array(
            'categoryname'=>$categories->getCategoryname()
            
        ));
        return $pdo->rowCount();
    }

    private function updateCategories(Categorie $categories){
        $query = 'UPDATE categories SET categoryname=:categoryname  WHERE id=:id';
        $pdo = $this->connection->prepare($query);
        $pdo->execute(array(
            'categoryname'=>$categories->getCategoryname()
            
        ));
        return $pdo->rowCount();
    }

  

    public function delete(Categorie $categories){
        $object = $this->connection->prepare('DELETE FROM categories WHERE id=:id');
        $object->execute(array(
            'id'=>$categories->getId()
        ));
        return  $object->rowCount();
    }
}