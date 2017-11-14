import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * @title Select in a form
 */
@Component({
  selector: 'img-select',
  templateUrl: '../views/select-form-example.component.html',
})
export class SelectImg {

  selectedValue: string;
 
  imgs = [
    {value:'poke01.jpg', viewValue: 'poke01'},
    {value:'poke02.jpg', viewValue: 'poke02'},
    {value:'poke03.jpg', viewValue: 'poke03'},
    {value:'poke04.jpg', viewValue: 'poke04'},
    {value:'poke05.jpg', viewValue: 'poke05'},
    {value:'poke06.jpg', viewValue: 'poke06'},
    {value:'poke07.jpg', viewValue: 'poke07'}
  ];

  @Input() monimg: string;

  @Output() selectedValueImg = new EventEmitter();

  selectedImg(){
    console.log(this.selectedValue);
    this.selectedValueImg.emit({
     value: this.selectedValue
    });
  }

}