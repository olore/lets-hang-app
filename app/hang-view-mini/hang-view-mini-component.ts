
import {Component, Input} from "angular2/core";

@Component({
  selector: 'hang-view-mini',
  templateUrl: 'build/hang-view-mini/hang-view-mini-component.html'
})

export class HangViewMini {

  @Input()
  hang: any;

  constructor() {
  }
  
}

  