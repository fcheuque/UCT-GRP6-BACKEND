"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
let AllExceptionsFilter = class AllExceptionsFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        let code;
        let message;
        let details = [];
        if (exception instanceof common_1.HttpException) {
            code = exception.getStatus();
            const res = exception.getResponse();
            if (typeof res === "object" && res !== null && "message" in res) {
                const body = res;
                const rawMessage = body.message;
                if (Array.isArray(rawMessage)) {
                    message = "Los datos no cumplen el esquema o las validaciones declaradas.";
                    details = rawMessage;
                }
                else {
                    message = typeof rawMessage === "string" ? rawMessage : exception.message;
                }
            }
            else {
                message = exception.message;
            }
        }
        else {
            code = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
            message = "Error interno del servidor";
            if (exception instanceof Error) {
                details = [exception.message];
            }
        }
        let stringErrorCode = "INTERNAL_SERVER_ERROR";
        if (code === 400)
            stringErrorCode = "BAD_REQUEST";
        if (code === 404)
            stringErrorCode = "RESOURCE_NOT_FOUND";
        if (code === 409)
            stringErrorCode = "CONFLICT";
        if (code === 422)
            stringErrorCode = "UNPROCESSABLE_ENTITY";
        response.status(code).json({
            error: {
                code: stringErrorCode,
                message: message,
                details: details
            }
        });
    }
};
exports.AllExceptionsFilter = AllExceptionsFilter;
exports.AllExceptionsFilter = AllExceptionsFilter = __decorate([
    (0, common_1.Catch)()
], AllExceptionsFilter);
//# sourceMappingURL=all-exceptions.filter.js.map