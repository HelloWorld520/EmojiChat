var firebase = require("firebase");
firebase.initializeApp({
 serviceAccount: "./FirebaseAccount.json",
  databaseURL: "https://emojichat-fa4db.firebaseio.com/"
});

// Get a database reference to our posts
var db = firebase.database();
var ref = db.ref("server/saving-data/fireblog/posts");

// Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});


// var db = firebase.database();
// var ref = db.ref("chatList");
// var usersRef = ref.child("users");
// usersRef.set({
//   alanisawesome: {
//     date_of_birth: "June 23, 1912",
//     full_name: "Alan Turing"
//   },
//   gracehop: {
//     date_of_birth: "December 9, 1906",
//     full_name: "Grace Hopper"
//   }
// });

// var msgRef = usersRef.push();
// var msgKey = msgRef.key;
// var payload = {};
// var message = {
//   text:'Hi gays'
// };
//
// payload['userMessages/' + msgKey] = message;
// payload['logs/' + msgKey] = message;
// usersRef.update(payload);


// var ref = firebase.database().ref('chatList');
// var listRef = ref.child('logs');
// 清空该节点数据
// listRef.set(null);
//
// var userMessages = ref.child('userMessages');
// userMessages.set(null);



// 更新节点数据,如果没有该节点,会自动创建
// listRef.update({
//   'messages/some/child':1,
//   'messages/another/child':2,
// })

// var megRef = listRef.push();
// var msgKey = megRef.key;
// var payload = {};
// var message = {
//   text:'hey guys'
// };
// payload['userMessages/' + msgKey] = message;
// payload['logs/' + msgKey] = message;
// ref.update(payload);

// ref.root.once('value')
//   .then(function(snap) {
//     console.log(snap.key,"\n\n");
//     console.log(snap.ref.toString(),"\n\n");
//     console.log(snap.val(),"\n\n");
// });
