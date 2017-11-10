
export class Vcard {
    
        
        public id:number;
        public title: string;
        public img:string;
        public content: string;
        
    
        constructor( id: number, title: string, content: string, img:string ) {
    
           
            this.id = id,
            this.title = title;
            this.content = content;
            this.img = img;
        }  
    
        getTitle(): string {
            return this.title;
        }
    
        getContent(): string {
            return this.content;
        }
    
        getImg(): string {
            return this.img;
        }
    
    }
    