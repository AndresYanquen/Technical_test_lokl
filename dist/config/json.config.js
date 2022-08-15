"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.createToken = void 0;
var jwt = require('jsonwebtoken');
var secret = process.env.JWT_SECRET || "secret";
var createToken = function (user) {
    var expiresIn = 60 * 60;
    var dataStoredInToken = {
        email: user.email,
        code: user.code
    };
    return {
        expiresIn: expiresIn,
        token: jwt.sign(dataStoredInToken, secret, { expiresIn: expiresIn })
    };
};
exports.createToken = createToken;
var verifyToken = function (token) {
    return jwt.verify(token, secret, function (error, decoded) {
        console.log(decoded);
        if (error) {
            console.log('Error fetching data');
        }
        return decoded;
    });
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi5jb25maWcuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb25maWcvanNvbi5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBVWxDLElBQU0sTUFBTSxHQUFZLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQztBQUVwRCxJQUFNLFdBQVcsR0FBRyxVQUFDLElBQVc7SUFDbkMsSUFBTSxTQUFTLEdBQUcsRUFBRSxHQUFDLEVBQUUsQ0FBQztJQUN4QixJQUFNLGlCQUFpQixHQUFzQjtRQUN6QyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7UUFDakIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO0tBQ2xCLENBQUE7SUFDRCxPQUFPO1FBQ0gsU0FBUyxXQUFBO1FBQ1QsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxFQUFHLEVBQUMsU0FBUyxXQUFBLEVBQUMsQ0FBQztLQUMzRCxDQUFDO0FBQ04sQ0FBQyxDQUFBO0FBVlksUUFBQSxXQUFXLGVBVXZCO0FBRU0sSUFBTSxXQUFXLEdBQUcsVUFBQyxLQUFhO0lBQ3JDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQUMsS0FBYSxFQUFFLE9BQVk7UUFDekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixJQUFHLEtBQUssRUFBQztZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUN0QztRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUMsQ0FBQyxDQUFBO0FBRU4sQ0FBQyxDQUFDO0FBVlcsUUFBQSxXQUFXLGVBVXRCIn0=