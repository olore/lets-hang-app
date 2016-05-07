import {Injectable} from "angular2/core";
import {DatePicker} from 'ionic-native';


@Injectable()
export default class DateGrabberService {

  public getDate(initDate: Date) {
    return DatePicker.show({
      date: initDate,
      mode: 'datetime'
    }).then(function(date: Date) {
      console.log("Got date: ", date);
      return date;
    });

  }
}

