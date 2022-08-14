"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = __importStar(require("jsonwebtoken"));
var createToken = function (user) {
    var expiresIn = 60 * 60;
    var secret = process.env.JWT_SECRET;
    var dataStoredInToken = {
        _id: user.email,
    };
    return {
        expiresIn: expiresIn,
        token: jwt.sign(dataStoredInToken, secret, { expiresIn: expiresIn })
    };
};
var verifyToken = function (token) {
    jwt.verify(token, process.env.JWT_SECRET);
    return false;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi5jb25maWcuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb25maWcvanNvbi5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLGdEQUFvQztBQTBCcEMsSUFBTSxXQUFXLEdBQUcsVUFBQyxJQUFhO0lBQzlCLElBQU0sU0FBUyxHQUFHLEVBQUUsR0FBQyxFQUFFLENBQUM7SUFDeEIsSUFBTSxNQUFNLEdBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFDMUMsSUFBTSxpQkFBaUIsR0FBc0I7UUFDekMsR0FBRyxFQUFDLElBQUksQ0FBQyxLQUFLO0tBQ2pCLENBQUE7SUFDRCxPQUFPO1FBQ0gsU0FBUyxXQUFBO1FBQ1QsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxFQUFHLEVBQUMsU0FBUyxXQUFBLEVBQUMsQ0FBQztLQUMzRCxDQUFDO0FBQ04sQ0FBQyxDQUFBO0FBRUQsSUFBTSxXQUFXLEdBQUcsVUFBQyxLQUFZO0lBQzdCLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFFLENBQUE7SUFDekMsT0FBTyxLQUFLLENBQUE7QUFDaEIsQ0FBQyxDQUFBIn0=