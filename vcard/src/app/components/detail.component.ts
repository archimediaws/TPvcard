import {VcardsService} from '../services/vcards.service';
import { ActivatedRoute } from '@angular/router';
import {Vcard} from '../class/Vcard';
import { Component } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-detail',
    templateUrl:'../views/detail.component.html',
   providers: [VcardsService] // on injecte le service 
})
export class DetailComponent {

    public thevcard: Vcard;
    
    public test : string = "test";
    

    constructor( private route: ActivatedRoute, private service: VcardsService){

       const id: number =  parseInt(this.route.snapshot.paramMap.get('id'));
        this.getCard( id);
        
    }
    
    getCard( id: number){

        this.service.getAllCards().then( (data) =>{
            
            for( const dcard of data.json() ){
                console.log(data.json());
                if ( parseInt(dcard.id) === id ){
                    this.thevcard = new Vcard ( dcard.id, dcard.cardtitle, dcard.cardcontent, dcard.cardimg, dcard.categoryId);
                    
                }
            }
            
        } );
    }
    
}
