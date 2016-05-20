import {Page} from 'ionic-angular';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {MeService} from "../../services/me-service";
import {Component} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {FirebaseAuth} from "angularfire2/angularfire2";
import {AuthProviders} from "angularfire2/angularfire2";
import {NavController} from "ionic-angular/index";
import {HangListPage} from "../hangListPage/hang-list-page";

@Page({
  templateUrl: 'build/pages/loginPage/login-page.html',
  directives: [ROUTER_DIRECTIVES],
})

export class LoginPage {

  constructor(
    public auth: FirebaseAuth,
    public meService: MeService,
    public nav: NavController

) {

    this.meService.setMe();
  }

  login() {
    console.log('login!');
    // This is null before auth
    //console.log(this.auth.getAuth());

    this.auth.login({
      provider: AuthProviders.Twitter
    }).then((authState) => {
      console.log(this.auth.getAuth());
      console.log(authState);
      // .twitter.displayName
      //        .username
      //        .cachedUserProfile (lotsa goodies in here!)
      // .uid
      this.nav.push(HangListPage);
    });
  }
}
