import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firbaseConfig = {
  apiKey: "AIzaSyB0xP3MktTYyEHXi7dvSwRFfzPidcO2mBU",
  projectId: "oyun-bulutu-dc717",
};

firebase.initializeApp(firbaseConfig);

const firestoreRef = firebase.firestore();
const authRef = firebase.auth();

export { firestoreRef, authRef };
