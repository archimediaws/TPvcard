import { Pipe, PipeTransform } from '@angular/core';
import { Vcard } from '../class/Vcard';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {

    transform(cards: Vcard[], search: string): Vcard[] {

        if (search === '') return cards;

        const displayedCards: Vcard[] = [];
        for ( const card of cards ){
            if (  card.cardtitle.toLowerCase().indexOf( search.toLowerCase() ) > -1 ||
                card.cardcontent.toLowerCase().indexOf( search.toLowerCase() ) > -1 
            
            ) {
                displayedCards.push( card );
            }
        }

        return displayedCards;

    }

}
