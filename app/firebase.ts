import {Injectable, Provider} from "@angular/core";

import {FIREBASE_PROVIDERS} from "angularfire2";
import {defaultFirebase} from "angularfire2";

@Injectable()
export class FirebaseConfigWrapper {

  //static host: string = 'sizzling-inferno-1088.firebaseio.com/';
  static host: string = 'localhost.firebaseio.test:5555/';

  static getWSUrl() {
    if (FirebaseConfigWrapper.host.includes('localhost')) {
      return 'ws://' + FirebaseConfigWrapper.host
    } else {
      return 'https://' + FirebaseConfigWrapper.host
    }
  }
  static getHttpUrl() {
    if (FirebaseConfigWrapper.host.includes('localhost')) {
      return 'http://' + FirebaseConfigWrapper.host
    } else {
      return 'https://' + FirebaseConfigWrapper.host
    }
  }

  static getProviders() {
    return [
      FIREBASE_PROVIDERS,
      defaultFirebase(FirebaseConfigWrapper.getHttpUrl())
    ];
  }
}
