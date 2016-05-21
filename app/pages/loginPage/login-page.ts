import {Page} from 'ionic-angular';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {MeService} from "../../services/me-service";
import {Component} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {FirebaseAuth} from "angularfire2/angularfire2";
import {AuthProviders} from "angularfire2/angularfire2";
import {NavController} from "ionic-angular/index";
import {HangListPage} from "../hangListPage/hang-list-page";
import {AuthService} from "../../services/auth";


@Page({
  templateUrl: 'build/pages/loginPage/login-page.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [AuthService]
})

export class LoginPage {

  constructor(
    public auth: AuthService,
    public meService: MeService,
    public nav: NavController

) {

    this.meService.setMe();
  }

}
