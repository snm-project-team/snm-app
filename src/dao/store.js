import Firebase from './firebase'

export default store = {
  create: storeInfo => {
    Firebase.database().ref('store/' + 1).set({
      StoreInfo: storeInfo
    })
  }
}