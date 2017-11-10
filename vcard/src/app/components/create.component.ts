import { SelectImg } from './selectImg.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Vcard } from '../class/Vcard';
import { VcardsService } from '../services/vcards.service';


@Component({
    selector: 'app-create',
    templateUrl: '../views/create.component.html',
    styleUrls: ['../views/styles/create.component.css'],
    providers: [VcardsService] 
})
export class CreateComponent {

    public title:string;
    public content:string;
    public img:string;

    constructor( private cardsservice: VcardsService ) {
    
        ;
        
    }

    postCard(){
    this.cardsservice.addUneCard(this.title, this.content, this.img);
    console.log(this.title);
    }

    @Input()
    public color;

    // la valeur des input est définie dans le parent !
    // (donc entrée de la valeur exterieure, on utilise donc @Input() )
    @Input()
    public thevcard: Vcard;

    @Input()
    public index: number;

    // l'evennement 'event' est lancé sur le selecteur lui même pour être utilisé au niveau du parent
    // On fait donc ressortir une valeur au niveau du template parent, on utilise alors @Output
    @Output()
    public event: EventEmitter<number> = new EventEmitter();

    parentRemove() {
        this.event.emit( this.index );
    }

}