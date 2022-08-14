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
var json_config_1 = require("../config/json.config");
var uuidv4 = require('uuid').v4;
var User = require('../models/user.model');
var main = require('../config/mail.config');
var signUp = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name_1, email, shares, user, code, token, template, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, name_1 = _a.name, email = _a.email, shares = _a.shares;
                return [4 /*yield*/, User.findOne({ email: email })];
            case 1:
                user = (_b.sent()) || null;
                if (user !== null) {
                    return [2 /*return*/, res.json({
                            success: false,
                            msg: 'User already exists'
                        })];
                }
                code = uuidv4();
                user = new User({ name: name_1, email: email, code: code });
                token = (0, json_config_1.createToken)(user);
                template = main.setTemplate(user.name, user.email);
                main.sendEmail(user.email, 'Test Email', template);
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
exports.default = signUp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlcnMvdXNlci5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EscURBQWlFO0FBQ3pELElBQUksTUFBTSxHQUFLLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBcEIsQ0FBcUI7QUFDdkMsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUE7QUFDNUMsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUE7QUFFN0MsSUFBTSxNQUFNLEdBQUcsVUFBTyxHQUFZLEVBQUUsR0FBYTs7Ozs7O2dCQUVuQyxLQUF3QixHQUFHLENBQUMsSUFBSSxFQUEvQixnQkFBSSxFQUFFLEtBQUssV0FBQSxFQUFFLE1BQU0sWUFBQSxDQUFhO2dCQUN2QixxQkFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxPQUFBLEVBQUMsQ0FBQyxFQUFBOztnQkFBdkMsSUFBSSxHQUFRLENBQUEsU0FBMkIsS0FBSSxJQUFJO2dCQUNuRCxJQUFHLElBQUksS0FBSyxJQUFJLEVBQUM7b0JBQ2Isc0JBQU8sR0FBRyxDQUFDLElBQUksQ0FBQzs0QkFDWixPQUFPLEVBQUUsS0FBSzs0QkFDZCxHQUFHLEVBQUUscUJBQXFCO3lCQUM3QixDQUFDLEVBQUE7aUJBQ0w7Z0JBQ0ssSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDO2dCQUV0QixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFBQyxJQUFJLFFBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxJQUFJLE1BQUEsRUFBQyxDQUFDLENBQUM7Z0JBRS9CLEtBQUssR0FBRyxJQUFBLHlCQUFXLEVBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRTFCLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUV4RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFBO2dCQUNsRCxxQkFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUE7O2dCQUFqQixTQUFpQixDQUFDO2dCQUNsQixHQUFHLENBQUMsSUFBSSxDQUFDO29CQUNMLE9BQU8sRUFBRSxJQUFJO29CQUNiLEdBQUcsRUFBRSwyQkFBMkI7aUJBQ25DLENBQUMsQ0FBQTs7OztnQkFHRixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQUssQ0FBQyxDQUFDO2dCQUNuQixzQkFBTyxHQUFHLENBQUMsSUFBSSxDQUFDO3dCQUNaLE9BQU8sRUFBRSxLQUFLO3dCQUNkLEdBQUcsRUFBRSw4QkFBOEI7cUJBQ3RDLENBQUMsRUFBQTs7OztLQUdULENBQUE7QUFFRCxrQkFBZSxNQUFNLENBQUMifQ==