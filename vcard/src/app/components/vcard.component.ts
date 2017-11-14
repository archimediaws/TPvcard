import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Vcard } from '../class/Vcard';
import { VcardsService } from '../services/vcards.service';

@Component({
    selector: 'app-vcard',
    templateUrl: '../views/vcard.component.html',
    styleUrls: ['../views/styles/vcard.component.css'],
    providers: [VcardsService] 
})
export class VcardComponent {

    
    constructor( private cardsservice: VcardsService ) {
        
      }

    @Input()
    public color;

    // la valeur des input est définie dans le parent !
    // (donc entrée de la valeur exterieure, on utilise donc @Input() )
    @Input()
    public thevcard: Vcard;

   
    @Output()
    public event: EventEmitter<number> = new EventEmitter();

    // remove() {
    //     let id = this.thevcard.id;
    //     this.event.emit(id );

    // }
    
    deleteCard(){
            let id = this.thevcard.id;
            this.cardsservice.deleteUneCard(id);
            this.event.emit(id );
            
        }
        
      // @Input()
    // public index: number;

    // l'evennement 'event' est lancé sur le selecteur lui même pour être utilisé au niveau du parent
    // On fait donc ressortir une valeur au niveau du template parent, on utilise alors @Output
    // @Output()
    // public event: EventEmitter<number> = new EventEmitter();

    // parentRemove() {
    //     this.event.emit( this.index );
    // }

    // // updateCard(){
    // //     this.cardsservice.addUneCard(this.cardtitle, this.cardcontent, this.cardimg, this.categoryId);
    // //     }   
}
