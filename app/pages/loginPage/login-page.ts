import {Page} from 'ionic-angular';
import {MeService} from "../../services/me-service";
import {HangListPage} from "../hangListPage/hang-list-page";
import {NavController} from "ionic-angular/index";


@Page({
  templateUrl: 'build/pages/loginPage/login-page.html'
})

export class LoginPage {

  constructor(
    public nav: NavController,
    public meService: MeService
  ) {

    this.meService.setMe();
  }

  login() {
    this.nav.push(HangListPage)
  }
}
