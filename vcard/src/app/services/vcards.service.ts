
import { Vcard } from '../class/Vcard';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable() // Ce service pourra s'injecter dans un constructeur
export class VcardsService {

    // private url: string = 'http://localhost/EcoleDuNum/Angular/TP/API/';
    private url: string = 'http://localhost/EcoleDuNum/Angular/TP/API/fakeapi/fakeapi.php';
   

    constructor(private http: Http) {}

    getAllCards(): Promise<any> {

        return this.http.get(this.url)
            .toPromise();

    }

    
    addUneCard(title:string, content:string, img:string):any {
        const body = {title: title, content: content, img : img};
                return this.http.post(this.url, body)
                    .subscribe(
                        res => {
                    console.log(res);
                        },
                        err =>{
                    console.log(err);
                        }
                    );
        
            }

}
