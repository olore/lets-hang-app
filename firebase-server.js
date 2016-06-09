var FirebaseServer = require('firebase-server');

new FirebaseServer(5555, 'localhost.firebaseio.test', {
  hangs: {
    "-KJoi-IysRgYi8WG1Hmb": {

      "creator": {
        "firstName": "Brian",
        "lastName": "Olore",
        "friends": {
          "0": {"firstName": "TestUser", "lastName": "One"},
          "1": {"firstName": "TestUser", "lastName": "One"}
        }
      },
      "description": "[Test data] My big party",
      "location": "200 North Street",

      "startDate": "2016-06-10T06:00:56-04:00",
      "endDate": "2016-06-10T07:00:56-04:00",

      "statuses": {
        "0": {"accepted": false, "declined": false, "person": {"firstName": "TestUser", "lastName": "One"}},
        "1": {"accepted": false, "declined": false, "person": {"firstName": "TestUser", "lastName": "One"}}
      }
    }
  }
});
