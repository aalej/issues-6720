import { initializeApp } from "firebase-admin/app";
import { onRequest } from "firebase-functions/v2/https";
initializeApp();

export const helloWorld = onRequest((request, response) => {
  response.send("helloWorld");
});
