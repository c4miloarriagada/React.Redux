const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();

const {
  userCreate,
  userLogin,
  tokenValidation,
} = require("../controllers/auth");
const { fieldValidator } = require("../middlewares/fieldValidator");

router.post(
  "/new",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check("password", "Password need at least 6 characters").isLength({
      min: 6,
    }),
    fieldValidator,
  ],
  userCreate
);

router.post(
  "/",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password need at least 6 characters").isLength({
      min: 6,
    }),
    fieldValidator,
  ],
  userLogin
);

router.get("/renew", tokenValidation);

module.exports = router;
