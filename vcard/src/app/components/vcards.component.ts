import { Component } from '@angular/core';
import { Vcard } from '../class/Vcard';
import { Color } from '../class/Color';
import { VcardsService } from '../services/vcards.service';

@Component({
    selector: 'app-vcards',
    templateUrl: '../views/vcards.component.html',
    styleUrls: ['../views/styles/vcards.component.css'],
    providers: [VcardsService] // On défini la liste des services à injecter dans le constructeur
})
export class VcardsComponent {

    // public displayForm: boolean = false;
    public vcards: Vcard[] = [];

    public search: string = '';

    public color: Color = new Color();

    public selected_card: Vcard;

    constructor( private cardsservice: VcardsService ) {
        this.getCards();
    }

    getCards() {
        this.cardsservice.getAllCards().then( (data) => {
        console.log(data);
            for ( const dcard of data.json() ){
                this.addCard( dcard.id, dcard.cardtitle, dcard.cardcontent, dcard.cardimg, dcard.categoryId );
            }

        } );
    }

    addCard( id: number, cardtitle: string, cardcontent: string, cardimg:string, categoryId:number ) {
        const card: Vcard = new Vcard(id, cardtitle, cardcontent, cardimg, categoryId);
        
        this.vcards.push( card );
    }

    remove( i: number ) {
        this.vcards.splice( i, 1 );
    }

}
