 import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'search-form',
  template: `
  <form class="example-form">
  <mat-form-field class="example-full-width">
    <input name="search" matInput placeholder="Recherche" [(ngModel)]="search" (ngModelChange)="sendEvent()" >
  </mat-form-field>
</form>
    `,
    styleUrls: ['../views/styles/searchform.component.css']
})
export class SearchFormComponent {
  
    public search:string ="";
    

    @Output() searchChange: EventEmitter<string> = new EventEmitter(); 

    sendEvent(){
        this.searchChange.emit(this.search);
    }
}