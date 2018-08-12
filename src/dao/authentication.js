import Firebase from './firebase'

export default authentication = {
  signIn: authInfo => {
    console.log(authInfo)
    Firebase.auth().signInWithEmailAndPassword(authInfo.email, authInfo.password)
      .then(authData => console.log(authData))
      .catch(e => console.log(e))
  },
  signUp: authInfo => {
    console.log(authInfo)
    Firebase.auth().createUserWithEmailAndPassword(authInfo.email, authInfo.password)
      .then(authData => console.log(authData))
      .catch(e => console.log(e))
  }
}