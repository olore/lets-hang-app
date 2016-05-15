import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'foo-bar',
  providers: [],
  templateUrl: 'build/pages/loginPage/foo-bar.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([

])
export class FooBar {
  items: Observable<any[]>;
  constructor(af: AngularFire) {
    // create a list at /items
    this.items = af.list('/items');
  }
}