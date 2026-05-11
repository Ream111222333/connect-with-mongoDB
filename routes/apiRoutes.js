const express = require("express");
const router = express.Router();

const {
  apiGetUsers,
  apiGetUser,
  apiCreateUser,
  apiUpdateUser,
  apiDeleteUser,
} = require("../controllers/userController");

router.get("/users", apiGetUsers);
router.get("/users/:id", apiGetUser);
router.post("/users", apiCreateUser);
router.put("/users/:id", apiUpdateUser);
router.delete("/users/:id", apiDeleteUser);

module.exports = router;
