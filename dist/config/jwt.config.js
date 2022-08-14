"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getToken = function (payload) {
    return jwt.sign({
        data: payload
    }, 'SECRET', { expiresIn: '1h' });
};
var getTokenData = function (token) {
    var data = null;
    jwt.verify(token, 'SECRET', function (err, decoded) {
        if (err) {
            console.log();
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImNvbmZpZy9qd3QuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsSUFBTSxRQUFRLEdBQUcsVUFBQyxPQUFXO0lBQ3pCLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQztRQUNaLElBQUksRUFBRSxPQUFPO0tBQ2hCLEVBQUUsUUFBUSxFQUFFLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFBO0FBRUQsSUFBTSxZQUFZLEdBQUcsVUFBQyxLQUFTO0lBQzNCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztJQUNoQixHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBQyxHQUFPLEVBQUUsT0FBVztRQUM3QyxJQUFHLEdBQUcsRUFBQztZQUNILE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNqQjtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFBIn0=