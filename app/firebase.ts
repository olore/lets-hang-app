import {Injectable, Provider} from "@angular/core";

import {FIREBASE_PROVIDERS} from "angularfire2";
import {defaultFirebase} from "angularfire2";

@Injectable()
export class FirebaseConfigWrapper {

  //private static url = 'https://sizzling-inferno-1088.firebaseio.com/';
  private static url = 'ws://localhost.firebaseio.test:5555/';

  static getProviders() {
    return [
      FIREBASE_PROVIDERS,
      defaultFirebase(this.url)
    ];
  }
}
