import { SelectImg } from './selectImg.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Vcard } from '../class/Vcard';
import { VcardsService } from '../services/vcards.service';
import { Color } from '../class/Color';


@Component({
    selector: 'app-create',
    templateUrl: '../views/create.component.html',
    styleUrls: ['../views/styles/create.component.css'],
    providers: [VcardsService] 
})
export class CreateComponent {

    public url: string = "http://localhost/EcoleDuNum/Angular/TP/vcard/src/assets/img/";
    public cardtitle:string;
    public cardcontent:string;
    public cardimg:string;
    public categoryId:number;
    

    constructor( private cardsservice: VcardsService ) {
      
    }

    postCard(){
    this.cardsservice.addUneCard(this.cardtitle, this.cardcontent, this.cardimg, this.categoryId);
    }

    @Input()
    public color;
   

    @Input()
    public thevcard: Vcard;

    @Input()
    public index: number;

    // l'evennement 'event' est lancé sur le selecteur lui même pour être utilisé au niveau du parent
    // On fait donc ressortir une valeur au niveau du template parent, on utilise alors @Output
    // @Output()
    // public event: EventEmitter<number> = new EventEmitter();

    // parentRemove() {
    //     this.event.emit( this.index );
    // }

    myValueImg(event){
        this.cardimg = event.value;
    }

    myValueCat(event){
        this.categoryId = event.value;
    }
}