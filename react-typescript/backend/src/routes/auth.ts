const express = require("express");
const router = express.Router();
const { sendResponse, isValidEmail } = require("../functions/common");
const {
  models: { User },
} = require("../models");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const { sendEmail } = require("../functions/emailFunctions");
import { Request, Response } from "express";
interface TypedRequestBody<T> extends Request {
  body: T;
}
interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
}

router.post("/login", async (req: TypedRequestBody<{ email: string; password: string }>, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        [Op.and]: [{ email: email }, { password: password }],
      },
      attributes: ["id", "firstName", "lastName", "email"], // Specify the fields you want to retrieve
      raw: true,
    });
    if (user) {
      const time = Date.now();
      const token = jwt.sign({ id: user.id, time: time }, "my_key");

      return sendResponse(res, 200, { ...user, token }, true);
    } else {
      return sendResponse(res, 401, { message: "Invalid username or password" }, true);
    }
  } catch (error) {
    let errormsg: string = "Server error";
    if (error instanceof Error) {
      errormsg = error.message;
    }
    return sendResponse(res, 500, { message: errormsg }, true);
  }
});
router.post("/signup", async (req: TypedRequestBody<SignUpData>, res: Response) => {
  try {
    const { firstName, lastName, email } = req.body;

    if (!email || !isValidEmail(email)) {
      return sendResponse(res, 400, { message: "Email not valied" }, true);
    }
    const userExist = await User.findOne({ where: { email: email } });
    if (userExist) {
      return sendResponse(res, 400, { message: "Email alrady taken" }, true);
    }
    const emailRes = await sendEmail("sign_up", userExist.email);

    const user = await User.create({ firstName, lastName, email, password: emailRes.code });
    return sendResponse(res, 200, { id: user.id, firstName, lastName, email }, true);
  } catch (error) {
    let errormsg: string = "Server error";
    if (error instanceof Error) {
      errormsg = error.message;
    }
    return sendResponse(res, 500, { message: errormsg }, true);
  }
});
router.get("/fogotpassword/:userId", async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const userExist = await User.findOne({ where: { id: id }, row: true });
    if (!userExist) {
      return sendResponse(res, 400, { message: "Invalied User" }, true);
    }
    const emailRes = await sendEmail("reset_password", userExist.email);
    if (emailRes.code) {
      await userExist.update({ password: emailRes.code });
      return sendResponse(res, 200, { message: "Password changed" }, true);
    }
    return sendResponse(res, 400, { message: "Email send error" }, true);
  } catch (error) {
    let errormsg: string = "Server error";
    if (error instanceof Error) {
      errormsg = error.message;
    }
    return sendResponse(res, 500, { message: errormsg }, true);
  }
});
module.exports = router;
