import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCoZSX7XCol2pkpazm2uqiW9dk7tSe7nuY",
    authDomain: "todo-app-21c2f.firebaseapp.com",
    databaseURL: "https://todo-app-21c2f.firebaseio.com",
    storageBucket: "todo-app-21c2f.appspot.com",
    messagingSenderId: "937655622358"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'Alex',
    age: 29
  }
});

// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application'
// });

// firebaseRef.child('app').update({
//   name: 'Todo Application'
// });

// firebaseRef.child('app/version').remove();
// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// }, (err) => {
//   console.log('Error', e);
// });
//
var printLog = (snapshot) => {
  console.log('Value', snapshot.val());
};
//
// firebaseRef.on('value', printLog);
//
// firebaseRef.off(printLog);
//
// firebaseRef.update({isRunning: false});

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push();
// newNoteRef.set({
//   text: 'walk the dog'
// });
//
// var anotherNote = notesRef.push({
//   text: 'feed the cat'
// });
// console.log('Todo id', newNoteRef.key);

var todosRef = firebaseRef.child('todos');
todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Walk the dog'
});

todosRef.push({
  text: 'build new app'
});
