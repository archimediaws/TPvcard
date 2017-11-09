import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Vcard } from '../class/Vcard';

@Component({
    selector: 'app-vcard',
    templateUrl: '../views/vcard.component.html',
    styleUrls: ['../views/styles/vcards.component.css']
})
export class VcardComponent {

    

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
