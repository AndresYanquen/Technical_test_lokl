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
var nodemailer_1 = __importDefault(require("nodemailer"));
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var hostname, email, password, transporter, setTemplate, sendEmail;
        var _this = this;
        return __generator(this, function (_a) {
            hostname = "smtp.gmail.com";
            email = process.env.GMAILACCOUNT;
            password = process.env.PASSWORDGMAIL;
            transporter = nodemailer_1.default.createTransport({
                service: 'gmail',
                host: hostname,
                port: 587,
                secure: false,
                requireTLS: true,
                auth: {
                    user: email,
                    pass: password,
                },
                logger: true
            });
            setTemplate = function (name, token) {
                return "\n    <head>\n      <link rel=\"stylesheet\" href=\"./style.css\">\n    </head>\n  \n    <div id=\"email___content\">\n      <h2>Hola ".concat(name, "</h2>\n      <p>Para confirmar tu cuenta, ingresa al siguiente enlace</p>\n      <a\n          href=\"http://localhost:4000/api/user/confirm/").concat(token, "\"\n          target=\"_blank\"\n      >Confirmar Cuenta</a>\n    </div>\n    ");
            };
            sendEmail = function (email, subject, html) { return __awaiter(_this, void 0, void 0, function () {
                var info, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, transporter.sendMail({
                                    from: "CodeTester <".concat(email, ">"),
                                    to: email,
                                    subject: subject,
                                    text: "This is your verification token",
                                    html: html,
                                    headers: { 'x-myheader': 'test header' }
                                })];
                        case 1:
                            info = _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            console.log("Error sending email: ".concat(error_1));
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); };
            return [2 /*return*/];
        });
    });
}
exports.default = main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb25maWcvbWFpbC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwREFBb0M7QUFJcEMsU0FBZSxJQUFJOzs7OztZQUNYLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztZQUM1QixLQUFLLEdBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7WUFDaEMsUUFBUSxHQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFFO1lBRXJDLFdBQVcsR0FBRyxvQkFBVSxDQUFDLGVBQWUsQ0FBQztnQkFDN0MsT0FBTyxFQUFDLE9BQU87Z0JBQ2YsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsSUFBSSxFQUFFLEdBQUc7Z0JBQ1QsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsS0FBSztvQkFDWCxJQUFJLEVBQUUsUUFBUTtpQkFDZjtnQkFDRCxNQUFNLEVBQUUsSUFBSTthQUNiLENBQUMsQ0FBQztZQUVHLFdBQVcsR0FBRyxVQUFDLElBQVcsRUFBRSxLQUFZO2dCQUM1QyxPQUFPLGdKQU1NLElBQUksMEpBR29DLEtBQUssbUZBSXpELENBQUM7WUFDSixDQUFDLENBQUE7WUFHSyxTQUFTLEdBQUcsVUFBTyxLQUFZLEVBQUUsT0FBYyxFQUFFLElBQVE7Ozs7Ozs0QkFFOUMscUJBQU0sV0FBVyxDQUFDLFFBQVEsQ0FBQztvQ0FDdEMsSUFBSSxFQUFFLHNCQUFlLEtBQUssTUFBRztvQ0FDN0IsRUFBRSxFQUFFLEtBQUs7b0NBQ1QsT0FBTyxTQUFBO29DQUNQLElBQUksRUFBRSxpQ0FBaUM7b0NBQ3ZDLElBQUksTUFBQTtvQ0FDSixPQUFPLEVBQUUsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFO2lDQUN6QyxDQUFDLEVBQUE7OzRCQVBJLElBQUksR0FBRyxTQU9YOzs7OzRCQUdBLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQXdCLE9BQUssQ0FBRSxDQUFDLENBQUM7Ozs7O2lCQUVsRCxDQUFBOzs7O0NBR0Y7QUFFRCxrQkFBZSxJQUFJLENBQUMifQ==