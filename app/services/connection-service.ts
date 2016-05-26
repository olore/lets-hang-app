import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";

@Injectable()
export class ConnectionService {

  constructor() {
  }

  isConnected() {
    var connectedRef = new Firebase("https://sizzling-inferno-1088.firebaseio.com/.info/connected");
    return Observable.create(observer => {
      connectedRef.on("value", (snap) => {
        if (snap.val() === true) {
          observer.next(true);
        } else {
          observer.next(false);
        }
      })
    });
  }
}