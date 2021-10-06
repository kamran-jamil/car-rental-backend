const { initializeApp } = require("firebase/app");
const {
  api_key,
  auth_domain,
  project_id,
  storage_bucket,
  sender_id,
  app_id,
} = require("../config/firebase");

const firebaseConfig = {
  apiKey: api_key,
  authDomain: auth_domain,
  projectId: project_id,
  storageBucket: storage_bucket,
  messagingSenderId: sender_id,
  appId: app_id,
};

initializeApp(firebaseConfig);
