import {Component} from '@angular/core';

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
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}