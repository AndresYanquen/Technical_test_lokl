"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var user_controller_1 = require("../controllers/user.controller");
router.post('/signup', user_controller_1.signUp);
router.get('/confirm/:token', user_controller_1.confirm);
router.post('/getUsers', user_controller_1.verifyUser, user_controller_1.getUsersInformation);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJyb3V0ZXMvdXNlci5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvREFBOEI7QUFDOUIsSUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNoQyxrRUFBZ0c7QUFJaEcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsd0JBQU0sQ0FBQyxDQUFDO0FBQy9CLE1BQU0sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUseUJBQU8sQ0FBQyxDQUFBO0FBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLDRCQUFVLEVBQUUscUNBQW1CLENBQUMsQ0FBQTtBQUV6RCxrQkFBZSxNQUFNLENBQUMifQ==