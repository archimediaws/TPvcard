<?php


class NewCardService extends Service
{

    private $params;
    private $error;
    private $card;



    public function getParams()
    {
        return $this->params;
    }
    public function setParams($params)
    {
        $this->params=$params;
    }
    public function getError()
    {
        return $this->error;
    }
    public function setError($error)
    {
        $this->error=$error;
    }
    public function getCard()
    {
        return $this->card;
    }
    public function setCard($card)
    {
        $this->card=$card;
    }
 
   
    public function launchControls()
        {
     
        if(empty($this->params['title'])){
            $this->error['type'] = 'Le titre n\'est pas renseigné';
        }
        
        
        if(empty($this->params['description'])){
            $this->error['description'] = 'Vous n\'avez pas decrit votre carte';
        }

        if(empty($this->params['categorie'])){
            $this->error['categorie'] = 'Vous n\'avez pas selectonné votre categorie ';
        }
           
        if(empty($this->error) == false)
        {
        return $this->error;
        }
        $this->card = $this->insertNewCard();
        
        return $this->card;
        
        }
        public function insertNewCard(){
            
            $userId = $_SESSION['user']->getId();
            
            $objet = $this->connection->prepare('INSERT INTO card SET 
                            userId=:userId,
                            cardtitle=:cardtitle,
                            cardcontent=:cardcontent,
                            categoryId=:categoryId
                           
                            ');
                        $objet->execute(array(
                            'userId'=>$userId,
                            'cardtitle' =>$this->params['title'],
                            'cardcontent'=>$this->params['description'],
                            'categoryId'=>$this->params['categorie']                
                        ));
                        $card = true;
                return $card;
            
        }


}