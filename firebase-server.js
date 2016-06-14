var FirebaseServer = require('firebase-server');

new FirebaseServer(5555, 'localhost.firebaseio.test', {
  hangs: {
    "one": {

      "accepted": true,
      "approved": true,
      "creator": {
        "firstName": "Bill",
        "lastName": "Smith"
      },
      "description": "Bill's hangout",
      "location": "Bill's house",

      "startDate": "2016-06-10T06:00:56-04:00",
      "endDate": "2016-06-10T07:00:56-04:00",

      "statuses": {
        "0": {
          "accepted": false, "declined": false,
          "person": {"firstName": "Brian", "lastName": "Olore"}
        },
        "1": {"accepted": false, "declined": false,
          "person": {"firstName": "TestUser", "lastName": "One"}
        }
      }
    },

    "-KJoi-IysRgYi8WG1Hmb": {

      "accepted": true,
      "approved": true,
      "creator": {
        "firstName": "Brian",
        "lastName": "Olore"
      },
      "description": "[Test data] My big party",
      "location": "200 North Street",

      "startDate": "2016-06-10T06:00:56-04:00",
      "endDate": "2016-06-10T07:00:56-04:00",

      "statuses": {
        "0": {"accepted": false, "declined": false, "person": {"firstName": "Brian", "lastName": "Olore"}},
        "1": {"accepted": false, "declined": false, "person": {"firstName": "TestUser", "lastName": "One"}}
      }
    }
  }
});
