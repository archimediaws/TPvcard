
export class Vcard {
    
        
        public id:number;
        public cardtitle: string;
        public cardimg:string;
        public cardcontent: string;
        public categoryId:number;
        
    
        constructor( id: number, cardtitle: string, cardcontent: string, cardimg:string, categoryId:number) {
    
           
            this.id = id,
            this.cardtitle = cardtitle;
            this.cardcontent = cardcontent;
            this.cardimg = cardimg;
            this.categoryId = categoryId;
        }  
    
        getCardtitle(): string {
            return this.cardtitle;
        }
    
        getCardcontent(): string {
            return this.cardcontent;
        }
    
        getCardimg(): string {
            return this.cardimg;
        }

        getCategoryId(): number {
            return this.categoryId;
        }
    }
    