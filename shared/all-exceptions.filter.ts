import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common"
import type { Response } from "express"

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
	catch(exception: unknown, host: ArgumentsHost): void {
		const ctx = host.switchToHttp()
		const response = ctx.getResponse<Response>()

		let code: number
		let message: string
		let details: any[] = []

		if (exception instanceof HttpException) {
			code = exception.getStatus()
			const res = exception.getResponse()

			if (typeof res === "object" && res !== null && "message" in res) {
				const body = res as Record<string, unknown>
				const rawMessage = body.message

				if (Array.isArray(rawMessage)) {
					message = "Los datos no cumplen el esquema o las validaciones declaradas."
					details = rawMessage
				} else {
					message = typeof rawMessage === "string" ? rawMessage : exception.message
				}
			} else {
				message = exception.message
			}
		} else {
			code = HttpStatus.INTERNAL_SERVER_ERROR
			message = "Error interno del servidor"
			if (exception instanceof Error) {
				details = [exception.message]
			}
		}

		let stringErrorCode = "INTERNAL_SERVER_ERROR"
		if (code === 400) stringErrorCode = "BAD_REQUEST"
		if (code === 404) stringErrorCode = "RESOURCE_NOT_FOUND"
		if (code === 409) stringErrorCode = "CONFLICT"
		if (code === 422) stringErrorCode = "UNPROCESSABLE_ENTITY"

		response.status(code).json({
			error: {
				code: stringErrorCode,
				message: message,
				details: details
			}
		})
	}
}
