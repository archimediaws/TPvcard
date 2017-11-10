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

    // public search: string = '';

    public color: Color = new Color();

    public selected_card: Vcard;

    constructor( private cardsservice: VcardsService ) {
        this.getCards();
    }

    getCards() {
        this.cardsservice.getAllCards().then( (data) => {

            for ( const dcard of data.json() ){
                this.addCard( dcard.id, dcard.title, dcard.content, dcard.img );
            }

        } );
    }

    addCard( id: number, title: string, content: string, img:string ) {
        const card: Vcard = new Vcard(id, title, content, img);
        
        this.vcards.push( card );
    }

    remove( i: number ) {
        this.vcards.splice( i, 1 );
    }

}
