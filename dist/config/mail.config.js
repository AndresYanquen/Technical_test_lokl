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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
var nodemailer_1 = __importDefault(require("nodemailer"));
var Service = /** @class */ (function () {
    function Service() {
        var _this = this;
        this.hostname = "smtp.gmail.com";
        this.email = process.env.GMAILACCOUNT;
        this.password = process.env.PASSWORDGMAIL;
        this.transporter = nodemailer_1.default.createTransport({
            service: 'gmail',
            host: this.hostname,
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: this.email,
                pass: this.password,
            },
            logger: true
        });
        this.setTemplate = function (name, token) {
            return "\n    <head>\n      <link rel=\"stylesheet\" href=\"./style.css\">\n    </head>\n\n    <div id=\"email___content\">\n      <h2>Hello ".concat(name, "</h2>\n      <p>To confirm your account, please</p>\n      <a\n          href=\"http://localhost:4000/api/users/confirm/").concat(token, "\"\n          target=\"_blank\"\n      >Confirmar Cuenta</a>\n    </div>\n    ");
        };
        this.notificationEmail = function (name, email) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, "\n    <head>\n    <link rel=\"stylesheet\" href=\"./style.css\">\n    </head>\n\n    <div id=\"email___content\">\n    <h2>Hello admin!</h2>\n    <p>This user has verified the email:</p>\n    <p>name: ".concat(name, "</p>\n    <p>email: ").concat(email, "</p>\n    </div>\n    ")];
            });
        }); };
        this.sendEmail = function (email, subject, html) { return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.transporter.sendMail({
                                from: "CodeTester <".concat(email, ">"),
                                to: email,
                                subject: subject,
                                html: html,
                                headers: { 'x-myheader': 'test header' }
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log("Error sending email: ".concat(error_1));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
    }
    return Service;
}());
exports.MailService = new Service();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb25maWcvbWFpbC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMERBQW9DO0FBRXBDO0lBQUE7UUFBQSxpQkFpRUM7UUFoRVMsYUFBUSxHQUFHLGdCQUFnQixDQUFDO1FBQzVCLFVBQUssR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQztRQUNqQyxhQUFRLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7UUFFckMsZ0JBQVcsR0FBRyxvQkFBVSxDQUFDLGVBQWUsQ0FBQztZQUMvQyxPQUFPLEVBQUMsT0FBTztZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUTtZQUNuQixJQUFJLEVBQUUsR0FBRztZQUNULE1BQU0sRUFBRSxLQUFLO1lBQ2IsVUFBVSxFQUFFLElBQUk7WUFDaEIsSUFBSSxFQUFFO2dCQUNGLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDaEIsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQ3RCO1lBQ0QsTUFBTSxFQUFFLElBQUk7U0FDYixDQUFDLENBQUM7UUFFSSxnQkFBVyxHQUFHLFVBQUMsSUFBWSxFQUFFLEtBQWE7WUFDL0MsT0FBTywrSUFNTyxJQUFJLHFJQUdvQyxLQUFLLG1GQUkxRCxDQUFDO1FBQ0osQ0FBQyxDQUFDO1FBRUssc0JBQWlCLEdBQUcsVUFBTyxJQUFZLEVBQUUsS0FBWTs7Z0JBQzFELHNCQUFPLG1OQVFJLElBQUksaUNBQ0gsS0FBSywyQkFFaEIsRUFBQzs7YUFDSCxDQUFBO1FBR00sY0FBUyxHQUFHLFVBQU8sS0FBYSxFQUFFLE9BQWUsRUFBRSxJQUFZOzs7Ozs7d0JBRWhFLHFCQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO2dDQUNoQyxJQUFJLEVBQUUsc0JBQWUsS0FBSyxNQUFHO2dDQUM3QixFQUFFLEVBQUUsS0FBSztnQ0FDVCxPQUFPLFNBQUE7Z0NBQ1AsSUFBSSxNQUFBO2dDQUNKLE9BQU8sRUFBRSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUU7NkJBQ3pDLENBQUMsRUFBQTs7d0JBTkEsU0FNQSxDQUFDOzs7O3dCQUdELE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQXdCLE9BQUssQ0FBRSxDQUFDLENBQUM7Ozs7O2FBRWxELENBQUM7SUFDSixDQUFDO0lBQUQsY0FBQztBQUFELENBQUMsQUFqRUQsSUFpRUM7QUFFWSxRQUFBLFdBQVcsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDIn0=