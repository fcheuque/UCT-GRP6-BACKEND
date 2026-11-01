"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = void 0;
class ApiResponse {
    constructor(statusCode, success, message, timestamp, data = null, error, errors) {
        this.statusCode = statusCode;
        this.success = success;
        this.message = message;
        this.timestamp = timestamp;
        this.data = data;
        this.error = error;
        this.errors = errors;
    }
}
exports.ApiResponse = ApiResponse;
//# sourceMappingURL=response.js.map