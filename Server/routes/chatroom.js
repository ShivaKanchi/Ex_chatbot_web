const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandler");
const chatroomController = require("../controllers/chatroomController");

const auth = require("../middleware/auth");
router.post("/", catchErrors(chatroomController.createChatroom));



module.exports = router;    