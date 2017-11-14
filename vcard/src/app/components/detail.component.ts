import {VcardsService} from '../services/vcards.service';
import { ActivatedRoute } from '@angular/router';
import {Vcard} from '../class/Vcard';
import { Component } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-detail',
    template: `
    <div *ngIf="thevcard">
    <h4> {{ thevcard.title | uppercase }} </h4>
    <p> {{ thevcard.content | lowercase }} </p>
    <h6><i> {{ thevcard.img }} </i></h6>
    </div>
   `,
   providers: [VcardsService] // on injecte le service 
})
export class DetailComponent {

    thevcard: Vcard;


    constructor( private route: ActivatedRoute, private service: VcardsService){

       const id: number =  parseInt(this.route.snapshot.paramMap.get('id'), 10);
        this.getNote( id);

    }

    getNote( id: number){

        this.service.getAllCards().then( (data) =>{
            
            for( const dcard of data.json() ){
                
                if ( dcard.id === id){
                    this.thevcard = new Vcard ( dcard.id, dcard.title, dcard.content, dcard.img, dcard.cat);
                    
                }
            }

        } );
    }
}
