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
    <h6><i> {{ thevcard.date | date:'dd-MM-yyyy' }} </i></h6>
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
            
            for( const dnote of data.json() ){
                
                if ( dnote.id === id){
                    this.thevcard = new Vcard ( dnote.id, dnote.title, dnote.content);
                    
                }
            }

        } );
    }
}
