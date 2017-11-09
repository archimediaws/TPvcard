import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Directive( {
    selector: '[appHighlight]'
})
export class HighlightDirective {

    private $element: JQuery;

    @Input('appHighlight') highlightcolor: string;

    constructor( el: ElementRef ) {
        this.$element = $(el.nativeElement);
    }

    @HostListener('mouseenter') onmouseenter() {
        this.$element.css('color', this.highlightcolor);
    }

    @HostListener('mouseleave') onmouseleave() {
        this.$element.css('color', 'inherit');
    }

}
