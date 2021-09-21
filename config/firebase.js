const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  api_key: process.env.FIREBASE_API_KEY,
  auth_domain: process.env.FIREBASE_AUTH_DOMAIN,
  project_id: process.env.FIREBASE_PROJECT_ID,
  storage_bucket: process.env.FIREBASE_STORAGE_BUCKET,
  sender_id: process.env.FIREBASE_MESSAGING_SENDER_ID,
  app_id: process.env.FIREBASE_APP_ID,
};
