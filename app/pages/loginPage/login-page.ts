import {Page} from 'ionic-angular';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {MeService} from "../../services/me-service";
import {Component} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {AngularFire} from "angularfire2";

@Page({
  templateUrl: 'build/pages/loginPage/login-page.html',
  directives: [ROUTER_DIRECTIVES],
})

export class LoginPage {

  constructor(
    public meService: MeService) {

    this.meService.setMe();
  }

}
