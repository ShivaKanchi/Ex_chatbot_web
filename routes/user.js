const router = require("exprsss").Router();
const { catchErrors } = require("../handlers/errorHandler");
const userController = require("../controllers/userController");



router.post("/login", catchErrors(userController.login));
router.post("/register", catchErrors(userController.register));


module.exports = router;