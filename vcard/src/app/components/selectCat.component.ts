import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * @title Select category
 */
@Component({
  selector: 'cat-select',
  templateUrl: '../views/select-cat-example.component.html',
})
export class SelectCat {

  selectedValue: string;
  // selectedValueName: string;
  cats = [
    {value:'1', viewValue: 'catPoke01'},
    {value:'2', viewValue: 'catPoke02'},
    {value:'3', viewValue: 'catPoke03'},
    {value:'4', viewValue: 'catPoke04'}
  ];


  @Output() selectedValueCat = new EventEmitter();

  selectedCatId(){
    this.selectedValueCat.emit({
     value: this.selectedValue
    });
  }

  // @Output() selectedValueCatName = new EventEmitter();

  // selectedCatName(){
  //   this.selectedValueCatName.emit({
  //    value: this.selectedValueName
  //   });
  // }
}