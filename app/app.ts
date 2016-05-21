import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {RouteConfig} from "angular2/router";
import {LoginPage} from "./pages/loginPage/login-page";
import {CreateHangPage} from "./pages/createHangPage/create-hang-page";
import {HangListPage} from "./pages/hangListPage/hang-list-page";

import {MeService} from "./services/me-service";
import {HangListService} from "./pages/hangListPage/hang-list-service";
import {FirebaseConfigWrapper} from "./firebase";
import {AuthHttp} from "angular2-jwt/angular2-jwt";
import {AuthConfig} from "angular2-jwt/angular2-jwt";
import {Http} from "angular2/http";
import {provide} from "angular2/core";

@App({

  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {
    // http://ionicframework.com/docs/v2/api/config/Config/
    // http://mcgivery.com/understanding-ionic-2-app/
    pageTransition: 'ios'

  },
  providers: [
    MeService,
    HangListService,
    FirebaseConfigWrapper.getProviders(),
    provide(AuthHttp, {
      useFactory: (http) => {
        return new AuthHttp(new AuthConfig(), http);
      },
      deps: [Http]
    })
  ]
})

@RouteConfig([
  { path: '/', name: 'Root', component: LoginPage },
  { path: '/hang/create', name: 'HangCreate', component: CreateHangPage },
  { path: '/hang/list', name: 'HangList', component: HangListPage }
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
