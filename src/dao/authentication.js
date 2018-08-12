import Firebase from './firebase';

const authentication = {
  signIn: (authInfo) => {
    Firebase.auth().signInWithEmailAndPassword(authInfo.email, authInfo.password)
      .catch(e => console.log(e));
  },
  signUp: (authInfo) => {
    Firebase.auth().createUserWithEmailAndPassword(authInfo.email, authInfo.password)
      .catch(e => console.log(e));
  },
};

export default authentication;
