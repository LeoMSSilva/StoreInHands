import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDpqa6o9aJ-RyajodvSFq7OCvGLt0RrYME',
	authDomain: 'storeinhands.firebaseapp.com',
	projectId: 'storeinhands',
	storageBucket: 'storeinhands.appspot.com',
	messagingSenderId: '356260072884',
	appId: '1:356260072884:web:0e9971cde6a15ca9e6f6e1',
};


if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
  }
