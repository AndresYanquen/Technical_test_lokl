"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersInformation = exports.verifyUser = exports.confirm = exports.signUp = void 0;
var json_config_1 = require("../config/json.config");
var mail_config_1 = require("../config/mail.config");
var user_model_1 = require("../models/user.model");
var json_config_2 = require("../config/json.config");
var json_config_3 = require("../config/json.config");
var uuidv4 = require('uuid').v4;
var admin_email = process.env.ADMIN_EMAIL || 'andres.yanquen@uptc.edu.co';
var signUp = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name_1, email, shares, alreadyExisitingUser, code, user, token, template, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, name_1 = _a.name, email = _a.email, shares = _a.shares;
                return [4 /*yield*/, user_model_1.User.findOne({ email: email })];
            case 1:
                alreadyExisitingUser = _b.sent();
                if (alreadyExisitingUser) {
                    return [2 /*return*/, res.json({
                            success: false,
                            msg: 'User already exists'
                        })];
                }
                code = uuidv4();
                user = new user_model_1.User({ name: name_1, email: email, shares: shares, code: code });
                token = (0, json_config_1.createToken)(user).token;
                template = mail_config_1.MailService.setTemplate(user.name, token);
                mail_config_1.MailService.sendEmail(user.email, 'Test Email', template);
                return [4 /*yield*/, user.save()];
            case 2:
                _b.sent();
                res.json({
                    success: true,
                    msg: 'User registered properly'
                });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                console.log(error_1);
                return [2 /*return*/, res.json({
                        success: false,
                        msg: "Error while registering user -> ".concat(error_1)
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.signUp = signUp;
var confirm = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var token, data, email, code, user, notificationEmail, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                token = req.params.token;
                return [4 /*yield*/, (0, json_config_1.verifyToken)(token)];
            case 1:
                data = _a.sent();
                if (data === null) {
                    return [2 /*return*/, res.json({
                            success: false,
                            msg: 'Error getting data'
                        })];
                }
                email = data.email, code = data.code;
                return [4 /*yield*/, user_model_1.User.findOne({ email: email })];
            case 2:
                user = _a.sent();
                if (!user) {
                    return [2 /*return*/, res.json({
                            success: false,
                            msg: 'User does not exist'
                        })];
                }
                if (code != user.code) {
                    return [2 /*return*/, res.send({
                            success: false,
                            msg: 'Code does not match'
                        })];
                }
                user.status = true;
                user.save();
                return [4 /*yield*/, mail_config_1.MailService.notificationEmail(user.name, user.email)];
            case 3:
                notificationEmail = _a.sent();
                mail_config_1.MailService.sendEmail(admin_email, 'Confirmation  Email', notificationEmail);
                return [2 /*return*/, res.send({
                        suceess: true,
                        msg: 'User verified succesfully'
                    })];
            case 4:
                error_2 = _a.sent();
                console.log(error_2);
                return [2 /*return*/, res.json({
                        success: false,
                        msg: "Error confirming user -> ".concat(error_2)
                    })];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.confirm = confirm;
var verifyUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var token;
    return __generator(this, function (_a) {
        token = req.header('Authorization');
        if (!token) {
            res.status(401).send({
                error: 'Token is required to authentication'
            });
        }
        if (token === null || token === void 0 ? void 0 : token.startsWith('Bearer ')) {
            token = token.replace('Bearer ', '');
        }
        if (token) {
            json_config_3.jwt.verify(token, json_config_2.secret, function (error, decoded) {
                if (error) {
                    return res.json({
                        message: "Token is not valid -> ".concat(error)
                    });
                }
                else {
                    next();
                }
            });
        }
        return [2 /*return*/];
    });
}); };
exports.verifyUser = verifyUser;
var getUsersInformation = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var verified_users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_model_1.User.find({ status: true, date: { $gte: new Date(req.body.from), $lte: new Date(req.body.until) } })];
            case 1:
                verified_users = _a.sent();
                res.send(verified_users);
                return [2 /*return*/];
        }
    });
}); };
exports.getUsersInformation = getUsersInformation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlcnMvdXNlci5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFEQUFpRTtBQUNqRSxxREFBb0Q7QUFDcEQsbURBQTRDO0FBRzVDLHFEQUE2QztBQUM3QyxxREFBMEM7QUFDbEMsSUFBSSxNQUFNLEdBQUssT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFwQixDQUFxQjtBQUV2QyxJQUFNLFdBQVcsR0FBUyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsSUFBSSw0QkFBNEIsQ0FBQztBQUdsRixJQUFNLE1BQU0sR0FBRyxVQUFPLEdBQVksRUFBRSxHQUFhOzs7Ozs7Z0JBRW5DLEtBQXdCLEdBQUcsQ0FBQyxJQUFJLEVBQS9CLGdCQUFJLEVBQUUsS0FBSyxXQUFBLEVBQUUsTUFBTSxZQUFBLENBQWE7Z0JBQ1YscUJBQU0saUJBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxLQUFLLE9BQUEsRUFBQyxDQUFDLEVBQUE7O2dCQUFsRCxvQkFBb0IsR0FBRyxTQUEyQjtnQkFDeEQsSUFBSSxvQkFBb0IsRUFBRTtvQkFDdEIsc0JBQU8sR0FBRyxDQUFDLElBQUksQ0FBQzs0QkFDWixPQUFPLEVBQUUsS0FBSzs0QkFDZCxHQUFHLEVBQUUscUJBQXFCO3lCQUM3QixDQUFDLEVBQUE7aUJBQ0w7Z0JBQ0ssSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDO2dCQUVoQixJQUFJLEdBQUcsSUFBSSxpQkFBSSxDQUFDLEVBQUMsSUFBSSxRQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUMsQ0FBQyxDQUFDO2dCQUU1QyxLQUFLLEdBQUksSUFBQSx5QkFBVyxFQUFDLElBQUksQ0FBQyxNQUFyQixDQUFzQjtnQkFHNUIsUUFBUSxHQUFHLHlCQUFX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