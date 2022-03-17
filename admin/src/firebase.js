import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCK6rLwfzdQJWd2vJLLgmmlTcOFAxRAJMM",
  authDomain: "streaming-vod.firebaseapp.com",
  projectId: "streaming-vod",
  storageBucket: "streaming-vod.appspot.com",
  messagingSenderId: "361061304569",
  appId: "1:361061304569:web:9134557506381abb5b7a28"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
