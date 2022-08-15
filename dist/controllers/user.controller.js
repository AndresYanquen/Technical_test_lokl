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
exports.confirm = exports.signUp = void 0;
var json_config_1 = require("../config/json.config");
var mail_config_1 = require("../config/mail.config");
var user_model_1 = require("../models/user.model");
var uuidv4 = require('uuid').v4;
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
                    msg: 'User registered correctly'
                });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                console.log(error_1);
                return [2 /*return*/, res.json({
                        success: false,
                        msg: 'Error while registering user'
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.signUp = signUp;
var confirm = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var token, data, email, code, user, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
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
                if (user === null) {
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
                return [2 /*return*/, res.send({
                        suceess: true,
                        msg: 'User verified succesfully'
                    })];
            case 3:
                error_2 = _a.sent();
                console.log(error_2);
                return [2 /*return*/, res.json({
                        success: false,
                        msg: 'Error confirming user'
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.confirm = confirm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlcnMvdXNlci5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFEQUFpRTtBQUNqRSxxREFBb0Q7QUFDcEQsbURBQTRDO0FBQ3BDLElBQUksTUFBTSxHQUFLLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBcEIsQ0FBcUI7QUFNdkMsSUFBTSxNQUFNLEdBQUcsVUFBTyxHQUFZLEVBQUUsR0FBYTs7Ozs7O2dCQUVuQyxLQUF3QixHQUFHLENBQUMsSUFBSSxFQUEvQixnQkFBSSxFQUFFLEtBQUssV0FBQSxFQUFFLE1BQU0sWUFBQSxDQUFhO2dCQUNWLHFCQUFNLGlCQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxPQUFBLEVBQUMsQ0FBQyxFQUFBOztnQkFBbEQsb0JBQW9CLEdBQUcsU0FBMkI7Z0JBQ3hELElBQUksb0JBQW9CLEVBQUU7b0JBQ3RCLHNCQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUM7NEJBQ1osT0FBTyxFQUFFLEtBQUs7NEJBQ2QsR0FBRyxFQUFFLHFCQUFxQjt5QkFDN0IsQ0FBQyxFQUFBO2lCQUNMO2dCQUNLLElBQUksR0FBRyxNQUFNLEVBQUUsQ0FBQztnQkFFaEIsSUFBSSxHQUFHLElBQUksaUJBQUksQ0FBQyxFQUFDLElBQUksUUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLElBQUksTUFBQSxFQUFDLENBQUMsQ0FBQztnQkFFNUMsS0FBSyxHQUFJLElBQUEseUJBQVcsRUFBQyxJQUFJLENBQUMsTUFBckIsQ0FBc0I7Z0JBRzVCLFFBQVEsR0FBRyx5QkFBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUUzRCx5QkFBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQTtnQkFDekQscUJBQU0sSUFBSSxDQUFDLElBQUksRUFBRSxFQUFBOztnQkFBakIsU0FBaUIsQ0FBQztnQkFDbEIsR0FBRyxDQUFDLElBQUksQ0FBQztvQkFDTCxPQUFPLEVBQUUsSUFBSTtvQkFDYixHQUFHLEVBQUUsMkJBQTJCO2lCQUNuQyxDQUFDLENBQUE7Ozs7Z0JBR0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFLLENBQUMsQ0FBQztnQkFDbkIsc0JBQU8sR0FBRyxDQUFDLElBQUksQ0FBQzt3QkFDWixPQUFPLEVBQUUsS0FBSzt3QkFDZCxHQUFHLEVBQUUsOEJBQThCO3FCQUN0QyxDQUFDLEVBQUE7Ozs7S0FLVCxDQUFBO0FBZ0RPLHdCQUFNO0FBOUNkLElBQU0sT0FBTyxHQUFHLFVBQU8sR0FBWSxFQUFFLEdBQWE7Ozs7OztnQkFFbkMsS0FBSyxHQUFJLEdBQUcsQ0FBQyxNQUFNLE1BQWQsQ0FBZTtnQkFDZCxxQkFBTSxJQUFBLHlCQUFXLEVBQUMsS0FBSyxDQUFDLEVBQUE7O2dCQUEvQixJQUFJLEdBQUcsU0FBd0I7Z0JBRXJDLElBQUcsSUFBSSxLQUFLLElBQUksRUFBQztvQkFDYixzQkFBTyxHQUFHLENBQUMsSUFBSSxDQUFDOzRCQUNaLE9BQU8sRUFBRSxLQUFLOzRCQUNkLEdBQUcsRUFBRSxvQkFBb0I7eUJBQzVCLENBQUMsRUFBQTtpQkFDTDtnQkFFTSxLQUFLLEdBQVUsSUFBSSxNQUFkLEVBQUUsSUFBSSxHQUFJLElBQUksS0FBUixDQUFTO2dCQUVkLHFCQUFNLGlCQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxPQUFBLEVBQUMsQ0FBQyxFQUFBOztnQkFBbEMsSUFBSSxHQUFHLFNBQTJCO2dCQUN4QyxJQUFJLElBQUksS0FBSSxJQUFJLEVBQUU7b0JBQ2Qsc0JBQU8sR0FBRyxDQUFDLElBQUksQ0FBQzs0QkFDWixPQUFPLEVBQUUsS0FBSzs0QkFDZCxHQUFHLEVBQUUscUJBQXFCO3lCQUM3QixDQUFDLEVBQUE7aUJBQ0w7Z0JBRUQsSUFBRyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksRUFBQztvQkFDakIsc0JBQU8sR0FBRyxDQUFDLElBQUksQ0FBQzs0QkFDWixPQUFPLEVBQUUsS0FBSzs0QkFDZCxHQUFHLEVBQUUscUJBQXFCO3lCQUM3QixDQUFDLEVBQUE7aUJBQ0w7Z0JBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFFWixzQkFBTyxHQUFHLENBQUMsSUFBSSxDQUFDO3dCQUNaLE9BQU8sRUFBQyxJQUFJO3dCQUNaLEdBQUcsRUFBRSwyQkFBMkI7cUJBQ25DLENBQUMsRUFBQTs7O2dCQUdGLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBSyxDQUFDLENBQUM7Z0JBQ25CLHNCQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUM7d0JBQ2QsT0FBTyxFQUFFLEtBQUs7d0JBQ2QsR0FBRyxFQUFFLHVCQUF1QjtxQkFDN0IsQ0FBQyxFQUFDOzs7O0tBRVIsQ0FBQTtBQUVhLDBCQUFPIn0=