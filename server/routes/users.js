const  Router = require("express")
const router =  new Router ();
const controller = require('../../server/controllers/usersController')
const {check} = require("express-validator")
const authMiddleware= require("../middlewares/authMiddleware")

router.post('/registers', [
    check("name", "must not be empty").notEmpty(),
    check("password", "password chpetqe 4-ic pakass lini 10-ic avel").isLength({min:4, max:10})
], controller.registers)
router.post('/login', controller.login)
router.get("/users", authMiddleware, controller.getUsers)

module.exports = router