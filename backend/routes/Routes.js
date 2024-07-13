const express = require("express");

const router = express.Router();

const UserController = require("../controller/UserController");

router.post("/create", UserController.createUser);
router.get("/", UserController.getAllUser);
router.get("/get/:id", UserController.getOneUser);
router.put("/update/:id", UserController.updateUser);
router.delete("/delete/:id", UserController.deleteUser);

module.exports = router;
