const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userControllers.js");
const authenticate = require('../middleware/authenticate.js');

// API for user registration
router.post("/register", UserController.userRegister);

// API for user login using Email or Username
router.post("/login", UserController.userLogin);

// API for user logout to remove cookies
router.post("/logout", UserController.userLogout);

// API to add a favorite item
router.post('/addfav', authenticate, UserController.addFavorite);

// API to list all favorite items
router.get('/favourites', authenticate, UserController.listFavorites);

// API to get specific favourite item
router.get('/favourite/:favoriteId', authenticate, UserController.getFavorite);

// API to remove a favorite item
router.post('/removefav', authenticate, UserController.removeFavorite);

module.exports = router;
