import {Injectable} from "angular2/core";
import {Provider} from "angular2/core";

import {
  defaultFirebase, 
  FIREBASE_PROVIDERS,
  firebaseAuthConfig,
  AuthProviders,
  AuthMethods
} from "angularfire2/angularfire2";

@Injectable()
export class FirebaseConfigWrapper {

  private static url = 'https://sizzling-inferno-1088.firebaseio.com/';

  static getProviders() {
    return [
      FIREBASE_PROVIDERS,
      defaultFirebase(this.url),
      firebaseAuthConfig({
          provider: AuthProviders.Twitter,
          method: AuthMethods.Popup,
          remember: 'default',
          scope: ['email']
        })
    ];
  }
}
