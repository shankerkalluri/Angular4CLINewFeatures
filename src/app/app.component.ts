import { Component, Renderer2 } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('testState', [
        state('start', style({
            backgroundColor: 'blue'
            })),
        state('final', style({
            backgroundColor: 'red'
            })),
            transition('start => final', animate(300))
        ])
            
  ]
})

export class AppComponent {

    showFirst = true;
    
    constructor(private renderer: Renderer2){}
    
    onChangeBackground(element: HTMLElement){
        this.renderer.setStyle(element, 'background-color', 'red');
    }
 
}
