"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.createToken = exports.secret = exports.jwt = void 0;
exports.jwt = require('jsonwebtoken');
exports.secret = process.env.JWT_SECRET || "secret";
var createToken = function (user) {
    var expiresIn = 60 * 600;
    var dataStoredInToken = {
        email: user.email,
        code: user.code
    };
    return {
        expiresIn: expiresIn,
        token: exports.jwt.sign(dataStoredInToken, exports.secret, { expiresIn: expiresIn })
    };
};
exports.createToken = createToken;
var verifyToken = function (token) {
    return exports.jwt.verify(token, exports.secret, function (error, decoded) {
        if (error) {
            console.log('Error fetching data');
        }
        return decoded;
    });
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi5jb25maWcuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb25maWcvanNvbi5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRWEsUUFBQSxHQUFHLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBVTlCLFFBQUEsTUFBTSxHQUFZLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQztBQUUzRCxJQUFNLFdBQVcsR0FBRyxVQUFDLElBQVc7SUFDbkMsSUFBTSxTQUFTLEdBQUcsRUFBRSxHQUFDLEdBQUcsQ0FBQztJQUN6QixJQUFNLGlCQUFpQixHQUFzQjtRQUN6QyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7UUFDakIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO0tBQ2xCLENBQUE7SUFDRCxPQUFPO1FBQ0gsU0FBUyxXQUFBO1FBQ1QsS0FBSyxFQUFFLFdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsY0FBTSxFQUFHLEVBQUMsU0FBUyxXQUFBLEVBQUMsQ0FBQztLQUMzRCxDQUFDO0FBQ04sQ0FBQyxDQUFBO0FBVlksUUFBQSxXQUFXLGVBVXZCO0FBRU0sSUFBTSxXQUFXLEdBQUcsVUFBQyxLQUFhO0lBQ3JDLE9BQU8sV0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsY0FBTSxFQUFFLFVBQUMsS0FBYSxFQUFFLE9BQTBCO1FBQ3ZFLElBQUcsS0FBSyxFQUFDO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQyxDQUFDLENBQUE7QUFFTixDQUFDLENBQUM7QUFSVyxRQUFBLFdBQVcsZUFRdEIifQ==