import { Component } from '@angular/core';
import { Vcard } from '../class/Vcard';
import { Color } from '../class/Color';
import { VcardsService } from '../services/vcards.service';

@Component({
    selector: 'app-root',
    templateUrl: '../views/vcards.component.html',
    styleUrls: ['../views/styles/vcards.component.css'],
    providers: [VcardsService] // On défini la liste des services à injecter dans le constructeur
})
export class VcardsComponent {

    public displayForm: boolean = false;
    public notes: Vcard[] = [];

    public search: string = '';

    public color: Color = new Color();

    public selected_note: Vcard;

    constructor( private notesservice: VcardsService ) {
        this.getNotes();
    }

    getNotes() {
        this.notesservice.getAllNotes().then( (data) => {

            for ( const dnote of data.json() ){
                this.addNote( dnote.id, dnote.title, dnote.content, dnote.date );
            }

        } );
    }

    addNote( id: number, title: string, content: string, datestr: string ) {
        const note: Vcard = new Vcard(id, title, content);
        note.setDate( new Date(datestr) );
        this.notes.push( note );
    }

    remove( i: number ) {
        this.notes.splice( i, 1 );
    }

}
