import Firebase from './firebase';

const store = {
  create: (storeInfo) => {
    Firebase.database().ref(`store/${1}`).set({
      StoreInfo: storeInfo,
    });
  },
};

export default store;
