"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.createToken = void 0;
var jwt = require('jsonwebtoken');
var secret = process.env.JWT_SECRET;
var createToken = function (user) {
    var expiresIn = 60 * 60;
    var dataStoredInToken = {
        _id: user.email,
    };
    return {
        expiresIn: expiresIn,
        token: jwt.sign(dataStoredInToken, secret, { expiresIn: expiresIn })
    };
};
exports.createToken = createToken;
var verifyToken = function (token) {
    jwt.verify(token, secret, function (error, decoded) {
        var data = null;
        if (error) {
            console.log('Error fetching data');
        }
        else {
            data = decoded;
        }
    });
    return false;
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi5jb25maWcuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb25maWcvanNvbi5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBc0JsQyxJQUFNLE1BQU0sR0FBWSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztBQUkvQyxJQUFNLFdBQVcsR0FBRyxVQUFDLElBQWE7SUFDOUIsSUFBTSxTQUFTLEdBQUcsRUFBRSxHQUFDLEVBQUUsQ0FBQztJQUN4QixJQUFNLGlCQUFpQixHQUFzQjtRQUN6QyxHQUFHLEVBQUMsSUFBSSxDQUFDLEtBQUs7S0FDakIsQ0FBQTtJQUNELE9BQU87UUFDSCxTQUFTLFdBQUE7UUFDVCxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLEVBQUcsRUFBQyxTQUFTLFdBQUEsRUFBQyxDQUFDO0tBQzNELENBQUM7QUFDTixDQUFDLENBQUE7QUFjTyxrQ0FBVztBQVpuQixJQUFNLFdBQVcsR0FBRyxVQUFDLEtBQVk7SUFDN0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQUMsS0FBWSxFQUFFLE9BQVc7UUFDaEQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUcsS0FBSyxFQUFDO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ3RDO2FBQUk7WUFDRCxJQUFJLEdBQUcsT0FBTyxDQUFDO1NBQ2xCO0lBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDRixPQUFPLEtBQUssQ0FBQTtBQUNoQixDQUFDLENBQUE7QUFFb0Isa0NBQVcifQ==