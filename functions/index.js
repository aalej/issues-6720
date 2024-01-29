import { initializeApp } from "firebase-admin/app";
import { onRequest } from "firebase-functions/v2/https";
import logger from "firebase-functions/logger";
import camelcaseKeys from "camelcase-keys";

initializeApp();

export const helloWorld = onRequest((request, response) => {
  const camelCase = camelcaseKeys({ "foo-bar": true });
  logger.info("camelCase", camelCase);
  response.send(camelCase);
});
