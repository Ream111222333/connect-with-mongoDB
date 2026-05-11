const express = require("express");
const router = express.Router();

const {
    home,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
} = require("../controllers/userController");

router.get("/", home);
router.get("/users", getUsers);
router.post("/users", createUser);
router.post("/users/:id/update", updateUser);
router.post("/users/:id/delete", deleteUser);

module.exports = router;