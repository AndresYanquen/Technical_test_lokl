"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express")); //<>
var db_config_1 = __importDefault(require("./config/db.config"));
require('dotenv').config();
var user_routes_1 = __importDefault(require("./routes/user.routes"));
var router = (0, express_1.default)();
var PORT = process.env.PORT || 3000;
(0, db_config_1.default)();
router.use(express_1.default.json());
router.use(express_1.default.urlencoded({ extended: false }));
router.use('/api/users', user_routes_1.default);
/* router.get('/', (req: any, res:any) => {
    res.send("Hello world")
}); */
router.listen(PORT, function () {
    console.log("App is running on http://localhost:".concat(PORT));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0RBQTJDLENBQUUsSUFBSTtBQUNqRCxpRUFBMkM7QUFDM0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBQzFCLHFFQUEwQztBQUUxQyxJQUFNLE1BQU0sR0FBWSxJQUFBLGlCQUFPLEdBQUUsQ0FBQztBQUVsQyxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7QUFDdEMsSUFBQSxtQkFBUyxHQUFFLENBQUM7QUFHWixNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUMzQixNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsVUFBVSxDQUFDLEVBQUMsUUFBUSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztBQUNsRCxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxxQkFBTSxDQUFDLENBQUM7QUFDakM7O01BRU07QUFFTixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLDZDQUFzQyxJQUFJLENBQUUsQ0FBQyxDQUFDO0FBQzlELENBQUMsQ0FBQyxDQUFDIn0=