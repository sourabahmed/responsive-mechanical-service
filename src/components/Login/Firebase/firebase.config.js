console.log(process.env);
const firebaseConfig = {

  // apiKey: "AIzaSyB-RlqlTjG-YbicYZx_y0yG_2Bi4WeazgM",
  // authDomain: "mechanical-service.firebaseapp.com",
  // projectId: "mechanical-service",
  // storageBucket: "mechanical-service.appspot.com",
  // messagingSenderId: "754920828609",
  // appId: "1:754920828609:web:c8315070e408eec9c4ae40"

    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDERID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
  };
  export default firebaseConfig;