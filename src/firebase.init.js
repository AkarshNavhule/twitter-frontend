import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0Ce2rMmP4Rym7rPIRryV2Wf_Ef1NYTmw",
  authDomain: "twitterclone-1c059.firebaseapp.com",
  projectId: "twitterclone-1c059",
  storageBucket: "twitterclone-1c059.appspot.com",
  messagingSenderId: "1041818263232",
  appId: "1:1041818263232:web:9bf28afc0f8dc95c4cd725",
  measurementId: "G-DJYG4R7RWD"
};

const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;