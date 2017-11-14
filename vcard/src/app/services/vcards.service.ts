
import { Vcard } from '../class/Vcard';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable() // Ce service pourra s'injecter dans un constructeur
export class VcardsService {

    private url: string = 'http://localhost/EcoleDuNum/Angular/TP/API/';
    // private url: string = 'http://localhost/EcoleDuNum/Angular/TP/API/fakeapi/fakeapi.php';
   

    constructor(private http: Http) {}

    getAllCards(): Promise<any> {

        return this.http.get(this.url+'cards')
            .toPromise();

    }

    
    addUneCard(cardtitle:string, cardcontent:string, cardimg:string, categoryId:number):any {
        const body = {cardtitle: cardtitle, cardcontent: cardcontent, cardimg : cardimg, categoryId : categoryId };
                return this.http.post(this.url+'card', body)
                    .subscribe(
                        res => {
                    console.log(res.json());
                        },
                        err =>{
                    console.log(err);
                        }
                    );
        
            }
    
    // deleteCard(): Promise<any> {

    //     return this.http.get(this.url+'card/'+id)
    //     .toPromise();

    // }
}
