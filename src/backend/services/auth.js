import firebase from 'firebase';
import 'firebase/auth';
import { Alert } from 'react-native';

export const listen = (list) => firebase.auth().onAuthStateChanged(list);

export const signUp = (email, password) =>
	firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(() => Alert.alert('Usuario registrado com sucesso'))
		.catch((e) => Alert.alert(e));

export const signIn = (email, password) =>
	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(() => Alert.alert('Usuario logado com sucesso'))
		.catch((e) => Alert.alert(e));

export const signOut = () =>
	firebase
		.auth()
		.signOut()
		.then(() => Alert.alert('Usuario deslogado com sucesso'))
		.catch((e) => Alert.alert(e));
