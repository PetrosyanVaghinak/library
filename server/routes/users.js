const  Router = require("express")
const router =  new Router ();
const controller = require('../../server/controllers/usersController')
const {body} = require("express-validator")
const authMiddleware= require("../middlewares/authMiddleware")
const roleMiddleware= require("../middlewares/roleMiddleware")

router.post('/registers', [
    body("name", "must not be empty").notEmpty(),
    // check("password", "password chpetqe 4-ic pakass lini 10-ic avel").isLength({min:4, max:10})
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 4, max: 32 }).withMessage('Password must be between 4 and 32 characters'),
], controller.registers)
router.post('/login', controller.login)
router.get("/users", roleMiddleware(["ADMIN"]), controller.getUsers)

module.exports = router