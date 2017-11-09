import { Pipe, PipeTransform } from '@angular/core';
import { Vcard } from '../class/Vcard';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {

    transform(notes: Vcard[], search: string): Vcard[] {

        if (search === '') return notes;

        const displayedNotes: Vcard[] = [];
        for ( const note of notes ){
            if (  note.title.toLowerCase().indexOf( search.toLowerCase() ) > -1 ||
                note.content.toLowerCase().indexOf( search.toLowerCase() ) > -1 ) {
                displayedNotes.push( note );
            }
        }

        return displayedNotes;

    }

}
