
import { Vcard } from '../class/Vcard';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable() // Ce service pourra s'injecter dans un constructeur
export class VcardsService {

    private url: string = 'http://localhost/EcoleDuNum/Angular/angularapi/fakeapi.php';

    constructor(private http: Http) {}

    getAllNotes(): Promise<any> {

        return this.http.get(this.url)
            .toPromise();

    }

    
    // adduneNote(): Promise<any> {
    //     const body = {title: 'Test'};
    //             return this.http.post(this.url, body)
    //                 .toPromise();
        
    //         }

}
