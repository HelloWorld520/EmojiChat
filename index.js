var firebase = require("firebase");
firebase.initializeApp({
 serviceAccount: "./FirebaseAccount.json",
  databaseURL: "https://emojichat-fa4db.firebaseio.com/"
});



var ref = firebase.database().ref('chatList');
var listRef = ref.child('memeber');
// 清空该节点数据
// listRef.set(null);

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

ref.root.once('value')
  .then(function(snap) {
    console.log(snap.key,"\n\n");
    console.log(snap.ref.toString(),"\n\n");
    console.log(snap.val(),"\n\n");
});
