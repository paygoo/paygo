const { Router } = require("express");
const { registerUser, getBalance } = require("../controllers/user-reg");

const router = Router();

// router.get("/regster", regPage);
router.post("/home", registerUser);
router.get("/getBalance", getBalance);

module.exports = router;
