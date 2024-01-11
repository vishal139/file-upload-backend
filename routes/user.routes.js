import express from "express";
import * as userControllers from "../controllers/user.controllers.js";
import upload from "../middleware/uploadFile.js";

const router = express.Router();

router
  .route("/")
  .get(userControllers.getUser)
  .post(upload.single("resume"), userControllers.createUser);

export default router;
