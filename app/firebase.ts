import {Injectable} from "angular2/core";
import {Provider} from "angular2/core";

import {FIREBASE_PROVIDERS} from "angularfire2/angularfire2";
import {defaultFirebase} from "angularfire2/angularfire2";

@Injectable()
export class FirebaseConfigWrapper {

  private static url = 'https://sizzling-inferno-1088.firebaseio.com/';

  static getProviders() {
    return [
      FIREBASE_PROVIDERS,
      defaultFirebase(this.url)
    ];
  }
}
