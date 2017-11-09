export class Vcard {
    
        
        public id:number;
        public title: string;
        public content: string;
        public date: Date;
    
        constructor( id: number, title: string, content: string ) {
    
           
            this.id = id,
            this.title = title;
            this.content = content;
            this.date = new Date();
        }
    
        getTitle(): string {
            return this.title;
        }
    
        getContent(): string {
            return this.content;
        }
    
        setDate( date: Date ) {
            this.date = date;
        }
    
    }
    