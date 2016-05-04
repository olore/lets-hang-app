import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {RouteConfig} from "angular2/router";
import {LoginPage} from "./pages/loginPage/login-page";
import {CreateHangPage} from "./pages/createHangPage/create-hang-page";


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {
    // http://ionicframework.com/docs/v2/api/config/Config/
    // http://mcgivery.com/understanding-ionic-2-app/
    pageTransition: 'ios'
  } 
})

@RouteConfig([
  { path: '/', name: 'Root', component: LoginPage },
  { path: '/hang/create', name: 'HangCreate', component: CreateHangPage }
])

export class MyApp {
  rootPage: any = LoginPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

