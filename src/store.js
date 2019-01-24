import { createStore, combineReducers, compose } from 'redux';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore,firestoreReducer } from 'redux-firestore';
//Reducers
import notifyReducer from './reducers/notifyReducer';
import settingsReducer from './reducers/settingsReducer';

const firebaseConfig = {
  apiKey: "AIzaSyD3Zc6bzjGkVebInVeCOOJUuMenvCghPkU",
  authDomain: "clientpanel-6ee4c.firebaseapp.com",
  databaseURL: "https://clientpanel-6ee4c.firebaseio.com",
  projectId: "clientpanel-6ee4c",
  storageBucket: "clientpanel-6ee4c.appspot.com",
  messagingSenderId: "429890900904"
};

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

//Init firebase instance
firebase.initializeApp(firebaseConfig);
//Init firestore
// const firestore = firebase.firestore();

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore)

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify: notifyReducer,
  settings: settingsReducer
});

if(localStorage.getItem('settings') == null) {
  const defaultSettings = {
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: false,
    allowRegistration: false
  }
  localStorage.setItem('settings', JSON.stringify(defaultSettings));
}

const initialState = {settings: JSON.parse(localStorage.getItem('settings'))};

const store = createStoreWithFirebase(rootReducer, initialState, compose(
  reactReduxFirebase(firebase),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;

